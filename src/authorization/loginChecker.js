export function loginChecker() {
    const isLoggedIn = document.getElementById("is-logged-in");
    if(isLoggedIn === undefined || isLoggedIn === null) {
        return false;
    }

    return isLoggedIn.value === true;
}