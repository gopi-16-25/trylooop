import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users, Lightbulb, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To bridge the gap between industry demands and talent by providing hands-on training and real-world project exposure that transforms passionate learners into industry-ready professionals."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the catalyst that empowers individuals worldwide with the skills and tools needed to navigate and innovate in a technology-driven world, creating a connected and capable society."
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "We believe in making technology accessible to all, fostering innovation through collaboration, and maintaining excellence in everything we do while building a supportive learning community."
    }
  ];

  const achievements = [
    {
      icon: Users,
      number: "Ongoing",
      label: "Students Trained",
      color: "text-primary"
    },
    {
      icon: Lightbulb,
      number: "20+",
      label: "Expert Mentors",
      color: "text-secondary"
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Success Rate",
      color: "text-primary"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">About</span>{" "}
            <span className="text-foreground">Tryloop</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're dedicated to transforming passionate learners into industry-ready professionals through 
            expert mentorship, practical training, and real-world exposure in cutting-edge technologies.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 border-border/50 hover:border-primary/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-gradient-primary/10 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
              Driven by Excellence
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality education and mentorship has led to remarkable achievements 
              and success stories across the tech industry.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-center w-20 h-20 bg-background rounded-full mb-6 mx-auto shadow-soft group-hover:shadow-medium transition-all duration-300">
                  <achievement.icon className={`h-10 w-10 ${achievement.color}`} />
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-foreground group-hover:scale-110 transition-transform duration-300">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-foreground">Our Story</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Founded with the vision of democratizing technology education, Tryloop emerged from the recognition 
              that there's a significant gap between what traditional education offers and what the industry demands. 
              Our founders, having worked in various tech companies, understood the challenges faced by aspiring 
              tech professionals.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we're proud to be a bridge that connects passionate learners with industry experts, 
              providing not just education but mentorship, guidance, and real-world exposure that transforms 
              careers and lives. Every success story of our learners motivates us to continue our mission 
              of empowering tomorrow's tech leaders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;