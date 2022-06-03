
class Status {
    id: number;
    title: string;

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }
}

export const statusesDictionary:Status[] = [
    {"id":1,"title":"\u0412\u0435\u0440\u043d\u0443\u043b\u0438 \u043d\u0430 \u0441\u043a\u043b\u0430\u0434"},
    {"id":2,"title":"\u0423\u0432\u0435\u0437 \u0433\u043e\u0441\u0442\u044c"},
    {"id":3,"title":"\u0412\u044b\u0434\u0430\u043d\u043e"},
    {"id":4,"title":"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u0431\u0440\u0430\u0442\u044c"},
    {"id":5,"title":"\u041e\u0436\u0438\u0434\u0430\u0435\u0442"},
    {"id":6,"title":"\u041f\u0440\u043e\u0434\u043b\u0435\u043d\u0438\u0435 \/ \u043f\u0435\u0440\u0435\u0435\u0437\u0434"}];

export const GetStatusById =(id: any)=> {
    let res = statusesDictionary.find(a=> a.id == id);
    return !!res? res.title: 'unknown';
};

export const GetStatusByTitle =(title: string)=> {
    let res = statusesDictionary.find(a=> a.title == title);
    return !!res? res.id: 'unknown';
};