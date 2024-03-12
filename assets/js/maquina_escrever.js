const element = document.querySelector('.minha-bio');
const palavras = element.getAttribute('data-elements').split(',');
let palavraIndex = 0;
let letraIndex = 0;
let deleting = false;

function digitar() {
    const palavraAtual = palavras[palavraIndex];
    const textoAtual = palavraAtual.slice(0, letraIndex)
    element.textContent = textoAtual

    if (!deleting) {
        if (letraIndex < palavraAtual.length) {
            letraIndex++
            setTimeout(digitar, 100)
        } else {
            deleting = true
            setTimeout(digitar, 1000)
        }
    } else {
        if (letraIndex > 0) {
            letraIndex--;
            setTimeout(digitar, 50);
          } else {
            deleting = false;
            palavraIndex = (palavraIndex + 1) % palavras.length;
            setTimeout(digitar, 1000);
          }
    }
}

setTimeout(digitar, 1000);


