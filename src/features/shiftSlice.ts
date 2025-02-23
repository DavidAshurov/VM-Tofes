import {Employee, ShiftData} from "../utils/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Positions} from "../utils/constants.ts";
import {calculateTips} from "../utils/functions.ts";

const initialShiftData: ShiftData = {
    date: '',
    shift: 'morning',
    shabat: false,
    tipsSum: 0,
    employees: [],
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
            let wageRate = '';
            switch (action.payload) {
                case Positions.serviceManagers:
                    wageRate = '100'
                    break
                case Positions.waiters:
                    wageRate = 'MM'
                    break
                case Positions.runners:
                    wageRate = 'R'
                    break
            }
            const id = state.employees.length + 1
            state.employees.push({
                position:action.payload,
                wageRate:wageRate,
                id:id,
                name:'',
                hours:0,
                inHour:0,
                sum:0,
                specials:0,
                inHourWithSpecials:0,
            })
        },
        deleteShiftEmployee: (state, action) => {
            const employees = state.employees.filter(emp => emp.position === action.payload)
            const id = employees[employees.length - 1].id
            state.employees = state.employees.filter(emp => emp.id !== id)
        },
        setEmployeeInfo: (state:ShiftData, action:PayloadAction<{position:Positions,index:number,property:keyof Employee,value:string}>) => {
            const {position, index, property, value} = action.payload
            const emps = state.employees.filter(emp => emp.position === position)
            const idx = state.employees.findIndex(emp => emp.id === emps[index]?.id)
            if (idx === -1) return
            if (typeof state.employees[idx][property] === 'string') {
                state.employees[idx][property] = value as never
            } else {
                state.employees[idx][property] = +value as never
            }
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