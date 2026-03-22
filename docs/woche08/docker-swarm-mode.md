---
sidebar_position: 2
---
# Docker Swarm Mode

Docker Swarm Mode ein integriertes Tool von Docker zur Orchestrierung von
Containern. Es ermöglicht, mehrere Docker-Hosts zu einem einzigen, virtuellen
Cluster (dem „Swarm“) zusammenzuführen und Anwendungen so hochverfügbar, über
alle Maschinen hinweg zu verteilen.

Ein Swarm besteht aus zwei Arten von Knoten (Nodes):

- **Manager-Nodes**: Sie steuern den Cluster, verwalten den Zustand und weisen
  Aufgaben zu.
- **Worker-Nodes**: Sie empfangen und führen die Container-Aufgaben aus, die
  ihnen vom Manager zugewiesen wurden.

Anstatt einzelne Container zu starten, werden analog zu `docker compose`
Services definiert. Der Swarm Mode sorgt automatisch dafür, dass diese Anzahl
eingehalten wird – selbst wenn ein Server ausfällt.

## Erweiterung vom docker-compose.yml im docker-stack.yml

Das `docker-stack.yml` baut auf dem `docker-compose.yml` auf. Diese sind jedoch
nicht zu 100% kompatible. So hat das docker-stack.yml Erweiterungen und
Limitationen.

### Erweiterungen

Zusätzlich zum `docker-compose.yml` kann einem Service unter dem Schlüssel
`deploy`, angegeben werden wie viele sogenannte "Replicas", also Anzahl gleicher
Container, gestartet werden sollen. Dadurch lassen sich Applikationen
Skalieren.d

```yaml
services:
  web:
    image: my-app:latest
    deploy: # <--- Spezifisch für Swarm
      replicas: 3
      restart_policy:
        condition: on-failure
      update_config:
        parallelism: 1
        delay: 10s
```

### Limitationen

Einem Service im `docker-compose.yml` muss nicht immer ein `image` angegeben
werden. Es kann auch mit dem Schlüssel `build` auf ein `Dockerfile` gezeigt
werden, welches automatisch beim Starten gebuildet wird.

Docker Swarm erlaubt jedoch nur images und keine Builds. Das heisst Docker Swarm
ist nicht für das Entwickeln gedacht, sondern für das "Orchestrieren"
vorhandener Services in der Produktion.

## *Gängige Befehle*

```bash
docker swarm init
```
