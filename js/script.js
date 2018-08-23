window.onload = function(){document.getElementById("mobileMenujs").onclick = function() {
  open()
};

function open() {
  document.getElementsByClassName('mobile_nav')[0].style.display='block';
   }
};
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
