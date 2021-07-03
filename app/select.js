import {URL} from '../config/auth.js'

function keyString() {  
    const loc = location.search.substring(4, location.search.length);   
    return loc;  
}

$.get(URL+"/"+keyString(), "data",
    function (data, textStatus, jqXHR) {
        $("#produto").val(data['produto'])
        $("#quant").val(data['quant'])
        $("#price").val(data['price'])
        $("#client").val(data['client'])

        if(data['bool'] == true){
            $("#ativo").val(data['bool'])
            $("#ativo").attr("checked", true)
            $("#inativo").attr("checked", false)
        }else if(data['bool'] == false){
            $("#inativo").val(data['bool'])
            $("#inativo").attr("checked", true)
            $("#ativo").attr("checked", false)
        }
        
    },
);

$("#ativo").click(function (e) {
    $("#ativo").attr("Value", "true");
    $("#inativo").attr("Value", "false");
  });

$("#inativo").click(function (e) {
  $("#inativo").attr("Value", "true");
  $("#ativo").attr("Value", "false");
});

$("#add").click(function(e) {
    e.preventDefault();
    update();
})

function update(){

    var produto = $("#produto").val();
    var quant = $("#quant").val();
    var price = $("#price").val();
    var client = $("#client").val();
    var ativo = $("#ativo").val();
    var inativo = $("#inativo").val();

    if(produto == "" || quant == "" || price == "" || client == "" || ativo == "" || inativo == ""){
        alert("Algo não foi preenchido")
    }else{
        if(ativo == "true" || inativo == "false"){

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
                method: "PUT",
                url: URL+"/"+keyString(),
                data,
          
              })
                .then((resp) => {
                  alert("Cadastro atualizado com sucesso!");
                  window.location.href = "index.html";
                })
                .catch((err) => {
                  alert("Erro interno ao atualizar cadastro!");
                });

        }else if(inativo == "true" || ativo == "false"){

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
                method: "PUT",
                url: URL+"/"+keyString(),
                data,
              })
                .then((resp) => {
                  alert("Cadastro atualizado com sucesso!");
                  window.location.href = "index.html";
                })
                .catch((err) => {
                  alert("Erro interno ao atualizar cadastro!");
                });
        }
    }
}


