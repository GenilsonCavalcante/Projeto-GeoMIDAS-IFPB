var button = document.getElementById("check");

button.addEventListener("click", function() {
  
    var container = document.getElementById("clicker");

    if (container.style.position === "fixed") {
        /*container.style.position = "absolute";*/
        document.getElementById("clicker").style.position = "absolute";
        document.getElementById("navegacao").style.right = "-100%";
    } else {
        /*container.style.position = "absolute";*/
        document.getElementById("clicker").style.position = "fixed";
        document.getElementById("navegacao").style.right = "0";
    }

});
