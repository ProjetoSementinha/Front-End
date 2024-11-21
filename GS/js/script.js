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
});

const slides = document.querySelector('.slides');
if (slides) {
    const totalSlides = slides.children.length;
    let currentIndex = 0;

    /**
     * Atualiza a posição do slide
     */
    function updateSlidePosition() {
        const offset = -currentIndex * 100; // Move 100% da largura para cada slide
        slides.style.transform = `translateX(${offset}%)`;
    }

    /**
     * Avança o slide automaticamente
     */
    function autoSlide() {
        currentIndex = (currentIndex + 1) % totalSlides; // Avança o índice e reinicia se for o último
        updateSlidePosition();
    }

    // Troca de slide a cada 5 segundos
    setInterval(autoSlide, 5000);
}


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


function validar(){
    
    var nomeEl = document.getElementById("txtNome");
    var razaoSocialEl = document.getElementById("txtRazaoSocial");
    var emailEl = document.getElementById("txtEmail");
    var cpfEl = document.getElementById("txtCPF");
    var cnpjEl = document.getElementById("txtCNPJ");
    var ramoEl = document.getElementById("txtRamo");
    var telefoneEl = document.getElementById("txtTelefone");
    var enderecoEl = document.getElementById("txtEndereco");
    var usuarioEl = document.getElementById("txtNomeUsuario");
    var senhaEl = document.getElementById("txtSenha");
    var confSenhaEl = document.getElementById("txtConfSenha");
    var nomeCampanhaEl = document.getElementById("txtNomeCampanha");
    var tipoEnergiaEl = document.getElementById("green-energy");
    var descricaoEl = document.getElementById("txtDescricao");
    var metaEl = document.getElementById("txtMeta");

    if(nomeCampanhaEl.value == ""){
        alert("Preencha o campo Nome da Campanha");
        nomeCampanhaEl.focus();
        return false;
    }

    if (tipoEnergiaEl.value === "") {
        alert("Selecione uma opção no campo Tipo de Energia Verde");
        tipoEnergiaEl.focus();
        return false;
    }

    if(descricaoEl.value == ""){
        alert("Preencha o campo Descrição");
        descricaoEl.focus();
        return false;
    }

    if(metaEl.value == ""){
        alert("Preencha o campo Meta");
        metaEl.focus();
        return false;
    }

    if(nomeEl.value == ""){
        alert("Preencha o campo nome");
        nomeEl.focus();
        return false;
    }

    if(razaoSocialEl.value == ""){
        alert("Preencha o campo Razão Social");
        razaoSocialEl.focus();
        return false;
    }

    if(emailEl.value == ""){
        alert("Preencha o campo E-mail");
        emailEl.focus();
        return false;
    }

    if(cpfEl.value == ""){
        alert("Preencha o campo CPF");
        cpfEl.focus();
        return false;
    }

    if(cnpjEl.value == ""){
        alert("Preencha o campo CNPJ");
        cnpjEl.focus();
        return false;
    }

    if(ramoEl.value == ""){
        alert("Preencha o campo Ramo de Atuação");
        ramoEl.focus();
        return false;
    }

    if(telefoneEl.value == ""){
        alert("Preencha o campo Telefone");
        telefoneEl.focus();
        return false;
    }

    if(enderecoEl.value == ""){
        alert("Preencha o campo Endereço");
        enderecoEl.focus();
        return false;
    }

    if(usuarioEl.value == ""){
        alert("Preencha o campo Usuário");
        usuarioEl.focus();
        return false;
    }

    if ((senhaEl.value == "") || (confSenhaEl.value == "")) {
        alert("Preencha os campos senha e confirmação de senha");
        senhaEl.focus();
        return false; // Impede o envio
    } else {
        if (senhaEl.value != confSenhaEl.value) {
            alert("As senhas não conferem");
            senhaEl.focus();
            return false; // Impede o envio
        }
    }  

    alert("Formulário enviado com sucesso!");
    return true;
    
}

function validarFormulario(event) {
    event.preventDefault();

    var usuarioEl = document.getElementById("txtUsuario");
    var senhaEl = document.getElementById("txtSenhaLogin");
    var usuarioErroEl = document.getElementById("usuarioErro");
    var senhaErroEl = document.getElementById("senhaErro");

    // Validação para o campo de Usuário
    if (usuarioEl.value === "") {
        // Exibe a mensagem de erro para o campo Usuário
        usuarioErroEl.style.display = "inline"; // Torna o erro visível
        usuarioEl.focus(); // Foca no campo de usuário
    } else {
        // Se o usuário estiver preenchido, oculta a mensagem de erro
        usuarioErroEl.style.display = "none";
    }

    // Validação para o campo de Senha
    if (senhaEl.value === "") {
        // Exibe a mensagem de erro para o campo Senha
        senhaErroEl.style.display = "inline"; // Torna o erro visível
        senhaEl.focus(); // Foca no campo de senha
    } else {
        // Se a senha estiver preenchida, oculta a mensagem de erro
        senhaErroEl.style.display = "none";
    }

    // Se ambos os campos estiverem preenchidos corretamente, redireciona para o painel
    if (usuarioEl.value !== "" && senhaEl.value !== "") {
        // Simula o envio do formulário (neste caso, redirecionando para outra página)
        window.location.href = "painelDeCampanhas.html"; // Redireciona para a página de painel de campanhas
    }
}