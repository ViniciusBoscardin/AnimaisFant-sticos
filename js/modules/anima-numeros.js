export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach((numero) => {
      const total = +numero.innerText; //'+' transforma string em número
      const incremento = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start = start + incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  function handleMutation(mutation) {
    // esta é uma função que será executada sempre que houver uma mutação no elemento observado. A função recebe um argumento mutation, que é um array de objetos MutationRecord que descrevem as mudanças ocorridas.
    if (mutation[0].target.classList.contains('ativo')) {
      // este trecho de código verifica se a classe .ativo foi adicionada ao elemento observado. Para isso, acessa-se o primeiro objeto MutationRecord do array mutation e, em seguida, o atributo target, que contém o elemento observado. Então, usa-se a propriedade classList para verificar se o elemento possui a classe .ativo.
      observer.disconnect();
      // esta linha de código para a observação de mutações pelo objeto observer. Isso é feito para evitar que a função animaNumeros() seja executada mais de uma vez.
      animaNumeros();
      // finalmente, a função animaNumeros() é executada, quando a classe .ativo é adicionada ao elemento observado.
    }
  }

  const observerTarget = document.querySelector('.numeros');
  // esta linha de código seleciona o elemento que será observado por meio do método querySelector(), que busca o primeiro elemento na página que tenha a classe .numeros.
  const observer = new MutationObserver(handleMutation);
  // aqui, cria-se um novo objeto MutationObserver, que executará a função handleMutation() sempre que houver uma mutação no elemento observado.

  observer.observe(observerTarget, { attributes: true });
  // por fim, este trecho de código configura o objeto observer para observar mudanças nos atributos do elemento observado, passando um objeto de opções como segundo argumento. Neste caso, a opção attributes é definida como true, o que significa que o MutationObserver detectará mudanças nos atributos do elemento.
}
