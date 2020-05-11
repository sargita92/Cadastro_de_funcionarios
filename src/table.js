function createHeader(headers) {
    let arrayTd = [];

    let divLinha = document.createElement('div');
    divLinha.className = 'th';


    for (let header in headers) {
        let div = document.createElement('div');
        let txt = document.createTextNode(headers[header]);
        div.className = 'td';
        div.appendChild(txt);
        arrayTd.push(div);
    }

    for (let td in arrayTd) {
        divLinha.appendChild(arrayTd[td]);
    }

    let divTable = document.getElementById("table");
    divTable.appendChild(divLinha);
}

export function addToTable(object) {
    let divLinha = document.createElement('div');
    divLinha.className = 'tr';

    let arrayTd = [];
    let arraybtn = ["upd", "del"];

    for (let property in object) {
        let div = document.createElement('div');
        let txt = document.createTextNode(object[property]);
        div.className = 'td';
        div.appendChild(txt);
        arrayTd.push(div);
    }


    for (let btns in arraybtn) {
        let div = document.createElement('div');
        let btn = document.createElement('button');
        let txt = document.createTextNode('X');
        div.className = 'td';
        btn.appendChild(txt);
        div.appendChild(btn);
        arrayTd.push(div);
    }

    for (let td in arrayTd) {
        divLinha.appendChild(arrayTd[td]);
    }

    let divTable = document.getElementById("table");
    divTable.appendChild(divLinha);

}

export function populateTable(headers, objects) {
    createHeader(headers);
    for (let object of objects) {
        addToTable(object);
    }

}





