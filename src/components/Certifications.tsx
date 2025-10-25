import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Award, FileCheck, Globe } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      icon: ShieldCheck,
      title: "FSSAI Certified",
      license: "License No: [Your FSSAI Number]",
      description: "Food Safety and Standards Authority of India certified processing unit ensuring highest quality and safety standards for all exported products.",
      color: "bg-green-500"
    },
    {
      icon: Award,
      title: "Export Quality Certification",
      license: "Export Code: [Your Export Code]",
      description: "Authorized exporter with international quality certifications for agricultural products to Singapore, Malaysia, UAE, USA, and Europe.",
      color: "bg-blue-500"
    },
    {
      icon: FileCheck,
      title: "ISO Quality Standards",
      license: "ISO Compliant Facility",
      description: "Our processing and storage facilities meet international ISO standards for food safety, quality management, and export readiness.",
      color: "bg-purple-500"
    },
    {
      icon: Globe,
      title: "International Compliance",
      license: "Multi-Country Approved",
      description: "Our products meet quality and safety regulations for export to USA, UK, Europe, Middle East, and Asian markets.",
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <ShieldCheck className="h-12 w-12 text-accent mx-auto" />
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Quality Certifications & Compliance
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" aria-hidden="true"></div>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Internationally certified and compliant with global food safety standards for exporting agricultural products worldwide
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-t-4 border-transparent hover:border-accent"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${cert.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-foreground mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-accent mb-3">
                  {cert.license}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FSSAI Details Section */}
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden border-2 border-accent/30">
            <div className="bg-gradient-to-r from-green-600 to-green-500 p-6 text-white">
              <div className="flex items-center gap-4">
                <ShieldCheck className="h-12 w-12" />
                <div>
                  <h3 className="font-playfair text-2xl font-bold mb-1">
                    FSSAI Food Safety Certification
                  </h3>
                  <p className="text-white/90 text-sm">
                    Ensuring Safe, Hygienic, and Quality Food Products for Global Export
                  </p>
                </div>
              </div>
            </div>
            
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* FSSAI Details */}
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-4">Certificate Details</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <FileCheck className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">License Number</p>
                        <p className="text-sm text-muted-foreground">[Your FSSAI License Number]</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileCheck className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">Valid Until</p>
                        <p className="text-sm text-muted-foreground">[Validity Date]</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileCheck className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">Category</p>
                        <p className="text-sm text-muted-foreground">Food Processing & Export</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileCheck className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">Facility Address</p>
                        <p className="text-sm text-muted-foreground">13, Bank Colony, Mangrul Road, Khargone 451001, MP</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What FSSAI Means */}
                <div>
                  <h4 className="font-semibold text-lg text-foreground mb-4">What This Certification Means</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      <p className="text-sm text-muted-foreground">Compliant with Indian food safety and hygiene standards</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      <p className="text-sm text-muted-foreground">Regular quality inspections and audits by government authorities</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      <p className="text-sm text-muted-foreground">Safe processing, storage, and packaging of food products</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      <p className="text-sm text-muted-foreground">Authorized for domestic and international food trade</p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                      <p className="text-sm text-muted-foreground">Meets quality standards for export to global markets</p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-8 p-6 bg-green-50 border-2 border-green-200 rounded-lg text-center">
                <p className="text-green-800 font-semibold mb-2">
                  ✓ Verified & Certified by Food Safety and Standards Authority of India
                </p>
                <p className="text-sm text-green-700">
                  Your assurance of quality, safety, and compliance for international trade
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-accent mb-2">100%</div>
            <p className="text-sm text-muted-foreground">Quality Compliance</p>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-accent mb-2">50+</div>
            <p className="text-sm text-muted-foreground">Countries Served</p>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-accent mb-2">10+</div>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

