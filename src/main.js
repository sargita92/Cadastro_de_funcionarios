const funcionarios  = [];
const headers       = ["Name","Cargo", "Salario", "Data Adm",
                        "Tel Contato", "Atualizar", "Excluir"];

const funcionario1   = { nome: "joao1", cargo: "promotor1" , salario: "100k1", 
                        dataAdm: "01/01/20011" , tel: "(99)99999-99991"} 

const funcionario2   = { nome: "joao2", cargo: "promotor1" , salario: "100k1", 
                        dataAdm: "01/01/20011" , tel: "(99)99999-99991"} 

const funcionario3   = { nome: "joao3", cargo: "promotor1" , salario: "100k1", 
                        dataAdm: "01/01/20011" , tel: "(99)99999-99991"} 

const funcionario4   = { nome: "joao4", cargo: "promotor1" , salario: "100k1", 
                        dataAdm: "01/01/20011" , tel: "(99)99999-99991"} 

funcionarios.push(funcionario1);                    
funcionarios.push(funcionario2);                    
funcionarios.push(funcionario3);                    
funcionarios.push(funcionario4);                    

function createHeader(headers)
{
    let arrayTd = [];

    let divLinha = document.createElement('div');
    divLinha.className = 'th';


    for (let header in headers)
    {
        let div = document.createElement('div');
        let txt    = document.createTextNode(headers[header]);
        div.className = 'td';
        div.appendChild(txt);
        arrayTd.push(div);
    }

    for (let td in arrayTd)
    {
        divLinha.appendChild(arrayTd[td]);
    }

    let divTable = document.getElementById("table");
    divTable.appendChild(divLinha);
}

function addToTable(object,lineIndex)
{

    let divLinha = document.createElement('div');
    divLinha.className = 'tr';

    let arrayTd = [];
    let arraybtn = ["upd","del"];

    for (let property in object)
    {
        let div = document.createElement('div');
        let txt    = document.createTextNode(object[property]);
        div.className = 'td';
        div.appendChild(txt);
        arrayTd.push(div);
    }
    

    for(let btns in arraybtn)
    {
        let div      = document.createElement('div');
        let btn     = document.createElement('button');
        let txt      = document.createTextNode('');
        div.className   = 'td';
        

        if(arraybtn[btns] == 'del')
        {
            txt      = document.createTextNode('X');
            btn.onclick = () => deleteLine(headers,funcionarios,lineIndex) ;
        }
        else
        {
            txt      = document.createTextNode('-');
            //btn.onclick = () => deleteLine(headers,funcionarios,lineIndex) ;
        }
        
        btn.appendChild(txt);
        div.appendChild(btn);
        arrayTd.push(div);
    }

    for (let td in arrayTd)
    {
        divLinha.appendChild(arrayTd[td]);
    }

    let divTable = document.getElementById("table");
    divTable.appendChild(divLinha);
    
}

function populateTable(headers,objects)
{

    createHeader(headers);
    for (let object in objects)
    {
        addToTable(objects[object],object);
    }

}

function deleteLine(headers,objects,linha)
{

    let divTable = document.getElementById("table");
    divTable.innerHTML = "";
    objects.splice(linha,1);
    populateTable(headers,objects);
    
    

}

function generateForm(headers)
{
    let arrayTd = [];

    for (let i = 0; i < headers.length-2 ; i++)
    {


        let divLinha = document.createElement('div');
        divLinha.className = 'tr';

        let divLbl = document.createElement('div');
        divLbl.className = 'td';

        let txt    = document.createTextNode(headers[i]);
        divLbl.appendChild(txt);

        let divTxt = document.createElement('div');
        divTxt.className = 'td';

        let input    = document.createElement('input');
        input.setAttribute("type","text");
        divTxt.appendChild(input);

        divLinha.appendChild(divLbl);
        divLinha.appendChild(divTxt);

        let divForm = document.getElementById("form");
        divForm.appendChild(divLinha);


    }


    let divLinha = document.createElement('div');
    divLinha.className = 'tr';

    let divSave = document.createElement('div');
    divSave.className = 'td';

    let btnSave    = document.createElement('Button');
    let txtSave    = document.createTextNode("Save");
    btnSave.appendChild(txtSave);
    divSave.appendChild(btnSave);

    let divCancel = document.createElement('div');
    divCancel.className = 'td';

    let btnCancel    = document.createElement('Button');
    let txtCancel    = document.createTextNode("Cancel");
    btnCancel.appendChild(txtCancel);
    divCancel.appendChild(btnCancel);

    divLinha.appendChild(divSave);
    divLinha.appendChild(divCancel);

    let divForm = document.getElementById("form");
    divForm.appendChild(divLinha);
}

generateForm(headers);
populateTable(headers,funcionarios);