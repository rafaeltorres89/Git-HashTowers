<!--
function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {
    if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
      document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
    else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
  }
MM_reloadPage(true);
// -->


function ValidaEmail() {
    var obj_email = eval("document.forms[0].Email");
    var txt_email = obj_email.value;
    if ((txt_email.length != 0) && ((txt_email.indexOf("@") < 1) || (txt_email.indexOf('.') < 7)))
    {
        alert('Email incorreto');
        obj_email.focus();
    }
}