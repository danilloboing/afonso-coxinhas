const meuNome = document.querySelector('.minha-bio');
const fName = meuNome.innerHTML = '';
const botaoVerMais = document.querySelector('button');
const habilidades = document.querySelectorAll('.escondido');
const node = document.querySelector('#fundo')
meuNome.innerHTML='';
const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');

const sobreSkill = [
    '<p>HTML</p><p style="margin-bottom: 10px;">É um bloco de construção da web. Define o significado e a estrutura do conteúdo da web. Outras tecnologias além do HTML geralmente são usadas para descrever a aparência/apresentação (CSS) ou a funcionalidade/comportamento (JavaScript) de uma página da web.</p>',
    '<p>CSS</p><p style="margin-bottom: 10px;">Trata-se de uma linguagem de marcação, amplamente utilizada com HTML ou XHTML, e representa diversas possibilidades para a formatação. O CSS ajuda a editar, alinhar, remover e trabalhar no espaço entre elementos de uma página.</p>',
    '<p>JavaScript</p><p style="margin-bottom: 10px;">É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p>',
    '<p>Git</p><p style="margin-bottom: 10px;">O Git é um sistema de controle de versão de código-fonte aberto. Ele facilita esse tipo de colaboração no projeto por meio do controle de versão distribuído de arquivos que residem em repositórios.</p>',
    '<p>Github</p><p style="margin-bottom: 10px;">É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.</p>',
    '<p>Bootstrap</p><p style="margin-bottom: 10px;">É um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples. Além disso, pode lidar com sites de desktop e páginas de dispositivos móveis da mesma forma.</p>'
  ]
  
const dataInicio = [
                    (new Date(2021, 10, 1)).getTime(), // 0
                    (new Date(2021, 10, 1)).getTime(), // 1
                    (new Date(2022, 0, 1)).getTime(), // 2
                    (new Date(2022, 3, 1)).getTime(), // 3
                    (new Date(2022, 3, 1)).getTime(), // 4
                    (new Date(2022, 1, 1)).getTime(), // 5
                    (new Date(2021, 11, 1)).getTime(), // 6
                    (new Date(2021, 11, 1)).getTime(), // 7
                ]
                const dataHoje = (new Date()).getTime();
                
skills.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        let tempo = 'mês';
        let tempoDeExperiencia = Math.round((dataHoje-dataInicio[index1])/(1000*60*60*24*30));
        if (tempoDeExperiencia > 1) tempo = 'meses'
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = '/* Passe o mouse por cima de alguma habilidade para ler a descrição */';
    } )
} );

function maisHabilidades (elemento) {
    elemento.addEventListener('click', cliqueVer)
}
function cliqueVer (e) {
    habilidades.forEach( (elemento) => {
        if (elemento.classList.contains('escondido')) {
            elemento.classList.remove('escondido');
            elemento.classList.add('visivel');
            botaoVerMais.innerHTML = 'Ver menos';
        } else {
            elemento.classList.add('escondido');
            elemento.classList.remove('visivel');
            botaoVerMais.innerHTML = 'Ver mais';
        }
    } )
}

maisHabilidades(botaoVerMais);

