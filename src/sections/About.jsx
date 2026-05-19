import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

// const highlights = [
//   {
//     icon: Code2,
//     title: "Clean Code",
//     description:
//       "Writing maintainable, scalable code that stands the test of time.",
//   },
//   {
//     icon: Rocket,
//     title: "Performance",
//     description:
//       "Optimizing for speed and delivering lightning-fast user experiences.",
//   },
//   {
//     icon: Users,
//     title: "Collaboration",
//     description: "Working closely with teams to bring ideas to life.",
//   },
//   {
//     icon: Lightbulb,
//     title: "Innovation",
//     description:
//       "Staying ahead with the latest technologies and best practices.",
//   },
// ];
const focus = [
  "Independent inspection", "Fabrication quality control", "Welding inspection", "Supplier audit", "Welding Procedure Qualification (WPS)", "Welder Qualification / Certification", "Project expediting"
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium ium tracking-wider uppercase ">
                About WeldinX
              </span>
            </div>

            {/* <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2> */}

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                WeldinX provides independent inspection, expediting, supplier audit, and technical consulting services to support fabrication and manufacturing projects.


                WeldinX also provides welding procedure qualification (WPS) and welder certification activities.
              </p>
              <p>
                With extensive experience in welding, fabrication, and industrial equipment, WeldinX supports clients by providing professional inspection services at manufacturing facilities, verifying that production activities meet project specifications and international standards.
              </p>
              <p>
                WeldinX also provides welding procedure qualification (WPS) and welder certification activities.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Our mission is to help clients ensure quality, compliance, and reliability throughout the production process."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {focus.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div> */}
                <h3 className="text-secondary-foreground text-sm font-semibold mb-2">{item}</h3>
                {/* <p className="text-sm text-muted-foreground">
                  {item.description}
                </p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
