import {BlankHebrewWords as Hebrew, Positions} from "../../utils/constants.ts";
import {useAppSelector} from "../../app/hooks.ts";
import {Employee} from "../../utils/types";
import {getEnumKeyByValue} from "../../utils/functions.ts";

interface Props {
    position: Positions,
}

const BlankTable = ({position}: Props) => {
    const mainTableHeader = Hebrew[getEnumKeyByValue(Positions,position) as keyof typeof Hebrew]
    let specials = false
    const tableHeaders = [Hebrew.sum as string]
    if (position === Positions.serviceManagers || position === Positions.waiters) {
            specials = true
            tableHeaders.push(Hebrew.inHourWithSpecials as string, Hebrew.specials as string)
    }
    if (position !== Positions.bartenders) {
        tableHeaders.push(
            Hebrew.hours as string,
            Hebrew.inHour as string
        )
    }
    tableHeaders.push(Hebrew.name as string)
    const employees = useAppSelector(state =>  state.shiftReducer['employees']).filter(emp => emp.position === position)
    return (
        <div className={'flex justify-center'}>
            <table className={'border-black border-4 my-3 w-3/4'}>
                <thead>
                <tr>
                    <th colSpan={6} className={'text-2xl text-red-500'}>{mainTableHeader}</th>
                </tr>
                <tr>
                    {tableHeaders.map((header,idx) => <th key={idx}>{header}</th>)}
                </tr>
                </thead>
                <tbody>
                {employees.map((emp:Employee,idx:number) =>
                    <tr key={idx}>
                        <td>{emp.sum?.toFixed(1)}</td>
                        {specials && <td>{emp.inHourWithSpecials?.toFixed(1)}</td>}
                        {specials && <td>{emp.specials}</td>}
                        {position !== Positions.bartenders && <td>{emp.hours}</td>}
                        {position !== Positions.bartenders && <td>{emp.inHour?.toFixed(1)}</td>}
                        <td>{emp.name}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default BlankTable;