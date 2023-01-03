var odabirReda = null

function formaPotvrde() {
    if (validate()) {
        var formData = readFormData();
        if (odabirReda == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["indeks"] = document.getElementById("indeks").value;
    formData["ime"] = document.getElementById("ime").value;
    formData["prezime"] = document.getElementById("prezime").value;
    formData["godina_rodjenja"] = document.getElementById("godina_rodjenja").value;
    formData["mesto_rodjenja"] = document.getElementById("mesto_rodjenja").value;
    formData["godina_upisa"] = document.getElementById("godina_upisa").value;
    formData["ocene"] = document.getElementById("ocene").value;
    formData["prosecna_ocena"] = document.getElementById("prosecna_ocena").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("listaStudenata").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.indeks;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.ime;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.prezime;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.godina_rodjenja;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.mesto_rodjenja;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.godina_upisa;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.ocene;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.prosecna_ocena;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = `<a onClick="onEdit(this)">IZMENI</a>
                       <a onClick="onDelete(this)">IZBRISI</a>`;
}

function resetForm() {
    document.getElementById("indeks").value = "";
    document.getElementById("ime").value = "";
    document.getElementById("prezime").value = "";
    document.getElementById("godina_rodjenja").value = "";
    document.getElementById("mesto_rodjenja").value = "";
    document.getElementById("godina_upisa").value = "";
    document.getElementById("ocene").value = "";
    document.getElementById("prosecna_ocena").value = "";
    odabirReda = null;
}

function onEdit(td) {
    odabirReda = td.parentElement.parentElement;
    document.getElementById("indeks").value = odabirReda.cells[0].innerHTML;
    document.getElementById("ime").value = odabirReda.cells[1].innerHTML;
    document.getElementById("prezime").value = odabirReda.cells[2].innerHTML;
    document.getElementById("godina_rodjenja").value = odabirReda.cells[3].innerHTML;
    document.getElementById("mesto_rodjenja").value = odabirReda.cells[4].innerHTML;
    document.getElementById("godina_upisa").value = odabirReda.cells[5].innerHTML;
    document.getElementById("ocene").value = odabirReda.cells[6].innerHTML;
    document.getElementById("prosecna_ocena").value = odabirReda.cells[7].innerHTML;
}
function updateRecord(formData) {
    odabirReda.cells[0].innerHTML = formData.indeks;
    odabirReda.cells[1].innerHTML = formData.ime;
    odabirReda.cells[2].innerHTML = formData.prezime;
    odabirReda.cells[3].innerHTML = formData.godina_rodjenja;
    odabirReda.cells[4].innerHTML = formData.mesto_rodjenja;
    odabirReda.cells[5].innerHTML = formData.godina_upisa;
    odabirReda.cells[6].innerHTML = formData.ocene;
    odabirReda.cells[7].innerHTML = formData.prosecna_ocene
}

function onDelete(td) {
    if (confirm('Da li ste sigurni da zelite da izbrisete odabranog studenta?')) {
        row = td.parentElement.parentElement;
        document.getElementById("listaStudenata").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("indeks").value == "") {
        isValid = false;
        document.getElementById("IndeksValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("IndeksValidationError").classList.contains("hide"))
            document.getElementById("IndeksValidationError").classList.add("hide");
    }
    return isValid;
}


// POKUSAJ DODAVANJA IZMENI I IZBRISI FUNKCIJE NA POSTOJECI XML FAJL PRILIKOM NJEGOVOG PRIKAZIVANJA !!!

function loadInAnotherTable() {
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

    document.getElementById("listaStudenata").innerHTML = table;
}

/*  POKUSAJ DODAVANJA IZMENI I IZBRISI FUNKCIJE NA POSTOJECI XML FAJL PRILIKOM NJEGOVOG PRIKAZIVANJA !!!

    function onEdit(td) {
        odabirReda = td.parentElement.parentElement;
        document.getElementById("indeks").value = odabirReda.cells[0].innerHTML;
        document.getElementById("ime").value = odabirReda.cells[1].innerHTML;
        document.getElementById("prezime").value = odabirReda.cells[2].innerHTML;
        document.getElementById("godina_rodjenja").value = odabirReda.cells[3].innerHTML;
        document.getElementById("mesto_rodjenja").value = odabirReda.cells[4].innerHTML;
        document.getElementById("godina_upisa").value = odabirReda.cells[5].innerHTML;
        document.getElementById("ocene").value = odabirReda.cells[6].innerHTML;
        document.getElementById("prosecna_ocena").value = odabirReda.cells[7].innerHTML;
    }
    function updateRecord(formData) {
        odabirReda.cells[0].innerHTML = formData.indeks;
        odabirReda.cells[1].innerHTML = formData.ime;
        odabirReda.cells[2].innerHTML = formData.prezime;
        odabirReda.cells[3].innerHTML = formData.godina_rodjenja;
        odabirReda.cells[4].innerHTML = formData.mesto_rodjenja;
        odabirReda.cells[5].innerHTML = formData.godina_upisa;
        odabirReda.cells[6].innerHTML = formData.ocene;
        odabirReda.cells[7].innerHTML = formData.prosecna_ocene
    }
    
    function onDelete(td) {
        if (confirm('Da li ste sigurni da zelite da izbrisete odabranog studenta?')) {
            row = td.parentElement.parentElement;
            document.getElementById("listaStudenata").deleteRow(row.rowIndex);
            resetForm();
        }
    }*/