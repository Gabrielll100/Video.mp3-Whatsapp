const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false, limit: "4kb" }));
app.use(express.json({ limit: "4kb" }));
app.use(express.static(path.join(__dirname, "public")));

const allowedCountries = new Set(["HN", "SV", "GT", "NI", "CR", "BZ", "US", "CA", "MX", "DO", "CU", "JM", "PA", "CO", "VE", "EC", "PE", "BO", "CL", "AR", "BR", "PY", "UY", "ES", "GB", "IE", "FR", "DE", "IT", "PT", "NL", "BE", "CH", "AT", "SE", "NO", "DK", "FI", "PL", "UA", "GR", "TR", "RU", "JP", "KR", "CN", "IN", "PK", "BD", "PH", "ID", "MY", "SG", "TH", "VN", "AU", "NZ", "ZA", "NG", "KE", "EG", "MA", "GH", "SA", "AE", "IL", "QA", "IS", "LU", "HR", "RO", "CZ", "HU", "PR", "HK", "TW"]);

// Demo endpoint: accepts a user-entered number only after explicit consent.
// The full number is not written to logs or stored by this example.
app.post("/api/demo-number", (req, res) => {
  const { country, number, consent } = req.body || {};

  if (consent !== true) {
    return res.status(400).json({ ok: false, message: "Debes aceptar el aviso antes de enviar el número." });
  }
  if (typeof country !== "string" || !allowedCountries.has(country)) {
    return res.status(400).json({ ok: false, message: "Selecciona un país válido." });
  }
  if (typeof number !== "string" || !/^\d{4,15}$/.test(number)) {
    return res.status(400).json({ ok: false, message: "Introduce entre 8 y 15 dígitos segun tu pais o region, sin espacios ni símbolos." });
  }

  const masked = number.length <= 4 ? "••••" : `${"•".repeat(Math.min(number.length - 4, 8))}${number.slice(-4)}`;
  console.log(`[FORMULARIO CON CONSENTIMIENTO] Envío recibido. País: ${country}. Número enmascarado: ${masked}. El número completo no se registra ni se almacena.`);

  return res.json({ ok: true, message: "Se registro correctamente el numero digitado espera unos segundos mientras carga la siguiente pagina" });
});

app.get("/api/health", (req, res) => {
  res.json({ ok: true, service: "Whatsaap" });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor Mensajería Demo iniciado en el puerto ${PORT}`);
});
