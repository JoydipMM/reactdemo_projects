import filterprdstyles from "@/components/Projectsgallery/filter-product/filterprd.module.css";

// Add this to your existing handleCheckboxChange function
const handleCheckboxChange = (
  event,
  tabName,
  getSelectionSetter,
  // setProductTypeSelections,
  setSelectedItems
) => {
  const { value, checked } = event.target;
  const setSelections = getSelectionSetter(tabName);

  if (event.target.type === "radio") {
    setSelections(checked ? [value] : []);
    // setProductTypeSelections(checked ? [value] : []);
  } else {
    setSelections((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  }

  // Update selectedItems consistently
  setSelectedItems((prev) =>
    checked ? [...prev, value] : prev.filter((item) => item !== value)
  );
};

export const CheckboxLayout = ({
  items,
  tabName,
  selectedItems,
  getSelectionSetter,
  // setProductTypeSelections,
  setSelectedItems
}) => (
  <label key={items.id} className={filterprdstyles.checkboxLabel}>
    <input
      type="checkbox"
      checked={selectedItems.includes(items.slug)}
      value={items.slug}
      onChange={(e) =>
        handleCheckboxChange(
          e,
          tabName,
          getSelectionSetter,
          // setProductTypeSelections,
          setSelectedItems
        )
      }
    />
    {items.name}
    <span className={filterprdstyles.checkmark}></span>
  </label>
);

export const RadioLayout = ({
  items,
  name,
  tabName,
  selectedItems,
  getSelectionSetter,
  // setProductTypeSelections,
  setSelectedItems
}) => (
  <label key={items.id} className={filterprdstyles.checkboxLabel}>
    <input
      type="radio"
      name={name}
      checked={selectedItems.includes(items.slug)}
      value={items.slug}
      onChange={(e) =>
        handleCheckboxChange(
          e,
          tabName,
          getSelectionSetter,
          // setProductTypeSelections,
          setSelectedItems
        )
      }
    />
    {items.name}
    <span className={filterprdstyles.checkmark}></span>
  </label>
);

//useSWT
export const postFetcher = (url, { arg }) =>
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(arg)
  }).then((r) => r.json());
