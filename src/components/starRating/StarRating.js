import SelectStar from "../selectStar/SelectStar";

function StarRating({ totalStars = 5, style, selectStar = 0 }) {
  const newStarArray = (length) => [...Array(length)];

  return (
    <div style={{ padding: "15px", ...style }}>
      {newStarArray(totalStars).map((star, i) => (
        <SelectStar
          style={{ padding: "7px", cursor: "pointer", fontSize: "32px" }}
          key={i}
          selected={selectStar > i}
        />
      ))}
      <p>
        {selectStar} of {totalStars} are star
      </p>
    </div>
  );
}

export default StarRating;
