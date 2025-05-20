import {Positions} from "../../utils/constants.ts";
import {ChangeEvent, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {setEmployeeInfo, setFixed} from "../../features/shiftSlice.ts";
import {getEnumKeyByValue} from "../../utils/functions.ts";
import {Employee, Employees} from "../../utils/types";

interface Props {
    position: Positions,
    shiftEmployee: Employee,
}

const EmployeeInfoInput = ({position, shiftEmployee}: Props) => {
    const [handInput, setHandInput] = useState(false)
    const [fixedWage, setFixedWage] = useState(shiftEmployee.fixedWage)
    const dispatch = useAppDispatch()

    const key = getEnumKeyByValue(Positions, position) as keyof Employees
    const employees: string[] = useAppSelector(state => state.employeesReducer[key])

    const specials = position !== Positions.runners
    const wageRate = position === Positions.serviceManagers || position === Positions.waiters

    const employeeInfoHandler = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        dispatch(setEmployeeInfo({
            id: shiftEmployee.id,
            property: event.target.name as keyof Employee,
            value: event.target.value,
        }))
    }

    const nameChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        if (event.target.value === 'handInput') {
            setHandInput(true)
        } else {
            setHandInput(false)
            employeeInfoHandler(event)
        }
    }
    useEffect(() => {
        dispatch(setFixed({
            id: shiftEmployee.id,
            fixedWage: fixedWage,
        }))
    }, [fixedWage])

    return (
        <div className={'mb-1 flex max-sm:flex-col max-sm:pb-1 max-sm:border-b border-blue-500'}>
            <div className={'mb-1'}>
                <label>
                    Сотрудник: <select name={'name'}
                                       onChange={(e) => nameChangeHandler(e)}
                                       defaultValue={shiftEmployee.name}>
                    <option value={''}>Выберите...</option>
                    {employees.map((name, idx) => <option value={name} key={idx}>{name}</option>)}
                    <option value={'handInput'}>Другое</option>
                </select>
                </label>

                {handInput && <input type={'text'} name={'name'} className={'w-[120px]'}
                                     onChange={(e) => employeeInfoHandler(e)}/>}
            </div>
            <div className={'mb-1 flex'}>
                {wageRate &&
                    <label>
                        Ставка: <select name={'wageRate'}
                                        onChange={(e) => employeeInfoHandler(e)}
                                        defaultValue={shiftEmployee.wageRate}>
                        {position === Positions.waiters && <option value={''}>Обычная</option>}
                        {position === Positions.serviceManagers && <option value={'100'}>100%</option>}
                        {position === Positions.serviceManagers && <option value={'90'}>90%</option>}
                        <option value={'80'}>80%</option>
                    </select>
                    </label>}

                {position !== Positions.bartenders && <label>
                    Часы: <input onChange={(e) => employeeInfoHandler(e)}
                                 className={'w-[30px] sm:w-[45px] sm:pl-2.5'} min={0} step={0.5} name={'hours'} type={"number"}
                                 placeholder={'0'} defaultValue={shiftEmployee.hours}/>
                </label>}

                {specials && <label>
                    Specials: <input onChange={(e) => employeeInfoHandler(e)}
                                     className={'w-[40px] sm:w-[60px] sm:pl-2.5'} min={0} name={'specials'} type={"number"}
                                     placeholder={'0'} defaultValue={shiftEmployee.specials}/>
                </label>}
            </div>
            {position !== Positions.bartenders && <div className={'flex'}>
                {!fixedWage && <h3>Фиксированная ставка</h3>}
                <input className={'ml-1 relative top-0.5 w-5 h-5'} type={'checkbox'}
                       defaultChecked={shiftEmployee.fixedWage}
                       onChange={() => setFixedWage((fixed) => !fixed)}/>
                {fixedWage && <label>В час: <input className={'w-12 sm:pl-2.5'} min={0} placeholder={'0'}
                                                    name={'inHour'} type={'number'} defaultValue={shiftEmployee.inHour}
                                                    onChange={(e) => employeeInfoHandler(e)}/></label>}
            </div>}
        </div>
    );
};

export default EmployeeInfoInput;