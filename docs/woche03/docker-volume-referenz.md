---
sidebar_position: 2
---

# Docker Volume - Referenz

## docker volume ls

Liste aller **Volumen anzeigen**

```bash
docker volume ls
```

## docker volume create

Ein neues **Volume erstellen**

```bash
docker volume create <volumename>
```

```bash title="Beispiel: Ein Volumen 'mein_volume' erstellen"
docker volume create mein_volume
```

## docker volume inspect

**Details zu einem bestimmten Volumen** anzeigen

```bash
docker volume inspect <volumename>
```

```bash title="Beispiel: Details von 'mein_volume' anzeigen"
docker volume inspect mein_volume
```

## docker volume rm

Ein **Volume entfernen**.

```bash
docker volume rm <volumename>
```

```bash title="Beispiel: 'mein_volume' entfernen"
docker volume rm mein_volume
```

## docker volume prune

Alle **ungenutzten Volumes entfernen**.

```bash
docker volume prune
```

## docker run

### Mit Volumen

Ein **Container mit einem Volumen** starten

```bash
docker run -d --name <containername> -v <volumename>:<containerpath> <image>
```

```bash title="Beispiel: Einen Container 'busybox' mit 'mein_volume' starten"
docker run -it --rm busybox -v mein_volume:/data
```

:::info

- 💡[BusyBox](https://hub.docker.com/_/busybox/#what-is-busybox-the-swiss-army-knife-of-embedded-linux)
  ist ein minimales images mit nichts drin. Es haltet sich einfach am Leben
  durch eine Endlosschleife.

:::

### Mit Bind Mount

Einen **Container mit einem Bind Mount** starten.

- Der `<hostpath>` muss relativ zum Befehl auf dem Host vorhanden sein!

```bash
docker run -d --name <containername> -v <hostpath>:<containerpath> <image>
```

```bash title="Beispiel: Einen Container 'busybox' mit einem Bind Mount starten"
docker run -it --rm busybox -v /pfad/auf/dem/host:/data
```

:::info

- Volumes sind die **bevorzugte Methode** zur Persistierung von Daten in Docker,
  da sie von Docker verwaltet werden und eine bessere Portabilität und Isolation
  bieten.
- Bind Mounts ermöglichen es Ihnen, einen spezifischen Pfad auf dem Host mit
  einem Pfad im Container zu verknüpfen. Dies ist nützlich, wenn Sie Daten
  zwischen dem Host und dem Container direkt austauschen möchten, kann jedoch zu
  Problemen führen, wenn der Host-Pfad nicht existiert oder nicht korrekt
  konfiguriert ist.

:::
