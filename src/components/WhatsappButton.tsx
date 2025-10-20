import waLogo from "@/assets/wa-logo.svg";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi, I'm interested in your wholegrain products and would like to know more.";
    const whatsappUrl = `https://wa.me/917000845488?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group animate-scale-in"
      aria-label="Contact us on WhatsApp"
    >
      <img 
        src={waLogo} 
        alt="WhatsApp" 
        className="h-16 w-auto group-hover:scale-110 transition-transform" 
      />
    </button>
  );
};

export default WhatsAppButton;
