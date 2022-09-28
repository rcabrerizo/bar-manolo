class persona {
    constructor() {
        var nom = document.getElementById("nom").value;
        var pes = document.getElementById("pes").value;
        var sexe = document.getElementById("sexe").value;

        if (nom == null || nom == "" || pes == null || pes == "") {
            alert("HI HAN VALORS OBLIGATORIS VUITS")
            location.reload(true);
        } else {
            this.nom = nom;
            this.pes = pes;
            this.sexe = sexe;
        }
        this.capacitat = 3;
        this.ingerit = 0;
        this.barra = 0;
    }
    beureAlchol(graus) {
        var random = Math.floor((Math.random() * 10) + 1);
        if (random < 6) {
            document.getElementById("pagatu").play();
        } else {
            document.getElementById("euros").play();
        }
        var na = 0;
        if (this.sexe == "HOME") {
            na = graus / (this.pes * 0.7);
        } else {
            na = graus / (this.pes * 0.6);
        }
        this.ingerit = this.ingerit + na;
        
        document.getElementById("barra").style.width = (100 / 5) * this.ingerit + "%";
    }
    calcularEstat() {
        if (this.ingerit > 5) {
            document.getElementById("maricon").play();
            alert("LAS MOCHAO NEN")
            location.reload(true);
        }
    }
    mostraDades() {
        alert("LA TAJA ES DE: " + this.ingerit);
    }
    carregarInformacio() {
        var n = document.getElementById("infonom").innerHTML = this.nom;
        var s = document.getElementById("infosexe").innerHTML = this.sexe;
        var z = document.getElementById("infopes").innerHTML = this.pes;
    }



}

class cubatas {
    constructor(grados, nombre) {
        this.nombre = nombre;
        this.grados = grados;
        this.graduacioxcopa = (grados * 50 * 0.80) / 100;
    }
    mostradades() {
        alert(this.grados + " " + this.nombre + " grados: " + this.graduacioxcopa);
    }
    
}

var ArrayOBJ = new Array();
var prs;

function carregarPersona() {
    prs = new persona();
    document.getElementById("formulari").style.display = 'none';
    prs.carregarInformacio();
    var cubata = document.querySelectorAll(".alchol");
    for (var i = 0; i < cubata.length; i++) {
        ArrayOBJ.push(new cubatas(cubata[i].value, cubata[i].id));
    };
    document.getElementById("menus").style.display = "inline-block";
    document.getElementById("cubata").play();
    event.stopPropagation();

}

function demanar(elem) {
    for (var i = 0; i < ArrayOBJ.length; i++) {
        if (elem.id == ArrayOBJ[i].nombre) {
            prs.beureAlchol(ArrayOBJ[i].graduacioxcopa);
        }
    }
    document.getElementById("water").style.height="100%";
    document.getElementById("water").style.height="0%";
    prs.calcularEstat();
    event.stopPropagation();
}
