function exe1(){
    let nome = "Carlos";
    console.log(nome);
}

function exe2(){
    let nome_ = "Carlos";
    let sobre_nome = "Almeida";

    console.log(nome_ + " "+ sobre_nome + "\n");

}
function exe3(){
    let nome3 = "Carlos";
    let idade3 = "16";
    let sobrenome3 = "Almeida";
    let email3 = "cmcalmeida24@gmail.com";

    console.log("Nome: " + nome3 + "\nSobrenome: " + sobrenome3 + "\nIdade: " + idade3 + "\nEmial: " + email3);
}
function exe4(){

    let nome4 = "Carlos";
    let idade4 = "16";
    let sobrenome4 = "Almeida";
    let email4 = "cmcalmeida24@gmail.com";

    console.log("Nome: " + nome4 + "(" + nome4.length + ")" + 
    "\nSobrenome: " + sobrenome4 + "(" + sobrenome4.length + ")" +
    "\nIdade: " + idade4 + "(" + idade4.length + ")" + 
    "\nEmail: " + email4 + "(" + email4.length + ")");

}
function exe5(){
    let nome5 = "Carlos";
    let idade5 = "16";
    let sobrenome5 = "Almeida";
    let email5 = "cmcalmeida24@gmail.com";

    console.log("Nome: "  + nome5.toUpperCase() +  
    "\nSobrenome: "   + sobrenome5.toLowerCase()  +
    "\nIdade: " + idade5 +  
    "\nEmail: "  + email5 );


}
function exe6(){
    
    let frase = "Deserunt nulla ut laboris occaecat sint. Enim ullamco eu enim occaecat aute proident enim ex sunt. Laborum duis laboris aute voluptate Lorem do.";

    console.log("Primeira ocorrência da letra “a”:" + frase.indexOf("a") + 
    "\nPrimeira ocorrência da letra “b”:" + frase.indexOf("b"))
}

function exe7(){


    let n1 = 20;
    let n2 = 15;
    let soma = n1 + n2
        subtr = n1 - n2
        multi = n1 * n2
        divis_INT = n1 / n2
        resto_DIViD = n1 % n2
        exp = Math.pow(n1, n2)
        rzqdd = Math.sqrt(n1)
        vlrABS = Math.abs(n1)

    console.log("Soma: " + soma +
    "\nSubtração: " + subtr + 
    "\nMultiplicação: " + multi + 
    "\nDivisão: " + divis_INT + 
    "\nResto da divisão: " + resto_DIViD + 
    "\nExponencia: " + exp + 
    "\nRaiz quadrada: " + rzqdd + 
    "\nValor absoluto: " + vlrABS) 


}
function exe8(){

    console.log("A cada refresh, introduz um numero decimal aleatório entre 0 e 1: " + Math.random())
}
function exe9(){

    console.log("Numero aleatorio entre 0 e 10: " + Math.random() * 10)
}
function exe10(){

    let n1 = 9.2392
        n2 = 2.28762

    console.log("Numero 1: " + Math.floor(n1) + 
    "\nNumero 2: " + Math.ceil(n2))
}
function exe11(){

    let n = (Math.random() * 10) + 30

    if( n > 37.5){
        console.log("Está  com febre!")
    }else
        console.log("\nNão está com febre!")
}

function exe12(){

    let n = (Math.random() * 10) + 30

    if( n < 35){
        console.log("Temperatura muito baixa!z")
    }else
        console.log("\nTemperatura normal!")
}

function exe13(){
    let idade = (Math.random() * 25)  
        genero = "mulher" 

    if (idade < 25){
        if(genero == "mulher")
            console.log("A Jovem!")
        

        if(genero == "homem")
            console.log("O Jovem!")

    }else if ( idade > 25){
        if(genero == "mulher")
            console.log("A Mulher!")
        if(genero == "homem")
            console.log("O Homem!")
    }

}



exe1();
exe2();
exe3();
exe4();
exe5();
exe6();
exe7();
exe8();
exe9();
exe10();
exe11();
exe12();
exe13();


