export class SetStatus {
    id_room: string;
    dt_query?: Date;
    dt_depart?: Date;
    id_status: string;
    id: string;

    constructor(id_room: string, id_status: string, id:string, dt_query?:Date, dt_depart?:Date) {
        this.id_room = id_room;
        this.dt_query = dt_query;
        this.dt_depart = dt_depart;
        this.id_status = id_status;
        this.id = id;
    }
}