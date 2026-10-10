# RM Nexus web app (your own address)

A tiny website that shows RM Nexus at **nexus.rawmusicmedia.org** with the Raw Material icon, so it installs like an app on phones, iPads and computers. The app itself still runs on Apps Script — nothing about data, Sheets or emails changes.

| Address | Opens | Install as |
|---|---|---|
| nexus.rawmusicmedia.org | Staff app (and public schedule) | RM Nexus |
| nexus.rawmusicmedia.org/kiosk/ | Visitor sign-in | Sign in |
| nexus.rawmusicmedia.org/hire/ | Public hire form | Hire a space |

Links with extras still work, e.g. `nexus.rawmusicmedia.org/?page=programmes`.

## Set up (about 30 minutes)

1. **Point it at the app.** Open `config.js` and paste the Web app URL from Apps Script → Deploy → Manage deployments (ends in `/exec`).
2. **Publish the folder** (free, GitHub Pages):
   - In the GitHub repo: Settings → Pages → Source: *Deploy from a branch* → branch `main`, folder `/web-app`. (Or move this folder into its own repo and pick `/ (root)`.)
   - Custom domain: `nexus.rawmusicmedia.org` → Save. Tick **Enforce HTTPS** once it appears.
   - Prefer Netlify or Cloudflare Pages? Drag this folder in — same result.
3. **Add the address.** Whoever manages rawmusicmedia.org adds one DNS record:
   - Type `CNAME`, name `nexus`, value `<your-github-username>.github.io`
   - Can take up to a few hours to go live.
4. **Tell the app its new address.** In Code.gs set `APP_URL: 'https://nexus.rawmusicmedia.org'`, save, run **clearCache**, then Manage deployments → New version. Sign-out, account links and email links then return to your address instead of the Google one.
5. Test on the test deployment first (paste the test /exec link into config.js on a test copy).

## Installing

- **iPhone / iPad (Safari):** Share → Add to Home Screen.
- **Android (Chrome):** menu → Install app.
- **Mac / Windows (Chrome or Edge):** install icon at the right of the address bar.

## Kiosk iPad

1. Open nexus.rawmusicmedia.org/kiosk/ in Safari → Share → Add to Home Screen.
2. Open it from the home screen (full screen, no browser bars).
3. Lock it: Settings → Accessibility → Guided Access → on, set a passcode. In the app, triple-click the top/side button → Start.
4. Settings → Display & Brightness → Auto-Lock → Never, and keep it on charge.

For a Windows/Chromebook kiosk, use Chrome's kiosk mode pointed at the /kiosk/ address.

## Good to know

- Needs internet. If it drops, a friendly offline screen shows and the app reloads when the connection returns.
- On iPhone/iPad, "Keep me signed in" may ask people to sign in again more often than in a normal browser tab, because Safari limits storage for embedded apps. Check this during testing.
- Changing the app (Code.gs / App.html) never needs this folder touching again. Only edit `config.js` if the /exec link changes.
- If you update the icons, bump `CACHE` in `sw.js` (e.g. `-v2`) so devices pick them up.
