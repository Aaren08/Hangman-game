import React from "react";
import styles from "../CSS-Modules/modal.module.css";

interface ModalProps {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  message,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>{message}</h2>
        <div className={styles.modalActions}>
          <button onClick={onConfirm} className={`${styles.confirmBtn}`}>
            Yes
          </button>
          <button onClick={onCancel} className={`${styles.cancelBtn}`}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
