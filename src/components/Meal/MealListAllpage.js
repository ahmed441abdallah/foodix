
import MealListAll from "./MeailListAll";
 // Fixed typo from MeailListAll to MealListAll
import { mealListHeroImage as i1 } from '../../utils/images';
import Headersingle from "../Headersingle/Headersingle";
const MealListAllPage = () => {

    return (
        <>
           <Headersingle title='Portfolio - Grids' bgImages={i1}/>
            <div>

             <MealListAll/> 
            </div>
        </>
    );
}

export default MealListAllPage;
