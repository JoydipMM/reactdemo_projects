import Image from "next/image";
import Link from "next/link";
import Productcheckbox from "@/components/Home/productSteps/checkbox";
import productstepsstyle from "@/components/Home/productSteps/productSteps.module.css";
import RadioButton from "@/components/Home/productSteps/radio";

const items = [
  {
    id: 1,
    mainTitle: "Type of products you are Looking for",
    title: (
      <div className="item-title">
        <span>1</span> <h3>Type of products you are Looking for</h3>
      </div>
    ),
    info: (
      <div className="item-info">
        <h3>Type of products you are Looking for</h3>
        <div className="propert">
          <div className="propert-in">
            <div className={`propert-img ${productstepsstyle.brandview}`}>
              <Image fill={true} src="/images/productstep/img-1.jpg" alt="" />
              <div className="brands">
                <Image fill={true} src="/images/brand-star.svg" alt="" />
              </div>
            </div>
            <div className="checksteparea">
              <RadioButton
                name="productType"
                id={`exterior`}
                value={`exterior`}
              />
              <span>Exterior Products</span>
            </div>
          </div>
          <div className="propert-in">
            <div className={`propert-img ${productstepsstyle.brandview}`}>
              <Image fill={true} src="/images/productstep/img-1.jpg" alt="" />
              <div className="brands">
                <Image fill={true} src="/images/brand-star.svg" alt="" />
              </div>
            </div>
            <div className="checksteparea">
              <RadioButton
                name="productType"
                id={`interior`}
                value={`interior`}
              />
              <span>Interior Products</span>
            </div>
          </div>
        </div>
        <Link href="#" className="common-btn">
          <label>
            NEXT STEP
            <Image
              width={34}
              height={16}
              src="/images/arrow-right.svg"
              alt="arrow-right"
            />
          </label>
        </Link>
      </div>
    )
  },
  {
    id: 2,
    mainTitle: "Applications",
    title: (
      <div className="item-title">
        <span>2</span> <h3>Applications</h3>
      </div>
    ),
    info: (
      <div className="item-info">
        <h3>Select everything you need to be customizes </h3>
        <div className="infoboxarea">
          <div className="infoboxareain">
            <span>False Ceilings</span>
            <Productcheckbox id={`falseceilings`} />
          </div>
          <div className="infoboxareain">
            <span>Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span>Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen Modular Kitchen </span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen </span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span>Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span>Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen Modular Kitchen </span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen </span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span>Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span>Modular Kitchen12</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen Modular Kitchen </span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen </span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
        </div>
        <Link href="#" className="common-btn">
          <label>
            NEXT STEP
            <Image
              width={34}
              height={16}
              src="/images/arrow-right.svg"
              alt="arrow-right"
            />
          </label>
        </Link>
      </div>
    )
  },
  {
    id: 3,
    mainTitle: "Shades/ Assembly System",
    title: (
      <div className="item-title">
        <span>3</span> <h3> Shades/ Assembly System</h3>
      </div>
    ),
    info: (
      <div className="item-info">
        <h3>Select everything you need to be customizes </h3>
        <div className="infoboxarea">
          <div className="infoboxareain">
            <span>False Ceilings</span>
            <Productcheckbox id={`falseceilings`} />
          </div>
          <div className="infoboxareain">
            <span>Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span>Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen Modular Kitchen </span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen </span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span>Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span>Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen Modular Kitchen </span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen </span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span>Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span>Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen Modular Kitchen </span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen </span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
        </div>
        <Link href="#" className="common-btn">
          <label>
            NEXT STEP
            <Image
              width={34}
              height={16}
              src="/images/arrow-right.svg"
              alt="arrow-right"
            />
          </label>
        </Link>
      </div>
    )
  },
  {
    id: 4,
    mainTitle: `Special Features`,
    title: (
      <div className="item-title">
        <span>4</span> <h3> Special Features</h3>
      </div>
    ),
    info: (
      <div className="item-info">
        <h3>Select everything you need to be customizes </h3>
        <div className="infoboxarea">
          <div className="infoboxareain">
            <span>False Ceilings</span>
            <Productcheckbox id={`falseceilings`} />
          </div>
          <div className="infoboxareain">
            <span>Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span>Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen Modular Kitchen </span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen </span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span>Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span>Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen Modular Kitchen </span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen </span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span>Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span>Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen</span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen Modular Kitchen </span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
          <div className="infoboxareain">
            <span> Modular Kitchen </span>
            <Productcheckbox id={`modularkitchen`} />
          </div>
        </div>
        <Link href="#" className="common-btn">
          <label>
            NEXT STEP
            <Image
              width={34}
              height={16}
              src="/images/arrow-right.svg"
              alt="arrow-right"
            />
          </label>
        </Link>
      </div>
    )
  }
];

export default items;
