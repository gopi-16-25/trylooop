import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Mail, 
  Phone, 
  MapPin,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: MessageCircle, href: "https://wa.me/919994920208", label: "WhatsApp" },
    { icon: Instagram, href: "https://www.instagram.com/tryloop_03?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Programs", href: "#programs" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    { label: "Web Development", href: "#" },
    { label: "Mobile Development", href: "#" },
    { label: "Data Science", href: "#" },
    { label: "Cloud Computing", href: "#" },
  ];

  const support = [
    { label: "Help Center", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "Community", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <a href="#home" className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent inline-block mb-6">
                Tryloop
              </a>
              <p className="text-background/80 mb-6 leading-relaxed max-w-md">
                Empowering tomorrow's tech leaders through expert mentorship, hands-on learning, 
                and real-world experience. Join us to transform your passion into professional success.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-background/80">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  tryloop3@gmail.com
                </div>
                <div className="flex items-center text-background/80">
                  <Phone className="h-5 w-5 mr-3 text-primary" />
                  +91 999492028
                </div>
                <div className="flex items-center text-background/80">
  <MapPin className="h-5 w-5 mr-3 text-primary" />
  Tirunelveli, India
</div>

              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-background/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 group"
                  >
                    <social.icon className="h-5 w-5 text-background/80 group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-background">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-background/80 hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-background">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href} 
                      className="text-background/80 hover:text-primary transition-colors duration-300"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-bold text-lg mb-6 text-background">Support</h3>
              <ul className="space-y-3">
                {support.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href} 
                      className="text-background/80 hover:text-primary transition-colors duration-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>


        {/* Bottom Footer */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/80">
            <p>&copy; 2025 Tryloop. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;