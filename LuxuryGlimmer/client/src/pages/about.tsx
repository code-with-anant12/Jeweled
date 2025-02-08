import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-6">
            About Us
          </h1>
          <p className="text-lg text-muted-foreground">
            Crafting timeless pieces that tell your unique story
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="grid gap-16">
          {/* Mission Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="font-['Playfair_Display'] text-3xl font-bold">
              Our Mission
            </h2>
            <p className="text-muted-foreground">
              [Your mission statement here]
            </p>
          </motion.section>

          {/* Values Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="font-['Playfair_Display'] text-3xl font-bold">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Add your values here */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">[Value 1]</h3>
                <p className="text-muted-foreground">[Description]</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">[Value 2]</h3>
                <p className="text-muted-foreground">[Description]</p>
              </div>
            </div>
          </motion.section>

          {/* Team Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-['Playfair_Display'] text-3xl font-bold">
              Our Team
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Add team members here */}
              <div className="space-y-4">
                <div className="aspect-square w-full max-w-xs mx-auto bg-muted rounded-lg" />
                <h3 className="text-xl font-semibold text-center">[Name]</h3>
                <p className="text-muted-foreground text-center">[Position]</p>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
