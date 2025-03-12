import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {setDate, setMinWage, setShift, setTipsSum} from "../../features/shiftSlice.ts";

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
            <label>
                Ашлама: <select name={'minWage'}
                                onChange={(e) => dispatch(setMinWage(e.target.value))}
                                defaultValue={shiftInfo.minWage}>
                <option value={'usual'}>Обычная</option>
                <option value={'increased'}>Повышенная(50)</option>
                <option value={'shabat'}>Шабат</option>
            </select>
            </label>
            <label>
                Чаевые: <input
                onChange={(e) => dispatch(setTipsSum(e.target.value))}
                className={'pl-3 w-[100px]'} min={0} name={"tips"} type={'number'} placeholder={'0'}
                defaultValue={shiftInfo.tipsSum}/>
            </label>
        </div>
    );
};

export default CommonInfo;