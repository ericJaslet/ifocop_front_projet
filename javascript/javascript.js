$(document).ready(function(){

            var qt_article = 1;

            $("#btn_moin").click(function(){
                qt_article--;
                if(qt_article <= 0){qt_article = 1;}             
                $("#qt_view").attr("value", qt_article);
                $("#qt-input").attr("value", qt_article);
            });
            
            $("#btn_plus").click(function(){              
                qt_article++;
                if(qt_article > 15 ){qt_article = 15;}               
                $("#qt_view").attr("value", qt_article);
                $("#qt-input").attr("value", qt_article);
            });



            // Changement d'image :

            $(".click-jq").click(function(){
                        var add_img = $(this).attr("src");
                        $("#img_p_view").attr("src", add_img);
                    });

}) // fin de jq

