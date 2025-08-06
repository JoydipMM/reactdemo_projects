"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import AnimatedText from "@/components/Framemotion/framemotion";

import facilitiesstyles from "../facilities/facilities.module.css";

export default function Facilities({ descriptionData }) {
  const allDescription = descriptionData?.data?.content;
  const allDesc = allDescription?.items;
  const allGalleryDesc = allDescription?.galleries;
  const [selectedImage, setSelectedImage] = useState(
    allGalleryDesc[0]?.image?.image_url
  );

  return (
    <>
      <section className="topadding_bottom">
        <div className="container">
          <div className={`${facilitiesstyles.facilities_content}`}>
            <div className="left">
              <div className="preview-pic">
                <Image src={selectedImage} alt="Preview" fill={true} />
                <div className="brand-pic">
                  <Image
                    src="/images/brandin_pic.svg"
                    alt="Brand"
                    fill={true}
                  />
                </div>
              </div>
              <div className="list-view">
                {allGalleryDesc.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className="list-pic"
                    onClick={() => setSelectedImage(imgSrc?.image?.image_url)}
                  >
                    <Image
                      src={imgSrc?.image?.image_url}
                      alt={`Thumbnail ${idx + 1}`}
                      fill={true}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="right">
              <div className="txt">
                <h2>
                  <AnimatedText text={allDescription?.title} />
                </h2>
                {allDescription?.description}
                <ul>
                  {allDesc?.map((desc, index) => (
                    <li key={`allDescID-${index}`}>
                      <span className="icon">
                        <Image
                          src={desc?.image?.image_url}
                          alt="icon"
                          fill={true}
                        />
                      </span>
                      <div
                        dangerouslySetInnerHTML={{ __html: desc?.content }}
                      ></div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
