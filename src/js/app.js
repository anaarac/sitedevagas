document.addEventListener('DOMContentLoaded', () =>{
    const form = document.getElementById('job-form');
    const jobListContainer = document.getElementById('job-list');

    //Função para carrgar as vagas do localStorage
    function loadJobs (){
        console.log("Executando loadJobs...");
        const jobs = JSON.parse(localStorage.getItem('jobVacancies')) || [];
    }
})