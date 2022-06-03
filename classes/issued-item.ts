 export class IssuedItem {
    id_room: string|undefined;
    fio: string;
    id_group: string;
    id_item: string;
    quantity: string;
    dt_query: Date;
    dt_depart: Date;
    descr: string;

    constructor(id_room: string|undefined, fio: string, id_group: string, id_item: string, quantity: string,
                dt_query: Date, dt_depart: Date, descr: string) {
        this.id_room = id_room;
        this.fio = fio;
        this.id_group = id_group;
        this.id_item = id_item;
        this.quantity = quantity;
        this.dt_query = dt_query;
        this.dt_depart = dt_depart;
        this.descr = descr;

    }
}