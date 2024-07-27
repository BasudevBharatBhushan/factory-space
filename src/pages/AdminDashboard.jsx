import { useMemo, useState, useEffect } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { getData } from "../helper";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const AdminDashboard = () => {
  const [viewType, setViewType] = useState("Manufacturer");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const manufacturerColumns = useMemo(
    () => [
      { accessorKey: "designation", header: "Designation", size: 150 },
      { accessorKey: "companyName", header: "Company Name", size: 150 },
      { accessorKey: "businessEmail", header: "Business Email", size: 200 },
      { accessorKey: "industrySector", header: "Industry Sector", size: 150 },
      { accessorKey: "ownedMachines", header: "Owned Machines", size: 150 },
      {
        accessorKey: "machineUtilizationRate",
        header: "Machine Utilization Rate",
        size: 150,
      },
      {
        accessorKey: "leasingPreference",
        header: "Leasing Preference",
        size: 150,
      },
      {
        accessorKey: "preferredPricingModel",
        header: "Preferred Pricing Model",
        size: 150,
      },
      {
        accessorKey: "additionalFeedback",
        header: "Additional Feedback",
        size: 150,
      },
    ],
    []
  );

  const traderColumns = useMemo(
    () => [
      { accessorKey: "designation", header: "Designation", size: 150 },
      { accessorKey: "companyName", header: "Company Name", size: 150 },
      { accessorKey: "businessEmail", header: "Business Email", size: 200 },
      { accessorKey: "industrySector", header: "Industry Sector", size: 150 },
      {
        accessorKey: "productsToManufacture",
        header: "Products to Manufacture",
        size: 150,
      },
      {
        accessorKey: "essentialMachines",
        header: "Essential Machines",
        size: 150,
      },
      {
        accessorKey: "machineUsageFrequency",
        header: "Machine Usage Frequency",
        size: 150,
      },
      { accessorKey: "pricingModel", header: "Pricing Model", size: 150 },
      {
        accessorKey: "valueAddedServices",
        header: "Value Added Services",
        size: 150,
      },
      {
        accessorKey: "additionalFeedback",
        header: "Additional Feedback",
        size: 150,
      },
    ],
    []
  );

  const columns =
    viewType === "Manufacturer" ? manufacturerColumns : traderColumns;

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData(
        viewType === "Manufacturer" ? "Manufacturer" : "Trader"
      );

      setData(response);
    };

    fetchData();
    //add a delay of 1 second to simulate loading
    setIsLoading(false);

    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 500);
  }, [viewType]);

  const table = useMaterialReactTable({
    columns,
    data,
  });

  return (
    <>
      {isLoading && (
        <div className=" absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-gray-400 font-semibold ">
          Loading records...
        </div>
      )}
      <div
        className={`flex flex-col w-full h-[100vh] border p-4 ${
          isLoading ? "blur-md" : ""
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-sm lg:text-2xl font-bold font-Raleway">
            FACTORY SPACE AI
          </h1>
          <div>
            <button
              className={`px-4 py-2 mr-2 rounded-md ${
                viewType === "Manufacturer"
                  ? "bg-gray-400 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => {
                setIsLoading(true);
                setViewType("Manufacturer");
              }}
            >
              Manufacturer
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                viewType === "Trader" ? "bg-gray-400 text-white" : "bg-gray-200"
              }`}
              onClick={() => {
                setIsLoading(true);
                setViewType("Trader");
              }}
            >
              Trader
            </button>
          </div>
        </div>
        <div className="flex-grow">
          <MaterialReactTable table={table} />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
