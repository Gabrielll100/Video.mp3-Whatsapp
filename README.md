# Mensajería Demo para Render

Prototipo educativo independiente; no es WhatsApp ni está afiliado a WhatsApp.

## Despliegue en Render
1. Extrae este ZIP.
2. Sube `package.json`, `server.js` y la carpeta `public` a la raíz de tu repositorio de GitHub.
3. En Render crea o actualiza un Web Service conectado al repositorio.
4. Build Command: `npm install`. Start Command: `npm start`. Usa Node 20 o superior.
5. Abre la URL de Render y comprueba `/api/health`.
6. Selecciona un país, introduce de 4 a 15 dígitos, acepta el aviso y pulsa **Enviar prueba a Render**.
7. En Render abre **Logs**. Verás el país y el número enmascarado.

## Privacidad
Este ejemplo valida el consentimiento antes de aceptar el formulario. El número completo no se escribe en logs ni se guarda en una base de datos; solo se registra una versión enmascarada. Para uso público, publica un aviso de privacidad adecuado y protege el endpoint contra abuso.
