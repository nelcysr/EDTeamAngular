export class ClassEstudiante {

    fotoURL?: string =  "https://img.icons8.com/color/420/edit-user-female.png";

    constructor(public _id: number, 
                public _nombre: string,
                public _ciudad: string) {
    }

    getEdad(): number {
        return 15;
    }

    get nombre(): string {
        return this._nombre;
    }


    get ciudad(): string {
        return this._ciudad;
    }
}
