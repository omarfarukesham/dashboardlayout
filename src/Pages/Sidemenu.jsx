import { useState } from "react";


const Sidemenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar Icon */}
      <div
        className="bg-blue-500 text-white py-2 px-3 cursor-pointer"
        onClick={handleSidebarToggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path
            fillRule="evenodd"
            d="M2 5.75C2 5.33579 2.33579 5 2.75 5H21.25C21.6642 5 22 5.33579 22 5.75C22 6.16421 21.6642 6.5 21.25 6.5H2.75C2.33579 6.5 2 6.16421 2 5.75ZM2.75 11.25C2.33579 11.25 2 11.5858 2 12C2 12.4142 2.33579 12.75 2.75 12.75H21.25C21.6642 12.75 22 12.4142 22 12C22 11.5858 21.6642 11.25 21.25 11.25H2.75ZM2 18.25C2 17.8358 2.33579 17.5 2.75 17.5H21.25C21.6642 17.5 22 17.8358 22 18.25C22 18.6642 21.6642 19 21.25 19H2.75C2.33579 19 2 18.6642 2 18.25Z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Collapsible Sidebar */}
      {isSidebarOpen && (
        <div className="w-64 bg-darkblue text-white">
          {/* Sidebar content goes here */}
          <ul className="py-4">
            <li className="px-4 py-2">Dashboard</li>
            <li className="px-4 py-2">Orders</li>
            <li className="px-4 py-2">Customers</li>
            <li className="px-4 py-2">Blog</li>
            {/* Add more sidebar items */}
          </ul>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-grow bg-white">
        {/* Main content goes here */}
        <h1 className="text-2xl font-bold py-4 px-6">Admin Dashboard</h1>
        <div className="p-6">
          {/* Add your dashboard content */}
        </div>
      </div>
    </div>
  );
};

export default Sidemenu;
