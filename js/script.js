// output
const elementiEmailList = document.getElementById("email-list");
const btn = document.getElementById("btn-email");

const numEmail = 10;

btn.addEventListener("click", () => {
    elementiEmailList.innerHTML = "";
    for (let i = 0; i < numEmail; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(element => {
                const email = element.data.response;
                console.log(email);
                elementiEmailList.innerHTML += `<li>${email}</li>`;
            })
            .catch(error => {
                console.error(error)
            })
    }
}
)