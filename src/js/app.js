document.addEventListener('DOMContentLoaded', () =>{
    const form = document.getElementById('job-form');
    const jobListContainer = document.getElementById('job-list');

    //Função para carrgar as vagas do localStorage
    function loadJobs (){
        console.log("Executando loadJobs...");
        const jobs = JSON.parse(localStorage.getItem('jobVacancies')) || [];
        console.log("Vagas encontradas no localStorage:", jobListContainer);

        jobListContainer.innerHTML = ''; //Limpa o container
        //Exibe as vagas mais recentes primeiro
        jobs.reverse().forEach(job => {
            const card = document.createElement('card-news');
            card.setAttribute('nome-anunciante', job.anuncianteNome);
            card.setAttribute('foto-anunciante', job.anuncianteFoto);
            card.setAttribute('titulo', job.vagaTitulo);
            card.setAttribute('setor', job.vagaSetor);
            card.setAttribute('imagem-empresa', job.empresaImagem);
            card.setAttribute('descricao', job.vagaDescricao);
            jobListContainer.appendChild(card);
        });
        console.log("Cards Renderizados na tela.");
    }
    //Função para salvar uma nova vaga
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log("Formulário enviado (submit).");

        const newJob = {
            anuncianteNome: document.getElementById
            ('anunciante-nome').value,
            anuncianteFoto: document.getElementById
            ('anunciante-foto').value,
            vagaTitulo: document.getElementById
            ('vaga-Titulo').value,
            vagaSetor: document.getElementById
            ('vaga-setor').value,
            empresaImagem: document.getElementById
            ('empresa-imagem').value,
            vagaDescricao: document.getElementById
            ('vaga-descricao').value,
        };
        //Ponto d diagnostico mais importante
        console.log("1. DADOS CAPTURADOS DO FORMULÁRIO:", newJob);
        //1. READ: lê as vagas existente
        const jobs = JSON.parse(localStorage.getItem('jobVacancies')) || [];
        console.log("2. VAGAS ANTIGAS LIDAS:", jobs);

        //Salva de volta no localStorage
        localStorage.setItem('jobVacancies', JSON.stringify(jobs));
        console.log ("3. VAGAS NOVAS NO LOCALSTORAGE.");
        //Recarrega e exibe a lista de vagas
        loadJobs();

        //Limpa os campos dos formuláios (metodo mais eficiente)
        form.reset();
        console.log("4. Formulário resetado.");

        alert('Vaga publicada com sucesso!');
    });

    //Carrega as vagas ao iniciar
    loadJobs();
})