
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Limitar el tamaño del cuerpo de la petición.
app.use(express.urlencoded({ extended: false, limit: "2kb" }));
app.use(express.json({ limit: "2kb" }));

// Publicar los archivos de la interfaz.
app.use(express.static(path.join(__dirname, "public")));

// Recibir el número ficticio de demostración.
app.post("/api/demo-number", (req, res) => {
  const number = String(req.body.number || "").trim();

  // Únicamente se admite este número de prueba.
  if (number !== "0000000000") {
    return res.status(400).json({
      ok: false,
      message: "Usa únicamente el número ficticio 0000000000."
    });
  }

  // Este mensaje aparecerá en los logs de Render.
  console.log("[DEMO] Se recibió el número ficticio: 0000000000");

  return res.json({
    ok: true,
    message: "¡Prueba recibida correctamente por el servidor!"
  });
});

// Ruta de comprobación del servidor.
app.get("/api/health", (req, res) => {
  res.json({ ok: true, service: "Demo Mensajería" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
