# Deployment

This document captures deployment notes for test environments.

## Test Server

Clean Ubuntu server:

```txt
root@212.147.232.117
```

Use this server for testing deploys, environment setup, and operational workflows before deciding on a production hosting approach.

## Recommended First Deployment Shape

For the MVP, keep deployment simple:

- One Ubuntu server.
- Node.js runtime.
- Local Postgres, either directly installed or via Podman.
- App process managed by systemd.
- Reverse proxy with Caddy or Nginx.
- TLS once a domain is pointed at the server.

## First Provisioning Checklist

- Create a non-root deploy user.
- Configure SSH access for the deploy user.
- Disable password SSH login if it is enabled.
- Install system updates.
- Install Node.js LTS.
- Install Podman.
- Install Git.
- Set up application directory.
- Configure environment variables.
- Start Postgres.
- Run database migrations.
- Build the app.
- Run the app with systemd.
- Add reverse proxy.
- Add basic firewall rules.

## Deployment Rules

- Do not run the application as root.
- Do not store secrets in git.
- Keep `.env` server-local.
- Keep deployment steps repeatable and documented.
- Prefer boring infrastructure until product validation demands more.
- Back up Postgres before any destructive database operation.

## Open Decisions

- Use Podman Postgres on the server or install Postgres directly.
- Use Caddy or Nginx for reverse proxy and TLS.
- Use Git pull on the server or build artifacts elsewhere and copy them.
- Decide domain name before configuring TLS.
