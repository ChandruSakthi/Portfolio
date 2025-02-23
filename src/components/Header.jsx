// import { useState } from "react";
// import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
// import { HiMenuAlt3, HiX } from "react-icons/hi";
// import { Link } from "react-scroll";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     // <div className="bg-[#FFFFFF]">
//       <div>
//       <div className="max-w-[90%] mx-auto py-3 flex items-center justify-between font-inter">
//         {/* Logo */}
//         <div>
//           <h1 className="text-[2.5rem] font-bold text-[#000] hover:text-[#fe5617] ">
//             Chandru.
//           </h1>
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <div className="lg:hidden">
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className=" transition-all duration-500 ease-in text-[#fe5617] "
//           >
//             {isMenuOpen ? <HiX size={29} /> : <HiMenuAlt3 size={29} />}
//           </button>
//         </div>

//         {/* Navigation Menu */}
//         <nav
//           className={`${
//             isMenuOpen ? "block" : "hidden"
//           } absolute top-[70px] left-0 w-full bg-[#F5F5F5] p-5 lg:p-0 lg:relative lg:block lg:w-auto lg:px-5 lg:py-3 lg:rounded-2xl lg:top-0`}
//         >
//           <ul className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-5 text-[14px] font-semibold">
//            <Link to="home" smooth={true} duration={500}>
//            <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px] ">
//               Home
//             </li></Link>
//             <Link to="about" smooth={true} duration={500}>
//             <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px] ">
//               About
//             </li>
//             </Link>
//            <Link to="project" smooth={true} duration={500}>
//            <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px] ">
//               Project
//             </li>
//            </Link>
//             <Link to="contact" smooth={true} duration={500}>
//             <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px] ">
//               Contact
//             </li>
//             </Link>
//           </ul>
//           {/* Social Media Links for Mobile */}
//           <div
//             className={`${
//               isMenuOpen ? "block" : "hidden"
//             } lg:hidden mt-3 flex justify-center gap-5`}
//           >
//             <a
//               href="https://github.com/ChandruSakthi"
//               className="  hover:text-[#fe5617] "
//             >
//               <FaGithub size={29} />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/chandru72/"
//               className="hover:text-[#fe5617]"
//             >
//               <FaLinkedin size={29} />
//             </a>
//             <a
//               href="https://www.instagram.com/iconic_eyes_lover/profilecard/?igsh=dTJxeTM4bGQ2czk2"
//               className="hover:text-[#fe5617]"
//             >
//               <FaInstagram size={29} />
//             </a>
//           </div>
//         </nav>

//         {/* Social Media Links */}
//         <div className="hidden lg:flex w-[100px] items-center justify-between">
//           <a
//             href="https://github.com/ChandruSakthi" target="_blank"
//             className="hover:text-[#fe5617]"
//           >
//             <FaGithub size={29} />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/chandru72/" target="_blank"
//             className="hover:text-[#fe5617]"
//           >
//             <FaLinkedin size={29} />
//           </a>
//           <a
//             href="https://www.instagram.com/iconic_eyes_lover/profilecard/?igsh=dTJxeTM4bGQ2czk2" target="_blank"
//             className="hover:text-[#fe5617]"
//           >
//             <FaInstagram size={29} />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
// import { useState } from "react";
// import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
// import { HiMenuAlt3, HiX } from "react-icons/hi";
// import { Link } from "react-scroll";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div>
//       <div className="max-w-[90%] mx-auto py-3 flex items-center justify-between font-inter relative">
//         {/* Logo */}
//         <div>
//           <h1 className="text-[2.5rem] font-bold text-[#000] hover:text-[#fe5617] ">
//             Chandru.
//           </h1>
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <div className="lg:hidden">
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="transition-all duration-500 ease-in text-[#fe5617]"
//           >
//             {isMenuOpen ? <HiX size={29} /> : <HiMenuAlt3 size={29} />}
//           </button>
//         </div>

//         {/* Navigation Menu */}
//         <nav
//           className={`${
//             isMenuOpen ? "block" : "hidden"
//           } absolute top-[70px] left-0 w-full bg-[#F5F5F5] p-5 lg:p-0 lg:relative lg:block lg:w-auto lg:px-5 lg:py-3 lg:rounded-2xl lg:top-0`}
//         >
//           <ul className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-5 text-[14px] font-semibold">
//             <Link to="home" smooth={true} duration={500}>
//               <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px]">
//                 Home
//               </li>
//             </Link>
//             <Link to="about" smooth={true} duration={500}>
//               <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px]">
//                 About
//               </li>
//             </Link>
//             <Link to="project" smooth={true} duration={500}>
//               <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px]">
//                 Project
//               </li>
//             </Link>
//             <Link to="contact" smooth={true} duration={500}>
//               <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px]">
//                 Contact
//               </li>
//             </Link>
//           </ul>
//         </nav>

//         {/* Social Media Links - Desktop */}
//         <div className="hidden lg:flex w-[100px] items-center justify-between">
//           <a href="https://github.com/ChandruSakthi" target="_blank" className="hover:text-[#fe5617]">
//             <FaGithub size={29} />
//           </a>
//           <a href="https://www.linkedin.com/in/chandru72/" target="_blank" className="hover:text-[#fe5617]">
//             <FaLinkedin size={29} />
//           </a>
//           <a href="https://www.instagram.com/iconic_eyes_lover/profilecard/?igsh=dTJxeTM4bGQ2czk2" target="_blank" className="hover:text-[#fe5617]">
//             <FaInstagram size={29} />
//           </a>
//         </div>

//         {/* Social Media Links - Mobile (Right Side, Top to Bottom) */}
//         {isMenuOpen && (
//           <div className="lg:hidden absolute right-5 top-20 flex flex-col gap-4">
//             <a href="https://github.com/ChandruSakthi" className="hover:text-[#fe5617]">
//               <FaGithub size={29} />
//             </a>
//             <a href="https://www.linkedin.com/in/chandru72/" className="hover:text-[#fe5617]">
//               <FaLinkedin size={29} />
//             </a>
//             <a href="https://www.instagram.com/iconic_eyes_lover/profilecard/?igsh=dTJxeTM4bGQ2czk2" className="hover:text-[#fe5617]">
//               <FaInstagram size={29} />
//             </a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;
// import { useState } from "react";
// import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
// import { HiMenuAlt3, HiX } from "react-icons/hi";
// import { Link } from "react-scroll";

// const navItems = [
//   { id: "home", label: "Home" },
//   { id: "about", label: "About" },
//   { id: "project", label: "Project" },
//   { id: "contact", label: "Contact" },
// ];

// const socialLinks = [
//   {
//     href: "https://github.com/ChandruSakthi",
//     icon: <FaGithub size={29} />,
//     label: "GitHub",
//   },
//   {
//     href: "https://www.linkedin.com/in/chandru72/",
//     icon: <FaLinkedin size={29} />,
//     label: "LinkedIn",
//   },
//   {
//     href: "https://www.instagram.com/iconic_eyes_lover/profilecard/?igsh=dTJxeTM4bGQ2czk2",
//     icon: <FaInstagram size={29} />,
//     label: "Instagram",
//   },
// ];

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="max-w-[90%] mx-auto py-3 flex items-center justify-between font-inter relative">
//       {/* Logo */}
//       <h1 className="text-[2.5rem] font-bold text-[#000] hover:text-[#fe5617] cursor-pointer">
//         Chandru.
//       </h1>

//       {/* Hamburger Menu for Mobile */}
//       <button
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//         className="lg:hidden transition-all duration-500 ease-in text-[#fe5617]"
//         aria-label="Toggle Menu"
//       >
//         {isMenuOpen ? <HiX size={29} /> : <HiMenuAlt3 size={29} />}
//       </button>

//       {/* Navigation Menu */}
//       <nav
//         className={`${
//           isMenuOpen ? "block" : "hidden"
//         } absolute top-[70px] left-0 w-full bg-[#F5F5F5] p-5 lg:p-0 lg:relative lg:block lg:w-auto lg:px-5 lg:py-3 lg:rounded-2xl lg:top-0`}
//       >
//         <ul className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-5 text-[14px] font-semibold">
//           {navItems.map((item) => (
//             <Link key={item.id} to={item.id} smooth={true} duration={500}>
//               <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px]">
//                 {item.label}
//               </li>
//             </Link>
//           ))}
//         </ul>
//       </nav>

//       {/* Social Media Links - Desktop */}
//       <div className="hidden lg:flex w-[100px] items-center justify-between">
//         {socialLinks.map((link) => (
//           <a
//             key={link.label}
//             href={link.href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-[#fe5617]"
//             aria-label={link.label}
//           >
//             {link.icon}
//           </a>
//         ))}
//       </div>

//       {/* Social Media Links - Mobile */}
//       {isMenuOpen && (
//         <div className="lg:hidden absolute right-5 top-20 flex flex-col gap-4">
//           {socialLinks.map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-[#fe5617]"
//               aria-label={link.label}
//             >
//               {link.icon}
//             </a>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
import { useState } from "react";
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
      {/* Main Header */}
      <header className="max-w-[90%] mx-auto py-3 flex items-center justify-between font-inter relative">
        {/* Logo */}
        <h1 className="text-[2.5rem] font-bold text-[#000] hover:text-[#fe5617] cursor-pointer">
          Chandru.
        </h1>

        {/* Navigation Menu - Desktop (With Background) */}
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

          {/* Navigation Links - Centered & Spaced */}
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

          {/* Social Media Icons - At the Bottom */}
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



