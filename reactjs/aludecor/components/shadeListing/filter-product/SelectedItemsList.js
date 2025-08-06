"use client";
import Image from "next/image";

export default function SelectedItemsList({
  selectedItems,
  handleRemoveItem,
  styles
}) {
  return (
    <ul className={styles.namedrpdn}>
      {selectedItems.map((selectedItem, index) => (
        <li key={`selected-${index}`}>
          {selectedItem}
          <Image
            src="/images/deletefilter.svg"
            width={15}
            height={15}
            alt="deletefilter"
            className={styles.deletefilt}
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveItem(selectedItem);
            }}
          />
        </li>
      ))}
    </ul>
  );
}
