function sendData(x){
    window.location.href = `select.html?id=${x}`;
}

function deleteKey(x, url) {
    axios({
        method: "DELETE",
        url: url+"/"+x,
        data:'data',
  
      })
        .then((resp) => {
          alert("Cadastrado deletado com sucesso!");
          window.location.href = "index.html";
        })
        .catch((err) => {
          alert("Erro interno ao deletar cadastro!");
        });
}