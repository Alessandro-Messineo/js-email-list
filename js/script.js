// output
const elementiEmailList = document.getElementById("email-list");
// bottone 
const btn = document.getElementById("btn-email");
// costante per decidere quante volte iterare il for
const numEmail = 10;

// azione per quando viene cliccato il bottone
btn.addEventListener("click", () => {
    // elemento della lista che si svuota
    elementiEmailList.innerHTML = "";
    // ciclo per richiedere le email
    for (let i = 0; i < numEmail; i++) {
        // richiesta ajax
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(element => {
                const email = element.data.response;
                // inserimento degli elementi nella pagina
                elementiEmailList.innerHTML += `<li class="list-group-item">${email}</li>`;
            })
            .catch(error => {
                console.error(error)
            })
    }
}
)