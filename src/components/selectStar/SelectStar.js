import { FaStar } from "react-icons/fa";
export default function SelectStar({
  selected,
  onSelect = () => console.log("hi"),
  style,
}) {
  return (
    <FaStar
      color={selected ? "red" : "grey"}
      onClick={onSelect}
      style={style}
    />
  );
}
