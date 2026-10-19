import { useEffect, useRef, useState, type ReactNode } from "react"

const profilePhoto = "/cible-woy.png"

type IconName = "arrow" | "book" | "chart" | "check" | "chevron" | "clock" | "close" | "community" | "document" | "eye" | "facebook" | "instagram" | "menu" | "play" | "shield" | "spark" | "target" | "wallet" | "youtube"

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m14 7 5 5-5 5" />
      </>
    ),
    book: (
      <>
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5z" />
        <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5z" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V9" />
        <path d="M10 19V5" />
        <path d="M16 19v-7" />
        <path d="M22 19H2" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="M18 6 6 18" />
      </>
    ),
    community: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5" />
        <circle cx="17" cy="9" r="2" />
        <path d="M17 15c2.5 0 4 1.5 4 4" />
      </>
    ),
    document: (
      <>
        <path d="M6 2h8l4 4v16H6z" />
        <path d="M14 2v5h5" />
        <path d="M9 13h6M9 17h6" />
      </>
    ),
    eye: (
      <>
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12" />
        <circle cx="12" cy="12" r="2.5" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    play: <path d="m9 7 8 5-8 5z" />,
    shield: (
      <>
        <path d="M12 3 4.5 6v5.5c0 4.7 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.8 7.5-9.5V6z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 1.3 4.2L17 9l-3.7 1.8L12 15l-1.3-4.2L7 9l3.7-1.8z" />
        <path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7z" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <path d="m15 9 6-6" />
      </>
    ),
    wallet: (
      <>
        <path d="M3 7h16v13H3z" />
        <path d="M3 7V5h13v2" />
        <path d="M15 12h7v4h-7z" />
      </>
    ),
    facebook: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
    instagram: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
    youtube: (
      <>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
      </>
    ),
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="logo-brand" aria-label="WÔY Academy">
      <img
        src="/logo-woy.png"
        alt="WÔY Academy"
        className="logo-brand__img"
      />
    </div>
  )
}

const navItems = [
  ["Accueil", "accueil"],
  ["La plateforme", "plateforme"],
  ["Notre méthode", "methode"],
  ["La Route", "route"],
  ["Pour qui ?", "profils"],
  ["Notre vision", "vision"],
]

function ButtonLink({
  href,
  children,
  variant = "primary",
  onClick,
}: {
  href?: string
  children: ReactNode
  variant?: "primary" | "secondary" | "light"
  onClick?: () => void
}) {
  if (onClick) {
    return (
      <button
        type="button"
        className={`button button--${variant}`}
        onClick={(e) => {
          e.preventDefault()
          onClick()
        }}
      >
        {children}
      </button>
    )
  }
  return (
    <a className={`button button--${variant}`} href={href || "#"}>
      {children}
    </a>
  )
}

function Header({ onOpenReservation }: { onOpenReservation?: () => void }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("accueil")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length) setActive(visible[0].target.id)
      },
      { rootMargin: "-35% 0px -55%", threshold: 0 },
    )
    navItems.forEach(([, id]) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="header">
      <div className="header__inner shell">
        <a
          href="#accueil"
          className="header__logo"
          aria-label="Retour à l’accueil"
        >
          <Logo light />
        </a>
        <nav className="nav nav--desktop" aria-label="Navigation principale">
          {navItems.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "is-active" : ""}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="header__actions">
          <ButtonLink href="#attente" onClick={onOpenReservation}>
            Réserve ta place <Icon name="arrow" size={17} />
          </ButtonLink>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>
      <nav
        id="mobile-menu"
        className={`nav-mobile ${open ? "is-open" : ""}`}
        aria-label="Navigation mobile"
      >
        {navItems.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
            <Icon name="chevron" size={17} />
          </a>
        ))}
          <ButtonLink href="#attente" onClick={onOpenReservation}>
          Réserve ta place <Icon name="arrow" size={17} />
        </ButtonLink>
      </nav>
    </header>
  )
}

function ProgressRing() {
  return (
    <div className="progress-ring" aria-label="Progression de 68%">
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="41" className="ring-bg" />
        <circle cx="50" cy="50" r="41" className="ring-value" />
      </svg>
      <strong>68%</strong>
    </div>
  )
}

function DashboardMockup() {
  return (
    <div className="app-window hero-dashboard">
      <div className="app-sidebar">
        <Logo />
        <div className="sidebar-links">
          <span className="active">
            <Icon name="chart" size={17} /> Vue d’ensemble
          </span>
          <span>
            <Icon name="book" size={17} /> Mon parcours
          </span>
          <span>
            <Icon name="play" size={17} /> Exercices
          </span>
          <span>
            <Icon name="target" size={17} /> Compétences
          </span>
        </div>
        <div className="sidebar-user">
          <span>AM</span>
          <small>Amadou M.</small>
        </div>
      </div>
      <div className="app-main">
        <div className="mock-toolbar">
          <div>
            <small>Bonjour Amadou,</small>
            <strong>Mon espace d’apprentissage</strong>
          </div>
          <span className="demo-tag">Démonstration</span>
        </div>
        <div className="dashboard-grid">
          <div className="module-card">
            <div className="module-label">
              <span>Module en cours</span>
              <span>4 / 7</span>
            </div>
            <div className="lesson-icon">
              <Icon name="wallet" />
            </div>
            <small>LES FONDAMENTAUX</small>
            <h3>Comprendre les bases de l’argent</h3>
            <p>
              Découvre le rôle de l’argent et apprends à mieux organiser tes
              décisions.
            </p>
            <div className="inline-progress">
              <span />
            </div>
            <button type="button">
              Continuer la leçon <Icon name="arrow" size={16} />
            </button>
          </div>
          <div className="progress-card">
            <small>Ma progression</small>
            <ProgressRing />
            <span>12 leçons terminées</span>
          </div>
          <div className="skills-card">
            <div>
              <small>Mes compétences</small>
              <b>Niveau 2</b>
            </div>
            {[
              ["Budget", 82],
              ["Risques", 64],
              ["Marchés", 48],
            ].map(([name, value]) => (
              <div className="skill-row" key={name}>
                <span>{name}</span>
                <div>
                  <i style={{ width: `${value}%` }} />
                </div>
                <b>{value}%</b>
              </div>
            ))}
          </div>
          <div className="next-card">
            <span>
              <Icon name="clock" size={17} /> 8 min
            </span>
            <small>PROCHAIN EXERCICE</small>
            <strong>Évaluer une opportunité</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

function VideoModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="video-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Vidéo de présentation WÔY Academy"
    >
      <div className="video-modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          className="video-modal-close"
          onClick={onClose}
          type="button"
          aria-label="Fermer la vidéo"
        >
          <Icon name="close" size={20} />
        </button>
        <div className="video-modal-screen">
          <img
            src="/hero-laptop.png"
            alt="L'histoire d'Ahmadou · Épisode 1"
            className="video-poster"
          />
          <div className="video-play-overlay">
            <a
              href="#histoire"
              className="big-play-btn"
              onClick={onClose}
              aria-label="Lancer l'histoire"
            >
              <Icon name="play" size={28} />
            </a>
            <p>Bande-annonce · 2 min</p>
          </div>
        </div>
        <div className="video-modal-info">
          <div className="video-modal-tag">Épisode 1 · 2 min</div>
          <h3>L'histoire d'Ahmadou</h3>
          <p>
            Suis Ahmadou dans ses premières décisions financières. Apprends à
            reconnaître les marchés, comprendre les risques et faire tes
            propres choix.
          </p>
          <div className="video-modal-actions">
            <a
              href="#attente"
              className="button button--primary"
              onClick={onClose}
            >
              Réserve ta place <Icon name="arrow" size={16} />
            </a>
            <a
              href="#histoire"
              className="button button--secondary"
              onClick={onClose}
            >
              Découvrir l’histoire
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Hero({ onOpenReservation }: { onOpenReservation?: () => void }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <>
      <main id="accueil" className="hero-cinema">
        <div className="hero-cinema__stage">
          {/* 16:9 Background Image */}
          <img
            src="/hero-laptop.png"
            alt="Plateforme WÔY Academy"
            className="hero-cinema__canvas-img"
          />

          {/* Left subtle gradient vignette for text readability */}
          <div className="hero-cinema__canvas-vignette" />

          {/* Pulsing Light Golden Circle EXACTLY over the play button in the character's hand */}
          <button
            type="button"
            className="hero-play-hotspot"
            onClick={() => setIsVideoOpen(true)}
            aria-label="Voir le film · 2 min"
            title="Voir le film · 2 min"
          >
            <span className="hero-pulse-ripple" />
            <span className="hero-pulse-ring" />
            <span className="hero-pulse-glow" />
          </button>

          {/* Left Column Content strictly confined to left ~36% to never hide the computer */}
          <div className="hero-cinema__canvas-content">
            <h1 className="hero-cinema__title">
              <span className="hero-cinema__title-white">COMPRENDS TON ARGENT.</span>
              <span className="hero-cinema__title-gold">AVANT D'INVESTIR.</span>
            </h1>
            <p className="hero-cinema__subtitle">
              Apprends la finance, la crypto et l'investissement, même si tu pars<br />
              de zéro. À ton rythme, avec des exercices concrets pour prendre<br />
              tes propres décisions.
            </p>
            <div className="hero-cinema__actions">
              <button type="button" className="btn-cinema-gold" onClick={onOpenReservation}>
                <span>RÉSERVE TA PLACE</span>
                <Icon name="arrow" size={17} />
              </button>
              <button
                type="button"
                className="btn-cinema-glass"
                onClick={() => setIsVideoOpen(true)}
              >
                <span className="cinema-play-badge">
                  <Icon name="play" size={13} />
                </span>
                <span>VOIR LE FILM · 2 MIN</span>
              </button>
            </div>
          </div>

          {/* Dedicated mobile media frame for small screens */}
          <div className="hero-cinema__mobile-media">
            <img
              src="/hero-laptop.png"
              alt="Plateforme WÔY Academy sur ordinateur"
              className="hero-cinema__mobile-img"
              loading="eager"
            />
            <button
              type="button"
              className="hero-play-hotspot"
              onClick={() => setIsVideoOpen(true)}
              aria-label="Voir le film · 2 min"
            >
              <span className="hero-pulse-ripple" />
              <span className="hero-pulse-ring" />
              <span className="hero-pulse-glow" />
            </button>
          </div>
        </div>
      </main>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />
    </>
  )
}

function LessonInterface() {
  return (
    <div className="mini-ui lesson-ui">
      <div className="mini-ui__bar">
        <span />
        <span />
        <span />
        <small>Mon parcours</small>
      </div>
      <div className="lesson-ui__body">
        <aside>
          <b>Module 2</b>
          {[
            "Le rôle de l’argent",
            "Construire un budget",
            "Comprendre le risque",
            "Mise en situation",
          ].map((item, i) => (
            <span className={i === 2 ? "current" : ""} key={item}>
              <i>{i < 2 ? "✓" : i + 1}</i>
              {item}
            </span>
          ))}
        </aside>
        <div className="lesson-ui__content">
          <div className="lesson-ui__top">
            <span>LEÇON 3 · 8 MIN</span>
            <b>60%</b>
          </div>
          <h4>Comprendre le risque</h4>
          <p>
            Apprends à reconnaître les éléments à vérifier avant de prendre une
            décision.
          </p>
          <div className="question-box">
            <small>À TON AVIS</small>
            <b>Plus un rendement annoncé est élevé…</b>
            <span>
              <i /> Le risque peut aussi être plus important
            </span>
            <span>
              <i /> Le risque disparaît
            </span>
          </div>
          <button type="button">
            Continuer <Icon name="arrow" size={15} />
          </button>
        </div>
      </div>
    </div>
  )
}

function PortfolioInterface() {
  return (
    <div className="mini-ui portfolio-ui">
      <div className="mini-ui__bar">
        <span />
        <span />
        <span />
        <small>Portefeuille pédagogique</small>
        <b>SIMULATION</b>
      </div>
      <div className="portfolio-head">
        <div>
          <small>Solde fictif</small>
          <strong>
            1 250 000 <i>FCFA</i>
          </strong>
        </div>
        <span>Fonds fictifs</span>
      </div>
      <div className="portfolio-chart">
        <div>
          <small>ÉVOLUTION SIMULÉE</small>
          <b>+2,4%</b>
        </div>
        <svg viewBox="0 0 420 105" preserveAspectRatio="none">
          <defs>
            <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d7ad63" stopOpacity=".28" />
              <stop offset="100%" stopColor="#d7ad63" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            className="area"
            d="M0 88 C45 84 45 56 90 62 S150 76 186 48 S242 55 275 31 S336 45 420 12 V105 H0Z"
          />
          <path
            className="line"
            d="M0 88 C45 84 45 56 90 62 S150 76 186 48 S242 55 275 31 S336 45 420 12"
          />
        </svg>
      </div>
      <div className="allocation">
        <div>
          <small>Répartition fictive</small>
          {[
            ["Liquidités", "45%"],
            ["Actions", "30%"],
            ["Crypto", "15%"],
            ["Obligations", "10%"],
          ].map(([x, y], i) => (
            <span key={x}>
              <i className={`dot d${i}`} />
              {x}
              <b>{y}</b>
            </span>
          ))}
        </div>
        <div className="donut" />
      </div>
    </div>
  )
}

function ReportInterface() {
  return (
    <div className="report-ui">
      <div className="report-cover">
        <span>
          WÔY
          <br />
          INSIGHTS
        </span>
        <small>RAPPORT PÉDAGOGIQUE · JUIN</small>
        <h4>
          Comprendre
          <br />
          les marchés
          <br />
          sans le bruit.
        </h4>
        <div className="cover-mark">W</div>
        <i>ÉDITION DE DÉMONSTRATION</i>
      </div>
      <div className="report-page">
        <span>03</span>
        <small>DÉCRYPTAGE</small>
        <h4>Trois repères pour lire l’actualité</h4>
        <p>
          Une lecture structurée des événements et de leurs effets possibles.
        </p>
        <div className="report-bars">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="report-callout">
          <Icon name="eye" size={17} />
          <span>
            <b>Point d’attention</b>Une analyse informe. Elle ne prédit pas
            l’avenir.
          </span>
        </div>
      </div>
    </div>
  )
}

function LaambInterface() {
  return (
    <div className="mini-ui laamb-ui">
      <div className="mini-ui__bar">
        <span />
        <span />
        <span />
        <small>Arène Laamb · Confrontation pédagogique</small>
        <b>EN DIRECT</b>
      </div>
      <div className="laamb-top">
        <div className="laamb-duel">
          <div className="laamb-fighter">
            <span className="fighter-avatar">A</span>
            <div>
              <b>Ahmadou</b>
              <small>Niv. 2 · Explorateur</small>
            </div>
            <span className="fighter-score">1 420 pts</span>
          </div>
          <div className="laamb-vs">VS</div>
          <div className="laamb-fighter laamb-fighter--opp">
            <span className="fighter-avatar fighter-avatar--opp">M</span>
            <div>
              <b>Moussa D.</b>
              <small>Niv. 2 · Challenger</small>
            </div>
            <span className="fighter-score">1 380 pts</span>
          </div>
        </div>
      </div>
      <div className="laamb-arena">
        <div className="laamb-round">
          <small>MANCHE 3 / 5 · DÉCISION SOUS TENSION</small>
          <p>Les marchés chutent de 8% après une annonce inattendue. Quelle stratégie adopter ?</p>
        </div>
        <div className="laamb-choices">
          <div className="laamb-choice is-chosen">
            <span className="choice-check">&#10003;</span>
            <div>
              <b>Appliquer le plan et évaluer le risque</b>
              <small>Ahmadou · Réponse validée</small>
            </div>
            <span className="choice-xp">+50 XP</span>
          </div>
          <div className="laamb-choice">
            <span className="choice-dot" />
            <div>
              <b>Vendre en panique pour stopper la perte</b>
              <small>Réflexe impulsif · Pénalité</small>
            </div>
          </div>
        </div>
      </div>
      <div className="laamb-footer">
        <span>
          <Icon name="spark" size={16} />
        </span>
        <p>
          <b>Victoire d’arène en cours</b>
          <small>Progression +25 Cauris de prestige</small>
        </p>
        <span className="laamb-rank">Rang #12</span>
      </div>
    </div>
  )
}
const pillars = [
  {
    number: "01",
    icon: "book" as IconName,
    title: "Parcours pédagogique",
    description:
      "Apprends avec des cours progressifs, des exercices et des mises en situation concrètes.",
    micro: "Apprendre à ton rythme",
    ui: <LessonInterface />,
  },
  {
    number: "02",
    icon: "wallet" as IconName,
    title: "Portefeuille simulé",
    description:
      "Entraîne-toi à prendre des décisions avec un portefeuille fictif, sans utiliser d’argent réel.",
    micro: "Fonds fictifs · Aucune transaction réelle",
    ui: <PortfolioInterface />,
  },
  {
    number: "03",
    icon: "document" as IconName,
    title: "Rapports mensuels",
    description:
      "Découvre des analyses structurées pour mieux comprendre l’actualité financière et les marchés.",
    micro: "Comprendre les marchés",
    ui: <ReportInterface />,
  },
  {
    number: "04",
    icon: "target" as IconName,
    title: "LAAMB — L’arène des Traders",
    description:
      "Défies d’autres apprenants, teste tes connaissances financières et progresse à travers des confrontations pédagogiques.",
    micro: "Confrontations pédagogiques",
    ui: <LaambInterface />,
  },
]

function Platform() {
  return (
    <section id="plateforme" className="section platform">
      <div className="shell">
        <div className="section-head section-head--split">
          <div>
            <div className="eyebrow">
              <span /> La plateforme
            </div>
            <h2>
              À l’intérieur
              <br />
              de WÔY.
            </h2>
          </div>
          <div>
            <h3>Découvre ce que tu peux faire avec WÔY.</h3>
            <p>
              Apprends à gérer ton argent, entraîne-toi avec un portefeuille
              simulé, relève des défis avec d’autres apprenants et suis tes
              progrès. Tout est conçu pour t’aider à comprendre avant de prendre
              tes décisions.
            </p>
          </div>
        </div>
        <div className="bento-grid">
          {pillars.map((pillar) => (
            <article className="pillar-card" key={pillar.title}>
              <div className="pillar-card__head">
                <span className="pillar-icon">
                  <Icon name={pillar.icon} />
                </span>
                <span className="pillar-number">{pillar.number}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
              <div className="pillar-card__ui">{pillar.ui}</div>
              <div className="micro-label">
                <span />
                {pillar.micro}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const methodSteps = [
  { num: "01", title: "Situation Narrative", sub: "Une scene reelle ouvre le module.", loc: "Lieu : Dakar, Senegal" },
  { num: "02", title: "Choix", sub: "Tu choisis ta decision.", note: "Chaque choix a un impact.", active: true },
  { num: "03", title: "Simulation", sub: "Le marche reagit.", note: "Consequence en cours..." },
  { num: "04", title: "Djeli / Feedback", sub: "Djeli t'aide a comprendre ton raisonnement.", tags: ["COMPRENDS", "STRUCTURE", "PROTEGE"] as string[] },
  { num: "05", title: "Progression", sub: "Tu avances. Tu deviens maitre de ton marche.", xp: "+120 XP", coins: "+25 Cauris" },
]

function MethodCardVisual({ step }: { step: typeof methodSteps[0] }) {
  if (step.num === "01")
    return (
      <div className="mc-visual mc-visual--story">
        <div className="mc-story-scene">
          <img src="/ahmadou.png" alt="Ahmadou" className="mc-char-img" />
          <div className="mc-bubble">
            <small>AHMADOU</small>
            <p>"J'ai recu une prime. Que dois-je verifier avant de decider ?"</p>
          </div>
        </div>
      </div>
    )
  if (step.num === "02")
    return (
      <div className="mc-visual mc-visual--choice">
        <div className="mc-choice-list">
          {[
            { label: "Attendre le repli", icon: "&#8599;", active: true },
            { label: "Entrer maintenant", icon: "&#9734;", active: false },
            { label: "Changer de marche", icon: "&#8644;", active: false },
          ].map(({ label, icon, active }) => (
            <div key={label} className={`mc-choice-item${active ? " mc-choice-item--active" : ""}`}>
              <span className="mc-choice-icon" dangerouslySetInnerHTML={{ __html: icon }} />
              {label}
              {active && <span className="mc-choice-check">&#10003;</span>}
            </div>
          ))}
        </div>
      </div>
    )
  if (step.num === "03")
    return (
      <div className="mc-visual mc-visual--sim">
        <svg viewBox="0 0 200 130" className="mc-chart-svg" xmlns="http://www.w3.org/2000/svg">
          {/* Dashed golden curve at bottom (support/demand curve) matching the reference */}
          <path d="M 0 65 Q 75 110 200 55" stroke="#caa056" strokeWidth="2.2" strokeDasharray="5 4" fill="none" opacity="0.9"/>
          
          {/* Candle 1 - red */}
          <line x1="24" y1="36" x2="24" y2="68" stroke="#842c2c" strokeWidth="2"/>
          <rect x="20" y="44" width="8" height="20" fill="#d24b4b" rx="2"/>

          {/* Candle 2 - red (tall) */}
          <line x1="44" y1="36" x2="44" y2="76" stroke="#842c2c" strokeWidth="2"/>
          <rect x="40" y="44" width="8" height="28" fill="#d24b4b" rx="2"/>

          {/* Candle 3 - green */}
          <line x1="64" y1="56" x2="64" y2="78" stroke="#1d6639" strokeWidth="2"/>
          <rect x="60" y="60" width="8" height="15" fill="#2ecc71" rx="2"/>

          {/* Candle 4 - red */}
          <line x1="84" y1="54" x2="84" y2="82" stroke="#842c2c" strokeWidth="2"/>
          <rect x="80" y="58" width="8" height="21" fill="#d24b4b" rx="2"/>

          {/* Candle 5 - red (bottom dip) */}
          <line x1="104" y1="68" x2="104" y2="84" stroke="#842c2c" strokeWidth="2"/>
          <rect x="100" y="72" width="8" height="10" fill="#d24b4b" rx="2"/>

          {/* Candle 6 - green */}
          <line x1="124" y1="50" x2="124" y2="79" stroke="#1d6639" strokeWidth="2"/>
          <rect x="120" y="54" width="8" height="20" fill="#2ecc71" rx="2"/>

          {/* Candle 7 - red */}
          <line x1="144" y1="34" x2="144" y2="62" stroke="#842c2c" strokeWidth="2"/>
          <rect x="140" y="38" width="8" height="16" fill="#d24b4b" rx="2"/>

          {/* Candle 8 - green impulse (very tall) */}
          <line x1="164" y1="20" x2="164" y2="70" stroke="#1d6639" strokeWidth="2"/>
          <rect x="160" y="24" width="8" height="42" fill="#2ecc71" rx="2"/>
        </svg>
        <div className="mc-zone-label">Zone de demande testee</div>
      </div>
    )
  if (step.num === "04")
    return (
      <div className="mc-visual mc-visual--djeli">
        <img src="/djeli.png" alt="Djeli" className="mc-djeli-img" />
        <p className="mc-djeli-quote">
          "Le bon trade n'est pas le plus rapide. Ce que seul dont certes, le risque et l'invalidation sont clairs."
        </p>
      </div>
    )
  return (
    <div className="mc-visual mc-visual--prog">
      <div className="mc-tree-icon"><Icon name="spark" size={32} /></div>
      <div className="mc-prog-label">COMPETENCE ACQUISE</div>
      <p className="mc-prog-text">Tu avances. Tu deviens maitre de ton marche.</p>
      <div className="mc-badges">
        <span className="mc-badge mc-badge--xp">&#11088; {step.xp ?? ""}</span>
        <span className="mc-badge mc-badge--coin">&#129689; {step.coins ?? ""}</span>
      </div>
    </div>
  )
}

function Method() {
  return (
    <section id="methode" className="section method">
      <div className="shell">
        <div className="section-head section-head--center">
          <div className="eyebrow eyebrow--light">
            <span /> Notre methode
          </div>
          <h2>
            WOY n'est pas une simple formation.
            <em>C'est une methode a vivre.</em>
          </h2>
          <p>Une decision <i>&#183;</i> Une consequence <i>&#183;</i> Une lecon</p>
        </div>
        <div className="mc-row">
          {methodSteps.map((step, i) => (
            <div key={step.num} className={`mc-card${step.active ? " mc-card--active" : ""}`}>
              <div className="mc-num">{step.num}</div>
              <MethodCardVisual step={step} />
              <h3 className="mc-title">{step.title}</h3>
              <p className="mc-sub">{step.sub}</p>
              {step.tags && (
                <div className="mc-tags">
                  {step.tags.map((t: string) => <span key={t}>{t}</span>)}
                </div>
              )}
              {step.loc && <div className="mc-loc">&#128205; {step.loc}</div>}
              {step.note && !step.tags && <div className="mc-note">{step.note}</div>}

            </div>
          ))}
        </div>
        <div className="method-conclusion">
          <span />
          Tu vis. Tu decides. <em>Tu apprends.</em>
          <span />
        </div>
      </div>
    </section>
  )
}


const choices = [
  [
    "Investir immédiatement.",
    "Une décision rapide peut t’exposer à des informations incomplètes.",
  ],
  [
    "Vérifier les informations et les risques.",
    "Tu prends le temps de distinguer les faits, les promesses et les risques.",
  ],
  [
    "Demander conseil avant de décider.",
    "Un avis extérieur peut t’aider, mais la décision doit rester comprise et réfléchie.",
  ],
]

function Narrative() {
  const [selected, setSelected] = useState(1)
  return (
    <section className="section narrative">
      <div className="shell">
        <div className="section-head section-head--split narrative-head">
          <div>
            <div className="eyebrow">
              <span /> Les histoires dans les cours
            </div>
            <h2>
              Des histoires pour comprendre.
              <em>Des décisions pour apprendre.</em>
            </h2>
          </div>
          <p>
            Dans les leçons, Ahmadou, Gassama et Djéli vivent des situations
            concrètes. Tu observes, tu décides, tu apprends.
          </p>
        </div>
        <div className="narrative-grid">
          <div className="characters-panel">
            <div className="characters-copy">
              <small>LES PERSONNAGES WÔY</small>
              <h3>Des situations proches de la vie réelle.</h3>
              <p>
                Ils donnent un visage aux décisions, aux doutes et aux
                apprentissages.
              </p>
            </div>
            <div className="character-stage">
              {[
                { name: "Gassama", role: "Le contexte", img: "/gassama.png", cls: "c0" },
                { name: "Ahmadou", role: "L’apprenant", img: "/ahmadou.png", cls: "c1" },
                { name: "Djéli", role: "Le guide", img: "/djeli.png", cls: "c2" },
              ].map(({ name, role, img, cls }) => (
                <div className={`character ${cls}`} key={name}>
                  <div className="character-art">
                    <img
                      src={img}
                      alt={name}
                      className="character-photo"
                      loading="lazy"
                    />
                  </div>
                  <b>{name}</b>
                  <small>{role}</small>
                </div>
              ))}
            </div>
            <div className="character-badge-note">
              <Icon name="spark" size={13} /> Personnages officiels WÔY
            </div>
          </div>
          <div className="scenario">
            <div className="scenario__top">
              <span>Démonstration pédagogique</span>
              <small>LEÇON · DÉCISION & RISQUE</small>
            </div>
            <h3>Ahmadou face à une décision financière</h3>
            <div className="scenario__story">
              <span className="avatar avatar--ah">A</span>
              <p>
                Ahmadou reçoit une prime de <b>250 000 FCFA</b>. Gassama lui
                parle d’un placement présenté comme sans risque. Ahmadou hésite.
                Que devrait-il faire ?
              </p>
            </div>
            <h4>Que ferais-tu à sa place ?</h4>
            <div
              className="choice-list"
              role="radiogroup"
              aria-label="Choisir une réponse"
            >
              {choices.map(([label], i) => (
                <button
                  type="button"
                  role="radio"
                  aria-checked={selected === i}
                  className={selected === i ? "selected" : ""}
                  onClick={() => setSelected(i)}
                  key={label}
                >
                  <span>{String.fromCharCode(65 + i)}</span>
                  {label}
                  <i>{selected === i && <Icon name="check" size={14} />}</i>
                </button>
              ))}
            </div>
            <div className="consequence">
              <small>CONSÉQUENCE PÉDAGOGIQUE</small>
              <p>{choices[selected][1]}</p>
            </div>
            <div className="djeli-feedback">
              <span className="avatar avatar--dj">D</span>
              <p>
                <small>LE RETOUR DE DJÉLI</small>
                <b>
                  « Avant d’investir, prends le temps de comprendre les risques
                  et de vérifier les informations. »
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface RouteLevel {
  id: string
  level: string
  name: string
  subtitle: string
  description: string
  learning: string
  objective: string
  isElite?: boolean
}

const routeLevels: RouteLevel[] = [
  {
    id: "n0",
    level: "N0",
    name: "DÉCOUVERTE",
    subtitle: "Découverte",
    description:
      "Fais tes premiers pas dans l'univers de la finance, de la crypto et de l'investissement, même si tu pars de zéro.",
    learning:
      "Le rôle de l'argent, les notions de base de la finance, le fonctionnement général des cryptoactifs et les premiers réflexes à adopter.",
    objective:
      "Comprendre les concepts essentiels et acquérir les bons repères pour commencer ton apprentissage.",
  },
  {
    id: "n1",
    level: "N1",
    name: "SÉCURITÉ TOTALE",
    subtitle: "Sécurité totale",
    description:
      "Apprends à reconnaître les pièges financiers et à protéger tes informations, tes comptes et tes actifs numériques.",
    learning:
      "Les arnaques courantes, la sécurité des portefeuilles numériques, la protection des accès et les bonnes pratiques de vérification.",
    objective:
      "Identifier les risques de fraude et adopter des habitudes de sécurité avant toute opération financière.",
  },
  {
    id: "n2",
    level: "N2",
    name: "FONDAMENTAUX",
    subtitle: "Fondamentaux",
    description:
      "Découvre les mécanismes essentiels de la finance, des marchés et des cryptoactifs pour mieux comprendre leur fonctionnement.",
    learning:
      "Les principes de l'épargne, de l'investissement, de l'offre et de la demande, des actifs financiers et de la volatilité.",
    objective:
      "Acquérir une base solide pour comprendre les marchés et les décisions financières.",
  },
  {
    id: "n3",
    level: "N3",
    name: "LIRE LE MARCHÉ",
    subtitle: "Lire le marché",
    description:
      "Apprends à observer les mouvements des marchés et à interpréter les informations avant de prendre une décision.",
    learning:
      "Les tendances, les graphiques, les indicateurs de base, les actualités économiques et les facteurs qui influencent les prix.",
    objective:
      "Développer ta capacité à analyser une situation de marché sans suivre aveuglément les tendances.",
  },
  {
    id: "n4",
    level: "N4",
    name: "DÉCISION ET EXÉCUTION",
    subtitle: "Décision & Exécution",
    description:
      "Passe de la compréhension à la pratique en apprenant à construire une méthode et à tester tes décisions.",
    learning:
      "La préparation d'un plan, la comparaison des options, les points d'entrée et de sortie théoriques et les exercices de simulation.",
    objective:
      "Savoir justifier une décision et appliquer une méthode dans un environnement d'entraînement simulé.",
  },
  {
    id: "n5",
    level: "N5",
    name: "RISQUE ET PORTEFEUILLE",
    subtitle: "Risque & Portefeuille",
    description:
      "Découvre comment évaluer les risques et organiser un portefeuille pour éviter les décisions impulsives.",
    learning:
      "La diversification, la gestion des pertes potentielles, la répartition des actifs et le suivi d'un portefeuille simulé.",
    objective:
      "Construire et suivre un portefeuille fictif en tenant compte des risques et de ses objectifs.",
  },
  {
    id: "n6",
    level: "N6",
    name: "MAÎTRISE PRO",
    subtitle: "Maîtrise Pro",
    description:
      "Consolide tes connaissances et développe une approche plus structurée, autonome et disciplinée des marchés.",
    learning:
      "L'analyse approfondie, l'évaluation de scénarios, la gestion des émotions, le suivi des décisions et l'amélioration de sa méthode.",
    objective:
      "Mobiliser les compétences acquises pour analyser des situations complexes et prendre des décisions argumentées.",
  },
  {
    id: "elite",
    level: "CERCLE ÉLITE",
    name: "CERCLE ÉLITE",
    subtitle: "Destination",
    description:
      "Prolonge ton parcours WÔY dans une étape dédiée à l'approfondissement des connaissances et au partage d'expériences.",
    learning:
      "L'étude de situations plus complexes, l'échange de méthodes, l'analyse critique et le perfectionnement continu des compétences.",
    objective:
      "Continuer à développer ton autonomie, ton esprit critique et ta capacité à transmettre tes connaissances.",
    isElite: true,
  },
]

function Route() {
  const [activeLevel, setActiveLevel] = useState(2)
  const step = routeLevels[activeLevel]

  const handleSelectLevel = (index: number) => {
    setActiveLevel(index)
  }

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handleSelectLevel(index)
    } else if (e.key === "ArrowRight") {
      e.preventDefault()
      handleSelectLevel(Math.min(routeLevels.length - 1, activeLevel + 1))
    } else if (e.key === "ArrowLeft") {
      e.preventDefault()
      handleSelectLevel(Math.max(0, activeLevel - 1))
    }
  }

  const progressPercent = (activeLevel / (routeLevels.length - 1)) * 100

  return (
    <section id="route" className="section route">
      <div className="shell">
        <div className="section-head section-head--split reveal-on-scroll">
          <div>
            <div className="eyebrow eyebrow--gold">
              <span /> La Route WÔY
            </div>
            <h2>
              Une progression
              <br />
              <em>à ton rythme.</em>
            </h2>
          </div>
          <div>
            <p>
              De N0 à N6, construis tes connaissances étape par étape, jusqu’au
              Cercle Élite. Clique sur chaque étape pour explorer le programme.
            </p>
            <span className="route-note">
              <Icon name="target" size={16} /> Chaque étape consolide tes acquis
              et valide un palier concret.
            </span>
          </div>
        </div>

        {/* Interactive progression roadmap */}
        <div className="roadmap-container reveal-on-scroll">
          <div className="roadmap-scroll-hint">
            <span>Fais défiler la route horizontalement</span>
            <Icon name="arrow" size={14} />
          </div>

          <div
            className="roadmap-track-wrapper"
            role="tablist"
            aria-label="Parcours pédagogique de la Route WÔY"
          >
            {/* The progression connecting line */}
            <div className="roadmap-line-bg">
              <div
                className="roadmap-line-fill"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Steps N0 to N6 */}
            <div className="roadmap-steps-list">
              {routeLevels.slice(0, 7).map((lvl, i) => {
                const isPassed = i < activeLevel
                const isActive = i === activeLevel
                return (
                  <button
                    key={lvl.id}
                    type="button"
                    role="tab"
                    id={`route-tab-${lvl.id}`}
                    aria-controls={`route-panel-${lvl.id}`}
                    aria-selected={isActive}
                    tabIndex={0}
                    onClick={() => handleSelectLevel(i)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                    className={`roadmap-step-btn ${
                      isActive ? "is-active" : isPassed ? "is-passed" : "is-upcoming"
                    }`}
                  >
                    <span className="roadmap-step-circle">
                      {isPassed ? (
                        <Icon name="check" size={17} />
                      ) : (
                        <b>{lvl.level}</b>
                      )}
                    </span>
                    <div className="roadmap-step-meta">
                      <b className="roadmap-step-lvl">{lvl.level}</b>
                      <small className="roadmap-step-sub">{lvl.subtitle}</small>
                    </div>
                  </button>
                )
              })}

              {/* Cercle Élite (step 7) */}
              {(() => {
                const eliteLvl = routeLevels[7]
                const isActive = activeLevel === 7
                return (
                  <button
                    key={eliteLvl.id}
                    type="button"
                    role="tab"
                    id={`route-tab-${eliteLvl.id}`}
                    aria-controls={`route-panel-${eliteLvl.id}`}
                    aria-selected={isActive}
                    tabIndex={0}
                    onClick={() => handleSelectLevel(7)}
                    onKeyDown={(e) => handleKeyDown(e, 7)}
                    className={`elite-step-btn ${isActive ? "is-active" : ""}`}
                  >
                    <span className="elite-step-icon">
                      <Icon name="spark" size={22} />
                    </span>
                    <div className="elite-step-text">
                      <small>DESTINATION</small>
                      <b>Cercle Élite</b>
                    </div>
                  </button>
                )
              })()}
            </div>
          </div>
        </div>

        {/* Detailed Short Info Card */}
        <div
          id={`route-panel-${step.id}`}
          role="tabpanel"
          aria-labelledby={`route-tab-${step.id}`}
          className="route-detail-card"
        >
          {/* Card Header */}
          <div className="route-detail-header">
            <div className="route-detail-badges">
              <span className="route-badge-level">
                {step.isElite ? (
                  <>
                    <Icon name="spark" size={14} /> CERCLE ÉLITE
                  </>
                ) : (
                  `NIVEAU : ${step.level}`
                )}
              </span>
              <span className="route-badge-counter">
                Étape {activeLevel + 1} sur 8
              </span>
              <span className="route-badge-provisory">
                Proposition éditoriale · En attente de validation
              </span>
            </div>
            <h3 className="route-detail-title">
              {step.isElite ? step.name : `${step.level} — ${step.name}`}
            </h3>
            <p className="route-detail-desc">{step.description}</p>
          </div>

          {/* Card Body: Ce que tu vas apprendre & Objectif */}
          <div className="route-detail-grid">
            <div className="route-detail-box">
              <div className="route-box-head">
                <span className="route-box-icon">
                  <Icon name="book" size={17} />
                </span>
                <small>CE QUE TU VAS APPRENDRE</small>
              </div>
              <p>{step.learning}</p>
            </div>

            <div className="route-detail-box route-detail-box--highlight">
              <div className="route-box-head">
                <span className="route-box-icon">
                  <Icon name="target" size={17} />
                </span>
                <small>OBJECTIF PÉDAGOGIQUE</small>
              </div>
              <p>{step.objective}</p>
            </div>
          </div>

          {/* Navigation Controls inside Card */}
          <div className="route-detail-nav">
            <button
              type="button"
              className="route-nav-btn"
              disabled={activeLevel === 0}
              onClick={() => handleSelectLevel(activeLevel - 1)}
              aria-label="Niveau précédent"
            >
              ← Niveau précédent
            </button>

            <div className="route-nav-dots" aria-hidden="true">
              {routeLevels.map((lvl, idx) => (
                <span
                  key={lvl.id}
                  onClick={() => handleSelectLevel(idx)}
                  className={`route-nav-dot ${
                    idx === activeLevel ? "is-active" : ""
                  }`}
                  title={lvl.level}
                />
              ))}
            </div>

            <button
              type="button"
              className="route-nav-btn route-nav-btn--next"
              disabled={activeLevel === routeLevels.length - 1}
              onClick={() => handleSelectLevel(activeLevel + 1)}
              aria-label="Niveau suivant"
            >
              Niveau suivant →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

const profiles = [
  [
    "01",
    "DÉBUTANT LUCIDE",
    "Je veux comprendre l’argent, la crypto et l’investissement, même si je pars de zéro.",
  ],
  [
    "02",
    "DÉJÀ EXPOSÉ AUX MARCHÉS",
    "Je veux arrêter d’agir au hasard, comprendre mes erreurs et mieux maîtriser les risques.",
  ],
  [
    "03",
    "ENTREPRENEUR",
    "Je veux mieux gérer mon argent, comprendre les financements et développer mes projets.",
  ],
  [
    "04",
    "PROFESSIONNEL",
    "Je veux comprendre les marchés et intégrer la finance et les nouvelles technologies dans mes décisions.",
  ],
  [
    "05",
    "PROFIL AMBITIEUX",
    "Je veux approfondir mes compétences, analyser les marchés et construire une méthode personnelle.",
  ],
]

function Profiles() {
  return (
    <section id="profils" className="section profiles">
      <div className="shell">
        <div className="section-head section-head--split">
          <div>
            <div className="eyebrow">
              <span /> Pour qui ?
            </div>
            <h2>
              Ton point de départ
              <br />
              n’est pas une limite.
            </h2>
          </div>
          <p>
            Que tu partes de zéro ou que tu investisses déjà, WÔY t’aide à
            comprendre ce que tu fais et pourquoi tu le fais.
          </p>
        </div>
        <div className="profiles-photo">
          <img
            src={profilePhoto}
            alt="Communauté d'apprenants et professionnels WÔY Academy"
          />
        </div>
        <div className="profile-list">
          {profiles.map(([number, title, text]) => (
            <article key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Fracture() {
  return (
    <section className="section fracture">
      <div className="shell">
        <div className="section-head section-head--center section-head--dark">
          <div className="eyebrow eyebrow--light">
            <span /> Comprendre avant d’agir
          </div>
          <h2>
            L’un apprend.<em>L’autre investit sans comprendre.</em>
          </h2>
          <p>
            La différence ? Savoir pourquoi tu investis, quels risques tu prends
            et comment protéger ton argent.
          </p>
        </div>
        <div className="comparison">
          <article className="comparison__good">
            <div className="comparison__label">
              <span>
                <Icon name="shield" size={20} />
              </span>
              <h3>Avec WÔY</h3>
              <small>UNE MÉTHODE POUR DÉCIDER</small>
            </div>
            {[
              "Je comprends avant d’agir.",
              "J’évalue les risques.",
              "Je vérifie avant d’investir.",
              "Je décide par moi-même.",
            ].map((x) => (
              <p key={x}>
                <span>
                  <Icon name="check" size={15} />
                </span>
                {x}
              </p>
            ))}
          </article>
          <div className="comparison__center">
            <div className="comparison__vs-stage">
              <img
                src="/image-vs.png"
                alt="Ahmadou avec méthode WÔY vs Gassama sans méthode"
                className="comparison__vs-img"
              />
              <div className="versus">VS</div>
            </div>
          </div>
          <article className="comparison__bad">
            <div className="comparison__label">
              <span>✕</span>
              <h3>Sans méthode</h3>
              <small>DES RÉFLEXES À QUESTIONNER</small>
            </div>
            {[
              "Je suis les tendances.",
              "Je crois aux promesses.",
              "J’investis sans vérifier.",
              "Je dépends des autres.",
            ].map((x) => (
              <p key={x}>
                <span>✕</span>
                {x}
              </p>
            ))}
          </article>
        </div>
      </div>
    </section>
  )
}

function CommunityUI() {
  return (
    <div className="offer-ui community-ui">
      <div className="community-sidebar">
        <span>W</span>
        <i />
        <i />
        <i />
      </div>
      <div className="community-main">
        <div className="community-top">
          <b>Communauté WÔY</b>
          <span>24 membres en ligne</span>
        </div>
        {[
          ["SM", "Sarah M.", "Comment évaluer le risque d’un projet ?"],
          [
            "KD",
            "Karim D.",
            "Je commence par vérifier la source et les hypothèses.",
          ],
          [
            "AN",
            "Aminata N.",
            "Le module 3 propose justement une grille simple.",
          ],
        ].map(([initials, name, message], i) => (
          <div className={`message m${i}`} key={name}>
            <span>{initials}</span>
            <p>
              <b>{name}</b>
              <small>{message}</small>
            </p>
          </div>
        ))}
        <div className="reply">
          Écrire une réponse… <Icon name="arrow" size={15} />
        </div>
      </div>
    </div>
  )
}

function WhyWoy() {
  const offers = [
    [
      "01",
      "L’Académie WÔY",
      "Apprends la finance, la crypto et l’investissement avec des cours progressifs, des exercices interactifs et des corrections détaillées.",
      <LessonInterface />,
    ],
    [
      "02",
      "La Communauté WÔY",
      "Pose tes questions, échange avec d’autres apprenants et progresse avec ceux qui partagent tes objectifs.",
      <CommunityUI />,
    ],
    [
      "03",
      "Les Rapports WÔY",
      "Accède à des recherches et des analyses structurées pour mieux comprendre les marchés, les opportunités et les risques.",
      <ReportInterface />,
    ],
  ]
  return (
    <section className="section why">
      <div className="shell">
        <div className="section-head section-head--center">
          <div className="eyebrow">
            <span /> Pourquoi WÔY ?
          </div>
          <h2>
            Apprendre. Partager.<em>S’élever.</em>
          </h2>
          <p>
            Une académie, une communauté et des analyses pour passer de la
            théorie à la pratique.
          </p>
        </div>
        <div className="offers">
          {offers.map(([number, title, text, ui]) => (
            <article key={String(title)}>
              <div className="offer-copy">
                <span>{number as string}</span>
                <h3>{title as string}</h3>
                <p>{text as string}</p>
                <small>APERÇU DE DÉMONSTRATION</small>
              </div>
              <div className="offer-visual">{ui as ReactNode}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const values = [
  ["01", "Comprendre", "Maîtriser les bases de l’argent et des marchés."],
  ["02", "Décider", "Évaluer les risques et choisir par soi-même."],
  ["03", "Avancer", "Apprendre et pratiquer étape par étape."],
  ["04", "Transmettre", "Faire grandir le savoir autour de soi."],
]

function Vision() {
  const [isHovered, setIsHovered] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)

  const cryptoItems = [
    { name: "Bitcoin", sym: "BTC", icon: "\u20bf", cls: "crypto-badge--btc" },
    { name: "Ethereum", sym: "ETH", icon: "\u25c6", cls: "crypto-badge--eth" },
    { name: "Solana", sym: "SOL", icon: "\u25ce", cls: "crypto-badge--sol" },
    { name: "Tether", sym: "USDT", icon: "\u20ae", cls: "crypto-badge--usdt" },
  ]

  // Stop audio if user scrolls away from the section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !audioRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight || document.documentElement.clientHeight
      
      const isVisible = rect.top < windowHeight && rect.bottom > 0
      if (!isVisible && !audioRef.current.paused) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleCauriTouch = () => {
    setIsHovered(true)
    if (!audioRef.current) return
    if (audioRef.current.paused) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(() => {})
    }
  }

  return (
    <section id="vision" ref={sectionRef} className="section vision">
      <audio ref={audioRef} src="/son-djeli.mp3" preload="auto" />
      <div className="vision-pattern" />
      <div className="shell">
        <div className="vision-copy">
          <div className="eyebrow eyebrow--light">
            <span /> Notre vision
          </div>
          <h2>
            Hier, les Djelis
            <br />
            transmettaient le savoir.<em>Aujourd'hui, WOY prend le relais.</em>
          </h2>
          <p>
            Nous transmettons les connaissances financieres pour que chacun
            puisse comprendre, decider et construire son avenir.
          </p>
        </div>

        <div
          className={`vision-cauri-stage ${isHovered ? "is-hovered" : ""}`}
          onMouseEnter={handleCauriTouch}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleCauriTouch}
        >
          <div className="cauri-glow" />
          <div className="cauri-light-halo" />

          {/* Crypto badges that emerge on mouse hover / touch */}
          <div className="crypto-badges-container">
            {cryptoItems.map((item, idx) => (
              <div
                key={item.sym}
                className={`crypto-popup-badge crypto-pos-${idx + 1} ${item.cls}`}
              >
                <span className="badge-icon">{item.icon}</span>
                <span className="badge-name">{item.name}</span>
                <span className="badge-sym">({item.sym})</span>
              </div>
            ))}
          </div>

          {/* Floating Cauri with golden glow (no spin) */}
          <div className="cauri-float-wrapper">
            <img
              src="/cauri.png"
              alt="Cauri WOY"
              className="cauri-float-img"
            />
          </div>
        </div>
      </div>
      <div className="values-marquee">
        <div>
          Le savoir est l'elevation <span>&#183;</span> La maitrise est la liberte{" "}
          <span>&#183;</span> La discipline est la cle <span>&#183;</span> La communaute
          est notre force <span>&#183;</span> L'heritage est notre mission.
        </div>
      </div>
    </section>
  )
}
function FinalCTA({ onOpenReservation }: { onOpenReservation?: () => void }) {
  const [particles, setParticles] = useState<Particle[]>([])
  const idRef = useRef(0)
  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (
      event.pointerType === "touch" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      Math.random() > 0.14
    )
      return
    const rect = event.currentTarget.getBoundingClientRect()
    const id = idRef.current++
    const symbols = ["₿", "₣", "%", "↗", "◇"]
    setParticles((current) => [
      ...current.slice(-4),
      {
        id,
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        symbol: symbols[id % symbols.length],
      },
    ])
    window.setTimeout(
      () => setParticles((current) => current.filter((p) => p.id !== id)),
      1100,
    )
  }
  return (
    <section id="attente" className="final-cta" onPointerMove={onPointerMove}>
      {particles.map((particle) => (
        <span
          className="particle"
          key={particle.id}
          style={{ left: particle.x, top: particle.y }}
        >
          {particle.symbol}
        </span>
      ))}
      <div className="cta-orbit orbit-1" />
      <div className="cta-orbit orbit-2" />
      <div className="shell final-cta__inner">
        <div className="eyebrow eyebrow--light">
          <span /> Accès anticipé
        </div>
        <h2>
          Prêt à comprendre
          <br />
          avant d’investir ?
        </h2>
        <p>
          Rejoins la liste d’attente et sois informé en priorité de l’ouverture
          de la plateforme.
        </p>
        <div>
          <ButtonLink href="#attente" onClick={onOpenReservation}>
            Rejoindre la liste d’attente <Icon name="arrow" size={18} />
          </ButtonLink>
          <a href="#plateforme" className="text-link">
            Revoir la plateforme →
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p>
            WÔY Academy — Comprendre la finance, la crypto et l’investissement
            pour prendre des décisions plus éclairées.
          </p>
          <div className="footer__socials">
            <span className="footer__socials-label">Suivez WÔY Academy</span>
            <div className="footer__socials-links">
              <a
                href="https://www.instagram.com/woy_academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Instagram WÔY Academy"
                title="Instagram WÔY Academy"
              >
                <Icon name="instagram" size={19} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61594635882825"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="Facebook WÔY Academy"
                title="Facebook WÔY Academy"
              >
                <Icon name="facebook" size={19} />
              </a>
              <a
                href="https://www.youtube.com/@WoyACADEMY"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="YouTube WÔY Academy"
                title="YouTube WÔY Academy"
              >
                <Icon name="youtube" size={19} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__nav">
          <small>NAVIGATION</small>
          {navItems.map(([label, id]) => (
            <a href={`#${id}`} key={id}>
              {label}
            </a>
          ))}
        </div>
        <div className="footer__info">
          <small>INFORMATIONS</small>
          <p>
            Les coordonnées, réseaux sociaux et liens légaux seront ajoutés
            lorsqu’ils seront fournis.
          </p>
        </div>
      </div>
      <div className="shell footer__bottom">
        <span>© WÔY Academy — Tous droits réservés.</span>
        <span>Éducation financière · Afrique · Monde</span>
      </div>
    </footer>
  )
}

function ReservationModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [level, setLevel] = useState("Débutant")
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")
  const [error, setError] = useState("")

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }
    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.style.overflow = ""
      setStatus("idle")
      setError("")
    }
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!fullName.trim() || !email.trim()) {
      setError("Veuillez remplir votre nom et votre adresse e-mail.")
      return
    }
    setError("")
    setStatus("loading")
    setTimeout(() => {
      setStatus("success")
    }, 1200)
  }

  const handleReset = () => {
    setStatus("idle")
    setFullName("")
    setEmail("")
    setWhatsapp("")
    setLevel("Débutant")
    onClose()
  }

  return (
    <div className="reservation-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="reservation-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="reservation-modal__close"
          onClick={onClose}
          aria-label="Fermer la fenêtre"
        >
          <Icon name="close" size={18} />
        </button>

        {status === "success" ? (
          <div className="reservation-success">
            <div className="reservation-success__icon">
              <Icon name="spark" size={32} />
            </div>
            <h3>Simulation réussie !</h3>
            <div className="reservation-success__message">
              <p>
                « Voici le message que recevrait un futur apprenant après sa
                préinscription à WÔY Academy. »
              </p>
              <div className="reservation-fictive-card">
                <div className="fictive-card__header">
                  <span className="fictive-card__avatar">W</span>
                  <div>
                    <strong>WÔY Academy</strong>
                    <small>Préinscription confirmée · Rang prioritaire</small>
                  </div>
                </div>
                <div className="fictive-card__body">
                  <p>
                    Bienvenue dans l'aventure, <b>{fullName || "futur apprenant"}</b> !
                  </p>
                  <p>
                    Tu as choisi le niveau <b>{level}</b>. Ton accès anticipé
                    t'ouvrira la porte des leçons interactives, du simulateur de
                    portefeuille et des confrontations dans l’arène LAAMB dès le
                    lancement officiel.
                  </p>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="button button--primary reservation-btn-action"
              onClick={handleReset}
            >
              Retour au site
            </button>
            <p className="reservation-disclaimer">
              Démonstration — aucune inscription réelle
            </p>
          </div>
        ) : (
          <div className="reservation-body">
            <div className="eyebrow eyebrow--light reservation-eyebrow">
              <span /> Préinscription
            </div>
            <h2>Réserve ta place dans l’univers WÔY.</h2>
            <p className="reservation-subtitle">
              Rejoins les futurs apprenants de WÔY Academy et prépare-toi à
              découvrir une nouvelle façon d'apprendre la finance, la crypto et
              l'investissement.
            </p>

            <form onSubmit={handleSubmit} className="reservation-form">
              {error && <div className="reservation-error">{error}</div>}

              <div className="form-group">
                <label htmlFor="res-name">
                  Nom complet <span>*</span>
                </label>
                <input
                  id="res-name"
                  type="text"
                  placeholder="Ex. Moussa Diallo"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  disabled={status === "loading"}
                />
              </div>

              <div className="form-group">
                <label htmlFor="res-email">
                  Adresse e-mail <span>*</span>
                </label>
                <input
                  id="res-email"
                  type="email"
                  placeholder="Ex. moussa@exemple.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                />
              </div>

              <div className="form-group">
                <label htmlFor="res-whatsapp">
                  Numéro WhatsApp <small>(facultatif)</small>
                </label>
                <input
                  id="res-whatsapp"
                  type="tel"
                  placeholder="Ex. +221 77 000 00 00"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  disabled={status === "loading"}
                />
              </div>

              <div className="form-group">
                <label>Niveau actuel</label>
                <div className="level-selector">
                  {["Débutant", "Intermédiaire", "Avancé"].map((lvl) => (
                    <button
                      type="button"
                      key={lvl}
                      className={`level-btn ${level === lvl ? "is-selected" : ""}`}
                      onClick={() => setLevel(lvl)}
                      disabled={status === "loading"}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="button button--primary reservation-submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <span className="reservation-spinner" />
                ) : (
                  <>
                    Réserver ma place <Icon name="arrow" size={17} />
                  </>
                )}
              </button>
            </form>

            <p className="reservation-disclaimer">
              Démonstration — aucune inscription réelle
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false)

  useEffect(() => {
    const selector = [
      ".section-head",
      ".pillar-card",
      ".method-step",
      ".characters-panel",
      ".scenario",
      ".roadmap-container",
      ".profile-list article",
      ".comparison article",
      ".why-grid article",
      ".values-grid article",
      ".pricing-card",
      ".faq-item",
      ".reveal-on-scroll",
    ].join(", ")

    const elements = document.querySelectorAll(selector)
    elements.forEach((el) => {
      el.classList.add("reveal-on-scroll")
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed")
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header onOpenReservation={() => setIsReservationOpen(true)} />
      <Hero onOpenReservation={() => setIsReservationOpen(true)} />
      <Platform />
      <Method />
      <Narrative />
      <Route />
      <Profiles />
      <Fracture />
      <WhyWoy />
      <Vision />
      <FinalCTA onOpenReservation={() => setIsReservationOpen(true)} />
      <Footer />
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </>
  )
}
