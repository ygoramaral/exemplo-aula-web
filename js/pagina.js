function pegarCPFs() {
    let tdsCPFs = document.querySelectorAll('.col_cpf');
    let cpfsArray = [];

    for (let i = 0; i < tdsCPFs.length; i++) {
        cpfsArray.push(tdsCPFs[i].textContent.trim());
    }

    return cpfsArray;
}


let lExcluir = document.querySelectorAll('.excluir');

for (let i = 0; i < lExcluir.length; i++) {
    lExcluir[i].addEventListener('click', function () {
        this.parentNode.parentNode.remove(); 
    });
}

let lEditar = document.querySelectorAll('.editar');
for (let i = 0; i < lEditar.length; i++) {
    lEditar[i].addEventListener('click', function () {
        let linhaTr = this.parentNode.parentNode;
        let colunaTd = linhaTr.querySelector('.col_nome');
        
        if (colunaTd.querySelectorAll('input').length > 0) {
            // terminando de editar
            let nome = colunaTd.querySelector('input').value;
            colunaTd.innerHTML = nome;
        } else {
            // iniciando a edição
            let nome = colunaTd.textContent;
            colunaTd.innerHTML = "<input type='text' value='"+ nome +"'>";
        }
    });
}

let btnAdd = document.querySelector('#btnAdd');

btnAdd.addEventListener('click', function () {
    let cpfsArray = pegarCPFs();

    let cpf = document.querySelector('#cpf').value.trim();

    let erro = document.querySelector("#form-erro");
    let sucesso = document.querySelector("#form-sucesso");
    sucesso.style = 'display: none';
    
    for (let i = 0; i < cpfsArray.length; i++) {
        if (cpf == cpfsArray[i]) {
            //window.alert('Não foi inserido, o CPF já está cadastrado.');
            erro.textContent = 'Não foi inserido, o CPF já está cadastrado.';
            erro.style = 'display: initial';
            return;
        }
    }


    let nome = document.querySelector('#nome').value.trim();

    if(nome.length <= 3) {
        erro.textContent = 'Não foi inserido, o nome deve ter pelo menos 3 caracteres.';
        erro.style = 'display: initial';
        return;
    }

    let radiosGenero = document.querySelectorAll('input[name=genero]');
    let genero = null;

    for (let i = 0; i < radiosGenero.length; i++) {
        if(radiosGenero[i].checked) {
            genero = radiosGenero[i].value;
            break;
        }
    }

    let _genero = null;

    if(genero == 'f') {
        _genero = 'Feminino';
    } else if(genero == 'm') {
        _genero = 'Masculino';
    } else {
        _genero = 'Outro';
    }

    let semestre = document.querySelector('#semestre').value.trim();
    
    let tbody = document.querySelector('#tabela-alunos > tbody');
    //let ultimaLinha = document.querySelector('#tabela-alunos > tbody > tr:last-child');
    //ultimaLinha.insertAdjacentHTML('afterend', "<tr><td>Wanderson Pereira</td><td>198.444.654-98</td><td>Masculino</td><td>2016.2</td><td>Editar / <a class='excluir' href='javascript:void(0)'>Excluir</a></td></tr>");

    let txtHtml = "<tr><td class='col_nome'>"+nome+"</td><td class='col_cpf'>"+cpf+"</td><td class='col_genero'>"+_genero+"</td><td class='col_semestre'>"+semestre+"</td><td><a class='editar' href='javascript:void(0)'>Editar</a> / <a class='excluir' href='javascript:void(0)'>Excluir</a></td></tr>";
    tbody.insertAdjacentHTML('beforeend', txtHtml);
    let ultimaLinha = tbody.querySelector('tr:last-child');
    let ultimoExcluir = ultimaLinha.querySelector('.excluir');
    
    ultimoExcluir.addEventListener('click', function () {
        this.parentNode.parentNode.remove(); 
    }); 

    document.querySelector('#nome').value = "";
    document.querySelector('#cpf').value = "";

    for (let i = 0; i < radiosGenero.length; i++) {
        radiosGenero[i].checked = false;
    }

    document.querySelector('#semestre').value = "";

    erro.style = 'display: none';
    sucesso.style = 'display: initial'
});


