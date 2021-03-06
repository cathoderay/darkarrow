t1="Bem-vindo à Ilha de Log!\n" +
	"Esta ilha sofre de escassez de recursos. Falta de comida e água potável têm sido as principais causas de um caos generalizado." +
	" Casas são saqueadas, idosos e crianças são assassinados e portas e janelas são reforçadas com pedaços de madeiras em nome da segurança." +
	"\n\nSeu nome é Gary e você tem um casal de filhos pequenos: Kin e Jany." +
	" Seu objetivo é protegê-los, enquanto você reúne os materiais necessários para construir um barco e tirá-los da ilha." +
	"\n\nVocê está em casa dormindo no momento..."+
	"\nDica: Acorde o Gary!"
	;

MAX_X = 6;
MAX_Y = 8; 

function copy(text) {
	historia = $("#historia").val();
	$("#historia").val(historia + "\n" + text);
}

function andar(x, y, sentido){
	// Testar limites do mapa
	// 0 - Norte, 1 - Leste, 2 - Sul, 3 - Oeste
	if (sentido == 0) {
		return [x, y + 1];
	} else if (sentido == 1) {
		return [x + 1, y];
	} else if (sentido == 2){
		return [x, y - 1];
	} else {
		return [x - 1, y];
	};
}


$(document).ready(function() {

    $( "#dialog-modal" ).dialog({height: 250, modal: true, buttons: {'ok': function() {$(this).dialog("close");}}});

 	default_chat_value = "Digite sua ação aqui!";
 	$("#chat").val(default_chat_value);

 	copy(t1);

	$("#chat").focus(function() {
 		//muda cor do texto do chat
 		$("#chat").removeClass("textdisabled");
 		$("#chat").addClass("textenabled");

		//apaga o conteúdo do chat
 		$("#chat").val("");
	});

	$("#chat").focusout(function(){
		//muda cor do texto do chat
		$("#chat").removeClass("textenabled");
		$("#chat").addClass("textdisabled");
	
		//escreve mensagem padrão
	 	$("#chat").val(default_chat_value);
	});


	chat.onkeypress = function(e){
	 	if(e.keyCode == 13){
	 		resposta = "";

	 		//captura o conteúdo do chat
	 		chat = $("#chat").val();
	 		
	 		//se for vazio, não faz nada
	 		if (chat == "") {
	 			return;
	 		}

	 		if (chat.toLowerCase().indexOf("créditos") != -1) {
	 			resposta = "\nEste jogo foi desenvolvido como parte de um projeto de férias por: Fernando Sarres (sarresfernando@gmail.com) & Ronald Kaiser (raios.catodicos@gmail.com)";
	 		};

	 		if (chat.toLowerCase().indexOf("ajuda") != -1) {
	 			resposta = "\nEste jogo é baseado em comandos de texto.\n" + 
	 					   "Comandos básicos:\n" + 
	 					   	"  \"ajuda\": Mostra essa ajuda.\n" +
	 					   	"  \"créditos\": Exibe dados dos criadores deste jogo.\n" +
	 					   	"  \"comandos\": Lista todos os comandos disponíveis no jogo.";
 				//
	 		};

	 		if (chat.toLowerCase().indexOf("comandos") != -1) {
	 			resposta = "\n  \"ajuda\": Mostra comandos básicos.\n" +
	 					   	"  \"créditos\": Exibe dados dos criadores deste jogo.\n" +
	 					   	"  \"comandos\": Lista todos os comandos disponíveis no jogo.\n" +
	 					   	"  \"observar\": Permite que você saiba o que o seu personagem consegue visualizar.";
	 		};


	 		if (chat.toLowerCase().indexOf("observar") != -1) {
	 			resposta = "\nNão vejo nada.";
	 		}


	 		if (resposta == "") {
	 			resposta = "\nComando inválido. Digite \"comandos\" para comandos disponíveis."

	 			};

	 		//captura o conteúdo da história
	 		historia = $("#historia").val();
	 		
	 		//concatena o que tinha em história com o que foi digitado
	 		$("#historia").val(historia + "\n\n" + "> " + chat + resposta);

	 		//apaga o conteúdo do chat
	 		$("#chat").val("");
	 	}
	}


});



