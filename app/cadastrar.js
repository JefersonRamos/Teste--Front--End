import { URL } from '../config/auth.js'

//Botões e CHECK BOX
$("#add").click(function (e) { 
    e.preventDefault();
    cadastro();
});

$("#ativo").click(function (e) {
    $("#ativo").attr("Value", "true");
    $("#inativo").attr("Value", "false");
  });

$("#inativo").click(function (e) {
  $("#inativo").attr("Value", "true");
  $("#ativo").attr("Value", "false");
});

$("#btnVoltar").click(function (e) { 
  e.preventDefault();
  window.location.href = "index.html";
});

//Fnção para realizar cadastro e suas verificaçoes de input

function cadastro(){

    //Pegandos os valores de Input Text e Check Box
    var produto = $("#produto").val();
    var quant = $("#quant").val();
    var price = $("#price").val();
    var client = $("#client").val();
    var ativo = $("#ativo").val();
    var inativo = $("#inativo").val();
    
    //Verificações de input 
    if(produto == "" || quant == "" || price == "" || client == "" || ativo == "" || inativo == ""){
        alert("Algo não foi preenchido")
    }else{
        if(ativo == "true"){

            //Data
            const data = {
                'produto': produto,
                'quant': quant,
                'price': price,
                'client': client,
                'bool': true,
            }

            //Request pelo axios
            axios({
                method: "post",
                url: URL,
                data,
          
              })
                .then((resp) => {
                  alert("Cadastrado com sucesso!");
                  window.location.href = "index.html";
                })
                .catch((err) => {
                  alert("Erro interno ao cadastrar!");
                });

        }else if(inativo == "true"){

            //Data
            const data = {
                'produto': produto,
                'quant': quant,
                'price': price,
                'client': client,
                'bool': false,
            }

            //Request pelo axios
            axios({
                method: "post",
                url: URL,
                data,
          
              })
                .then((resp) => {
                  alert("Cadastrado com sucesso!");
                  window.location.href = "index.html";
                })
                .catch((err) => {
                  alert("Erro interno ao cadastrar!");
                });
        }
    }

}



