import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code,
  Cloud,
  Shield,
  Brain,
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
  const progRef = useRef<HTMLDivElement>(null);
  const mentRef = useRef<HTMLDivElement>(null);

  const [headShow, setHeadShow] = useState(false);
  const [progShow, setProgShow] = useState(false);
  const [mentShow, setMentShow] = useState(false);

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && setHeadShow(true), { threshold: 0.2 });
    if (headRef.current) o.observe(headRef.current);
    return () => o.disconnect();
  }, []);

  useEffect(() => {
    const o2 = new IntersectionObserver(([e]) => e.isIntersecting && setProgShow(true), { threshold: 0.2 });
    if (progRef.current) o2.observe(progRef.current);
    return () => o2.disconnect();
  }, []);

  useEffect(() => {
    const o3 = new IntersectionObserver(([e]) => e.isIntersecting && setMentShow(true), { threshold: 0.25 });
    if (mentRef.current) o3.observe(mentRef.current);
    return () => o3.disconnect();
  }, []);

  const services = [
    { icon: Code, title: "Fullstack Web Development", description: "Complete web development training covering frontend and backend technologies for modern applications.", features: ["HTML/CSS/JavaScript", "React/Node.js", "Database Integration", "Deployment Strategies"], color: "bg-blue-500/10 text-blue-600" },
    { icon: Brain, title: "Machine Learning and AI", description: "Comprehensive training in ML algorithms, AI concepts, and practical implementation techniques.", features: ["Supervised Learning", "Deep Learning", "Computer Vision", "NLP Applications"], color: "bg-purple-500/10 text-purple-600" },
    { icon: Code, title: "Fullstack Python Development", description: "End-to-end Python development including web frameworks, databases, and deployment.", features: ["Django/Flask", "Database Design", "API Development", "Cloud Deployment"], color: "bg-green-500/10 text-green-600" },
    { icon: Shield, title: "Linux", description: "Master Linux system administration, command line operations, and server management.", features: ["Command Line", "System Administration", "Shell Scripting", "Server Management"], color: "bg-orange-500/10 text-orange-600" },
    { icon: Code, title: "C", description: "Foundational programming concepts with C language and system-level programming.", features: ["Basic Syntax", "Memory Management", "Data Structures", "System Programming"], color: "bg-indigo-500/10 text-indigo-600", syllabus: "/courses/c/resources/syllabus" },
    { icon: Code, title: "Java", description: "Object-oriented programming with Java for enterprise application development.", features: ["OOP Concepts", "Java Collections", "Exception Handling", "Multithreading"], color: "bg-pink-500/10 text-pink-600" },
    { icon: Users, title: "UI/UX", description: "User interface and experience design principles for creating intuitive digital products.", features: ["Design Principles", "User Research", "Prototyping", "Usability Testing"], color: "bg-teal-500/10 text-teal-600" },
    { icon: Code, title: "C++", description: "Advanced programming with C++ for high-performance applications and system development.", features: ["Object-Oriented Programming", "STL", "Advanced Features", "Performance Optimization"], color: "bg-violet-500/10 text-violet-600" },
    { icon: Cloud, title: "Cloud", description: "Cloud computing fundamentals with AWS, Azure, and modern cloud deployment strategies.", features: ["AWS/Azure", "Cloud Architecture", "DevOps", "Containerization"], color: "bg-cyan-500/10 text-cyan-600" }
  ];

  const mentorshipServices = [
    { icon: Users, title: "Expert Mentorship", description: "One-on-one guidance from industry professionals with years of experience in leading tech companies." },
    { icon: Calendar, title: "Flexible Scheduling", description: "Learn at your own pace with flexible timings that fit your lifestyle and commitments." },
    { icon: Briefcase, title: "Career Guidance", description: "Complete career support including resume building, interview preparation, and job placement assistance." }
  ];

  const handleCardClick = (syllabus?: string) => syllabus && navigate(syllabus);

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div
          ref={headRef}
          className={`text-center mb-20 transition-all duration-[1600ms] ease-[cubic-bezier(.22,.61,.36,1)]
          ${headShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-32"}`}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span>Our</span> <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology education and mentorship programs designed to transform your passion into professional expertise.
          </p>
        </div>

        {/* Programs */}
        <div ref={progRef}>
          <h3 className={`text-2xl lg:text-3xl font-bold text-center mb-14 transition-all duration-[1500ms]
            ${progShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}`}>
            Programs Offered
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                onClick={() => handleCardClick(service.syllabus)}
                style={{ transitionDelay: `${index * 120}ms` }}
                className={`group bg-white border border-violet-200 hover:border-primary transition-all duration-[1400ms]
                ${progShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-32"}
                hover:shadow-xl hover:scale-105 ${service.syllabus ? "cursor-pointer" : ""}`}
              >
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mentorship */}
        <div
          ref={mentRef}
          className={`mt-28 bg-violet-50 rounded-3xl p-10 lg:p-14 transition-all duration-[1600ms]
          ${mentShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-32"}`}
        >
          <div className={`text-center mb-12 transition-all duration-[1400ms]
            ${mentShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}`}>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Mentorship & Guidance</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
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
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 mx-auto transition-transform duration-300 hover:scale-110">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className={`text-center mt-14 transition-all duration-[1400ms]
            ${mentShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}`}>
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-medium"
              onClick={() => window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSfOXsfQrwqSAWaMhIGeqzE-KgeC6HPa8nADOQVq1JTAUr4CtQ/viewform?usp=header",
                "_blank"
              )}
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
