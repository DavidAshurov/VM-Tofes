import {Positions} from "../../utils/constants.ts";
import {ChangeEvent} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {setEmployeeInfo} from "../../features/shiftSlice.ts";
import {getEnumKeyByValue} from "../../utils/functions.ts";
import {Employee, Employees} from "../../utils/types";

interface Props {
    position: Positions,
    index: number,
    shiftEmployee: Employee,
}

const EmployeeInfoInput = ({position, index, shiftEmployee}: Props) => {
    const dispatch = useAppDispatch()

    const key = getEnumKeyByValue(Positions,position) as keyof Employees
    const employees:string[] = useAppSelector(state => state.employeesReducer[key])

    const specials = position !== Positions.runners
    const wageRate = position === Positions.serviceManagers || position === Positions.waiters

    const employeeInfoHandler = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        dispatch(setEmployeeInfo({
            position: position,
            index: index,
            property: event.target.name as keyof Employee,
            value: event.target.value,
        }))
    }

    return (
        <div className={'mb-1'}>
            <label>
                Сотрудник: <select name={'name'}
                                   onChange={(e) => employeeInfoHandler(e)}
                                   defaultValue={shiftEmployee.name}>
                <option value={''}>Выберите...</option>
                {employees.map((name, idx) => <option value={name} key={idx}>{name}</option>)}
            </select>
            </label>
            {wageRate && <label>
                Ставка: <select name={'wageRate'}
                                onChange={(e) => employeeInfoHandler(e)}
                                defaultValue={shiftEmployee.wageRate}>
                {position === Positions.waiters && <option value={''}>Обычная</option>}
                {position === Positions.serviceManagers && <option value={'100'}>100%</option>}
                {position === Positions.serviceManagers && <option value={'90'}>90%</option>}
                <option value={'80'}>80%</option>
            </select>
            </label>}
            <label>
                Часы работы: <input onChange={(e) => employeeInfoHandler(e)}
                                    className={'w-[45px] pl-2.5'} min={0} step={0.5} name={'hours'} type={"number"}
                                    placeholder={'0'} defaultValue={shiftEmployee.hours}/>
            </label>
            {specials && <label>
                Specials: <input onChange={(e) => employeeInfoHandler(e)}
                                 className={'w-[60px] pl-2.5'} min={0} name={'specials'} type={"number"}
                                 placeholder={'0'} defaultValue={shiftEmployee.specials}/>
            </label>}
        </div>
    );
};

export default EmployeeInfoInput;