import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {setDate, setShabat, setShift, setTipsSum} from "../../features/shiftSlice.ts";

const CommonInfo = () => {
    const dispatch = useAppDispatch()
    const shiftInfo = useAppSelector(state => state.shiftReducer)
    return (
        <div className={'mb-5 flex'}>
            <label>
                Дата: <input className={'px-2'} name={'date'} type={'date'}
                             onChange={(e) => dispatch(setDate(e.target.value))}
                             defaultValue={shiftInfo.date}/>
            </label>
            <label>
                Смена: <select name={'shift'}
                               onChange={(e) => dispatch(setShift(e.target.value))}
                               defaultValue={shiftInfo.shift}>
                <option value={'morning'}>Утро</option>
                <option value={'evening'}>Вечер</option>
            </select>
            </label>
            <label>Шабат:</label>
            <div className={'w-5 h-5 mt-0.5 ml-1 mr-5'}>
                <input className={'w-full h-full'} name={'shabat'} type={'checkbox'}
                       onChange={(e) => dispatch(setShabat(e.target.checked))}
                       checked={shiftInfo.shabat}/>
            </div>
            <label>
                Сумма чаевых: <input
                onChange={(e) => dispatch(setTipsSum(e.target.value))}
                className={'pl-3 w-[100px]'} min={0} name={"tips"} type={'number'} placeholder={'0'}
                defaultValue={shiftInfo.tipsSum}/>
            </label>
        </div>
    );
};

export default CommonInfo;