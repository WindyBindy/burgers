import style from "./RecipeInfo.module.css"
function RecipeInfo({icon, text}) {


   
    return (
        <p className={style.text}>{icon} {text}</p>
    )
}

export default RecipeInfo
