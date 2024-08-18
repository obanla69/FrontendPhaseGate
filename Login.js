const BASE_URL="http://localhost:9006/loginUser"
const form=document.getElementById('.form');

form.addEventListener("submit",async (event) => {
    event.preventDefault();
})
    const emailCollected=document.getElementById('.email').value
    const passwordCollected=document.getElementById('.password').value

    console.log(emailCollected);
    console.log(passwordCollected);