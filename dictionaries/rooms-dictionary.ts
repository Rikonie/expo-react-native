class Room {
    id: number;
    title: string;

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
    }
}

export const roomsDictionary: Room[] = [{"id":1,"title":"A1"},{"id":2,"title":"A2"},{"id":3,"title":"A3"},
    {"id":4,"title":"A4"},{"id":5,"title":"A5"},{"id":6,"title":"A6"},{"id":7,"title":"A7"},{"id":8,"title":"A8"},
    {"id":9,"title":"A9"},{"id":10,"title":"A10"},{"id":11,"title":"A11"},{"id":12,"title":"A12"},
    {"id":13,"title":"A13"},{"id":14,"title":"A14"},{"id":15,"title":"A15"},{"id":16,"title":"A16"},
    {"id":17,"title":"A17"},{"id":18,"title":"A18"},{"id":19,"title":"A19"},{"id":20,"title":"A20"},
    {"id":21,"title":"A21"},{"id":22,"title":"A22"},{"id":23,"title":"A23"},{"id":24,"title":"A24"},
    {"id":25,"title":"B25"},{"id":26,"title":"B26"},{"id":27,"title":"B27"},{"id":28,"title":"B28"},
    {"id":29,"title":"B29"},{"id":30,"title":"B30"},{"id":31,"title":"B31"},{"id":32,"title":"B32"},
    {"id":33,"title":"B33"},{"id":34,"title":"B34"},{"id":35,"title":"B35"},{"id":36,"title":"B36"},
    {"id":37,"title":"B37"},{"id":38,"title":"B38"},{"id":39,"title":"B39"},{"id":40,"title":"B40"},
    {"id":41,"title":"B41"},{"id":42,"title":"B42"},{"id":43,"title":"B43"},{"id":44,"title":"B44"},
    {"id":45,"title":"B45"},{"id":46,"title":"B46"},{"id":47,"title":"B47"},{"id":48,"title":"B48"},
    {"id":49,"title":"C49"},{"id":50,"title":"C50"},{"id":51,"title":"C51"},{"id":52,"title":"C52"},
    {"id":53,"title":"C53"},{"id":54,"title":"C54 - C55"},{"id":55,"title":"C56"},{"id":56,"title":"C57"},
    {"id":57,"title":"C58"},{"id":58,"title":"C59"},{"id":59,"title":"C60"},{"id":60,"title":"C61"},
    {"id":61,"title":"C62"},{"id":62,"title":"C63"},{"id":63,"title":"C64"},{"id":64,"title":"C65"},
    {"id":65,"title":"C66"},{"id":66,"title":"C67"},{"id":67,"title":"C68"},{"id":68,"title":"C69"},
    {"id":69,"title":"C70"},{"id":70,"title":"C71"},{"id":71,"title":"C72"},
    {"id":72,"title":"\u041e\u0444\u0438\u0441"},{"id":73,"title":"\u0410\u041f11"}];

export const GetRoomById =(id: number)=> {
    let res = roomsDictionary.find(a=> a.id == id);
    return !!res? res.title: 'unknown';
};