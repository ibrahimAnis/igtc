import { MapPin, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServiceArea = () => {
  const regions = [
    {
      state: "Madhya Pradesh",
      cities: ["West Nimar", "Indore", "Bhopal", "Ujjain", "Dewas", "Ratlam", "Mandsaur"],
      isPrimary: true
    },
    {
      state: "Maharashtra",
      cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
      isPrimary: false
    },
    {
      state: "Gujarat",
      cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
      isPrimary: false
    },
    {
      state: "Rajasthan",
      cities: ["Jaipur", "Udaipur", "Kota", "Jodhpur"],
      isPrimary: false
    }
  ];

  return (
    <section id="service-area" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Service Coverage Across Central India
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" aria-hidden="true"></div>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Serving businesses across Madhya Pradesh and neighboring states with reliable wholegrain supply and distribution
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {regions.map((region, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 ${
                region.isPrimary ? 'border-accent border-2' : ''
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${
                    region.isPrimary ? 'bg-accent' : 'bg-accent/20'
                  }`}>
                    <MapPin className={`h-5 w-5 ${
                      region.isPrimary ? 'text-accent-foreground' : 'text-accent'
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-foreground">
                      {region.state}
                    </h3>
                    {region.isPrimary && (
                      <span className="text-xs text-accent font-semibold">Primary Service Area</span>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {region.cities.map((city, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                      <span>{city}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-lg">
            <strong className="text-foreground">Based in West Nimar, Madhya Pradesh</strong> — We deliver premium wholegrains to businesses throughout Central India and beyond
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
