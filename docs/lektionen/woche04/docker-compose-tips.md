---
sidebar_position: 4
---

# Docker Compose - Tipps

## Ausschluss von Ordnern beim Bind Mount

In Docker Compose können Sie mit
[Bind Mounts](/docs/lektionen/woche03/docker-volume.md#bind-mounts)
Verzeichnisse von Ihrem Host-System in Container einbinden. Manchmal möchten Sie
jedoch bestimmte Ordner im Container ausschließen, während Sie andere einbinden.
Hier erfahren Sie, wie Sie dies erreichen können.

### Ausschluss von Ordnern

Um einen Ordner beim Bind Mount auszuschließen, können Sie mehrere Mounts in
Ihrer docker-compose.yml-Datei definieren. Wird ein Volume mount als Path
definiert, ohne, dass ein Host pfad angegeben wird (das ":" fehlt), wird ein
Pfad im container mit sich selbst referenziert. Dies hat den Effekt, dass dieser
Pfad, ignoriert wird, wenn er ein Unterordner eines anderen Mounts ist.

Beispiel:

```yaml title="docker-compose.yml"
services:
  app:
    image: my_image
    volumes:
      - todo_data:/etc/todos # Benanntes Volume für persistente Daten, kein Bind Mount!
      - /app/node_modules # Mount für node_modules mit sich selbst
      - ./:/app # Bind Mount für das aktuelle Host Verzeichnis (./) nach /app
volumes:
  todo_data:
```

#### Erläuterung

- **Benanntes Volume**:
  - `todo_data:/etc/todos` speichert Daten, die zwischen Container-Neustarts
    persistent bleiben. Dies ist kein
    [Mount Bind](/docs/lektionen/woche03/docker-volume.md#bind-mounts), sondern
    ein
    [Docker Volume](/docs/lektionen/woche03/docker-volume.md#docker-volumes).
- **Bind Mount für node_modules**:
  - `/app/node_modules`: Stellt sicher, dass das node_modules-Verzeichnis im
    Container nicht mit dem Host synchronisiert wird, was Konflikte vermeidet.
    **Zu beachten ist, dass dieses kein ":" beinhaltet**. Also sich, mit sich
    selbst mountet.
- **Bind Mount für das aktuelle Verzeichnis**:
  - `./:/app`: Bindet das gesamte aktuelle Verzeichnis in den Container, mit
    Ausnahme des Verzeichnisses `node_modules`. Dieses wird ignoriert, da im
    Container bereits einen Mount dafür vorhanden ist.

### Fazit

Durch die Verwendung mehrerer Mounts können Sie gezielt steuern, welche Ordner
in den Container eingebunden werden und welche ausgeschlossen bleiben. Dies
hilft, eine saubere und isolierte Entwicklungsumgebung zu schaffen.

## .env-Dateien

`.env`-Dateien sind einfache Textdateien, die Umgebungsvariablen für Anwendungen
definieren. In der Docker- und Docker Compose-Welt werden .env-Dateien häufig
verwendet, um Konfigurationen und sensible Informationen wie Passwörter,
API-Schlüssel oder Datenbankverbindungsdetails zu speichern. Hier sind die
wichtigsten Aspekte, wie .env-Dateien funktionieren:

### 1. Struktur der .env-Datei

Eine .env-Datei besteht aus Schlüssel-Wert-Paaren, die durch ein
Gleichheitszeichen (=) getrennt sind. Kommentare können mit einem #-Symbol
eingeleitet werden. Hier ist ein einfaches Beispiel:

```bash title=".env"
# Datenbank-Konfiguration
DB_HOST=localhost
DB_USER=myuser
DB_PASSWORD=mypassword
DB_NAME=mydatabase
# API-Konfiguration
API_KEY=1234567890abcdef
```

### 2. Verwendung in Docker Compose

Docker Compose kann .env-Dateien automatisch laden, um Umgebungsvariablen für
die Container zu setzen. Wenn Sie eine docker-compose.yml-Datei haben, können
Sie auf die in der .env-Datei definierten Variablen zugreifen, indem Sie die
`${VARIABLE_NAME}`-Syntax verwenden.

Hier ist ein Beispiel, wie Sie eine .env-Datei in einer docker-compose.yml-Datei
verwenden können:

```yaml title="docker-compose.yml"
services:
  db:
    image: postgres
    environment:
      POSTGRES_USER: ${DB_USER}
      POSTGRES_PASSWORD: ${DB_PASSWORD}
      POSTGRES_DB: ${DB_NAME}
```

-
- https://docs.docker.com/compose/how-tos/environment-variables/set-environment-variables

### 3. Automatisches Laden der .env-Datei

Docker Compose sucht standardmäßig nach einer .env-Datei im gleichen Verzeichnis
wie die docker-compose.yml-Datei. Wenn die Datei vorhanden ist, werden die darin
definierten Variablen automatisch geladen und stehen in der docker-compose.yml
zur Verfügung.

### 4. Manuelles definieren der .env-Datei

Definiert man mit `env_file`, dass ein .env file gegeben sein muss, werden
automatisch alle darin definierten Variablen in den Service gemountet. Es können
auch mehrere Dateien angegeben werden. Dabei überschreiben die unteren die
oberen.

```yaml title="docker-compose.yml"
services:
  db:
    image: postgres
    env_file:
      - path: .env
        required: true # muss vorhanden sein
      - path: ./override.env
        required: false # ist optional
```

- https://docs.docker.com/compose/how-tos/environment-variables/set-environment-variables/#use-the-env_file-attribute

### 5. Vorteile der Verwendung von .env-Dateien

Trennung von Konfiguration und Code: .env-Dateien ermöglichen es,
Konfigurationen von der Anwendung zu trennen, was die Wartbarkeit und
Flexibilität erhöht.

Sensible Informationen: Sie können sensible Informationen wie Passwörter und
API-Schlüssel in einer .env-Datei speichern, anstatt sie direkt in den Code oder
die docker-compose.yml-Datei zu schreiben.

Einfache Anpassung: Änderungen an Konfigurationen können einfach durch
Bearbeiten der .env-Datei vorgenommen werden, ohne dass der Code geändert werden
muss.

### 6. Sicherheitshinweise

.gitignore: Es ist eine gute Praxis, .env-Dateien in die .gitignore-Datei
aufzunehmen, um zu verhindern, dass sie versehentlich in ein
Versionskontrollsystem (wie Git) eingecheckt werden. Dies schützt sensible
Informationen vor unbefugtem Zugriff. Beispiel

```txt title=".gitignore"
.env
override.env
```

### Zusammenfassung

.env-Dateien sind ein nützliches Werkzeug zur Verwaltung von Umgebungsvariablen
in Docker- und Docker Compose-Projekten. Sie ermöglichen eine einfache und
sichere Handhabung von Konfigurationen und sensiblen Informationen, indem sie
eine klare Trennung zwischen Code und Konfiguration bieten.
