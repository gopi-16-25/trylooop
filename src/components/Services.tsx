import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Database, 
  Shield, 
  Brain,
  Users,
  Calendar,
  Briefcase,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: Code,
      title: "Fullstack Web Development",
      description: "Complete web development training covering frontend and backend technologies for modern applications.",
      features: ["HTML/CSS/JavaScript", "React/Node.js", "Database Integration", "Deployment Strategies"],
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      icon: Brain,
      title: "Machine Learning and AI",
      description: "Comprehensive training in ML algorithms, AI concepts, and practical implementation techniques.",
      features: ["Supervised Learning", "Deep Learning", "Computer Vision", "NLP Applications"],
      color: "bg-purple-500/10 text-purple-600"
    },
    {
      icon: Code,
      title: "Fullstack Python Development",
      description: "End-to-end Python development including web frameworks, databases, and deployment.",
      features: ["Django/Flask", "Database Design", "API Development", "Cloud Deployment"],
      color: "bg-green-500/10 text-green-600"
    },
    {
      icon: Shield,
      title: "Linux",
      description: "Master Linux system administration, command line operations, and server management.",
      features: ["Command Line", "System Administration", "Shell Scripting", "Server Management"],
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      icon: Code,
      title: "Fullstack Java Development",
      description: "Enterprise Java development with Spring framework and modern development practices.",
      features: ["Spring Boot", "Microservices", "Database Integration", "Enterprise Patterns"],
      color: "bg-red-500/10 text-red-600"
    },
    {
      icon: Code,
      title: "Python",
      description: "Core Python programming for automation, scripting, and application development.",
      features: ["Core Syntax", "Data Structures", "Libraries", "Automation Scripts"],
      color: "bg-yellow-500/10 text-yellow-600"
    },
    {
      icon: Cloud,
      title: "Cloud",
      description: "Cloud computing fundamentals with AWS, Azure, and modern cloud deployment strategies.",
      features: ["AWS/Azure", "Cloud Architecture", "DevOps", "Containerization"],
      color: "bg-cyan-500/10 text-cyan-600"
    },
    {
      icon: Code,
      title: "C",
      description: "Foundational programming concepts with C language and system-level programming.",
      features: ["Basic Syntax", "Memory Management", "Data Structures", "System Programming"],
      color: "bg-indigo-500/10 text-indigo-600",
      syllabus: "/courses/c/resources/syllabus"
    },
    {
      icon: Code,
      title: "Java",
      description: "Object-oriented programming with Java for enterprise application development.",
      features: ["OOP Concepts", "Java Collections", "Exception Handling", "Multithreading"],
      color: "bg-pink-500/10 text-pink-600"
    },
    {
      icon: Users,
      title: "UI/UX",
      description: "User interface and experience design principles for creating intuitive digital products.",
      features: ["Design Principles", "User Research", "Prototyping", "Usability Testing"],
      color: "bg-teal-500/10 text-teal-600"
    },
    {
      icon: Code,
      title: "C++",
      description: "Advanced programming with C++ for high-performance applications and system development.",
      features: ["Object-Oriented Programming", "STL", "Advanced Features", "Performance Optimization"],
      color: "bg-violet-500/10 text-violet-600"
    },
    {
      icon: Users,
      title: "Photoshop",
      description: "Professional image editing and graphic design skills using Adobe Photoshop.",
      features: ["Image Editing", "Digital Art", "Photo Manipulation", "Design Techniques"],
      color: "bg-rose-500/10 text-rose-600"
    }
  ];

  const mentorshipServices = [
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "One-on-one guidance from industry professionals with years of experience in leading tech companies."
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Learn at your own pace with flexible timings that fit your lifestyle and commitments."
    },
    {
      icon: Briefcase,
      title: "Career Guidance",
      description: "Complete career support including resume building, interview preparation, and job placement assistance."
    }
  ];

  const handleCardClick = (syllabus: string | undefined) => {
    if (syllabus) {
      navigate(syllabus);
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Our</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology education and mentorship programs designed to transform 
            your passion into professional expertise across multiple domains.
          </p>
        </div>

        {/* Technology Services */}
        <div className="mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-foreground">
            Programs Offered
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
            <Card 
              key={index}
              onClick={() => handleCardClick(service.syllabus)}
              className={`group hover:shadow-glow transition-all duration-500 border-2 hover:border-primary/50 animate-fade-in-up ${service.color.replace('/10', '/5')} shadow-lg hover:shadow-xl hover:scale-105 ${service.syllabus ? 'cursor-pointer' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mentorship Services */}
        <div className="bg-gradient-primary/5 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
              Mentorship & Guidance
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beyond technical training, we provide comprehensive mentorship and career guidance 
              to ensure your success in the competitive tech industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mentorshipServices.map((service, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-foreground">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 shadow-medium"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfOXsfQrwqSAWaMhIGeqzE-KgeC6HPa8nADOQVq1JTAUr4CtQ/viewform?usp=header', '_blank')}
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