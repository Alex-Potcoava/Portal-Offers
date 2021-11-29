export class RegistroForm{
    public _usuario: string | undefined;
    public _password: string | undefined;
    public _checkBox: boolean | undefined;

    constructor(usuario: string, password: string, checkBox: boolean){
            this._usuario = usuario;
            this._password = password;
            this._checkBox = checkBox;
    }

    get usuario(): string {
        return this._usuario;
    }
    set usuario(value: string) {
        this._usuario = value;
    }

    get password(): string {
        return this._password;
    }
    set password(value: string) {
        this._password = value;
    }

    get checkBox(): boolean {
        return this._checkBox;
    }
    set checkBox(value: boolean) {
        this._checkBox = value;
    }
}