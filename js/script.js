function mobiopenclose(){document.getElementById("mobileMenujs").onclick = function() {
   if (document.getElementsByClassName('mobile_nav')[0].style.display=="none") {
   document.getElementsByClassName('mobile_nav')[0].style.display="block";}
   else {document.getElementsByClassName('mobile_nav')[0].style.display="none";}
}
} // открытие/закрытие бургера это просто =)))


window.onscroll = function sc() {
     var nav = document.getElementById('nav');

     if(window.pageYOffset > 100){

     nav.style.position = "fixed";
     nav.style.top = 0;
     nav.style.width = '80%';
          
     }else{
      // nav.style.position = "absolute";
     nav.style.position = 'relative'; //fixed
     nav.style.top = 100;
     nav.style.width = '100%';
    }
} 

/*        document.getElementsByClassName('nav')[0].style.position = "fixed";
          document.getElementsByClassName('nav')[0].style.top = 0;
          document.getElementsByClassName('nav')[0].style. = 1280;

          }else{
            // nav.style.position = "absolute";
            document.getElementsByClassName('nav')[0].style.position = 'relative'; //fixed
            document.getElementsByClassName('nav')[0].style.top = 100;
          }
       }



/*
window.onload = function(){document.getElementById('mobileMenujs').onmouseover=function(event) {
    var target = event.target; // где был клик?
    if (target.className == 'mobile_nav_icon') {
        var s=target.getElementsByClassName('mobile_nav');
        closeMenu();
        s[0].style.display='block';
    }
}
document.onmousemove=function(event) {
    var target = event.target; // где был клик?
    console.log(event.target);
    if (target.className!='mobile_nav_icon' && target.className!='mobile_nav') {
        closeMenu();
    }
}

з клоусщой не те
function closeMenu(){
    var menu=document.getElementById('mobileMenujs');
    var subm=document.getElementsByClassName('mobile_nav');
    for (var i=0; i<subm.length; i++) {
        subm[i].style.display="none";
    }
}
};*/


/*function mobiopenclose(){document.getElementById("mobileMenujs").onclick = function() {
   if (document.getElementsByClassName('mobile_nav')[0].style.display=="none") {
   document.getElementsByClassName('mobile_nav')[0].style.display="block";}
   else {document.getElementsByClassName('mobile_nav')[0].style.display="none";}
}
}*/