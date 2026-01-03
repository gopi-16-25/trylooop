import { Button } from "@/components/ui/button";
import {
  Users,
  Calendar,
  Briefcase,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Services = () => {
  const navigate = useNavigate();
  const headRef = useRef<HTMLDivElement>(null);
  const mentRef = useRef<HTMLDivElement>(null);

  const [headShow, setHeadShow] = useState(false);
  const [mentShow, setMentShow] = useState(false);

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && setHeadShow(true), { threshold: 0.2 });
    if (headRef.current) o.observe(headRef.current);
    return () => o.disconnect();
  }, []);

  useEffect(() => {
    const o3 = new IntersectionObserver(([e]) => e.isIntersecting && setMentShow(true), { threshold: 0.25 });
    if (mentRef.current) o3.observe(mentRef.current);
    return () => o3.disconnect();
  }, []);

  const mentorshipServices = [
    { icon: Users, title: "Expert Mentorship", description: "One-on-one guidance from industry professionals with years of experience in leading tech companies." },
    { icon: Calendar, title: "Flexible Scheduling", description: "Learn at your own pace with flexible timings that fit your lifestyle and commitments." },
    { icon: Briefcase, title: "Career Guidance", description: "Complete career support including resume building, interview preparation, and job placement assistance." }
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Header */}
        <div
          ref={headRef}
          className={`text-center mb-14 sm:mb-20 transition-all duration-[1600ms]
          ${headShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-32"}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span>Our</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology education and mentorship programs designed to transform your passion into professional expertise.
          </p>
        </div>

        {/* Mentorship */}
        <div
          ref={mentRef}
          className={`mt-10 sm:mt-16 bg-violet-50 rounded-3xl p-8 sm:p-10 lg:p-14 transition-all duration-[1600ms]
          ${mentShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-32"}`}
        >
          <div className={`text-center mb-10 sm:mb-12 transition-all duration-[1400ms]
            ${mentShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}`}>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">Mentorship & Guidance</h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Beyond technical training, we provide comprehensive mentorship and career guidance to ensure your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mentorshipServices.map((service, index) => (
              <div
                key={index}
                style={{ transitionDelay: `${index * 120}ms` }}
                className={`text-center transition-all duration-[1400ms]
                ${mentShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}`}
              >
                <div className="flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 bg-gradient-primary rounded-full mb-6 mx-auto transition-transform duration-300 hover:scale-110">
                  <service.icon className="h-7 sm:h-8 w-7 sm:w-8 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className={`text-center mt-12 sm:mt-14 transition-all duration-[1400ms]
            ${mentShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}`}>
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-medium"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSfOXsfQrwqSAWaMhIGeqzE-KgeC6HPa8nADOQVq1JTAUr4CtQ/viewform?usp=header",
                  "_blank"
                )
              }
            >
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
