import Color from "../color/Color";

export default function ColorList({
  color,
  onRemoveColor = (f) => f,
  onAddColor = (f) => f,
}) {
  return !!color.length
    ? color.map((color, i) => {
        return (
          <Color
            key={i}
            {...color}
            onRemove={onRemoveColor}
            onAdd={onAddColor}
          />
        );
      })
    : "No found";
}
