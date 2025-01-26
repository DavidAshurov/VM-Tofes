import PartOfTeam from "./PartOfTeam.tsx";
import CommonInfo from "./CommonInfo.tsx";
import {Positions} from "../../utils/constants.ts";

const Form = () => {
    return (
        <div className={'flex flex-col'}>
            <CommonInfo/>
            {(Object.values(Positions) as Array<keyof typeof Positions>).map((pos,idx) => <PartOfTeam position={pos as Positions} key={idx}/>)}
        </div>
    );
};

export default Form;