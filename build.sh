#!/bin/bash

# Instalar paquetes sin frozen-lockfile
echo "Instalando dependencias con pnpm sin usar frozen-lockfile..."
pnpm install --no-frozen-lockfile

# Construir el proyecto
echo "Construyendo el proyecto..."
pnpm run build

# Mensaje de finalización
echo "¡Compilación completada con éxito!"