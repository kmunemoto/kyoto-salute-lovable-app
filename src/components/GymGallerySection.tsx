import gymInterior from "@/assets/gym-interior.jpg";

const GymGallerySection = () => {
  return (
    <section className="bg-background px-6 md:px-12 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-sm overflow-hidden">
          <img
            src={gymInterior}
            alt="Salute御所南の店内設備"
            loading="lazy"
            className="w-full h-48 md:h-80 object-cover"
          />
        </div>
        <p className="text-center text-muted-foreground text-sm font-body mt-3">
          充実した設備で効率的なトレーニングを
        </p>
      </div>
    </section>
  );
};

export default GymGallerySection;
