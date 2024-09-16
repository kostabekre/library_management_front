async function sendLoginForm() {
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;
    const loginData = {
        email: userEmail,
        password: userPassword,
    };
    try {
        const response = await fetch("http://localhost:8080/login?userCookies=true", {
            method: "Post",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });
        if(!response.ok) {
            console.log(`the user doesn't exists, or you provide wrong password!`);
            return;
        }

        console.log(await response.json());

    } catch (e) {
        console.error(e);
    }
}

const button = document.getElementById("submit-button");

button.addEventListener("click", sendLoginForm)