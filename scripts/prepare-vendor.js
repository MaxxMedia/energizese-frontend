const fs = require("fs");
const path = require("path");

const src = path.join(
  __dirname,
  "..",
  "maxxbusinessmedia",
  "vendor",
  "registration.html"
);
const destDir = path.join(__dirname, "..", "public", "vendor");
const dest = path.join(destDir, "registration.html");

let html = fs.readFileSync(src, "utf8");

html = html
  .replace(
    "../../cdn.jsdelivr.net/npm/bootstrap%405.3.3/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  )
  .replace(
    "../../cdn.jsdelivr.net/npm/bootstrap-icons%401.13.1/font/bootstrap-icons.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
  )
  .replace(
    "../../cdn.jsdelivr.net/npm/bootstrap%405.3.3/dist/js/bootstrap.bundle.min.js",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
  )
  .replace("../assets/css/styles.css", "/assets/css/styles.css")
  .replace('href="../index.html"', 'href="/"')
  .replace(
    /<!-- Mirrored from[\s\S]*?-->\s*/g,
    ""
  )
  .replace(
    /<!-- Added by HTTrack -->[\s\S]*?<!-- \/Added by HTTrack -->\s*/g,
    ""
  );

fs.mkdirSync(destDir, { recursive: true });
fs.writeFileSync(dest, html);
console.log("Wrote", dest);
