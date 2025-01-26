import {BlankHebrewWords as Hebrew, Positions} from "../../utils/constants.ts";
import {useAppSelector} from "../../app/hooks.ts";
import {getEnumKeyByValue} from "../../utils/functions.ts";

interface Props {
    position: Positions,
}

const BlankTable = ({position}: Props) => {
    let specials = false
    let hoursWithSpecials = false
    const tableHeaders = [Hebrew.blankSum as string]
    let mainTableHeader = ''
    switch (position) {
        case Positions.serviceManagers || Positions.waiters:
            mainTableHeader = Hebrew.blankServiceManagers
            specials = hoursWithSpecials = true
            tableHeaders.push(Hebrew.blankInHourWithSpecials as string, Hebrew.blankSpecials as string)
            break
        case Positions.waiters:
            mainTableHeader = Hebrew.blankWaiters
            specials = hoursWithSpecials = true
            tableHeaders.push(Hebrew.blankInHourWithSpecials as string, Hebrew.blankSpecials as string)
            break
        case Positions.runners:
            mainTableHeader = Hebrew.blankRunners
            break
        case Positions.bartenders:
            mainTableHeader = Hebrew.blankBartenders
            tableHeaders.push(Hebrew.blankSpecials as string)
            specials = true
    }
    tableHeaders.push(
        Hebrew.blankHours as string,
        Hebrew.blankInHour as string,
        Hebrew.blankName as string,
    )
    const employees = useAppSelector(state => state.shiftReducer[getEnumKeyByValue(Positions, position)])
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
                {employees.map((emp,idx) =>
                    <tr key={idx}>
                        <td>{emp.sum?.toFixed(1)}</td>
                        {hoursWithSpecials && <td>{emp.inHourWithSpecials?.toFixed(1)}</td>}
                        {specials && <td>{emp.specials}</td>}
                        <td>{emp.hours}</td>
                        <td>{emp.inHour?.toFixed(1)}</td>
                        <td>{emp.name}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default BlankTable;