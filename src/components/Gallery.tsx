import React, { useState, useCallback } from "react";
import { X, Eye } from "lucide-react";
import GalleryThreeElements from "./GalleryThreeElements";

// Dynamically import all images from assets/images using Vite's import.meta.glob
const imageModules = import.meta.glob("../assets/images/*.{jpg,jpeg,png}", {
  eager: true,
  as: "url",
}) as Record<string, string>;

const toTitle = (filePath: string) => {
  const file = filePath.split("/").pop() || "";
  const name = file.replace(/\.[^.]+$/, "");
  return name
    .replace(/[-_]+/g, " ")
    .replace(/FB IMG/gi, "Project")
    .replace(/IMG(?:-|_)?/gi, "Project ") // normalize IMG patterns
    .replace(/WA\d+/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();
};

const galleryImages = Object.entries(imageModules)
  .sort((a, b) => a[0].localeCompare(b[0]))
  .map(([path, src], index) => ({
    id: index + 1,
    src,
    alt: toTitle(path) || `Gallery Image ${index + 1}`,
  }))
  .slice(0, 100); // limit (adjust as needed)

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = useCallback((imageSrc: string) => {
    setSelectedImage(imageSrc);
  }, []);

  const handleCloseModal = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setSelectedImage(null);
  }, []);

  const handleModalClick = useCallback(
    (e: React.MouseEvent) => {
      // Only close if clicking on the backdrop, not the image
      if (e.target === e.currentTarget) {
        handleCloseModal();
      }
    },
    [handleCloseModal]
  );

  return (
    <section
      id="gallery"
      className="py-20 bg-addore-primary relative overflow-hidden"
    >
      {/* Three.js Elements */}
      <GalleryThreeElements />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-addore-secondary mb-4">
            Our Work
          </h2>
          <p className="text-lg text-addore-warm-gray max-w-2xl mx-auto">
            Explore our portfolio of stunning interior designs that showcase our
            commitment to excellence and attention to detail.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-white hover-zoom cursor-pointer"
              onClick={() => handleImageClick(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={handleModalClick}
          >
            <div
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors duration-300 z-10"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
