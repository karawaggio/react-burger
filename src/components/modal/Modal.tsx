import React, { useEffect } from 'react';
import "./Modal.css";
import { createPortal } from 'react-dom';

interface ModalProps {
  children: any,
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Enter") {
                onClose();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    return createPortal(
        <section className="modal-overlay" onClick={onClose}>
            <div className="p-10 modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-close-btn-wrap">
                    <button className="modal-close-button" onClick={onClose}>&#9587;</button>
                </div>
                {children}
            </div>
        </section>,
        document.body
    )
}

export default Modal;