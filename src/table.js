function table(){
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

    function addLine(object, lineIndex) {

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
            let txt = document.createTextNode('');
            div.className = 'td';


            if (arraybtn[btns] == 'del') {
                txt = document.createTextNode('X');
                btn.onclick = () => deleteLine(headers, funcionarios, lineIndex);
            }
            else {
                txt = document.createTextNode('-');
                //btn.onclick = () => deleteLine(headers,funcionarios,lineIndex) ;
            }

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

    function populateTable(headers, objects) {

        createHeader(headers);
        for (let object in objects) {
            addLine(objects[object], object);
        }

    }

    function deleteLine(headers, objects, linha) {

        let divTable = document.getElementById("table");
        divTable.innerHTML = "";
        objects.splice(linha, 1);
        populateTable(headers, objects);



    }

    return { createHeader, addLine, populateTable, deleteLine };
}

export default table();