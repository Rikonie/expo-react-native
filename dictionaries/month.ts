class Month {
    id: number;
    title: string;

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }
}

export const MonthDictionary: Month[] = [
    {id:0, title: 'Января'}, {id:1, title: 'Февраля'},
    {id:2, title: 'Марта'}, {id:3, title: 'Апреля'},
    {id:4, title: 'Мая'}, {id:5, title: 'Июня'},
    {id:6, title: 'Июля'}, {id:7, title: 'Августа'},
    {id:8, title: 'Сентября'}, {id:9, title: 'Октября'},
    {id:10, title: 'Ноября'}, {id:11, title: 'Декабря'},
];

export const GetMonthById =(id?: number)=> {
    let res = MonthDictionary.find(a=> a.id == id);
    return !!res? res.title: 'unknown';
};