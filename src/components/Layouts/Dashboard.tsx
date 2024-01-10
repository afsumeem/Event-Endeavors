import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { MdEvent } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { MdEventRepeat } from "react-icons/md";
import { MdOutlineManageHistory } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import {
  Navbar,
  NavbarContent,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row h-screen">
        {/* Sidebar component */}
        <div className="w-64 z-40">
          <div>
            <aside
              style={{ height: "100vh" }}
              className="w-64 absolute  bg-gray-800 shadow md:h-full flex-col sm:flex hidden md:block"
            >
              {/* Sidebar Links */}

              <div className="px-8">
                <div className="h-16 w-full flex items-center border-b border-gray-700">
                  <h2 className="text-[#fd614a] uppercase">Event Endeavors</h2>
                </div>
                <ul className="mt-12">
                  <li className="flex w-full justify-between 0 cursor-pointer items-center mb-6">
                    <Link
                      href="/dashboard"
                      className="flex items-center focus:outline-none p-1 focus:ring-1 focus:ring-white text-white"
                    >
                      <MdEvent />
                      <span className="text-sm ml-2">Dashboard</span>
                    </Link>
                  </li>
                  <li className="flex w-full justify-between 0 cursor-pointer items-center mb-6">
                    <Link
                      href="/dashboard/addNewEvent"
                      className="flex items-center focus:outline-none p-1 focus:ring-1 focus:ring-white text-white"
                    >
                      <MdEvent />
                      <span className="text-sm ml-2">Add New Event</span>
                    </Link>
                  </li>
                  <li className="flex w-full justify-between cursor-pointer items-center mb-6">
                    <Link
                      href="/dashboard/manageGuest"
                      className="flex items-center focus:outline-none p-1 focus:ring-1 text-white focus:ring-white"
                    >
                      <MdManageAccounts />
                      <span className="text-sm ml-2">Manage Guest</span>
                    </Link>
                  </li>
                  <li className="flex w-full justify-between cursor-pointer items-center mb-6">
                    <Link
                      href="/dashboard/manageEvent"
                      className="flex items-center focus:outline-none p-1 focus:ring-1 text-white focus:ring-white"
                    >
                      <MdEventRepeat />
                      <span className="text-sm ml-2">Manage Events</span>
                    </Link>
                  </li>
                </ul>
                <div className="flex justify-center mt-20 mb-4 w-full">
                  <div className="relative">
                    <div className="text-gray-300 absolute ml-4 inset-0 m-auto w-4 h-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-search"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <circle cx="10" cy="10" r="7"></circle>
                        <line x1="21" y1="21" x2="15" y2="15"></line>
                      </svg>
                    </div>
                    <input
                      className="bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-100 rounded w-full text-sm text-gray-300 placeholder-gray-400  pl-10 py-2"
                      type="text"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>
              <div className="px-8 border-t border-gray-700">
                <ul className="w-full flex items-center justify-between bg-gray-800">
                  <li className="cursor-pointer text-white pt-5 pb-3">
                    <button
                      aria-label="open logs"
                      className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
                    >
                      <FaHome />
                    </button>
                  </li>
                  <li className="cursor-pointer text-white pt-5 pb-3">
                    <button
                      aria-label="open logs"
                      className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
                    >
                      <MdEventAvailable />
                    </button>
                  </li>

                  <li className="cursor-pointer text-white pt-5 pb-3">
                    <button
                      aria-label="open logs"
                      className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
                    >
                      <FaRegUser />
                    </button>
                  </li>
                  <li className="cursor-pointer text-white pt-5 pb-3">
                    <button
                      aria-label="open logs"
                      className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
                    >
                      <IoIosLogOut />
                    </button>
                  </li>
                </ul>
              </div>
            </aside>

            {/*  */}

            {/* <button className="block md:hidden" onClick={toggleDropdown}>
        open sidebar
        <IoIosArrowDown size={24} />
      </button> */}

            {isDropdownOpen && (
              <aside
                style={{ height: "100vh" }}
                className="w-64 absolute  bg-gray-800 shadow md:h-full flex-col sm:flex block md:hidden"
              >
                {/* Sidebar Links */}

                <div className="px-8">
                  <div className="h-16 w-full flex items-center border-b border-gray-700">
                    <h2 className="text-[#fd614a] uppercase">
                      Event Endeavors
                    </h2>
                  </div>
                  <ul className="mt-12">
                    <li className="flex w-full justify-between 0 cursor-pointer items-center mb-6">
                      <Link
                        href="/dashboard"
                        className="flex items-center focus:outline-none p-1 focus:ring-1 focus:ring-white text-white"
                      >
                        <MdEvent />
                        <span className="text-sm ml-2">Dashboard</span>
                      </Link>
                    </li>
                    <li className="flex w-full justify-between 0 cursor-pointer items-center mb-6">
                      <Link
                        href="/dashboard/addNewEvent"
                        className="flex items-center focus:outline-none p-1 focus:ring-1 focus:ring-white text-white"
                      >
                        <MdEvent />
                        <span className="text-sm ml-2">Add New Event</span>
                      </Link>
                    </li>
                    <li className="flex w-full justify-between cursor-pointer items-center mb-6">
                      <Link
                        href="/dashboard/manageGuest"
                        className="flex items-center focus:outline-none p-1 focus:ring-1 text-white focus:ring-white"
                      >
                        <MdManageAccounts />
                        <span className="text-sm ml-2">Manage Guest</span>
                      </Link>
                    </li>
                    <li className="flex w-full justify-between cursor-pointer items-center mb-6">
                      <Link
                        href="/dashboard/manageEvent"
                        className="flex items-center focus:outline-none p-1 focus:ring-1 text-white focus:ring-white"
                      >
                        <MdEventRepeat />
                        <span className="text-sm ml-2">Manage Events</span>
                      </Link>
                    </li>
                  </ul>
                  <div className="flex justify-center mt-20 mb-4 w-full">
                    <div className="relative">
                      <div className="text-gray-300 absolute ml-4 inset-0 m-auto w-4 h-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-search"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z"></path>
                          <circle cx="10" cy="10" r="7"></circle>
                          <line x1="21" y1="21" x2="15" y2="15"></line>
                        </svg>
                      </div>
                      <input
                        className="bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-100 rounded w-full text-sm text-gray-300 placeholder-gray-400  pl-10 py-2"
                        type="text"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-8 border-t border-gray-700">
                  <ul className="w-full flex items-center justify-between bg-gray-800">
                    <li className="cursor-pointer text-white pt-5 pb-3">
                      <button
                        aria-label="open logs"
                        className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
                      >
                        <FaHome />
                      </button>
                    </li>
                    <li className="cursor-pointer text-white pt-5 pb-3">
                      <button
                        aria-label="open logs"
                        className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
                      >
                        <MdEventAvailable />
                      </button>
                    </li>

                    <li className="cursor-pointer text-white pt-5 pb-3">
                      <button
                        aria-label="open logs"
                        className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
                      >
                        <FaRegUser />
                      </button>
                    </li>
                    <li className="cursor-pointer text-white pt-5 pb-3">
                      <button
                        aria-label="open logs"
                        className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
                      >
                        <IoIosLogOut />
                      </button>
                    </li>
                  </ul>
                </div>
              </aside>
            )}

            {/* dashboard home page */}
          </div>
        </div>

        {/* Main content */}
        <main className="w-2/3  bg-[#fff9f8]  ">
          {/* Your page content goes here */}
          <Navbar isBordered>
            <Button
              aria-label="toggle sidebar"
              id="openSideBar"
              className="flex md:hidden h-10 w-10 bg-[#fd614a]    shadow rounded-tr rounded-br justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 rounded text-white focus:ring-[#fd614a]"
              onClick={toggleDropdown}
            >
              <FiMenu size={20} />
            </Button>
            <NavbarContent as="div" className="items-center" justify="end">
              <Input
                classNames={{
                  base: "max-w-full sm:max-w-[10rem] h-10",
                  mainWrapper: "h-full",
                  input: "text-small",
                  inputWrapper:
                    "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                }}
                placeholder="Type to search..."
                size="sm"
                startContent={<CiSearch />}
                type="search"
              />
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name="Jason Hughes"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">zoey@example.com</p>
                  </DropdownItem>
                  <DropdownItem key="settings">My Settings</DropdownItem>
                  <DropdownItem key="team_settings">Team Settings</DropdownItem>
                  <DropdownItem key="analytics">Analytics</DropdownItem>
                  <DropdownItem key="system">System</DropdownItem>
                  <DropdownItem key="configurations">
                    Configurations
                  </DropdownItem>
                  <DropdownItem key="help_and_feedback">
                    Help & Feedback
                  </DropdownItem>
                  <DropdownItem key="logout" color="danger">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarContent>
          </Navbar>

          {children}
        </main>
      </div>
    </>
  );
};

export default Dashboard;
