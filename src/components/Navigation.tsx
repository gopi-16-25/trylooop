import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // scroll helper
  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="/lovable-uploads/Tryloop.png"
              alt="Tryloop Logo"
              className="h-8 w-8"
            />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Tryloop
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="nav-link">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="nav-link">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="nav-link">
              Programs
            </button>

            {/*  CAREERS PAGE */}
            <button
              onClick={() => navigate("/careers")}
              className="nav-link"
            >
              Careers
            </button>

            <button onClick={() => scrollToSection("contact")} className="nav-link">
              Contact
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={cn(
            "md:hidden transition-all duration-300",
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          )}
        >
          <div className="px-2 pt-2 pb-3 space-y-2 bg-background border-t border-border">
            <button onClick={() => scrollToSection("home")} className="mobile-link">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="mobile-link">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="mobile-link">
              Programs
            </button>

            {/*  CAREERS */}
            <button
              onClick={() => {
                navigate("/careers");
                setIsMenuOpen(false);
              }}
              className="mobile-link"
            >
              Careers
            </button>

            <button onClick={() => scrollToSection("contact")} className="mobile-link">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
