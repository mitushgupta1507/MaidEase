import {
  FiAlertTriangle,
  FiX,
  FiCheck,
} from "react-icons/fi";

import Modal from "./Modal";
import Button from "./Button";

const ConfirmDialog = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Action",
  message = "Are you sure you want to continue?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  variant = "danger",
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size="md"
    >

      <div className="text-center">

        {/* Icon */}

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100">

          <FiAlertTriangle
            size={48}
            className="text-red-600"
          />

        </div>

        {/* Message */}

        <h3 className="mt-8 text-3xl font-black text-slate-900">

          {title}

        </h3>

        <p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-slate-600">

          {message}

        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

          <Button
            variant="secondary"
            size="lg"
            onClick={onClose}
            icon={FiX}
          >
            {cancelText}
          </Button>

          <Button
            variant={variant}
            size="lg"
            onClick={() => {
              onConfirm();
              onClose();
            }}
            icon={FiCheck}
          >
            {confirmText}
          </Button>

        </div>

      </div>

    </Modal>
  );
};

export default ConfirmDialog;