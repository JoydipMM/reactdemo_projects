import Link from "next/link";
import Pagination from "@/components/shadeListing/filter-product/pagination";
import locatestyles from "@/components/contactUs/location/location.module.css";
import fabricatorSearchstyle from "@/components/findFabricator/fabricatorSearch/fabricatorSearch.module.css";
import Image from "next/image";
export default function FilterDealerData({ setPage, allData, downloadData }) {
  return (
    <section className="container">
      {/* <div className={`${fabricatorSearchstyle.maparea}`}>
          <div className={`${fabricatorSearchstyle.maplft}`}>
            <ul>
              {allData?.map((allVal, index) => (
                <li
                  className={`${fabricatorSearchstyle.active}`}
                  key={allVal.id}
                >
                  <Link href="/contactus">
                    <h3>{allVal?.title}</h3>
                  </Link>
                  <p>
                    {allVal?.description}
                    <br />
                    {allVal?.address_line_1},{allVal?.address_line_2}
                    <br />
                    {allVal?.city},{allVal?.state}
                    <br />
                    {allVal?.pincode}
                  </p>
                  <Link
                    href="/contactus"
                    className={`common-btn ${fabricatorSearchstyle.common_btn}`}
                  >
                    <label>
                      VIEW MORE{" "}
                      <Image
                        width={34}
                        height={16}
                        src="/images/arrow-right.svg"
                        alt="arrow-right"
                      />
                    </label>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${fabricatorSearchstyle.maprgt}`}>
            <Image fill={true} src="/images/fabricator/maparea.png" alt="" />
          </div>
        </div> */}
      {/* ............contact box............... */}
      {/* ..............map starts.............. */}
      <div className="mapconactbox">
        <div>
          {/* {allOfficeData.map((officeData, index) => ( */}
          <div>
            <div>
              <div>
                <div className="maparea">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117893.88895492368!2d88.21975516249996!3d22.57221939999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a27af07389cb377%3A0x86be4a98eebb2d9!2sAludecor%20-%20ACP%20Sheets%20%26%20Aluminium%20Composite%20Panel%20Manufacturer%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1749713548018!5m2!1sen!2sin"
                    width="100%"
                    height="500"
                    style={{ border: 0 }} // ✅ Use an object for inline styles
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <div></div>
            </div>
          </div>
          {/* ))} */}
        </div>
      </div>
      {/* ..............map ends.............. */}

      <div>
        {/* .........contact box starts.......... */}

        <div className={locatestyles.contactboxwrper}>
          {allData?.map((allVal, index) => (
            <div
              className={locatestyles.contctcontbox}
              key={`officeTab-${index}`}
            >
              <Link href="/contactus">
                <h3>{allVal?.title}</h3>
              </Link>
              <p>{allVal?.description}</p>
              <p>
                {allVal?.address_line_1},{allVal?.address_line_2}
                <br />
                {allVal?.city},{allVal?.state}
                <br />
                {allVal?.pincode}
              </p>
              <Link
                href="/contactus"
                className={`common-btn ${fabricatorSearchstyle.common_btn}`}
              >
                <label>
                  Contact Us
                  <Image
                    width={34}
                    height={16}
                    src="/images/arrow-right.svg"
                    alt="arrow-right"
                  />
                </label>
              </Link>
            </div>
          ))}
        </div>
        <Pagination
          paginationData={downloadData?.data?.pagination}
          setPage={setPage}
        />
        {/* .........contact box ends ends.......... */}
      </div>
      {/* ............contact box............... */}
    </section>
  );
}
