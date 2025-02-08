import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "@/components/product/product-card";
import type { Product } from "@shared/schema";
import { motion } from "framer-motion";

export default function Products() {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"]
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-muted aspect-square rounded-lg" />
              <div className="mt-4 space-y-2">
                <div className="h-4 bg-muted rounded w-3/4" />
                <div className="h-4 bg-muted rounded w-1/4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
      >
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {/* Added sample products for demonstration */}
        <ProductCard key="demo1" product={{id:"demo1", name: "Demo Product 1", description: "This is a demo product.", price: 19.99, image:"/demo-image1.jpg"}} />
        <ProductCard key="demo2" product={{id:"demo2", name: "Demo Product 2", description: "Another demo product.", price: 29.99, image:"/demo-image2.jpg"}} />
      </motion.div>
    </div>
  );
}