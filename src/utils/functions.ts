import {current} from "@reduxjs/toolkit";
import {Positions, Wages} from "./constants.ts";
import {ShiftData} from "./types";

export function getEnumKeyByValue(enumObj: any, value: string): string {
    const keys = Object.keys(enumObj)
    for (let i = 0; i < keys.length; i++) {
        if (enumObj[keys[i]] === value) {
            return keys[i]
        }
    }
    return ''
}

export function calculateTips(state: ShiftData) {
    let {tipsSum, employees, minWage} = current(state)
    tipsSum -= employees.filter(emp => emp.position === Positions.bartenders).reduce((acc,curr) => acc + curr.specials,0)
    employees = employees.filter(emp => emp.position !== Positions.bartenders)
    const minWages = getMinimalWages(minWage)
    const minSum = employees.reduce((acc, curr) => acc + curr.hours * minWages.get(curr.wageRate)!, 0)
    if (minSum > tipsSum) {
        fulfillData(state, minWages)
    } else {
        for (let i = 0; i < 19; i++) {
            const hours100 = employees.filter(sm => sm.wageRate === '100')
                .reduce((acc, curr) => acc + curr.hours, 0)
            const tmpSum = employees.filter(emp => emp.position !== Positions.bartenders)
                .reduce((acc, curr) => acc + curr.hours * Wages.get(curr.wageRate)![i], 0)
            let restMoney = tipsSum - tmpSum
            if (restMoney > hours100 * 3) {
                continue
            }
            if (restMoney < 0) {
                restMoney = tipsSum - employees.reduce((acc, curr) => acc + curr.hours * Wages.get(curr.wageRate)![i - 1], 0)
                i--
            }
            fulfillData(state, new Map([
                ['100', Wages.get('100')![i] + restMoney / hours100],
                ['90', Wages.get('90')![i]],
                ['80', Wages.get('80')![i]],
                ['MM', Wages.get('MM')![i]],
                ['R', Wages.get('R')![i]],
            ]))
            break
        }
    }
}


function fulfillData(state:ShiftData, hourWages:Map<string,number>) {
    let totalSum = 0
    for (let i = 0; i < state.employees.length; i++) {
        const currEmp = state.employees[i]
        const inHour = state.employees[i].inHour = hourWages.get(currEmp.wageRate)!
        let sum = 0;
        if (currEmp.position === Positions.bartenders) {
            sum = state.employees[i].sum = currEmp.specials
        } else {
            sum = state.employees[i].sum = inHour! * currEmp.hours
        }
        if (currEmp.position === Positions.serviceManagers || currEmp.position === Positions.waiters) {
            if (!isNaN(currEmp.specials)) {
                state.employees[i].sum = sum = sum + currEmp.specials
                if (currEmp.hours > 0) {
                    state.employees[i].inHourWithSpecials = (sum / currEmp.hours)
                }
            }
        }
        totalSum += sum
    }
    state.totalSum = totalSum
    state.completion = totalSum - state.tipsSum
}

function getMinimalWages(condition: string): Map<string, number> {
    switch (condition) {
        case 'shabat':
            return new Map([
                ['100', 60],
                ['90', 54],
                ['80', 48],
                ['MM', 40],
                ['R', 35],
            ])
        case 'increased':
            return new Map([
                ['100', 50],
                ['90', 45],
                ['80', 40],
                ['MM', 40],
                ['R', 35],
            ])
        default:
            return new Map([
                ['100', 40],
                ['90', 39],
                ['80', 38],
                ['MM', 35],
                ['R', 33],
            ])
    }
}