function start () { //inicio da função start()

$("#inicio") .hide();
}
 //fim da função start

//Principais variáveis do jogo
	
var jogo = {}
	
//Game Loop

jogo.timer = setInterval(loop,30);

function loop() {

    movefundo();

} // Fim da função loop()

//Função que movimenta o fundo do jogo
	
function movefundo() {
	
	esquerda = parseInt($("#fundoGame").css("background-position"));
	$("#fundoGame").css("background-position",esquerda-1);
	
	} // fim da função movefundo()

    