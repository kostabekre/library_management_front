async function sendLoginForm() {
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;
    const loginData = {
        email: userEmail,
        password: userPassword,
    };
    try {
        const response = await fetch("http://localhost:8080/login?useSessionCookies=true", {
            method: "Post",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(loginData)
        });
        if(!response.ok) {
            console.log(`the user doesn't exists, or you provide wrong password!`);
            return;
        }

        window.location.replace("/");

    } catch (e) {
        console.error(e);
    }
}

const button = document.getElementById("submit-button");

button.addEventListener("click", sendLoginForm)