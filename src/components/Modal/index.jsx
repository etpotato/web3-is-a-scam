import Modal from "react-modal";

import "./Modal.css";

export default function myModal({
  isOpen,
  count,
  onChange,
  onClose,
  maxCount,
}) {
  const handleDecrement = () => {
    const newState = count > 0 ? count - 1 : count;
    onChange?.(newState);
  };

  const handleIncrement = () => {
    const newState = count < maxCount ? count + 1 : count;
    onChange?.(newState);
  };

  Modal.setAppElement("#root");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-wrap">
        <p className="modal-title">Chose quantity</p>
        <div className="modal-input">
          <button onClick={handleDecrement} className="modal-btn" type="button">
            -
          </button>
          <div className="modal-count">{count}</div>
          <button onClick={handleIncrement} className="modal-btn" type="button">
            +
          </button>
        </div>
      </div>
    </Modal>
  );
}
