function exe1() {
    let nome = "Carlos";
    console.log(nome);
}

function exe2() {
    let nome_ = "Carlos";
    let sobre_nome = "Almeida";

    console.log(nome_ + " " + sobre_nome + "\n");

}

function exe3() {
    let nome3 = "Carlos";
    let idade3 = "16";
    let sobrenome3 = "Almeida";
    let email3 = "cmcalmeida24@gmail.com";

    console.log("Nome: " + nome3 + "\nSobrenome: " + sobrenome3 + "\nIdade: " + idade3 + "\nEmial: " + email3);
}

function exe4() {

    let nome4 = "Carlos";
    let idade4 = "16";
    let sobrenome4 = "Almeida";
    let email4 = "cmcalmeida24@gmail.com";

    console.log("Nome: " + nome4 + "(" + nome4.length + ")" +
        "\nSobrenome: " + sobrenome4 + "(" + sobrenome4.length + ")" +
        "\nIdade: " + idade4 + "(" + idade4.length + ")" +
        "\nEmail: " + email4 + "(" + email4.length + ")");

}

function exe5() {
    let nome5 = "Carlos";
    let idade5 = "16";
    let sobrenome5 = "Almeida";
    let email5 = "cmcalmeida24@gmail.com";

    console.log("Nome: " + nome5.toUpperCase() +
        "\nSobrenome: " + sobrenome5.toLowerCase() +
        "\nIdade: " + idade5 +
        "\nEmail: " + email5);


}

function exe6() {

    let frase = "Deserunt nulla ut laboris occaecat sint. Enim ullamco eu enim occaecat aute proident enim ex sunt. Laborum duis laboris aute voluptate Lorem do.";

    console.log("Primeira ocorrência da letra “a”:" + frase.indexOf("a") +
        "\nPrimeira ocorrência da letra “b”:" + frase.indexOf("b"))
}

function exe7() {


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

function exe8() {

    console.log("A cada refresh, introduz um numero decimal aleatório entre 0 e 1: " + Math.random())
}

function exe9() {

    console.log("Numero aleatorio entre 0 e 10: " + Math.random() * 10)
}

function exe10() {

    let n1 = 9.2392
    n2 = 2.28762

    console.log("Numero 1: " + Math.floor(n1) +
        "\nNumero 2: " + Math.ceil(n2))
}

function exe11() {

    let n = (Math.random() * 10) + 30

    if (n > 37.5) {
        console.log("Está  com febre!")
    } else
        console.log("\nNão está com febre!")
}

function exe12() {

    let n = (Math.random() * 10) + 30

    if (n < 35) {
        console.log("Temperatura muito baixa!z")
    } else
        console.log("\nTemperatura normal!")
}

function exe13() {
    let idade = (Math.random() * 25)
    genero = "mulher"

    if (idade < 25) {
        if (genero == "mulher")
            console.log("A Jovem!")


        if (genero == "homem")
            console.log("O Jovem!")

    } else if (idade > 25) {
        if (genero == "mulher")
            console.log("A Mulher!")
        if (genero == "homem")
            console.log("O Homem!")
    }

}

function exe14() {

    let n = 2


    if (n == 1) {
        console.log("Numero: 1")
    } else if (n == 2)
        console.log("Numero: 2")
    else if (n == 3)
        console.log("Numero: 3")
    else if (n == 4)
        console.log("Numero: 4")
    else if (n == 5)
        console.log("Numero: 5")
    else
        console.log("Numero maior que 5!(OUTRO VALOR)")
}


function exe15() {

    let n15 = 1


    switch (n15){

        case 1:
            console.log("Numero: 1")
            break
        case 2:
            console.log("Numero: 2")
            break
        case 3:
            console.log("Numero: 3")
            break
        case 4:
            console.log("Numero: 4")
            break
        case 5:
            console.log("Numero: 5")
            break
        default:
            console.log("Numero maior que 5!(OUTRO VALOR)")



    } while (n15 >= 5 && n15 <= 1);


}
function exe16(){

    let num = 1000;
    let array = new Array()


    
    /*for(let i = 0; i <= 999; i++){
        num += 1;
        console.log(num + ", ")
    }*/

    for(let i = 1; i <= num; i++){
        array.push(i)
        
    }
    console.log(array);
}

function exe17(){

    let i = 0
   
    
    while( i  <= 999){
        i++;
        
        console.log(i)
    }

}

function exe18(){


    let num1 = 4
        num2 = 2;

    if(num1 % num2 == 0){
        console.log("São multliplos!")

    }else
        console.log("Não são multliplos!")

}
function exe19(){

    let num19 = 60
    
    
    if(num19 % 2 == 0) 
        console.log("Numero par!")
    else
        console.log("Numero impar!")

}

function exe20(){

    let nums = [123];
    
    
    if(nums.length == 3){
        console.log(nums.split("  "))
    }

}

function exe21(){

    let a = 10
    let   b = 30
    let  c = 100
    let menor
 
    
    
    if(a < b ){
        menor = a
        console.log("Número menor:", menor)
    }

    else if(b < a){
        menor = b
        console.log("Numero menor:", menor)
    }
    else if( c < b){
        menor = c
        console.log("Numero menor:", menor)
    }
    else if (c < a){
        menor = c
        console.log("Numero menor:", menor)
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
exe14();
exe15();
//exe16();
//exe17();
exe18();
exe19();
//exe20();
exe21();