#!/bin/sh
set -e

export DATABASE_URL=postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}

yarn prisma migrate deploy

exec "$@"
