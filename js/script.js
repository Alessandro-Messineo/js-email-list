// output
const elementiEmailList = document.getElementById("email-list");

const numEmail = 10;

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