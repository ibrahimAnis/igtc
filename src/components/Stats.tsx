import { TrendingUp, Users, Award, Factory } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "25+",
      label: "Years of Excellence",
      description: "Industry leadership"
    },
    {
      icon: Users,
      value: "500+",
      label: "B2B Partners",
      description: "Trusted globally"
    },
    {
      icon: Award,
      value: "15+",
      label: "Industry Awards",
      description: "Quality recognition"
    },
    {
      icon: Factory,
      value: "10,000+",
      label: "Tons Monthly",
      description: "Production capacity"
    }
  ];

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Leading Wholegrain Supplier in Madhya Pradesh
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" aria-hidden="true"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-scale-in group cursor-default"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full group-hover:bg-accent/30 transition-colors">
                <stat.icon className="h-8 w-8 text-accent" />
              </div>
              <div className="font-playfair text-4xl md:text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="font-inter text-lg font-semibold text-primary-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-primary-foreground/70">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
