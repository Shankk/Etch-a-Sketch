let size = 32;
let mouseToggle = false;
const text = document.querySelector('.text');
const applyBtn = document.querySelector(".apply");
let slider = document.getElementById("range");
let output = document.getElementById("value");
output.innerHTML = slider.value;


function growGlow() {
    slider.addEventListener('mouseover', () =>{
        text.classList.add('grow')
    });
    slider.addEventListener('mouseout', () =>{
        text.classList.remove('grow');
    });
}

growGlow();

function deleteGrid(){
    let childNode = document.querySelector("grid");
    if(childNode)
    {
        childNode.parentNode.removeChild(childNode);
        console.log("Succesfully Deleted Grid!");
    }
    else
    {
        console.log("Error! No Grid Can Be Found");
    }
}

function generateGrid(size)
{
    let grid = document.createElement('grid');
    grid.className = 'grid';

    for(let i = 0; i < size; i++) // Columns
    {
        let column = document.createElement('div');
        column.className = 'column';
        for(let k = 0; k < size; k++) // Rows
        {
            let row = document.createElement('div');
            row.className = 'row';
            row.addEventListener('mouseover', () =>{
                if(mouseToggle)
                {
                    row.setAttribute("style", "background-color:black;")
                }
                
            })
    
            
            //row.textContent = i + '-' +k;
            column.appendChild(row);
        }
        grid.appendChild(column);
    }
    document.getElementById("sketch").appendChild(grid);
}

window.addEventListener('mousedown', () =>{
    mouseToggle = true;
})

window.addEventListener('mouseup', () =>{

    mouseToggle =false;
    
})
generateGrid(size);

slider.oninput = function (){
    output.innerHTML = this.value;
    size = this.value;
    
}

applyBtn.addEventListener('click', () => {
    deleteGrid();
    generateGrid(size);
});