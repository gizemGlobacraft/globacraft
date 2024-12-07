import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Ana Sayfa");

  const menuItems = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hizmetler", href: "/hizmetler" },
    { name: "Çözümler", href: "/cozumler" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <nav className="fixed w-full glass-effect z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="/images/globacraft_logo_v6_darktheme (1).svg"
                alt="GlobaCraft Logo"
                className="h-16 md:h-24"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                to={item.href}
                onClick={() => setActiveItem(item.name)}
                className={`text-white hover:text-[#FF5A5F]...`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/iletisim">
              <button className="bg-[#2B4EA2] text-white px-6 py-2 rounded-full hover:bg-[#FF5A5F] transform hover:scale-105 transition-all">
                Başlayın
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[#FF5A5F]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveItem(item.name);
                  setIsMenuOpen(false);
                }}
                className={`block transition-colors py-2 ${
                  activeItem === item.name
                    ? "text-[#FF5A5F]"
                    : "text-white hover:text-[#FF5A5F]"
                }`}
              >
                {item.name}
              </a>
            ))}
            <Link to="/iletisim">
              <button className="w-full bg-[#2B4EA2] text-white px-6 py-2 rounded-full hover:bg-[#FF5A5F] transform hover:scale-105 transition-all">
                Başlayın
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
