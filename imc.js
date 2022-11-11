        function imc(){      

    
        let inputAltura = Number(document.getElementById("altura").value)
        let inputPeso = Number(document.getElementById("peso").value)
        let img = document.getElementById('img')
    
    

        
        if(inputAltura == 0  || inputPeso == 0){
        
        alert("Dados Incompletos!")

        }else{
           
        let imc = (inputPeso /(inputAltura * inputAltura)).toFixed(2)
        if(imc < 18){

            res.innerHTML =   `Abaixo do peso! IMC: ${imc}`
            img.src = 'img/magro.png'
    
        }else if(imc >= 18 && imc <= 25){

            res.innerHTML = `Peso Ideal! IMC: ${imc}`
            img.src = 'marge.png'

        }else if(imc > 25){

            res.innerHTML = `Acima do peso! IMC: ${imc}`
            img.src =  'gordo.png'
        }
        }
       // res.appendChild(img)//
       let button = document.getElementById('button')
       button.addEventListener('click', imc)
    
        }
    
        