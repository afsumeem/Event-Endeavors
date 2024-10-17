import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import styles from "../../styles/Header.module.css";
import React, { useEffect, useState } from "react";
// import { useSession, signIn, signOut } from "next-auth/react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  // NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownMenu,
  Avatar,
  Dropdown,
  DropdownTrigger,
} from "@nextui-org/react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import auth from "@/firebase/firebase.auth";

//

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Header: React.FC = () => {
  const [signOut, loading, error] = useSignOut(auth);

  const [user] = useAuthState(auth);
  //

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const calculateTimeRemaining = (): TimeRemaining => {
    const now = new Date().getTime();
    const difference = new Date("January 31, 2024 23:59:59").getTime() - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(
    calculateTimeRemaining()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // Run effect only once on mount

  return (
    <>
      {/* top bar */}

      <div
        className={`${styles.topBarContainer} flex justify-around flex-col md:flex-row items-center`}
      >
        <h4 className="flex items-center gap-1 ">
          {" "}
          <BsTelephone /> <span> +8801723456789</span>
        </h4>
        <div className={styles.topBar}>
          {/* <h4>Upcoming Event</h4> */}
          {/* event timer */}
          {/* <div className={styles.eventTime}>
            <div className={styles.countdownBox}>
              <div className={styles.countdownValue}>{timeRemaining.days}</div>
            </div>
            <div className="text-white"> : </div>
            <div className={styles.countdownBox}>
              <div className={styles.countdownValue}>{timeRemaining.hours}</div>
            </div>
            <div className="text-white"> : </div>
            <div className={styles.countdownBox}>
              <div className={styles.countdownValue}>
                {timeRemaining.minutes}
              </div>
            </div>
            <div className="text-white"> : </div>
            <div className={styles.countdownBox}>
              {" "}
              <div className={styles.countdownValue}>
                {timeRemaining.seconds}
              </div>
            </div>
          </div> */}

          {/* event timer */}

          <Button as={Link} href="/events" className="bg-inherit text-white">
            View Event
          </Button>
        </div>
        <h4 className="flex items-center gap-1 ">
          <MdOutlineEmail /> <span> admin@event.com</span>
        </h4>
      </div>

      {/* navigation bar */}

      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className=" w-full"
      >
        <NavbarContent justify="start" className="ml-auto">
          <NavbarBrand>
            <p className="font-bold text-xl text-[#fd614a]">Event Endeavors</p>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden md:flex gap-2" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/about">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/events" aria-current="page">
              Events
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/venues">
              Venues
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/customerReview">
              Reviews
            </Link>
          </NavbarItem>
          {/* <NavbarItem>
            <Link color="foreground" href="/contact">
              Contact
            </Link>
          </NavbarItem> */}
          {user?.email && (
            <NavbarItem>
              <Link color="foreground" href="/eventTicket">
                My Tickets
              </Link>
            </NavbarItem>
          )}
        </NavbarContent>

        {/*  */}
        <NavbarContent className="md:hidden" justify="end">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>

        <NavbarMenu className="mt-2 pt-16 h-auto w-1/2">
          <NavbarItem>
            <Link color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/about">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/events" aria-current="page">
              Events
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="venues">
              Venues
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/reviews">
              Reviews
            </Link>
          </NavbarItem>
          {/* <NavbarItem>
            <Link color="foreground" href="/contact">
              Contact
            </Link>
          </NavbarItem> */}
          {user?.email && (
            <NavbarItem>
              <Link color="foreground" href="/eventTicket">
                My Tickets
              </Link>
            </NavbarItem>
          )}

          {!user?.email && (
            <>
              <NavbarItem>
                <Link className="text-[#fd614a]" href="/login">
                  Login
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link className="text-[#fd614a]" href="/signup">
                  SignUp
                </Link>
              </NavbarItem>
            </>
          )}
        </NavbarMenu>
        {/*  */}

        {user?.email ? (
          <NavbarContent as="div" justify="end">
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
                  <p className="">Signed in as</p>
                  <p className="font-semibold text-[#fd614a]">{user?.email}</p>
                </DropdownItem>
                <DropdownItem key="settings">
                  <Link href="/profile" color="foreground">
                    Profile
                  </Link>
                </DropdownItem>
                <DropdownItem key="settings">
                  <Link href="/dashboard" color="foreground">
                    Dashboard
                  </Link>
                </DropdownItem>

                <DropdownItem key="logout" color="danger">
                  <Button
                    className="text-[#fd614a]"
                    onClick={() => signOut()}
                    variant="flat"
                  >
                    Logout
                  </Button>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
        ) : (
          <NavbarContent className="hidden md:flex " justify="end">
            <NavbarItem>
              <Link href="/login" className="text-[#fd614a]">
                Login
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={Link}
                className="text-[#fd614a]"
                href="/signup"
                variant="flat"
              >
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
        )}
      </Navbar>
    </>
  );
};

export default Header;
