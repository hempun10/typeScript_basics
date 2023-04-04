import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
  oncloseEvent: () => void;
}

function Alert({ children, oncloseEvent }: Props) {
  return (
    <>
      <div className="alert alert-primary alert-dismissible ">
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={oncloseEvent}
        ></button>
      </div>
    </>
  );
}

export default Alert;
