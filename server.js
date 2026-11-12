const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false, limit: "2kb" }));
app.use(express.json({ limit: "2kb" }));
app.use(express.static(path.join(__dirname, "public")));

// Endpoint educativo: acepta exclusivamente el valor ficticio de prueba.
app.post("/api/demo-number", (req, res) => {
  const { country, number } = req.body || {};

  if (typeof number !== "string" || number !== "00000000") {
    return res.status(400).json({
      ok: false,
      message: "Para comprobar la conexión, utiliza el número ficticio 00000000."
    });
  }

  const allowedCountries = new Set(["HN", "SV", "GT", "NI", "CR", "BZ", "US", "CA", "MX", "DO", "CU", "JM", "PA", "CO", "VE", "EC", "PE", "BO", "CL", "AR", "BR", "PY", "UY", "ES", "GB", "IE", "FR", "DE", "IT", "PT", "NL", "BE", "CH", "AT", "SE", "NO", "DK", "FI", "PL", "UA", "GR", "TR", "RU", "JP", "KR", "CN", "IN", "PK", "BD", "PH", "ID", "MY", "SG", "TH", "VN", "AU", "NZ", "ZA", "NG", "KE", "EG", "MA", "GH", "SA", "AE", "IL", "QA", "IS", "LU", "HR", "RO", "CZ", "HU", "PR", "HK", "TW"]);
  const safeCountry = typeof country === "string" && allowedCountries.has(country) ? country : "HN";

  console.log(`[DEMO] Conexión comprobada correctamente. País seleccionado: ${safeCountry}. Número ficticio recibido: 00000000`);

  return res.json({
    ok: true,
    message: "¡Conexión correcta! Render recibió la prueba ficticia. Revisa los logs del servicio."
  });
});

app.get("/api/health", (req, res) => {
  res.json({ ok: true, service: "Mensajería Demo" });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor Mensajería Demo iniciado en el puerto ${PORT}`);
});
