import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { SUPPLIER } from "../data/supplier";


export const Supplier = () => {
    return (
        <section id="supplier" className="py-32 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-30 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        SUPPLIER AUDIT_Experience list
                    </span>
                </div>

                <div className="p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 glass flex item-center justify-center 
                 bg-center  bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.7)),url(/supplier_photo.jpg)]">
                    <ul className="list-[circle] pl-5 rounded-full z-10">
                        {SUPPLIER.map((item, index) => (
                            <li key={index} className="text-muted-foreground text-md hover:text-foreground opacity-100">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
