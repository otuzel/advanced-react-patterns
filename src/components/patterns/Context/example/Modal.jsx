import React from "react";
import { Modal as BootstrapModal } from "react-bootstrap";

const ModalContext = React.createContext();

const Modal = ({ children }) => {
  const [modalChildren, showModal] = React.useState(null);
  const hideModal = () => showModal(null);
  const isOpen = !!modalChildren;

  return (
    <ModalContext.Provider value={{ isOpen, showModal, hideModal }}>
      <BootstrapModal backdrop={true} show={isOpen} onHide={hideModal}>
        {modalChildren}
      </BootstrapModal>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = React.useContext(ModalContext);

  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
};

export default Modal;
