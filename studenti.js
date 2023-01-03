function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            empDetails(this);
        }
    };

    xmlhttp.open("GET", "studenti.xml", true);
    xmlhttp.send();
}

function empDetails(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table =
        `<tr><th>Indeks</th><th>Ime</th>
            <th>Prezime</th><th>Datum rodjenja</th><th>Mesto rodjenja</th>
            <th>Datum upisa</th><th>Ocene</th><th>Prosecna ocena</th>
            <th></th>
        </tr>`;
    var x = xmlDoc.getElementsByTagName("student");
 
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("indeks")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("ime")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("prezime")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("godina_rodjenja")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("mesto_rodjenja")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("godina_upisa")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("ocene")[0]
            .childNodes[0].nodeValue + "</td><td>" +
            x[i].getElementsByTagName("prosecna_ocena")[0]
            .childNodes[0].nodeValue + "</td><td>";
    }

    document.getElementById("id").innerHTML = table;
}