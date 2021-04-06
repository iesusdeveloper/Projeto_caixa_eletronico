function calcularSaque(){
    let saque = document.getElementById("inputsaque").value;
    let contador200 = 0;
    let contador100 = 0;
    let contador50 = 0;
    let contador20 = 0;
    let contador10 = 0;
    let contador5 = 0;
    let contador2 = 0;

    while(saque != 0) {
        if(saque >= 200) {
            contador200++;
            saque -= 200;
            continue;
        }

        if(saque >= 100) {
            contador100++;
            saque -= 100;
            continue;
        }

        if(saque >= 50) {
            contador50++;
            saque -= 50;
            continue;
        }

        if(saque >= 20) {
            contador20++;
            saque -= 20;
            continue;
        }

        if(saque >= 10) {
            contador10++;
            saque -= 10;
            continue;
        }

        if(saque >= 5) {
            contador5++;
            saque -= 5;
            continue;
        }

        if(saque >= 2) {
            contador2++;
            saque -= 2;
            break;
        }
    }
    let textoresultado = ""
    if (contador200 > 0){
        textoresultado += `A quantidade de notas 200 é:${contador200}\n`
    }
    if (contador100 > 0){
        textoresultado += `A quantidade de notas 100 é:${contador100}\n`
    }
    if (contador50 > 0){
        textoresultado += `A quantidade de notas 50 é:${contador50}\n`
    }
    if (contador20 > 0){
        textoresultado += `A quantidade de notas 20 é:${contador20}\n`
    }
    if (contador10 > 0){
        textoresultado += `A quantidade de notas 10 é:${contador10}\n`
    }
    if (contador5 > 0){
        textoresultado += `A quantidade de notas 5 é:${contador5}\n`
    }
    if (contador2 > 0){
        textoresultado += `A quantidade de notas 2 é:${contador2}\n`
    }
    document.getElementById("resultado").innerText= textoresultado
}