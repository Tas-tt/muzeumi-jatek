// ========================================
// MÚZEUMI KALANDJÁTÉK
// STABIL QR + PIN + RANDOM 10 + MENTÉS
// ÚJ JÁTÉK / FOLYTATÁS VERZIÓ
// ========================================


// ==================================================
// 1. TÁRGYAK
// ==================================================

const targyak = [

    // ==================================================
    // 1. ÚSZÓGOLYÓ
    // ==================================================

    {
        id: 1,
        tipus: "qr",
        nev: "Úszógolyó",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/uszogolyo",

        segitseg: {
            talalos:
                "Melyik két erő között létrejövő nyomaték fordítja vissza egyensúlyi állapotába a kibillent tárgyat?",

            kep:
                "images/uszogolyo.png"
        },

        quiz: {
            kerdes:
                "Melyik két erő között létrejövő nyomaték fordítja vissza egyensúlyi állapotába a kibillent tárgyat?",

            valaszok: [
                "Súlyerő és centrifugális erő",
                "Súrlódási és rugalmassági erő",
                "Súlyerő és felhajtóerő"
            ],

            helyesValasz: 2
        }
    },


    // ==================================================
    // 2. HENLEY-FÉLE ELEKTROMOS KISÜTŐ
    // ==================================================

    {
        id: 2,
        tipus: "qr",
        nev: "Henley-féle elektromos kisütő",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/henley-fele-elektromos-kisuto",

        segitseg: {
            talalos:
                "Mi a mai megfelelője annak az eszköznek, amelyet régen a Leideni palackokhoz hasonlóan elektromos töltés tárolására használtak?",

            kep:
                "images/henley.jpg"
        },

        quiz: {
            kerdes:
                "Mi a mai megfelelője a Leideni palacknak?",

            valaszok: [
                "Kondenzátor",
                "Ellenállás",
                "Biztosíték"
            ],

            helyesValasz: 0
        }
    },


    // ==================================================
    // 3. RUHMKORFF-FÉLE SZIKRAINDUKTOR
    // ==================================================

    {
        id: 3,
        tipus: "qr",
        nev: "Ruhmkorff-féle szikrainduktor",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/ruhmkorff-fele-szikrainduktor",

        segitseg: {
            talalos:
                "Ha a szerkezet nem indul el, melyik alkatrész finomhangolásával kelthetjük életre?",

            kep:
                "images/ruhmkorff.jpg"
        },

        quiz: {
            kerdes:
                "Ha a szerkezet nem indul el, minek a segítségével kelthetjük életre?",

            valaszok: [
                "A benne lévő méhecske felkeltésével",
                "A szaggató kalapács csavarjának finomhangolásával",
                "A primer és szekunder tekercs felcserélésével"
            ],

            helyesValasz: 1
        }
    },


    // ==================================================
    // 4. WEINHOLD-FÉLE PIEZOMÉTER
    // ==================================================

    {
        id: 4,
        tipus: "qr",
        nev: "Weinhold-féle piezométer",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/weinhold-fele-piezometer",

        segitseg: {
            talalos:
                "Egy üvegedényben egy gömb alakú belső edény látható. Milyen alakúnak látszik a gömb a víz fénytörése miatt?",

            kep:
                "images/weinhold.jpg"
        },

        quiz: {
            kerdes:
                "Milyen alakúnak látszik a gömb alakú belső edény a víz fénytörése miatt?",

            valaszok: [
                "Gömb",
                "Ellipszoid",
                "Henger"
            ],

            helyesValasz: 1
        }
    },


    // ==================================================
    // 5. HÁROMLÁBÚ RÉZTARTÁLY
    // ==================================================

    {
        id: 5,
        tipus: "qr",
        nev: "Háromlábú réztartály",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/haromlabu-reztartaly-es-segner-kerek",

        segitseg: {
            talalos:
                "A kísérleti tárgy által bemutatott jelenség mely technológiai ágnak nyújtott segítséget?",

            kep:
                "images/reztertaly.jpg"
        },

        quiz: {
            kerdes:
                "A kísérleti tárgy által bemutatott jelenség mely technológiai ágnak nyújtott segítséget?",

            valaszok: [
                "Rakétahajtóművek",
                "Elektromos gépjárművek",
                "Tengeralattjárók hajtóművei"
            ],

            helyesValasz: 0
        }
    },


    // ==================================================
    // 6. AKROMATIKUS PRIZMA
    // ==================================================

    {
        id: 6,
        tipus: "qr",
        nev: "Akromatikus prizma",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/akromatikus-prizma",

        segitseg: {
            talalos:
                "A szivárványhoz hasonlóan a fény különböző színekre bontható. Mi csökkenti a fény prizmán való áthaladásából keletkező színeltérést?",

            kep:
                "images/akromatikus_prizma.jpg"
        },

        quiz: {
            kerdes:
                "Mi csökkenti a fény prizmán való áthaladásából keletkező fényeltérést?",

            valaszok: [
                "A különböző anyagok törési tulajdonságainak kiegészítése",
                "A prizma felületének simasága",
                "A Naphoz viszonyított helyzete"
            ],

            helyesValasz: 0
        }
    },


    // ==================================================
    // 7. OPTIKAI SZEKRÉNY
    // ==================================================

    {
        id: 7,
        tipus: "qr",
        nev: "Az optikai szekrény",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/az-optika-szekrenyei",

        segitseg: {
            talalos:
                "Ebben a szekrényben található a legtöbb, fénnyel és optikával foglalkozó kísérleti eszköz. Melyik tudományterülethez kapcsolódhat?",

            kep:
                "images/optikai_szekreny.jpg"
        },

        quiz: {
            kerdes:
                "Melyik tudományterülethez kapcsolódnak elsősorban az optikai szekrényben található kísérleti eszközök?",

            valaszok: [
                "Optikához",
                "Hidraulikához",
                "Akusztikához"
            ],

            helyesValasz: 0
        }
    },


    // ==================================================
    // 8. EGYSZERŰ MIKROSZKÓP
    // ==================================================

    {
        id: 8,
        tipus: "qr",
        nev: "Egyszerű mikroszkóp",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/egyszeru-mikroszkop",

        segitseg: {
            talalos:
                "A távcső ellentéte: nem a távoli, hanem az apró dolgokat teszi láthatóvá. Miből készült a külső szerkezete?",

            kep:
                "images/egyszeru_mikroszkop.jpg"
        },

        quiz: {
            kerdes:
                "Miből áll az egyszerű mikroszkóp külső szerkezete?",

            valaszok: [
                "Kéregpapírból és fából",
                "Rozsdamentes acélból",
                "Műanyagból"
            ],

            helyesValasz: 0
        }
    },


    // ==================================================
    // 9. KALEIDOSZKÓP
    // ==================================================

    {
        id: 9,
        tipus: "qr",
        nev: "Kaleidoszkóp",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/kaleidoszkop",

        segitseg: {
            talalos:
                "A szemed előtt tekerve végtelennek tűnő színjátékot láthatsz. Ki és mikor szabadalmaztatta ezt a találmányt?",

            kep:
                "images/kaleidoszkop.jpg"
        },

        quiz: {
            kerdes:
                "Mikor szabadalmaztatta David Brewster a kaleidoszkópot?",

            valaszok: [
                "1816",
                "1817",
                "1818"
            ],

            helyesValasz: 1
        }
    },


    // ==================================================
    // 10. TÁVCSŐ
    // ==================================================

    {
        id: 10,
        tipus: "qr",
        nev: "Távcső",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/tavcso",

        segitseg: {
            talalos:
                "Madaraktól egészen a Holdig bármit megfigyelhetünk vele. Vajon hány lencsét tartalmazott Galileo Galilei távcsövének optikai rendszere?",

            kep:
                "images/tavcso.jpg"
        },

        quiz: {
            kerdes:
                "Hány lencsét tartalmazott Galileo Galilei távcsövének optikai része?",

            valaszok: [
                "Kettő",
                "Hét",
                "Négy"
            ],

            helyesValasz: 0
        }
    },


    // ==================================================
    // 11. ERŐPARALELOGRAMMA
    // ==================================================

    {
        id: 11,
        tipus: "qr",
        nev: "Erőparalelogramma",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/eroparalelogramma-eszkoz",

        segitseg: {
            talalos:
                "Két erő együtt egyetlen eredő erővel is helyettesíthető. Mikor a legnagyobb az eredő erő?",

            kep:
                "images/eroparalelogramma.jpg"
        },

        quiz: {
            kerdes:
                "Mikor a legnagyobb az eredő erő?",

            valaszok: [
                "0°-os szög esetén",
                "90°-os szög esetén",
                "180°-os szög esetén"
            ],

            helyesValasz: 0
        }
    }

];


// ==================================================
// 2. FEJLESZTŐI QR
// ==================================================

const FEJLESZTOI_QR =
    "https://tas-tt.github.io/muzeumi-jatek/";


// ==================================================
// 3. BEÁLLÍTÁSOK
// ==================================================

const JATEK_TARGYAK_SZAMA = 10;

const MENTES_KULCS =
    "muzeumiKalandJatek";


// ==================================================
// 4. HTML ELEMEK
// ==================================================

const uzi_karty =
    document.getElementById("uzi_karty");

const uzenet =
    document.getElementById("uzenet");

const qr_karty =
    document.getElementById("qr_karty");

const kezdo_karty =
    document.getElementById("kezdo_karty");

const startBtn =
    document.getElementById("startBtn");

const folytatasBtn =
    document.getElementById("folytatasBtn");

const mentesInfo =
    document.getElementById("mentesInfo");

const kepBtn =
    document.getElementById("kepBtn");

const nevBtn =
    document.getElementById("nevBtn");

const jatek =
    document.getElementById("jatek");

const talalos =
    document.getElementById("talalos");

const keresesiKartya =
    document.getElementById("keresesKartya");

const talalosKartya =
    document.getElementById("talalosKartya");

const segitsegKartya =
    document.getElementById("segitsegKartya");

const nev =
    document.getElementById("nev");

const kep =
    document.getElementById("kep");

const cim =
    document.getElementById("cim");

const quiz =
    document.getElementById("quiz");

const kerdes =
    document.getElementById("kerdes");

const v1 =
    document.getElementById("v1");

const v2 =
    document.getElementById("v2");

const v3 =
    document.getElementById("v3");

const scanBtn =
    document.getElementById("scanBtn");

const video =
    document.getElementById("qr-reader");

const qrResult =
    document.getElementById("qr-result");

const gyujtottKodElem =
    document.getElementById("gyujtottKod");

const pontszamElem =
    document.getElementById("pontszam");

const statusKartya =
    document.getElementById("statusKartya");

const vegsoKartya =
    document.getElementById("vegsoKartya");

const vegsoKodInput =
    document.getElementById("vegsoKodInput");

const kilepBtn =
    document.getElementById("kilepBtn");

const vegeUzenet =
    document.getElementById("vegeUzenet");


// ==================================================
// 5. PIN ELEMEK
// ==================================================

let pinKartya =
    document.getElementById("pinKartya");

let pinInput =
    document.getElementById("pinInput");

let checkPinBtn =
    document.getElementById("checkPinBtn");


// ==================================================
// 6. JÁTÉK VÁLTOZÓK
// ==================================================

let teljesKod = "";

let gyujtottKod = "";

let aktualisTargy = null;

let aktualisIndex = 0;

let pontszam = 0;

let kepHasznalva = false;

let nevHasznalva = false;

let scanner = null;

let qrRunning = false;

let rosszQuizValaszok = [];

let jatekTargyak = [];


// ==================================================
// 7. SEGÉDFÜGGVÉNY
// ELEMENT BIZTONSÁGOS MEGJELENÍTÉSE
// ==================================================

function megjelenit(elem, display = "block") {

    if (elem) {
        elem.style.display = display;
    }

}


function elrejt(elem) {

    if (elem) {
        elem.style.display = "none";
    }

}


// ==================================================
// 8. ÜZENET
// ==================================================

function showMessage(szoveg) {

    if (!uzi_karty || !uzenet) {
        return;
    }

    uzenet.textContent =
        szoveg;

    uzi_karty.style.display =
        "flex";

    clearTimeout(
        window.msgTimeout
    );

    window.msgTimeout =
        setTimeout(() => {

            uzi_karty.style.display =
                "none";

        }, 2000);

}


// ==================================================
// 9. QR KÁRTYA
// ==================================================

function qrMutat() {

    if (!qr_karty) {
        return;
    }

    qr_karty.style.display =
        "flex";

}


function qrEltuntet() {

    if (!qr_karty) {
        return;
    }

    qr_karty.style.display =
        "none";

}


// ==================================================
// 10. SCANNER LEÁLLÍTÁSA
// ==================================================

function scannerLeallitasa() {

    if (scanner) {

        try {

            scanner.stop();

        }

        catch (error) {

            console.log(
                "Scanner stop hiba:",
                error
            );

        }


        try {

            scanner.destroy();

        }

        catch (error) {

            console.log(
                "Scanner destroy hiba:",
                error
            );

        }

        scanner = null;

    }

    qrRunning = false;


    if (qrResult) {

        qrResult.textContent =
            "";

    }


    const box =
        document.querySelector(".qr-box");

    if (box) {

        box.classList.remove(
            "show"
        );

    }

}


// ==================================================
// 11. MENTETT JÁTÉK ELLENŐRZÉSE
// ==================================================

function vanMentettJatek() {

    const adat =
        localStorage.getItem(
            MENTES_KULCS
        );

    if (!adat) {
        return false;
    }


    try {

        const mentes =
            JSON.parse(adat);


        if (
            !Array.isArray(
                mentes.targyak
            )
        ) {

            return false;

        }


        if (
            mentes.targyak.length !==
            JATEK_TARGYAK_SZAMA
        ) {

            return false;

        }


        if (
            typeof mentes.teljesKod !==
            "string"
        ) {

            return false;

        }


        if (
            mentes.teljesKod.length !==
            mentes.targyak.length
        ) {

            return false;

        }


        return true;

    }

    catch (error) {

        console.error(
            "Mentés ellenőrzési hiba:",
            error
        );

        return false;

    }

}


// ==================================================
// 12. KEZDŐKÉPERNYŐ FRISSÍTÉSE
// ==================================================

function kezdokepernyoFrissitese() {

    const vanMentes =
        vanMentettJatek();


    if (folytatasBtn) {

        folytatasBtn.style.display =
            vanMentes
                ? "block"
                : "none";

    }


    if (mentesInfo) {

        mentesInfo.style.display =
            vanMentes
                ? "block"
                : "none";

    }


    if (startBtn) {

        startBtn.textContent =
            "▶️ Új játék";

    }

}


// ==================================================
// 13. JÁTÉK MENTÉSE
// ==================================================

function jatekMentese() {

    if (
        !jatekTargyak ||
        jatekTargyak.length === 0
    ) {

        return;

    }


    const mentes = {

        targyak:
            jatekTargyak.map(
                targy => targy.id
            ),

        aktualisIndex:
            aktualisIndex,

        pontszam:
            pontszam,

        teljesKod:
            teljesKod,

        gyujtottKod:
            gyujtottKod,

        kepHasznalva:
            kepHasznalva,

        nevHasznalva:
            nevHasznalva,

        rosszQuizValaszok:
            rosszQuizValaszok,

        mentesIdeje:
            Date.now()

    };


    try {

        localStorage.setItem(
            MENTES_KULCS,
            JSON.stringify(mentes)
        );

        console.log(
            "💾 Játék elmentve:",
            mentes
        );

    }

    catch (error) {

        console.error(
            "❌ Mentési hiba:",
            error
        );

    }

}


// ==================================================
// 14. JÁTÉK BETÖLTÉSE
// ==================================================

function jatekBetoltese() {

    const mentettAdat =
        localStorage.getItem(
            MENTES_KULCS
        );


    if (!mentettAdat) {

        return false;

    }


    try {

        const mentes =
            JSON.parse(
                mentettAdat
            );


        // ------------------------------------------
        // TÁRGYAK
        // ------------------------------------------

        if (
            !Array.isArray(
                mentes.targyak
            )
        ) {

            throw new Error(
                "A mentésben nincs tárgylista."
            );

        }


        jatekTargyak =
            mentes.targyak
                .map(id =>
                    targyak.find(
                        targy =>
                            targy.id === id
                    )
                )
                .filter(Boolean);


        // ------------------------------------------
        // ALAP ADATOK
        // ------------------------------------------

        aktualisIndex =
            Number.isInteger(
                mentes.aktualisIndex
            )
                ? mentes.aktualisIndex
                : 0;


        pontszam =
            typeof mentes.pontszam === "number"
                ? mentes.pontszam
                : 0;


        teljesKod =
            mentes.teljesKod || "";


        gyujtottKod =
            mentes.gyujtottKod || "";


        // ------------------------------------------
        // SEGÍTSÉGEK
        // ------------------------------------------

        kepHasznalva =
            Boolean(
                mentes.kepHasznalva
            );


        nevHasznalva =
            Boolean(
                mentes.nevHasznalva
            );


        // ------------------------------------------
        // ROSSZ VÁLASZOK
        // ------------------------------------------

        rosszQuizValaszok =
            Array.isArray(
                mentes.rosszQuizValaszok
            )
                ? mentes.rosszQuizValaszok
                : [];


        // ------------------------------------------
        // MENTÉS ELLENŐRZÉSE
        // ------------------------------------------

        if (
            jatekTargyak.length !==
            JATEK_TARGYAK_SZAMA
        ) {

            throw new Error(
                "A mentett tárgylista hibás."
            );

        }


        if (
            !teljesKod ||
            teljesKod.length !==
            jatekTargyak.length
        ) {

            throw new Error(
                "A mentett végső kód hibás."
            );

        }


        // ------------------------------------------
        // HA A JÁTÉK MÁR A VÉGÉN VAN
        // ------------------------------------------

        if (
            aktualisIndex >=
            jatekTargyak.length
        ) {

            aktualisIndex =
                jatekTargyak.length - 1;

        }


        console.log(
            "================================"
        );

        console.log(
            "💾 MENTETT JÁTÉK BETÖLTVE"
        );

        console.log(
            "Aktuális tárgy:",
            aktualisIndex + 1
        );

        console.log(
            "Pontszám:",
            pontszam
        );

        console.log(
            "Kódrészlet:",
            gyujtottKod
        );

        console.log(
            "================================"
        );


        return true;

    }

    catch (error) {

        console.error(
            "❌ Mentés betöltési hiba:",
            error
        );


        jatekTorlese();


        return false;

    }

}


// ==================================================
// 15. JÁTÉK TÖRLÉSE
// ==================================================

function jatekTorlese() {

    localStorage.removeItem(
        MENTES_KULCS
    );


    console.log(
        "🗑️ Mentett játék törölve."
    );


    kezdokepernyoFrissitese();

}


// ==================================================
// 16. RANDOM 10 TÁRGY
// ==================================================

function randomJatekTargyak() {

    const kevertTargyak =
        [...targyak];


    // Fisher-Yates

    for (
        let i =
            kevertTargyak.length - 1;

        i > 0;

        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            kevertTargyak[i],
            kevertTargyak[j]
        ] =
        [
            kevertTargyak[j],
            kevertTargyak[i]
        ];

    }


    jatekTargyak =
        kevertTargyak.slice(
            0,
            Math.min(
                JATEK_TARGYAK_SZAMA,
                kevertTargyak.length
            )
        );


    console.log(
        "================================"
    );

    console.log(
        "🎲 ÚJ RANDOM JÁTÉK"
    );

    console.table(
        jatekTargyak.map(
            targy => ({
                id: targy.id,
                nev: targy.nev
            })
        )
    );

    console.log(
        "================================"
    );

}


// ==================================================
// 17. VÉGSŐ KÓD GENERÁLÁSA
// ==================================================

function generalKod() {

    const karakterek =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";


    teljesKod = "";


    for (
        let i = 0;

        i < jatekTargyak.length;

        i++
    ) {

        const randomIndex =
            Math.floor(
                Math.random() *
                karakterek.length
            );


        teljesKod +=
            karakterek[randomIndex];

    }


    console.log(
        "🔐 Generált végső kód:",
        teljesKod
    );

}


// ==================================================
// 18. QUIZ INDÍTÁSA
// ==================================================

function quizInditasa() {

    if (!aktualisTargy) {
        return;
    }


    const quizAdat =
        aktualisTargy.quiz ||
        aktualisTargy;


    if (
        !quizAdat ||
        !quizAdat.kerdes ||
        !Array.isArray(
            quizAdat.valaszok
        )
    ) {

        showMessage(
            "❌ Ehhez a tárgyhoz nincs quiz!"
        );

        return;

    }


    if (!quiz) {
        return;
    }


    quiz.style.display =
        "block";


    if (kerdes) {

        kerdes.textContent =
            quizAdat.kerdes;

    }


    if (v1) {

        v1.textContent =
            quizAdat.valaszok[0];

        v1.disabled = false;

        v1.classList.remove(
            "rosszValasz"
        );

    }


    if (v2) {

        v2.textContent =
            quizAdat.valaszok[1];

        v2.disabled = false;

        v2.classList.remove(
            "rosszValasz"
        );

    }


    if (v3) {

        v3.textContent =
            quizAdat.valaszok[2];

        v3.disabled = false;

        v3.classList.remove(
            "rosszValasz"
        );

    }


    // FONTOS:
    // új tárgyhoz újraindul a hibás
    // válaszok listája

    rosszQuizValaszok = [];

}


// ==================================================
// 19. SIKERES TÁRGY
// ==================================================

function sikeresTargy() {

    scannerLeallitasa();


    // ------------------------------------------
    // KERESÉSI RÉSZ
    // ------------------------------------------

    elrejt(
        keresesiKartya
    );


    elrejt(
        segitsegKartya
    );


    elrejt(
        talalosKartya
    );


    // ------------------------------------------
    // KÉP
    // ------------------------------------------

    if (kep) {

        kep.style.display =
            "none";

        kep.src =
            "";

    }


    // ------------------------------------------
    // NÉV
    // ------------------------------------------

    if (nev) {

        nev.textContent =
            "";

    }


    // ------------------------------------------
    // QR
    // ------------------------------------------

    qrEltuntet();


    // ------------------------------------------
    // PIN
    // ------------------------------------------

    elrejt(
        pinKartya
    );


    if (pinInput) {

        pinInput.value =
            "";

    }


    // ------------------------------------------
    // ÜZENET
    // ------------------------------------------

    showMessage(
        "✅ Helyes! Tárgy megtalálva!"
    );


    // ------------------------------------------
    // QUIZ
    // ------------------------------------------

    setTimeout(
        () => {

            quizInditasa();

        },
        2000
    );

}


// ==================================================
// 20. TÁRGY BETÖLTÉSE
// ==================================================

function betoltTargy() {

    if (
        !jatekTargyak ||
        jatekTargyak.length === 0
    ) {

        console.error(
            "Nincs játékban lévő tárgy."
        );

        return;

    }


    if (
        aktualisIndex < 0 ||
        aktualisIndex >=
        jatekTargyak.length
    ) {

        console.error(
            "Érvénytelen tárgyindex:",
            aktualisIndex
        );

        return;

    }


    scannerLeallitasa();

    qrEltuntet();


    // ------------------------------------------
    // FELÜLETEK
    // ------------------------------------------

    megjelenit(
        keresesiKartya
    );

    megjelenit(
        talalosKartya
    );

    megjelenit(
        segitsegKartya
    );


    elrejt(
        pinKartya
    );


    elrejt(
        quiz
    );


    // ------------------------------------------
    // AKTUÁLIS TÁRGY
    // ------------------------------------------

    aktualisTargy =
        jatekTargyak[
            aktualisIndex
        ];


    console.log(
        "================================"
    );

    console.log(
        "📦 Aktuális tárgy:",
        aktualisTargy.nev
    );

    console.log(
        "Sorszám:",
        aktualisIndex + 1,
        "/",
        jatekTargyak.length
    );

    console.log(
        "================================"
    );


    // ------------------------------------------
    // TALÁLÓS KÉRDÉS
    // ------------------------------------------

    if (
        aktualisTargy.segitseg &&
        aktualisTargy.segitseg.talalos
    ) {

        talalos.textContent =
            aktualisTargy
                .segitseg
                .talalos;

    }

    else if (
        aktualisTargy.talalos
    ) {

        talalos.textContent =
            aktualisTargy.talalos;

    }

    else {

        talalos.textContent =
            "";

    }


    // ------------------------------------------
    // SEGÍTSÉGEK
    // ------------------------------------------

    kepHasznalva = false;

    nevHasznalva = false;


    if (kepBtn) {

        kepBtn.disabled =
            false;

    }


    if (nevBtn) {

        nevBtn.disabled =
            false;

    }


    if (kep) {

        kep.style.display =
            "none";

        kep.src =
            "";

    }


    if (nev) {

        nev.textContent =
            "";

    }


    // ------------------------------------------
    // PIN RESET
    // ------------------------------------------

    if (pinInput) {

        pinInput.value =
            "";

    }


    // ------------------------------------------
    // QR RESULT RESET
    // ------------------------------------------

    if (qrResult) {

        qrResult.textContent =
            "";

    }


    // ------------------------------------------
    // TÍPUS
    // ------------------------------------------

    let tipus =
        aktualisTargy.tipus;


    if (!tipus) {

        const vanQR =
            aktualisTargy
                .feladat?.qr ||
            aktualisTargy.qr;


        if (vanQR) {

            tipus = "qr";

        }

        else {

            tipus = "pin";

        }

    }


    // ------------------------------------------
    // QR
    // ------------------------------------------

    if (tipus === "qr") {

        qrMutat();


        console.log(
            "📷 QR mód aktiválva."
        );

    }


    // ------------------------------------------
    // PIN
    // ------------------------------------------

    else if (
        tipus === "pin"
    ) {

        megjelenit(
            pinKartya
        );


        console.log(
            "🔢 PIN mód aktiválva."
        );

    }


    else {

        console.error(
            "Ismeretlen tárgytípus:",
            tipus
        );


        showMessage(
            "❌ Ismeretlen tárgytípus!"
        );

    }

}


// ==================================================
// 21. PIN ELLENŐRZÉS
// ==================================================

if (checkPinBtn) {

    checkPinBtn.addEventListener(
        "click",
        () => {

            if (!aktualisTargy) {

                showMessage(
                    "❌ Indítsd el a játékot!"
                );

                return;

            }


            if (
                aktualisTargy.tipus &&
                aktualisTargy.tipus !==
                "pin"
            ) {

                showMessage(
                    "❌ Ennél a tárgynál QR-kód szükséges!"
                );

                return;

            }


            const beirtPin =
                pinInput
                    ? pinInput.value.trim()
                    : "";


            const helyesPin =
                String(
                    aktualisTargy.pin ||
                    ""
                );


            if (
                beirtPin &&
                beirtPin ===
                helyesPin
            ) {

                sikeresTargy();

            }

            else {

                showMessage(
                    "❌ Hibás PIN!"
                );

            }

        }
    );

}


// ==================================================
// 22. KÉP SEGÍTSÉG
// ==================================================

if (kepBtn) {

    kepBtn.addEventListener(
        "click",
        () => {

            if (!aktualisTargy) {
                return;
            }


            if (kepHasznalva) {
                return;
            }


            kepHasznalva =
                true;


            pontszam -= 2.5;


            if (pontszamElem) {

                pontszamElem.textContent =
                    pontszam;

            }


            let kepForras =
                "";


            if (
                aktualisTargy.segitseg &&
                aktualisTargy.segitseg.kep
            ) {

                kepForras =
                    aktualisTargy
                        .segitseg
                        .kep;

            }

            else if (
                aktualisTargy.kep
            ) {

                kepForras =
                    aktualisTargy.kep;

            }


            if (kep) {

                kep.src =
                    kepForras;

                kep.style.display =
                    "block";

            }


            kepBtn.disabled =
                true;


            jatekMentese();

        }
    );

}


// ==================================================
// 23. NÉV SEGÍTSÉG
// ==================================================

if (nevBtn) {

    nevBtn.addEventListener(
        "click",
        () => {

            if (!aktualisTargy) {
                return;
            }


            if (nevHasznalva) {
                return;
            }


            nevHasznalva =
                true;


            pontszam -= 2.5;


            if (pontszamElem) {

                pontszamElem.textContent =
                    pontszam;

            }


            if (nev) {

                nev.textContent =
                    aktualisTargy.nev;

            }


            nevBtn.disabled =
                true;


            jatekMentese();

        }
    );

}


// ==================================================
// 24. QUIZ VÁLASZ
// ==================================================

function ellenorizValasz(index) {

    if (!aktualisTargy) {
        return;
    }


    const quizAdat =
        aktualisTargy.quiz ||
        aktualisTargy;


    if (
        !quizAdat ||
        !Array.isArray(
            quizAdat.valaszok
        )
    ) {

        return;

    }


    const gombok = [
        v1,
        v2,
        v3
    ];


    const megnyomottGomb =
        gombok[index];


    if (!megnyomottGomb) {
        return;
    }


    // ------------------------------------------
    // UGYANAZT A ROSSZ VÁLASZT NE LEHESSEN
    // ÚJRA MEGNYOMNI
    // ------------------------------------------

    if (
        rosszQuizValaszok
            .includes(index)
    ) {

        return;

    }


    // ==========================================
    // HELYES VÁLASZ
    // ==========================================

    if (
        index ===
        quizAdat.helyesValasz
    ) {

        // +10 pont

        pontszam += 10;


        if (pontszamElem) {

            pontszamElem.textContent =
                pontszam;

        }


        // ======================================
        // KÓDRÉSZLET
        // ======================================

        const megszerzettKarakter =
            teljesKod[
                aktualisIndex
            ];


        if (
            megszerzettKarakter
        ) {

            gyujtottKod +=
                megszerzettKarakter;

        }


        if (gyujtottKodElem) {

            gyujtottKodElem.textContent =
                gyujtottKod;

        }


        console.log(
            "🔑 Megszerzett karakter:",
            megszerzettKarakter
        );


        console.log(
            "🔐 Eddigi kód:",
            gyujtottKod
        );


        // ======================================
        // QUIZ ELTÜNTETÉSE
        // ======================================

        elrejt(
            quiz
        );


        megnyomottGomb.disabled =
            true;


        // ======================================
        // KÖVETKEZŐ TÁRGY
        // ======================================

        aktualisIndex++;


        // ======================================
        // VÉGE?
        // ======================================

        if (
            aktualisIndex >=
            jatekTargyak.length
        ) {

            // FONTOS:
            // A teljes játék már teljesítve van.
            // Mentjük az állapotot, hogy frissítéskor
            // se vesszen el.

            jatekMentese();


            scannerLeallitasa();


            setTimeout(
                () => {

                    elrejt(
                        jatek
                    );

                    qrEltuntet();

                    elrejt(
                        pinKartya
                    );


                    megjelenit(
                        statusKartya,
                        "flex"
                    );


                    megjelenit(
                        vegsoKartya
                    );


                    if (
                        vegsoKodInput
                    ) {

                        vegsoKodInput.value =
                            "";

                    }


                    if (
                        vegeUzenet
                    ) {

                        vegeUzenet.textContent =
                            "";

                        vegeUzenet.style.display =
                            "none";

                    }

                },
                2000
            );


            showMessage(
                "🎉 Minden tárgy teljesítve!"
            );


            return;

        }


        // ======================================
        // MENTÉS
        // ======================================

        jatekMentese();


        showMessage(
            "✅ Helyes válasz! +10 pont"
        );


        // ======================================
        // KÖVETKEZŐ TÁRGY
        // ======================================

        setTimeout(
            () => {

                betoltTargy();

            },
            2000
        );

    }


    // ==========================================
    // ROSSZ VÁLASZ
    // ==========================================

    else {

        rosszQuizValaszok.push(
            index
        );


        // -1 pont

        pontszam -= 1;


        if (pontszamElem) {

            pontszamElem.textContent =
                pontszam;

        }


        megnyomottGomb
            .classList
            .add(
                "rosszValasz"
            );


        megnyomottGomb.disabled =
            true;


        jatekMentese();


        showMessage(
            "❌ Rossz válasz! -1 pont"
        );

    }

}


// ==================================================
// 25. QUIZ GOMBOK
// ==================================================

if (v1) {

    v1.addEventListener(
        "click",
        () => {

            ellenorizValasz(0);

        }
    );

}


if (v2) {

    v2.addEventListener(
        "click",
        () => {

            ellenorizValasz(1);

        }
    );

}


if (v3) {

    v3.addEventListener(
        "click",
        () => {

            ellenorizValasz(2);

        }
    );

}


// ==================================================
// 26. QR NORMALIZÁLÁS
// ==================================================

function normalizalQR(qr) {

    return String(qr)
        .trim()
        .replace(/\/$/, "");

}


// ==================================================
// 27. QR ELLENŐRZÉS
// ==================================================

function onScanSuccess(
    decodedText
) {

    if (!aktualisTargy) {

        showMessage(
            "❌ Nincs aktív tárgy!"
        );

        return;

    }


    // ------------------------------------------
    // QR NORMALIZÁLÁS
    // ------------------------------------------

    const beolvasottQR =
        normalizalQR(
            decodedText
        );


    const fejlesztoiQR =
        normalizalQR(
            FEJLESZTOI_QR
        );


    // ==========================================
    // 🛠️ FEJLESZTŐI QR
    // ==========================================

    if (
        beolvasottQR ===
        fejlesztoiQR
    ) {

        console.log(
            "🛠️ FEJLESZTŐI QR:",
            aktualisTargy.nev
        );


        if (qrResult) {

            qrResult.textContent =
                "🛠️ Fejlesztői QR – tárgy elfogadva!";

        }


        sikeresTargy();


        return;

    }


    // ==========================================
    // QR / PIN ELLENŐRZÉS
    // ==========================================

    if (
        aktualisTargy.tipus &&
        aktualisTargy.tipus !==
        "qr"
    ) {

        showMessage(
            "❌ Ennél a tárgynál PIN-kód szükséges!"
        );

        return;

    }


    const aktualisQR =
        aktualisTargy
            .feladat?.qr ||
        aktualisTargy.qr;


    if (!aktualisQR) {

        showMessage(
            "❌ Ehhez a tárgyhoz nincs QR-kód beállítva!"
        );

        return;

    }


    const normalQR =
        normalizalQR(
            aktualisQR
        );


    // ==========================================
    // HIBÁS QR
    // ==========================================

    if (
        beolvasottQR !==
        normalQR
    ) {

        if (qrResult) {

            qrResult.textContent =
                "❌ Nem ez a keresett tárgy!";

        }


        showMessage(
            "❌ Ez nem a keresett tárgy QR-kódja!"
        );


        return;

    }


    // ==========================================
    // HELYES QR
    // ==========================================

    if (qrResult) {

        qrResult.textContent =
            "✅ Helyes QR-kód!";

    }


    sikeresTargy();

}


// ==================================================
// 28. QR SCANNER INDÍTÁSA
// ==================================================

if (scanBtn) {

    scanBtn.addEventListener(
        "click",
        async () => {

            if (qrRunning) {
                return;
            }


            if (!aktualisTargy) {

                showMessage(
                    "❌ Nincs aktív tárgy!"
                );

                return;

            }


            if (
                aktualisTargy.tipus &&
                aktualisTargy.tipus !==
                "qr"
            ) {

                showMessage(
                    "❌ Ennél a tárgynál PIN-kód szükséges!"
                );

                return;

            }


            const aktualisQR =
                aktualisTargy
                    .feladat?.qr ||
                aktualisTargy.qr;


            if (!aktualisQR) {

                showMessage(
                    "❌ Ehhez a tárgyhoz nincs QR-kód beállítva!"
                );

                return;

            }


            // ------------------------------------------
            // QR LIBRARY
            // ------------------------------------------

            if (
                typeof window.QrScanner ===
                "undefined"
            ) {

                console.error(
                    "A QrScanner könyvtár nem töltődött be."
                );


                showMessage(
                    "❌ A QR-olvasó még nem töltődött be!"
                );


                return;

            }


            if (!video) {

                showMessage(
                    "❌ Nem található a kamera!"
                );

                return;

            }


            scannerLeallitasa();


            qrRunning =
                true;


            if (qrResult) {

                qrResult.textContent =
                    "📷 Kamera indítása...";

            }


            const box =
                document.querySelector(
                    ".qr-box"
                );


            if (box) {

                box.classList.add(
                    "show"
                );

            }


            try {

                scanner =
                    new window.QrScanner(
                        video,

                        result => {

                            const text =
                                result?.data ||
                                result;


                            onScanSuccess(
                                text
                            );

                        }
                    );


                await scanner.start();


                if (qrResult) {

                    qrResult.textContent =
                        "📷 Keresés...";

                }


                console.log(
                    "📷 QR START OK"
                );

            }

            catch (error) {

                console.error(
                    "❌ QR scanner hiba:",
                    error
                );


                qrRunning =
                    false;


                scanner =
                    null;


                if (qrResult) {

                    qrResult.textContent =
                        "❌ A kamera nem indítható.";

                }


                showMessage(
                    "❌ A kamera nem indítható!"
                );

            }

        }
    );

}


// ==================================================
// 29. JÁTÉK FELÜLET ELŐKÉSZÍTÉSE
// ==================================================

function jatekFeluletekMegjelenitese() {

    elrejt(
        kezdo_karty
    );


    megjelenit(
        statusKartya,
        "flex"
    );


    megjelenit(
        jatek
    );


    elrejt(
        vegsoKartya
    );


    elrejt(
        quiz
    );


    qrEltuntet();


    elrejt(
        pinKartya
    );


    if (vegeUzenet) {

        vegeUzenet.style.display =
            "none";

    }

}


// ==================================================
// 30. ÚJ JÁTÉK INDÍTÁSA
// ==================================================

function ujJatekInditasa() {

    console.log(
        "================================"
    );

    console.log(
        "🆕 ÚJ JÁTÉK INDÍTÁSA"
    );

    console.log(
        "================================"
    );


    // ------------------------------------------
    // SCANNER
    // ------------------------------------------

    scannerLeallitasa();


    // ------------------------------------------
    // RÉGI MENTÉS TÖRLÉSE
    // ------------------------------------------

    localStorage.removeItem(
        MENTES_KULCS
    );


    // ------------------------------------------
    // ALAPÁLLAPOT
    // ------------------------------------------

    pontszam =
        0;


    aktualisIndex =
        0;


    aktualisTargy =
        null;


    gyujtottKod =
        "";


    teljesKod =
        "";


    kepHasznalva =
        false;


    nevHasznalva =
        false;


    rosszQuizValaszok =
        [];


    jatekTargyak =
        [];


    // ------------------------------------------
    // ÚJ RANDOM TÁRGYAK
    // ------------------------------------------

    randomJatekTargyak();


    // ------------------------------------------
    // ÚJ VÉGSŐ KÓD
    // ------------------------------------------

    generalKod();


    // ------------------------------------------
    // FELÜLETEK
    // ------------------------------------------

    jatekFeluletekMegjelenitese();


    // ------------------------------------------
    // PONTSZÁM
    // ------------------------------------------

    if (pontszamElem) {

        pontszamElem.textContent =
            pontszam;

    }


    // ------------------------------------------
    // KÓD
    // ------------------------------------------

    if (gyujtottKodElem) {

        gyujtottKodElem.textContent =
            "";

    }


    // ------------------------------------------
    // VÉGSŐ INPUT
    // ------------------------------------------

    if (vegsoKodInput) {

        vegsoKodInput.value =
            "";

    }


    // ------------------------------------------
    // ELSŐ TÁRGY
    // ------------------------------------------

    betoltTargy();


    // ------------------------------------------
    // AZONNALI MENTÉS
    // ------------------------------------------

    jatekMentese();


    kezdokepernyoFrissitese();

}


// ==================================================
// 31. MENTETT JÁTÉK FOLYTATÁSA
// ==================================================

function jatekFolytatasa() {

    console.log(
        "================================"
    );

    console.log(
        "🔄 JÁTÉK FOLYTATÁSA"
    );

    console.log(
        "================================"
    );


    scannerLeallitasa();


    const siker =
        jatekBetoltese();


    if (!siker) {

        showMessage(
            "❌ Nincs használható mentett játék!"
        );


        kezdokepernyoFrissitese();


        return;

    }


    // ------------------------------------------
    // FELÜLETEK
    // ------------------------------------------

    jatekFeluletekMegjelenitese();


    // ------------------------------------------
    // STÁTUSZ
    // ------------------------------------------

    if (pontszamElem) {

        pontszamElem.textContent =
            pontszam;

    }


    if (gyujtottKodElem) {

        gyujtottKodElem.textContent =
            gyujtottKod;

    }


    // ------------------------------------------
    // VÉGSŐ KÓD INPUT RESET
    // ------------------------------------------

    if (vegsoKodInput) {

        vegsoKodInput.value =
            "";

    }


    // ------------------------------------------
    // AKTUÁLIS TÁRGY
    // ------------------------------------------

    betoltTargy();


    showMessage(
        "🔄 Játék folytatva!"
    );

}


// ==================================================
// 32. ÚJ JÁTÉK GOMB
// ==================================================

if (startBtn) {

    startBtn.addEventListener(
        "click",
        () => {

            ujJatekInditasa();

        }
    );

}


// ==================================================
// 33. FOLYTATÁS GOMB
// ==================================================

if (folytatasBtn) {

    folytatasBtn.addEventListener(
        "click",
        () => {

            jatekFolytatasa();

        }
    );

}


// ==================================================
// 34. VÉGSŐ KÓD ELLENŐRZÉSE
// ==================================================

if (kilepBtn) {

    kilepBtn.addEventListener(
        "click",
        () => {

            const beirtKod =
                vegsoKodInput
                    ? vegsoKodInput.value
                        .trim()
                        .toUpperCase()
                    : "";


            // ------------------------------------------
            // HELYES KÓD
            // ------------------------------------------

            if (
                beirtKod ===
                teljesKod
            ) {

                console.log(
                    "🎉 SIKERES KIJUTÁS!"
                );


                // --------------------------------------
                // MENTÉS TÖRLÉSE
                // --------------------------------------

                jatekTorlese();


                scannerLeallitasa();


                // --------------------------------------
                // JÁTÉK FELÜLETEK
                // --------------------------------------

                elrejt(
                    jatek
                );


                qrEltuntet();


                elrejt(
                    pinKartya
                );


                elrejt(
                    statusKartya
                );


                elrejt(
                    vegsoKartya
                );


                elrejt(
                    kezdo_karty
                );


                // --------------------------------------
                // RÉGI GYŐZELEM KÁRTYA TÖRLÉSE
                // --------------------------------------

                const regiGyozelem =
                    document.getElementById(
                        "gyozelemKartya"
                    );


                if (regiGyozelem) {

                    regiGyozelem.remove();

                }


                // --------------------------------------
                // GYŐZELEM
                // --------------------------------------

                const gyozelem =
                    document.createElement(
                        "div"
                    );


                gyozelem.id =
                    "gyozelemKartya";


                gyozelem.innerHTML = `

                    <div class="gyozelem-tartalom">

                        <div class="gyozelem-ikon">
                            🎉
                        </div>

                        <h1>
                            GRATULÁLUNK!
                        </h1>

                        <p>
                            Sikeresen teljesítetted
                            a múzeumi kalandjátékot!
                        </p>

                        <h2>
                            🔓 KIJUTOTTÁL!
                        </h2>

                        <div class="vegso-pontszam">

                            Elért pontszám:

                            <strong>
                                ${pontszam} pont
                            </strong>

                        </div>

                    </div>

                `;


                document.body.appendChild(
                    gyozelem
                );


                // --------------------------------------
                // KEZDŐKÉPERNYŐ FOLYTATÁS NÉLKÜL
                // --------------------------------------

                setTimeout(
                    () => {

                        kezdokepernyoFrissitese();

                    },
                    100
                );

            }


            // ------------------------------------------
            // HELYTELEN KÓD
            // ------------------------------------------

            else {

                if (vegeUzenet) {

                    vegeUzenet.textContent =
                        "❌ Hibás kijutási kód!";

                    vegeUzenet.style.display =
                        "block";

                }

                else {

                    showMessage(
                        "❌ Hibás kijutási kód!"
                    );

                }

            }

        }
    );

}


// ==================================================
// 35. ENTER A VÉGSŐ KÓDNÁL
// ==================================================

if (vegsoKodInput) {

    vegsoKodInput.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "Enter"
            ) {

                if (kilepBtn) {

                    kilepBtn.click();

                }

            }

        }
    );

}


// ==================================================
// 36. ENTER A PIN-NÉL
// ==================================================

if (pinInput) {

    pinInput.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "Enter"
            ) {

                if (checkPinBtn) {

                    checkPinBtn.click();

                }

            }

        }
    );

}


// ==================================================
// 37. OLDAL INDULÁSA
// ==================================================

function oldalInditasa() {

    console.log(
        "================================"
    );

    console.log(
        "🎮 MÚZEUMI KALANDJÁTÉK"
    );

    console.log(
        "================================"
    );


    console.log(
        "Összes elérhető tárgy:",
        targyak.length
    );


    console.log(
        "Játékban lévő tárgyak:",
        JATEK_TARGYAK_SZAMA
    );


    console.log(
        "Fejlesztői QR:",
        FEJLESZTOI_QR
    );


    // ------------------------------------------
    // KEZDŐKÉPERNYŐ
    // ------------------------------------------

    megjelenit(
        kezdo_karty
    );


    elrejt(
        jatek
    );


    elrejt(
        statusKartya
    );


    elrejt(
        qr_karty
    );


    elrejt(
        vegsoKartya
    );


    elrejt(
        quiz
    );


    elrejt(
        pinKartya
    );


    // ------------------------------------------
    // MENTÉS ELLENŐRZÉSE
    // ------------------------------------------

    kezdokepernyoFrissitese();


    console.log(
        "Van mentett játék:",
        vanMentettJatek()
    );


    console.log(
        "================================"
    );

}


// ==================================================
// 38. INDÍTÁS
// ==================================================

oldalInditasa();
