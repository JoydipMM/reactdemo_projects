import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Breadcrumb(props) {
  // console.log("props", props);
  //console.log(props.pageName);
  const router = useRouter();
  const pathSegments = router.asPath.split("/").filter(Boolean); // Removes empty strings from leading '/'
  const parentPath = "/" + pathSegments.slice(0, -1).join("/");
  // Determine if it's a parent or child page
  // const isParentPage = pathSegments.length === 1; // Only one segment (e.g., '/blog')
  // const isChildPage = pathSegments.length > 1; // More than one segment (e.g., '/blog/post')
  // console.log(pathSegments);

  function capitalizeFirstLetter(string) {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <div className="container">
        <div className="bradecumb">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            {pathSegments.map((pathSegment, index) => (
              <React.Fragment key={`breadcrumb-${index}`}>
                <li key={`separator-${index}`}>/</li>
                <li key={`segment-${index}`}>
                  <Link href={`/${pathSegment}`}>
                    {props?.pagehierarchy && props.pagehierarchy[index]
                      ? props.pagehierarchy[index]
                      : capitalizeFirstLetter(pathSegment)}
                  </Link>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
