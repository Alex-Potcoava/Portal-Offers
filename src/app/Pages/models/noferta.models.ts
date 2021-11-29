export class NOferta {
    private titulo: string;
    private descripcion: string;
    private empresa: string;
    private salario: string;
    private ciudad: string;
    private email: string;


    constructor(titulo: string, descripcion: string, empresa: string, salario: string, ciudad: string, email: string ) {
            this.titulo = titulo;
            this.descripcion = descripcion;
            this.empresa = empresa;
            this.salario = salario;
            this.ciudad = ciudad;
            this.email = email
        }

        //Getters y Setters
        get _titulo(): string {
            return this.titulo;
        }
        set _titulo(value: string) {
            this.titulo = value;
        }

        get _descripcion(): string {
            return this.descripcion;
        }
        set _descripcion(value: string) {
            this.descripcion = value;
        }

        get _empresa(): string {
            return this.empresa;
        }
        set _empresa(value: string) {
            this.empresa = value;
        }

        get _salario(): string {
            return this.salario;
        }
        set _salario(value: string) {
            this.salario = value;
        }

        get _ciudad(): string {
            return this.ciudad;
        }
        set _ciudad(value: string) {
            this.ciudad = value;
        }

        get _email(): string {
            return this.email;
        }
        set _email(value: string) {
            this.email = value;
        }

}