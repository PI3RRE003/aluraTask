import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item= document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");
const listaComprados = document.getElementById("lista-comprados");
let contador = 0;

export function adicionarItem(evento){
  evento.preventDefault();

  if(item.value === ""){
    alert("Por favor insira um item!");
    return;
  }
  
  const itemDaLista = criarItemDaLista(item.value);
  listaDeCompras.appendChild(itemDaLista);
  verificarListaVazia(listaDeCompras);
  item.value = "";
}