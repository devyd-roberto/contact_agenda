


let contatos = [];

    function adicionarContato() {
        const nome = document.getElementById("nome").value;
        const telefone = document.getElementById("telefone").value;
        const email = document.getElementById("email").value;

        

        // Verifica repetições nos cadastros

    function verificarExistente(propriedade, valor) {
            return contatos.some(contato => contato[propriedade] === valor);
        }
        
        if (verificarExistente("email", email)) {
            alert("Este e-mail já foi adicionado.");
            return;
        }
        if (verificarExistente("telefone", telefone)) {
            alert("Este telefone já foi adicionado.");
            return;
        }
        if (verificarExistente("nome", nome)) {
            alert("Este nome já foi adicionado.");
            return;
        }

        
        

        // Adicionar o contato à lista
        contatos.push({ nome: nome, telefone: telefone, email: email });

        // Atualizar a tabela de contatos
        const table = document.getElementById("tabelaContatos").getElementsByTagName('tbody')[0];
        const newRow = table.insertRow(table.rows.length);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        cell1.innerHTML = nome;
        cell2.innerHTML = telefone;
        cell3.innerHTML = email;

        // Limpar o formulário após atuala tabela 
        document.getElementById("formContato").reset();
    }

    document.getElementById("formContato").addEventListener("submit", function(event) {
        event.preventDefault();
        adicionarContato();
        
    });

        // Limpa a Tabela de Contatos Cadastrados 

    function limparTabela() {
        contatos = []; // Limpar array de contatos
        var table = document.getElementById("tabelaContatos").getElementsByTagName('tbody')[0];
        table.innerHTML = ''; // Limpar todas as linhas da tabela
    }