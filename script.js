
const uzi_karty = document.getElementById("uzi_karty");
const qr_karty = document.getElementById("qr_karty");
const kezdo_karty = document.getElementById("kezdo_karty");
const startBtn = document.getElementById("startBtn");
const kepBtn = document.getElementById("kepBtn");
const nevBtn = document.getElementById("nevBtn");
const checkBtn = document.getElementById("checkBtn");
const jatek = document.getElementById("jatek");
const talalos = document.getElementById("talalos");
const nev = document.getElementById("nev");
const kep = document.getElementById("kep");
const cim = document.getElementById("cim");
const kodInput = document.getElementById("kodInput");
const uzenet = document.getElementById("uzenet");
const pontszamElem =
    document.getElementById("pontszam");

const quiz = document.getElementById("quiz");
const kerdes = document.getElementById("kerdes");

const v1 = document.getElementById("v1");
const v2 = document.getElementById("v2");
const v3 = document.getElementById("v3");

const scanBtn = document.getElementById("scanBtn");

const gyujtottKodElem =
    document.getElementById("gyujtottKod");

const kilepes =
    document.getElementById("kilepes");

const vegsoKodInput =
    document.getElementById("vegsoKodInput");

const kilepBtn =
    document.getElementById("kilepBtn");

const statusKartya =
    document.getElementById("statusKartya");

const vegsoKartya =
    document.getElementById("vegsoKartya");

let teljesKod = "";
let gyujtottKod = "";

let kepHasznalva = false;
let nevHasznalva = false;
let aktualisTargy;
let pontszam = 0;
let aktualisIndex = 0;
let qr;
let qrRunning = false;

function showMessage(text) {
    uzi_karty.style.display = "flex";
    uzenet.textContent = text;

    clearTimeout(window.msgTimeout);

    window.msgTimeout = setTimeout(() => {
        uzi_karty.style.display = "none";
    }, 2000);
}

function qrEltuntet() {
    document.getElementById("qr_karty").style.display = "none";
}

function qrMutat() {
    document.getElementById("qr_karty").style.display = "flex";
}

function inditQuiz(targy) {

    aktualisTargy = targy;

    // 🔴 QR eltüntetése amikor kérdés jön
    qrEltuntet();

    uzi_karty.style.display = "flex";
    showMessage("✅ Helyes tárgy!");

    setTimeout(() => {

        uzi_karty.style.display = "none";

        quiz.style.display = "block";

        kerdes.textContent = targy.kerdes;

        v1.textContent = targy.valaszok[0];
        v2.textContent = targy.valaszok[1];
        v3.textContent = targy.valaszok[2];

    }, 2000);
}

function generalKod() {

    const karakterek =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    teljesKod = "";

    for (let i = 0; i < targyak.length; i++) {

        const randomIndex =
            Math.floor(
                Math.random() *
                karakterek.length
            );

        teljesKod +=
            karakterek[randomIndex];
    }
}
function betoltTargy() {

    uzi_karty.style.display = "none";//proba 1 a feleslegesen megjelno div re

    aktualisTargy = targyak[aktualisIndex];

    console.log("Betöltött index:", aktualisIndex);

    talalos.textContent = aktualisTargy.talalos;

    nev.textContent = "";
    kep.style.display = "none";
    kodInput.value = "";
    uzenet.textContent = "";

    quiz.style.display = "none";

    // 🔥 FONTOS RESET
    v1.textContent = "";
    v2.textContent = "";
    v3.textContent = "";

    kepHasznalva = false;
    nevHasznalva = false;

    kepBtn.disabled = false;
    nevBtn.disabled = false;

    qrMutat();
}

function ellenorizValasz(index) {

    if (index === aktualisTargy.helyesValasz) {

        gyujtottKod += teljesKod[aktualisIndex];
        gyujtottKodElem.textContent = gyujtottKod;

        showMessage("✅ Helyes válasz!");

        aktualisIndex++;

        if (aktualisIndex >= targyak.length) {

            showMessage("🏆 Minden tárgyat megtaláltál!");

            setTimeout(() => {

                jatek.style.display = "none";
                qr_karty.style.display = "none";
                vegsoKartya.style.display = "block";

            }, 2000); // ugyanannyi, mint a showMessage

            return;
        }

        setTimeout(() => {
            quiz.style.display = "none";   // 🔥 EZ HIÁNYZIK
            qrMutat();                     // 🔥 QR VISSZAJÖN
            betoltTargy();
        }, 700);

    } else {
        showMessage("❌ Rossz válasz!");
    }
}

const targyak = [
    {
        nev: "Úszógolyó",

        kod: "1",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/uszogolyo",

        talalos:
            "Egykor a vízszint változásait figyelték vele.",

        kep:
            "images/uszogolyo.jpg",

        kerdes:
            "Mire használták az úszógolyót?",

        valaszok: [
            "Vízszint mérésére",
            "Hőmérséklet mérésére",
            "Szélirány mérésére"
        ],

        helyesValasz: 0
    },
    {
        nev: "Régi távíró",

        kod: "2",

        talalos:
            "Üzeneteket továbbított nagy távolságokra elektromos jelek segítségével.",

        kep:
            "images/taviro.jpg",

        kerdes:
            "Milyen jeleket használtak a távírón?",

        valaszok: [
            "Morse-jeleket",
            "Rádióhullámokat",
            "Hangfelvételeket"
        ],

        helyesValasz: 0
    },
    {
        nev: "Gőzgép modell",

        kod: "3",

        talalos:
            "A forró vízből származó energia segítségével mozgatta a gépeket.",

        kep:
            "images/gozgep.jpg",

        kerdes:
            "Mi hajtotta ezt a gépet?",

        valaszok: [
            "Gőz",
            "Benzin",
            "Villamos energia"
        ],

        helyesValasz: 0
    }
];

startBtn.addEventListener("click", () => {

    if (qr) {
        qr.stop();
    }

    generalKod();

    gyujtottKod = "";

    gyujtottKodElem.textContent = "";

    vegsoKartya.style.display = "none";
    kezdo_karty.style.display = "none";
    uzi_karty.style.display = "none";

    statusKartya.style.display = "flex";

    jatek.style.display = "block";
    cim.style.display = "none";
    startBtn.style.display = "none";
    qr_karty.style.display = "flex";
    pontszam = 0;
    pontszamElem.textContent = pontszam;

    aktualisIndex = 0;
    betoltTargy();
});

kepBtn.addEventListener("click", () => {

    if (kepHasznalva) {
        return;
    }

    kepHasznalva = true;

    pontszam -= 2.5;

    pontszamElem.textContent =
        pontszam;

    kep.src = aktualisTargy.kep;

    kep.style.display = "block";

    kepBtn.disabled = true;

});

nevBtn.addEventListener("click", () => {

    if (nevHasznalva) {
        return;
    }

    nevHasznalva = true;

    pontszam -= 2.5;

    pontszamElem.textContent =
        pontszam;

    nev.textContent =
        aktualisTargy.nev;

    nevBtn.disabled = true;

});

checkBtn.addEventListener("click", () => {

    v1.style.display = "inline-block";
    v2.style.display = "inline-block";
    v3.style.display = "inline-block";

    if (!aktualisTargy) {
        showMessage("Indítsd el a játékot!");
        return;
    }

    if (
        kodInput.value.trim().toUpperCase() ===
        aktualisTargy.kod.toUpperCase()
    ) {

        pontszam += 10;
        pontszamElem.textContent = pontszam;

        showMessage("✅ Helyes tárgy!");

        qrEltuntet(); 

        setTimeout(() => {

            quiz.style.display = "block";

            kerdes.textContent = aktualisTargy.kerdes;

            v1.textContent = aktualisTargy.valaszok[0];
            v2.textContent = aktualisTargy.valaszok[1];
            v3.textContent = aktualisTargy.valaszok[2];

        }, 2000);

    } else {

        showMessage("❌ Hibás kód!");
    }

});

v1.addEventListener("click", () => {
    ellenorizValasz(0);
});

v2.addEventListener("click", () => {
    ellenorizValasz(1);
});

v3.addEventListener("click", () => {
    ellenorizValasz(2);
});

function onScanSuccess(decodedText) {

    console.log(decodedText);

    const talalat = targyak.find(
        t => decodedText.includes(t.qr)
    );

    if (!talalat) {
        showMessage("❌ Hibás QR, próbáld újra!");
        return;
    }

    if (qr) {
        qr.stop();
        qrRunning = false;
    }

    inditQuiz(talalat);
}

scanBtn.addEventListener("click", () => {

    if (qrRunning) return;

    qrRunning = true;

    document.getElementById("qr-reader").style.display = "block";

    qr = new Html5Qrcode("qr-reader");

    qr.start(
        { facingMode: "environment" },
        {
            fps: 10,
            qrbox: 250
        },
        onScanSuccess
    );
});

kilepBtn.addEventListener("click", () => {

    if (
        vegsoKodInput.value.toUpperCase() === teljesKod
    ) {

        jatek.style.display = "none";
        qr_karty.style.display = "none";
        statusKartya.style.display = "none";
        vegsoKartya.style.display = "none";

        document.getElementById("vegeUzenet").style.display = "flex";

    } else {
        showMessage("❌ Hibás kód!");
    }
});
