import {createSlice} from "@reduxjs/toolkit";
import {Employees} from "../utils/types";

const initialEmployeesData:Employees = {
    serviceManagers: [
        'אילן בונדר',
        'לרה פחומובה',
        'קטיה דרוז',
        'אלינה ארטמנקו',
        'דוד אשורוב',
        'איוון גרשניקוב',
        'דניאל ויטורגן',
        'דריה קוזל',
        'מריה יקובלבה',
        'לרה וינוגרדובה',
        'ליאן ארליך',
        'קטי ירמולייבה',
        'דניאל ניחייצ`וק',
        'אניה ויתקין',
        'דיאנה דמידנקו',
    ],
    waiters: [
        'טניה גורדיינקו',
        'דניאל זבורוייב',
        'לנה ואוילובה',
        'נטלי לוויט',
        'פיטר ליבשץ',
        'אלכס צנטקידיס',
        'פולינה פרדקובה',
        'סשה פדוסינה',
    ],
    runners: [
        'ויקה פטרישב',
        'אלינה קלרך',
    ],
    bartenders: [
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