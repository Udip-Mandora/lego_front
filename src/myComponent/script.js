window.onload = function () {
    alert("Heelo");
    var input = document.getElementById("color-input");
    var log = document.getElementById("dropdown");
    input.addEventListener("input", updateValue);
    function updateValue(e) { log.style.display = 'block'; }

}