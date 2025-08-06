"use client";
import Image from "next/image";
import Modal from "@/components/Modal/Modal";

export default function CertificateModal({ isOpen, onClose, imageUrl }) {
  return (
    <Modal
      id="imagemodal"
      isOpen={isOpen}
      onClose={onClose}
      title="Certificate"
    >
      <Image width={1200} height={800} src={imageUrl} alt="Certificate" />
    </Modal>
  );
}
