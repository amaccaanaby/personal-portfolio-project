import { useEffect, useState } from "react";

const ProjectSlider = ({ images }: { images: string[] }) => {
        
    const [currentIndex, setCurrentIndex] = useState(0);
      useEffect(() => {
        if (images.length <= 1) return; 
    
        const interval = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
    
        return () => clearInterval(interval);
      }, [images]);
      

  return (
    <div className="absolute inset-0">
    {images.map((image, index) => (
      <img
        key={image}
        src={image}
        alt=""
        className={`
          absolute inset-0
          h-full w-full
          object-cover
          transition-opacity duration-1000 ease-in-out
          ${index === currentIndex ? "opacity-100" : "opacity-0"}
        `}
      />
    ))}
  </div>
  );
}
export default ProjectSlider;