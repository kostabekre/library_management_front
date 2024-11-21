const registrationForm = document.getElementById('registration-form');

const submitButton = document.getElementById('submit-button');

async function OnSubmitClick() {
    const formData = new FormData(registrationForm);
    const userData = {
        email: formData.get("email"),
        password: formData.get("password"),
    }
    const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }
    });

    if(!response.ok) {
        if(response.statusCode === 400) {
            const errorData = await response.json();
            for (const key in errorData.errors) {
                console.log(key);
            }
        } else {
            console.error("unknown error");
        }
    } else {

        const loginResponse = await fetch('http://localhost:8080/login?useCookies=true', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        if(!loginResponse.ok)
        {
            console.error("unknown error");
            return;
        }
        window.location.replace("/");
    }


}

submitButton.addEventListener('click', OnSubmitClick)