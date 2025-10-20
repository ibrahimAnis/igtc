import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Team = () => {
  const owners = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "/api/placeholder/200/200", // Replace with actual image path
      description: "25+ years of experience in agricultural commodities and wholegrain manufacturing.",
      initials: "RK"
    },
    {
      name: "Priya Sharma",
      role: "Co-Founder & Operations Director",
      image: "/api/placeholder/200/200", // Replace with actual image path
      description: "Expert in supply chain management and quality control for agricultural products.",
      initials: "PS"
    }
  ];

  return (
    <section id="team" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our Leadership
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" aria-hidden="true"></div>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Passionate leaders committed to excellence in wholegrain manufacturing and sustainable agriculture
          </p>
        </div>

        {/* Owners Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {owners.map((owner, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-6">
                  <Avatar className="h-40 w-40 border-4 border-accent group-hover:border-accent/70 transition-colors">
                    <AvatarImage 
                      src={owner.image} 
                      alt={owner.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="text-4xl font-bold bg-accent text-accent-foreground">
                      {owner.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                  {owner.name}
                </h3>
                <p className="text-accent font-semibold mb-4">
                  {owner.role}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {owner.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

