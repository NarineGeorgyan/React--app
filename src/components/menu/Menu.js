import "./Menu.css";
import Recipes from "../recipes/Recipes";

function Menu({ title, data }) {
  console.log(data);
  return (
    <section>
      <h1>{title}</h1>
      <div className="recipes">
        {data.map((recipe, i) => (
          <Recipes key={i} {...recipe} />
        ))}
      </div>
    </section>
  );
}
export default Menu;
