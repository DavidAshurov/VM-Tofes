import EmployeeInfoInput from "./EmployeeInfoInput.tsx";
import {Positions} from "../../utils/constants.ts";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {addShiftEmployee, deleteShiftEmployee} from "../../features/shiftSlice.ts";
import {Employee} from "../../utils/types";

interface Props {
    position: Positions
}

const PartOfTeam = ({position}: Props) => {
    const dispatch = useAppDispatch()
    const shiftEmployees:Employee[] = useAppSelector(state => state.shiftReducer["employees"]).filter(emp => emp.position === position)
    return (
        <div className={'ml-3 sm:ml-16'}>
            <div className={'flex'}>
                <h1 className={'text-xl font-bold mt-2.5 mr-4'}>{position}</h1>
                <button
                    onClick={() => {
                        dispatch(deleteShiftEmployee(position))
                    }}
                    className={'px-[12px] pb-[2px] my-2 mr-2 bg-[rgba(59,130,246,1)] rounded-full text-white text-2xl'}
                >-
                </button>
                <button
                    onClick={() => {
                        dispatch(addShiftEmployee(position))
                    }}
                    className={'px-[8px] pb-[2px] my-2 bg-[rgba(59,130,246,1)] rounded-full text-white text-2xl'}
                >+
                </button>

            </div>
            {shiftEmployees.map((emp, idx) => <EmployeeInfoInput key={idx} position={position} shiftEmployee={emp}/>)}
        </div>
    );
};

export default PartOfTeam;