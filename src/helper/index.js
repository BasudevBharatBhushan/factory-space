import { firebaseCreds, adminCred } from "../constants";
import { SignJWT, jwtVerify } from "jose";

// Destructure firebase creds
const { API_KEY, ID_TOKEN, PROJECT_ID, BASE_URL, REFRESH_TOKEN, JWT_SECRET } =
  firebaseCreds;

const jwtSecret = new TextEncoder().encode(JWT_SECRET);

// Function to refresh ID token
const refreshIDToken = async () => {
  try {
    const response = await fetch(
      `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: REFRESH_TOKEN,
        }),
      }
    );

    if (!response.ok) {
      console.log("Error: ", response.statusText);
    }

    const data = await response.json();
    const idToken = data.id_token;

    const token = await new SignJWT({ idToken })
      .setProtectedHeader({ alg: "HS256" })
      .sign(jwtSecret);

    localStorage.setItem("idToken", token);

    return idToken;
  } catch (error) {
    console.error("Failed to refresh ID token:", error);
  }
};

// Function to get the ID token from JWT stored in local storage
const getIDTokenFromLocalStorage = async () => {
  try {
    const token = localStorage.getItem("idToken");
    if (!token) {
      console.log("No ID Token found in local storage");
      return null;
    }

    const { payload } = await jwtVerify(token, jwtSecret);
    return payload.idToken;
  } catch (error) {
    console.error("Failed to get ID token from local storage:", error);
    return null;
  }
};

// Function to post new data
const postData = async (data) => {
  try {
    const jsonPaylod = {
      fields: data,
    };

    const idToken = await refreshIDToken();
    const response = await fetch(
      `${BASE_URL}/projects/${PROJECT_ID}/databases/(default)/documents/factory-space-ai-user`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${idToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonPaylod),
      }
    );

    if (!response.ok) {
      console.log("Error: ", response.statusText);
    }

    const responseData = await response.json();
    console.log("1", responseData);
    const documentId = responseData.name.split("/").pop();

    const token = await new SignJWT({ documentId })
      .setProtectedHeader({ alg: "HS256" })
      .sign(jwtSecret);

    localStorage.setItem("documentId", token);

    return responseData;
  } catch (error) {
    console.error("Failed to post data:", error);
  }
};

// Function to patch data
const patchData = async (data) => {
  try {
    const jsonPaylod = {
      fields: data,
    };

    let idToken = await getIDTokenFromLocalStorage();

    if (!idToken) {
      idToken = await refreshIDToken();
    }

    const documentIdToken = localStorage.getItem("documentId");

    if (!documentIdToken) {
      console.log("No document ID found in local storage");
      return null;
    }

    const { payload } = await jwtVerify(documentIdToken, jwtSecret);
    const documentId = payload.documentId;

    const response = await fetch(
      `${BASE_URL}/projects/${PROJECT_ID}/databases/(default)/documents/factory-space-ai-user/${documentId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${idToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonPaylod),
      }
    );

    if (!response.ok) {
      console.log("Error: ", response.statusText);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Failed to patch data:", error);
  }
};

// Function to get data
const getData = async (designation) => {
  try {
    const jsonPayload = {
      structuredQuery: {
        from: [
          {
            collectionId: "factory-space-ai-user",
          },
        ],
        where: {
          fieldFilter: {
            field: {
              fieldPath: "designation",
            },
            op: "EQUAL",
            value: {
              stringValue: designation,
            },
          },
        },
      },
    };

    const fetchData = async (token) => {
      const response = await fetch(
        `${BASE_URL}/projects/${PROJECT_ID}/databases/(default)/documents:runQuery`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonPayload),
        }
      );

      if (response.status === 401) {
        throw new Error("Token expired");
      }

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      return response.json();
    };

    let idToken = await getIDTokenFromLocalStorage();

    try {
      if (!idToken) {
        throw new Error("No token found");
      }
      const data = await fetchData(idToken);
      return formatResponse(data);
    } catch (error) {
      if (
        error.message === "Token expired" ||
        error.message === "No token found"
      ) {
        idToken = await refreshIDToken();
        const data = await fetchData(idToken);
        return formatResponse(data);
      } else {
        console.error("Failed to get data:", error);
        return [];
      }
    }
  } catch (error) {
    console.error("Failed to get data:", error);
    return [];
  }
};

const formatResponse = (data) => {
  if (!Array.isArray(data) || data.length === 0) {
    return [];
  }

  return data
    .map((item) => {
      const fields = item.document?.fields;
      if (fields) {
        const formattedItem = {};
        for (const key in fields) {
          formattedItem[key] = fields[key].stringValue || "";
        }
        return formattedItem;
      }
      return null;
    })
    .filter((item) => item !== null);
};

const adminLogin = async (loginInfo) => {
  try {
    const { userId, password } = loginInfo;

    if (userId === adminCred.userId && password === adminCred.password) {
      //Create a JWT token
      const token = await new SignJWT({ userId: userId })
        .setProtectedHeader({ alg: "HS256" })
        .sign(jwtSecret);

      localStorage.setItem("adminToken", token);

      console.log("Logged in as admin");

      return true;
    } else {
      localStorage.removeItem("adminToken");
      return false;
    }
  } catch (error) {
    console.error("Failed to login:", error);
    return false;
  }
};

const isAdmin = async () => {
  const token = localStorage.getItem("adminToken");
  if (!token) {
    return false;
  }

  try {
    // Verify Token
    const { payload } = await jwtVerify(token, jwtSecret);

    if (payload.userId === adminCred.userId) {
      return true;
    } else {
      localStorage.removeItem("adminToken");
      return false;
    }
  } catch (error) {
    localStorage.removeItem("adminToken");
    console.error("Token verification failed:", error);
    return false;
  }
};

export { refreshIDToken, postData, patchData, getData, isAdmin, adminLogin };
