/**
 *
 * @param id {string}
 * @param errors {Array}
 */
export default function showErrors(id ,errors)
{
    const errorsDiv = document.getElementById(id);
    errorsDiv.innerHTML = "";
    const ulElement = document.createElement('ul');
    errorsDiv.appendChild(ulElement);
    errors.forEach(error => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(error));
        ulElement.appendChild(li)
    })
}
