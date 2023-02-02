import { Lista } from "./lista";
import { Produto } from "./produto";

export class ItemLista{
    public numSeq: number;
    public quantidade: number;
    public precoTotal: number;
    public concluido: number;
    public produto: Produto;
    public lista: Lista;

    constructor(){
        this.numSeq = 0;
        this.quantidade = 0;
        this.precoTotal = 0;
        this.concluido = 0;
        this.produto = new Produto();
        this.lista = new Lista();
    }
}