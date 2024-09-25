import { excluirItem } from "./excluirItem.js";
import{verificarListaComprados} from "./verificarListaComprados.js";
import { diaSemana } from "./diaSemana.js";
import { editarItem } from "./editarItem.js";

const listaComprados = document.getElementById("lista-comprados");
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;

export function criarItemDaLista(item){
  const itemDaLista = document.createElement("li");
  const containerItemLista = document.createElement("div");
  containerItemLista.classList.add("item-lista-container");
  
  const containerNomeDoItem = document.createElement("div");
  containerNomeDoItem.classList.add("container-nome-compra");
  
  const containerCheckbox = document.createElement("div");
  containerCheckbox.classList.add("container-checkbox");
  
  const checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";
  checkboxInput.classList.add("input-checkbox");
  checkboxInput.id = "checkbox-" + contador++;
  
  const checkboxLabel = document.createElement("label");
  checkboxLabel.setAttribute("for",checkboxInput.id);
  
  checkboxLabel.addEventListener("click", function(evento){
    const checkboxInput = evento.currentTarget.querySelector(".input-checkbox");
    const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
    
    if(checkboxInput.checked){
      checkboxCustomizado.classList.add("checked");
      listaComprados.append(itemDaLista);
    } else{checkboxCustomizado.classList.remove("checked");
      listaComprados.appendChild(itemDaLista);
    }
    ; verificarListaComprados(listaComprados)
  })
  
  const checkboxCustomizado = document.createElement("div");
  checkboxCustomizado.classList.add("checkbox-customizado");
  
  checkboxLabel.appendChild(checkboxCustomizado);
  checkboxLabel.appendChild(checkboxInput);
  
  containerCheckbox.appendChild(checkboxLabel);
  containerNomeDoItem.appendChild(containerCheckbox);
  
  
  
  const nomeDoItem = document.createElement("p");
  nomeDoItem.id = "item-titulo" 
  nomeDoItem.innerText = item;
  containerNomeDoItem.appendChild(nomeDoItem);
  
  const containerBotoes = document.createElement("div");
  const botaoRemover = document.createElement("button");
  const botaoEditar = document.createElement("button");
  
  botaoEditar.classList.add("botao-acao");
  botaoRemover.classList.add("botao-acao");
  containerBotoes.classList.add("container-botoes");
  
  const imagemRemover = document.createElement("img");
  imagemRemover.src = "img/delete.svg";
  imagemRemover.alt = "Deletar";

  botaoRemover.addEventListener("click",function(event){excluirItem(itemDaLista)});
  
  const imagemEditar = document.createElement("img");
  imagemEditar.src = "img/edit.svg";
  imagemEditar.alt = "Editar";
  
  botaoEditar.addEventListener("click",function(){
    editarItem(itemDaLista)
  })
  
  botaoRemover.appendChild(imagemRemover);
  containerBotoes.appendChild(botaoRemover);
  
  botaoEditar.appendChild(imagemEditar);
  containerBotoes.appendChild(botaoEditar); 
  
  containerItemLista.appendChild(containerNomeDoItem);
  containerItemLista.appendChild(containerBotoes);
  
  const itemData = document.createElement("p");
  itemData.innerText = diaSemana();
  itemData.classList.add("texto-data");
  
  
  itemDaLista.appendChild(containerItemLista);
  itemDaLista.appendChild(itemData);

  return itemDaLista;
}