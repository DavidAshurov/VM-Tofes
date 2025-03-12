import {createSlice} from "@reduxjs/toolkit";
import {Employees} from "../utils/types";

const initialEmployeesData:Employees = {
    serviceManagers: [
        'אילן בונדר',
        'לרה פחומובה',
        'קטיה דרוז',
        'אלינה ארטמנקו',
        'דניאל ניחייצ`וק',
        'דוד אשורוב',
        'איוון גרשניקוב',
        'דניאל ויטורגן',
        'דריה קוזל',
        'לרה וינוגרדובה',
        'ליאן ארליך',
        'קטי ירמולייבה',
        'מטביי קרוצ`קוב',
        'דיאנה דמידנקו',
    ],
    waiters: [
        'נזר סמיק',
        'טניה גורדיינקו',
        'דניאל זבורוייב',
        'לנה ואוילובה',
        'נטלי לוויט',
        'מריה יקובלבה',
    ],
    runners: [
        'ויקה פטרישב',
        'פיטר ליבשץ',
        'סשה פדוסינה',
        'פולינה פרדקובה',
    ],
    bartenders: [
        'אנטון גספריין',
        'ניקון',
        'אניה',
        'דניאל זבורוייב',
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