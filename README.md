# Aurélia Diamonds, demo app

Concept app for the "From Idea to App" master's assignment.
Team: Inass Aharchi, Aicha Rcham, Evan Mailloux.

Live app: https://evan-mailloux.github.io/aurelia-diamonds-app/

## 1. What this is

A Progressive Web App built from the Aurélia Diamonds concept website.
Same content, same prices, same brand, same flows as the website.
On Android it installs from Chrome, on iPhone from Safari, gets its own icon, opens full screen like YouTube and works offline.
It is a demo: no real payment, order, message or email is ever sent.

## 2. Install it on an Android phone

1. Open the live app link in Chrome on the phone.
2. Tap "Install the app" on the home screen of the app, or open the Chrome menu and tap "Install app" or "Add to Home screen".
3. Confirm. The Aurélia icon appears on the phone's home screen.
4. Open it from the icon. It launches full screen, without the browser bar.
5. Long-press the icon to see the shortcuts: Shop, Create your ring, Book a jeweller.

## 3. Install it on an iPhone

1. Open the live app link in Safari.
2. Tap "Install the app" to see the steps, or tap the Share button directly.
3. Tap "Add to Home Screen", then "Add".
4. Open Aurélia from its icon. It launches full screen.

## 4. What the app does

1. Home with the hero ring, collections and trust promises.
2. Shop of 23 pieces with filters, sorting, wish list and product pages.
3. Create your ring: gold, shape, carat, ring size and engraving, live price and preview.
4. Try on with the live camera or a photo, with a draggable jewel.
5. Bag and checkout: delivery, payment plan in 1, 3, 4 or 10 times or 30% deposit, confirmation and tracking.
6. Ways to pay calculators: instalments, savings plan, deposit, old gold trade-in, gift card.
7. Gold Club membership with free delivery for members.
8. Booking of a private jeweller by video call or in store.
9. Search, account, sharing of the wish list with the phone's share menu.

Data stays on the phone, in the browser's local storage. "Clear demo data" in My account resets it.

## 5. Files

| File | Role |
|---|---|
| index.html | The whole app: layout, styles, data and logic |
| manifest.webmanifest | App name, icon, colours, full screen mode, shortcuts |
| sw.js | Service worker: caches every file so the app opens offline |
| icons/ | App icons, 192 and 512 px, plus a maskable version |
| img/ | Jewellery photos from Unsplash, free to use |

## 6. How to change something

1. Edit index.html, for example a product in the `P` list near the top of the script.
2. If you add or rename an image, add it to the `FILES` list in sw.js.
3. In sw.js, change `aurelia-v1` to `aurelia-v2`, so phones download the new version.
4. Commit and push to the `main` branch. GitHub Pages updates the live app in about one minute.
5. On the phone, close the app and open it again, twice if needed.

## 7. Prompt to continue in Claude Code

Copy this prompt into Claude Code, opened on this repository:

```
This repository is the Aurélia Diamonds demo app, a Progressive Web App hosted on GitHub Pages.
It must stay identical in content, prices, brand and flows to the Aurélia Diamonds concept website.
Read README.md first.
Rules:
- Keep everything in English.
- Keep the colours ivory #F7F2E8, night #16110D and gold #B8923A, with the fonts Bodoni Moda and Jost.
- Keep index.html as a single file with its inline CSS and script.
- Every button must keep working. Test bag, checkout, try-on, booking, Gold Club and ways to pay after any change.
- When you add or rename a file, add it to FILES in sw.js and raise the cache version.
- No real payment, card number or personal data collection. It is a demo.
Task: [describe the change here]
```

## 8. Optional: a real APK file

The app can also be packaged as an Android APK from its live link with PWABuilder, at https://www.pwabuilder.com.
Paste the live app link, choose Android, and download the package.
This is optional. The installed web app is enough for a demo.
