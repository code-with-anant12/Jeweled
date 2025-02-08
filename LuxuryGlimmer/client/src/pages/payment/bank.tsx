
import { Button } from "@/components/ui/button";

export default function BankTransfer() {
  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold mb-8">Bank Transfer</h1>
      <div className="max-w-md mx-auto p-6 bg-background/80 backdrop-blur-sm rounded-lg border">
        <p className="text-muted-foreground mb-6">Bank transfer implementation coming soon...</p>
        <Button className="w-full" disabled>Continue</Button>
      </div>
    </div>
  );
}
