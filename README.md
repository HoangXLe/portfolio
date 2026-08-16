# Hoang Le — Portfolio

Minimal personal site. Static HTML/CSS/JS. No build step.

## Local preview

```bash
cd Portfolio
python -m http.server 5500 --bind 127.0.0.1
```

Open [http://127.0.0.1:5500](http://127.0.0.1:5500)

## Layout

```
Portfolio/
├── index.html              # Home
├── writing.html            # Notes
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   ├── images/
│   └── docs/Hoang-Le-Resume.pdf
└── projects/               # Longer project pages
```

## Pages

- **Home** — intro, project cards, now / previously / writing / stack, email list, footer links
- **Writing** — short technical notes
- **Résumé** — PDF

HarvestIQ opens the live app: https://main.d2gy4gwcmsx17c.amplifyapp.com/

The subscribe form is a local email list (not Substack). Submitting stores the address in the browser and opens a mail draft to `lexuanhoang2402@gmail.com`.

## Theme

Use **lights out** in the header. Preference is stored in `localStorage`.
