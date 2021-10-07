$(document).ready(function(){
	/*-------------------------------------------- choix des étoiles ----------------------------------------*/

	/* déclaration des variables */
    var rang_etoile = 0;
    var valideEtoile = false;
    /* déclaration des fonctions */
    function colorEtoile(monEtoile){
        switch (monEtoile){
            case "star2":
                        $("#star1").attr("src", "img/star_carotte.svg");
                        break;
            case "star3":
                        $("#star1").attr("src", "img/star_carotte.svg");
                        $("#star2").attr("src", "img/star_carotte.svg");
                        break;
            case "star4":
                        $("#star1").attr("src", "img/star_carotte.svg");
                        $("#star2").attr("src", "img/star_carotte.svg");
                        $("#star3").attr("src", "img/star_carotte.svg");
                        break;
            case "star5":
                        $("#star1").attr("src", "img/star_carotte.svg");
                        $("#star2").attr("src", "img/star_carotte.svg");
                        $("#star3").attr("src", "img/star_carotte.svg");
                        $("#star4").attr("src", "img/star_carotte.svg");
                        break;
            default:
                    break;
        }
    }
    function uncolorEtoile(monEtoile){
        switch (monEtoile){
            case "star2":
                        $("#star1").attr("src", "img/star_choux.svg");
                        $("#star2").attr("src", "img/star_choux.svg");
                        break;
            case "star3":
                        $("#star1").attr("src", "img/star_choux.svg");
                        $("#star2").attr("src", "img/star_choux.svg");
                        $("#star3").attr("src", "img/star_choux.svg");
                        break;
            case "star4":
                        $("#star1").attr("src", "img/star_choux.svg");
                        $("#star2").attr("src", "img/star_choux.svg");
                        $("#star3").attr("src", "img/star_choux.svg");
                        $("#star4").attr("src", "img/star_choux.svg");
                        break;
            case "star5":
                        $("#star1").attr("src", "img/star_choux.svg");
                        $("#star2").attr("src", "img/star_choux.svg");
                        $("#star3").attr("src", "img/star_choux.svg");
                        $("#star4").attr("src", "img/star_choux.svg");
                        $("#star5").attr("src", "img/star_choux.svg");
                        break;
            default:
                    break;
        }
    }
    /* main */
    $(".etoileJQ").hover(
        function(){                                   
            if(valideEtoile == false){
                $(this).attr("src", "img/star_carotte.svg");
                rang_etoile = $(this).attr("id");
                colorEtoile(rang_etoile);
            }
        },
        function(){  
            if(valideEtoile == false){
                $(this).attr("src", "img/star_choux.svg");
                uncolorEtoile(rang_etoile);
            }
            else{
                colorEtoile(rang_etoile);
            }
        }
    );// fin du hover

    $(".etoileJQ").click(function(){
        var numberEtoile = 0;
        numberEtoile = $(this).attr("id").slice(4, 5);
        $("#note-etoileJQ").attr("value", numberEtoile);
        colorEtoile(numberEtoile);
        if(valideEtoile == true){
            valideEtoile = false;
            uncolorEtoile("star5");
            $("#note-etoileJQ").attr("value", "0");
        }else{
            valideEtoile = true;
        }                                
    });// fin click

    /* By Eric Jaslet :-)*/

	/*--------------------------------- choix des onglets -----------------------------------------------*/
    $(".onglet").click(function(){
    	$(".onglet").css({"background-color":"white"});
    	$(this).css({"background-color":"#fdf4da"});
        $(".contenant").css({"display":"none"});
        var optionOnglet ="#" + $(this).text().slice(0, 6);
        $(optionOnglet).css({"display":"block"});
    });
})