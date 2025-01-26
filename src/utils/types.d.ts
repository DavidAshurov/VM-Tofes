export interface ShiftData {
    date:string,
    shift:string,
    shabat:boolean,
    tipsSum:number,
    serviceManagers: ServiceManager[],
    waiters: Waiter[],
    runners: Runner[],
    bartenders: Bartender[],
    completion:number,
    totalSum:number,
}
export interface Employees {
    serviceManagers: string[],
    waiters: string[],
    runners: string[],
    bartenders: string[],
}
export interface Runner {
    name:string,
    hours:number,
    inHour:number,
    sum:number,
}
export interface Bartender extends Runner {
    specials:number,
}
export interface Waiter extends Runner {
    specials:number,
    wageRate:number,
    inHourWithSpecials:number,
}
export interface ServiceManager extends Runner {
    specials:number,
    wageRate:number,
    inHourWithSpecials:number,
}
export interface hourWages {
    '100%':number,
    '90%':number,
    '80%':number,
    'MM':number,
    'runner':number,
}