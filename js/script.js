var button = document.getElementById("check");

button.addEventListener("click", function() {
  
    var container = document.getElementById("clicker");

    if (container.style.position === "fixed") {
        /*container.style.position = "absolute";*/
        document.getElementById("clicker").style.position = "absolute";
    } else {
        /*container.style.position = "absolute";*/
        document.getElementById("clicker").style.position = "fixed";
    }

});












/*function umClique(){
	document.getElementById("checker").display="fixed";
}
*/

/*
var clicado = document.getElementById('clicker');
clicado.onclick = function () {
    alert("Funcionando");
    if (clicado.value === 'ok') {
        clicado.position = fixed;
    }
}

*/





/*
$(document).ready(function () {
    $(".hamburguer").click(function () {
        $(this).toggleClass("active");
        $(".menu").toggleClass("active");
    });
});
*/