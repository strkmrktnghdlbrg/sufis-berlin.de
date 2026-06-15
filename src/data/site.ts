export const SITE = {
  name: 'SUFIS Berlin',
  domain: 'sufis-berlin.de',
  url: 'https://sufis-berlin.de',
  tagline: 'Clubs, Bars & Nachtleben-Guide für Berlin',
  description:
    'Das unabhängige Verzeichnis für Berlins Clubs, Bars und Nachtleben. Vergleiche nach Sound, Bezirk, Türpolitik und Dresscode.',
  // --- integrations (fill before go-live) ---
  gtmId: '',            // e.g. GTM-XXXXXXX
  adsenseClient: '',    // e.g. ca-pub-XXXXXXXXXXXXXXXX
  stay22LmaId: '687d45fa59536aeb6a353b71',  // per-project Stay22 lmaID (from ClickUp Projects & PBNs)
  gygPartnerId: '1UPZQQB',
};

/* Genre hubs — slug = /berlin/<slug>/ (matches existing WordPress URLs) */
export const GENRES = [
  { slug: 'techno-nachtclubs', name: 'Techno', icon: 'wave', desc: 'Bunker, Hard-Floors und Tunnel-Sound – Berlins lauteste Nächte.' },
  { slug: 'elektronische-musik-in-berlin', name: 'Elektronische Musik', icon: 'wave', desc: 'House, Minimal und Elektro auf den großen Floors der Stadt.' },
  { slug: 'jazz-und-blues-nachtclubs', name: 'Jazz & Blues', icon: 'sax', desc: 'Live-Sets, kleine Bühnen und Cocktails in intimer Kellerlounge.' },
  { slug: 'hip-hop-nachtclubs', name: 'Hip-Hop & Rap', icon: 'mic', desc: 'Trap, Old-School und Afrobeats – wo der Bass am tiefsten sitzt.' },
  { slug: 'live-musik-in-berlin', name: 'Live-Musik', icon: 'guitar', desc: 'Konzertkneipen und Bühnen für Indie, Rock und Singer-Songwriter.' },
  { slug: 'exklusive-nachtclubs-in-berlin', name: 'Exklusiv & Lounge', icon: 'glass', desc: 'Türsteher, Gästeliste und Champagner – die feine Adresse der Nacht.' },
  { slug: 'after-hour-nachtclubs-in-berlin', name: 'After-Hour', icon: 'clock', desc: 'Wenn andere schließen, geht es hier erst los.' },
  { slug: '24-7-nachtclubs', name: '24/7 geöffnet', icon: 'clock', desc: 'Rund um die Uhr feiern – durchtanzen bis Montag.' },
  { slug: 'open-air-nachtclubs', name: 'Open-Air', icon: 'sun', desc: 'Spreeufer, Gärten und Dächer – Tanzen unter freiem Himmel.' },
  { slug: 'alternative-nachtclubs', name: 'Alternativ', icon: 'spark', desc: 'Subkultur, DIY und schräge Floors abseits des Mainstreams.' },
  { slug: 'lgbt-freundliche-nachtclubs', name: 'LGBTQ+', icon: 'heart', desc: 'Queere Clubs und safe spaces für alle.' },
  { slug: 'cocktailbars-in-berliner', name: 'Cocktailbars', icon: 'glass', desc: 'Von der Speakeasy bis zur Rooftop-Bar.' },
  { slug: 'nachtclubs-fuer-studierende', name: 'Für Studierende', icon: 'spark', desc: 'Günstig feiern – Studententarife und Campus-Partys.' },
];

/* Editorial / collection hubs */
export const COLLECTIONS_HUBS = [
  { slug: 'die-besten-nachtclubs', name: 'Die besten Clubs' },
  { slug: 'beruehmte-nachtclubs-in-berlin', name: 'Berühmte Clubs' },
  { slug: 'neue-nachtclubs', name: 'Neue Clubs' },
  { slug: 'historischste-nachtclubs', name: 'Historische Clubs' },
  { slug: 'exklusive-silvesterpartys', name: 'Silvesterpartys' },
];

/* District hubs — slug = /berlin/nachtclubs-in-<bezirk>/ */
export const BEZIRKE = [
  { slug: 'nachtclubs-in-friedrichshain', name: 'Friedrichshain' },
  { slug: 'nachtclubs-in-kreuzberg', name: 'Kreuzberg' },
  { slug: 'nachtclubs-in-mitte', name: 'Mitte' },
  { slug: 'nachtclubs-in-neukoelln', name: 'Neukölln' },
  { slug: 'nachtclubs-in-charlottenburg', name: 'Charlottenburg' },
  { slug: 'nachtclubs-in-wedding', name: 'Wedding' },
  { slug: 'nachtclubs-in-schoeneberg', name: 'Schöneberg' },
  { slug: 'nachtclubs-in-prenzlauer-berg', name: 'Prenzlauer Berg' },
  { slug: 'nachtclubs-in-tempelhof', name: 'Tempelhof' },
];

/* Theme/anchor pills on the homepage */
export const THEMES = [
  { slug: 'berghain', name: 'Berghain & Türpolitik' },
  { slug: 'dresscodes', name: 'Dresscodes' },
  { slug: 'after-hour-nachtclubs-in-berlin', name: 'After-Hour' },
  { slug: '24-7-nachtclubs', name: '24/7 geöffnet' },
  { slug: 'live-musik-in-berlin', name: 'Live-Musik' },
  { slug: 'exklusive-silvesterpartys', name: 'Silvesterpartys' },
  { slug: 'neue-nachtclubs', name: 'Neue Clubs' },
  { slug: 'beruehmte-nachtclubs-in-berlin', name: 'Berühmte Clubs' },
  { slug: 'historischste-nachtclubs', name: 'Historische Diskotheken' },
  { slug: 'exklusive-nachtclubs-in-berlin', name: 'Exklusive Clubs' },
  { slug: 'open-air-nachtclubs', name: 'Open Air & Spree' },
  { slug: 'cocktailbars-in-berliner', name: 'Cocktailbars' },
];
