
const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          {/* Replace 'logo.png' with your actual logo file */}
          <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="font-bold text-lg"> Logo</span>
        </div>

        {/* Navigation Section */}
        <nav className="space-x-4">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="hover:text-gray-300">
            About
          </a>
          <a href="/contact" className="hover:text-gray-300">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
