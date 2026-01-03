import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  if (
    location.pathname === "/courses/c/plan" ||
    location.pathname === "/courses/c/resources/syllabus"
  ) {
    return null;
  }

  const socialLinks = [
    { icon: MessageCircle, href: "https://wa.me/919994920208" },
    { icon: Instagram, href: "https://www.instagram.com/tryloop_03" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/tryloop-tech/" },
    { icon: Phone, href: "tel:+919994920208" },
  ];

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Programs", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">

        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Tryloop
            </h2>

            <p className="text-background/70 mb-6">
              Empowering tomorrow's tech leaders through expert mentorship and real-world experience.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <Mail className="h-5 w-5 text-primary" />
                trylooop3@gmail.com
              </div>
              <div className="flex gap-3">
                <Phone className="h-5 w-5 text-primary" />
                +91 9994920208
              </div>
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                Tirunelveli, India
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary/20 transition"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:justify-self-center">
            <h3 className="font-semibold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="text-background/70 hover:text-primary transition">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* WHY */}
          <div className="hidden lg:block">
            <h3 className="font-semibold text-lg mb-5">Why Tryloop?</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li>✔ Industry-oriented Programs</li>
              <li>✔ Hands-on Internship</li>
              <li>✔ Career Guidance</li>
              <li>✔ Real-world Projects</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 py-6 text-center text-sm text-background/60">
          © 2025 Tryloop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
