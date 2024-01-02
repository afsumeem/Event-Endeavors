import Link from "next/link";

const Header = () => {
  return (
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
          <Link href="/contact" className="text-white">
            Contact
          </Link>
        </div>

        {/* Breadcrumb for small devices */}
        <div className="lg:hidden space-x-4">
          <Link href="/" className="text-white">
            Home
          </Link>

          <Link href="/events" className="text-white">
            Events
          </Link>
          <Link href="/about" className="text-white">
            About
          </Link>
          <Link href="/contact" className="text-white">
            Contact
          </Link>
          {/* Add similar links for other pages */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
