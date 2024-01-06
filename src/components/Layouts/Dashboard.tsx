import DashboardUI from "@/pages/dashboard";
import {
  Link,
  Navbar,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import React, { useState } from "react";
import {
  IoIosHome,
  IoIosArrowDown,
  IoIosAnalytics,
  IoIosDocument,
  IoIosSettings,
  IoIosPerson,
} from "react-icons/io";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="flex">
      {/* <Navbar>
        <NavbarMenu>
          <NavbarMenuItem>
            <NavbarItem>
              <Link color="foreground" href="/dashboard/addNewEvent">
                Add New Event
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="/about">
                About
              </Link>
            </NavbarItem>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar> */}
      {/* Sidebar Content */}
      <div>
        <DashboardUI />
      </div>

      <div className="pt-16  w-full">
        <hr />
        <div className=" mt-10">{children}</div>
      </div>
    </div>
  );
};

export default Dashboard;
