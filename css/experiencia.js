	
	$(function(){

	$("#Consultorio").click(MostrarConsultorio);
	$("#Kyrios").click(MostrarKyrios);
	$("#Movistar").click(MostrarMovistar);
	$("#Daemo").click(MostrarDaemo);
	$("#Colombia").click(MostrarColombia);
	})

	function MostrarConsultorio(){
	$("#info").html($("#infoConsultorio").html())	}
	function MostrarKyrios(){
	$("#info").html($("#infoKyrios").html())	}
	function MostrarMovistar(){
	$("#info").html($("#infoMovistar").html())	}
	function MostrarDaemo(){
	$("#info").html($("#infoDaemo").html())	}
	function MostrarColombia(){
	$("#info").html($("#infoColombia").html())	}

/*MENU CONTACTO, MENU LINK Y VOLVERATRAS.*/

 	$(function () {
      $('.menuContainer').load('menu.html');
    });

     $(function () {
      $('.menulessContainer').load('menulinks.html');
    });

     $(function () {
      $('.botonVolver').load('volveralinicio.html');
    });
