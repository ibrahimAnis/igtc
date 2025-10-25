import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { Card, CardContent } from "./ui/card";
import { Play, X, Video, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import processingArea from "../assets/processing-area.mp4";
import machinery1 from "../assets/machinery-1.mp4";
import storageVideo from "../assets/storage_video.mp4";
import storage1 from "../assets/storage-1.mp4";
import storage5 from "../assets/storage-5.mp4";
import storageVideo3 from "../assets/storage-video-3.mp4";
import machineryImg from "../assets/machinery-1.png";
import storageImg1 from "../assets/storage-image-1.png";
import storageImg2 from "../assets/storage-image-2.png";
import storageImg3 from "../assets/storage-image-3.png";
import storageImg4 from "../assets/storage-image-4.png";
import chickpeasImg from "../assets/chickpeas.jpg";

interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
}

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videos: VideoItem[] = [
    {
      id: "1",
      title: "Modern Processing Facility",
      description: "State-of-the-art agricultural processing unit with automated machinery",
      thumbnail: chickpeasImg,
      videoUrl: processingArea,
      category: "Processing"
    },
    {
      id: "2",
      title: "Advanced Machinery Operations",
      description: "High-capacity machinery for cleaning, sorting, and packaging agricultural products",
      thumbnail: machineryImg,
      videoUrl: machinery1,
      category: "Machinery"
    },
    {
      id: "3",
      title: "Temperature-Controlled Storage",
      description: "Modern warehouse facilities with climate control for product preservation",
      thumbnail: storageImg1,
      videoUrl: storageVideo,
      category: "Storage"
    },
    {
      id: "4",
      title: "Quality Control Process",
      description: "Rigorous quality inspection ensuring international export standards",
      thumbnail: storageImg2,
      videoUrl: storage1,
      category: "Quality"
    },
    {
      id: "5",
      title: "Export Packaging Line",
      description: "Automated packaging solutions for international shipping requirements",
      thumbnail: storageImg3,
      videoUrl: storage5,
      category: "Packaging"
    },
    {
      id: "6",
      title: "Loading & Logistics",
      description: "Efficient loading operations for container shipments worldwide",
      thumbnail: storageImg4,
      videoUrl: storageVideo3,
      category: "Logistics"
    }
  ];

  const handleVideoClick = (video: VideoItem) => {
    setSelectedVideo(video);
    setIsPlaying(false);
    setHasError(false);
    setIsLoading(false);
  };

  const handleClose = () => {
    setSelectedVideo(null);
    setIsPlaying(false);
    setHasError(false);
    setIsLoading(false);
    
    // Stop video playback
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
    setIsLoading(true);
  };

  const handleVideoLoaded = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleVideoError = () => {
    setIsLoading(false);
    setHasError(true);
    console.error(`Failed to load video: ${selectedVideo?.videoUrl}`);
  };

  // Auto-play when video is ready
  useEffect(() => {
    if (isPlaying && videoRef.current && !hasError) {
      videoRef.current.play().catch((error) => {
        console.error("Auto-play failed:", error);
        setHasError(true);
      });
    }
  }, [isPlaying, hasError]);

  return (
    <section id="video-gallery" className="py-20 bg-gradient-to-b from-secondary/10 via-background to-secondary/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <Video className="h-12 w-12 text-accent mx-auto" />
          </div>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-4">
            Facility & Operations Video Gallery
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" aria-hidden="true"></div>
          <p className="text-muted-foreground text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Take a virtual tour of our modern processing facilities, advanced machinery, and quality control operations
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Card 
              key={video.id}
              className="group cursor-pointer overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-fade-in border-2 border-accent/20 hover:border-accent bg-gradient-to-br from-white to-accent/5"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleVideoClick(video)}
            >
              <CardContent className="p-0">
                {/* Video Thumbnail */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={video.thumbnail}
                    alt={`${video.title} - Agricultural processing and export facility`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                    loading="lazy"
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-accent/90 rounded-full flex items-center justify-center group-hover:scale-125 group-hover:bg-accent transition-all duration-300 shadow-2xl">
                      <Play className="h-10 w-10 text-white ml-1" fill="white" />
                    </div>
                  </div>

                  {/* Hover Pulse Effect */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-20 h-20 bg-accent/30 rounded-full animate-ping"></div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 bg-accent text-white text-xs font-bold rounded-full shadow-lg">
                      {video.category}
                    </span>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6 bg-white">
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                  
                  {/* Watch Now Button */}
                  <div className="mt-4 flex items-center gap-2 text-accent group-hover:gap-3 transition-all duration-300">
                    <Play className="h-4 w-4" fill="currentColor" />
                    <span className="text-sm font-semibold">Watch Video</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Modal */}
        <Dialog open={!!selectedVideo} onOpenChange={handleClose}>
          <DialogContent className="max-w-7xl w-full p-0 overflow-hidden bg-black border-0">
            <DialogTitle className="sr-only">
              {selectedVideo?.title}
            </DialogTitle>
            
            {selectedVideo && (
              <div className="relative">
                {/* Close Button */}
                <Button
                  onClick={handleClose}
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-50 bg-black/70 hover:bg-black/90 text-white rounded-full h-12 w-12 shadow-xl"
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Video Player or Thumbnail */}
                <div className="relative aspect-video bg-black">
                  {isPlaying ? (
                    <div className="relative w-full h-full">
                      {/* Loading Spinner */}
                      {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
                          <div className="text-center">
                            <Loader2 className="h-12 w-12 text-accent animate-spin mx-auto mb-4" />
                            <p className="text-white text-sm">Loading video...</p>
                          </div>
                        </div>
                      )}

                      {/* Error Message */}
                      {hasError && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/90 z-10">
                          <div className="text-center p-8">
                            <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
                            <h3 className="text-white text-xl font-bold mb-2">Video Not Available</h3>
                            <p className="text-white/80 mb-4">
                              This video cannot be played. It may not exist or the format is not supported.
                            </p>
                            <p className="text-white/60 text-sm mb-4">
                              File: {selectedVideo.videoUrl}
                            </p>
                            <Button
                              onClick={handleClose}
                              className="bg-accent hover:bg-accent/90 text-white"
                            >
                              Close
                            </Button>
                          </div>
                        </div>
                      )}

                      {/* Video Element */}
                      <video 
                        ref={videoRef}
                        src={selectedVideo.videoUrl}
                        controls
                        className="w-full h-full"
                        onLoadedData={handleVideoLoaded}
                        onError={handleVideoError}
                        onEnded={() => setIsPlaying(false)}
                        playsInline
                        preload="metadata"
                      >
                        <source src={selectedVideo.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : (
                    <div className="relative w-full h-full">
                      <img 
                        src={selectedVideo.thumbnail}
                        alt={selectedVideo.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <button
                          onClick={handlePlayClick}
                          className="w-28 h-28 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl group"
                        >
                          <Play className="h-14 w-14 text-white ml-1 group-hover:scale-110 transition-transform" fill="white" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-accent border-0">
            <CardContent className="p-8 md:p-12">
              <Video className="h-16 w-16 text-white mx-auto mb-4" />
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
                Want to See More?
              </h3>
              <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
                Schedule a virtual facility tour or visit us in person to see our operations firsthand
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-6 text-lg shadow-xl"
                onClick={() => {
                  const whatsappUrl = `https://wa.me/919561357752?text=${encodeURIComponent("Hi, I'd like to schedule a facility tour.")}`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                Schedule a Tour
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
