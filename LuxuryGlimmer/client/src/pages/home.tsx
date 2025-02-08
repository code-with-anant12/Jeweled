import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold leading-tight">
              Timeless Elegance, Modern Craftsmanship
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Discover our collection of exquisite jewelry pieces, crafted with precision and passion.
            </p>
            <Link href="/products">
              <Button size="lg" className="mt-8">
                Explore Collection
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Images Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {featuredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="aspect-square overflow-hidden rounded-lg"
              >
                <img
                  src={image}
                  alt="Luxury jewelry"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-black/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                alt="Master Jeweler"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-['Playfair_Display'] text-3xl font-bold">
                About the Artisan
              </h2>
              <p className="text-muted-foreground">
                With over two decades of experience in fine jewelry crafting, Sarah Mitchell has established herself as a leading artisan in bespoke jewelry design. Her passion for combining traditional techniques with contemporary aesthetics has earned her recognition worldwide.
              </p>
              <p className="text-muted-foreground">
                Each piece is meticulously crafted in her London atelier, ensuring the highest standards of quality and attention to detail that her clients have come to expect.
              </p>
              <Button className="bg-[#97c4a5]/50 hover:bg-[#97c4a5]/70 border-0">Learn More</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-16 px-6 bg-primary/5">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="font-['Playfair_Display'] text-3xl font-bold">
              Secure Payment Options
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="p-6 rounded-lg bg-background/80 backdrop-blur-sm">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="font-medium">Credit Card</h3>
              </div>
              <div className="p-6 rounded-lg bg-background/80 backdrop-blur-sm">
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="font-medium">Bank Transfer</h3>
              </div>
              <div className="p-6 rounded-lg bg-background/80 backdrop-blur-sm">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="font-medium">Digital Wallet</h3>
              </div>
              <div className="p-6 rounded-lg bg-background/80 backdrop-blur-sm">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="font-medium">Cash on Delivery</h3>
              </div>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We ensure secure transactions through industry-leading encryption and trusted payment partners. All purchases are protected by our buyer guarantee.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const featuredImages = [
  "https://images.unsplash.com/photo-1638517747460-4d9e114ab3e7",
  "https://images.unsplash.com/photo-1638517747421-a1eb8b4c9828",
  "https://images.unsplash.com/photo-1638517747420-c31bef7cf640"
];