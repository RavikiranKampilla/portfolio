import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface PortfolioItem {
  title: string;
  id: string;
}

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const portfolioItems: PortfolioItem[] = [
    { title: "Education", id: "education" },
    { title: "Projects", id: "projects" },
    { title: "Internships", id: "internships" },
    { title: "Certificates", id: "certificates" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-900">
            Ravikiran Kampilla
          </div>
          
          {/* Desktop Navigation with consistent spacing */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center" style={{ gap: 'clamp(1.5rem,4vw,2.5rem)' }}>
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap"
              >
                About
              </button>
              <div className="inline-flex">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger 
                        className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap px-0"
                      >
                        Portfolio
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="w-[200px] p-2">
                          {portfolioItems.map((item) => (
                            <li key={item.id}>
                              <button
                                onClick={() => scrollToSection(item.id)}
                                className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-gray-100 text-gray-700 hover:text-blue-600 transition-colors"
                              >
                                {item.title}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                About
              </button>
              
              {/* Portfolio Section in Mobile Menu */}
              <div className="pl-4 space-y-3">
                <div className="text-sm font-semibold text-gray-900">Portfolio</div>
                {portfolioItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {item.title}
                  </button>
                ))}
              </div>

              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
