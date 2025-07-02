const quizDataFromFile = [
  {
    "question": "journey,&nbsp;access road",
    "correct": "der Anfahrtsweg",
    "choices": [
      "der Tumor",
      "der Anfahrtsweg",
      "der Meinungsbeitrag",
      "der Vegetarier"
    ]
  },
  {
    "question": "mandatory",
    "correct": "zwingend",
    "choices": [
      "der Flirt",
      "kinderlos",
      "zwingend",
      "ganz von vorne"
    ]
  },
  {
    "question": "densely wooded",
    "correct": "waldreich",
    "choices": [
      "waldreich",
      "der Organismus",
      "die Chirurgin",
      "das Wildtier"
    ]
  },
  {
    "question": "woodland",
    "correct": "das Waldgebiet&nbsp;",
    "choices": [
      "es liegt nahe, dass",
      "der Zuname",
      "das Waldgebiet&nbsp;",
      "herabgesetzt"
    ]
  },
  {
    "question": "agriculture",
    "correct": "der Ackerbau",
    "choices": [
      "verführen",
      "unterschöpflich",
      "zweitrangig",
      "der Ackerbau"
    ]
  },
  {
    "question": "literature",
    "correct": "die Literatur",
    "choices": [
      "der Kardiologe",
      "die Literatur",
      "bestens",
      "das Anschreiben"
    ]
  },
  {
    "question": "folk song",
    "correct": "das Volkslied",
    "choices": [
      "der Bachelor",
      "das Volkslied",
      "um Futter betteln&nbsp;",
      "das Kulturgut"
    ]
  },
  {
    "question": "in these parts",
    "correct": "hierzulande",
    "choices": [
      "hierzulande",
      "der Full-Time-Job",
      "entzündet",
      "erneuerbar"
    ]
  },
  {
    "question": "nature trail",
    "correct": "der Waldlehrpfad&nbsp;",
    "choices": [
      "der Waldlehrpfad&nbsp;",
      "die Modeboutique",
      "der Trödelmarkt",
      "einwandfrei"
    ]
  },
  {
    "question": "oak tree",
    "correct": "die Eiche&nbsp;",
    "choices": [
      "die Eiche&nbsp;",
      "der Betreuer",
      "die Kohlenhydrate",
      "Ausnahmen gelten"
    ]
  },
  {
    "question": "birch tree",
    "correct": "die Birke",
    "choices": [
      "anweisen",
      "ein Gesetz verabschieden",
      "familiär",
      "die Birke"
    ]
  },
  {
    "question": "linden tree, lime tree",
    "correct": "die Linde",
    "choices": [
      "äußerer, äußere, äußeres",
      "die Linde",
      "der Instanz",
      "die Instandhaltung"
    ]
  },
  {
    "question": "chestnut tree",
    "correct": "die Kastanie",
    "choices": [
      "der Hirsch",
      "der Buchhandel",
      "quengeln",
      "die Kastanie"
    ]
  },
  {
    "question": "pine tree",
    "correct": "die Kiefer&nbsp;",
    "choices": [
      "die Kiefer&nbsp;",
      "die Straßenverkehrsordnung",
      "visuell",
      "das Kulturgut"
    ]
  },
  {
    "question": "fir tree",
    "correct": "die Tanne",
    "choices": [
      "einschlägig",
      "das Schnäppchen",
      "die Tanne",
      "vorbestraft sein"
    ]
  },
  {
    "question": "larch tree",
    "correct": "die Lärche",
    "choices": [
      "das Gulasch",
      "die Blähung&nbsp;",
      "die Lärche",
      "der Greis"
    ]
  },
  {
    "question": "whale&nbsp;",
    "correct": "der Wal",
    "choices": [
      "die Einkommenssteuer",
      "das Einstechen",
      "langfristig",
      "der Wal"
    ]
  },
  {
    "question": "deer&nbsp;",
    "correct": "das Reh &nbsp;",
    "choices": [
      "uneingeschränkt",
      "jemanden abblitzen lassen",
      "das Reh &nbsp;",
      "lebenslänglich"
    ]
  },
  {
    "question": "deer&nbsp;",
    "correct": "der Hirsch",
    "choices": [
      "petzen",
      "der Speisesaal",
      "der Hirsch",
      "die Naturkatastrophe"
    ]
  },
  {
    "question": "blackberry",
    "correct": "die Brombeere",
    "choices": [
      "der Meinungsbeitrag",
      "die Anbindung&nbsp;",
      "der Untermieter",
      "die Brombeere"
    ]
  },
  {
    "question": "dog rose",
    "correct": "die Hagebutte&nbsp;",
    "choices": [
      "die Kiefer&nbsp;",
      "die Hagebutte&nbsp;",
      "die Verteidigung",
      "vergiften"
    ]
  },
  {
    "question": "to jog",
    "correct": "joggen",
    "choices": [
      "unbestritten",
      "leger",
      "das&nbsp;Arbeitszeitmodell",
      "joggen"
    ]
  },
  {
    "question": "forest",
    "correct": "der Forst&nbsp;",
    "choices": [
      "das Millionengeschäft",
      "der Abschluß",
      "die Herz-Kreislauf-Erkrankung",
      "der Forst&nbsp;"
    ]
  },
  {
    "question": "mixed forest",
    "correct": "der Mischwald",
    "choices": [
      "das Kotelett",
      "der Polterabend",
      "problemlos",
      "der Mischwald"
    ]
  },
  {
    "question": "rain forest&nbsp;",
    "correct": "der Regenwald",
    "choices": [
      "der Regenwald",
      "vor sich hin&nbsp;",
      "einschlägig",
      "unabhängig"
    ]
  },
  {
    "question": "forest piece",
    "correct": "das Waldstück",
    "choices": [
      "das Waldstück",
      "der Freispruch",
      "Kraft schöpfen",
      "hingegen"
    ]
  },
  {
    "question": "forest warden",
    "correct": "der Förster",
    "choices": [
      "der Förster",
      "eine allergische Reaktion auslösen",
      "die Konzentrationsfähigkeit",
      "joggen"
    ]
  },
  {
    "question": "farmed",
    "correct": "bewirtschaftet",
    "choices": [
      "die Machtaufteilung",
      "die Narbe",
      "die Gebirgskette&nbsp;",
      "bewirtschaftet"
    ]
  },
  {
    "question": "to envenom,&nbsp;poison&nbsp;",
    "correct": "vergiften",
    "choices": [
      "vergiften",
      "eine Verlobung aufheben",
      "der Schmetterling&nbsp;",
      "zetern"
    ]
  },
  {
    "question": "to detox",
    "correct": "entgiften",
    "choices": [
      "um Futter betteln&nbsp;",
      "entgiften",
      "das Rudern&nbsp;",
      "eine allergische Reaktion auslösen"
    ]
  },
  {
    "question": "boundless",
    "correct": "grenzenlos",
    "choices": [
      "Maßnahmen ergreifen",
      "das Fischstäbchen",
      "hin- und herlaufen",
      "grenzenlos"
    ]
  },
  {
    "question": "wildlife park",
    "correct": "der Wildnispark",
    "choices": [
      "der Wildnispark",
      "der Umzugskarton",
      "zugutekommen",
      "bedeutungslos"
    ]
  },
  {
    "question": "heather",
    "correct": "das Heidekraut",
    "choices": [
      "dicht (bei)",
      "nach Einschätzung",
      "das Schläfchen",
      "das Heidekraut"
    ]
  },
  {
    "question": "dolomite",
    "correct": "der Dolomit&nbsp;",
    "choices": [
      "der Dolomit&nbsp;",
      "das Halstuch",
      "teilhaben",
      "das Antibiotikum"
    ]
  },
  {
    "question": "meadow,&nbsp;wetland",
    "correct": "die Aue",
    "choices": [
      "eine Steuerschuld begleichen",
      "die Vereinbarkeit",
      "eine Fernbeziehung führen",
      "die Aue"
    ]
  },
  {
    "question": "mountain chain",
    "correct": "die Gebirgskette&nbsp;",
    "choices": [
      "die Gebirgskette&nbsp;",
      "die Windkraft",
      "die Betriebswirtschaftslehre",
      "der Naturpark"
    ]
  },
  {
    "question": "unspoilt&nbsp;",
    "correct": "unverbaut",
    "choices": [
      "pflanzlich",
      "unverbaut",
      "der Lebensgefährte",
      "die Verpflegung"
    ]
  },
  {
    "question": "stream landscape",
    "correct": "die Flusslandschaft&nbsp;",
    "choices": [
      "wild",
      "die Flusslandschaft&nbsp;",
      "versäumen&nbsp;",
      "die Eiche&nbsp;"
    ]
  },
  {
    "question": "to convert&nbsp;",
    "correct": "umwandeln",
    "choices": [
      "eine Bearbeitungsgebühr entrichten",
      "unter Umständen",
      "umwandeln",
      "die Pflegebedürftigkeit&nbsp;"
    ]
  },
  {
    "question": "wind mill",
    "correct": "die Windmühle",
    "choices": [
      "die Windmühle",
      "ein Bußgeld verhängen",
      "erreichbar",
      "beanstanden"
    ]
  },
  {
    "question": "wind power",
    "correct": "die Windkraft",
    "choices": [
      "geschätzt",
      "die Untermiete",
      "in Konkurs gehen",
      "die Windkraft"
    ]
  },
  {
    "question": "biomass",
    "correct": "die Biomasse",
    "choices": [
      "die Biomasse",
      "befehlen",
      "überanstrengen",
      "die Höhenmeter"
    ]
  },
  {
    "question": "Earth's surface",
    "correct": "die Erdoberfläche",
    "choices": [
      "die Erdoberfläche",
      "vorzeitig",
      "zu Haft verurteilen",
      "die Salami"
    ]
  },
  {
    "question": "fuel production",
    "correct": "die Treibstoffgewinnung",
    "choices": [
      "anschwindeln",
      "die Treibstoffgewinnung",
      "der Radiologe",
      "eine Infusion legen"
    ]
  },
  {
    "question": "volcanic eruption",
    "correct": "der Vulkanausbruch&nbsp;",
    "choices": [
      "der Vulkanausbruch&nbsp;",
      "der Tsunami&nbsp;",
      "die Abenteuerreise",
      "problematisch"
    ]
  },
  {
    "question": "hurricane&nbsp;",
    "correct": "der Orkan&nbsp;",
    "choices": [
      "heucheln",
      "der Orkan&nbsp;",
      "der Heimatort",
      "die Fahrzeit"
    ]
  },
  {
    "question": "avalanche",
    "correct": "die Schneelawine",
    "choices": [
      "waldreich",
      "die Schneelawine",
      "finanzschwach",
      "phänomenal"
    ]
  },
  {
    "question": "tsunami&nbsp;",
    "correct": "der Tsunami&nbsp;",
    "choices": [
      "zwangsläufig",
      "der Tsunami&nbsp;",
      "überflüssig",
      "die Wellnessreise"
    ]
  },
  {
    "question": "seaquake",
    "correct": "das Seebeben&nbsp;",
    "choices": [
      "hingegen",
      "der Waldlehrpfad&nbsp;",
      "der Heiratskandidat",
      "das Seebeben&nbsp;"
    ]
  },
  {
    "question": "tidal wave&nbsp;",
    "correct": "die Flutwelle&nbsp;",
    "choices": [
      "die Stoßzeit",
      "die Knigge-Regeln",
      "die Nachhaltigkeit",
      "die Flutwelle&nbsp;"
    ]
  },
  {
    "question": "to escape&nbsp;",
    "correct": "austreten",
    "choices": [
      "die Brombeere",
      "der Rekord&nbsp;",
      "der Weitsprung&nbsp;",
      "austreten"
    ]
  },
  {
    "question": "eruption",
    "correct": "die Eruption",
    "choices": [
      "die Eruption",
      "die Dosierung",
      "das Tagebuch",
      "einen Rückfall erleiden"
    ]
  },
  {
    "question": "subtropical",
    "correct": "subtropisch",
    "choices": [
      "subtropisch",
      "der Lernstoff",
      "abwohnen",
      "schiefgehen"
    ]
  },
  {
    "question": "aridity,&nbsp;drought",
    "correct": "die Trockenheit",
    "choices": [
      "die Trockenheit",
      "zum Erfolg führen",
      "Arbeit auf Abruf",
      "der Nebenjob"
    ]
  },
  {
    "question": "water shortage",
    "correct": "der Wassermangel",
    "choices": [
      "eingliedern&nbsp;",
      "der Wassermangel",
      "unterteilen",
      "in den Mittelpunkt stellen"
    ]
  },
  {
    "question": "flooding,&nbsp;overflow",
    "correct": "die Überflutung",
    "choices": [
      "einen Eindruck hinterlassen",
      "bedeutsam",
      "vermeintlich",
      "die Überflutung"
    ]
  },
  {
    "question": "whirlwind,&nbsp;cyclone",
    "correct": "der Wirbelsturm&nbsp;",
    "choices": [
      "der Wirbelsturm&nbsp;",
      "die Ablenkung",
      "die Leistungsgrenze",
      "erreichbar"
    ]
  },
  {
    "question": "to be omitted",
    "correct": "wegfallen",
    "choices": [
      "auskurieren",
      "das Müsli&nbsp;",
      "wegfallen",
      "die Massentierhaltung"
    ]
  },
  {
    "question": "without restraint&nbsp;",
    "correct": "ungehemmt",
    "choices": [
      "das Heidekraut",
      "der Schichtdienst",
      "vorherig",
      "ungehemmt"
    ]
  },
  {
    "question": "future&nbsp;",
    "correct": "zukünftig",
    "choices": [
      "zukünftig",
      "auf Lebenszeit",
      "die Benutzung",
      "die Verkupplung"
    ]
  },
  {
    "question": "recreational activities",
    "correct": "die Freizeitgestaltung",
    "choices": [
      "die Freizeitgestaltung",
      "kommunizieren",
      "die Unterkunft&nbsp;",
      "die Überschwemmung"
    ]
  },
  {
    "question": "defraudation of the revenue",
    "correct": "die Steuerhinterziehung",
    "choices": [
      "die Premiere",
      "die Steuerhinterziehung",
      "der Konkurrent&nbsp;",
      "der Regenwald"
    ]
  },
  {
    "question": "attitude to taxation",
    "correct": "die Steuermoral",
    "choices": [
      "die Heilmethode",
      "die Steuermoral",
      "die Spezialität",
      "abwarten"
    ]
  },
  {
    "question": "delinquent taxpayer",
    "correct": "säumiger Steuerzahler",
    "choices": [
      "der Polterabend",
      "die körpereigenen Abwehrkräfte",
      "sich im Klaren darüber sein",
      "säumiger Steuerzahler"
    ]
  },
  {
    "question": "avoid tax revenue",
    "correct": "Steuereinnahmen entgehen",
    "choices": [
      "der Breitensport",
      "Steuereinnahmen entgehen",
      "Giro- oder Tagesgeldkonto",
      "stressig"
    ]
  },
  {
    "question": "follow-up letter",
    "correct": "das Erinnerungsschreiben",
    "choices": [
      "die Abtragung",
      "einen Überblick verschaffen",
      "das Erinnerungsschreiben",
      "der Sprachnachweis"
    ]
  },
  {
    "question": "minority",
    "correct": "die Minderheit",
    "choices": [
      "aussortieren",
      "bekanntlich",
      "sich krankmelden",
      "die Minderheit"
    ]
  },
  {
    "question": "punishment system",
    "correct": "das Bestrafungssystem",
    "choices": [
      "das Bestrafungssystem",
      "der Kopfhörer",
      "auskurieren",
      "der Aktienkurs"
    ]
  },
  {
    "question": "to show,&nbsp;produce",
    "correct": "vorweisen",
    "choices": [
      "das Müsli&nbsp;",
      "petzen",
      "zuziehen",
      "vorweisen"
    ]
  },
  {
    "question": "lottery ticket",
    "correct": "das Lotterielos&nbsp;",
    "choices": [
      "der Tennisturnier",
      "der Instanz",
      "das Lotterielos&nbsp;",
      "auf die Sprünge helfen"
    ]
  },
  {
    "question": "listing",
    "correct": "die Auflistung",
    "choices": [
      "die Währungspolitik",
      "die Auflistung",
      "ausbleiben",
      "die Bergkulisse"
    ]
  },
  {
    "question": "percentage",
    "correct": "der Prozentsatz&nbsp;",
    "choices": [
      "die Leitung",
      "der Zeitungsausträger",
      "der Prozentsatz&nbsp;",
      "lästiges Muss"
    ]
  },
  {
    "question": "municipality",
    "correct": "die Kommune",
    "choices": [
      "Gebühren erstatten",
      "der Hirsch",
      "der Einzelhandel",
      "die Kommune"
    ]
  },
  {
    "question": "receipt",
    "correct": "der Kassenbon",
    "choices": [
      "verheimlichen",
      "der Rechtsanwalt",
      "sich umhören",
      "der Kassenbon"
    ]
  },
  {
    "question": "to fail,&nbsp;miss",
    "correct": "versäumen&nbsp;",
    "choices": [
      "versäumen&nbsp;",
      "lebensbedrohlich",
      "die Malerei",
      "Giro- oder Tagesgeldkonto"
    ]
  },
  {
    "question": "deadline",
    "correct": "die Abgabefrist&nbsp;",
    "choices": [
      "mein Anliegen ist es,&nbsp;",
      "der Arbeitsalltag",
      "die Abgabefrist&nbsp;",
      "die Akzeptanz"
    ]
  },
  {
    "question": "to provide&nbsp;",
    "correct": "erbringen",
    "choices": [
      "Schaden anrichten",
      "erbringen",
      "der/das Blog",
      "der Schuppen"
    ]
  },
  {
    "question": "pay",
    "correct": "entrichten",
    "choices": [
      "der Rodel&nbsp;",
      "stationär aufnehmen",
      "der Banknachbar",
      "entrichten"
    ]
  },
  {
    "question": "checking or overnight account",
    "correct": "Giro- oder Tagesgeldkonto",
    "choices": [
      "der Konkurrent&nbsp;",
      "eingebildet",
      "Giro- oder Tagesgeldkonto",
      "schwindeln"
    ]
  },
  {
    "question": "electricity billing",
    "correct": "die Stromabrechnung&nbsp;",
    "choices": [
      "das Jugendgerichtsgesetz",
      "der Mischwald",
      "der Facharzt",
      "die Stromabrechnung&nbsp;"
    ]
  },
  {
    "question": "share&nbsp;",
    "correct": "das Wertpapier&nbsp;",
    "choices": [
      "das Wertpapier&nbsp;",
      "die Ascorbinsäure&nbsp;",
      "Kosten berechnen",
      "der Hartkäse"
    ]
  },
  {
    "question": "run-time",
    "correct": "die Laufzeit&nbsp;",
    "choices": [
      "einen Antrag&nbsp;bewilligen/einreichen/stellen",
      "umgerechnet",
      "jemanden krankschreiben",
      "die Laufzeit&nbsp;"
    ]
  },
  {
    "question": "financial situation",
    "correct": "die Finanzlage",
    "choices": [
      "die Finanzlage",
      "die Ferienwohnung",
      "vor sich hin&nbsp;",
      "der Naturpark"
    ]
  },
  {
    "question": "client advisor",
    "correct": "der Kundenberater",
    "choices": [
      "in den Mittelpunkt stellen",
      "schlaff",
      "der Kundenberater",
      "naturwissenschaftlich"
    ]
  },
  {
    "question": "fixed-interest&nbsp;",
    "correct": "festverzinslich",
    "choices": [
      "festverzinslich",
      "die Moral",
      "die Abtragung",
      "die Erdnuss&nbsp;"
    ]
  },
  {
    "question": "printer cartridge",
    "correct": "die Druckerpatrone",
    "choices": [
      "ungehindert",
      "der Veganer",
      "die Rate",
      "die Druckerpatrone"
    ]
  },
  {
    "question": "to give",
    "correct": "hergeben",
    "choices": [
      "die Babynahrung",
      "erreichbar",
      "eine Frist gewähren",
      "hergeben"
    ]
  },
  {
    "question": "pairwise,&nbsp;in pairs",
    "correct": "paarweise",
    "choices": [
      "paarweise",
      "das Baguette",
      "formvollendet",
      "klappern&nbsp;"
    ]
  },
  {
    "question": "garbage collection&nbsp;",
    "correct": "die Müllabfuhr&nbsp;",
    "choices": [
      "mahlen",
      "die Müllabfuhr&nbsp;",
      "die Abtragung",
      "auf die Sprünge helfen"
    ]
  },
  {
    "question": "to govern&nbsp;compulsory education",
    "correct": "Schulpflicht herrschen",
    "choices": [
      "Schulpflicht herrschen",
      "schmuddelig",
      "zufällig",
      "die Blähung&nbsp;"
    ]
  },
  {
    "question": "postal system",
    "correct": "das Postwesen",
    "choices": [
      "das Postwesen",
      "die Philharmonie&nbsp;",
      "willkürlich",
      "kommunizieren"
    ]
  },
  {
    "question": "Power distribution",
    "correct": "die Machtaufteilung",
    "choices": [
      "winzig",
      "paarweise",
      "die Machtaufteilung",
      "die Bekanntschaft"
    ]
  },
  {
    "question": "teaching contents",
    "correct": "die Unterrichtsinhalte",
    "choices": [
      "der Gouda",
      "die Spezialität",
      "die Unterrichtsinhalte",
      "beglaubigen"
    ]
  },
  {
    "question": "market economy",
    "correct": "die Marktwirtschaft",
    "choices": [
      "die Bergstrecke",
      "die Gans",
      "naiv",
      "die Marktwirtschaft"
    ]
  },
  {
    "question": "compass&nbsp;",
    "correct": "der Kompass",
    "choices": [
      "die Höhenmeter",
      "pflanzlich",
      "der Flirt",
      "der Kompass"
    ]
  },
  {
    "question": "protection against unfair dismissal",
    "correct": "der Kündigungsschutz",
    "choices": [
      "der Kündigungsschutz",
      "zerknittert",
      "der Eingriff",
      "die Warteliste"
    ]
  },
  {
    "question": "need of care",
    "correct": "die Pflegebedürftigkeit&nbsp;",
    "choices": [
      "die&nbsp;Kontaktbörse",
      "nutzlos",
      "bestens",
      "die Pflegebedürftigkeit&nbsp;"
    ]
  },
  {
    "question": "by chance,&nbsp;accidentally&nbsp;",
    "correct": "zufällig",
    "choices": [
      "die Halbtagsstelle&nbsp;",
      "die Markenklamotten",
      "schmackhaft",
      "zufällig"
    ]
  },
  {
    "question": "basic income",
    "correct": "das Grundeinkommen&nbsp;",
    "choices": [
      "das Grundeinkommen&nbsp;",
      "der Bachelor",
      "der HNO-Arzt",
      "zwei linke Hände haben"
    ]
  },
  {
    "question": "part-time job",
    "correct": "die Halbtagsstelle&nbsp;",
    "choices": [
      "der ranghoher Offizier",
      "sich&nbsp;etwas&nbsp;gönnen &nbsp;",
      "die Halbtagsstelle&nbsp;",
      "es gilt zu beachten"
    ]
  },
  {
    "question": "judiciary&nbsp;",
    "correct": "die Rechtsprechung",
    "choices": [
      "eine Steuerschuld begleichen",
      "klappern&nbsp;",
      "jemandem schöne Augen machen",
      "die Rechtsprechung"
    ]
  },
  {
    "question": "management area",
    "correct": "der Verwaltungsbereich",
    "choices": [
      "sich bewusst sein",
      "der Verwaltungsbereich",
      "sich&nbsp;auf etwas&nbsp;einstellen&nbsp;",
      "beharren auf"
    ]
  },
  {
    "question": "effective,&nbsp;prevailing",
    "correct": "geltend",
    "choices": [
      "wiedererkennbar",
      "Kraft schöpfen",
      "geltend",
      "zu Haft verurteilen"
    ]
  },
  {
    "question": "instance,&nbsp;authority",
    "correct": "der Instanz",
    "choices": [
      "der Instanz",
      "die Gesetzgebung",
      "der Kopfhörer",
      "die Linde"
    ]
  },
  {
    "question": "Juvenile Court Act",
    "correct": "das Jugendgerichtsgesetz",
    "choices": [
      "der Traummann",
      "das Jugendgerichtsgesetz",
      "einen Überblick verschaffen",
      "das Speerwerfen"
    ]
  },
  {
    "question": "plea,&nbsp;final speech of the defence",
    "correct": "das Plädoyer&nbsp; &nbsp;",
    "choices": [
      "unverbaut",
      "die Formalität",
      "entzündet",
      "das Plädoyer&nbsp; &nbsp;"
    ]
  },
  {
    "question": "lifelong,&nbsp;lifetime&nbsp;",
    "correct": "lebenslänglich",
    "choices": [
      "geduldig",
      "lebenslänglich",
      "in Anlehnung an",
      "willkürlich"
    ]
  },
  {
    "question": "prison sentence",
    "correct": "die Haftstrafe",
    "choices": [
      "die Warteliste",
      "die Gesetzgebung",
      "die Haftstrafe",
      "die Witwe"
    ]
  },
  {
    "question": "Public Attorney's Office, prosecution",
    "correct": "die Staatsanwaltschaft",
    "choices": [
      "stressig",
      "die Staatsanwaltschaft",
      "das Halstuch",
      "das Herbizid&nbsp;"
    ]
  },
  {
    "question": "to have a criminal record",
    "correct": "vorbestraft sein",
    "choices": [
      "die Kastanie",
      "vorbestraft sein",
      "der Zuname",
      "bemängeln"
    ]
  },
  {
    "question": "to dig,&nbsp;excavate",
    "correct": "buddeln",
    "choices": [
      "der Laubbaum",
      "rechtmäßig",
      "buddeln",
      "moralisch"
    ]
  },
  {
    "question": "coast protection",
    "correct": "der Küstenschutz",
    "choices": [
      "der Nahverkehr",
      "der Küstenschutz",
      "auskurieren",
      "das Selbstwertgefühl"
    ]
  },
  {
    "question": "mount up, pile up",
    "correct": "auftürmen",
    "choices": [
      "auftürmen",
      "eine Bearbeitungsgebühr entrichten",
      "sich verkünsteln",
      "Beschwerden lindern"
    ]
  },
  {
    "question": "working surface,&nbsp;attack surface",
    "correct": "die Angriffsfläche&nbsp;",
    "choices": [
      "dürr",
      "die Angriffsfläche&nbsp;",
      "verknallt sein in jemanden",
      "abwarten"
    ]
  },
  {
    "question": "Helgoland,&nbsp;Heligoland",
    "correct": "Helgoland",
    "choices": [
      "Helgoland",
      "einwandfrei",
      "die Lungenentzündung",
      "bezahlbar"
    ]
  },
  {
    "question": "erosionm, excavation",
    "correct": "die Abtragung",
    "choices": [
      "die Abtragung",
      "vorbeugen",
      "der Ankommende",
      "umfassend"
    ]
  },
  {
    "question": "road traffic regulations",
    "correct": "die Straßenverkehrsordnung",
    "choices": [
      "die Eiszeit",
      "die Straßenverkehrsordnung",
      "informativ",
      "die Hausordnung"
    ]
  }
];