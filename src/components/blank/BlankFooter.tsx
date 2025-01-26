import {BlankHebrewWords} from "../../utils/constants.ts";
import {useAppSelector} from "../../app/hooks.ts";

const BlankFooter = () => {
    const shiftData = useAppSelector(state => state.shiftReducer)

    return (
        <div className={'h-30 flex justify-center'}>
            <table className={'w-3/5 border-black border-4'}>
                <tbody>
                <tr>
                    <td className={'text-xl'}>{shiftData.tipsSum}</td>
                    <td className={'w-1/3 text-xl text-red-500'}>{BlankHebrewWords.blankCash}</td>
                    <td rowSpan={0} className={'w-1/4'}></td>
                </tr>
                <tr>
                    <td className={'text-xl'}>{Math.round(shiftData.completion)}</td>
                    <td className={'text-xl text-red-500'}>{BlankHebrewWords.blankCompletion}</td>
                </tr>
                <tr>
                    <td className={'text-xl'}>{Math.round(shiftData.totalSum)}</td>
                    <td className={'text-xl text-red-500'}>{BlankHebrewWords.blankTotalSum}</td>
                </tr>
                <tr>
                    <td></td>
                    <td className={'text-xl'}>{BlankHebrewWords.blankWaiterName}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BlankFooter;