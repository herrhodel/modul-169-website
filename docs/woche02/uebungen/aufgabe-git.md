---
sidebar_position: 3
---

# Git: Quick Start

Dieses Tutorial zeigt dir Schritt für Schritt, wie du Git auf deinem Rechner
verwendest. Es benötigt noch keinen GitHub account.

## 🎯 Ziel

Nach diesem Tutorial kannst du:

- ein neues Git-Repository erstellen (init)
- Änderungen speichern (add/commit)
- alte Stände anschauen und wiederherstellen (restore)
- mit Entwicklungszweigen arbeiten (branch/switch/checkout)
- Änderungen verschiedener Entwicklungszweigen zusammenführen (merge)

## 🧱 1. Neues Projekt und Repository anlegen

Erstelle zunächst einen neuen Projektordner und initialisiere Git darin.

```bash
mkdir mein-projekt
cd mein-projekt
git init
```

✅ **Was passiert:**  
Git legt den versteckten Ordner `.git` an. Ab jetzt verfolgt Git alle Änderungen
in diesem Verzeichnis.

## 📄 2. Erste Datei erstellen

Erstelle z.B. eine Datei `hallo.txt` mit einfachem Inhalt.

```bash
echo "Hallo Welt" > hallo.txt
```

Überprüfe den Git-Status:

```bash
git status
```

Du siehst, dass `hallo.txt` als **untracked file** angezeigt wird.

## ✍️ 3. Datei für den nächsten Commit vormerken

```bash
git add hallo.txt
```

Überprüfe erneut:

```bash
git status
```

✅ **Was passiert:** Die Datei ist jetzt **staged**, also bereit, in den
nächsten Commit aufgenommen zu werden.

## 💾 4. Änderungen committen

Speichere deine aktuelle Version im Repository:

```bash
git commit -m "Erster Commit: hallo.txt hinzugefügt"
```

✅ **Ergebnis:** Du hast den ersten Zustand deines Projekts dauerhaft
gespeichert. Git hat jetzt **eine Version** mit einer Nachricht:

> "Erster Commit: hallo.txt hinzugefügt"

Überprüfe erneut:

```bash
git status
```

Es gibt nun keine Änderungen mehr.

## 🔍 5. Historie ansehen

```bash
git log
```

Das zeigt dir eine Liste mit allen bisherigen Commits, IDs, Zeitstempeln und
Nachrichten.

## ✏️ 6. Datei ändern und erneut committen

Bearbeite deine Datei:

```bash
echo "Dies ist meine erste Änderung." >> hallo.txt
```

Jetzt nochmal prüfen:

```bash
git status
```

Dann wieder hinzufügen und committen:

```bash
git commit -am "Text in hallo.txt ergänzt"
```

<details>
<summary>Zusatz Info: Wieso nun `git commit -am` ?</summary>

Anstatt `git add hallo.txt` und `git commit -m` verwenden wir nun `-am` welches
automatisch alle Änderungen **added und direkt** committet.

Neue Dateien werden ignoriert, diese müssen aktiv mit `git add` hinzugefügt
werden.

```bash title="git commit --help"
-a, --all
    Automatically stage files that have been modified and deleted, but new files you have
    not told Git about are not affected.
-m <msg>, --message=<msg>
      Use <msg> as the commit message. If multiple -m options are given, their values are concatenated as separate paragraphs.

      The -m option is mutually exclusive with -c, -C, and -F.
      Automatically stage files that have been modified and deleted, but new files you have not told Git about are not affected.
```

</details>

Jetzt hast du **zwei Commits** – du kannst jederzeit zwischen ihnen wechseln.

## ⏮️ 7. Zu einem früheren Stand wechseln

Schau dir die Commit-Historie an:

```bash
git log --oneline
```

Beispielausgabe:

```
2f3b1c1 (HEAD -> main) Text in hallo.txt ergänzt
a4d9e12 Erster Commit: hallo.txt hinzugefügt
```

Wenn du den alten Stand sehen willst:

```bash
git checkout a4d9e12
```

Schau in `hallo.txt` – der Text-Absatz ist verschwunden!  
Wechsle zurück zum aktuellen Stand:

```bash
git checkout main
```

Schau in `hallo.txt` – der Text-Absatz ist wieder da!

## 🌿 8. Einen neuen Branch erstellen

Erstelle einen neuen Entwicklungszweig:

```bash
git branch neues-feature
git switch neues-feature
```

<details>
<summary>Alternativen</summary>

Alternative 1:

```bash
git checkout -b neues-feature
```

Alternative 2:

```bash
git switch -c neues-feature
```

</details>

Erstelle dort eine neue Datei:

```bash
echo "# Readme!" > README.md
git add README.md
git commit -m "Neue Datei: README.md hinzugefügt"
```

## 🔗 9. Branch in Hauptzweig mergen

Wechsle zurück zum Hauptbranch:

```bash
git switch main
```

<details>
<summary>Alternative</summary>

```bash
git checkout main
```

</details>

Führe die Änderungen zusammen:

```bash
git merge neues-feature
```

✅ **Ergebnis:** `README.md` ist nun auch in deinem Hauptzweig vorhanden.

## 📜 10. Dateien und Status prüfen

Aktuellen Projektzustand anzeigen:

```bash
git status
```

Gesamte Historie (auch mit Branches):

```bash
git log --oneline --graph --all
```

## 🧩 11. Bonus: Git-Änderungen rückgängig machen

Wenn du versehentlich eine Datei bearbeitet hast und sie zurücksetzen willst:

```bash
git restore hallo.txt
```

Oder wenn du eine Datei wieder aus der **Staging Area** entfernen willst:

```bash
git restore --staged hallo.txt
```
