import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import styles from "../../styles/Header.module.css";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Header: React.FC = () => {
  const { data: session } = useSession();

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
      <div>
        {/* top bar */}

        <div
          className={`${styles.topBarContainer} flex justify-around flex-col md:flex-row items-center`}
        >
          <h4 className="flex items-center gap-1 ">
            {" "}
            <BsTelephone /> <span> +8801723456789</span>
          </h4>
          <div className={styles.topBar}>
            <h4>Upcoming Event</h4>
            {/* event timer */}
            <div className={styles.eventTime}>
              <div className={styles.countdownBox}>
                <div className={styles.countdownValue}>
                  {timeRemaining.days}
                </div>
              </div>
              <div className="text-white"> : </div>
              <div className={styles.countdownBox}>
                <div className={styles.countdownValue}>
                  {timeRemaining.hours}
                </div>
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
            </div>

            {/* event timer */}

            <button> View Event </button>
          </div>
          <h4 className="flex items-center gap-1 ">
            <MdOutlineEmail /> <span> admin@event.com</span>
          </h4>
        </div>
      </div>

      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo on the left side */}
          <Link href="/" className="text-white text-xl font-bold">
            Event Endeavors
          </Link>

          {/* NavLinks on the right side */}
          <div className="hidden lg:flex space-x-4">
            <Link href="/" className="text-white">
              Home
            </Link>
            <Link href="/events" className="text-white">
              Events
            </Link>
            <Link href="/about" className="text-white">
              About
            </Link>
            {session?.user ? (
              <button onClick={() => signOut()} className="text-white">
                Logout
              </button>
            ) : (
              <>
                <Link href="/login" className="text-white">
                  Login
                </Link>
                <Link href="/signup" className="text-white">
                  SignUp
                </Link>
              </>
            )}
          </div>

          {/* Breadcrumb for small devices */}
          {/* <div className="lg:hidden space-x-4"> */}
          {/* <Link href="/" className="text-white">
              Home
            </Link> */}

          {/* <Link href="/events" className="text-white">
              Events
            </Link> */}
          {/* <Link href="/about" className="text-white">
              About
            </Link>
            <Link href="/contact" className="text-white">
              Contact
            </Link> */}
          {/* Add similar links for other pages */}
          {/* </div> */}
        </div>
      </nav>
    </>
  );
};

export default Header;
