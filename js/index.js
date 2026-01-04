const colorThemes = document.querySelectorAll('[name="themeswitcher"]');

const contactInfo = document.getElementById("contact");

const qInfo = document.getElementById("quickinfo");
qInfo.classList.add("jsinfostart");
qInfo.classList.remove("infostart");

const deetList = [document.getElementById("deetbox1"), document.getElementById("deetbox2"), document.getElementById("deetbox3"), document.getElementById("deetbox4")]
for (i of deetList) {
    i.classList.add("jsdbstart");
    i.classList.remove("dbstart");
}

function qInfoExpand() {
    if (qInfo.classList.contains("jsinfostart")) {
        qInfo.classList.add("jsinfoexpand");
        qInfo.classList.remove("jsinfostart");
        document.getElementById("handlebtn").innerText = "»";
    }
    else {
        qInfo.classList.add("jsinfostart");
        qInfo.classList.remove("jsinfoexpand");
        document.getElementById("handlebtn").innerText = "«";
    }
}

function deetBoxExpand(deetBox, unBox1, unBox2, unBox3) {
    let contract = [unBox1, unBox2, unBox3]
    if (deetBox.classList.contains("jsdbstart")) {
        deetBox.classList.add("jsdbexpand");
        deetBox.classList.remove("jsdbstart");
        for (i of contract) {
            i.classList.add("jsdbstart");
            i.classList.remove("jsdbexpand");
        }
    }
    else {
        deetBox.classList.add("jsdbstart");
        deetBox.classList.remove("jsdbexpand");
    }
}

function copyContactInfo() {
    const me = "levizelley";
    const site = "acevalkyrie";
    navigator.clipboard.writeText(me + "@" + site + ".dev");
}

storeTheme = function(theme) {
    localStorage.setItem("theme", theme);
}

retrieveTheme = function() {
    const activeTheme = localStorage.getItem("theme");
    colorThemes.forEach(themeOption => {
        if (themeOption.id === activeTheme) {
            themeOption.checked = true;
        }
    })
}

colorThemes.forEach(themeOption => {
    themeOption.addEventListener('click', () => {
        storeTheme(themeOption.id);
    })
})

document.onload = retrieveTheme();
contactInfo.addEventListener("click", copyContactInfo);