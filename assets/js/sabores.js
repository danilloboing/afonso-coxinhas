const meuNome = document.querySelector('.minha-bio');
const fName = meuNome.innerHTML = '';
const botaoVerMais = document.querySelector('button');
const sabores = document.querySelectorAll('.escondido');
const node = document.querySelector('#fundo')
meuNome.innerHTML='';
const skills = document.querySelectorAll('.sabor-box');
const descricao = document.querySelector('.texto-descricao');

const sobreSkill = [
    '<h2>Frango</h2><p style="margin-bottom: 10px;">Deliciosas coxinhas de frango recheadas com suculento frango desfiado, um sabor irresistível em cada mordida!.</p>',
    '<h2>Costela</h2><p style="margin-bottom: 10px;">Saborosas coxinhas de costela, com recheio suculento e tempero irresistível, uma explosão de sabor em cada pedaço!</p>',
    '<h2>Presunto e Queijo</h2><p style="margin-bottom: 10px;">Deliciosas coxinhas de presunto e queijo, recheadas com o melhor presunto e queijo derretido, uma combinação irresistível de sabores!.</p>',
    '<h2>Carne</h2><p style="margin-bottom: 10px;">Coxinhas de carne, com um recheio irresistível e um toque de picância, perfeitas para quem ama sabores intensos!</p>',
    '<h2>Calabresa</h2><p style="margin-bottom: 10px;">Coxinhas de calabresa, com um recheio irresistível e um toque de picância, perfeitas para quem ama sabores intensos!</p>',
    '<h2>Brigadeiro</h2><p style="margin-bottom: 10px;">Coxinhas de brigadeiro, com um irresistível recheio cremoso envolto em uma casquinha crocante, uma combinação perfeita de texturas e sabores!</p>'
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
        descricao.innerHTML = 'Passe o mouse por cima dos sabores para ver a Descrição!';
    } )
} );

function maissabores (elemento) {
    elemento.addEventListener('click', cliqueVer)
}
function cliqueVer (e) {
    sabores.forEach( (elemento) => {
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

maissabores(botaoVerMais);

