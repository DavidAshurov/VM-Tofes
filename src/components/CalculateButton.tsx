import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../app/hooks.ts";
import {distributeTips} from "../features/shiftSlice.ts";

const CalculateButton = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    return (
        <div className={'flex justify-center'}>
            <button
                className={'bg-[rgba(59,130,246,1)] rounded-2xl px-3 py-1 mt-10 text-white text-xl'}
                onClick={() => {
                    navigate('blank')
                    dispatch(distributeTips())
                }}
            >Сгенерировать тофэс</button>
        </div>
    );
};

export default CalculateButton;