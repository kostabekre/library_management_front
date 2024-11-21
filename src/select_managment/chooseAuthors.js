const chooseBtn = document.getElementById('select-managment-choose-btn');
const deleteBtn = document.getElementById('select-managment-delete-btn');
const discardBtn = document.getElementById('select-managment-discard-btn');

const chosenAuthors = [];

chooseBtn.addEventListener('click', () => {
    const allAuthors = document.getElementsByClassName("selection-wrapper");    
    for (const author of allAuthors) {
        const links = author.querySelectorAll('a');
        for (const link of links) {
            link.classList.add('non-clickable-link');
        }

        const labels = author.querySelectorAll('.select-label-for-checkbox');
        
        for (const label of labels) {
            label.style.pointerEvents = 'initial';
            label.classList.add('selection');
        }
    }

    const selectTools = document.getElementsByClassName("select-managment-tools");    
    for (const selectTool of selectTools) {
        selectTool.style.display = 'inline-block';
    }
});

discardBtn.addEventListener('click', () => {
    const allAuthors = document.getElementsByClassName("selection-wrapper");    
    for (const author of allAuthors) {
        author.classList.remove('selection');
        const links = author.querySelectorAll('a');
        for (const link of links) {
            link.classList.remove('non-clickable-link');
        }

        const labels = author.querySelectorAll('.select-label-for-checkbox');

        for (const label of labels) {
            label.style.pointerEvents = 'none';
            label.classList.remove('selection');
        }
    }

    const selectTools = document.getElementsByClassName("select-managment-tools");    
    for (const selectTool of selectTools) {
        selectTool.style.display = 'none';
    }
});
