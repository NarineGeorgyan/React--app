import Ingredinet from "../ingredient/ingredient";

function IngredientsList({ ingredients }) {
  console.log(ingredients);
  return (
    <ul>
      {ingredients.map((ingredient, i) => (
        <Ingredinet key={i} {...ingredient} />
      ))}
    </ul>
  );
}
export default IngredientsList;
