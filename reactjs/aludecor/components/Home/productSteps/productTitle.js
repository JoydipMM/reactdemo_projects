export default function ProductTitle({
  accordianNum,
  accordianTitle
  // allAccordian
}) {
  return (
    <div className="item-title">
      <span>{accordianNum}</span> <h3>{accordianTitle}</h3>
    </div>
  );
}
