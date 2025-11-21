import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";
import iecLogo from "@/assets/iec.svg";
import apedaLogo from "@/assets/apeda.svg";

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <ShieldCheck className="h-12 w-12 text-accent mx-auto" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Certifications
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" aria-hidden="true"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* IEC Certificate */}
          <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-accent/20 hover:border-accent bg-white">
            <CardContent className="p-12">
              <img 
                src={iecLogo} 
                alt="IEC - Importer Exporter Code Certificate" 
                className="w-full h-64 object-contain mb-6"
              />
              <h3 className="font-playfair text-2xl font-bold text-foreground text-center">
                IEC Certificate
              </h3>
            </CardContent>
          </Card>

          {/* APEDA Certificate */}
          <Card className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-accent/20 hover:border-accent bg-white">
            <CardContent className="p-12">
              <img 
                src={apedaLogo} 
                alt="APEDA - Agricultural and Processed Food Products Export Development Authority" 
                className="w-full h-64 object-contain mb-6"
              />
              <h3 className="font-playfair text-2xl font-bold text-foreground text-center">
                APEDA Registered
              </h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

