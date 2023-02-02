import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemLista } from 'src/app/model/itemLista';
import { Lista } from 'src/app/model/lista';
import { Produto } from 'src/app/model/produto';
import { ItensListaService } from 'src/app/servicos/itens-lista.service';
import { ListasService } from 'src/app/servicos/listas.service';
import { ProdutosService } from 'src/app/servicos/produtos.service';

@Component({
  selector: 'app-detalhelista',
  templateUrl: './detalhelista.component.html',
  styleUrls: ['./detalhelista.component.css'],
})
export class DetalhelistaComponent implements OnInit {
  public listaProdutos: Produto[];
  public novoProduto: Produto;
  public formNovoProduto: boolean;  
  public novoItem: ItemLista; 
  public idLista: number;
  public listaCompras: Lista;

  constructor(private produtoService: ProdutosService, private activatedRoute: ActivatedRoute, private itensListaService: ItensListaService, private listaService: ListasService) {
    this.formNovoProduto = false;
    this.listaProdutos = [];
    this.novoItem = new ItemLista();
    this.novoProduto = new Produto();
    this.listaCompras = new Lista();
    this.idLista = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.recuperarTodosOsProdutos();
    this.recuperarDetalheLista(this.idLista);
  }

  public recuperarDetalheLista(idLista: number) {
      this.listaService.recuperarListaPorId(idLista).subscribe(
        (res: Lista) => {
          this.listaCompras = res;
        },
        (err: any) => {alert('Ocorreu um erro ao recuperar a lista' + err)}
      );
  }

  public recuperarTodosOsProdutos() {
    this.produtoService.getAllProdutos().subscribe(
      (res: Produto[]) => {
        this.listaProdutos = res;
      },
      (err: any) => {
        alert('Ocorreu um erro ao recuperar os produtos' + err);
      }
    );
  }

  public exibirModal() {
    document.getElementById('btnModal')?.click();
  }

  public habilitarNovoProduto() {
    this.formNovoProduto = true;
  }

  public cadastrarNovoProduto() {
    this.formNovoProduto = false;
    this.produtoService.addNewProduto(this.novoProduto).subscribe(
      (res: Produto) => {
        alert('Produto cadastrado com sucesso');
        this.novoProduto = new Produto();
        this.recuperarTodosOsProdutos();
      },
      (err) => { alert('Ocorreu um erro ao cadastrar o produto' + err)}
    );
  }

  public adicionarItemNaLista(){
    this.novoItem.lista.id = this.idLista;
    console.log(this.novoItem);
    this.itensListaService.adicionarNovoItem(this.novoItem).subscribe(
      (res : ItemLista) => {
        alert('Item adicionado com sucesso');
        this.recuperarDetalheLista(this.idLista);
        this.novoItem = new ItemLista();
      },
      (err) => {alert('Ocorreu um erro ao adicionar o item na lista' + err)}
    );
  }
}
