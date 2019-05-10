<?php
include_once('banco_de_dados.php');
?>

<html>
    <head>
        <title>SIG@</title>
        <meta charset="utf8">
        <style>
            #form-erro {
                background-color: #ff7e7e;
                color: #9c0000;
                display: none;
            }
            #form-sucesso {
                background-color: #99ff95;
                color: #069c00;
                display: none;
            }
        </style>
    </head>
    <body>
        <table id='tabela-alunos' border='1' cellspacing='0'>
            <thead>
                <tr>
                    <th>NOME</th>
                    <th>CPF</th>
                    <th>GÊNERO</th>
                    <th>SEMESTRE</th>
                    <th>OPÇÕES</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class='col_nome'>XXXX</td>
                    <td class='col_cpf'>XXXX</td>
                    <td class='col_genero'>XXXX</td>
                    <td class='col_semestre'>XXXXXX</td>
                    <td><a class='editar' href='javascript:void(0)'>Editar</a> / <a class='excluir' href='javascript:void(0)'>Excluir</a></td>
                </tr>
            </tbody>
        </table><br><br>
        <form>
            <fieldset>
                <div id="form-erro"></div>
                <div id="form-sucesso">O usuário foi inserido com sucesso.</div>
                <legend>Novo Usuário</legend>
                <label for="nome">Nome:</label><br>
                <input type="text" id="nome" name="nome"><br>
                
                <label for="cpf">CPF:</label><br>
                <input type="text" id="cpf" name="cpf"><br>

                <div>Gênero:</div>
                <input type="radio" id="feminino" name="genero" value="f" >
                <label for="feminino">Feminino</label><br>

                <input type="radio" id="masculino" name="genero" value="m">
                <label for="masculino">Masculino</label><br>

                <input type="radio" id="outro" name="genero" value="o">
                <label for="outro">Outro</label><br>

                <label for="semestre">Semestre:</label><br>
                <input type="text" id="semestre" name="semestre"><br><br>

                <input id='btnAdd' type="button" value="Adicionar">
            </fieldset>
        </form>
        <script src="js/ajax.js"></script>
    </body>
</html>