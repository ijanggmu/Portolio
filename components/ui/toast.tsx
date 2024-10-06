import React from 'react';
import { useToast, Toast as ToastType } from './use-toast';

export const Toast: React.FC = () => {
  const { toasts } = useToast();

  return (
    <div className="fixed bottom-0 right-0 p-6 space-y-4">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm"
        >
          {toast.title && <h4 className="font-semibold">{toast.title}</h4>}
          {toast.description && <p className="text-sm text-gray-500">{toast.description}</p>}
          {toast.action}
        </div>
      ))}
    </div>
  );
};