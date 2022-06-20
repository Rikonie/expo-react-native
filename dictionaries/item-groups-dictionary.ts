interface ItemGroup {
    id: number;
    title: string;

}

export const itemGroupsDictionary: ItemGroup[] = [{"id":1,"title":"\u041c\u0435\u043d\u044e \u043f\u043e\u0434\u0443\u0448\u0435\u043a"},
    {"id":2,"title":"\u041e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435"},
    {"id":3,"title":"\u0422\u043e\u043f\u043f\u0435\u0440\u044b, \u043e\u0434\u0435\u044f\u043b\u0430"},
    {"id":5,"title":"\u0417\u0430\u0440\u044f\u0434\u043a\u0438 (\u0421\u041f\u0438\u0420)"},
    {"id":6,"title":"\u041c\u0435\u0431\u0435\u043b\u044c"},
    {"id":7,"title":"\u0418\u043d\u043e\u0435, \u0432\u0430\u0437\u044b,... (\u0421\u041f\u0438\u0420 \u0438 \u0421\u0421\u041f)"}];

const unknown = 'unknown';

export const GetItemGroupById =(id: number)=> {
    let res = itemGroupsDictionary.find(a=> a.id == id);
    return !!res? res.title: unknown;
};

export const GetItemGroupByTitle =(title: string)=> {
    let res = itemGroupsDictionary.find(a=> a.title == title);
    return !!res? res.id: unknown;
};