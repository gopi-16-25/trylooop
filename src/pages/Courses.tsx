import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Code, Cloud, Shield, Brain, Users } from "lucide-react";
import { useEffect, useRef, useState, ReactNode } from "react";


const Animation = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShow(true),
      { threshold: 0.2 }
    );
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[900ms] ease-out
      ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
    >
      {children}
    </div>
  );
};


const Courses = () => {
  const navigate = useNavigate();
  const progRef = useRef<HTMLDivElement>(null);
  const [progShow, setProgShow] = useState(false);

  // 🔥 Always open at top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const o2 = new IntersectionObserver(
      ([e]) => e.isIntersecting && setProgShow(true),
      { threshold: 0.2 }
    );
    if (progRef.current) o2.observe(progRef.current);
    return () => o2.disconnect();
  }, []);

  const services = [
    { icon: Code, title: "Fullstack Web Development", description: "Complete web development training covering frontend and backend technologies for modern applications.", features: ["HTML/CSS/JavaScript", "React/Node.js", "Database Integration", "Deployment Strategies"] },
    { icon: Brain, title: "Machine Learning and AI", description: "Comprehensive training in ML algorithms, AI concepts, and practical implementation techniques.", features: ["Supervised Learning", "Deep Learning", "Computer Vision", "NLP Applications"] },
    { icon: Code, title: "Fullstack Python Development", description: "End-to-end Python development including web frameworks, databases, and deployment.", features: ["Django/Flask", "Database Design", "API Development", "Cloud Deployment"] },
    { icon: Shield, title: "Linux", description: "Master Linux system administration, command line operations, and server management.", features: ["Command Line", "System Administration", "Shell Scripting", "Server Management"] },
    { icon: Code, title: "C", description: "Foundational programming concepts with C language and system-level programming.", features: ["Basic Syntax", "Memory Management", "Data Structures", "System Programming"], syllabus: "/courses/c/plan" },
    { icon: Code, title: "Java", description: "Object-oriented programming with Java for enterprise application development.", features: ["OOP Concepts", "Java Collections", "Exception Handling", "Multithreading"] },
    { icon: Users, title: "UI/UX", description: "User interface and experience design principles for creating intuitive digital products.", features: ["Design Principles", "User Research", "Prototyping", "Usability Testing"] },
    { icon: Code, title: "C++", description: "Advanced programming with C++ for high-performance applications and system development.", features: ["Object-Oriented Programming", "STL", "Advanced Features", "Performance Optimization"] },
    { icon: Cloud, title: "Cloud", description: "Cloud computing fundamentals with AWS, Azure, and modern cloud deployment strategies.", features: ["AWS/Azure", "Cloud Architecture", "DevOps", "Containerization"] }
  ];

  const handleCardClick = (syllabus?: string) => syllabus && navigate(syllabus);

  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">

        <div ref={progRef}>
          <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold text-center mb-10 sm:mb-14 transition-all duration-[1500ms]
            ${progShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}`}>
            Courses Offered
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                  <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 sm:h-7 w-6 sm:w-7" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs sm:text-sm text-muted-foreground">
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

        {/*  BACK TO HOME */}
        <Animation delay={services.length * 130}>
          <div className="mt-20 text-center">
            <Button
              size="lg"
              className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all"
              onClick={() => {
                navigate("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              ← Back to Home
            </Button>
          </div>
        </Animation>

      </div>
    </section>
  );
};

export default Courses;
