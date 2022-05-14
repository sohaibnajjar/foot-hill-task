import { useState } from "react";

const useToast = () => {
  const [toast, setToast] = useState({ description: "" });
  const popToast = (toastDescription) => {
    setToast(toastDescription);
    setTimeout(() => {
      setToast({ description: "" });
    }, 4000);
  };
  return [toast, popToast];
};

export default useToast;
