import Link from "next/link";
import errorstyles from "../error/error.module.css";
import Image from "next/image";
export default function Error() {
  return (
    <>
      <section className="commonpadding">
        <div className="container">
          <div className={errorstyles.errorwrp}>
            <div className={errorstyles.err_title}>
              <Image src="/images/404.svg" alt="Error" fill={true} />
            </div>
            <h2>
              Oops, We can seem to find the page what you are looking for.
            </h2>
            <p>
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>

            <Link href="/" className="common-btn">
              <label>
                Back to Home Page
                <Image
                  width={34}
                  height={16}
                  src="/images/arrow-right.svg"
                  alt="arrow-right"
                />
              </label>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
