import { useContext } from "react";
import { ContextToast, useToast } from "../../contexts/toast";
import { Toast } from "../Toast";

export const ToastContainer = () => {
  const { listToast } = useToast();
  //   const { listToast } = useContext(ContextToast);

  return (
    <ul>
      {listToast.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </ul>
  );
};
