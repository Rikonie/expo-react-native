 export interface IssuedItem {
    id_room: string|undefined;
    fio: string;
    id_group: string;
    id_item: string;
    quantity: string;
    dt_query: Date;
    dt_depart: Date;
    descr: string;
}