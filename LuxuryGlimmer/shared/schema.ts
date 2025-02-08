import { pgTable, text, serial, integer, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  category: text("category").notNull(),
  image: text("image").notNull(),
  modelUrl: text("model_url").notNull(),
});

export const insertProductSchema = createInsertSchema(products).omit({ 
  id: true 
});

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

// Cart types
export const cartItemSchema = z.object({
  productId: z.number(),
  quantity: z.number().min(1),
  product: z.lazy(() => productSchema),
});

export const cartSchema = z.object({
  items: z.array(cartItemSchema),
  total: z.number(),
});

export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.string(),
  image: z.string(),
});

export type CartItem = z.infer<typeof cartItemSchema>;
export type Cart = z.infer<typeof cartSchema>;