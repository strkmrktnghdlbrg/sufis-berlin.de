# sufis-berlin.de — STATUS

**Projekt:** Relaunch Berliner Nachtleben-/Club-Verzeichnis (WordPress → Astro 5), Ranking-Erhalt.
**Design:** „Berlin Neon Nights" (dunkel, Neon-Magenta #ff2d7e + UV-Violett #8b5cf6), Refero-Monotype-DNA.
**Stand:** 2026-06-13

## Fortschritt
- [x] Semrush-Analyse + Ranking-Erhalt-Map (PLAN.md)
- [x] Startseiten-Mockup gebaut & verifiziert (`mockup/`)
- [x] Vollständiges URL-Inventar (Yoast-Sitemaps): 43 Posts + 16 Pages + 10 Kategorien
- [x] **Scrape aller 59 Seiten** → `scrape/*.md` (61.875 Wörter, 0 Fehler)
- [x] 4 Guest-Posts URL-fixiert + verbatim erhalten (dofollow)
- [x] **Astro-Gerüst**: Configs, Designschicht (`src/styles/global.css`), Content Collections (berlin/hotels/extra), URL-erhaltendes Routing, Header/Footer/Layouts, Startseite, Hub-Indexe (genres/bezirke/magazin/hotels), Suche, club-eintragen, 404, Legal-Stubs, .htaccess, robots.txt
- [x] **Content-Transform-+-Verify-Workflow** (57/57 ok, 30 faktengeprüft): scrape → Collection-Einträge (36 berlin + 12 hotels + 9 extra), 2026-Faktencheck, Link-Remap (0 verpasst), frische GEO-Meta auf allen Seiten
- [x] **Build grün** (68 Seiten) + Preview verifiziert (Startseite + Artikelseite)
- [x] **Bilder-Migration**: 48 echte CC-Bilder von Wikimedia Commons (Berghain/Tresor/RAW/SO36/CSD/Bezirks-Landmarks), auf 1600px resized, mit Lizenz+Autor-Attribution im Frontmatter + Cover-Credit-Zeile; Hero + og-default lokal. KI-Thumbnails ersetzt.
- [x] **Impressum** mit Webmagics-Ltd.-Daten (Paphos, USt CY10400045Y, § 5 DDG)

## Faktencheck-Ergebnis (geschlossene/aktualisierte Locations 2026)
Watergate (Ende 2024), Mensch Meier, Griessmühle (Sonnenallee), SchwuZ Neukölln (Nov 2025, läuft als Eventreihe), Stattbad, White Trash Fast Food, Haubentaucher, Anomalie Art Club, Knaack-Club, Tom's Bar, Loophole (Boddinstr., 2024), Brunnen70, Salon zur Wilden Renate (Alt-Stralau, temporär 2026). Alle in den betroffenen Artikeln entfernt oder als „(inzwischen geschlossen)" markiert.
- [ ] Neue Venue-Detailseiten (Berghain ist Muster) + fehlende Genres im Mockup
- [ ] Integrations: Stay22 lmaID, GTM, AdSense (Platzhalter in `src/data/site.ts`)
- [ ] Impressum/Datenschutz/AGB mit echten Daten (Betreiber klären)
- [ ] GitHub-Repo + Deploy (Hosting klären)

## Server / Dev
- Mockup: `node mockup/server.mjs` (Port 4823, launch.json `sufis-berlin`)
- Astro dev: `npm run dev`
- Build: `npm run build`

## Offene Fragen an Kunde
- Stay22 lmaID, GTM-ID, AdSense-Client-ID
- Hosting/Domain-Zugang
- Betreiberdaten fürs Impressum
- Verdächtige weitere Guest-Posts bestätigen: `/unternehmen/trusted-partner-for-video-production-services/`, `/projekte/the-making-of-black/`, `/party/fruehling-hochzeit/`
