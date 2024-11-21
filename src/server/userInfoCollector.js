export function userInfoCollector(req) {
    let isLogged = false;
    if(req.headers.cookie !== undefined) {
        isLogged = req.headers.cookie.includes('.AspNetCore.Identity.Application');
    }

    return {
        IsLoggedIn: isLogged
    };
}