import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users, Lightbulb, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const achieveRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);

  const [show, setShow] = useState(false);
  const [achieveShow, setAchieveShow] = useState(false);
  const [storyShow, setStoryShow] = useState(false);

  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && setShow(true), { threshold: 0.2 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  useEffect(() => {
    const o2 = new IntersectionObserver(([e]) => e.isIntersecting && setAchieveShow(true), { threshold: 0.3 });
    if (achieveRef.current) o2.observe(achieveRef.current);
    return () => o2.disconnect();
  }, []);

  useEffect(() => {
    const o3 = new IntersectionObserver(([e]) => e.isIntersecting && setStoryShow(true), { threshold: 0.3 });
    if (storyRef.current) o3.observe(storyRef.current);
    return () => o3.disconnect();
  }, []);

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To bridge the gap between industry demands and talent by providing hands-on training and real-world project exposure that transforms passionate learners into industry-ready professionals."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To bridge the gap between industry demands and talent by providing hands-on training and real-world project exposure that transforms passionate learners into industry-ready professionals."
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "We believe in making technology accessible to all, fostering innovation through collaboration, and maintaining excellence in everything we do while building a supportive learning community."
    }
  ];

  const achievements = [
    { icon: Users, number: "Ongoing", label: "Students", color: "text-primary" },
    { icon: Lightbulb, number: "20+", label: "Mentors", color: "text-secondary" },
    { icon: TrendingUp, number: "98%", label: "Placement Rate", color: "text-primary" }
  ];

  return (
    <section ref={ref} id="about" className="py-24 sm:py-32 bg-gradient-card overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className={`max-w-4xl mx-auto text-center transition-all duration-[1700ms]
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-40"}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">About</span> Tryloop
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl">
            We're dedicated to transforming passionate learners into industry-ready professionals through expert mentorship, practical training, and real-world exposure in cutting-edge technologies.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:gap-12 md:grid-cols-3 mt-16 sm:mt-24">
          {values.map((v, i) => (
            <Card
              key={i}
              style={{ transitionDelay: `${i * 140}ms` }}
              className={`transition-all duration-[1500ms]
              ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-40"}`}
            >
              <CardContent className="p-6 sm:p-10 text-center">
                <div className="w-14 sm:w-16 h-14 sm:h-16 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <v.icon className="h-7 sm:h-8 w-7 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{v.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <div
          ref={achieveRef}
          className={`bg-gradient-primary/10 rounded-[2.5rem] p-8 sm:p-10 lg:p-16 mt-24 sm:mt-32 transition-all duration-[1700ms]
          ${achieveShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-40"}`}
        >
          <div className={`text-center mb-10 sm:mb-14 transition-all duration-[1400ms]
            ${achieveShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}`}>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">Driven by Excellence</h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality education and mentorship has led to remarkable achievements
              and success stories across the tech industry.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 sm:gap-10">
            {achievements.map((a, i) => (
              <div key={i} className="text-center">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-background rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center shadow-soft">
                  <a.icon className={`h-8 sm:h-10 w-8 sm:w-10 ${a.color}`} />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">{a.number}</div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">{a.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Story */}
        <div
          ref={storyRef}
          className={`mt-28 sm:mt-36 max-w-4xl mx-auto text-center transition-all duration-[1900ms]
          ${storyShow ? "opacity-100 translate-y-0" : "opacity-0 translate-y-40"}`}
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-10">Our Story</h3>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
            Founded with the vision of democratizing technology education, Tryloop emerged from the recognition that there's a significant gap between what traditional education offers and what the industry demands. Our founders, having worked in various tech companies, understood the challenges faced by aspiring tech professionals.
          </p>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Today, we're proud to be a bridge that connects passionate learners with industry experts, providing not just education but mentorship, guidance, and real-world exposure that transforms careers and lives. Every success story of our learners motivates us to continue our mission of empowering tomorrow's tech leaders.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
