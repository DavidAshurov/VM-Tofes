export enum Positions {
    serviceManagers = 'Service managers',
    waiters = 'Waiters',
    runners = 'Runners',
    bartenders = 'Bartenders'
}
export enum BlankHebrewWords {
    blankHeader = 'טופס טיפים',
    blankDate = ':תאריך',
    blankMorning = 'בוקר',
    blankEvening = 'ערב',
    blankServiceManagers = 'מלצרים',
    blankWaiters = 'מציא מנות',
    blankRunners = 'ראנרים',
    blankBartenders = 'בר',
    blankName = 'שם',
    blankInHour = 'לשעה',
    blankHours = 'שעות',
    blankSpecials = 'ספיישלים',
    blankInHourWithSpecials = 'שעתי ספיישל',
    blankSum = 'סה"כ',
    blankCash = 'מזומן',
    blankCompletion = 'השלמה',
    blankTotalSum = 'סכום',
    blankWaiterName = ': שם מלצר',
}

export const Wages:Map<string,number[]> = new Map<string, number[]>([
    ['100',[40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130]],
    ['90',[39,41,45,49,54,59,63,68,72,76,81,85,90,94,99,104,108,112,117]],
    ['80',[38,39,40,45,48,52,55,58,63,67,72,76,80,84,88,92,96,100,104]],
    ['MM',[35,37,38,40,42,45,47,48,50,52,55,58,60,62,65,67,70,72,75]],
    ['R',[33,34,34,35,35,37,38,39,40,42,44,46,48,50,52,54,56,58,60]],
])
