class Item {
    id?: string;
    dt?: string;
    id_room: string;
    fio: string;
    id_group: string;
    id_item: string;
    quantity: string;
    dt_query: Date;
    dt_depart: Date;
    id_status: string;
    descr: string;

    constructor(id: string, dt: string, id_room: string, fio: string, id_group: string, id_item: string,
                quantity: string, dt_query: Date, dt_depart: Date, id_status: string, descr: string) {

        this.id = id;
        this.dt = dt;
        this.id_room = id_room;
        this.fio = fio;
        this.id_group = id_group;
        this.id_item = id_item;
        this.quantity = quantity;
        this.dt_query = dt_query;
        this.dt_depart = dt_depart;
        this.id_status = id_status;
        this.descr = descr

    }
}