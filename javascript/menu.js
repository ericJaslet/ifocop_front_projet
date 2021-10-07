var test = false;
    function button_transform(x){
        x.classList.toggle("change");
        if(test == false){
            test = true;
            openNav();
        }
        else{
            test = false;
            closeNav();
        }
    }

    function openNav(){
        document.getElementById("myNav").style.width = "100%";
        document.getElementById("myNav").style.opacity = "1";
    }
    function closeNav(){
        document.getElementById("myNav").style.width = "0%";
        document.getElementById("myNav").style.opacity = "0";
    }
