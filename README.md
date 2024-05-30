# kubek-minecraft-dashboard
Docker build status: [![Docker Image CI](https://github.com/Rxflex/kubek-minecraft-dashboard/actions/workflows/docker-image.yml/badge.svg)](https://github.com/Rxflex/kubek-minecraft-dashboard/actions/workflows/docker-image.yml)

Kubek - Web Minecraft servers dashboard

**Features:**
- Linux and Windows supported
- Pure single-page UI
- Plugins and mods manager
- Real-time console
- Server.properties editor
- FTP server
- File manager with syntax highlighting
- Users and roles system with servers access restriction

**Tested and working cores**:
- All popular PaperMC versions (all PaperMC forks (Tuinity, Airplane, Purpur, etc.) more likely will be work too)
- Spigot 1.8 - 1.18.2 (not included all versions)
- Forge 1.12.2 - 1.19.2 (not included all versions)
- Velocity 1.19.3

**Natively supported cores:**
- Official Vanilla Server
- PaperMC
- Spigot
- Waterfall
- Velocity
- Purpur
- Magma

# Installation

## Windows/Linux
Download and launch [latest release](https://github.com/Seeroy/kubek-minecraft-dashboard/releases/latest)

## Web Version

### Without docker
Clone repository and install modules
**Node.js >= 16 required!**
```
git clone https://github.com/Seeroy/kubek-minecraft-dashboard.git
cd kubek-minecraft-dashboard
npm install
```

Start after installation
```
npm start
```

### Docker Compose

```
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - /opt/kubek/servers:/usr/kubek/servers

```


### With docker

### Build own

```
docker build -t kubikmc .
```

### Run

- YOURPORT - Port is used for WebUI
- YOURDIRECTORY - Path to the host directory where located servers

```
docker run -d -p YOURPORT:3000 -v YOURDIRECTORY:/usr/kubek/servers --name kubik kubikmc
```

