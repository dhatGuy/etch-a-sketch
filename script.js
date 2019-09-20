const item = document.querySelector('body');
const container = document.querySelector('.container');
const containerStyle = getComputedStyle(container);
const containerHeight = Number(containerStyle.height.replace('px', ""));
const containerWidth = Number(containerStyle.width.replace('px', ""))
console.clear()

const createDiv = (num) =>{
    for(i = 0; i < num; i++){
        const row = document.createElement('div');
        container.appendChild(row);
        for(j = 0; j < num; j++){
            const box = document.createElement('div');
            box.innerHTML = j;
            box.style.width = (containerWidth/num) + 'px';
            box.style.height = (containerHeight/num)  + 'px';
            box.className = 'item';
            row.appendChild(box);
        }
    }
}

createDiv(20)