import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/layout/navbar";
import { CartProvider } from "@/lib/cart";
import { ToastProvider } from "@radix-ui/react-toast";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Products from "@/pages/products";
import Product from "@/pages/product";
import NewArrivals from "@/pages/new-arrivals";
import About from "@/pages/about";
import Cart from "@/pages/cart";
import CreditCardPayment from "@/pages/payment/credit-card";
import BankTransfer from "@/pages/payment/bank";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/product/:id" component={Product} />
      <Route path="/new-arrivals" component={NewArrivals} />
      <Route path="/about" component={About} />
      <Route path="/cart" component={Cart} />
      <Route path="/payment/credit-card" component={CreditCardPayment} />
      <Route path="/payment/bank" component={BankTransfer} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <ToastProvider> {/* ToastProvider is now correctly wrapped around the relevant components */}
          <Navbar />
          <main className="min-h-screen pt-16">
            <Router />
          </main>
          <Toaster />
        </ToastProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;