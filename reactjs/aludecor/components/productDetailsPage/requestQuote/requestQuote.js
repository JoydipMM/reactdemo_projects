import Link from "next/link";
import Image from "next/image";
// Modal area
import { useState } from "react";
import requeststyles from "@/components/productDetailsPage/requestQuote/requestQuote.module.css";
import Requestquoteform from "@/components/requestQuoteform/requestQuoteform";
import Modal from "@/components/Modal/Modal";
// Modal area
export default function RequestQuote({ requestFormData }) {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  return (
    <>
      <section className="topadding_bottom">
        <div className="container">
          <div className={requeststyles.reqmper}>
            <div className={requeststyles.reqbox}>
              <div className={requeststyles.iconbox}>
                <Image
                  src="/images/requestquote.svg"
                  alt="request a quote"
                  fill={true}
                />
              </div>
              <button
                onClick={() => setIsFirstModalOpen(true)}
                className="common-btn"
              >
                <label>
                  request a quote
                  <Image
                    width={34}
                    height={16}
                    src="/images/arrow-right.svg"
                    alt=""
                  />
                </label>
              </button>
            </div>

            <div className={requeststyles.reqbox}>
              <div className={requeststyles.iconbox}>
                <Image
                  src="/images/find.svg"
                  alt="request a quote"
                  fill={true}
                />
              </div>
              <Link href="#" className="common-btn">
                <label>
                  Find fabricators
                  <Image
                    width={34}
                    height={16}
                    src="/images/arrow-right.svg"
                    alt=""
                  />
                </label>
              </Link>
            </div>
          </div>
        </div>

        {/* Modal area */}

        <Modal
          id={`${requeststyles.formmodal}`}
          isOpen={isFirstModalOpen}
          onClose={() => setIsFirstModalOpen(false)}
          title="First Modal"
        >
          <Requestquoteform
            requestFormData={requestFormData}
            onSuccess={() => {
              // Close modal after toast appears (e.g., 2 seconds delay)
              setTimeout(() => {
                setIsFirstModalOpen(false);
              }, 3000); // Adjust delay based on toast duration
            }}
          />
        </Modal>

        {/* Modal area */}
      </section>
    </>
  );
}
