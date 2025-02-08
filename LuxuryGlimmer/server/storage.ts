import { type Product, type InsertProduct } from "@shared/schema";

export interface IStorage {
  getAllProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
}

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Diamond Solitaire Ring",
    description: "A timeless classic featuring a brilliant-cut diamond set in 18k white gold.",
    price: 4999.99,
    category: "Rings",
    image: "https://images.unsplash.com/photo-1638517747460-4d9e114ab3e7",
    modelUrl: "/models/ring.glb"
  },
  {
    id: 2,
    name: "Pearl Necklace",
    description: "Elegant freshwater pearl necklace with 14k gold clasp.",
    price: 1299.99,
    category: "Necklaces",
    image: "https://images.unsplash.com/photo-1638517747421-a1eb8b4c9828",
    modelUrl: "/models/necklace.glb"
  },
  {
    id: 3,
    name: "Sapphire Earrings",
    description: "Beautiful sapphire and diamond drop earrings in 18k white gold.",
    price: 2499.99,
    category: "Earrings",
    image: "https://images.unsplash.com/photo-1638517747420-c31bef7cf640",
    modelUrl: "/models/earrings.glb"
  },
  {
    id: 4,
    name: "Emerald Bracelet",
    description: "Stunning emerald tennis bracelet with diamond accents.",
    price: 3599.99,
    category: "Bracelets",
    image: "https://images.unsplash.com/photo-1638517747458-26650d54196a",
    modelUrl: "/models/bracelet.glb"
  }
];

export class MemStorage implements IStorage {
  private products: Map<number, Product>;

  constructor() {
    this.products = new Map(SAMPLE_PRODUCTS.map(p => [p.id, p]));
  }

  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }
}

export const storage = new MemStorage();