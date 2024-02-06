var formVisible = false;

function openForm(){
    var form = document.getElementById("form");

    if (!formVisible) {
        form.style.height = form.scrollHeight + "px";
        formVisible = true;
    } else {
        form.style.height = "0";
    }
    formVisible = !formVisible;
}