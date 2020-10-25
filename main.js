function showSerbia() {
    document.getElementById('Serbia').style.display = "block";
    var elements = document.getElementsByClassName('kartica');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }
}
window.onload = function () {
    var tips = 0;
    var dests = 0;
    var vacation = 0;
    var categs = document.getElementsByClassName("category");
    var arr = [...categs];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].innerHTML === "Destinations") {
            dests++;
        } else if (arr[i].innerHTML === "Travel Tips") {
            tips++;
        } else if (arr[i].innerHTML === "Summer vacation") {
            vacation++;
        }
    }
    document.getElementById("outputTips").innerHTML = tips;
    document.getElementById("outputDest").innerHTML = dests;
    document.getElementById("outputVac").innerHTML = vacation;
}
function obavestenje() {
    event.preventDefault();
    var mejl = document.getElementById("mail").value;
    alert("Thank you for Subscribing! Our fresh new blog posts will wait you on email: " + mejl);
}

function commenting() {

    var areaComment = document.getElementById("commentArea").value;
    console.log(areaComment);
    var commentPrikaz = document.getElementById("comments");
    var iDiv = document.createElement('div');
    iDiv.setAttribute("style", "margin: 1em 0; padding: 0.5em 0;");
    commentPrikaz.appendChild(iDiv);

    var newSvg = `<svg width="3em" height="3em" style="color: #f2a463;" margin-bottom: 2em; viewBox="0 0 16 16"
        class="bi bi-person-circle" fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
        <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        <path fill-rule="evenodd"
            d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
    </svg>`;
    var newDiv = document.createElement('div');
    newDiv.setAttribute("style", "width: 90%; float:right; border: 2px solid #f2a463; padding: 3px;");
    newDiv.classList.add("comment");
    newDiv.append(areaComment);
    console.log(newDiv);
    iDiv.innerHTML += newSvg;
    iDiv.appendChild(newDiv);

}


