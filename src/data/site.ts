export const SITE = {
  name: 'SUFIS Berlin',
  domain: 'sufis-berlin.de',
  url: 'https://sufis-berlin.de',
  tagline: 'Clubs, Bars & Nachtleben-Guide für Berlin',
  description:
    'Das unabhängige Verzeichnis für Berlins Clubs, Bars und Nachtleben. Vergleiche nach Sound, Bezirk, Türpolitik und Dresscode.',
  // --- integrations (fill before go-live) ---
  gtmId: 'GTM-NHBTLC54',            // e.g. GTM-XXXXXXX
  adsenseClient: 'ca-pub-5853390883830243',  // Google AdSense (Auto Ads + Google CMP)
  stay22LmaId: '687d45fa59536aeb6a353b71',  // per-project Stay22 lmaID (from ClickUp Projects & PBNs)
  gygPartnerId: '1UPZQQB',
};

/* Genre hubs — slug = /berlin/<slug>/ (matches existing WordPress URLs) */
export const GENRES = [
  { slug: 'techno-nachtclubs', name: 'Techno', icon: 'wave', desc: 'Bunker, Hard-Floors und Tunnel-Sound – Berlins lauteste Nächte.', nameEn: 'Techno', descEn: 'Bunkers, hard floors and tunnel sound – Berlin’s loudest nights.' },
  { slug: 'elektronische-musik-in-berlin', name: 'Elektronische Musik', icon: 'wave', desc: 'House, Minimal und Elektro auf den großen Floors der Stadt.', nameEn: 'Electronic Music', descEn: 'House, minimal and electro on the city’s biggest dance floors.' },
  { slug: 'jazz-und-blues-nachtclubs', name: 'Jazz & Blues', icon: 'sax', desc: 'Live-Sets, kleine Bühnen und Cocktails in intimer Kellerlounge.', nameEn: 'Jazz & Blues', descEn: 'Live sets, small stages and cocktails in intimate basement lounges.' },
  { slug: 'hip-hop-nachtclubs', name: 'Hip-Hop & Rap', icon: 'mic', desc: 'Trap, Old-School und Afrobeats – wo der Bass am tiefsten sitzt.', nameEn: 'Hip-Hop & Rap', descEn: 'Trap, old-school and Afrobeats – where the bass hits deepest.' },
  { slug: 'live-musik-in-berlin', name: 'Live-Musik', icon: 'guitar', desc: 'Konzertkneipen und Bühnen für Indie, Rock und Singer-Songwriter.', nameEn: 'Live Music', descEn: 'Music bars and stages for indie, rock and singer-songwriters.' },
  { slug: 'exklusive-nachtclubs-in-berlin', name: 'Exklusiv & Lounge', icon: 'glass', desc: 'Türsteher, Gästeliste und Champagner – die feine Adresse der Nacht.', nameEn: 'Exclusive & Lounge', descEn: 'Doormen, guest lists and champagne – the upscale side of the night.' },
  { slug: 'after-hour-nachtclubs-in-berlin', name: 'After-Hour', icon: 'clock', desc: 'Wenn andere schließen, geht es hier erst los.', nameEn: 'After-Hours', descEn: 'When other clubs close, these are just getting started.' },
  { slug: '24-7-nachtclubs', name: '24/7 geöffnet', icon: 'clock', desc: 'Rund um die Uhr feiern – durchtanzen bis Montag.', nameEn: 'Open 24/7', descEn: 'Party around the clock – dance straight through to Monday.' },
  { slug: 'open-air-nachtclubs', name: 'Open-Air', icon: 'sun', desc: 'Spreeufer, Gärten und Dächer – Tanzen unter freiem Himmel.', nameEn: 'Open-Air', descEn: 'Riverbanks, gardens and rooftops – dancing under open skies.' },
  { slug: 'alternative-nachtclubs', name: 'Alternativ', icon: 'spark', desc: 'Subkultur, DIY und schräge Floors abseits des Mainstreams.', nameEn: 'Alternative', descEn: 'Subculture, DIY and offbeat floors away from the mainstream.' },
  { slug: 'lgbt-freundliche-nachtclubs', name: 'LGBTQ+', icon: 'heart', desc: 'Queere Clubs und safe spaces für alle.', nameEn: 'LGBTQ+', descEn: 'Queer clubs and safe spaces for everyone.' },
  { slug: 'cocktailbars-in-berliner', name: 'Cocktailbars', icon: 'glass', desc: 'Von der Speakeasy bis zur Rooftop-Bar.', nameEn: 'Cocktail Bars', descEn: 'From hidden speakeasies to rooftop bars.' },
  { slug: 'nachtclubs-fuer-studierende', name: 'Für Studierende', icon: 'spark', desc: 'Günstig feiern – Studententarife und Campus-Partys.', nameEn: 'For Students', descEn: 'Party on a budget – student prices and campus nights.' },
];

/* Editorial / collection hubs */
export const COLLECTIONS_HUBS = [
  { slug: 'die-besten-nachtclubs', name: 'Die besten Clubs' },
  { slug: 'beruehmte-nachtclubs-in-berlin', name: 'Berühmte Clubs' },
  { slug: 'neue-nachtclubs', name: 'Neue Clubs' },
  { slug: 'historischste-nachtclubs', name: 'Historische Clubs' },
  { slug: 'exklusive-silvesterpartys', name: 'Silvesterpartys' },
];

/* District hubs — slug = /berlin/nachtclubs-in-<bezirk>/
   descEn = short neighborhood orientation for US visitors. */
export const BEZIRKE = [
  { slug: 'nachtclubs-in-friedrichshain', name: 'Friedrichshain', descEn: 'Berlin’s techno heartland along the Spree.' },
  { slug: 'nachtclubs-in-kreuzberg', name: 'Kreuzberg', descEn: 'Bars, live music and a legendary counterculture.' },
  { slug: 'nachtclubs-in-mitte', name: 'Mitte', descEn: 'Central district with clubs, cocktails and history.' },
  { slug: 'nachtclubs-in-neukoelln', name: 'Neukölln', descEn: 'Dive bars, rooftops and a young, creative scene.' },
  { slug: 'nachtclubs-in-charlottenburg', name: 'Charlottenburg', descEn: 'Elegant West Berlin – jazz bars and grown-up nights.' },
  { slug: 'nachtclubs-in-wedding', name: 'Wedding', descEn: 'Raw, up-and-coming spaces off the tourist track.' },
  { slug: 'nachtclubs-in-schoeneberg', name: 'Schöneberg', descEn: 'The historic heart of Berlin’s queer nightlife.' },
  { slug: 'nachtclubs-in-prenzlauer-berg', name: 'Prenzlauer Berg', descEn: 'Relaxed bars, wine spots and easygoing evenings.' },
  { slug: 'nachtclubs-in-tempelhof', name: 'Tempelhof', descEn: 'Open-air parties around the former airfield.' },
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
