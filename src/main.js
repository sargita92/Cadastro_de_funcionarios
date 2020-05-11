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
    let lineIndex = 0;
    createHeader(headers);
    for (let object of objects)
    {
        addToTable(object,lineIndex);
        lineIndex++;
    }

}

function deleteLine(headers,objects,linha)
{

    let divTable = document.getElementById("table");
    divTable.innerHTML = "";
    objects.splice(linha,1);
    populateTable(headers,objects);
    
    

}

populateTable(headers,funcionarios);