import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Link } from 'wouter';

export function CartSheet() {
  const { cart, removeItem, updateQuantity } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingBag className="h-5 w-5" />
          {cart.items.length > 0 && (
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
              {cart.items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <Separator className="my-4" />
        {cart.items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            <p className="text-muted-foreground">Your cart is empty</p>
            <Link href="/products">
              <Button className="bg-[#f8f7f6]/50 dark:bg-zinc-800/50 hover:bg-[#f8f7f6]/70 dark:hover:bg-zinc-800/70 border-0">
                Explore Collection
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4">
                {cart.items.map((item) => (
                  <div key={item.productId} className="flex gap-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-24 w-24 object-cover rounded-lg"
                    />
                    <div className="flex-1 space-y-2">
                      <h3 className="font-medium">{item.product.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        ${Number(item.product.price).toLocaleString()}
                      </p>
                      <div className="flex items-center gap-2">
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.productId, parseInt(e.target.value))
                          }
                          className="w-20"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.productId)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="mt-6 space-y-4">
              <Separator />
              <div className="flex justify-between">
                <span className="font-medium">Total</span>
                <span className="font-medium">
                  ${cart.total.toLocaleString()}
                </span>
              </div>
              <Link href="/cart">
                <Button className="w-full bg-[#f8f7f6]/50 dark:bg-zinc-800/50 hover:bg-[#f8f7f6]/70 dark:hover:bg-zinc-800/70 border-0">
                  View Cart & Checkout
                </Button>
              </Link>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}