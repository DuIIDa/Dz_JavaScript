
'use strict'; 

function DomElement(selector, height, width, bg, fontSize, position) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.position = position;
}

/*DomElement.prototype.ride = function() {
    if ( this.selector.slice(0, 1) === '.' ) {
        let newElement = document.createElement('div');
        newElement.classList.add(`${this.selector.slice(1, this.selector.length)}`);
        newElement.textContent = 'Изучаю Js';
        newElement.style.cssText = `
        height: ${this.height}px;
        width: ${this.width}px;
        background-color: ${this.bg};
        font-size: ${this.fontSize}px;`;
        document.body.appendChild(newElement);
    } else if ( this.selector.slice(0, 1) === '#' ) {
        let newElement = document.createElement('p');
        newElement.setAttribute('id', `${this.selector.slice(1, this.selector.length)}`);
        newElement.textContent = 'Делаю лабы';
        newElement.style.cssText = `
        height: ${this.height}px;
        width: ${this.width}px;
        background-color: ${this.bg};
        font-size: ${this.fontSize}px;`;
        document.body.appendChild(newElement);
    }
};*/

DomElement.prototype.rideSquare = function() {

    let up = 0;
    let down = 0;
    let left = 0;
    let right = 0;

    let square = document.createElement('div');
    square.style.cssText = `
    height: ${this.height}px;
    width: ${this.width}px;
    background-color: ${this.bg};
    position: ${this.position};`;
    document.body.appendChild(square);

    document.addEventListener('keydown', (event) => {
        let key = event.key;
        console.log('key: ', key);

        if(key === 'ArrowUp'){
            up -= 10;
            square.style.cssText = `
            height: ${this.height}px;
            width: ${this.width}px;
            background-color: ${this.bg};
            position: ${this.position};
            top: ${up}px;
            bottom: ${down}px;
            left: ${left}px;
            right: ${right}px;`;
            document.body.appendChild(square);
        }else if(key === 'ArrowDown'){
            up += 10;
            square.style.cssText = `
            height: ${this.height}px;
            width: ${this.width}px;
            background-color: ${this.bg};
            position: ${this.position};
            top: ${up}px;
            bottom: ${down}px;
            left: ${left}px;
            right: ${right}px;`;
            document.body.appendChild(square);
        }else if(key === 'ArrowLeft'){
            left-= 10;
            square.style.cssText = `
            height: ${this.height}px;
            width: ${this.width}px;
            background-color: ${this.bg};
            position: ${this.position};
            top: ${up}px;
            bottom: ${down}px;
            left: ${left}px;
            right: ${right}px;`;
            document.body.appendChild(square);
        }else if(key === 'ArrowRight'){
            left+= 10;
            square.style.cssText = `
            height: ${this.height}px;
            width: ${this.width}px;
            background-color: ${this.bg};
            position: ${this.position};
            top: ${up}px;
            bottom: ${down}px;
            left: ${left}px;
            right: ${right}px;`;
            document.body.appendChild(square);
        }
    
    });
};

let newElement = new DomElement('#block', 50, 100, 'red', 20);
let square = new DomElement('.block', 100, 100, 'red', 0, 'absolute');


square.rideSquare();
