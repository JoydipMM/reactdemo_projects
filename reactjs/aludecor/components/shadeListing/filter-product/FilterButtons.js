"use client";
import Image from "next/image";

export default function FilterButtons({
  selectedItems,
  clearAllFilter,
  formFilterData,
  isMutating,
  styles
}) {
  return (
    <div className={styles.btncont} style={{ display: "flex", gap: "10px" }}>
      {selectedItems && selectedItems.length > 0 && (
        <button className="common-btn" onClick={clearAllFilter}>
          <label>
            Clear{" "}
            <Image
              width={34}
              height={16}
              src="/images/arrow-right.svg"
              alt="arrow-right"
            />
          </label>
        </button>
      )}
      <button
        className="common-btn"
        onClick={formFilterData}
        disabled={isMutating}
      >
        <label>
          {isMutating ? (
            "Filtering..."
          ) : (
            <>
              Submit
              <Image
                width={34}
                height={16}
                src="/images/arrow-right.svg"
                alt="arrow-right"
              />
            </>
          )}
        </label>
      </button>
    </div>
  );
}
