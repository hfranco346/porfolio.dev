#!/bin/bash

# Instalar paquetes con npm en lugar de pnpm
echo "Instalando dependencias con npm..."
npm install

# Construir el proyecto
echo "Construyendo el proyecto..."
npm run build

# Mensaje de finalización
echo "¡Compilación completada con éxito!"