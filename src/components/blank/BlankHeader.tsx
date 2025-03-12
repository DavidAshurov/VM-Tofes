import {BlankHebrewWords as Hebrew} from "../../utils/constants.ts";
import {useAppSelector} from "../../app/hooks.ts";

const BlankHeader = () => {
    const shiftInfo = useAppSelector(state => state.shiftReducer)
    const today = new Date(shiftInfo.date)
    return (
        <>
            <div className={'flex justify-center pt-8'}>
                <h1 className={'text-3xl font-bold mr-20'}>{Hebrew.header}</h1>
            </div>
            <div className={'flex justify-around font-bold'}>
                <div className={'text-4xl border-2 border-black p-5'}>{shiftInfo.tipsSum}</div>
                <div className={'flex justify-around items-center w-[55%] underline'}>
                    <div className={'text-2xl'}>{shiftInfo.shift === 'morning' ? Hebrew.morning : Hebrew.evening}</div>
                    <div className={'text-2xl'}>{`${today.toLocaleDateString()} ${Hebrew.date}`}</div>
                </div>
            </div>
        </>

    );
};

export default BlankHeader;