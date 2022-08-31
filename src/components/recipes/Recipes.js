import React from "react";
import Steps from "../steps/Steps";
import "./Recipes.css";
import IngredientsList from "../ingredinetsList/IngredinetsList";

function Recipes({ name, ingredients, steps }) {
  return (
    <React.Fragment>
      <section>
        <h2>{name}</h2>
        <div className="ingredinets-list">
          <IngredientsList ingredients={ingredients} />
        </div>
      </section>
      <section>
        {steps.map((step, i) => (
          <Steps key={i} step={step} />
        ))}
      </section>
    </React.Fragment>
  );
}
export default Recipes;
