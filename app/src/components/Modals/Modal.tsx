import React from 'react';

type ModalProps = {
  title: string;
  description?: string;
  Action?: React.ReactNode;
  children?: React.ReactNode;
};

const Modal = ({ title, description, Action, children }: ModalProps) => {
  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">{description}</p>
        {<div>{children}</div>}
        <div className="modal-action">{Action}</div>
      </div>
    </div>
  );
};

export default Modal;
