
function consultarJSON() {
    var xhrConsultar = new XMLHttpRequest();
    xhrConsultar.addEventListener("load", function() {
        //LEMBRAR QUE AJAX É ASSÍNCRONO!
        let alunos = JSON.parse(this.responseText.trim());
        console.log(alunos);

        let tbody = document.querySelector('#tabela-alunos > tbody');
        tbody.innerHTML = "";
        
        let txtHtml = "";

        for (let i = 0; i < alunos.length; i++) {
            let genero;
            
            if(alunos[i]['genero'] == 'f') {
                genero = 'Feminino';
            } else if(alunos[i]['genero'] == 'm') {
                genero = 'Masculino';
            } else {
                genero = 'Outro';
            }

            txtHtml += "<tr>";
            txtHtml += "<td class='col_nome'>" + alunos[i]['nome'] + "</td>";
            txtHtml += "<td class='col_cpf'>" + alunos[i]['cpf'] + "</td>";
            txtHtml += "<td class='col_genero'>" + genero + "</td>";
            txtHtml += "<td class='col_semestre'>" + alunos[i]['semestre'] + "</td>";
            txtHtml += "<td><a class='editar' href='javascript:void(0)'>Editar</a> / <a class='excluir' href='javascript:void(0)'>Excluir</a></td>";
            txtHtml += "</tr>";
        }

        tbody.insertAdjacentHTML('beforeend', txtHtml);
    });
    xhrConsultar.open("GET", "http://localhost/formulario/json.php");
    xhrConsultar.send();
}

consultarJSON();

let btnAdd = document.querySelector('#btnAdd');

btnAdd.addEventListener('click', function () {
    let nome = document.querySelector('#nome').value.trim();
    let cpf = document.querySelector('#cpf').value.trim();
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

    //realizando o AJAX (para salvar)
    var xhrAdicionar = new XMLHttpRequest();
    xhrAdicionar.addEventListener("load", function() {
        console.log(this.responseText);
        if (this.responseText.trim() == 'sucesso') {
            window.alert('O usuário foi salvo com sucesso');
            consultarJSON();
            
            // limpando o formulário
            document.querySelector('#nome').value = "";
            document.querySelector('#cpf').value = "";

            for (let i = 0; i < radiosGenero.length; i++) {
                radiosGenero[i].checked = false;
            }

            document.querySelector('#semestre').value = "";
        } else {
            window.alert('O usuário não foi salvo!');
        }
    });
    xhrAdicionar.open("GET", "http://localhost/formulario/salvar.php?nome="+nome+"&cpf="+cpf+"&genero="+genero+"&semestre="+semestre);
    xhrAdicionar.send();
});