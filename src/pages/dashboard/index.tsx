import React, { useState } from "react";
import {
  IoIosHome,
  IoIosArrowDown,
  IoIosAnalytics,
  IoIosDocument,
  IoIosSettings,
  IoIosPerson,
} from "react-icons/io";
const DashboardUI = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
      <aside className="w-64  h-[600px] bg-gray-200">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-2xl font-semibold text-center">
            Event Endeavors
          </h1>
        </div>

        {/* Sidebar Links */}
        <nav className="p-4">
          {/* Breadcrumb for small devices */}
          <div className="md:hidden flex items-center justify-between">
            <button className="text-white" onClick={toggleDropdown}>
              <IoIosArrowDown size={24} />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-32 left-0 bg-gray-200 p-2 mt-2">
                {/* Dropdown menu links */}
                <a
                  href="/home"
                  className="block py-2 px-4 text-sm hover:bg-gray-300"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm hover:bg-gray-300"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm hover:bg-gray-300"
                >
                  Analytics
                </a>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm hover:bg-gray-300"
                >
                  Documents
                </a>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm hover:bg-gray-300"
                >
                  Settings
                </a>
              </div>
            )}
          </div>

          {/* Sidebar links for medium and larger devices */}
          <div className="hidden md:block">
            <a href="#" className="flex py-2 px-4 text-sm hover:bg-gray-300">
              <IoIosHome size={20} className="mr-2" />
              Home
            </a>
            <a href="#" className="flex py-2 px-4 text-sm hover:bg-gray-300">
              <IoIosAnalytics size={20} className="mr-2" />
              Dashboard
            </a>
            <a
              href="dashboard/addNewEvent"
              className="flex py-2 px-4 text-sm hover:bg-gray-300"
            >
              <IoIosDocument size={20} className="mr-2" />
              Add New Event
            </a>
            <a
              href="#"
              className="flex py-2 px-4 m-0 text-sm hover:bg-gray-300"
            >
              <IoIosSettings size={20} className="mr-2" />
              Mange Guests
            </a>
            <a href="#" className="flex py-2 px-4 text-sm hover:bg-gray-300">
              <IoIosPerson size={20} className="mr-2" />
              Update Profile
            </a>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default DashboardUI;
