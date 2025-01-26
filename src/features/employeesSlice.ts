import {createSlice} from "@reduxjs/toolkit";
import {Employees} from "../utils/types";

const initialEmployeesData:Employees = {
    serviceManagers: [
        'דניאל ניחייצ`וק',
        'אילן בונדר',
        'לרה פחומובה',
        'קטיה בונדר',
        'דוד אשורוב',
        'איוון גרשניקוב',
        'לרה וינוגרדובה',
        'דניאל ויטורגן',
        'קטי ירמולייבה',
        'דריה קוזל',
        'ליאן ארליך',
        'מטביי קרוצ`קוב',
        'דיאנה דמידנקו',
    ],
    waiters: [
        'נזר סמיק',
        'טניה גורדיינקו',
        'דניאל זבורוייב',
        'לנה ואוילובה',
        'נטלי לוויט',
        'קוסטיה אוסטפנקו',
    ],
    runners: [
        'מריה יקובלבה',
        'לרה קוזלובסקיה',
    ],
    bartenders: [
        'אנטון גספריין',
        'ניקון',
        'קוסטיה אוסטפנקו',
    ],
}

const employeesSlice = createSlice({
    name:"employees",
    initialState:initialEmployeesData,
    reducers:{
        mock: () => {}
    }
})

export const {mock} = employeesSlice.actions

export default employeesSlice.reducer