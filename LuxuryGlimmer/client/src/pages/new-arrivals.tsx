import { motion } from "framer-motion";

export default function NewArrivals() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="container mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h1 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold mb-6">
          New Arrivals
        </h1>
        <p className="text-lg text-muted-foreground">
          No new arrivals as of {currentDate}. Check back soon for our latest collections.
        </p>
      </motion.div>
    </div>
  );
}
