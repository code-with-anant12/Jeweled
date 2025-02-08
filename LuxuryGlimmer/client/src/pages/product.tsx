import { useQuery } from "@tanstack/react-query";
import { useRoute } from "wouter";
import type { Product } from "@shared/schema";
import { ProductViewer } from "@/components/product/product-viewer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useCart } from "@/lib/cart";
import { useToast } from "@/components/ui/use-toast";

export default function Product() {
  const [, params] = useRoute("/product/:id");
  const { data: product, isLoading } = useQuery<Product>({
    queryKey: [`/api/products/${params?.id}`]
  });
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    if (product) {
      addItem(product);
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
    }
  };

  if (isLoading || !product) {
    return (
      <div className="container mx-auto px-6 py-24">
        <div className="animate-pulse">
          <div className="bg-muted aspect-square rounded-lg" />
          <div className="mt-8 space-y-4">
            <div className="h-8 bg-muted rounded w-1/2" />
            <div className="h-4 bg-muted rounded w-full" />
            <div className="h-4 bg-muted rounded w-3/4" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ProductViewer modelUrl={product.modelUrl} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h1 className="font-['Playfair_Display'] text-3xl font-bold">
            {product.name}
          </h1>
          <p className="text-2xl font-medium">
            ${product.price.toLocaleString()}
          </p>
          <p className="text-muted-foreground">
            {product.description}
          </p>
          <Button size="lg" className="w-full md:w-auto" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </motion.div>
      </div>
    </div>
  );
}