import { useEffect, useState } from "react";
import { useToast } from "../../contexts/toast";
import { ProgressBar } from "../ProgressBar";
import { Container } from "./style";
import { FiXCircle } from "react-icons/fi";

export const Toast = ({ toast }) => {
  const { removeToast } = useToast();
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLeaving(true);
    }, toast.ms);
  }, []);

  useEffect(() => {
    if (isLeaving) {
      setTimeout(() => {
        removeToast(toast.id);
      }, 1000);
    }
  }, [isLeaving]);

  return (
    <Container isLeaving={isLeaving}>
      <div className="message">
        <p>🦄 {toast.message}</p>
        <button onClick={() => setIsLeaving(true)}>
          <FiXCircle />
        </button>
      </div>
      <ProgressBar ms={toast.ms} />
    </Container>
  );
};
