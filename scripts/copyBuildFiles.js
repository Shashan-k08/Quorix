const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '../build');
const publicDir = path.join(__dirname, '../public');

function copyFiles(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyFiles(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyFiles(buildDir, publicDir);

const popupHtmlPath = path.join(publicDir, 'popup.html');
let popupHtml = fs.readFileSync(popupHtmlPath, 'utf8');

const cssFile = fs.readdirSync(path.join(buildDir, 'static/css')).find(file => file.endsWith('.css'));
const jsFile = fs.readdirSync(path.join(buildDir, 'static/js')).find(file => file.endsWith('.js'));

popupHtml = popupHtml.replace('<link rel="stylesheet" href="static/css/main.<hash>.css">', `<link rel="stylesheet" href="static/css/${cssFile}">`);
popupHtml = popupHtml.replace('<script src="static/js/main.<hash>.js"></script>', `<script src="static/js/${jsFile}"></script>`);

fs.writeFileSync(popupHtmlPath, popupHtml, 'utf8');
