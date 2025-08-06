import AnimatedText from "@/components/Framemotion/framemotion";
import Image from "next/image";
import Link from "next/link";
import readystyles from "@/components/Projectsgallery/ready-work/ready.module.css";
import productcontentstyles from "@/components/Product/productContent/productContent.module.css";

// Reusable Button Component
const DetailButton = ({ href, label, hasArrow = true }) => (
  <Link href={href} className="common-btn">
    <label>
      {label}
      {hasArrow && (
        <Image
          width={34}
          height={16}
          src="/images/arrow-right.svg"
          alt="arrow-right"
        />
      )}
    </label>
  </Link>
);

// Reusable Product Features Component
const ProductFeatures = ({ items }) => (
  <ul className="shadeicon-area">
    {items?.map((item, index) => (
      <li key={`shadeicon-${index}`}>
        <span>
          <Image fill src={item?.photo?.url} alt={item?.photo?.alt} />
        </span>
        <label>{item?.name}</label>
      </li>
    ))}
  </ul>
);

// Reusable Projects Gallery Component
const ProjectsGallery = ({ projects }) => (
  <ul className={productcontentstyles.proboxarea}>
    {projects?.map((project) => (
      <li key={project.id}>
        <Link href="/">
          <Image fill src={project?.photo?.url} alt={project?.photo?.alt} />
        </Link>
      </li>
    ))}
  </ul>
);

// Reusable Color Shades Component
const ColorShades = ({ colors }) => (
  <ul className={`${productcontentstyles.proboxarea} shadebox`}>
    {colors.map((color, index) => (
      <li key={`shadeColor-${index}`}>
        <Image fill src={color?.photo?.url} alt={color?.photo?.alt} />
        {/* <label>{color?.name}</label> */}
      </li>
    ))}
  </ul>
);

// Advertisement Component
const AdvertisementSection = ({ advertisement }) => {
  if (!advertisement || advertisement.length === 0) return null;

  return (
    <div className="topadding_bottom">
      <div className={`${readystyles.readywrk} ${productcontentstyles.safety}`}>
        <div className={readystyles.readyleft}>
          <h2>
            <AnimatedText text={advertisement?.heading} />
          </h2>
          <p>{advertisement?.description}</p>
          <div className={productcontentstyles.btnarea}>
            {advertisement?.view_more && (
              <DetailButton
                href={advertisement?.view_more}
                label="View detail"
              />
            )}
            {advertisement?.view_shades && (
              <DetailButton
                href={advertisement?.view_shades}
                label="View SignEx Shades"
              />
            )}
          </div>
        </div>
        <div className={`${readystyles.readyrit} hoverarea`}>
          <div className="brands">
            <Image fill src="/images/brand-star.svg" alt="brand-star" />
          </div>
          <div className="readtframe">
            <Image fill src="/images/readywork-frame.svg" alt="readywork" />
          </div>
          <Image
            fill
            src={advertisement?.banner?.url}
            alt={advertisement?.banner?.alt}
          />
        </div>
      </div>
    </div>
  );
};

// Main Product Content Component
export default function ProductContent({ productContentData }) {
  const productSeriesData =
    productContentData?.data?.content?.product_series || [];

  return (
    <section>
      <div className="container">
        {productSeriesData.map((productData, index) => {
          const isOddIndex = index % 2 === 1;
          const layoutClass = isOddIndex
            ? `${productcontentstyles.shadewrape} sswraper`
            : `${productcontentstyles.shadewrape} sswraper flipimg`;

          return (
            <div key={`productSeries-${index}`}>
              <div className="topadding_bottom">
                <div className={layoutClass}>
                  <div className="sstextpart">
                    <h2>
                      <AnimatedText text={productData?.heading} />
                    </h2>
                    <p>{productData?.description}</p>

                    <h3>
                      <AnimatedText
                        text={productData?.features_data?.heading}
                      />
                    </h3>
                    <ProductFeatures
                      items={productData?.features_data?.items}
                    />

                    <h3>
                      <AnimatedText
                        text={productData?.projects_data?.heading}
                      />
                    </h3>
                    <ProjectsGallery
                      projects={productData?.projects_data?.projects}
                    />

                    <div className={productcontentstyles.btnarea}>
                      <DetailButton
                        href={productData?.view_details}
                        label="View detail"
                      />
                      <DetailButton
                        href={productData?.view_shades}
                        label="View all shades"
                      />
                    </div>
                  </div>

                  <div className="ssimagepart hoverarea">
                    <Image
                      fill
                      src={productData?.series_img?.url}
                      alt="series_img"
                      className="ssimage"
                    />
                    <ColorShades colors={productData?.shades_colour} />
                  </div>
                </div>
              </div>

              <AdvertisementSection
                advertisement={productData?.advertisement}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
