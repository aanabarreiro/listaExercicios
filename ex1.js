// // //  ex1
//   let forma = document.getElementById('forma')
//  forma.addEventListener('click',function(){
//      if(forma.style.backgroundColor == 'red'){
//          forma.style.backgroundColor = 'pink'
//      } else {
//          forma.style.backgroundColor = 'red'
//      }
//     
//     
//  })
//  
//  let forma2 = document.getElementById('forma2')
//  forma2.addEventListener('click',function(){
//      if(forma2.style.backgroundColor == 'blue'){
//          forma2.style.backgroundColor = 'brown'
//      } else {
//          forma2.style.backgroundColor = 'blue'
//      }
//     
//  })
//  let forma3 = document.getElementById('forma3')
//  forma3.addEventListener('click',function(){
//      if(forma3.style.backgroundColor == 'green'){
//          forma3.style.backgroundColor = 'yellow'
//      } else {
//          forma3.style.backgroundColor = 'green'
//      }
//     
//  })
//ex2
//  let clicar = document.getElementById('clicar')
//  let contador = document.getElementById('contador')
//  let zerrar = document.getElementById('excluir')
//  
//  let numero = 0
//  
//  clicar.addEventListener('click',function(){
//      numero = numero + 1
//      contador.innerText = numero
//  })
//  zerrar.addEventListener('click',function(){
//     numero = 0
//     contador.innerText = numero
//  }) 
// //ex3
//  let mensagem = document.getElementById('mensagem')
//  let exibir = document.getElementById('exibir')
//  let ocultar = document.getElementById('ocultar')

//  mensagem.style.display = 'none'
//  
//  exibir.addEventListener('click', function(){
//      mensagem.style.display = 'inline'
//  })

//  ocultar.addEventListener('click', function(){
//      mensagem.style.display = 'none'
//  })
// //ex4
//  let botao = document.getElementById("botao")
//  let texto = document.getElementById("texto")
//  
//  botao.addEventListener('click',function(){
//      let textoNovo= prompt("Digite uma frase nova: ")
//     
//      texto.innerText = textoNovo
//  })
// // ex5
//  let texto = document.getElementById('texto')

//  document.addEventListener('keydown', function(event){

//      texto.innerText = `Você digitou: ${event.key}`
//  })
// //ex6
let votar = document.getElementById("votar")
let imagemG = document.getElementById("generico")

document.addEventListener("click", function () {
    let pergunta = Number(prompt("Em qual candidato você deseja votar: \n(12)Renan\n(10)Arnold \n(24)Maromba"))
    switch (pergunta) {
        case 12:
            let confirmar2 = prompt("Você deseja confirmar seu voto no Renan?: (S/N)")
            if (confirmar2 == 'S') {
                alert("Você votou no candidato Renan")
                imagemG.setAttribute('src', '/Imagens/renan.jfif')
            }
            else {
                alert("Reinicie a página e escolha outro candidato")
            }
            break
        case 10:
            let confirmar3 = prompt("Deseja confirmar seu voto no candidato Arnold: (S/N)")
            if (confirmar3 == 'S') {
                alert("Você votou no candidato Arnold")
                imagemG.setAttribute('src', '/Imagens/arnold.jfif')
            }
            else {
                alert("Reinicie a página e escolha outro candidato")
            }
            break
        case 24:
            let confirmar4 = prompt("Deseja confirmar seu voto no candidato Maromba: (S/N)")
            if (confirmar4 == 'S') {
                alert("Você votou no candidato Maromba")
                imagemG.setAttribute('src', '/Imagens/maromba.jfif')
            }
            else {
                alert("Reinicie a página e escolha outro candidato")
            }
            break
        default:
            alert("Candidato não encontrado, digite novamente.")

    }


})