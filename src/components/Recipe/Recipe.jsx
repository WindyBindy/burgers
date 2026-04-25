import RecipeItem from "../RecipeItem/RecipeItem";
import style from "./Recipe.module.css"
function Recipe({recipe}) {

  
    return (
        <ul className={style.list}>{recipe.map((item)=>{
            return(
              <RecipeItem key={item.name} {...item}/>
            )
          })}</ul>
    )
}

export default Recipe