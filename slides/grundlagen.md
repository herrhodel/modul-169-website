---
marp: true
theme: bbzbl
paginate: true
header: Modul 169 - Grundlagen
footer: BBZBL / Lukas Hodel / Services mit Containern bereitstellen
---

<!-- _class: big center -->

# Modul 169

## Services mit Containern bereitstellen

---

# Handlungsziele _1/2_

1. Definiert die erforderliche Umgebung für die automatisierte Bereitstellung
   von Services.
2. Dokumentiert den logischen und physischen Aufbau der Umgebung in einem
   Netzwerkschema mit servicespezifischen Angaben
3. Erstellt und dokumentiert den für die Service-Breitstellung erforderlichen
   Code versioniert.
4. Plant und realisiert die servicespezifischen Sicherheitsanforderungen.

---

# Handlungsziele _2/2_

5. Erstellt die erforderlichen Datenverbindungen zwischen unterschiedlichen
   Services.
6. Stellt die Services in der definierten Umgebung reproduzierbar bereit.
7. Administriert und überwacht die bereitgestellten Services.
8. Versteht anhand der Dokumentation die Funktionalität der Services und
   unterstützt bei der Fehlersuche.

---

# Unterrichtsaufbau

- Anfangs und nach der grossen Pause Theorie, dann praktische Übungen

---

# Modulwebseite

- [Webseite](https://herrhodel.github.io/modul-169-website/docs)

- [Übungs Repository](https://github.com/herrhodel/modul-169-exercises)

---

# LBs

::: columns

## LB1

Theoretische Grundlagen von Container

- **Wann**: Woche 4

- **Gewichtung**: 50%

- **Wie**: Schriftlich mit Classtime.net

::: split

## LB2

Alle Themen vom Modul

- **Wann**: Woche 9
- **Gewichtung**: 50%
- **Wie**: Praktisch in einer Ubuntu VM + Classtime

:::

---

# Was ist mir wichtig

- **Aktive** Teilnahme

- Stellen Sie **Fragen**
- **Experimentieren** Sie
- Rückmeldung an mich, wenn etwas nicht in Ordnung ist
- **Nutzen Sie die Zeit** während dem Unterricht
  - _(gamen und shoppen können Sie zu Hause)_

---

# Was ist mir **besonders** wichtig 💖

- Gutes Klima untereinander

- **Mobbing wird nicht geduldet** und unverzüglich dem Arbeitgeber gemeldet

---

# Bei Fragen

- im Gruppenchat auf Google: 169-INP24C
- Mich persönlich kontaktieren per Mail

---

# Modul ist aktiv in Bearbeitung! 🚧

- Ich werde jede Woche das Modul erweitern, die Webseite ist noch nicht 100%
  final!

---

<!-- _class: big center -->

# Was versteht Ihr unter einem Container?

---

# Warentransport früher

![bg right fit](./img/alamy-rheinlaender-handelswagen.jpg)

- Verschiedene Dinge
- Verschiedene Grössen

- Schwierig zu Transportieren

---

# Warentransport heute

- Container standardisieren den Transport!
- Verschiedene Dinge, verpackt in eine Einheitsgrösse 🤯 🚢 🚚

::: columns

![inline fit](./img/pexels-container-shiff.jpg)

:::split

![inline fit](./img/pexels-container-lkw.jpg)

:::

---

# Vorteile von Container

![bg right fit](img/works-on-my-machine.png)

- Portabilität
- Konsistenz
- Ressourcenschonend
- einfache Skalierung
- schnelle Bereitstellung
- Isolation
- einfachere Entwicklung

---

# :pencil: Auftrag

::: columns l60

Lesen Sie auf der Modulwebseite Woche 1

- [Grundlagen der Virtualisierung](https://herrhodel.github.io/modul-169-website/docs/woche01/grundlagen)

::: split

- :dna: Einzelarbeit
- :clock1: Bis zur grossen Pause

:::

---

# Bare Metal

![inline height:500](img/bare-metal.png)

---

# Virtuelle Maschine / Container

![inline height:500](img/vm-vs-container.png)

---

# :pencil: Auftrag

::: columns l60

Lesen Sie auf der Modulwebseite Woche 1

- [Container Bausteine](https://herrhodel.github.io/modul-169-website/docs/woche01/container-linux-opt)

::: split

- :dna: Einzelarbeit
- :clock1: Bis zur grossen Pause

:::

---

# :pencil: Auftrag

::: columns l60

Lesen Sie auf der Modulwebseite Woche 1

- [Grundkonzepte von Docker](https://herrhodel.github.io/modul-169-website/docs/woche01/docker-grundlagen)

::: split

- :dna: Einzelarbeit
- :clock1: Bis zur grossen Pause

:::

---

# :pencil: Auftrag

::: columns l60

Installieren Sie Docker Desktop oder Docker gemäss Anleitung der Modulwebseite.

- [Docker Installation](https://herrhodel.github.io/modul-169-website/docs/woche01/uebungen/aufgabe-docker-install)

Lösen Sie Übungen zu den Themen

- [Docker CLI](https://herrhodel.github.io/modul-169-website/docs/woche01/uebungen/aufgabe-docker-cli)
- [Docker Desktop](https://herrhodel.github.io/modul-169-website/docs/woche01/uebungen/aufgabe-docker-desktop)

::: split

- :dna: Einzelarbeit
- :clock1: 60 Min

:::

---

# :pencil: Auftrag

::: columns l60

Lösen Sie Übungen zum Thema

- [Praktische Anwendungen](https://herrhodel.github.io/modul-169-website/docs/woche01/uebungen/aufgabe-pratkische-andwendungen)

::: split

- :dna: Einzelarbeit
- :clock1: Bis Modulende

:::
