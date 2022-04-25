const primDiv = document.querySelector('.prim-step');
const segunDiv = document.querySelector('.segun-step');
const finalDiv = document.querySelector('.final-step');


function vamos(atualStep, proximaStep){
    let dNone;
    let dBlock;

    if(atualStep == 1){
        dNone = primDiv;
    }else if(atualStep == 2){
        dNone = segunDiv;
    }else{
        dNone = finalDiv;
    }
    
    dNone.style.display = 'none';

 
    if (proximaStep == 1){
        dBlock = primDiv;
    }else if(proximaStep == 2){
        dBlock = segunDiv;
    }else{
        dBlock = finalDiv;
    }
    
    dBlock.style.display = 'block';
}


function validar(){
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');

    peso.style.border = 'none';
    altura.style.border = 'none';

    
    if (!peso.value || !altura.value){
       
        if(!peso.value && !altura.value){
        window.alert('Não temos o peso ,nem altura.');
           peso.style.border = '1px solid red';
           altura.style.border = '1px solid red';

        }else if(!peso.value){
            window.alert('Não temos o peso');
            peso.style.border = '1px solid red';
            
        }else{
            window.alert('Não temos a altura');
            altura.style.border = '1px solid red';
            
        }
    }else{
        let imc = peso.value / (altura.value * altura.value)
    
        const resultad = document.getElementById('resultado');

        if(imc < 18.5){
            resultad.innerHTML ='Magresa | Obesidade: 0';
            resultad.style.color = 'rgb(241, 212, 24)'
        }
        else if(imc >= 18.5 && imc < 25){
            resultad.innerHTML ='Normal | Obesidade:0';
            resultad.style.color = 'rgb(66, 233, 20)';
        }
        else if(imc >=25 && imc < 30){
            resultad.innerHTML ='Sobrepeso | Obesidade: I';
            resultad.style.color = 'rgb(241, 212, 24)';
        }
        else if(imc >=30 && imc < 40){
            resultad.innerHTML ='Obesidade | Obesidade:II';
            resultad.style.color = 'rgb(228, 53, 53)';
        }
        else{
            resultad.innerHTML ='Obesidade Grave | Obesidade:III';
            resultad.style.color = 'rgb(163, 41, 211)';
        }

        vamos(2,3);
        peso.value=""
        altura.value=""

    }
}

