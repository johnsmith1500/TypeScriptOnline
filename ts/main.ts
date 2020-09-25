namespace empresa{

    let c = new Cliente("Pedro de Lara",12345);
    //c.nome = "Pedro";
    c.idade = 30;
    c.credito = 2000;
    //c.codCliente = 123;

    document.getElementById("nome").textContent = c.nome;
    document.getElementById("idade").textContent = c.idade.toString();
    document.getElementById("anoNasc").textContent = c.anoNasc(2020).toString();
    document.getElementById("codCliente").textContent = c.codCliente.toString();
    document.getElementById("credito").textContent = c.credito.toString();
    document.getElementById("compra").textContent = c.comprar(3000,1000);

    let c2 = new ClienteVip("Mariana Oliveira",73468);
    c2.idade = 54;
    c2.credito = 6000;
    c2.bonus = 1000;
    c2.inserirCidade = "Santos-SP";
    c2.inserirLogradouro = "Rua velha, 888";

    document.getElementById("nomeVip").textContent = c2.nome;
    document.getElementById("idadeVip").textContent = c2.idade.toString();
    document.getElementById("anoNascVip").textContent = c2.anoNasc(2020).toString();
    document.getElementById("codClienteVip").textContent = c2.codCliente.toString();
    document.getElementById("creditoVip").textContent = c2.credito.toString();
    document.getElementById("compraVip").textContent = c2.comprar(9000,1000);    
    document.getElementById("enderecoVip").textContent = c2.mostraEndereco();    

}