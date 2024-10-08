export const stars = document.getElementsByClassName("star");
export function clearStars() {
    for (const star of stars) {
        star.className = 'star';
    }
}
