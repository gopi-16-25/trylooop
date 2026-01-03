import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const goToCourses = () => {
    navigate("/courses");
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[9999] bg-white/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* LOGO */}
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate("/")}>
              <img src="/lovable-uploads/Tryloop.png" alt="Tryloop Logo" className="h-8 w-8" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Tryloop
              </span>
            </div>

            {/* DESKTOP */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection("home")} className="nav-link">Home</button>
              <button onClick={() => scrollToSection("about")} className="nav-link">About</button>
              <button onClick={goToCourses} className="nav-link">Courses</button>
              <button onClick={() => navigate("/careers")} className="nav-link">Careers</button>
              <button onClick={() => scrollToSection("contact")} className="nav-link">Contact</button>
            </div>

            {/* MOBILE ICON */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(true)}>
                <Menu />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* FULL SCREEN MOBILE SLIDE MENU */}
      <div
        className={`fixed inset-0 z-[99999] bg-white transition-all duration-500
        ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}`}
      >
        <div className="flex justify-between items-center px-6 h-16 border-b">
          <div className="flex items-center space-x-2">
            <img src="/lovable-uploads/Tryloop.png" className="h-7 w-7" />
            <span className="font-bold text-lg">Tryloop</span>
          </div>
          <Button variant="ghost" onClick={() => setIsMenuOpen(false)}>
            <X />
          </Button>
        </div>

        <div className="px-6 pt-10 space-y-6 text-lg font-medium">
          <button onClick={() => scrollToSection("home")} className="block w-full text-left">Home</button>
          <button onClick={() => scrollToSection("about")} className="block w-full text-left">About</button>
          <button onClick={goToCourses} className="block w-full text-left">Courses</button>
          <button onClick={() => { navigate("/careers"); setIsMenuOpen(false); }} className="block w-full text-left">Careers</button>
          <button onClick={() => scrollToSection("contact")} className="block w-full text-left">Contact</button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
