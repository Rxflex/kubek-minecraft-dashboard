# Kubek Minecraft Dashboard

Kubek is a web-based dashboard for managing Minecraft servers, offering a range of features to streamline server administration and customization.

[![Docker Image CI](https://github.com/Rxflex/kubek-minecraft-dashboard/actions/workflows/docker-image.yml/badge.svg)](https://github.com/Rxflex/kubek-minecraft-dashboard/actions/workflows/docker-image.yml)

## Features

- **Cross-platform Support:** Works seamlessly on both Linux and Windows systems.
- **Intuitive Single-Page UI:** A clean and straightforward user interface for easy navigation and usage.
- **Plugins and Mods Management:** Effortlessly manage plugins and mods for your Minecraft server.
- **Real-time Console:** Monitor your server's console in real-time for efficient troubleshooting and management.
- **Server Properties Editor:** Easily edit server.properties file to customize server settings.
- **FTP Server:** Integrated FTP server for convenient file transfer.
- **File Manager:** File manager with syntax highlighting for managing server files.
- **Users and Roles System:** Manage users and roles with access restrictions to servers.

## Tested and Supported Cores

- **PaperMC:** All popular PaperMC versions are supported, including its forks such as Tuinity, Airplane, and Purpur.
- **Spigot:** Versions 1.8 to 1.18.2 of Spigot are supported.
- **Forge:** Versions 1.12.2 to 1.19.2 of Forge are supported.
- **Velocity:** Version 1.19.3 of Velocity is supported.

## Natively Supported Cores

- Official Vanilla Server
- PaperMC
- Spigot
- Waterfall
- Velocity
- Purpur
- Magma

# Installation

## Windows/Linux

Download and launch the [latest release](https://github.com/Seeroy/kubek-minecraft-dashboard/releases/latest).

## Web Version

### Without Docker

Clone the repository and install the required modules. Make sure you have Node.js version 16 or above installed.

```
git clone https://github.com/Rxflex/kubek-minecraft-dashboard.git
cd kubek-minecraft-dashboard
npm install
```

Start the application after installation.

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
### With Docker

#### Run the Container

Replace YOURPORT with the desired port for WebUI and YOURDIRECTORY with the path to the host directory where your servers are located.

```
docker run -d -p YOURPORT:3000 -v YOURDIRECTORY:/usr/kubek/servers --name kubik ghcr.io/rxflex/kubek-minecraft-dashboard:latest
```
