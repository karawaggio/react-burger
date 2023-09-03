import React from 'react';
import "./Modal.css";

interface ModalProps {
  children: any,
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
    return (
        <section className="modal-overlay" onClick={onClose}>
            <div className="p-10 modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-close-btn-wrap">
                    <button className="modal-close-button" onClick={onClose}>&#9587;</button>
                </div>
                {children}
            </div>
        </section>
    )
}

export default Modal;