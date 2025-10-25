import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { analytics } from "@/lib/analytics";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 95613-57752",
      link: "tel:+919561357752"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@interglobetc.com",
      link: "mailto:info@interglobetc.com"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "13, Bank Colony, Mangrul Road, Khargone 451001, Madhya Pradesh, India",
      link: "https://maps.google.com/?q=13+Bank+Colony+Mangrul+Road+Khargone+451001"
    }
  ];

  const handleContactClick = (type: string, link: string) => {
    analytics.trackClick(`Contact - ${type}`, link);
    analytics.trackEvent({
      category: "contact",
      action: "contact_method_click",
      label: type.toLowerCase(),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track form submission
    analytics.trackEvent({
      category: "form",
      action: "contact_form_submit",
      label: "contact_page",
    });

    // Form submission logic here
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Create WhatsApp message
    const whatsappMessage = `Hi, I'm ${name}.\nEmail: ${email}\n\n${message}`;
    const whatsappUrl = `https://wa.me/919561357752?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us for Global Export Inquiries
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" aria-hidden="true"></div>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Based in Khargone, Madhya Pradesh — Exporting premium agricultural products to Singapore, Malaysia, UAE, Europe, USA, and worldwide
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
              Get in Touch
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team is ready to discuss your wholegrain needs and explore partnership opportunities. Reach out through any of the channels below.
            </p>
            
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <CardContent className="p-6">
                  <a 
                    href={info.link}
                    onClick={() => handleContactClick(info.title, info.link)}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-accent/10 p-3 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <info.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {info.details}
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-primary border-primary">
              <CardContent className="p-6">
                <h4 className="font-playfair text-xl font-bold text-primary-foreground mb-2">
                  Business Hours
                </h4>
                <p className="text-primary-foreground/90 mb-1">Monday - Friday: 10:00 AM - 7:00 PM</p>
                <p className="text-primary-foreground/90">Saturday - Sunday: Closed</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your requirements..."
                      required
                      rows={5}
                      className="w-full resize-none"
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
