import { motion } from "framer-motion";

const Modal = ({ isOpen, onClose, id, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modaloverlay" id={`${id}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="modalcontent"
      >
        <button onClick={onClose} className="modalclose">&times;</button>
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;
