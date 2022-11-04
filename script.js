var click =0;

function counter(){
    ++click;
    if(click > 10){
        click =0;
    }
    document.getElementById("count").innerHTML = click;
}


