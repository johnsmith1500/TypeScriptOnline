namespace empresa{

    let c = new Cliente();
    c.nome = "Pedro";
    c.idade = 30;
    c.credito = 2000;
    c.codCliente = 123;

    document.getElementById("nome").textContent = c.nome;
    document.getElementById("idade").textContent = c.idade.toString();
    document.getElementById("anoNasc").textContent = c.anoNasc(2020).toString();
    document.getElementById("codCliente").textContent = c.codCliente.toString();
    document.getElementById("credito").textContent = c.credito.toString();
    document.getElementById("compra").textContent = c.comprar(3000,1000);

    

}