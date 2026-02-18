import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Accueil" },
    { id: "about", label: "À propos" },
    { id: "skills", label: "Compétences" },
    { id: "projects", label: "Projets" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo avec effet */}
            <button
              onClick={() => handleNavClick("home")}
              className="group relative"
            >
              <div
                className={`text-2xl font-black font-serif transition-colors ${
                  scrolled ? "text-mainClr" : "text-white"
                }`}
              >
                Leslie
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mainClr to-hoverClr">
                  .E
                </span>
              </div>
              {/* Underline animé */}
              <div
                className={`absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300 ${
                  scrolled ? "bg-mainClr" : "bg-white"
                }`}
              ></div>
            </button>

            {/* Desktop Menu avec indicateur actif */}
            <div className="hidden md:flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full px-2 py-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                    activeSection === item.id
                      ? scrolled
                        ? "bg-mainClr text-white shadow-lg"
                        : "bg-white text-mainClr shadow-lg"
                      : scrolled
                        ? "text-gray-700 hover:bg-gray-100"
                        : "text-white hover:bg-white/20"
                  }`}
                >
                  {item.label}
                  {/* Dot indicator pour section active */}
                  {activeSection === item.id && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-hoverClr rounded-full animate-pulse"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button avec animation */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-xl transition-all ${
                scrolled
                  ? "bg-mainClr/10 text-mainClr hover:bg-mainClr/20"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-all duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Drawer Right avec animations staggered */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 bg-gradient-to-br from-white to-gray-50 shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header du drawer */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-mainClr" />
            <span className="text-lg font-black text-mainClr">Navigation</span>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
            aria-label="Fermer"
          >
            <X size={22} className="text-gray-600" />
          </button>
        </div>

        {/* Links avec animation staggered */}
        <div className="px-6 py-8 space-y-2">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`group w-full text-left px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-gradient-to-r from-mainClr to-hoverClr text-white shadow-lg"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              style={{
                animation: isMenuOpen
                  ? `slideIn 0.3s ease-out ${index * 0.05}s backwards`
                  : "none",
              }}
            >
              <span className="flex items-center justify-between">
                {item.label}
                {activeSection === item.id && (
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                )}
              </span>
            </button>
          ))}
        </div>

        {/* Footer du drawer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-white/80 backdrop-blur-sm">
          <p className="text-sm text-gray-500 text-center">
            © 2025 Leslie Elimby
          </p>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header;