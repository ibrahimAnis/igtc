import waLogo from "@/assets/wa-logo.svg";
import { analytics } from "@/lib/analytics";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Track WhatsApp button click
    analytics.trackClick("WhatsApp CTA Button", "https://wa.me/919561357752");
    analytics.trackEvent({
      category: "engagement",
      action: "whatsapp_click",
      label: "floating_button",
    });

    const message = "Hi, I'm interested in your export products and would like to know more about international shipping.";
    const whatsappUrl = `https://wa.me/919561357752?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-transparent border-0 p-0 shadow-lg hover:shadow-2xl transition-all duration-300 z-50 group animate-scale-in cursor-pointer"
      aria-label="Contact us on WhatsApp"
    >
      <img 
        src={waLogo} 
        alt="WhatsApp" 
        className="h-16 w-16 group-hover:scale-110 transition-transform drop-shadow-lg" 
      />
    </button>
  );
};

export default WhatsAppButton;
