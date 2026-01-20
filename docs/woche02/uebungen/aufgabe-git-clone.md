---
sidebar_position: 4
---

# Git: Übungs-Repository

Es gibt bereits ein Git Repository, welche alle Übungen vom Modul beinhaltet.
Von diesem sollen alle eine Kopie erstellen. Dadurch habt Ihr die Übungen in
einer vorgegebenen Struktur zu Hand.

## 🎯 Ziel

Nach diesem Tutorial kannst du:

- das Übungs-Repository in dein GitHub Account kopieren (create)
- das Übungs-Repository lokal auf deinen Rechner herunterladen (clone)
- die Übungen lokal auf dem Rechner bearbeiten
- Änderungen speichern (add/commit)
- Änderungen wieder nach GitHub hochladen (push)

## Template Repository Kopieren

## SSH Key einrichten

Um ein eigenes Git-Repository von GitHub lokal zu klonen, muss man sich
authentifizieren. Grundsätzlich gibt es zwei Arten, um auf ein Repository
zuzugreifen, _https_ und _ssh_. Da https bei jedem `git pull` und `git push` den
Benutzer und das Passwort abfragt, empfehle ich jedem das Repository via *ssh*
zu klonen. Damit kann man ohne user und passwort arbeiten. Man benötigt jedoch
einen **ssh-key** den man auf GitHub registrieren muss.

### Aufgabe

Bitte folgt den unten stehenden Anleitungen von GitHub, um einen `ssh-key` zu
erstellen und auf GitHub zu registrieren.

- [Adding a new SSH key to your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

Alle die bereits einen Key haben können direkt hier fortfahren

- [Adding a new SSH key to your account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account#adding-a-new-ssh-key-to-your-account)

:::tip Es gibt einen Windows-Tab auf den Webseiten 😉

![generate-ssh-key-windows](./img/generate-ssh-key-windows.png)

:::
