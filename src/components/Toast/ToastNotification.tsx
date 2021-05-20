import React from "react";
import { Toast } from "react-bootstrap";

type ToastNotificationProps = {
  id: string;
  header?: string;
  message: string;
  removeToast: (id: string) => void;
};

export const ToastNotification: React.FC<ToastNotificationProps> = ({
  id,
  message,
  removeToast,
}) => {
  return (
    <Toast
      onClose={() => {
        removeToast(id);
      }}
      show={true}
      className='primary'
    >
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};
