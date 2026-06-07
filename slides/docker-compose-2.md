---
marp: true
theme: bbzbl
paginate: true
header: Modul 169 - Docker Compose 2
footer:
  BBZBL / Lukas Hodel / Michael Salm / Services mit Containern bereitstellen
---

<!-- _class: big center -->

# Docker Compose 2

## Modul 169

---

# Inhalt

:::columns

- **Repetition**
- **Übungen zu Docker Compose (Woche 07)**

::: split

- **Docker Compose**
- **Übungen**<br/> _zu Docker Compose_ (Woche 06)

:::

---

<!-- _class: big center -->

# Regeln 👮‍♀️

---

# §1 Fokus und Geräte

Die **digitalen Geräte**: 📱, 💻, etc.

- immer nur auf **Aufforderung der Lehrkraft**

- immer nur zur **Bearbeitung der gestellten Aufgaben**

**Private Aktivitäten sind untersagt**: _unter anderem Social Media, Spiele,
Videos, private E-Mails/Chats, Surfen, Shoppen, etc._

---

# §2 Ruhe und Umgangsformen

Die Konzentration der Mitschüler muss gewährleistet sein.

- **Lärm ist zu vermeiden**<br/> z.B. laute Gespräche, Geräusche, Rufen.

- **Freundlicher, höflicher und respektvoller** Umgangston

---

## Repetition

# Was sind die Vorteile von Docker Compose gegenüber einzelnen \<docker run ...\> Befehlen?

<!-- 
- Übersichtlichkeit
- Versionierung
- Reproduzierbarkeit
- Einfachheit
-->

---

## Repetition

# Wie wird eine Multi-Container-Anwendung mit Hilfe von Docker Compose definiert?

<!-- mit Hilfe einer docker-compose.yml Datei -->

---

## Repetition

# Wie ist der Aufbau eines docker-compose.yml?

<!-- 
- Unterteilung in Services (Container)
- jeder Service enthält Konfigurationen wie Portmapping, Volume-Bindings, Netzwerk, Env-Variablen etc.
- Netzwerke und Docker Volumes und weiteres können definiert werden

Beispiel:
---
services:
  web:
    build: .
    ports:
      - "${APP_PORT}:5000"
    environment:
      - REDIS_HOST=${REDIS_HOST}
      - REDIS_PORT=${REDIS_PORT}

  redis:
    image: redis:alpine
-->

---

## Repetition

# Wie kann die Reihenfolge der Services (Container) beim Starten festgelegt werden?

<!-- 
depends_on:
  db:
    condition: service_healthy

healthcheck:
  test: ...
  timeout: 5s
  retries: 20
 -->

---

## Repetition

# Wie kann man Umgebungsvariablen in einem docker-compose.yml verwenden?

<!-- 
environments:
  MY_VAR: ${MY_VAR_FROM_ENV}
  DIRECT: asdfjk 
-->

---

## Repetition

# Warum sollten Umgebungsvariablen in einer .env-Datei gespeichert und diese nicht ins Repo gepushed werden?

<!-- 
Aus Sicherheitsgründen, da in Umgebungsvariablen häufig sensible Angaben wie Passwörter oder Zugangstoken gespeichert werden.
-->

---

## Repetition

# Was macht der Befehl \<docker compose down\>?

<!-- 
Stoppt und entfernt alle Container und Netzwerk, welche von <docker compose up> erstellt wurden. 
-->

---

# 📝 Auftrag

::: columns l60

Lesen und Machen Sie die Übungen von **letzer** Woche

- [Starten von Images](/docs/woche06/aufgaben/aufgabe-compose-new-00)
- [Bind Mounts](/docs/woche06/aufgaben/aufgabe-compose-new-01)
- [Volumen](/docs/woche06/aufgaben/aufgabe-compose-new-02)
- [Netzwerk](/docs/woche06/aufgaben/aufgabe-compose-new-03)
- [Diagramm](/docs/woche06/aufgaben/aufgabe-compose-new-04)

::: split

- :dna: Einzelarbeit
- :clock1: bis zur grossen Pause

:::

---

# 📝 Auftrag

::: columns l60

Lesen und Machen Sie die Übungen 2-9 der Woche 07.

- [Docker Compose Aufgaben Woche 07](/docs/woche07/aufgaben/)

- Erstellen Sie je auch eine Visualisierung vom docker-compose File

::: split

- :dna: Einzelarbeit
- :clock1: bis ans Ende des Unterrichts

:::
