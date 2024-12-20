const form = document.querySelector("#contact-form")
const errorMessage = document.querySelector("#error-text")
const errorCon = document.querySelector("#other-errors")

function submitForm(event) {
    event.preventDefault()
    const url = "../includes/contact-form.php"
    const thisform = this

    const formData = new URLSearchParams(new FormData(form)).toString();
    // const formData =
    // "name=" + thisform.elements.name.value +
    // "&email=" + thisform.elements.email.value +
    // "&subject=" + thisform.elements.subject.value +
    // "&message=" + thisform.elements.message.value;

    errorCon.innerHTML = ""

    fetch (url, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formData
    })

    .then(response => response.json())
    .then(responseText => {
        if (responseText.errors) {
            const obj = responseText.errors
            const value = Object.values(obj);
            
            errorMessage.textContent = "Sorry, something went wrong!"

            value.forEach(valueInfo => {
                const p = document.createElement("p")
                p.textContent = valueInfo
                errorCon.appendChild(p)
            })

        } else {
            form.reset();
            
            errorMessage.textContent = "Thank you for your message! We'll be in contact as soon as possible!"
        }
    })
    .catch(error => {
        errorMessage.textContent = `Sorry, something went wrong! ${error}`
    })
}

form.addEventListener("submit", submitForm)