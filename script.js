function OpenMenu(){
    document.getElementById('links-mobile').style.height ='300px';
    document.getElementById('open').style.opacity = '0';
    document.getElementById('close').style.opacity = '1';
}

function CloseMenu(){
    document.getElementById('links-mobile').style.height ='0px';
    document.getElementById('open').style.opacity = '1';
    document.getElementById('close').style.opacity = '0';
}