# Mensajería Demo para Render

Prototipo educativo independiente. No es WhatsApp ni está afiliado a WhatsApp.

## Despliegue en Render
1. Extrae este ZIP en tu Mac.
2. Sube los archivos y la carpeta `public` a un repositorio de GitHub (los archivos `package.json` y `server.js` deben quedar en la raíz del repositorio).
3. En Render crea un servicio **Web Service** conectado a ese repositorio.
4. Usa `npm install` como Build Command y `npm start` como Start Command. Node 20 o superior.
5. Cuando el servicio esté activo, abre la URL de Render y también `/api/health` para confirmar que responde.
6. En la página, selecciona un país e introduce exactamente `00000000`. Pulsa **Comprobar conexión con Render**.
7. En Render abre el servicio → **Logs**. Debe aparecer una línea `[DEMO] Conexión comprobada correctamente...`.

## Importante
El endpoint acepta exclusivamente el número ficticio `00000000`; no registra ni acepta números reales. No introduzcas información personal. El sitio utiliza una marca propia y no pretende ser el inicio de sesión de otro servicio.
