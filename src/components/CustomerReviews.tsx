import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews = [
    {
      id: 1,
      name: "Ahmed Al-Rashid",
      company: "Dubai Foods Trading LLC",
      country: "UAE",
      rating: 5,
      review: "Exceptional quality rice and spices! We've been importing from IGTC for over 3 years. Their consistency in quality and timely delivery makes them our preferred supplier for the UAE market.",
      product: "Basmati Rice & Spices"
    },
    {
      id: 2,
      name: "Sarah Tan",
      company: "Singapore Fresh Imports",
      country: "Singapore",
      rating: 5,
      review: "Outstanding service and premium quality products. The fresh produce arrives in perfect condition every time. Their export documentation and logistics support is seamless.",
      product: "Fresh Produce & Millets"
    },
    {
      id: 3,
      name: "Marcus Thompson",
      company: "Euro Organic Foods Ltd",
      country: "United Kingdom",
      rating: 5,
      review: "IGTC has been instrumental in supplying organic pulses and grains to our UK operations. FSSAI certification and consistent quality make them a trusted partner for European markets.",
      product: "Organic Pulses & Grains"
    },
    {
      id: 4,
      name: "Fatima Hassan",
      company: "Qatar Premium Foods",
      country: "Qatar",
      rating: 5,
      review: "Reliable export partner with excellent cold chain logistics. Their fresh banana and papaya shipments maintain perfect quality. Highly recommend for Middle East imports.",
      product: "Fresh Fruits"
    },
    {
      id: 5,
      name: "Michael Chen",
      company: "Pacific Trading Corporation",
      country: "USA",
      rating: 5,
      review: "Professional service from sourcing to delivery. Their tree gum and chickpeas meet all FDA standards. Great communication and competitive pricing for bulk orders.",
      product: "Tree Gum & Chickpeas"
    },
    {
      id: 6,
      name: "Rajesh Kumar",
      company: "Malaysia Food Distributors",
      country: "Malaysia",
      rating: 5,
      review: "Best quality soyabean and wheat for our processing facility. IGTC's quality control is exceptional. They understand international export requirements perfectly.",
      product: "Soyabean & Wheat"
    }
  ];

  const visibleReviews = 3;
  const maxIndex = reviews.length - visibleReviews;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-background via-secondary/20 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Star className="h-10 w-10 text-accent fill-accent" />
            <Star className="h-10 w-10 text-accent fill-accent" />
            <Star className="h-10 w-10 text-accent fill-accent" />
          </div>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-4">
            What Our Global Clients Say
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" aria-hidden="true"></div>
          <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Trusted by importers across Singapore, UAE, USA, UK, Malaysia, Qatar, and 50+ countries worldwide
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            onClick={handlePrev}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white shadow-xl border-2 border-accent hover:bg-accent hover:text-white transition-all duration-300 hidden md:flex"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={handleNext}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white shadow-xl border-2 border-accent hover:bg-accent hover:text-white transition-all duration-300 hidden md:flex"
            aria-label="Next reviews"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Reviews Container */}
          <div className="overflow-hidden px-4 md:px-16">
            <div
              className="flex transition-transform duration-700 ease-in-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleReviews + 2)}%)`
              }}
            >
              {reviews.map((review, index) => (
                <Card
                  key={review.id}
                  className={`flex-shrink-0 w-full md:w-[calc(33.333%-16px)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 border-accent/20 hover:border-accent bg-gradient-to-br from-white to-accent/5 ${
                    index >= currentIndex && index < currentIndex + visibleReviews
                      ? "opacity-100"
                      : "opacity-50 md:opacity-100"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Quote Icon */}
                    <Quote className="h-10 w-10 text-accent/30 mb-4" />

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-foreground text-base leading-relaxed mb-6 flex-grow italic">
                      "{review.review}"
                    </p>

                    {/* Product Badge */}
                    <div className="mb-4">
                      <span className="px-3 py-1.5 bg-accent/10 text-accent text-xs font-bold rounded-full">
                        {review.product}
                      </span>
                    </div>

                    {/* Reviewer Info */}
                    <div className="border-t border-accent/20 pt-4 mt-auto">
                      <h4 className="font-playfair text-lg font-bold text-foreground mb-1">
                        {review.name}
                      </h4>
                      <p className="text-sm text-muted-foreground font-medium">
                        {review.company}
                      </p>
                      <p className="text-xs text-accent font-semibold mt-1">
                        📍 {review.country}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-8">
            <Button
              onClick={handlePrev}
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full border-2 border-accent hover:bg-accent hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full border-2 border-accent hover:bg-accent hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(maxIndex + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-accent"
                    : "w-2 bg-accent/30 hover:bg-accent/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-accent border-0">
            <CardContent className="p-8 md:p-12">
              <Star className="h-16 w-16 text-white mx-auto mb-4 fill-white" />
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
                Join Our Global Client Network
              </h3>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                Experience world-class agricultural export services with FSSAI certified quality and reliable international shipping
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-6 text-lg shadow-xl"
                onClick={() => {
                  const whatsappUrl = `https://wa.me/919561357752?text=${encodeURIComponent("Hi, I'm interested in becoming an import partner.")}`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                Become an Import Partner
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;

