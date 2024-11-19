document.addEventListener('DOMContentLoaded', () => {
    const hamburguerIcon = document.getElementById('hamburguer-icon');
    const menu = document.getElementById('menu');
    const searchIcon = document.getElementById('search-icon');
    const searchContainer = document.getElementById('search-container');
    const busca = document.getElementById('busca');

    // Alterna o menu ao clicar no ícone do hambúrguer
    hamburguerIcon.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita que o evento se propague e acione o evento de clique fora do menu
        // Fecha o menu
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
            menu.classList.add('hide');
            // Abre o menu
        } else {
            menu.style.display = 'block';
            menu.classList.remove('hide');
            menu.classList.add('show');
        }
    });

    // Alterna o campo de pesquisa ao clicar na lupa ou no link "BUSCA"
    searchIcon.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita que o evento se propague e acione o evento de clique fora do menu
        // Abre ou fecha o campo de pesquisa
        searchContainer.style.display =
            searchContainer.style.display === 'block' ? 'none' : 'block';
    });

    busca.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita que o evento se propague e acione o evento de clique fora do menu
        // Abre ou fecha o campo de pesquisa
        searchContainer.style.display =
            searchContainer.style.display === 'block' ? 'none' : 'block';
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickInsideSearch = searchContainer.contains(event.target);

        if (!isClickInsideMenu && menu.classList.contains('show')) {
            // Fecha o menu
            menu.classList.remove('show');
            menu.classList.add('hide');
        }

        if (!isClickInsideSearch && searchContainer.style.display === 'block') {
            // Fecha o campo de pesquisa
            searchContainer.style.display = 'none';
        }
    });

    // Adiciona um evento de animação para ocultar o menu após a animação de saída
    menu.addEventListener('animationend', () => {
        if (menu.classList.contains('hide')) {
            // Oculta o menu após a animação de saída
            menu.style.display = 'none';
        }
    });
});

// Função para visualizar imagem carregada pelo usuário
document.addEventListener('DOMContentLoaded', () => {
    const inputImagem = document.getElementById('carregarImagem');
    if (inputImagem) {
        inputImagem.addEventListener('change', function (event) {
            const visualizacaoImagem = document.getElementById('imagemUsuario');
            const arquivo = event.target.files[0];

            if (arquivo) {
                const leitor = new FileReader();
                leitor.onload = function (e) {
                    // Mostra a imagem carregada
                    visualizacaoImagem.src = e.target.result;
                    visualizacaoImagem.style.width = "150px";
                    visualizacaoImagem.style.height = "150px";
                    visualizacaoImagem.style.borderRadius = "50%";
                    visualizacaoImagem.style.objectFit = "cover";
                };
                leitor.readAsDataURL(arquivo);
            }
        });
    }

    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    let currentIndex = 0;

    function updateSlidePosition() {
        const offset = -currentIndex * 100; // Move 100% da largura para cada slide
        slides.style.transform = `translateX(${offset}%)`;
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % totalSlides; // Avança o índice e reinicia se for o último
        updateSlidePosition();
    }

    // Troca de slide a cada 5 segundos
    setInterval(autoSlide, 5000);
});

// Seleciona todos os botões de pergunta
const faqQuestions = document.querySelectorAll('.faq-question');

// Adiciona um evento de clique para cada pergunta
faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling; // Seleciona a resposta associada à pergunta

        // Alterna entre mostrar ou esconder a resposta
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});

