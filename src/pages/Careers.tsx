import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
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

/* ================= CAREERS ================= */
 const Careers = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);



  const roles = [
    {
      title: "Frontend Developer",
      type: "Remote",
      desc: "Design and develop visually appealing, responsive, and user-friendly web interfaces. Work closely with designers to translate UI/UX wireframes into functional web pages using HTML, CSS, JavaScript, and modern frameworks.",
      tag: "Internship",
    },
    {
      title: "Backend Developer",
      type: "Remote",
      desc: "Build and maintain the server-side logic of applications, manage databases, and integrate APIs to ensure smooth data flow between the server and users. Ensure security, scalability, and performance.",
      tag: "Internship",
    },
    {
      title: "UI/UX Designer",
      type: "Remote",
      desc: "Design user interfaces that are beautiful and easy to use. Create wireframes, prototypes, and design systems that deliver great user experiences.",
      tag: "Internship",
    },
    {
      title: "App Developer",
      type: "Remote",
      desc: "Create, test, and maintain mobile applications for Android and iOS platforms. Collaborate with designers and backend teams to deliver smooth mobile experiences.",
      tag: "Internship",
    },
    {
      title: "Talent Acquisition Specialist",
      type: "Remote",
      desc: "Source, attract, and recruit top talent for the company’s growth. Manage job postings, screen resumes, and coordinate interviews with hiring managers.",
      tag: "Internship",
    },
    {
      title: "Software Developer",
      type: "Remote",
      desc: "Develop, test, and maintain software applications. Work on solving complex problems with clean and efficient code while ensuring high performance and scalability.",
      tag: "Internship",
    },
    {
      title: "Content & Technical Writer",
      type: "Remote",
      desc: "Create engaging, clear, and accurate written content for blogs, websites, product documentation, and technical guides. Work closely with teams to simplify complex technical concepts for different audiences.",
      tag: "Internship",
    },
  ];

  return (
    <>
      {/* MAIN CONTENT */}
      <Animation delay={100}>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">

            {/* HEADER */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-3">Join Our Team</h2>
              <p className="text-muted-foreground">
                Explore open positions and build your career with us.
              </p>
            </div>

            {/* GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {roles.map((role, index) => (
                <Animation key={index} delay={index * 120}>
                  <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                    <CardContent className="p-6 flex flex-col h-full">

                      <h3 className="text-lg font-semibold mb-2">{role.title}</h3>

                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 text-xs rounded-full border border-primary/30 text-primary font-medium">
                          {role.type}
                        </span>
                        <span className="px-3 py-1 text-xs rounded-full bg-gradient-primary text-white font-medium">
                          {role.tag}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                        {role.desc}
                      </p>

                      <div className="flex justify-end mt-auto">
                        <Button
                          size="sm"
                          className="bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all"
                          onClick={() =>
                            window.open("https://forms.gle/YOUR_GOOGLE_FORM_LINK", "_blank")
                          }
                        >
                          I’m Interested
                        </Button>
                      </div>

                    </CardContent>
                  </Card>
                </Animation>
              ))}
            </div>

            {/* BACK */}
            <Animation delay={roles.length * 130}>
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
      </Animation>

      {/* FLOATING BUTTON */}
      <Button
        size="icon"
        className="fixed bottom-6 right-6 z-50 rounded-full shadow-xl bg-primary text-white hover:bg-primary/90 transition-all"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </Button>
    </>
  );
};

export default Careers;
