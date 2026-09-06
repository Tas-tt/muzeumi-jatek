const targyak = [
    // 1. ÚSZÓGOLYÓ
    {
        id: 1,
        tipus: "qr",
        nev: "Úszógolyó",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/uszogolyo",

        segitseg: {
            talalos:"Melyik két erő között létrejövő nyomaték fordítja vissza egyensúlyi állapotába a kibillent tárgyat?",
            kep:"images/uszogolyo.png"
        },
        quiz: {
            kerdes:"Melyik két erő között létrejövő nyomaték fordítja vissza egyensúlyi állapotába a kibillent tárgyat?",
            valaszok: [
                "Súlyerő és centrifugális erő",
                "Súrlódási és rugalmassági erő",
                "Súlyerő és felhajtóerő"
            ],
            helyesValasz: 2
        }
    },
    // 2. HENLEY-FÉLE ELEKTROMOS KISÜTŐ
    {
        id: 2,
        tipus: "qr",
        nev: "Henley-féle elektromos kisütő",
        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/henley-fele-elektromos-kisuto",
        segitseg: {
            talalos:"Mi a mai megfelelője annak az eszköznek, amelyet régen a Leideni palackokhoz hasonlóan elektromos töltés tárolására használtak?",
            kep:"images/henley.jpg"
        },
        quiz: {
            kerdes:"Mi a mai megfelelője a Leideni palacknak?",
            valaszok: [
                "Kondenzátor",
                "Ellenállás",
                "Biztosíték"
            ],
            helyesValasz: 0
        }
    },
    // 3. RUHMKORFF-FÉLE SZIKRAINDUKTOR
    {
        id: 3,
        tipus: "qr",
        nev: "Ruhmkorff-féle szikrainduktor",
        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/ruhmkorff-fele-szikrainduktor",
        segitseg: {
            talalos:"Ha a szerkezet nem indul el, melyik alkatrész finomhangolásával kelthetjük életre?",
            kep:"images/ruhmkorff.jpg"
        },
        quiz: {
            kerdes:"Ha a szerkezet nem indul el, minek a segítségével kelthetjük életre?",
            valaszok: [
                "A benne lévő méhecske felkeltésével",
                "A szaggató kalapács csavarjának finomhangolásával",
                "A primer és szekunder tekercs felcserélésével"
            ],
            helyesValasz: 1
        }
    },
    // 4. WEINHOLD-FÉLE PIEZOMÉTER
    {
        id: 4,
        tipus: "qr",
        nev: "Weinhold-féle piezométer",
        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/weinhold-fele-piezometer",
        segitseg: {
            talalos:"Egy üvegedényben egy gömb alakú belső edény látható. Milyen alakúnak látszik a gömb a víz fénytörése miatt?",
            kep:"images/weinhold.jpg"
        },
        quiz: {
            kerdes:"Milyen alakúnak látszik a gömb alakú belső edény a víz fénytörése miatt?",
            valaszok: [
                "Gömb",
                "Ellipszoid",
                "Henger"
            ],
            helyesValasz: 1
        }
    },
    // 5. HÁROMLÁBÚ RÉZTARTÁLY
    {
        id: 5,
        tipus: "qr",
        nev: "Háromlábú réztartály",
        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/haromlabu-reztartaly-es-segner-kerek",
        segitseg: {
            talalos:"A kísérleti tárgy által bemutatott jelenség mely technológiai ágnak nyújtott segítséget?",
            kep:"images/reztertaly.jpg"
        },
        quiz: {
            kerdes:"A kísérleti tárgy által bemutatott jelenség mely technológiai ágnak nyújtott segítséget?",
            valaszok: [
                "Rakétahajtóművek",
                "Elektromos gépjárművek",
                "Tengeralattjárók hajtóművei"
            ],
            helyesValasz: 0
        }
    },
    // 6. AKROMATIKUS PRIZMA
    {
        id: 6,
        tipus: "qr",
        nev: "Akromatikus prizma",
        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/akromatikus-prizma",
        segitseg: {
            talalos:"A szivárványhoz hasonlóan a fény különböző színekre bontható. Mi csökkenti a fény prizmán való áthaladásából keletkező színeltérést?",
            kep:"images/akromatikus_prizma.jpg"
        },
        quiz: {
            kerdes:"Mi csökkenti a fény prizmán való áthaladásából keletkező fényeltérést?",
            valaszok: [
                "A különböző anyagok törési tulajdonságainak kiegészítése",
                "A prizma felületének simasága",
                "A Naphoz viszonyított helyzete"
            ],
            helyesValasz: 0
        }
    },
    // 7. OPTIKAI SZEKRÉNY
    {
        id: 7,
        tipus: "qr",
        nev: "Az optikai szekrény",
        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/az-optika-szekrenyei",
        segitseg: {
            talalos:"Ebben a szekrényben található a legtöbb, fénnyel és optikával foglalkozó kísérleti eszköz. Melyik tudományterülethez kapcsolódhat?",
            kep:"images/optikai_szekreny.jpg"
        },
        quiz: {
            kerdes:"Melyik tudományterülethez kapcsolódnak elsősorban az optikai szekrényben található kísérleti eszközök?",
            valaszok: [
                "Optikához",
                "Hidraulikához",
                "Akusztikához"
            ],
            helyesValasz: 0
        }
    },
    // 8. EGYSZERŰ MIKROSZKÓP
    {
        id: 8,
        tipus: "qr",
        nev: "Egyszerű mikroszkóp",
        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/egyszeru-mikroszkop",
        segitseg: {
            talalos:"A távcső ellentéte: nem a távoli, hanem az apró dolgokat teszi láthatóvá. Miből készült a külső szerkezete?",
            kep:"images/egyszeru_mikroszkop.jpg"
        },
        quiz: {
            kerdes:"Miből áll az egyszerű mikroszkóp külső szerkezete?",
            valaszok: [
                "Kéregpapírból és fából",
                "Rozsdamentes acélból",
                "Műanyagból"
            ],
            helyesValasz: 0
        }
    },
    // 9. KALEIDOSZKÓP
    {
        id: 9,
        tipus: "qr",
        nev: "Kaleidoszkóp",
        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/kaleidoszkop",
        segitseg: {
            talalos:"A szemed előtt tekerve végtelennek tűnő színjátékot láthatsz. Ki és mikor szabadalmaztatta ezt a találmányt?",
            kep:"images/kaleidoszkop.jpg"
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
                "Ezen tárgyal madaraktól egészen a Holdakig bármit megfigyelhetünk.",

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
    },


    // ==================================================
    // 12. FONOGRÁF
    // ==================================================

    {
        id: 0,
        tipus: "qr",
        nev: "Fonográf",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/fonograf",
      
        segitseg: {
            talalos:
                "Hangokat képes rögzíteni és később vissza is játszani. Vajon melyik találmány tette lehetővé először a hang rögzítését?",

            kep:
                "images/fonograf.jpg"
        },

        quiz: {
            kerdes:
                "Ki fejlesztette ki 1877-ben a Fonográfot? ",

            valaszok: [
                "Thomas Alva Edison",
                "Nikola Tesla",
                "Alessandro Volta"
            ],

            helyesValasz: 0
        }
    },


    // ==================================================
    // 13. S GRAVESANDE-FÉLE KÉSZÜLÉK
    // ==================================================

    {
        id: 0,
        tipus: "qr",
        nev: "S. Gravesande-féle készülék",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/sgravesande-fele-keszulek",

        segitseg: {
            talalos:
                "Egy gömb és egy gyűrű segítségével mutatja meg, hogy a hő hatására megváltozhatnak a testek méretei. Melyik jelenséget szemlélteti?",

            kep:
                "images/gravesande.jpg"
        },

        quiz: {
            kerdes:
                "Az üreges testek térfogata hevitésre ...",

            valaszok: [
                "Kisutágul",
                "Lecsökken",
                "Konstans marad"
            ],

            helyesValasz: 0
        }
    },


    // ==================================================
    // 14. FARADAY-KALITKA
    // ==================================================

    {
        id: 0,
        tipus: "qr",
        nev: "A fémháló henger, azaz Faraday-kalitka",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/a-femhalo-henger-azaz-faraday-kalitka",

        segitseg: {
            talalos:
                "Fémhálóból készült burkolat, amely belsejében megvédhet az elektromos tér hatásától. Mi lehet ez?",

            kep:
                "images/faraday_kalitka.jpg"
        },

        quiz: {
            kerdes:
                "A Faraday-kalitka által létrehozó jelenséget , a mindennapokban hol érzékelhetjük?",

            valaszok: [
                "A vasbeonszerkezetek térerő takarásánál",
                "A villámbecsapodásnál",
                "A telefonok vezetéknélküli töltésénél"
            ],

            helyesValasz: 0
        }
    },


    // ==================================================
    // 15. WINTER-FÉLE DÖRZSELEKTROMOS
    // ==================================================

    {
        id: 0,
        tipus: "qr",
        nev: "Winter-féle dörzselektromos gép",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/winter-fele-dorzselektromos",

        segitseg: {
            talalos:
                "Dörzsöléssel elektromos töltést hoz létre. Vajon milyen energia segítségével kelti életre az elektromosságot?",

            kep:
                "images/winter.jpg"
        },

        quiz: {
            kerdes:
                "Az amalgánal bevont bőrpárnák milyen pólusu töltéssel rendelkeznek a korong forgatása után",

            valaszok: [
                "+",
                "-",
                "0"
            ],

            helyesValasz: 0
        }
    },


    // ==================================================
    // 16. VOLTA-FÉLE OSZLOP
    // ==================================================

    {
        id: 0,
        tipus: "qr",
        nev: "Volta-féle oszlop",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/volta-fele-oszlop",

        segitseg: {
            talalos:
                "Különböző fémlemezekből épül fel, és folyamatos elektromos áram előállítására képes. Mi volt a neve?",

            kep:
                "images/volta_oszlop.jpg"
        },

        quiz: {
            kerdes:
                "Minek nevzte találmányát Alessandro Volta ?",

            valaszok: [
                "Mesterséges lektromos szerv",
                "Termésetesen elektromos szerv",
                "Természetesen mesterséges szerv"
            ],

            helyesValasz: 0
        }
    },


    // ==================================================
    // 17. CAVENDISH-FÉLE FÉLGÖMBÖK
    // ==================================================

    {
        id: 0,
        tipus: "qr",
        nev: "Cavendish, más néven Coulomb-féle félgömbjei",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/cavendish-mas-nevem-coulomb-felgombjei",

        segitseg: {
            talalos:
                "Két félgömb alkot egy zárt testet, amely az elektromos töltések viselkedésének bemutatására szolgál. Mi történik a töltéssel a vezető felületén?",

            kep:
                "images/cavendish_felgombok.jpg"
        },

        quiz: {
            kerdes:
                "Milyen polusu a belsö, a kisérlet elején feltöltött sárgarézgömb a félgömbök eltávolitása után",

            valaszok: [
                "0",
                "+",
                "-"
            ],

            helyesValasz: 0
        }
    },


    // ==================================================
    // 18. MORSE TÁVÍRÓ CSENGŐVEL
    // ==================================================

    {
        id: 0,
        tipus: "qr",
        nev: "Morse távíró csengővel",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/morse-taviro-csengovel",

        segitseg: {
            talalos:
                "Pontok és vonalak segítségével üzeneteket továbbított nagy távolságra. Melyik kommunikációs eszközre gondolunk?",

            kep:
                "images/morse_taviro.jpg"
        },

        quiz: {
            kerdes:
                "Miért volt forradalmi találmány a morse táviró?",

            valaszok: [
                "A távolsági kommunikáció mérföldköve",
                "Vizsgákon való puskázás mekönnzitése",
                "valamii blbla"
            ],

            helyesValasz: 0
        }
    },


    // ==================================================
    // 19. GRENET-TELEP
    // ==================================================

    {
        id: 0,
        tipus: "qr",
        nev: "Grenet-telep vagy krómsavas telep",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/grenet-telep-vagy-kromsavas-telep",

        segitseg: {
            talalos:
                "Kémiai reakció segítségével képes elektromos áramot szolgáltatni. Vajon milyen típusú eszköz lehet?",

            kep:
                "images/grenet.jpg"
        },

        quiz: {
            kerdes:
                "Milyen savak vizes oldata található meg az elem celláiban?",

            valaszok: [
                "Króm s kén",
                "króm s só",
                "Salétrom s só"
            ],

            helyesValasz: 0
        }
    },


    // ==================================================
    // 20. ANALITIKAI MÉRLEG
    // ==================================================

    {
        id: 0,
        tipus: "qr",
        nev: "Analitikai mérleg",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/analitikus-merleg",

        segitseg: {
            talalos:
                "Rendkívül kis tömegek különbségét is képes kimutatni. Vajon mire használhatták egy fizikai laboratóriumban?",

            kep:
                "images/analitikai_merleg.jpg"
        },

        quiz: {
            kerdes:
                "Mire szolgál az analitikai mérleg?",

            valaszok: [
                "Nagyon pontos tömegmérésre",
                "Hőmérséklet mérésére",
                "Elektromos feszültség mérésére"
            ],

            helyesValasz: 0
        }
    },


    // ==================================================
    // 21. HÉRON LABDA
    // ==================================================

    {
        id: 0,
        tipus: "qr",
        nev: "Héron labda",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/heron-labda",

        segitseg: {
            talalos:
                "A gőz vagy a kiáramló víz ereje mozgásba hozhatja. Melyik fizikai elv mutatható be vele?",

            kep:
                "images/heron_labda.jpg"
        },

        quiz: {
            kerdes:
                "Newton melyik törvénye miadt alakit ki forgatónyomatékot a kiáramló gőz?",

            valaszok: [
                "A hatás-ellenhatás törvénye",
                "A dinamika alaptörvénye",
                "A tehetetlenség törvénye"
            ],

            helyesValasz: 0
        }
    },


    // ==================================================
    // 22. PYTHAGORAS-POHÁR
    // ==================================================

    {
        id: 0,
        tipus: "qr",
        nev: "Pythagoras, más néven Tantalus vagy bűvös pohár",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/pythagoras-mas-neven-tantalus-vagy-buvos-pohar",

        segitseg: {
            talalos:
                "Addig töltheted, amíg egyszer csak az egész tartalma eltűnik belőle. Mi okozza ezt a különös jelenséget?",

            kep:
                "images/pythagoras_pohar.jpg"
        },

        quiz: {
            kerdes:
                "Mire figyelmeztet allegorikusan a pythagoras-pohár",

            valaszok: [
                "A tulzás következményeire",
                "Az alkohol káros hatásaira",
                "A embertársakra való odafigyelés fontosságára"
            ],

            helyesValasz: 0
        }
    },


    // ==================================================
    // 23. KÉTKÖPÜS SZELEPES LÉGSZIVATTYÚ
    // ==================================================

    {
        id: 0,
        tipus: "qr",
        nev: "Kétköpüs, szelepes légszivattyú",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/ketkopus-szelepes-legszivattyu",

        segitseg: {
            talalos:
                "Levegőt távolít el egy zárt edényből, miközben a szelepek biztosítják az egyirányú áramlást. Mi lehet ez?",

            kep:
                "images/legszivattyu.jpg"
        },

        quiz: {
            kerdes:
                "Mi a köpü szó mai megfelelője?",

            valaszok: [
                "Dugattyú",
                "Kötegelő anyag",
                "mozgatható fa kar"
            ],

            helyesValasz: 0
        }
    },


    // ==================================================
    // 24. MAGDEBURGI FÉLTEKÉK
    // ==================================================

    {
        id: 0,
        tipus: "qr",
        nev: "Magdeburgi féltekék",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/magdeburgi-feltekek",

        segitseg: {
            talalos:
                "Két fém félgömböt összezárnak, majd kiszívják belőlük a levegőt. Ezután már szinte lehetetlen széthúzni őket. Miért?",

            kep:
                "images/magdeburgi_feltekek.jpg"
        },

        quiz: {
            kerdes:
                "Mi tartja össze a Magdeburgi féltekéket a levegő kiszívása után?",

            valaszok: [
                "A külső légnyomás",
                "A mágneses erő",
                "A súrlódási erő"
            ],

            helyesValasz: 0
        }
    },


    // ==================================================
    // 25. BAUMÉ-FÉLE AREOMÉTER
    // ==================================================

    {
        id: 0,
        tipus: "qr",
        nev: "Baumé-féle areométer",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/baume-fele-areometer",

        segitseg: {
            talalos:
                "Folyadékba merülve mutatja meg annak sűrűségét. Minél sűrűbb a folyadék, annál kevésbé merül el benne.",

            kep:
                "images/baume_areometer.jpg"
        },

        quiz: {
            kerdes:
                "Mit lehet meghatározni a Baumé-féle areométer segítségével?",

            valaszok: [
                "Folyadék sűrűségét",
                "Folyadékok savasságát",
                "Folyadékok soságát"
            ],

            helyesValasz: 0
        }
    },


    // ==================================================
    // 26. TOLÓMÉRCE
    // ==================================================

    {
        id: 0,
        tipus: "qr",
        nev: "Tolómérce",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/tolomerce",

        segitseg: {
            talalos:
                "Kívülről, belülről és mélységet is mérhetünk vele. Egyetlen eszközben többféle mérési lehetőség rejtőzik.",

            kep:
                "images/tolomerce.jpg"
        },

        quiz: {
            kerdes:
                "Milyen tipusu skálával látják el az ilyen precizios eszközöket?",

            valaszok: [
                "Nóniusz",
                "Diatonikus",
                "Modális"
            ],

            helyesValasz: 0
        }
    },


    // ==================================================
    // 27. A FÖLD LAPULTSÁGÁNAK ABRONCSAI
    // ==================================================

    {
        id: 0,
        tipus: "qr",
        nev: "A Föld lapultságának bemutatására szolgáló abroncsok",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/a-fold-lapultsaganak-bemutatasara-szolgalo-abroncsok",

        segitseg: {
            talalos:
                "Nem tökéletes gömböt, hanem kissé lapított alakot mutatnak be. Melyik égitest alakjának szemléltetésére szolgálnak?",

            kep:
                "images/fold_lapultsag.jpg"
        },

        quiz: {
            kerdes:
                "Milyen erő hatására alault kia aföld elipszoid , geoid alakja ?",

            valaszok: [
                "centrifugális",
                "súrdlódási",
                "gravitációs"
            ],

            helyesValasz: 0
        }
    },


    // ==================================================
    // 28. BOHNENBERGER-FÉLE GIROSZKÓP
    // ==================================================

    {
        id: 0,
        tipus: "qr",
        nev: "Bohnenberger-féle giroszkóp",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/bohnenberger-fele-giroszkop",

        segitseg: {
            talalos:
                "Gyorsan forgó része különös stabilitást mutat, és ellenáll a forgástengelye megváltoztatásának. Melyik eszköz ez?",

            kep:
                "images/bohnenberger_giroszkop.jpg"
        },

        quiz: {
            kerdes:
                "Miből készült a kisérleti eszköz forgó tömeg ként nevezett része?",

            valaszok: [
                "Elefántcsont",
                "sárgaréz",
                "Fa"
            ],

            helyesValasz: 0
        }
    },


    // ==================================================
    // 29. WATT-FÉLE GŐZGÉP CENTRIFUGA
    // ==================================================

    {
        id: 0,
        tipus: "qr",
        nev: "Watt-féle gőzgép centrifuga",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/watt-fele-gozgep-centrifuga",

        segitseg: {
            talalos:
                "Forgó golyói a sebességtől függően egyre magasabbra emelkednek, és ezáltal szabályozzák a gép működését.",

            kep:
                "images/watt_centrifuga.jpg"
        },

        quiz: {
            kerdes:
                "Mire szolgált Watt centrifugális szabályozója?",

            valaszok: [
                "A gőzgép fordulatszámának szabályozására",
                "A víz hőmérsékletének mérésére",
                "A gőzgép helyzetbeli sabilizálását"
            ],

            helyesValasz: 0
        }
    },


    // ==================================================
    // 30. HEGYNEK FUTÓ KETTŐS KÚP
    // ==================================================

    {
        id: 0,
        tipus: "qr",
        nev: "Hegynek futó kettős kúp",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/hegynek-futo-kettos-kup",

        segitseg: {
            talalos:
                "Úgy tűnik, mintha a kettős kúp felfelé gurulna a lejtőn. Vajon valóban a magasabb pontra kerül?",

            kep:
                "images/ketos_kup.jpg"
        },

        quiz: {
            kerdes:
                "Milyen viszonyba kell legyen a kúp nyilásszögének fele a lejtő hajlásszögével?",

            valaszok: [
                "nagyobb",
                "kissebb",
                "egyenlő"
            ],

            helyesValasz: 0
        }
    },


    // ==================================================
    // 31. LEJTŐ KOCSIVAL
    // ==================================================

    {
        id: 0,
        tipus: "qr",
        nev: "Lejtő kocsival",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/lejto-kocsival?",

        segitseg: {
            talalos:
                "Egy kocsi egy lejtőn gurul lefelé. Minél meredekebb a lejtő, annál nagyobb a mozgás irányába ható erő.",

            kep:
                "images/lejto_kocsival.jpg"
        },

        quiz: {
            kerdes:
                "Mi történik a lejtőn lefelé guruló kocsi gyorsulásával, ha növeljük a lejtő meredekségét?",

            valaszok: [
                "Növekszik",
                "Csökken",
                "Mindig nulla marad"
            ],

            helyesValasz: 0
        }
    },


    // ==================================================
    // 32. A SZERTÁR RENDSZEREZÉSE
    // ==================================================

    {
        id: 0,
        tipus: "qr",
        nev: "A szertár rendszerezése",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/a-szertar-rendszerezese",

        segitseg: {
            talalos:
                "Sokféle régi kísérleti eszköz található itt, amelyek nélkül a fizika tanítása nehezebb lenne. Mi a feladata ennek a helynek?",

            kep:
                "images/szertar.jpg"
        },

        quiz: {
            kerdes:
                "Miért volt fontos a fizikai szertár rendszerezése?",

            valaszok: [
                "Az eszközök könnyebb megtalálása és használata miatt",
                "Az eszközök súlyának növelése miatt",
                "Az elektromos áram előállítása miatt"
            ],

            helyesValasz: 0
        }
    },


    // ==================================================
    // 33. AZ ELEKTROMOS TÁBLA
    // ==================================================

    {
        id: 0,
        tipus: "qr",
        nev: "Az elektromos tábla",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/az-elektromos-tabla",

        segitseg: {
            talalos:
                "Régi elektromos kísérletek bemutatására szolgált. Kapcsolók, vezetékek és különböző elektromos eszközök segítették vele a tanítást.",

            kep:
                "images/elektromos_tabla.jpg"
        },

        quiz: {
            kerdes:
                "Az első bevezetett egyenáram fordulatszáma...",

            valaszok: [
                "2400 fordulat  per másodperc",
                "40 fordulat per másodperc",
                "2200 fordulat per perc"
            ],

            helyesValasz: 1
        }
    },


    // ==================================================
    // 34. KÖRMÖCZI JÁNOS FIZIKAMÚZEUM JELENE
    // ==================================================

    {
        id: 0,
        tipus: "qr",
        nev: "Körmöczi János Fizikamúzeum jelene",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/kormoczi-janos-fizikamuzeum-jelene",

        segitseg: {
            talalos:
                "Régi eszközök között jársz, de a múzeum ma is élő része az iskolának. Vajon mi tartja életben ezeket a régi fizikai emlékeket?",

            kep:
                "images/muzeum_jelene.jpg"
        },

        quiz: {
            kerdes:
                "Mi a Körmöczi János Fizikamúzeum egyik fontos feladata?",

            valaszok: [
                "A régi fizikai eszközök és tudományos örökség megőrzése",
                "Modern autók javítása",
                "Sporteszközök tárolása"
            ],

            helyesValasz: 0
        }
    },


    // ==================================================
    // 35. KÖRMÖCZI JÁNOS FIZIKAMÚZEUM TÖRTÉNETE
    // ==================================================

    {
        id: 0,
        tipus: "qr",
        nev: "Körmöczi János Fizikamúzeum története",

        qr: "https://soundcloud.com/janos-zsigmond-unitarius-kollegium/a-kormoczi-janos-fizikamuzeum-tortenete",

        segitseg: {
            talalos:
                "A régi fizikai eszközök nemcsak tárgyak, hanem egy iskola és a fizikaoktatás múltjának emlékei. Vajon mit őriz a múzeum?",

            kep:
                "images/muzeum_tortenete.jpg"
        },

        quiz: {
            kerdes:
                "Mit őriz elsősorban a Körmöczi János Fizikamúzeum?",

            valaszok: [
                "A fizikaoktatás és a fizikai kísérletezés történetének emlékeit",
                "Csak modern elektronikai eszközöket",
                "Sporttörténeti tárgyakat"
            ],

            helyesValasz: 0
        }
    }

];
const FEJLESZTOI_QR ="https://tas-tt.github.io/muzeumi-jatek/";
const JATEK_TARGYAK_SZAMA = 10;
const MENTES_KULCS ="muzeumiKalandJatek";
// 4. HTML ELEMEK
const uzi_karty =document.getElementById("uzi_karty");
const uzenet =document.getElementById("uzenet");
const qr_karty =document.getElementById("qr_karty");
const kezdo_karty =document.getElementById("kezdo_karty");
const startBtn =document.getElementById("startBtn");
const folytatasBtn =document.getElementById("folytatasBtn");
const mentesInfo =document.getElementById("mentesInfo");
const kepBtn =document.getElementById("kepBtn");
const nevBtn =document.getElementById("nevBtn");
const jatek =document.getElementById("jatek");
const talalos =document.getElementById("talalos");
const keresesiKartya =document.getElementById("keresesiKartya");
const talalosKartya =document.getElementById("talalosKartya");
const segitsegKartya =document.getElementById("segitsegKartya");
const nev =document.getElementById("nev");
const kep =document.getElementById("kep");
const cim =document.getElementById("cim");
const quiz =document.getElementById("quiz");
const kerdes =document.getElementById("kerdes");
const v1 =document.getElementById("v1");
const v2 =document.getElementById("v2");
const v3 =document.getElementById("v3");
const scanBtn =document.getElementById("scanBtn");
const video =document.getElementById("qr-reader");
const qrResult =document.getElementById("qr-result");
const soundcloudBtn =
    document.getElementById("soundcloudBtn");

const soundcloudContinueBtn =
    document.getElementById("soundcloudContinueBtn");
const gyujtottKodElem =document.getElementById("gyujtottKod");
const pontszamElem =document.getElementById("pontszam");
const statusKartya =document.getElementById("statusKartya");
const vegsoKartya =document.getElementById("vegsoKartya");
const vegsoKodInput =document.getElementById("vegsoKodInput");
const kilepBtn =document.getElementById("kilepBtn");
const vegeUzenet =document.getElementById("vegeUzenet");

const qrCim = document.getElementById("qrCim");

// 5. PIN ELEMEK
let pinKartya =document.getElementById("pinKartya");
let pinInput =document.getElementById("pinInput");
let checkPinBtn =document.getElementById("checkPinBtn");

// 6. JÁTÉK VÁLTOZÓK
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

let soundcloudMeghallgatva = false;

// 7. SEGÉDFÜGGVÉNY
// ELEMENT BIZTONSÁGOS MEGJELENÍTÉSE
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

// ============================================================
// 8. MONOKRÓM SVG IKONOK
// ============================================================

const ICON = {
    check:
        `<svg class="ikon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12.5l4 4L19 7.5"/>
        </svg>`,

    close:
        `<svg class="ikon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18"/>
        </svg>`,

    camera:
        `<svg class="ikon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 8h3l1.5-2h7L17 8h3v11H4z"/>
            <circle cx="12" cy="13" r="3.5"/>
        </svg>`,

    key:
        `<svg class="ikon" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="8" cy="15" r="4"/>
            <path d="M11 12l8-8M16 7l2 2M14 9l2 2"/>
        </svg>`,

    hint:
        `<svg class="ikon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 18h6M10 21h4"/>
            <path d="M8.5 14.5A6 6 0 1 1 15.5 14c-.9.8-1.5 1.7-1.5 3H10c0-1.2-.6-2.1-1.5-2.5z"/>
        </svg>`,

    eye:
        `<svg class="ikon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"/>
            <circle cx="12" cy="12" r="2.5"/>
        </svg>`,

    user:
        `<svg class="ikon" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="8" r="4"/>
            <path d="M4 21c.8-4 3.4-6 8-6s7.2 2 8 6"/>
        </svg>`,

    code:
        `<svg class="ikon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 7L4 12l5 5M15 7l5 5-5 5"/>
        </svg>`,
    
    trophy: `
    <svg class="ikon trophy-icon"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         stroke-width="1.8"
         stroke-linecap="round"
         stroke-linejoin="round"
         aria-hidden="true">
    
        <path d="M8 4h8v5a5 5 0 0 1-8 0V4Z"/>
        <path d="M8 6H5a3 3 0 0 0 3 4"/>
        <path d="M16 6h3a3 3 0 0 1-3 4"/>
        <path d="M10 14h4"/>
        <path d="M12 14v4"/>
        <path d="M8 20h8"/>
        <path d="M9 18h6"/>
    </svg>
    `,

    unlock:
        `<svg class="ikon" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="5" y="10" width="14" height="10" rx="1.5"/>
            <path d="M8 10V7a4 4 0 0 1 7.7-1.5"/>
        </svg>`,

    save:
        `<svg class="ikon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 4h12l2 2v14H5z"/>
            <path d="M8 4v6h8V4M8 20v-6h8v6"/>
        </svg>`,

    trash:
        `<svg class="ikon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 7h14M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5"/>
        </svg>`,

    dice:
        `<svg class="ikon" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="4" y="4" width="16" height="16" rx="2"/>
            <circle cx="8" cy="8" r="1"/>
            <circle cx="16" cy="16" r="1"/>
            <circle cx="12" cy="12" r="1"/>
        </svg>`,

    lock:
        `<svg class="ikon" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="5" y="10" width="14" height="10" rx="1.5"/>
            <path d="M8 10V7a4 4 0 0 1 8 0v3"/>
        </svg>`,

    box:
        `<svg class="ikon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 7l8-3 8 3-8 3zM4 7v10l8 3 8-3V7M12 10v10"/>
        </svg>`,

    number:
        `<svg class="ikon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 4L7 20M17 4l-2 16M4 9h17M3 15h17"/>
        </svg>`,

    tools:
        `<svg class="ikon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14 6a4 4 0 0 0-5 5L4 16l4 4 5-5a4 4 0 0 0 5-5l-3 3-3-3z"/>
        </svg>`,

    refresh:
        `<svg class="ikon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 11a8 8 0 0 0-14.5-4L4 9M4 5v4h4M4 13a8 8 0 0 0 14.5 4L20 15M20 19v-4h-4"/>
        </svg>`,

    play:
        `<svg class="ikon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5l11 7-11 7z"/>
        </svg>`,

    game:
        `<svg class="ikon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 9h10a4 4 0 0 1 3.7 5.5l-1.2 3A2 2 0 0 1 16 18l-2.2-2H10.2L8 18a2 2 0 0 1-3.5-.5l-1.2-3A4 4 0 0 1 7 9z"/>
            <path d="M7 12v4M5 14h4M16 13h.01M19 15h.01"/>
        </svg>`
};

// ============================================================
// EMOJI → MONOKRÓM IKON
// ============================================================

function ikonosSzoveg(szoveg) {
    if (!szoveg) {
        return "";
    }

    const szovegString = String(szoveg);

    const ikonok = [
        ["✅", ICON.check],
        ["❌", ICON.close],
        ["📷", ICON.camera],
        ["🔢", ICON.number],
        ["🔑", ICON.key],
        ["🔐", ICON.lock],
        ["💡", ICON.hint],
        ["👁️", ICON.eye],
        ["👤", ICON.user],
        ["🎉", ICON.trophy],
        ["🔓", ICON.unlock],
        ["💾", ICON.save],
        ["🗑️", ICON.trash],
        ["🎲", ICON.dice],
        ["📦", ICON.box],
        ["🛠️", ICON.tools],
        ["🔄", ICON.refresh],
        ["▶️", ICON.play],
        ["🎮", ICON.game]
    ];

    for (const [emoji, ikon] of ikonok) {
        if (szovegString.startsWith(emoji)) {
            const tisztaSzoveg =
                szovegString
                    .slice(emoji.length)
                    .trim();

            return `${ikon}<span>${tisztazottHTML(tisztaSzoveg)}</span>`;
        }
    }

    return tisztazottHTML(szovegString);
}

// Egyszerű HTML-biztonságos szövegkezelés
function tisztazottHTML(szoveg) {
    const div = document.createElement("div");
    div.textContent = String(szoveg);
    return div.innerHTML;
}

// Elem szövege + ikon
function setIconText(elem, szoveg) {
    if (!elem) {
        return;
    }

    elem.innerHTML =
        ikonosSzoveg(szoveg);
}

// 8. ÜZENET
function showMessage(szoveg) {
    if (!uzi_karty || !uzenet) {
        return;
    }

    uzenet.innerHTML =
        ikonosSzoveg(szoveg);

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

// 9. QR KÁRTYA
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

// 10. SCANNER LEÁLLÍTÁSA
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

// 11. MENTETT JÁTÉK ELLENŐRZÉSE
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

// 12. KEZDŐKÉPERNYŐ FRISSÍTÉSE
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
        startBtn.innerHTML =
            `${ICON.play}<span>Új játék</span>`;
    }
}

// 13. JÁTÉK MENTÉSE
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

// 14. JÁTÉK BETÖLTÉSE
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

        // TÁRGYAK
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
                .map(
                    id =>
                        targyak.find(
                            targy =>
                                targy.id === id
                        )
                )
                .filter(Boolean);

        // ALAP ADATOK
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

        // SEGÍTSÉGEK
        kepHasznalva =
            Boolean(
                mentes.kepHasznalva
            );

        nevHasznalva =
            Boolean(
                mentes.nevHasznalva
            );

        // ROSSZ VÁLASZOK
        rosszQuizValaszok =
            Array.isArray(
                mentes.rosszQuizValaszok
            )
                ? mentes.rosszQuizValaszok
                : [];

        // MENTÉS ELLENŐRZÉSE
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

        // HA A JÁTÉK MÁR A VÉGÉN VAN
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

// 15. JÁTÉK TÖRLÉSE
function jatekTorlese() {
    localStorage.removeItem(
        MENTES_KULCS
    );

    console.log(
        "🗑️ Mentett játék törölve."
    );

    kezdokepernyoFrissitese();
}

// 16. RANDOM 10 TÁRGY
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

// 17. VÉGSŐ KÓD GENERÁLÁSA
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

// 18. QUIZ INDÍTÁSA
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

        v1.disabled =
            false;

        v1.classList.remove(
            "rosszValasz"
        );
    }

    if (v2) {
        v2.textContent =
            quizAdat.valaszok[1];

        v2.disabled =
            false;

        v2.classList.remove(
            "rosszValasz"
        );
    }

    if (v3) {
        v3.textContent =
            quizAdat.valaszok[2];

        v3.disabled =
            false;

        v3.classList.remove(
            "rosszValasz"
        );
    }

    // új tárgyhoz újraindul a hibás
    // válaszok listája
    rosszQuizValaszok = [];
}

// ============================================================
// SOUNDCLOUD MEGNYITÁSA
// ============================================================

function soundcloudMegnyitasa() {
    if (!aktualisTargy) {
        return;
    }

    const soundcloudLink =
        aktualisTargy
            .feladat?.qr ||
        aktualisTargy.qr;

    if (!soundcloudLink) {
        showMessage(
            "❌ Ehhez a tárgyhoz nincs SoundCloud-link!"
        );

        return;
    }

    window.open(
        soundcloudLink,
        "_blank"
    );

    soundcloudMeghallgatva = true;

    if (soundcloudContinueBtn) {
        soundcloudContinueBtn.disabled = false;
    }
}

// 19. SIKERES TÁRGY
function qrSikeresTargy() {

    scannerLeallitasa();

    // KERESÉSI RÉSZ ELTÜNTETÉSE
    elrejt(keresesiKartya);
    elrejt(segitsegKartya);
    elrejt(talalosKartya);

    // KÉP TÖRLÉSE
    if (kep) {
        kep.style.display = "none";
        kep.src = "";
    }

    // NÉV TÖRLÉSE
    if (nev) {
        nev.textContent = "";
    }

        // TELJES QR-BEOLVASÓ RÉSZ ELREJTÉSE
    if (scanBtn) {
        scanBtn.style.display = "none";
    }

    if (qrCim) {
    qrCim.style.display = "none";
    }
    
    const qrBox =
        document.querySelector(".qr-box");
    
    if (qrBox) {
        qrBox.style.display = "none";
    }
    
    if (qrResult) {
        qrResult.style.display = "none";
    }

    // PIN ELTÜNTETÉSE
    elrejt(pinKartya);

    if (pinInput) {
        pinInput.value = "";
    }
  
    // SOUNDCLOUD ÁLLAPOT
    soundcloudMeghallgatva = false;
    
    // SOUNDCLOUD GOMB
    if (soundcloudBtn) {
        soundcloudBtn.style.display = "flex";
    }
    
    // TOVÁBB GOMB
    if (soundcloudContinueBtn) {
        soundcloudContinueBtn.style.display = "flex";
        soundcloudContinueBtn.disabled = true;
    }

    // ÜZENET
    showMessage(
        "✅ Helyes! Tárgy megtalálva!"
    );

    // MENTÉS
    jatekMentese();
}

// 20. TÁRGY BETÖLTÉSE
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

    if (soundcloudBtn) {
        soundcloudBtn.style.display = "none";
    }
    
    if (soundcloudContinueBtn) {
        soundcloudContinueBtn.style.display = "none";
    }

    soundcloudMeghallgatva = false;

    if (soundcloudContinueBtn) {
        soundcloudContinueBtn.disabled = true;
    }
  
    if (scanBtn) {
        scanBtn.style.display = "flex";
    }
    
    if (qrCim) {
        qrCim.style.display = "block";
    }
    
    if (qrResult) {
        qrResult.style.display = "block";
        qrResult.textContent = "";
    }

    const qrBox =
    document.querySelector(".qr-box");

    if (qrBox) {
        qrBox.style.display = "";
    }

    // FELÜLETEK
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

    // AKTUÁLIS TÁRGY
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

    // TALÁLÓS KÉRDÉS
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

    // SEGÍTSÉGEK
    kepHasznalva =
        false;

    nevHasznalva =
        false;

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

    // PIN RESET
    if (pinInput) {
        pinInput.value =
            "";
    }

    // QR RESULT RESET
    if (qrResult) {
        qrResult.textContent =
            "";
    }

    // TÍPUS
    let tipus =
        aktualisTargy.tipus;

    if (!tipus) {
        const vanQR =
            aktualisTargy
                .feladat?.qr ||
            aktualisTargy.qr;

        if (vanQR) {
            tipus =
                "qr";
        }
        else {
            tipus =
                "pin";
        }
    }

    // QR
    if (tipus === "qr") {
        qrMutat();

        console.log(
            "📷 QR mód aktiválva."
        );
    }

    // PIN
    else if (tipus === "pin") {
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

// 21. PIN ELLENŐRZÉS
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

// ============================================================
// SOUNDCLOUD GOMB
// ============================================================
if (soundcloudBtn) {
    soundcloudBtn.addEventListener(
        "click",
        () => {

            if (!aktualisTargy) {
                return;
            }

            const soundcloudLink =
                aktualisTargy
                    .feladat?.qr ||
                aktualisTargy.qr;

            if (!soundcloudLink) {
                showMessage(
                    "❌ Ehhez a tárgyhoz nincs SoundCloud-link!"
                );
                return;
            }

            window.open(
                soundcloudLink,
                "_blank"
            );

            soundcloudMeghallgatva = true;

            if (soundcloudContinueBtn) {
                soundcloudContinueBtn.disabled = false;
            }
        }
    );
}

if (soundcloudContinueBtn) {
    soundcloudContinueBtn.addEventListener(
        "click",
        () => {

            if (!soundcloudMeghallgatva) {
                return;
            }

            soundcloudBtn.style.display =
                "none";

            soundcloudContinueBtn.style.display =
                "none";

            quizInditasa();
        }
    );
}

// 22. KÉP SEGÍTSÉG
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

            pontszam -=
                2.5;

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

// 23. NÉV SEGÍTSÉG
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

            pontszam -=
                2.5;

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

// 24. QUIZ VÁLASZ
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

    const gombok =
        [v1, v2, v3];

    const megnyomottGomb =
        gombok[index];

    if (!megnyomottGomb) {
        return;
    }

    // UGYANAZT A ROSSZ VÁLASZT NE LEHESSEN
    // ÚJRA MEGNYOMNI
    if (
        rosszQuizValaszok.includes(
            index
        )
    ) {
        return;
    }

    // HELYES VÁLASZ
    if (
        index ===
        quizAdat.helyesValasz
    ) {
        pontszam +=
            10;

        if (pontszamElem) {
            pontszamElem.textContent =
                pontszam;
        }

        // KÓDRÉSZLET
        const megszerzettKarakter =
            teljesKod[
                aktualisIndex
            ];

        if (megszerzettKarakter) {
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

        // QUIZ ELTÜNTETÉSE
        elrejt(
            quiz
        );

        megnyomottGomb.disabled =
            true;

        // KÖVETKEZŐ TÁRGY
        aktualisIndex++;

        // VÉGE?
        if (
            aktualisIndex >=
            jatekTargyak.length
        ) {
            jatekMentese();
        
            scannerLeallitasa();
        
            setTimeout(
                () => {
        
                    qrEltuntet();
        
                    elrejt(
                        pinKartya
                    );
        
                    // A STÁTUSZKÁRTYA MARAD
                    megjelenit(
                        statusKartya,
                        "flex"
                    );
        
                    // VÉGSŐ KÓD KÁRTYA
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

        // MENTÉS
        jatekMentese();

        showMessage(
            "✅ Helyes válasz! +10 pont"
        );

        // KÖVETKEZŐ TÁRGY
        setTimeout(
            () => {
                betoltTargy();
            },
            2000
        );
    }

    // ROSSZ VÁLASZ
    else {
        rosszQuizValaszok.push(
            index
        );

        // -1 pont
        pontszam -=
            1;

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

// 25. QUIZ GOMBOK
if (v1) {
    v1.addEventListener(
        "click",
        () => {
            ellenorizValasz(
                0
            );
        }
    );
}

if (v2) {
    v2.addEventListener(
        "click",
        () => {
            ellenorizValasz(
                1
            );
        }
    );
}

if (v3) {
    v3.addEventListener(
        "click",
        () => {
            ellenorizValasz(
                2
            );
        }
    );
}

// 26. QR NORMALIZÁLÁS
function normalizalQR(qr) {
    return String(qr)
        .trim()
        .replace(
            /\/$/,
            ""
        );
}

// 27. QR ELLENŐRZÉS
function onScanSuccess(
    decodedText
) {
    if (!aktualisTargy) {
        showMessage(
            "❌ Nincs aktív tárgy!"
        );

        return;
    }

    // QR NORMALIZÁLÁS
    const beolvasottQR =
        normalizalQR(
            decodedText
        );

    const fejlesztoiQR =
        normalizalQR(
            FEJLESZTOI_QR
        );

    // 🛠️ FEJLESZTŐI QR
    if (
        beolvasottQR ===
        fejlesztoiQR
    ) {
        console.log(
            "🛠️ FEJLESZTŐI QR:",
            aktualisTargy.nev
        );

        if (qrResult) {
            setIconText(
                qrResult,
                "🛠️ Fejlesztői QR – tárgy elfogadva!"
            );
        }

        soundcloudMeghallgatva = true;

        qrSikeresTargy();

        return;
    }

    // QR / PIN ELLENŐRZÉS
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

    // HIBÁS QR
    if (
        beolvasottQR !==
        normalQR
    ) {
        if (qrResult) {
            setIconText(
                qrResult,
                "❌ Nem ez a keresett tárgy!"
            );
        }

        showMessage(
            "❌ Ez nem a keresett tárgy QR-kódja!"
        );

        return;
    }

    // HELYES QR
    if (qrResult) {
        setIconText(
            qrResult,
            "✅ Helyes QR-kód!"
        );
    }

    qrSikeresTargy();
}

// 28. QR SCANNER INDÍTÁSA
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

            // QR LIBRARY
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
                setIconText(
                    qrResult,
                    "📷 Kamera indítása..."
                );
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
                    setIconText(
                        qrResult,
                        "📷 Keresés..."
                    );
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
                    setIconText(
                        qrResult,
                        "❌ A kamera nem indítható."
                    );
                }

                showMessage(
                    "❌ A kamera nem indítható!"
                );
            }
        }
    );
}

// 29. JÁTÉK FELÜLET ELŐKÉSZÍTÉSE
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

// 30. ÚJ JÁTÉK INDÍTÁSA
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

    // SCANNER
    scannerLeallitasa();

    // RÉGI MENTÉS TÖRLÉSE
    localStorage.removeItem(
        MENTES_KULCS
    );

    // ALAPÁLLAPOT
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

    // ÚJ RANDOM TÁRGYAK
    randomJatekTargyak();

    // ÚJ VÉGSŐ KÓD
    generalKod();

    // FELÜLETEK
    jatekFeluletekMegjelenitese();

    // PONTSZÁM
    if (pontszamElem) {
        pontszamElem.textContent =
            pontszam;
    }

    // KÓD
    if (gyujtottKodElem) {
        gyujtottKodElem.textContent =
            "";
    }

    // VÉGSŐ INPUT
    if (vegsoKodInput) {
        vegsoKodInput.value =
            "";
    }

    // ELSŐ TÁRGY
    betoltTargy();

    // AZONNALI MENTÉS
    jatekMentese();

    kezdokepernyoFrissitese();
}

// 31. MENTETT JÁTÉK FOLYTATÁSA
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

    // FELÜLETEK
    jatekFeluletekMegjelenitese();

    // STÁTUSZ
    if (pontszamElem) {
        pontszamElem.textContent =
            pontszam;
    }

    if (gyujtottKodElem) {
        gyujtottKodElem.textContent =
            gyujtottKod;
    }

    // VÉGSŐ KÓD INPUT RESET
    if (vegsoKodInput) {
        vegsoKodInput.value =
            "";
    }

    // AKTUÁLIS TÁRGY
    betoltTargy();

    showMessage(
        "🔄 Játék folytatva!"
    );
}

// 32. ÚJ JÁTÉK GOMB
if (startBtn) {
    startBtn.addEventListener(
        "click",
        () => {
            ujJatekInditasa();
        }
    );
}

// 33. FOLYTATÁS GOMB
if (folytatasBtn) {
    folytatasBtn.addEventListener(
        "click",
        () => {
            jatekFolytatasa();
        }
    );
}

// 34. VÉGSŐ KÓD ELLENŐRZÉSE
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

            // HELYES KÓD
            if (
                beirtKod ===
                teljesKod
            ) {
                console.log(
                    "🎉 SIKERES KIJUTÁS!"
                );

                // MENTÉS TÖRLÉSE
                jatekTorlese();

                scannerLeallitasa();

                // JÁTÉK FELÜLETEK
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

                // RÉGI GYŐZELEM KÁRTYA TÖRLÉSE
                const regiGyozelem =
                    document.getElementById(
                        "gyozelemKartya"
                    );

                if (regiGyozelem) {
                    regiGyozelem.remove();
                }

                // GYŐZELEM
                const gyozelem =
                    document.createElement(
                        "div"
                    );

                gyozelem.id =
                    "gyozelemKartya";

                gyozelem.innerHTML = `
                    <div class="gyozelem-tartalom">
                        <div class="gyozelem-ikon">
                            ${ICON.trophy}
                        </div>

                        <h1>
                            GRATULÁLUNK!
                        </h1>

                        <p>
                            Sikeresen teljesítetted
                            a múzeumi kalandjátékot!
                        </p>

                        <h2>
                            ${ICON.unlock}
                            KIJUTOTTÁL!
                        </h2>

                        <div class="vegso-pontszam">
                            <strong>
                                ${pontszam} pont
                            </strong>
                        </div>
                    </div>
                `;

                document.body.appendChild(
                    gyozelem
                );

                // KEZDŐKÉPERNYŐ FOLYTATÁS NÉLKÜL
                setTimeout(
                    () => {
                        kezdokepernyoFrissitese();
                    },
                    100
                );
            }

            // HELYTELEN KÓD
            else {
                if (vegeUzenet) {
                    setIconText(
                        vegeUzenet,
                        "❌ Hibás kijutási kód!"
                    );

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

// 35. ENTER A VÉGSŐ KÓDNÁL
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

// 36. ENTER A PIN-NÉL
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

// 37. OLDAL INDULÁSA
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

    // KEZDŐKÉPERNYŐ
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

    // MENTÉS ELLENŐRZÉSE
    kezdokepernyoFrissitese();

    console.log(
        "Van mentett játék:",
        vanMentettJatek()
    );

    console.log(
        "================================"
    );
}

// 38. INDÍTÁS
oldalInditasa();
