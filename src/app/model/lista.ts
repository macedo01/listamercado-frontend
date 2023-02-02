import { ItemLista } from "./itemLista";

export class Lista{
    public id: number;
    public data: Date;
    public nomeMercado: string;
    public valorTotal: number;
    public status: number;
    public itens: ItemLista[];

    public constructor(){
        this.id = 0;
        this.data = new Date();
        this.nomeMercado = "";
        this.valorTotal = 0;
        this.status = 0;
        this.itens = [];
    }
}