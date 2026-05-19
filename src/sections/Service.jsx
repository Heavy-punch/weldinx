import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const services = [
    {
        title: "Third Party Inspection",
        description: ["Specialized in Boiler, Pressure Vessel, HRSG, Steel Structure & Wind Tower.", "Ensuring full compliance with specifications and international standards (ASME, EN ISO, AWS, AS).", "WPS qualification, welder testing & certification."],
        image: "/service/service_1.jpg",
    },
    {
        title: "In-service inspection",
        description: ["Visual inspection, advanced NDT control & corrosion assessment.", "Remaining life assessment & damage evaluation.", "Inspection in accordance with API 510 / 570 / 653."],
        image: "/service/service_2.jpg",
    },
    {
        title: "Expediting Services and Supplier Audit",
        description: ["Monitor production progress, timelines.", "Supplier audit: mill manufacturers (plate, pipe, fittings, valves ...) and fabrication vendors.", "Coordination, reporting & follow-up."],
        image: "/service/service_3.png",
    },
    {
        title: "Quality system consulting",
        description: ["QMS in accordance with EN 1090 / ISO 3834 / ASME / AS 5131 / PED.", "QA/QC procedures welding system setup.", "Lean process improvement."],
        image: "/service/service_4.jpg",
    },

];

export const Service = () => {
    return (
        <section id="services" className="py-32 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                       our service
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Reliable Inspection 
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                           Assured Quality
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                       At WeldinX, we offer specialized technical services to ensure quality and compliance throughout the fabrication process.
                    </p>
                </div>

                {/* services Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div
                                    className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                                />
                                {/* Overlay Links */}
                                {/* <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={service.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={service.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div> */}
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <ArrowUpRight
                                        className="w-5 h-5 
                                                    text-muted-foreground group-hover:text-primary
                                                    group-hover:translate-x-1 
                                                    group-hover:-translate-y-1 transition-all"
                                    />
                                </div>
                                <ul className="list-[circle] pl-5">
                                    {service.description.map((item, index) => (
                                        <li key={index} className="text-muted-foreground text-sm ">
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                {/* <p className="text-muted-foreground text-sm">
                                    {service.description}
                                </p> */}
                                {/* <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All CTA */}
                {/* <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All services
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div> */}
            </div>
        </section>
    );
};
