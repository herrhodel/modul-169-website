---
sidebar_position: 1
---

# Git

Hier könnt Ihr nachlesen, was Git genau ist und wieso es so populär in der
Softwareentwicklung geworden ist.

:::info Plagiat!

- 🐑 **Diese Seite ist 1:1 von
  [GitLab](https://about.gitlab.com/de-de/blog/what-is-git-the-ultimate-guide-to-gits-role-and-functionality/)
  geklont.**
- Wieso kein Link? Oberhalb gibt es ihn, ihr dürft auch das Original lesen.
- Wieso eine Kopie? Damit der Text in der Suche indexiert ist ;)

:::

# Was ist Git?

Git ist ein Tool zur Versionskontrolle, das sich in der Welt der
Softwareentwicklung schnell zu einem Muss entwickelt hat. Da mit Git Änderungen
an Projekten genauestens verfolgt werden können, ist es ein unverzichtbares Tool
für Entwickler(innen), um ihre Projekte effizient zu verwalten. Damit es für
alle, die in der Softwareentwicklung weiterkommen möchten, unverzichtbar, Git zu
beherrschen. Was ist Versionskontrolle?

Versionskontrolle ermöglicht es dir, Änderungen am Quellcode einer Software zu
verfolgen. Daher besteht jede gelieferte Softwareversion aus einer Reihe
bestimmter Versionen jeder ihrer Komponenten und Quellcodedateien. Ein Icon
wurde beispielsweise nur zwei Mal geändert, während eine Codedatei im Laufe der
Zeit dutzende Änderungen durchgemacht hat.

## Was sind die Funktionen von Git?

In der Entwicklung ist es wichtig, Änderungen am Quellcode einer Software
rigoros zu verwalten. Ohne diese kann unmöglich sichergestellt werden, dass
Entwicklungsteams konsistent und zuverlässig arbeiten können. Ein fein
abgestimmtes Änderungsmanagement kann es auch einfacher machen, die Ursache
eines Problems zu identifizieren. Außerdem verringert es das Risiko von
Konflikten und das Überschreiben von Dateien. In der Tat erleichtert und
rationalisiert Git die Versionsverwaltung von Software genau zu diesem Zweck.

Um Git und seine Funktionsweise besser zu verstehen, haben wir hier einige
Hauptfunktionen angeführt, mit denen die Quellcodeverwaltung sowie de
Zusammenarbeit zwischen Teams auf einfache Weise optimiert werden kann.

## Visualisierung deines Projektverlaufs

In der Welt der Softwareentwicklung ist der Commit-Verlauf ein Grundpfeiler, um
den Projektfortschritt auf Git zu verfolgen. Daher bietet Git Entwickler(inne)n
einen detaillierten Gesamtverlauf aller Änderungen am Quellcode.

Für jeden neuen Commit wird Folgendes erfasst:

    Spezifische Änderungen an Projektdateien
    Eine erläuternde Nachricht des Entwicklerteams, das die Änderung vorgenommen hat

Diese Elemente tragen dazu bei, die Kommunikation und den Auftrag des
Entwicklungsteams zu verbessern, sodass es die Einzelheiten jeder Codeänderung
schneller verstehen kann.

Mit diesem Verlauf kannst du nicht nur die Entwicklung des Projekts überwachen,
sondern auch zurückgehen und Teile der Änderung rückgängig machen oder auch nur
einen Teil der Änderungen von einem Branch zu einem anderen übertragen. Diese
Funktion ist daher entscheidend, um die Transparenz, Konsistenz und Qualität des
Quellcodes eines Projekts in Git zu wahren. Außerdem wird dadurch die
Zusammenarbeit im Entwicklungsteam gefördert und die betriebliche Effizienz bei
der Problembehebung gesteigert.

Sieh dir in unserem Tutorial an, wie du deinen ersten Git-Commit erstellst.

## Mehr Autonomie für Teams

Ein weiteres wesentliches Merkmal des Git-Tools ist die verteilte Entwicklung.
Dank seiner dezentralen Struktur ermöglicht es Git den Teams, gleichzeitig am
selben Projekt zu arbeiten. Jedes Teammitglied hat seine eigene Kopie des
Projekts, in der Änderungen versioniert werden können. Dadurch können sie
autonom an bestimmten Funktionen arbeiten, ohne dass es zu Konflikten oder
Überschreibungen kommt. Dieser Ansatz bietet den Entwickler(inne)n große
Flexibilität, denn so können sie verschiedene Ideen ausarbeiten oder mit neuen
Funktionen experimentieren, ohne die Arbeit ihrer Kolleg(inn)en zu stören.

Die verteilte Entwicklung verbessert auch die Resilienz gegenüber
Serverausfällen. So hat jede Person im Falle eine Ausfalls eine Kopie, mit der
sie offline weiterarbeiten kann. Die Änderungen können dann synchronisiert
werden, sobald der Server wieder verfügbar ist. Dadurch wird verhindert, dass
die Arbeit des Entwicklungsteams unterbrochen wird und es zu Einschränkungen der
Betriebsteams kommt.

## Optimierung von Entwicklungs-Workflows

Eine der leistungsstärksten Funktionen von Git ist die Möglichkeit, Branches und
ihre Zusammenführer zu verwalten (Branching und Zusammenführen). Dadurch können
Teams parallel auf kooperative und organisierte Weise arbeiten. Jede neue
Ergänzung am Code und jeder Bugfix kann unabhängig getestet und entwickelt
werden, um sicherzustellen, dass er zuverlässig ist. Die Entwickler(innen)
können die Änderungen dann einfach in den Haupt-Branch des Projekts
zusammenführen.

Durch diesen Ansatz können Teams die Entwicklung des Codes nachverfolgen,
einfach und effizient zusammenarbeiten, Konflikte zwischen verschiedenen
Versionen reduzieren und die kontinuierliche Integration der entwickelten
Funktionen sicherstellen.

Mit diesen beiden Funktionen können Teams kontinuierlich und im Sinne der
Agile-Methodik Projekte entwickeln und regelmäßig neue Codeversionen
bereitstellen. Diese Vorgehensweise erleichtert das Change Management deutlich
und senkt gleichzeitig das Fehlerrisiko.

## Was sind die Vorteile von Git?

Um Git wirklich zu verstehen, musst du all die Vorteile kennen, die es deinen
Entwicklungsteams bietet:

    Dezentralisierte Versionsverwaltung: Mit Git haben alle Entwickler(innen) eine vollständige Kopie des Projektverlaufs und können dadurch unabhängig arbeiten.
    Ein Tool für Sicherheit: Anders als andere Tools zur Versionskontrolle wurde Git mit dem Gedanken entwickelt, die Integrität aller Elemente im Repository mit einem kryptografischen Secure Hash Algorithm (aktuell SHA1 und SHA-256) sicherzustellen. Dieser Algorithmus soll den Code und den Verlauf des Projekts vor Änderungen – egal, ob böswillig oder nicht – schützen. Darüber hinaus kann jeder Commit (also jede Erstellung einer neuen Version) automatisch signiert werden (GPG), um die Nachvollziehbarkeit zu gewährleisten. Dies macht Git zu einem besonders sicheren Tool, das die Integrität und Authentizität deines Quellcodes und seines Verlaufs sicherstellt.
    Ein schnelles und effektives Tool: Das Git-Tool wurde entwickelt, um die Effizienz bei der Entwicklung zu maximieren. Dank seiner Geschwindigkeit können Entwickler(innen) komplexe Vorgänge wie Commits, Branching und das Zusammenführen äußerst rasch durchführen, und das sogar in großen Codebases. Es sorgt auch für einen minimalen Fingerabdruck auf der Festplatte und beim Netzwerkaustausch. Diese Effizienz führt zu kürzeren Reaktionszeiten bei Backups, Beratungen und Änderungen am Projektverlauf.
    Mehr Flexibilität beim Arbeiten: Git unterstützt eine Vielzahl an Entwicklungs-Workflows. Egal, ob du zentralisierte Entwicklungsmodelle oder eher einen linearen Ansatz bevorzugst: Git lässt sich einfach anpassen. Diese Fähigkeit, verschiedene Workflows zu verwalten, bietet Teams zahlreiche Optionen für ihre Arbeitsweise.
    Einfache Integration: Git zeichnet sich dadurch aus, dass es sich in eine ganze Reihe bestehender Entwicklungstools und -plattformen integrieren lässt. Durch diese breite Kompatibilität können Teams die besten DevSecOps-Tools und -Praktiken nutzen und dadurch ihre Projekte effizienter verwalten.
    Ein weithin anerkanntes Open-Source-Projekt: Ein weiterer bedeutender Vorteil von Git ist, dass es ein Open-Source-Projekt ist und von einer dynamischen, engagierten Community unterstützt wird, wodurch die kontinuierliche Weiterentwicklung sichergestellt wird. Durch diese aktive Beteiligung von Einzelpersonen und Unternehmen in der Git-Community kommen im Rahmen kontinuierlicher Updates regelmäßig neue Funktionen und Verbesserungen hinzu.
