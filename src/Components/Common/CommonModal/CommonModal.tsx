import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

interface BasicModalInterface {
  modal: boolean;
  toggle: () => void;
  className?: string;
  backdrop?: boolean | "static";
  title?: string;
  children: any;
  size?: string;
}

const CommonModal = ({
  modal,
  toggle,
  className,
  backdrop,
  title,
  children,
  size,
}: BasicModalInterface) => {
  return (
    <Modal
      isOpen={modal}
      toggle={toggle}
      className={className}
      backdrop={backdrop || true}
      size={size}
    >
      <ModalHeader className="border-0" toggle={toggle}>
        {title}
      </ModalHeader>
      <ModalBody>{children}</ModalBody>
    </Modal>
  );
};

export default CommonModal;
