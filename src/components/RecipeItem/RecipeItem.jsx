import { IoMdTime } from "react-icons/io";
import { CiPizza } from "react-icons/ci";
import { MdOutlineLunchDining, MdDriveFileRenameOutline } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import RecipeInfo from "../RecipeInfo/RecipeInfo";
import style from "./RecipeItem.module.css"
function RecipeItem({name, time, servings, calories, difficulty,image}) {

    return (
        <li key={name} className={style.list}>
            <img src={image} alt={name} width={300} className={style.img}/>
                <h2 className={style.title}>{name}</h2>
                <div className={style.aboutList}>
                <RecipeInfo text={time + " min"} icon={<IoMdTime/>}/>
                <RecipeInfo text={servings + " servings"} icon={<CiPizza/>}/>
                <RecipeInfo text={calories + " calories"} icon={<MdOutlineLunchDining/>}/>
                
                <RecipeInfo text={difficulty} icon={<GiNetworkBars/>}/>
                </div>
            
        </li>
    )
}

export default RecipeItem