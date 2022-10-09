//const boxOnGrid = document.querySelectorAll('.grid-box');
//console.log(boxOnGrid);
const buttonColors = document.querySelectorAll('.color-choice');
console.log(buttonColors)
const gridRow = document.querySelector('.grid-row');
const orangeButton = document.getElementById('orange');

const sizeOfGrid = 16;

//Grid Creation
const createGrid = (gridSize) => {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j = 0; j < gridSize; j++) {
            const widthAndHeight = 920 / sizeOfGrid;
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            row.appendChild(gridBox);
            // dynamically change grid box
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;
            //gridBox.addEventListener('mouseover', (e) => {
                //e.target.style.backgroundColor ='black';
           // });
        };

        container.appendChild(row);
    };

};

//createGrid(sizeOfGrid);

/*const boxOnGrid = document.querySelectorAll('.grid-box');
console.log(boxOnGrid);
boxOnGrid.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black';
    });
});*/ 

/*const colorCreate = (name, color) => {
    const boxOnGrid = document.querySelectorAll('.grid-box');
    console.log(boxOnGrid);
    boxOnGrid.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgorundColor = 'black';
        })
    })
}*/
const colorCreate = (name, color) => {

}


const colorChoice = () => {
    buttonColors.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('black')) {
                buttonColors[0].classList.add('active');
                colorCreate('black', '#000000');
                const boxOnGrid = document.querySelectorAll('.grid-box');
                console.log(boxOnGrid)
                boxOnGrid.forEach((box) => {
                    box.addEventListener('mouseover', () => {
                        box.style.backgroundColor = 'black';
                    })
                }) 
                
            } else if (button.classList.contains('orange')) {
                buttonColors[1].classList.add('active');
                colorCreate('orange', '#ffa31a');
                const boxOnGrid = document.querySelectorAll('.grid-box');
                console.log(boxOnGrid)
                boxOnGrid.forEach((box) => {
                    box.addEventListener('mouseover', () => {
                        box.style.backgroundColor = 'orange';
                    })
                }) 
            }
        });
    });
};

colorChoice();

createGrid(sizeOfGrid);

/*const boxOnGrid = document.querySelectorAll('.grid-box');
console.log(boxOnGrid);
boxOnGrid.forEach(box => {
    box.addEventListener('mouseover', (colorChoice));
}); */