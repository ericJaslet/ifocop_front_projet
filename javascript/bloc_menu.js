$(document).ready(function(){

    // bloc niveau 2
    $("#nos_produits").hover(
        function(){
            $(".nav-bloc").css({"display" : "block"});
            $("#select-femme").css({"background-color":"#f4661b"});
            $("#menu-div-3-femme").css({"display" : "block"});
    },
        function(){
            $(".nav-bloc").css({"display" : "none"});
    });
    $("#bloc-nav").hover(
        function(){
            $(this).css({"display" : "block"});
    },  function(){
            $(this).css({"display" : "none"});
    });

    // bloc niveau 3 femme
    $("#select-femme").hover(
        function(){
            $(this).css({"background-color":"#f4661b"});
            $(".menu_niv_3").css({"display" : "none"});
            $("#menu-div-3-femme").css({"display" : "block"});
        },
        function(){
            $(this).css({"background-color":"#fdf4da"});
            $("#menu-div-3-femme").css({"display" : "none"});
    });
    $("#menu-div-3-femme").hover(
        function(){
            $("#select-femme").css({"background-color":"#f4661b"});
            $(this).css({"display" : "block"});
        },
        function(){
            $("#select-femme").css({"background-color":"#fdf4da"});
            $(this).css({"display" : "none"});
    });

    // bloc niveau 3 homme
    $("#select-homme").hover(
        function(){
            $(this).css({"background-color":"#f4661b"});
            $("#select-femme").css({"background-color":"#fdf4da"});
            $(".menu_niv_3").css({"display" : "none"});
            $("#menu-div-3-homme").css({"display" : "block"});
        },
        function(){
            $(this).css({"background-color":"#fdf4da"});
            $("#menu-div-3-homme").css({"display" : "none"});
    });
    $("#menu-div-3-homme").hover(
        function(){
            $("#select-homme").css({"background-color":"#f4661b"});
            $(this).css({"display" : "block"});
        },
        function(){
            $("#select-homme").css({"background-color":"#fdf4da"});
            $(this).css({"display" : "none"});
    });


    // bloc2 niveau 2
    $("#boutique").hover(
        function(){
            $(".nav-bloc2").css({"display" : "block"});
    },
        function(){
            $(".nav-bloc2").css({"display" : "none"});
    });
    $("#bloc-nav2").hover(
        function(){
            $(this).css({"display" : "block"});
    },  function(){
            $(this).css({"display" : "none"});
    });



}) // fin JQ