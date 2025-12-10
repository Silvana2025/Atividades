function parOuImpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "ímpar";
  }
}
console.log(parOuImpar(2)); 
console.log(parOuImpar(5)); 



function verificarIdade(idade) {
  if (idade >= 18) {
    return "maior de idade";
  } else {
    return "menor de idade";
  }
}
console.log(verificarIdade(12)); 
console.log(verificarIdade(25)); 



const saudacao = u =>
  u?.nome ? `Bem-vindo(a), ${u.nome}` : "Bem-vindo(a), convidado(a)";
console.log(saudacao({ nome: "Silvana" }));   
console.log(saudacao({}));               
console.log(saudacao(null));    




function calcularPreco(preco, isMember) {
  if (isMember) {
    return preco * 0.9; 
  }
  return preco;
}
console.log(calcularPreco(100, true));  
console.log(calcularPreco(100, false)); 



const preverTempo = t =>
  t < 15 ? "Frio" : t <= 25 ? "Leve" : "Quente";
console.log(preverTempo(10)); Frio 
console.log(preverTempo(20)); Leve
console.log(preverTempo(30)); Quente



const botaoTexto = isOpen => (isOpen ? "Fechar" : "Abrir");

console.log(botaoTexto(true));  Fechar
console.log(botaoTexto(false)); Abrir




const exibirErro = erro => erro || "";
console.log(exibirErro("Falha ao carregar")); 
console.log(exibirErro(null));               
console.log(exibirErro(""));                 




const verificarEstoque = q => (q > 0 ? "Em estoque" : "Sem estoque");
console.log(verificarEstoque(5)); 
console.log(verificarEstoque(0)); 
console.log(verificarEstoque(-1)); 




const exibirCarregamento = isLoading => isLoading ? "Carregando..." : "Dados carregados";
console.log(exibirCarregamento(true));  
console.log(exibirCarregamento(false)); 




const mensagens = {
  admin: "Bem-vindo(a), administrador(a)!",
  user: "Bem-vindo(a), usuário(a)!",
  guest: "Bem-vindo(a), visitante!"
};
const mensagemUsuario = funcao => mensagens[funcao] || "Função desconhecida.";
console.log(mensagemUsuario("admin")); 
console.log(mensagemUsuario("user"));  
console.log(mensagemUsuario("guest")); 
console.log(mensagemUsuario("xyz"));   




function filtrarAdultos(idades) {
  return idades.filter(idade => idade >= 18);
}
const idades = [12, 17, 18, 25, 30];
console.log(filtrarAdultos(idades)); 




function nomesMaiusculos(nomes) {
  return nomes.map(nome => nome.toUpperCase());
}
const nomes = ["ana", "bruno", "carla"];
console.log(nomesMaiusculos(nomes)); 



function dobrarNumeros(numeros) {
  return numeros.map(num => num * 2);
}
const numeros = [1, 2, 3];
console.log(dobrarNumeros(numeros)); 




const extrairTitulos = itens => itens.map(item => item.título);
const livros = [
  { título: "O Senhor dos Anéis" },
  { título: "Harry Potter" },
  { título: "O Pequeno Príncipe" }
];
console.log(extrairTitulos(livros));



const primeiraTarefaConcluida = tarefas => tarefas.find(t => t.concluida);
const tarefas = [
  { nome: "Comprar leite", concluida: false },
  { nome: "Lavar roupa", concluida: true },
  { nome: "Estudar JS", concluida: true }
];
console.log(primeiraTarefaConcluida(tarefas));




function somaPrecos(itens) {
  return itens.reduce((total, item) => total + item.preço, 0);
}
const produtos = [
  { preço: 10 },
  { preço: 20 },
  { preço: 5 }
];
console.log(somaPrecos(produtos));



const contarUsuariosAtivos = usuarios => usuarios.filter(u => u.active).length;
const usuarios = [
  { nome: "Ana", active: true },
  { nome: "Bruno", active: false },
  { nome: "Carla", active: true }
];
console.log(contarUsuariosAtivos(usuarios)); 




const ordenarPorPreco = produtos => produtos.sort((a, b) => a.preço - b.preço);
const produtos = [
  { nome: "Produto A", preço: 30 },
  { nome: "Produto B", preço: 10 },
  { nome: "Produto C", preço: 20 }
];
console.log(ordenarPorPreco(produtos));




const obterIniciais = nome => nome.split(" ").map(p => p[0].toUpperCase()).join("");
console.log(obterIniciais("Silvana Soares")); 



function filtrarPorTermo(lista, termo) {
  return lista.filter(item => item.toLowerCase().includes(termo.toLowerCase()));
}
const frutas = ["Maçã", "Banana", "Laranja", "Abacaxi"];
console.log(filtrarPorTermo(frutas, "an")); 
console.log(filtrarPorTermo(frutas, "ma")); 



const apararEntrada = texto => texto.trim();
console.log(apararEntrada("   Olá mundo!   ")); 
console.log(apararEntrada("   JavaScript  "));  




const validarEmail = email => email.includes("@") && email.includes(".");
console.log(validarEmail("teste@exemplo.com")); 
console.log(validarEmail("testeexemplo.com"));  
console.log(validarEmail("teste@exemplocom"));  



const formatarNomeUsuario = nome => nome.toLowerCase().replace(/\s+/g, "_");
console.log(formatarNomeUsuario("Silvana Soares")); 




function primeiraMaiuscula(texto) {
  if (!texto) return "";
  return texto[0].toUpperCase() + texto.slice(1);
}
console.log(primeiraMaiuscula("hello")); 




const mascararCartao = n => "*".repeat(n.length - 4) + n.slice(-4);
console.log(mascararCartao("1234567812345678")); 



const alternarBooleano = valor => !valor;console.log(alternarBooleano(true));  
console.log(alternarBooleano(false));



const incrementar = contador => contador + 1;

console.log(incrementar(5)); 
console.log(incrementar(0)); 



const selecionarOpcao = (valor, opcoes) => opcoes.find(opcao => opcao === valor);
const opcoes = ["vermelho", "verde", "azul"];
console.log(selecionarOpcao("verde", opcoes)); 
console.log(selecionarOpcao("amarelo", opcoes)); 



const paginarArray = (array, pagina, tamanhoPagina) =>
  array.slice((pagina - 1) * tamanhoPagina, pagina * tamanhoPagina);
const itens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(paginarArray(itens, 1, 3)); 
console.log(paginarArray(itens, 2, 3)); 
console.log(paginarArray(itens, 4, 3)); 



function mesclarUsuarios(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
const usuario1 = { nome: "Silvana" };
const usuario2 = { idade: 18 };
console.log(mesclarUsuarios(usuario1, usuario2));























