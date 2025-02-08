
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "wouter";

export default function CartPage() {
  const { cart } = useCart();
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {cart.items.map((item) => (
            <div key={item.productId} className="flex gap-4 border p-4 rounded-lg">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="h-24 w-24 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-medium">{item.product.name}</h3>
                <p className="text-sm text-muted-foreground">
                  ${Number(item.product.price).toLocaleString()}
                </p>
                <p className="text-sm">Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Link href="/payment/credit-card">
              <div
                className="p-6 rounded-lg bg-background/80 backdrop-blur-sm cursor-pointer border hover:border-primary"
                onClick={() => setSelectedPayment('credit')}
              >
                <div className="text-4xl mb-4">💳</div>
                <h3 className="font-medium">Credit Card</h3>
              </div>
            </Link>
            <Link href="/payment/bank">
              <div
                className="p-6 rounded-lg bg-background/80 backdrop-blur-sm cursor-pointer border hover:border-primary"
                onClick={() => setSelectedPayment('bank')}
              >
                <div className="text-4xl mb-4">🏦</div>
                <h3 className="font-medium">Bank Transfer</h3>
              </div>
            </Link>
            <div
              className={`p-6 rounded-lg bg-background/80 backdrop-blur-sm cursor-pointer border hover:border-primary ${
                selectedPayment === 'cash' ? 'border-green-500 border-2' : ''
              }`}
              onClick={() => setSelectedPayment('cash')}
            >
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="font-medium">Cash on Delivery</h3>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between text-lg font-medium">
              <span>Total</span>
              <span>${cart.total.toLocaleString()}</span>
            </div>
            <Button 
              className="w-full"
              disabled={selectedPayment !== 'cash'}
              style={{
                opacity: selectedPayment === 'cash' ? 1 : 0.5,
                cursor: selectedPayment === 'cash' ? 'pointer' : 'not-allowed'
              }}
            >
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
