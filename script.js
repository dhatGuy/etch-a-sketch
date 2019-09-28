const container = document.querySelector('.container');
const containerStyle = getComputedStyle(container);
const containerHeight = Number(containerStyle.height.replace('px', ""));
const containerWidth = Number(containerStyle.width.replace('px', ""));
const button = document.querySelectorAll('button')

//function to create grid
const createDiv = (num) => {
    num = Number(num)
    for (i = 0; i < num; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (j = 0; j < num; j++) {
            const box = document.createElement('div');
            box.style.width = (containerWidth / num) + 'px';
            box.style.height = (containerHeight / num) + 'px';
            box.className = 'item';
            row.appendChild(box);
        }
    }
}

//function for random color
const randomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r} ${g} ${b})`;
}

//function to draw colors
const draw = () => {
    const items = container.children;
    for (i = 0; items.length > i; i++) {
        items[i].childNodes.forEach(item => {
            item.addEventListener('mouseover', e => {
                e.target.style.backgroundColor = 'black';
            })
        })
    }
};

//function to reset grid
const reset = () => {
    container.innerHTML = " ";
    createDiv(prompt('', 36))
    draw()

}


window.addEventListener('DOMContentLoaded', ()=>{
    if(screen.width < 1200){
        alert('This page is best viewed on desktop browsers!');
    }
    createDiv(16)
    draw()
})

//button to change grid size 
button[0].addEventListener('click', reset);

//button to change background-color to black
button[1].addEventListener('click', ()=>{
    const items = container.children;
    for (i = 0; items.length > i; i++) {
        items[i].childNodes.forEach(item => {
            item.addEventListener('mouseover', e => {
                e.target.style.backgroundColor = `black`
            })
        })
    }
})

//button to change background-color to random
button[2].addEventListener('click', ()=>{
    const items = container.children;
    for (i = 0; items.length > i; i++) {
        items[i].childNodes.forEach(item => {
            item.addEventListener('mouseover', e => {
                e.target.style.backgroundColor = randomColor();
            })
        })
    }
})

//button to clear all background-color
button[3].addEventListener('click', ()=>{
    const items = container.children;
    for (i = 0; items.length > i; i++) {
        items[i].childNodes.forEach(item => {
            item.style.backgroundColor = '';
        })
    }
})