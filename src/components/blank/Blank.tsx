import BlankHeader from "./BlankHeader.tsx";
import {Positions} from "../../utils/constants.ts";
import BlankTable from "./BlankTable.tsx";
import BlankFooter from "./BlankFooter.tsx";

const Blank = () => {
    return (
        <div className={'bg-white'}>
            <BlankHeader/>
            {(Object.values(Positions) as Array<keyof typeof Positions>).map(((pos,idx) => <BlankTable position={pos as Positions} key={idx}/>))}
            <BlankFooter/>
        </div>
    );
};

export default Blank;