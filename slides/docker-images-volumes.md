---
marp: true
theme: bbzbl
paginate: true
header: Modul 169 - Docker Images / Volumes
footer: BBZBL / Lukas Hodel / Services mit Containern bereitstellen
---

<!-- _class: big center -->

# Docker Images / Volumes

## Modul 169

---

# Inhalt

:::columns

- **Repetition**

- **Dockerfile**<br/> _Befehle / Caching / Multistage Build_
- **Übungen**<br/> _zu Docker Image und Dockerfile_
- **Docker Hub**
  - eigene **Apps containerisieren**

::: split

- Docker Volumen / Mouts
- **Übungen**<br/> _zu Docker Volumen / Mounts_

:::

---

<!-- _class: big center -->

# Regeln 👮‍♀️

## _INP24C_ spezial

---

# §1 Fokus und Geräte

::: columns

Die **digitalen Geräte**: 📱, 💻, etc.

- immer nur auf **Aufforderung der Lehrkraft**
- immer nur zur **Bearbeitung der gestellten Aufgaben**

**Private Aktivitäten sind untersagt**: _unter anderem Social Media, Spiele,
Videos, private E-Mails/Chats, Surfen, Shoppen, etc._

::: split s1

### 1. Verwarnung

- **Mündliche** Ermahnung durch Lehrperson

### 2. Verwarnung

- 👨‍🏫 Das Gerät ist für den **Rest der Lektion bei der Lehrperson** zu
  hinterlegen.
- 🚨 **Absenz**, wenn dadurch nicht gearbeitet werden kann!
- 🗣️ **Meldung an den Berufsbildner**.

:::

---

# §2 Ruhe und Umgangsformen

::: columns

Die Konzentration der Mitschüler muss gewährleistet sein.

- **Lärm ist zu vermeiden**<br/> z.B. laute Gespräche, Geräusche, Rufen.

- **Freundlicher, höflicher und respektvoller** Umgangston

::: split s1

### 1. Verwarnung

- **Mündliche** Ermahnung durch Lehrperson.
- Evtl. auf separaten Arbeitsplatz versetzen.

### 2. Verwarnung

- 🚪 Für den Rest der Lektion **aus dem Unterricht gewiesen**.
- 🚨 Die gesamte Lektion gilt als **Absenz**.
- 🗣️ **Meldung an den Berufsbildner**.

:::

---

<!-- _class: big center -->

# Was versteht Ihr unter Git?

- Was ist der Unterschied von Git und GitHub?

---

<!-- _class: big center -->

# Wofür dient ein Dockerfile?

- Wieso sollte man es mit Git versionieren?

---

# 📖 Auftrag

:::columns l60

Lesen Sie auf der Modulwebseite Woche 2

- [Image Builden](https://herrhodel.github.io/modul-169-website/docs/woche02/docker-images#image-bilden)
- [Caching beim Erstellen von Docker-Images](https://herrhodel.github.io/modul-169-website/docs/woche02/docker-images#caching-beim-erstellen-von-docker-images)
- [Multistage Builds](https://herrhodel.github.io/modul-169-website/docs/woche02/docker-images#multistage-builds)

:::split

- :dna: Einzelarbeit
- :clock1: 15 Min

:::

---

# :pencil: Auftrag

::: columns l60

Machen Sie auf der Modulwebseite Woche 2

- [Einfaches Dockerfile](https://herrhodel.github.io/modul-169-website/docs/woche02/uebungen/aufgabe-einfaches-dockerfile)

:::split

- :dna: Einzelarbeit
- :clock1: 45 Min

:::

---

# :pencil: Auftrag

::: columns l60

Machen Sie auf der Modulwebseite Woche 2

- [Dockerhub Tutorial](https://herrhodel.github.io/modul-169-website/docs/woche02/uebungen/aufgabe-docker-hub)

::: split

- :dna: Einzelarbeit
- :clock1: 45 Min

:::

---

<!-- _class: big center -->

# Docker Volumes & Bind Mounts

---

# Demo: Daten im Container

```bash
docker run -it --name volume-test -w /app ubuntu
echo "Hallo Welt" > hallo.txt
exit
docker container rm volume-test
docker run -it --name volume-test -w /app ubuntu
ls -la
```

→ Was wird das Resultat sein?

---

# Wie können Daten eines Containers erhalten bleiben?

## :bulb: Wenn ein Container gelöscht wird, sind die Daten im Container weg.

---

# 📖 Auftrag

::: columns l60

Lesen Sie auf der Modulwebseite Woche 3

- [Docker Volume und Mounts](https://herrhodel.github.io/modul-169-website/docs/woche03/docker-volume)

::: split

- :dna: Einzelarbeit
- :clock1: 15 Min

:::

---

# Docker Volumes vs Bind Mounds

| Merkmal      | Docker Volumes                                       | Bind Mounts                                               |
| ------------ | ---------------------------------------------------- | --------------------------------------------------------- |
| Verwaltung   | Von Docker verwaltet                                 | Vom Host verwaltet                                        |
| Speicherort  | Im Docker-Standardverzeichnis                        | Pfad im Host-Dateisystem                                  |
| Portabilität | Hoch (kann einfach zwischen Hosts verschoben werden) | Gering _(abhängig vom Host)_                              |
| Sicherheit   | Besser isoliert                                      | Weniger isoliert, da direkt auf den Host zugegriffen wird |
| Performance  | Gut, Optimiert für Docker                            | Langsam bei vielen Files, Sync mit Host-System            |

---

# **Docker Volumes**: Vor- und Nachteile

::: columns

## Vorteile

- Einfache Verwaltung

- Portabilität
- bessere Performance

::: split

## Nachteile

- weniger Kontrolle über den Speicherort

- zusätzliche Komplexität

:::

---

# **Bind Mounts**: Vor- und Nachteile

::: columns

## Vorteile

- Direkter Zugriff auf Host-Dateisystem

- Flexibilität
- Einfachheit bei Entwicklung

::: split

## Nachteile

- weniger portabel

- Sicherheitsrisiken
- Abhängigkeit von Host-Umgebung

:::

---

# Wann welche Variante?

::: columns

## Volumes

- Docker Volumes **in Produktion** und wann immer möglich

- Docker Volumes immer für Daten die nicht in Git versionisiert sind
  - **Datenbanken** und co.

::: split

## Bind Mounts

- Bind Mounts bei der Entwicklung **für Quellcode** und
  **Konfigurationsdateien** die selbst in Git versionisiert sind.

- **Nie** in Produktion!

:::

---

# Demo: Docker Volume und Bind Mounts

```bash
docker volume ls
docker volume create sqlite-volume
docker volume inspect sqlite-volume

docker run -it --rm -w /apps alpine/sqlite:3.51.2 test.db
docker run -it --rm -w /apps -v sqlite-volume:/apps alpine/sqlite:3.51.2 test.db
docker run -it --rm -w /apps -v .:/apps alpine/sqlite:3.51.2 test.db
```

```sqlite
CREATE TABLE contacts (
    contact_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
);
INSERT INTO contacts (contact_id, name) VALUES (2, 'New Name');
INSERT INTO contacts (contact_id, name) VALUES (1, 'Name');
```

---

# 📝 Auftrag

::: columns l60

Machen Sie die Übungen unter Woche 3

- [Übungen Mounts](https://herrhodel.github.io/modul-169-website/docs/woche03/uebungen-mounts/aufgabe-mounts-01)
- [Übungen Volumes](https://herrhodel.github.io/modul-169-website/docs/woche03/uebungen-volumes/aufgabe-volume-05)

::: split

- :dna: Einzelarbeit
- :clock1: bis zum Ende

:::
