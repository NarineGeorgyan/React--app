import Menu from "./components/menu/Menu";
import ColorList from "./components/colorList/ColorList";
import { useState } from "react";
function App() {
  const data = [
    {
      name: "Baked Salmon",
      ingredients: [
        { name: "Salmon", amount: 1, measurement: "l lb" },
        { name: "Pine Nuts", amount: 1, measurement: "cup" },
        { name: "Butter Lettuce", amount: 2, measurement: "cups" },
        { name: "Yellow Squash", amount: 1, measurement: "med" },
        { name: "Olive Oil", amount: 0.5, measurement: "cup" },
        { name: "Garlic", amount: 3, measurement: "cloves" },
      ],
      steps: [
        "Preheat the oven to 350 degrees.",
        "Spread the olive oil around a glass baking dish.",
        "Add the yellow squash and place in the oven for 30 mins.",
        "Add the salmon, garlic, and pine nuts to the dish.",
        "Bake for 15 minutes.",
        "Remove from oven. Add the lettuce and serve.",
      ],
    },
    {
      name: "Fish Tacos",
      ingredients: [
        { name: "Whitefish", amount: 1, measurement: "l lb" },
        { name: "Cheese", amount: 1, measurement: "cup" },
        { name: "Iceberg Lettuce", amount: 2, measurement: "cups" },
        { name: "Tomatoes", amount: 2, measurement: "large" },
        { name: "Tortillas", amount: 3, measurement: "med" },
      ],
      steps: [
        "Cook the fish on the grill until cooked through.",
        "Place the fish on the 3 tortillas.",
        "Top them with lettuce, tomatoes, and cheese.",
      ],
    },
  ];
  const colorData = [
    {
      id: "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
      title: "ocean at dusk",
      color: "#00c4e2",
      rating: 5,
    },
    {
      id: "83c7ba2f-7392-4d7d-9e23-35adbe186046",
      title: "lawn",
      color: "#26ac56",
      rating: 3,
    },
    {
      id: "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
      title: "bright red",
      color: "#ff0000",
      rating: 0,
    },
  ];
  const [color, setColor] = useState(colorData);
  return (
    <>
      <div className="App">
        <Menu title="Delistion Recipes" data={data} />
      </div>
      <div className="star">
        <hr />
        <ColorList
          color={color}
          onRemoveColor={(id) => {
            const newColor = color.filter((item) => item.id !== id);
            setColor(newColor);
          }}
          onAddColor={(obj) => {
            color.push(obj);
            const newColor = [...color];
            setColor(newColor);
            console.log(newColor);
          }}
        />
      </div>
    </>
  );
}

export default App;
