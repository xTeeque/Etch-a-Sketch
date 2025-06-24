const container = document.querySelector(".container");
const grid = document.createElement("div");
const colorBtn = document.querySelector("#changeColor");
grid.classList.add("grid");
container.appendChild(grid);
let size = 16;
let currentColor = 'black';

function createGrid(gridSize){
    for(let i = 0; i < gridSize; i++){
        for(let j = 0; j < gridSize; j++){
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.outline = "1px solid black";
            square.style.width = 480 / size + "px";
            square.style.height = 480 / size + "px";
            grid.appendChild(square);
        };
    };
};

function hover(){
    const square = document.querySelectorAll(".square");
    square.forEach(item => {
        item.dataset.opacity = item.dataset.opacity || "0";

        item.addEventListener("mouseover", () => {
            let currentOpacity = parseFloat(item.dataset.opacity);
            if (currentOpacity < 1) {
                currentOpacity += 0.1;
                item.dataset.opacity = currentOpacity;
                if (currentColor === 'black')
                    item.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`;
                else if (currentColor === 'rainbow'){
                    const r = Math.floor(Math.random() * 256);
                    const g = Math.floor(Math.random() * 256);
                    const b = Math.floor(Math.random() * 256);

                    item.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${currentOpacity})`;
                }
            }
        });
    });
};

function changeGrid(){
    const sizeBtn = document.querySelector("#changeSize");
    sizeBtn.addEventListener("click", () => {
        size = prompt("Choose grid size:");
        if(size > 0 && size < 100){
            grid.innerHTML = "";
            createGrid(size);
            hover();
        }
    });
};

function changeColor(){
	colorBtn.addEventListener("click", () => {
		if (currentColor === "black"){
			currentColor = "rainbow";
			colorBtn.classList.add("clicked");
		}
		else {
			currentColor = "black";
			colorBtn.classList.remove("clicked");
		}
	});
};

createGrid(size);
hover();
changeGrid();
changeColor();