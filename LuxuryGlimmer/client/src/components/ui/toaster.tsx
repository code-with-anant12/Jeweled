import { useState, useCallback } from "react";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { ToasterContext } from "./use-toast";
import type { Toast as ToastType } from "./use-toast";

export function Toaster() {
  const [toasts, setToasts] = useState<Array<ToastType & { id: string }>>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  }, []);

  const toast = useCallback((props: ToastType) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((toasts) => [...toasts, { ...props, id }]);

    setTimeout(() => {
      dismiss(id);
    }, 5000);
  }, [dismiss]);

  return (
    <ToasterContext.Provider value={{ toasts, toast, dismiss }}>
      <ToastProvider>
        {toasts.map(({ id, title, description, action, ...props }) => (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose onClick={() => dismiss(id)} />
          </Toast>
        ))}
        <ToastViewport />
      </ToastProvider>
    </ToasterContext.Provider>
  );
}