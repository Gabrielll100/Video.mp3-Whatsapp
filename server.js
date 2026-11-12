
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Limitar el tamaño del cuerpo de la petición.
app.use(express.urlencoded({ extended: false, limit: "2kb" }));
app.use(express.json({ limit: "2kb" }));


app.use(express.json({ limit: "2kb" }));

app.post("/api/demo-number", (req, res) => {
  const { country, number } = req.body || {};

  // Aceptar únicamente el número ficticio de prueba.
  if (number !== "00000000") {
    return res.status(400).json({
      ok: false,
      message: "Para la prueba utiliza 00000000."
    });
  }

  console.log(
    `[DEMO] Prueba recibida. País: ${String(country || "HN")}. Número ficticio: 00000000`
  );

  res.json({
    ok: true,
    message: "¡Render recibió correctamente la prueba!"
  });
});


// Ruta de comprobación del servidor.
app.get("/api/health", (req, res) => {
  res.json({ ok: true, service: "Demo Mensajería" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
