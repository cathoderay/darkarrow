t1="Bem-vindo ao jogo DarkArrow!\n\nAqui o seu objetivo é salvar a cidade de uma iminente ameaça de destruição.";


function copy(text) {
	historia = $("#historia").val();
	$("#historia").val(historia + "\n" + text);
}


$(document).ready(function() {

    $( "#dialog-modal" ).dialog({height: 240, modal: true, buttons: {'ok': function() {$(this).dialog("close");}}});

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
	 			resposta = "\nEste jogo foi desenvolvido como parte de um projeto de férias por: Fernando Sarres & Ronald Kaiser";
	 		};

	 		if (chat.toLowerCase().indexOf("ajuda") != -1) {
	 			resposta = "\nEste jogo é baseado em comandos de texto.\nComandos básicos:\n\t\"ajuda\": Mostra essa ajuda.\n\t\"créditos\": Exibe dados dos criadores deste jogo.\n\t\"comandos\": Lista todos os comandos disponíveis no jogo.";

	 			//"observar\": Permite que você saiba o que o seu personagem consegue visualizar.";
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



