# sufis-berlin.de — Relaunch-Plan (Berlin Nachtleben-Verzeichnis)

**Stand:** 2026-06-13 · Status: Startseiten-Mockup gebaut & verifiziert
**Design:** Monotype-Refero-Vorlage, umgefärbt → „Berlin Neon Nights" (dunkles Aubergine-Schwarz `#0d0a12` + Neon-Magenta `#ff2d7e` + UV-Violett `#8b5cf6`, Premium-Gold `#f5c451`). Fonts: Fraunces (Display) + Inter/Inter Tight (UI/Body).
**Mockup:** `mockup/index.html` (Node-Static-Server `mockup/server.mjs`, Port 4823, launch.json-Eintrag `sufis-berlin`).

---

## 1. Was die Seite IST (Semrush DE, organic)

Bestehendes Berliner **Nachtleben-/Club-Verzeichnis** mit zwei Content-Silos. Schwacher, aber realer Long-Tail-Traffic (überwiegend Positionen 25–90, einige Top-10). **Kein Ranking darf verloren gehen → URLs 1:1 erhalten.**

## 2. Ranking-Erhalt-Map (Pflicht — diese URLs behalten)

### Silo `/berlin/` (Kern)
| URL | Bestes Keyword | Pos | Vol |
|---|---|---|---|
| `/berlin/dresscodes/` | tresor berlin dresscode | 8 | 260 |
| `/berlin/24-7-nachtclubs/` | clubs 24 | 10 | 210 |
| `/berlin/nachtclubs-in-wedding/` | club weddings | 7 | 110 |
| `/berlin/historischste-nachtclubs/` | ehemalige diskotheken in west-berlin | **18** | 170 |
| `/berlin/hip-hop-nachtclubs/` | rap club berlin | 25 | 140 |
| `/berlin/berghain/` | bekannter berliner techno club | 31 | 70 |
| `/berlin/jazz-und-blues-nachtclubs/` | jazz bar / berlin jazz club | 31 | 2900/1600 |
| `/berlin/die-besten-nachtclubs/` | berlin clubs / clubs berlin | 42/53 | 4400/5400 |
| `/berlin/techno-nachtclubs/` | technoclubs berlin | 56 | 480 |
| `/berlin/live-musik-in-berlin/` | live musik berlin | 57 | 720 |
| `/berlin/exklusive-nachtclubs-in-berlin/` | gute clubs in berlin | 60 | 90 |
| `/berlin/clubbesuch-in-berlin/` | berlin ausgehen | 42 | 260 |
| `/berlin/neue-nachtclubs/` | clubs berlin | 75 | 5400 |
| `/berlin/beruehmte-nachtclubs-in-berlin/` | bekanntester club berlin | 86 | 210 |
| `/berlin/after-hour-nachtclubs-in-berlin/` | club berlin heute geöffnet | 52 | 70 |
| `/berlin/exklusive-silvesterpartys/` | berlin silvester club | 74 | 90 |
| `/berlin/berlins-sehenswuerdigkeiten/` | wofür ist berlin bekannt | 73 | 90 |
| Bezirke: `/berlin/nachtclubs-in-{charlottenburg,kreuzberg,schoeneberg,neukoelln,mitte}/` | div. | 29–97 | je 110–170 |

### Silo `/hotels/`
`hotels-berlin-{tempelhof,wedding,prenzlauer-berg,kopenick,neukolln,pankow}`, `charmante-hotels-berlin-charlottenburg`, `boutique-hotels-berlin-mitte` (Long-Tail Hotel-KWs Pos 28–88).

### Sonstige
`/kontakt/` (rankt kurioserweise für „musterstraße 12 berlin" #9 — echte Adresse einsetzen).

**Migrations-Regel:** Jede obige URL bleibt erhalten (oder 301 auf identischen Slug). Bestandstexte übernehmen, faktisch aktualisieren (Clubs öffnen/schließen oft!), nichts Erfundenes ergänzen. `feedback_no_em_dashes` + `feedback_umlaute` beachten.

## 3. Informationsarchitektur (neu, ranking-kompatibel)

- **Home** — Hero-Suche (Sound + Bezirk), Genres, Bezirke, empfohlene Clubs, Schritte, Themen-Pills, Club-eintragen-CTA, Magazin.
- **Genre-Hubs** = bestehende `/berlin/*-nachtclubs/` (Techno, Jazz&Blues, Hip-Hop, Live-Musik, Exklusiv, After-Hour/24-7, Neue, Berühmte, Historische).
- **Bezirks-Hubs** = bestehende `/berlin/nachtclubs-in-{bezirk}/` + fehlende Bezirke ergänzen (Friedrichshain! fehlt bisher, ist aber DER Techno-Bezirk).
- **Venue-Detailseiten** (NEU) — pro Club/Bar: Sound, Türpolitik, Dresscode, Eintritt, Öffnungszeiten, Anfahrt, Bewertung. Berghain hat bereits eigene Seite → Muster.
- **Magazin/Ratgeber** = Dresscodes, Berghain-Türpolitik, Clubbesuch, Silvester, Sehenswürdigkeiten.
- **Hotels** = bestehender Silo erhalten.

## 3b. Guest-Posts — URL-FIXIERT (vom Kunden bestätigt, dofollow erhalten, NICHT umbiegen)
- `/catering/genussvolle-konzepte/`
- `/clubs/eleganz-trifft-clubkultur-so-wird-der-berliner-abend-unvergesslich/`
- `/reisen/internationale-reiseinspiration-aus-japan/`
- `/unternehmen/autoverkauf-in-berlin-schnell-sicher-und-effektiv/`

**Verdächtig (sehen auch nach Guest-Post aus, NICHT bestätigt — mit-scrapen, vor Go-Live mit Kunde klären):**
`/unternehmen/trusted-partner-for-video-production-services/`, `/projekte/the-making-of-black/`, `/party/fruehling-hochzeit/`, `/berlin/fotografie-tipps/`, `/berlin/mutvilla/`, `/berlin/spirituelle-hotels-retreats-berlin/`

## 3c. Vollständiges Inventar (aus Yoast-Sitemaps, WordPress)
- **43 Posts** unter `/berlin/`, plus Guest/Off-Topic unter `/projekte/ /party/ /unternehmen/ /clubs/ /reisen/ /catering/`
- **16 Pages**: Home, uber-uns, kontakt, hotels-Index + 12 Hotel-Seiten
- **10 Kategorie-Archive** `/thema/*` (in Astro als Tag/Thema-Archive nachbauen, URL erhalten)
- **Neu entdeckte Hubs (im Mockup ergänzen!):** Friedrichshain, LGBT-freundliche, Open-Air, Alternative, Elektronische-Musik, Cocktailbars, Nachtclubs-für-Studierende, Tempelhof, Prenzlauer-Berg → die IA hat mehr Genre/Bezirk-Hubs als das erste Mockup zeigte.

## 4. Content-Aufgaben
1. **Übernehmen:** alle rankenden Bestandsartikel (Wayback/Live-Scrape), faktisch verifizieren & entstauben.
2. **Lücken füllen:** Friedrichshain-Bezirksseite (hohes Volumen), House/Elektro-Genre, „berlin clubs heute geöffnet"-Funktion, einzelne Venue-Pages für Top-Suchen (Berghain ✓, Tresor, Watergate?, KitKat, Sisyphos …).
3. **Verifizierte Daten:** Öffnungszeiten/Adressen je Club gegen offizielle Quellen prüfen; Disclaimer „Angaben ohne Gewähr" gesetzt.

## 5. Monetarisierung
- Premium-Club-Listings (Basis 0 € / Premium ab 29 €/Mt) — Self-Service-Eintrag.
- Stay22 für Hotel-Silo (eigene lmaID anfragen — `feedback_stay22_per_project`).
- GetYourGuide für Events/Tickets. AdSense optional.

## 6. Offen / To-Dos
- [ ] Astro-5-Bootstrap (Content Collections: clubs, bezirke, genres, magazin, hotels)
- [ ] Bestandscontent scrapen (Live + Wayback) + Redirect-Map
- [ ] Guest-Posts/bezahlte Backlinks prüfen (`feedback_wp_migration_preserve_guest_posts`) — vor Redirects abfragen!
- [ ] Friedrichshain + House-Genre als neue Hubs
- [ ] Stay22 lmaID, GTM-ID, AdSense, Domain/Hosting, Deploy
- [ ] echte Wikimedia/lizenzfreie Club-Fotos (Unsplash-Platzhalter im Mockup)
