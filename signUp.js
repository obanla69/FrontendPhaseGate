const BASE_URL = 'http://localhost:9009/api/map/sign-up';
const form = document.getElementById('formName');

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const nameCollected = document.querySelector('.name').value
    const lastName = document.querySelector('.lastName').value
    const email = document.querySelector('.email').value
    const password = document.querySelector('.password').value
    // console.log(nameCollected)
    // console.log(lastName)
    // console.log(email)
    // console.log(password)

    const data = await fetch(BASE_URL, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: nameCollected, email: email, password: password})
    })
    console.log(data);
    if(data.ok){
        alert("Successfully Register");
    }else {
        alert("Error");
    }
})