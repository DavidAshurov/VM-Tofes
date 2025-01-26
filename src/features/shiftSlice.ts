import {ShiftData} from "../utils/types";
import {createSlice} from "@reduxjs/toolkit";
import {Positions} from "../utils/constants.ts";
import {calculateTips, getEnumKeyByValue} from "../utils/functions.ts";

const initialShiftData: ShiftData = {
    date: '',
    shift: 'morning',
    shabat: false,
    tipsSum: 0,
    serviceManagers: [],
    waiters: [],
    runners: [],
    bartenders: [],
    completion:0,
    totalSum:0,
}

const shiftSlice = createSlice({
    name: "shift",
    initialState: initialShiftData,
    reducers: {
        setDate: (state, action) => {
            state.date = action.payload
        },
        setShift: (state, action) => {
            state.shift = action.payload
        },
        setShabat: (state, action) => {
            state.shabat = action.payload
        },
        setTipsSum: (state, action) => {
            state.tipsSum = action.payload ? +action.payload : 0
        },
        addShiftEmployee: (state, action) => {
            switch (action.payload) {
                case Positions.serviceManagers:
                    state[getEnumKeyByValue(Positions, action.payload)].push({wageRate:"100",hours:0,specials:0})
                    break
                case Positions.waiters:
                    state[getEnumKeyByValue(Positions, action.payload)].push({wageRate:"MM",hours:0,specials:0})
                    break
                case Positions.runners:
                    state[getEnumKeyByValue(Positions, action.payload)].push({wageRate:"R",hours:0})
                    break
                case Positions.bartenders:
                    state[getEnumKeyByValue(Positions, action.payload)].push({})
            }
        },
        deleteShiftEmployee: (state, action) => {
            state[getEnumKeyByValue(Positions, action.payload)].pop()
        },
        setEmployeeInfo: (state, action) => {
            const {position, index, property, value} = action.payload
            state[getEnumKeyByValue(Positions, position)][index][property] =
                (property === 'hours' || property === 'specials') ? +value : value
        },
        distributeTips: (state) => calculateTips(state),
    }
})

export const {
    setDate,
    setShift,
    setShabat,
    setTipsSum,
    addShiftEmployee,
    deleteShiftEmployee,
    setEmployeeInfo,
    distributeTips
} = shiftSlice.actions
export default shiftSlice.reducer