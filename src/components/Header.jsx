import { useState } from "react";
import Headroom from "react-headroom"; // Import Headroom
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-scroll";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "project", label: "Project" },
  { id: "contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://github.com/ChandruSakthi",
    icon: <FaGithub size={29} />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/chandru72/",
    icon: <FaLinkedin size={29} />,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/iconic_eyes_lover/profilecard/?igsh=dTJxeTM4bGQ2czk2",
    icon: <FaInstagram size={29} />,
    label: "Instagram",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Headroom>
        <header className="max-w-[90%] mx-auto py-3 flex items-center justify-between font-inter relative bg-white px-4">
          {/* Logo */}
          <h1 className="text-[2.5rem] font-bold text-[#000] hover:text-[#fe5617] cursor-pointer">
            Chandru.
          </h1>

          {/* Navigation Menu - Desktop */}
          <nav className="hidden lg:flex bg-[#F5F5F5] px-5 py-3 rounded-2xl">
            <ul className="flex gap-5 text-[14px] font-semibold">
              {navItems.map((item) => (
                <Link key={item.id} to={item.id} smooth={true} duration={500}>
                  <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-5px]">
                    {item.label}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>

          {/* Social Media Links - Desktop */}
          <div className="hidden lg:flex w-[100px] items-center justify-between">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#fe5617]"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden transition-all duration-500 ease-in text-[#fe5617]"
            aria-label="Open Menu"
          >
            <HiMenuAlt3 size={29} />
          </button>
        </header>
      </Headroom>

      {/* Full-Screen Mobile Menu Overlay (Only for Mobile) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#222] text-white flex flex-col items-center justify-center z-50 lg:hidden">
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-5 right-5 text-[#fe5617]"
            aria-label="Close Menu"
          >
            <HiX size={35} />
          </button>

          {/* Navigation Links */}
          <ul className="text-[22px] font-semibold flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                onClick={() => setIsMenuOpen(false)}
              >
                <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-5px]">
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>

          {/* Social Media Icons */}
          <div className="flex gap-6 mt-16">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#fe5617]"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
