import {current} from "@reduxjs/toolkit";
import {Positions, Wages} from "./constants.ts";

export function getEnumKeyByValue(enumObj: any, value: string): string | undefined {
    const keys = Object.keys(enumObj)
    for (let i = 0; i < keys.length; i++) {
        if (enumObj[keys[i]] === value) {
            return keys[i]
        }
    }
    return undefined
}

export function calculateTips(state) {
    const {tipsSum, serviceManagers, waiters, runners, shabat} = current(state)
    const minWages = getMinimalWages(shabat ? 'shabat' : '')
    const employees = serviceManagers.concat(waiters,runners)
    const minSum = employees.reduce((acc,curr) => acc + curr.hours * minWages.get(curr.wageRate),0)
    if (minSum > tipsSum) {
        fulfillData(state, minWages)
    } else {
        for (let i = 0; i < 19; i++) {
            const hours100 = serviceManagers.filter(sm => sm.wageRate === '100').reduce((acc,curr) => acc + curr.hours,0)
            const tmpSum = employees.reduce((acc,curr) => acc + curr.hours * Wages.get(curr.wageRate)![i],0)
            let restMoney = tipsSum - tmpSum
            if (restMoney > hours100 * 3) {
                continue
            }
            if (restMoney < 0) {
                restMoney = tipsSum - employees.reduce((acc,curr) => acc + curr.hours * Wages.get(curr.wageRate)![i-1],0)
                i--
            }
            fulfillData(state,new Map([
                ['100',Wages.get('100')![i] + restMoney / hours100],
                ['90',Wages.get('90')![i]],
                ['80',Wages.get('80')![i]],
                ['MM',Wages.get('MM')![i]],
                ['R',Wages.get('R')![i]],
            ]))
            break
        }
    }
}


function fulfillData(state,hourWages) {
    let totalSum = 0
    Object.keys(Positions).forEach(pos => {
        for (let i = 0; i < current(state)[pos].length; i++) {
            const inHour = state[pos][i].inHour = hourWages.get(current(state)[pos][i].wageRate)
            let sum = 0;
            sum = state[pos][i].sum = inHour * state[pos][i].hours
            if (pos === 'serviceManagers' || pos === 'waiters') {
                if (!isNaN(state[pos][i].specials)) {
                    state[pos][i].sum = sum = sum + state[pos][i].specials
                    if (state[pos][i].hours > 0) {
                        state[pos][i].inHourWithSpecials = (sum / state[pos][i].hours)
                    }
                }
            }
            totalSum += sum
        }
    })
    state.totalSum = totalSum
    state.completion = totalSum - state.tipsSum
}

function getMinimalWages(condition : string) : Map<string,number> {
    switch (condition) {
        case 'shabat':
            return new Map([
                ['100',60],
                ['90',54],
                ['80',48],
                ['MM',40],
                ['R',35],
            ])
        case 'increased':
            return new Map([
                ['100',50],
                ['90',45],
                ['80',40],
                ['MM',38],
                ['R',35],
            ])
        default:
            return new Map([
                ['100',40],
                ['90',39],
                ['80',38],
                ['MM',35],
                ['R',33],
            ])
    }
}