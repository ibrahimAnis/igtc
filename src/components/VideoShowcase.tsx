import { Card } from "@/components/ui/card";

const VideoShowcase = () => {
  const videos = [
    {
      id: 1,
      src: "/video-1.mp4",
      title: "Farm Operations"
    },
    {
      id: 2,
      src: "/video-2.mp4",
      title: "Processing Excellence"
    }
  ];

  return (
    <section id="showcase" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Operations in Madhya Pradesh
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how we maintain excellence from West Nimar farms to finished products across Central India
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <Card 
              key={video.id}
              className="overflow-hidden hover-scale animate-fade-in shadow-soft hover:shadow-hover transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-video">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-4 bg-card">
                <h3 className="font-playfair text-xl font-semibold text-card-foreground">
                  {video.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
