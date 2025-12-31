---
sidebar_position: 4
---

# Docker CLI Referenz

- **docker run**: Startet einen neuen Container aus einem angegebenen Image.
  Beispiel: docker run hello-world.
- **docker ps**: Listet alle laufenden Container auf. Mit der Option -a (docker
  ps -a) werden auch gestoppte Container angezeigt.
- **docker images**: Zeigt eine Liste aller lokal gespeicherten Docker-Images
  an.
- **docker rmi**: Entfernt ein oder mehrere Docker-Images. Beispiel: docker rmi
  image_name.
- **docker rm**: Löscht einen oder mehrere Container. Beispiel: docker rm
  container_id.
- **docker exec**: Führt einen Befehl in einem laufenden Container aus.
  Beispiel: docker exec -it container_id bash öffnet eine interaktive
  Bash-Sitzung im Container.
- **docker pull**: Lädt ein Docker-Image aus einem Registry (z. B. Docker Hub)
  herunter. Beispiel: docker pull ubuntu.
- **docker push**: Überträgt ein lokales Docker-Image in eine Registry.
  Beispiel: docker push username/image_name.
- **docker logs**: Zeigt die Protokolle eines Containers an. Beispiel: docker
  logs container_id.
- **docker network**: Verwaltet Docker-Netzwerke. Mit Unterbefehlen wie docker
  network ls können Sie Netzwerke auflisten.
- **docker volume**: Verwaltet Docker-Volumes, die zur Speicherung von Daten
  verwendet werden. Beispiel: docker volume ls listet alle Volumes auf.

Diese Befehle sind grundlegend für die Arbeit mit Docker und helfen Ihnen,
Container und Images effektiv zu verwalten.
