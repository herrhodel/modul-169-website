---
sidebar_position: 2
---

# Git Referenz

## Wichtigste Befehle

| Aktion                    | Git-Befehl                                                     | Erklärung                                                    |
| ------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------ |
| Repository erstellen      | `git init`                                                     | Neues Git-Projekt starten                                    |
| Datei hinzufügen          | `git add <datei>`                                              | Datei für Commit vormerken                                   |
| Commit erstellen          | `git commit -m "msg"`                                          | Änderungen speichern                                         |
| Alle Änderungen committen | `git commit -am "msg"`                                         | Alle Änderungen in bekannten Dateien speichern               |
| Änderungen anzeigen       | `git status` / `git log`                                       | Überblick behalten                                           |
| Lokale Änderungen pushen  | `git push origin <branch-name>`                                | Nach GitHub hochladen                                        |
| Remote Änderungen pullen  | `git pull origin <branch-name>`                                | Von GitHub herunterladen                                     |
| Branch erstellen          | `git switch -c <branch>` oder <br/> `git checkout -b <branch>` | Getrennten Entwicklungszweig anlegen                         |
| Branch wechseln           | `git switch <branch>` oder <br/> `git checkout <branch>`       | In Entwicklungszweig wechseln                                |
| Branch mergen             | `git merge <branch>`                                           | Änderungen in den aktuellen Entwicklungszweig zusammenführen |
| Datei wiederherstellen    | `git restore <datei>`                                          | Rückgängig machen                                            |

## Use-Cases

### 🧱 1. Neues Git-Repository erstellen

**Use-Case:** Du willst mit Versionskontrolle in einem neuen Projekt starten.

```bash
git init
```

✅ **Ergebnis:**  
Git legt einen versteckten Ordner `.git` an. Ab jetzt kannst du Änderungen
verfolgen.

### 📥 2. Ein vorhandenes Repository klonen

**Use-Case:** Du willst an einem bestehenden Projekt mitarbeiten.

```bash
git clone <repository-url>
```

Beispiel:

```bash
git clone https://github.com/benutzer/projekt.git
```

✅ **Ergebnis:**  
Du bekommst eine Kopie des Repositories (inklusive Branches und Commit-Historie)
auf deinen Rechner.

### ✍️ 3. Dateien zu Git hinzufügen

**Use-Case:** Du hast neue Dateien erstellt oder bestehende geändert.

```bash
git add <dateiname>
```

Beispiel:

```bash
git add index.html style.css
```

Oder alle Änderungen:

```bash
git add .
```

✅ **Ergebnis:**  
Dateien werden zur **Staging Area** hinzugefügt – also für den nächsten Commit
vorbereitet.

### 💾 4. Änderungen committen

**Use-Case:** Du möchtest eine Version „speichern“.

```bash
git commit -m "Beschreibung der Änderung"
```

Beispiel:

```bash
git commit -m "Fix: Navigation für mobile Ansichten angepasst"
```

✅ **Ergebnis:**  
Deine Änderungen werden lokal dauerhaft festgehalten – mit einer
aussagekräftigen Nachricht.

### 🔁 5. Änderungen mit dem Remote-Repository synchronisieren

**Use-Case:** Du willst deine lokalen Commits ins zentrale Repository
übertragen.

**Hochladen (push):**

```bash
git push origin main
```

**Herunterladen (pull):**

```bash
git pull origin main
```

✅ **Ergebnis:**  
Deine lokalen und entfernten Repositories bleiben synchron.

### 🌿 6. Mit Branches arbeiten

**Use-Case:** Du willst getrennt vom Hauptzweig neue Features entwickeln.

```bash
git branch feature-login
git checkout -b feature-login
```

Oder moderner:

```bash
git switch -c feature-login
```

✅ **Ergebnis:**  
Du arbeitest auf einem eigenen Entwicklungszweig, ohne den Hauptcode zu
beeinflussen.

### 🔗 7. Änderungen zusammenführen (merge)

**Use-Case:** Du möchtest deinen Branch in den Hauptzweig übernehmen.

```bash
git checkout main
git merge feature-login
```

✅ **Ergebnis:**  
Änderungen aus „feature-login“ werden in „main“ integriert.  
Eventuelle Konflikte müssen manuell gelöst werden.

### 📜 8. Stand des Repositories prüfen

**Use-Case:** Du willst sehen, was sich geändert hat.

```bash
git status
```

Commit-Historie anzeigen:

```bash
git log
```

### 🧹 9. Dateien ignorieren

**Use-Case:** Bestimmte Dateien (z. B. temporäre oder Build-Dateien) sollen
nicht ins Repository.

Erstelle eine `.gitignore`-Datei:

```
node_modules/
.env
*.log
```

✅ **Ergebnis:**  
Git ignoriert diese Dateien künftig automatisch.

### 🧩 10. Änderungen rückgängig machen

**Use-Case:** Du willst einen Fehler korrigieren oder etwas zurücksetzen.

**Einzelne Datei wiederherstellen:**

```bash
git restore <dateiname>
```

**Zu einem früheren Commit springen:**

```bash
git checkout <commit-id>
```

## SSH Key einrichten

Um ein eigenes Git-Repository von GitHub lokal zu klonen, muss man sich
authentifizieren. Grundsätzlich gibt es zwei Arten, um auf ein Repository
zuzugreifen, https und ssh. Da https bei jedem `git pull` und `git push` den
Benutzer und das Passwort abfragt, empfehle ich jedem das Repository via `ssh`
zu klonen. Damit kann man ohne user und passwort arbeiten. Man benötigt jedoch
einen `ssh-key` den man auf GitHub registrieren muss.

### Aufgabe

Bitte folgt den unten stehenden Anleitungen von GitHub, um einen `ssh-key` zu
erstellen und auf GitHub zu registrieren.

- [Adding a new SSH key to your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

Alle die bereits einen Key haben können direkt hier fortfahren

- [Adding a new SSH key to your account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account#adding-a-new-ssh-key-to-your-account)

:::tip Es gibt einen Windows-Tab auf den Webseiten 😉

![generate-ssh-key-windows](./img/generate-ssh-key-windows.png)

:::

## Repository lokal klonen

Nachdem Ihr eine `ssh-key` generiert und in GitHub hinterlegt habt, sollte es
möglich sein, euer Repository lokal zu klonen.

<div className="grid"><div>

1. Unter Code Das grüne Dropdown `<> Code` öffnen.
2. Die **SSH Url** kopieren.
3. oder, sofern [GitHub Desktop](https://desktop.github.com/download/).
   installiert, **Open with GitHub Desktop** wählen

</div><div>

![bg right fit](./img/github-repository-clone.png)

</div></div>

### In Bash klonen

Danach könnt ihr lokal folgender `git` Befehl ausführen.

```bash
git clone kopierte-ssh-url-zum-repo
```

:::tip ich würde es so machen, dann lernt ihr gerade die git Befehle.

:::

#### In VS Code öffnen

<div className="grid"><div>

1. `File -> Open folder`.
2. Das frisch geklonte Repository auswählen.
3. Es sollte ungefähr wie rechts aussehen.

</div><div>

![bg right fit](./img/vscode-open-folder.png)

</div></div>

### Direkt in VS Code klonen

Alternativ könnt Ihr auch in VS Code das Repository klonen.

- [How to Clone a Github Repository with VS Code (Example)](https://www.jcchouinard.com/git-clone-github-repository-vscode/)

In Kürze:

- Die Kommando-Pallete öffnen mit `Ctrl+Shift+P` (Windows) oder
  `Command+Shift+P` (mac).
- Nach **"Git: clone"** suchen
- Bestätigen, die kopierte SSH-URL einfügen und dem Wizard folgen.
