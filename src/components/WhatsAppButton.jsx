function WhatsAppButton() {
  const message = "Hey! I’d love to know more about the treks 🌿";
  const phoneNumber = "7536861503";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-[#25D366] hover:bg-[#1DA851] text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12.04 2.003a9.91 9.91 0 00-9.938 9.938 9.89 9.89 0 001.365 5.027L2 22l5.17-1.39a9.918 9.918 0 004.87 1.251h.001a9.91 9.91 0 000-19.818zm.002 17.96a8.09 8.09 0 01-4.12-1.145l-.294-.175-3.07.826.82-2.992-.19-.307a7.937 7.937 0 01-1.23-4.27 8.08 8.08 0 0116.158-.002 8.08 8.08 0 01-8.073 8.065zm4.424-6.062c-.241-.12-1.427-.703-1.65-.783-.222-.08-.383-.12-.544.12-.16.24-.624.783-.766.945-.141.16-.282.18-.523.06-.241-.12-1.02-.375-1.943-1.194-.719-.639-1.203-1.428-1.342-1.67-.14-.24-.015-.37.106-.49.11-.11.241-.282.362-.423.121-.14.161-.241.241-.402.08-.16.04-.301-.02-.422-.06-.12-.544-1.308-.744-1.794-.2-.48-.4-.41-.544-.41h-.462c-.16 0-.42.06-.641.281s-.84.82-.84 2.001c0 1.18.86 2.32.98 2.48.12.16 1.692 2.6 4.11 3.64.576.248 1.024.396 1.374.506.577.184 1.1.158 1.514.096.462-.07 1.427-.584 1.63-1.148.201-.564.201-1.047.14-1.147-.06-.1-.221-.16-.462-.281z" />
      </svg>
    </a>
  );
}

export default WhatsAppButton;
