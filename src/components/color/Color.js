import StarRating from "../starRating/StarRating";
import { FaTrash } from "react-icons/fa";
import { GrAddCircle } from "react-icons/gr";

export default function Color({
  id,
  title,
  color,
  rating,
  onRemove = (f) => f,
  onAdd = (f) => f,
}) {
  return (
    <div className="color" style={{ backgroundColor: { color } }}>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <button
        onClick={(obj) =>
          onAdd({
            id: new Date() % 1000,
            title: "new Title",
            color: "green",
            rating: Math.floor(Math.random() * 6),
          })
        }
      >
        <GrAddCircle />
      </button>
      <h3>{title}</h3>
      <StarRating selectStar={rating} totalStars={undefined} />
    </div>
  );
}
