import { useContext } from "react";
import { createContext } from "react";
import { ToastActionElement, ToastProps } from "@/components/ui/toast";

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

interface ToasterContextValue {
  toasts: ToasterToast[];
  toast: (props: Omit<ToasterToast, "id">) => void;
  dismiss: (id: string) => void;
}

export const ToasterContext = createContext<ToasterContextValue | null>(null);

export interface Toast extends Omit<ToasterToast, "id"> {
  id?: string;
}

export function useToast() {
  const context = useContext(ToasterContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}