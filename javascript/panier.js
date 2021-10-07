$(document).ready(function(){
    var qt_de_article = 1;
    var prix_article_01 = $("#prix-base-01").attr('value');
    var montant_article_01 = 0;

    // déclaration des fonctions
    function modification_affichage(){
        $("#qt-input-panier").attr('value', qt_de_article);
        $("#qt_view").attr('value', qt_de_article);

        montant_article_01 = prix_article_01 * qt_de_article;
        montant_article_01 = montant_article_01.toFixed(2);

        $("#panier-article01-input").attr('value', montant_article_01);
        $("#total-ligne").text(montant_article_01);
        $("#total-panier").text(montant_article_01);
    }
    
    // Bouton -
    $("#btn_moin-panier").click(function(){
        qt_de_article -= 1;
        if(qt_de_article < 1 ){qt_de_article = 1;}

        modification_affichage();
    });

    // Bouton +
    $("#btn_plus-panier").click(function(){
        qt_de_article += 1;
        if(qt_de_article > 15 ){qt_de_article = 15;}
        modification_affichage();
    });
})