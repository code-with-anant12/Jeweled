import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "wouter";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <a className="block group">
        <Card className="border-0 shadow-none transition-all hover:shadow-md bg-[#f8f7f6]/50">
          <CardContent className="p-0">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col items-start pt-4 px-2 h-[100px]">
            <h3 className="font-['Playfair_Display'] text-lg font-medium w-full">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              ${product.price.toLocaleString()}
            </p>
          </CardFooter>
        </Card>
      </a>
    </Link>
  );
}
