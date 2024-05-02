function init() {
    const dateDisplay = document.getElementById("buttonForDate");
    dateDisplay.onclick = displayDate
}

function displayDate() {
    let messageParagrph = document.getElementById("messageParagrph");
    let date = document.getElementById("date")
    messageParagrph.innerText = date.value;
}

window.onload = init;
