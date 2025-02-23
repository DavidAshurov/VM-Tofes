import {Positions} from "./constants.ts";

export interface ShiftData {
    date:string,
    shift:string,
    shabat:boolean,
    tipsSum:number,
    employees:Employee[],
    completion:number,
    totalSum:number,
}
export interface Employees {
    serviceManagers: string[],
    waiters: string[],
    runners: string[],
    bartenders: string[],
}
export interface Employee {
    id:number,
    name:string,
    hours:number,
    inHour:number,
    sum:number,
    specials:number,
    wageRate:string,
    inHourWithSpecials:number,
    position:Positions,
}

export interface HourWages {
    '100%':number,
    '90%':number,
    '80%':number,
    'MM':number,
    'runner':number,
}