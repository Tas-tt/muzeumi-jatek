  // ========================================
  // MÚZEUMI KALANDJÁTÉK
  // STABIL QR + PIN + RANDOM 10 TÁRGY VERZIÓ
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
                  "images/uszogolyo.jpg"
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
      // 4. WEINHOL-FÉLE PIEZOMÉTER
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

// ========================================
// FEJLESZTŐI QR
// ========================================

  const FEJLESZTOI_QR =
    "https://tas-tt.github.io/muzeumi-jatek/";
  
  
  // ==================================================
  // 2. HTML ELEMEK
  // ==================================================
  
  const uzi_karty = document.getElementById("uzi_karty");
  const uzenet = document.getElementById("uzenet");
  const qr_karty = document.getElementById("qr_karty");
  const kezdo_karty = document.getElementById("kezdo_karty");
  const startBtn = document.getElementById("startBtn");
  const kepBtn = document.getElementById("kepBtn");
  const nevBtn = document.getElementById("nevBtn");
  const jatek = document.getElementById("jatek");
  const talalos = document.getElementById("talalos");
  const keresesiKartya =document.getElementById("keresesKartya");
  const talalosKartya =document.getElementById("talalosKartya");
  const segitsegKartya =document.getElementById("segitsegKartya");
  const nev = document.getElementById("nev");
  const kep = document.getElementById("kep");
  const cim = document.getElementById("cim");
  const quiz = document.getElementById("quiz");
  const kerdes = document.getElementById("kerdes");
  const v1 = document.getElementById("v1");
  const v2 = document.getElementById("v2");
  const v3 = document.getElementById("v3");
  const scanBtn = document.getElementById("scanBtn");
  const video = document.getElementById("qr-reader");
  const qrResult = document.getElementById("qr-result");
  const gyujtottKodElem = document.getElementById("gyujtottKod");
  const pontszamElem = document.getElementById("pontszam");
  const statusKartya = document.getElementById("statusKartya");
  const vegsoKartya = document.getElementById("vegsoKartya");
  const vegsoKodInput = document.getElementById("vegsoKodInput");
  const kilepBtn = document.getElementById("kilepBtn");
  const vegeUzenet = document.getElementById("vegeUzenet");
  
  
  // ==================================================
  // 3. PIN FELÜLET
  // ==================================================
  
  let pinKartya = document.getElementById("pinKartya");
  let pinInput = document.getElementById("pinInput");
  let checkPinBtn = document.getElementById("checkPinBtn");
  
  
  if (!pinKartya) {
  
      const regiInput = document.getElementById("kodInput");
      const regiGomb = document.getElementById("checkBtn");
  
      if (regiInput && regiGomb) {
  
          pinKartya = document.createElement("div");
          pinKartya.id = "pinKartya";
  
          pinKartya.innerHTML = `
              <h3>🔢 Tárgy PIN-kódja</h3>
  
              <p>
                  Ha megtaláltad a tárgyat,
                  írd be a rajta található PIN-kódot!
              </p>
  
              <input
                  id="pinInput"
                  type="text"
                  inputmode="numeric"
                  placeholder="Írd be a PIN-kódot"
              >
  
              <button id="checkPinBtn">
                  Ellenőrzés
              </button>
          `;
  
          regiInput.parentNode.insertBefore(
              pinKartya,
              regiInput
          );
  
          regiInput.remove();
          regiGomb.remove();
  
          pinInput = document.getElementById("pinInput");
          checkPinBtn = document.getElementById("checkPinBtn");
      }
  }
  
  
  // ==================================================
  // 4. JÁTÉK VÁLTOZÓK
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
  
  
  // ==================================================
  // ÚJ: AKTUÁLIS JÁTÉK 10 RANDOM TÁRGYA
  // ==================================================
  
  let jatekTargyak = [];
  
  const JATEK_TARGYAK_SZAMA = 10;
  
  
  // ==================================================
  // 5. ÜZENET
  // ==================================================
  
  function showMessage(szoveg) {
  
      if (!uzi_karty || !uzenet) {
          return;
      }
  
      uzenet.textContent = szoveg;
  
      uzi_karty.style.display = "flex";
  
      clearTimeout(window.msgTimeout);
  
      window.msgTimeout = setTimeout(() => {
          uzi_karty.style.display = "none";
      }, 2000);
  }
  
  
  // ==================================================
  // 6. QR KÁRTYA
  // ==================================================
  
  function qrMutat() {
  
      if (!qr_karty) {
          return;
      }
  
      qr_karty.style.display = "flex";
  }
  
  
  function qrEltuntet() {
  
      if (!qr_karty) {
          return;
      }
  
      qr_karty.style.display = "none";
  }
  
  
  // ==================================================
  // 7. SCANNER LEÁLLÍTÁSA
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
          qrResult.textContent = "";
      }
  }
  
  
  // ==================================================
  // 8. ÚJ: 10 RANDOM TÁRGY KIVÁLASZTÁSA
  // ==================================================
  
  function randomJatekTargyak() {
  
      // Az eredeti targyak tömböt NEM módosítjuk.
      // Készítünk róla másolatot.
  
      const kevertTargyak = [...targyak];
  
  
      // Fisher-Yates keverés
  
      for (
          let i = kevertTargyak.length - 1;
          i > 0;
          i--
      ) {
  
          const j =
              Math.floor(
                  Math.random() * (i + 1)
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
  
  
      // Csak az első 10 kell.
  
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
          "ÚJ RANDOM JÁTÉK"
      );
  
      console.log(
          "Kiválasztott tárgyak:"
      );
  
      console.table(
          jatekTargyak.map(targy => ({
              id: targy.id,
              nev: targy.nev
          }))
      );
  
      console.log(
          "================================"
      );
  }
  
  
  // ==================================================
  // 9. VÉGSŐ KÓD GENERÁLÁSA
  // ==================================================
  
  function generalKod() {
  
      const karakterek =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
  
      teljesKod = "";
  
  
      // FONTOS:
      // Nem a teljes targyak.length alapján
      // generálunk kódot.
      //
      // Pontosan annyi karakter lesz,
      // ahány tárgy ebben a játékban van.
  
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
          "Generált végső kód:",
          teljesKod
      );
  }
  
  
  // ==================================================
  // 10. QUIZ MEGJELENÍTÉSE
  // ==================================================

function quizInditasa() {

    if (!aktualisTargy) {
        return;
    }

    // Új kérdés → válaszok újra használhatók
    rosszQuizValaszok = [];

    const quizAdat =
        aktualisTargy.quiz ||
        aktualisTargy;

    if (
        !quizAdat ||
        !quizAdat.kerdes ||
        !quizAdat.valaszok
    ) {

        showMessage(
            "❌ Ehhez a tárgyhoz nincs quiz!"
        );

        return;
    }

    quiz.style.display = "block";

    kerdes.textContent =
        quizAdat.kerdes;

    v1.textContent =
        quizAdat.valaszok[0];

    v2.textContent =
        quizAdat.valaszok[1];

    v3.textContent =
        quizAdat.valaszok[2];

    // Gombok újra engedélyezése
    v1.disabled = false;
    v2.disabled = false;
    v3.disabled = false;

    // Korábbi rossz válaszok jelölésének törlése
    v1.classList.remove("rosszValasz");
    v2.classList.remove("rosszValasz");
    v3.classList.remove("rosszValasz");
}
  
  
  // ==================================================
  // 11. SIKERES TÁRGY
  // ==================================================
  
function sikeresTargy() {

    // ==========================================
    // QR SCANNER LEÁLLÍTÁSA
    // ==========================================

    scannerLeallitasa();

    // ==========================================
    // TELJES KERESÉSI RÉSZ ELTÜNTETÉSE
    // ==========================================

    if (keresesiKartya) {

        keresesiKartya.style.display =
            "none";
    }


    // ==========================================
    // SEGÍTSÉGEK ELTÜNTETÉSE
    // ==========================================

    if (segitsegKartya) {

        segitsegKartya.style.display =
            "none";
    }


    // ==========================================
    // TALÁLÓS KÉRDÉS ELTÜNTETÉSE
    // ==========================================

    if (talalosKartya) {

        talalosKartya.style.display =
            "none";
    }


    // ==========================================
    // SEGÍTSÉGKÉP TÖRLÉSE
    // ==========================================

    if (kep) {

        kep.style.display =
            "none";

        kep.src =
            "";
    }


    // ==========================================
    // SEGÍTSÉGNÉV TÖRLÉSE
    // ==========================================

    if (nev) {

        nev.textContent =
            "";
    }


    // ==========================================
    // QR ELTÜNTETÉSE
    // ==========================================

    qrEltuntet();


    // ==========================================
    // PIN ELTÜNTETÉSE
    // ==========================================

    if (pinKartya) {

        pinKartya.style.display =
            "none";
    }


    // ==========================================
    // PIN MEZŐ RESET
    // ==========================================

    if (pinInput) {

        pinInput.value =
            "";
    }


    // ==========================================
    // ÜZENET
    // ==========================================

    showMessage(
        "✅ Helyes! Tárgy megtalálva!"
    );


    // ==========================================
    // QUIZ
    // ==========================================

    setTimeout(() => {

        quizInditasa();

    }, 2000);
}
  
  
  // ==================================================
  // 12. TÁRGY BETÖLTÉSE
  // ==================================================
  
  function betoltTargy() {
  
      // FONTOS:
      // Most már NEM a targyak tömbből dolgozunk,
      // hanem a kiválasztott 10 tárgyból.
  
      if (
          aktualisIndex < 0 ||
          aktualisIndex >= jatekTargyak.length
      ) {
  
          console.error(
              "Érvénytelen tárgyindex:",
              aktualisIndex
          );
  
          return;
      }
  
  
      scannerLeallitasa();
  
      qrEltuntet();
      
      if (keresesiKartya) {

    keresesiKartya.style.display =
        "block";
}

if (talalosKartya) {

    talalosKartya.style.display =
        "block";
}

if (segitsegKartya) {

    segitsegKartya.style.display =
        "block";
}
  
  
      if (pinKartya) {
          pinKartya.style.display =
              "none";
      }
  
  
      quiz.style.display =
          "none";
  
  
      aktualisTargy =
          jatekTargyak[aktualisIndex];
  
  
      console.log(
          "Betöltött tárgy:",
          aktualisTargy
      );
  
  
      if (
          aktualisTargy.segitseg &&
          aktualisTargy.segitseg.talalos
      ) {
  
          talalos.textContent =
              aktualisTargy.segitseg.talalos;
  
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
  
  
      kepHasznalva =
          false;
  
      nevHasznalva =
          false;
  
  
      kepBtn.disabled =
          false;
  
      nevBtn.disabled =
          false;
  
  
      kep.style.display =
          "none";
  
      kep.src =
          "";
  
  
      nev.textContent =
          "";
  
  
      if (pinInput) {
          pinInput.value =
              "";
      }
  
  
      if (qrResult) {
          qrResult.textContent =
              "";
      }
  
  
      let tipus =
          aktualisTargy.tipus;
  
  
      if (!tipus) {
  
          const vanQR =
              aktualisTargy.feladat?.qr ||
              aktualisTargy.qr;
  
  
          if (vanQR) {
              tipus = "qr";
          }
  
          else {
              tipus = "pin";
          }
      }
  
  
      if (tipus === "qr") {
  
          qrMutat();
  
          console.log(
              "QR mód aktiválva."
          );
  
      }
  
  
      else if (tipus === "pin") {
  
          if (pinKartya) {
              pinKartya.style.display =
                  "block";
          }
  
  
          console.log(
              "PIN mód aktiválva."
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
  // 13. PIN ELLENŐRZÉS
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
                  aktualisTargy.tipus !== "pin"
              ) {
  
                  showMessage(
                      "❌ Ennél a tárgynál QR-kód szükséges!"
                  );
  
                  return;
              }
  
  
              const beirtPin =
                  pinInput.value.trim();
  
  
              const helyesPin =
                  String(
                      aktualisTargy.pin
                  );
  
  
              if (
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
  // 14. KÉP SEGÍTSÉG
  // ==================================================
  
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
  
          pontszamElem.textContent =
              pontszam;
  
  
          let kepForras =
              "";
  
  
          if (
              aktualisTargy.segitseg &&
              aktualisTargy.segitseg.kep
          ) {
  
              kepForras =
                  aktualisTargy.segitseg.kep;
  
          }
  
          else if (
              aktualisTargy.kep
          ) {
  
              kepForras =
                  aktualisTargy.kep;
  
          }
  
  
          kep.src =
              kepForras;
  
  
          kep.style.display =
              "block";
  
  
          kepBtn.disabled =
              true;
  
      }
  );
  
  
  // ==================================================
  // 15. NÉV SEGÍTSÉG
  // ==================================================
  
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
  
          pontszamElem.textContent =
              pontszam;
  
  
          nev.textContent =
              aktualisTargy.nev;
  
  
          nevBtn.disabled =
              true;
  
      }
  );
  
  
  // ==================================================
  // 16. QUIZ VÁLASZ
  // ==================================================
  
  function ellenorizValasz(index) {

    if (!aktualisTargy) {
        return;
    }


    const quizAdat =
        aktualisTargy.quiz ||
        aktualisTargy;


    // ==========================================
    // A MEGNYOMOTT GOMB
    // ==========================================

    const gombok = [
        v1,
        v2,
        v3
    ];

    const megnyomottGomb =
        gombok[index];


    // ==========================================
    // HA EZT A ROSSZ VÁLASZT MÁR MEGNYOMTA
    // ==========================================

    if (
        rosszQuizValaszok.includes(index)
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

        pontszamElem.textContent =
            pontszam;

        // ==========================================
        // KIJUTÁSI KÓD BŐVÍTÉSE
        // ==========================================
        
        gyujtottKod += teljesKod[aktualisIndex];
        
        gyujtottKodElem.textContent =
            gyujtottKod;
        
        console.log(
            "Megtalált kódrészlet:",
            teljesKod[aktualisIndex]
        );
        
        console.log(
            "Eddigi kijutási kód:",
            gyujtottKod
        );

      // Gomb letiltása
        megnyomottGomb.disabled = true;


        // Quiz eltüntetése
        quiz.style.display =
            "none";


        showMessage(
            "✅ Helyes válasz!"
        );


        // Következő tárgy
        aktualisIndex++;


        // ======================================
        // VÉGE?
        // ======================================

        if (
            aktualisIndex >=
            jatekTargyak.length
        ) {

            scannerLeallitasa();


            setTimeout(() => {

                jatek.style.display =
                    "none";


                qrEltuntet();


                if (pinKartya) {

                    pinKartya.style.display =
                        "none";
                }


                statusKartya.style.display =
                    "flex";


                vegsoKartya.style.display =
                    "block";


            }, 2000);


            return;
        }


        // ======================================
        // KÖVETKEZŐ TÁRGY
        // ======================================

        setTimeout(() => {

            betoltTargy();

        }, 2000);

    }


    // ==========================================
    // ROSSZ VÁLASZ
    // ==========================================

    else {

        // Ezt a választ megjelöljük
        rosszQuizValaszok.push(index);


        // -1 pont
        pontszam -= 1;

        pontszamElem.textContent =
            pontszam;


        // Gomb benyomva marad
        megnyomottGomb.classList.add(
            "rosszValasz"
        );


        // Többet ne lehessen megnyomni
        megnyomottGomb.disabled =
            true;


        showMessage(
            "❌ Rossz válasz! -1 pont"
        );

    }
}
  
  
  // ==================================================
  // 17. QUIZ GOMBOK
  // ==================================================
  
  v1.addEventListener(
      "click",
      () => {
          ellenorizValasz(0);
      }
  );
  
  
  v2.addEventListener(
      "click",
      () => {
          ellenorizValasz(1);
      }
  );
  
  
  v3.addEventListener(
      "click",
      () => {
          ellenorizValasz(2);
      }
  );
  
  
  // ==================================================
  // 18. QR ELLENŐRZÉS
  // ==================================================
  
  function onScanSuccess(decodedText) {
  
      if (!aktualisTargy) {
  
          showMessage(
              "❌ Nincs aktív tárgy!"
          );
  
          return;
      }

    // ==========================================
    // FEJLESZTŐI QR
    // ==========================================
    
    if (decodedText === FEJLESZTOI_QR) {
    
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
  
  
      if (
          aktualisTargy.tipus &&
          aktualisTargy.tipus !== "qr"
      ) {
  
          showMessage(
              "❌ Ennél a tárgynál PIN-kód szükséges!"
          );
  
          return;
      }
  
  
      const aktualisQR =
          aktualisTargy.feladat?.qr ||
          aktualisTargy.qr;
  
  
      if (!aktualisQR) {
  
          showMessage(
              "❌ Ehhez a tárgyhoz nincs QR-kód beállítva!"
          );
  
          return;
      }
  
  
      if (
          decodedText !==
          aktualisQR
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
  
  
      if (qrResult) {
  
          qrResult.textContent =
              "✅ Helyes QR-kód!";
  
      }
  
  
      sikeresTargy();
  }
  
  
  // ==================================================
  // 19. QR SCANNER INDÍTÁSA
  // ==================================================
  
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
              aktualisTargy.tipus !== "qr"
          ) {
  
              showMessage(
                  "❌ Ennél a tárgynál PIN-kód szükséges!"
              );
  
              return;
          }
  
  
          const aktualisQR =
              aktualisTargy.feladat?.qr ||
              aktualisTargy.qr;
  
  
          if (!aktualisQR) {
  
              showMessage(
                  "❌ Ehhez a tárgyhoz nincs QR-kód beállítva!"
              );
  
              return;
          }
  
  
          if (
              typeof window.QrScanner ===
              "undefined"
          ) {
  
              console.error(
                  "A QrScanner könyvtár még nem töltődött be."
              );
  
  
              showMessage(
                  "❌ A QR-olvasó még nem töltődött be. Próbáld újra!"
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
              document.querySelector(".qr-box");
  
  
          if (box) {
  
              box.classList.add("show");
  
          }
  
  
          try {
  
              scanner =
                  new window.QrScanner(
                      video,
  
                      result => {
  
                          const text =
                              result.data ||
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
                  "QR START OK"
              );
  
          }
  
          catch (error) {
  
              console.error(
                  "QR scanner hiba:",
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
  
  
  // ==================================================
  // 20. JÁTÉK INDÍTÁSA
  // ==================================================
  
  startBtn.addEventListener(
      "click",
      () => {
  
          console.log(
              "Játék indítása..."
          );
  
  
          // ------------------------------------------
          // SCANNER RESET
          // ------------------------------------------
  
          scannerLeallitasa();
  
  
          // ------------------------------------------
          // PONTOZÁS RESET
          // ------------------------------------------
  
          pontszam =
              0;
  
  
          pontszamElem.textContent =
              "0";
  
  
          // ------------------------------------------
          // ÚJ RANDOM 10 TÁRGY
          // ------------------------------------------
  
          randomJatekTargyak();
  
  
          // ------------------------------------------
          // ÁLLOMÁS RESET
          // ------------------------------------------
  
          aktualisIndex =
              0;
  
  
          aktualisTargy =
              null;
  
  
          // ------------------------------------------
          // VÉGSŐ KÓD RESET
          // ------------------------------------------
  
          gyujtottKod =
              "";
  
  
          gyujtottKodElem.textContent =
              "";
  
  
          // A random 10 tárgy alapján
          // pontosan 10 karakteres kód készül.
  
          generalKod();
  
  
          // ------------------------------------------
          // FELÜLETEK
          // ------------------------------------------
  
          kezdo_karty.style.display =
              "none";
  
  
          statusKartya.style.display =
              "flex";
  
  
          jatek.style.display =
              "block";
  
  
          vegsoKartya.style.display =
              "none";
  
  
          quiz.style.display =
              "none";
  
  
          qrEltuntet();
  
  
          if (pinKartya) {
  
              pinKartya.style.display =
                  "none";
          }
  
  
          if (vegeUzenet) {
  
              vegeUzenet.style.display =
                  "none";
          }
  
  
          // ------------------------------------------
          // ELSŐ RANDOM TÁRGY
          // ------------------------------------------
  
          betoltTargy();
  
      }
  );
  
        // ==================================================
// 21. VÉGSŐ KÓD
// ==================================================

kilepBtn.addEventListener(
    "click",
    () => {

        const beirtKod =
            vegsoKodInput.value
                .trim()
                .toUpperCase();


        // ------------------------------------------
        // HELYES KÓD
        // ------------------------------------------

        if (beirtKod === teljesKod) {

            scannerLeallitasa();


            // Minden játékfelület eltüntetése
            if (jatek) {
                jatek.style.display = "none";
            }

            if (qr_karty) {
                qr_karty.style.display = "none";
            }

            if (pinKartya) {
                pinKartya.style.display = "none";
            }

            if (statusKartya) {
                statusKartya.style.display = "none";
            }

            if (vegsoKartya) {
                vegsoKartya.style.display = "none";
            }


            // ==========================================
            // KIJUTÁSI KÉPERNYŐ
            // ==========================================

            const regiGyozelem =
                document.getElementById("gyozelemKartya");

            if (regiGyozelem) {
                regiGyozelem.remove();
            }


            const gyozelem =
                document.createElement("div");

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

  
  // ==================================================
  // 22. INDULÁSI ELLENŐRZÉS
  // ==================================================
  
  console.log(
      "================================"
  );
  
  console.log(
      "Múzeumi Kalandjáték betöltve."
  );
  
  console.log(
      "Összes elérhető tárgy:",
      targyak.length
  );
  
  console.log(
      "Játékban kiválasztandó tárgyak:",
      JATEK_TARGYAK_SZAMA
  );
  
  console.log(
      "================================"
  );
