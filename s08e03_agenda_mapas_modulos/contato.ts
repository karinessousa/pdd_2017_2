import {Fone} from "./fone";

export class Contato {
    readonly nome: string;
    private _fones: Array<Fone>;
    private _favorited: boolean;
    
    constructor(nome: string = "") {
        this.nome = nome;
        this._fones = [];
    }

	public get favorited(): boolean {
		return this._favorited;
	}

	public set favorited(value: boolean) {
		this._favorited = value;
	}

	public get fones(): Array<Fone> {
		return this._fones;
	}

    addFone(fone: Fone): boolean {
        for(let elem of this._fones)
            if(elem.foneid == fone.foneid)
                return false;
        this._fones.push(fone);
        return true;
    }

    rmFone(foneid: string): boolean {
        for(let i = 0; i < this._fones.length; i++){
            if(this._fones[i].foneid == foneid){
                this._fones.splice(i, 1);
                return true;
            }
        }
        return false;
    }
    
    toString(): string {
        let saida = "";
        saida += (this._favorited) ? "@" : "-";
        saida += " " + this.nome;
        for(let elem of this._fones)
            saida += elem;
        return saida;
    }
}