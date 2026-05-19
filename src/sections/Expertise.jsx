const technical = [
    {
        name: "Experienced Inspection Team",
        description: ["10+ years of industry experience",
            "Strong technical background in welding and quality control",
            "Practical experience in fabrication, inspection, and project QA/QC"
        ],
    },
    {
        name: "Professional Certifications",
        description: [
            "CSWIP 3.1 Welding Inspector",
            "CSWIP 3.2 Senior Welding Inspector",
            "ISO 9712 Level II NDT Certification",
            "ASNT NDT Certification",
            "PCN NDT Certification",
            "API Inspector Certifications",
            "BGAS Welding Inspection Certification",
            "NACE CIP / CP Coating Inspection Certification",
        ],
    },
    {
        name: "Standards & Codes Knowledge",
        description: [
            "API Standards",
            "EN Standards",
            "ISO Standards",
            "AWS Codes",
            "ASME Codes",
            "AS Standards",
            "Pressure Equipment Directive (PED)"

        ],
    },
];
export const Expertise = () => {
    return (
        <section id="expertise" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium ium tracking-wider uppercase ">
                                TECHNICAL EXPERTISE
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
                    <div className="grid sm:grid-cols-3 gap-2">
                        {technical.map((item, idx) => (
                            <div
                                key={idx}
                                className="glass p-3 rounded-2xl animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                <h3 className="text-secondary-foreground text-sm font-semibold mb-2">{item.name}</h3>
                                <ul className="list-[circle] pl-3 ">
                                    {item.description.map((des, idx) => (
                                        <li key={idx} className="pt-2"><p className="text-sm text-muted-foreground">{des}</p></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
