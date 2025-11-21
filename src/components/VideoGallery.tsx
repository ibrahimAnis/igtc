import { Video } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import processingArea from "../assets/processing-area.mp4";

const VideoGallery = () => {

  return (
    <section id="video-gallery" className="py-20 bg-gradient-to-b from-secondary/10 via-background to-secondary/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <Video className="h-12 w-12 text-accent mx-auto" />
          </div>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-4">
            Facility & Operations Video
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" aria-hidden="true"></div>
        </div>

        {/* Centered Video Player */}
        <div className="flex justify-center items-center mb-16">
          <div className="w-full max-w-5xl">
            <Card className="overflow-hidden border-2 border-accent/30 shadow-2xl">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-black">
                  <video 
                    src={processingArea}
                    controls
                    className="w-full h-full"
                    playsInline
                    preload="metadata"
                  >
                    <source src={processingArea} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
