import React from "react";
import "./style.css";

interface Props {
  modalOpen: boolean;
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Modal = ({ modalOpen, title, onConfirm, onCancel }: Props) => {
  const [isOpen, setIsOpen] = React.useState(modalOpen);

  React.useEffect(() => {
    setIsOpen(modalOpen);
  }, [modalOpen]);

  return (
    <div className={`modal ${isOpen ? "show" : ""}`}>
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={() => setIsOpen(false)}>
            &times;
          </span>
          <h2>Delete {title} ?</h2>
          <div className="modal-actions">
            <button onClick={() => onConfirm()}>Yes</button>
            <button onClick={() => onCancel()} className="button-danger">
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
