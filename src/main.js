const TableObjArray  = [];

const headers       = ["Name","Cargo", "Salario", "Data Adm",
                        "Tel Contato"];
const tableButtons  = ["Update" , "Delete"]

const funcionario1   = { name: "joao1", cargo: "promotor1" , salario: "100k1", 
                        dataAdm: "01/01/20011" , telContato: "(99)99999-99991"} 

const funcionario2   = { name: "joao2", cargo: "promotor1" , salario: "100k1", 
                        dataAdm: "01/01/20011" , telContato: "(99)99999-99991"} 

const funcionario3   = { name: "joao3", cargo: "promotor1" , salario: "100k1", 
                        dataAdm: "01/01/20011" , telContato: "(99)99999-99991"} 

const funcionario4   = { name: "joao4", cargo: "promotor1" , salario: "100k1", 
                        dataAdm: "01/01/20011" , telContato: "(99)99999-99991"} 

TableObjArray.push(funcionario1);                    
TableObjArray.push(funcionario2);                    
TableObjArray.push(funcionario3);                    
TableObjArray.push(funcionario4);                    

//Table function
function createHeader(headers,tableButtons)
{
    let arrayTd = [];

    let divLinha = document.createElement('div');
    divLinha.className = 'th';

    let newHeader = [...headers, ...tableButtons];
    console.log[newHeader];
    for (let header in newHeader)
    {
        let div = document.createElement('div');
        let txt    = document.createTextNode(newHeader[header]);
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

function AddLine(object,lineIndex)
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
            btn.onclick = () => deleteLine(headers,tableButtons,TableObjArray,lineIndex) ;
        }
        else
        {
            txt      = document.createTextNode('-');
            btn.onclick = () => 
            {
                generateForm(headers,tableButtons,TableObjArray, lineIndex);
                cleanTable();
            }
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

function populateTable(headers,tableButtons,objects)
{

    createHeader(headers,tableButtons);
    for (let object in objects)
    {
        AddLine(objects[object],object);
    }

}

function deleteLine(headers,tableButtons,objects,linha)
{

    cleanTable();
    objects.splice(linha,1);
    populateTable(headers,tableButtons,objects);
    
    

}

function cleanTable()
{
    let divTable = document.getElementById("table");
    divTable.innerHTML = "";
}

//Form functions
function generateForm(headers,tableButtons,TableObjArray, currentLine = null)
{
    cleanForm();

    let arrayTd = [];

    for (let i = 0; i < headers.length ; i++)
    {
        let currentheader = headers[i];

        let divLinha = document.createElement('div');
        divLinha.className = 'tr';

        let divLbl = document.createElement('div');
        divLbl.className = 'td';

        let txt    = document.createTextNode(currentheader);

        divLbl.appendChild(txt);

        let divTxt = document.createElement('div');
        divTxt.className = 'td';

        let input    = document.createElement('input');

        if(currentLine)
        {
            let currentObject = TableObjArray[currentLine];
            currentheader = nameToProperty(currentheader);
            let value = currentObject[currentheader];
            input.value = value;
            
        }

        input.setAttribute("type","text");
        input.setAttribute("class", "input");
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

    btnSave.onclick = () => SaveFromForm(headers,tableButtons,TableObjArray, currentLine);

    btnSave.appendChild(txtSave);
    divSave.appendChild(btnSave);

    let divCancel = document.createElement('div');
    divCancel.className = 'td';

    let btnCancel    = document.createElement('Button');
    let txtCancel    = document.createTextNode("Cancel");

    btnCancel.onclick = () => 
    {
        cleanForm();
        populateTable(headers,tableButtons,TableObjArray);
    }

    btnCancel.appendChild(txtCancel);
    divCancel.appendChild(btnCancel);

    divLinha.appendChild(divSave);
    divLinha.appendChild(divCancel);

    let divForm = document.getElementById("form");
    divForm.appendChild(divLinha);
}

function cleanForm()
{
    let form = document.getElementById("form");
    form.innerHTML = "";
}

function formToObj()
{
    let formObj  = [];
    let form    = document.getElementById("form");
    let lines   = form.getElementsByClassName("tr");


    for(let i = 0; i < lines.length - 1; i++)
    {

        let lblColumn     = lines[i].getElementsByClassName("td")[0];
        let lblValue      = lblColumn.innerHTML;
        lblValue          = nameToProperty(lblValue);  

        
        let inputColumn     = lines[i].getElementsByClassName("td")[1];
        let input           = inputColumn.getElementsByClassName("input")[0];
        let inpValue        = input.value;
        
        formObj[lblValue] = inpValue;

    }

    return formObj;

}

function SaveFromForm(headers,tableButtons,TableObjArray, currentLine = null)
{
    let formObj = formToObj();

    for(property in formObj)
    {
        if(formObj[property].trim() === "")
        {
            alert("Check any empty field!");
            return;
        }
    }

    if(currentLine == null)
    {
        TableObjArray.push(formObj);
    }
    else
    {
        TableObjArray[currentLine] = formObj;
    }
    
    cleanForm();
    cleanTable();
    populateTable(headers,tableButtons,TableObjArray);

}

function addBtnFunc(headers,tableButtons,TableObjArray){
    addBtn = document.getElementById("addBtn");
    table = document.getElementById("table");

    addBtn.onclick = () => 
    {
        generateForm(headers,tableButtons,TableObjArray);
        table.innerHTML = "";
    }
}

function nameToProperty(string){
    string = string.trim().split(" ");
    string[0] = string[0].toLowerCase();
    string = string.join("");

    return string;
}

//Exec functions
addBtnFunc(headers,tableButtons,TableObjArray);
populateTable(headers,tableButtons,TableObjArray);