/**
 * Funcao que realiza uma requisicao Get para o servidor da Marvel, 
 * atraves da biblioteca axios e
 * retorna uma lista de quadrinhos da Marvel. 
 * Os quadrinhos são inseridos na 
 * pagina HTML atraver no innerHTML
 * 
 */
function performGetRequest() {
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = '';

    //requisicao get para o servidor da Marvel
    axios.get('http://developer.marvel.com/v1/public/comics')
        .then(function(response) {
            /* se a requisicao for realizada com sucesso, os quadrinhos sao inseridos na pagina
                HTML a atraves da funcao innerHTML
            */
            resultElement.innerHTML = generateSuccessHTMLOutput(response);
        })
        .catch(function(error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
}

function init() {
    var pageBody = document.getElementById("getMarvelResults").addEventListener("onload", performGetRequest, false);
}
onload.init;