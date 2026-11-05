import { useEffect, useRef, useState, type ReactNode } from "react"

const profilePhoto = "/cible-woy-02.png"

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
        src="/logo-header-footer.gif"
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
  onOpenReservation,
}: {
  isOpen: boolean
  onClose: () => void
  onOpenReservation?: () => void
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
          <Icon name="close" size={18} />
        </button>
        <div className="video-modal-screen">
          <video
            src="/woy-vid-45s.mp4"
            poster="/woy-hero-image.png?v=pub"
            className="video-player"
            controls
            autoPlay
            playsInline
          >
            Votre navigateur ne prend pas en charge la lecture vidéo.
          </video>
        </div>
        <div className="video-modal-info">
          <div className="video-modal-copy">
            <h3>L'histoire d'Amadou</h3>
            <p>
              Suis Amadou dans ses premières décisions financières et apprends à
              reconnaître les risques avant d’agir.
            </p>
          </div>
          <div className="video-modal-actions">
            <button
              type="button"
              className="button button--primary"
              onClick={() => {
                onClose()
                onOpenReservation?.()
              }}
            >
              Réserve ta place <Icon name="arrow" size={16} />
            </button>
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
            src="/woy-hero-image.png?v=pub"
            alt="Plateforme WÔY Academy"
            className="hero-cinema__canvas-img"
          />

          {/* Left subtle gradient vignette for text readability */}
          <div className="hero-cinema__canvas-vignette" />

          {/* Pulsing Light Golden Circle EXACTLY over the play button in the character's hand */}
          <button
            type="button"
            className="hero-play-hotspot hero-play-hotspot--desktop"
            onClick={() => setIsVideoOpen(true)}
            aria-label="Voir la vidéo de 45 s"
            title="Voir la vidéo de 45 s"
          >
            <span className="hero-pulse-ripple" />
            <span className="hero-pulse-ring" />
            <span className="hero-pulse-glow" />
          </button>

          {/* Left Column Content strictly confined to left ~36% to never hide the computer */}
          <div className="hero-cinema__canvas-content">
            <div className="hero-cinema__brand-mark">
              <img
                src="/woy-hero-clean.png?v=point2"
                alt="WÔY"
                className="hero-cinema__woy-img"
              />
            </div>
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
                <span>VOIR LA VIDÉO · 45 S</span>
              </button>
            </div>
          </div>

          {/* Dedicated mobile media frame for small screens */}
          <div className="hero-cinema__mobile-media">
            <img
              src="/woy-hero-image.png?v=pub"
              alt="Plateforme WÔY Academy sur ordinateur"
              className="hero-cinema__mobile-img"
              loading="eager"
            />
            <button
              type="button"
              className="hero-play-hotspot hero-play-hotspot--mobile"
              onClick={() => setIsVideoOpen(true)}
              aria-label="Voir la vidéo de 45 s"
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
        onOpenReservation={onOpenReservation}
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
              <b>Amadou</b>
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
              <small>Amadou · Réponse validée</small>
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
type PillarIconType = "book-open" | "chart-up" | "doc-analysis" | "trophy"

function PillarHeaderIcon({ type }: { type: PillarIconType }) {
  if (type === "book-open") {
    return (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 4.5A2.5 2.5 0 0 1 4.5 2H11v17H4.5A2.5 2.5 0 0 0 2 21.5z" />
        <path d="M22 4.5A2.5 2.5 0 0 0 19.5 2H13v17h6.5a2.5 2.5 0 0 1 2.5 2.5z" />
      </svg>
    )
  }
  if (type === "chart-up") {
    return (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 11l6-6 4 4 7-7" />
        <path d="M15 2h5v5" />
        <path d="M5 21v-5" />
        <path d="M10 21v-8" />
        <path d="M15 21v-6" />
        <path d="M20 21V10" />
      </svg>
    )
  }
  if (type === "doc-analysis") {
    return (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 2h8l4 4v16H6z" />
        <path d="M14 2v4h4" />
        <path d="M9 10h6" />
        <path d="M9 14h6" />
        <path d="M9 18h4" />
      </svg>
    )
  }
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}

function PillarParcoursPreview() {
  return (
    <div className="pp-card-box pp-parcours-box">
      {/* Module 1: Comprendre la crypto - Done */}
      <div className="pp-course-item pp-course-item--done">
        <div className="pp-course-icon pp-course-icon--green">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <div className="pp-course-info">
          <span className="pp-course-title">Comprendre la crypto</span>
          <span className="pp-course-sub">Fondamentaux</span>
        </div>
        <span className="pp-course-badge pp-course-badge--done" aria-label="Terminé">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
      </div>

      {/* Module 2: Les marchés financiers - In Progress */}
      <div className="pp-course-item pp-course-item--active">
        <div className="pp-course-icon pp-course-icon--amber">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <div className="pp-course-info">
          <span className="pp-course-title">Les marchés financiers</span>
        </div>
        <span className="pp-course-badge pp-course-badge--play" aria-label="En cours">
          <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="6 3 20 12 6 21 6 3" />
          </svg>
        </span>
      </div>

      {/* Module 3: Gestion du risque - Locked */}
      <div className="pp-course-item pp-course-item--locked">
        <div className="pp-course-icon pp-course-icon--lock">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <div className="pp-course-info">
          <span className="pp-course-title pp-course-title--locked">Gestion du risque</span>
        </div>
        <span className="pp-course-lock" aria-label="Verrouillé">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </span>
      </div>

      {/* Module 4: Stratégies d'investissement - Locked */}
      <div className="pp-course-item pp-course-item--locked">
        <div className="pp-course-icon pp-course-icon--lock">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <div className="pp-course-info">
          <span className="pp-course-title pp-course-title--locked">Stratégies d'investissement</span>
        </div>
        <span className="pp-course-lock" aria-label="Verrouillé">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </span>
      </div>
    </div>
  )
}

function PillarPortfolioPreview() {
  const periods = ["1J", "1S", "1M", "3M", "1A"]

  return (
    <div className="pp-card-box pp-portfolio-box">
      <div className="pp-port-header">
        <span className="pp-port-label">Solde virtuel</span>
        <strong className="pp-port-amount">1 250 000 FCFA</strong>
        <span className="pp-port-change">+12,4 % (+130 000)</span>
      </div>

      <div className="pp-port-chart-container">
        <svg viewBox="0 0 260 76" preserveAspectRatio="none" aria-hidden="true" className="pp-port-svg">
          <defs>
            <linearGradient id="ppTealGradNew" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.32" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <path
            d="M0 64 C24 61 36 52 56 54 S88 40 112 43 S146 28 172 31 S212 16 260 7 V76 H0 Z"
            fill="url(#ppTealGradNew)"
          />
          <path
            d="M0 64 C24 61 36 52 56 54 S88 40 112 43 S146 28 172 31 S212 16 260 7"
            fill="none"
            stroke="#10b981"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="pp-port-period-pills">
        {periods.map((p) => (
          <span
            key={p}
            className={`pp-period-pill ${p === "1M" ? "is-active" : ""}`}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  )
}

function PillarReportPreview() {
  const barHeights = [28, 42, 56, 72, 85, 100]
  const items = [
    { label: "Analyse des marchés", color: "#3b82f6" },
    { label: "Performance du portefeuille", color: "#06b6d4" },
    { label: "Opportunités à surveiller", color: "#10b981" },
    { label: "Leçons du mois", color: "#f59e0b" },
  ]

  return (
    <div className="pp-card-box pp-report-white-box">
      <div className="pp-report-head-new">
        <strong className="pp-report-title">Rapport mensuel</strong>
        <span className="pp-report-date">Septembre 2024</span>
      </div>

      <div className="pp-report-chart-bars" aria-hidden="true">
        {barHeights.map((h, i) => (
          <div key={i} className="pp-report-bar-wrap">
            <span
              className="pp-report-bar"
              style={{ height: `${h}%` }}
            />
          </div>
        ))}
      </div>

      <ul className="pp-report-items-list">
        {items.map((item) => (
          <li key={item.label} className="pp-report-item">
            <span
              className="pp-report-check-dot"
              style={{ backgroundColor: item.color }}
              aria-hidden="true"
            >
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span className="pp-report-label">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function PillarLaambPreview() {
  const rankings = [
    { rank: "crown", name: "K. Diop", pts: "1 820 pts", isUser: false },
    { rank: "2", name: "A. Traoré", pts: "1 640 pts", isUser: false },
    { rank: "3", name: "M. Kane", pts: "1 520 pts", isUser: false },
    { rank: "4", name: "Toi", pts: "1 420 pts", isUser: true },
  ]

  return (
    <div className="pp-card-box pp-arena-box">
      <div className="pp-arena-top">
        <div className="pp-arena-score-block">
          <span className="pp-arena-score-label">WÓY Score</span>
          <strong className="pp-arena-score-val">1 420 pts</strong>
        </div>
        <span className="pp-arena-top-badge">Top 12%</span>
      </div>

      <div className="pp-arena-tabs">
        <span className="pp-arena-tab is-active">Classement</span>
        <span className="pp-arena-tab">Défis</span>
      </div>

      <div className="pp-arena-list">
        {rankings.map((r) => (
          <div
            key={r.name}
            className={`pp-arena-row ${r.isUser ? "is-user" : ""}`}
          >
            <div className="pp-arena-rank">
              {r.rank === "crown" ? (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b" aria-label="Premier">
                  <path d="M2 19h20v2H2v-2zm1.5-4.5L5 6l4.5 4.5L12 4l2.5 6.5L19 6l1.5 8.5H3.5z" />
                </svg>
              ) : (
                <span className="pp-rank-num">{r.rank}</span>
              )}
            </div>

            <div className={`pp-arena-avatar ${r.isUser ? "is-user-avatar" : ""}`}>
              <span>{r.name.charAt(0)}</span>
            </div>

            <span className={`pp-arena-name ${r.isUser ? "is-user-name" : ""}`}>
              {r.name}
            </span>

            <span className={`pp-arena-pts ${r.isUser ? "is-user-pts" : ""}`}>
              {r.pts}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

const platformPillars = [
  {
    icon: "book-open" as PillarIconType,
    title: "Parcours pédagogique",
    description: "Des cours progressifs, concrets et adaptés à ton niveau.",
    ui: <PillarParcoursPreview />,
  },
  {
    icon: "chart-up" as PillarIconType,
    title: "Portefeuille simulé",
    description: "Entraine-toi sans risque avec des conditions réelles de marché.",
    ui: <PillarPortfolioPreview />,
  },
  {
    icon: "doc-analysis" as PillarIconType,
    title: "Rapports mensuels",
    description: "Des analyses claires pour comprendre les tendances et progresser.",
    ui: <PillarReportPreview />,
  },
  {
    icon: "trophy" as PillarIconType,
    title: "Arène des traders",
    description: "Participe à des défis, compare tes décisions et progresse avec la communauté.",
    ui: <PillarLaambPreview />,
  },
]

function Platform() {
  return (
    <section id="plateforme" className="platform-clean-section">
      {/* Background ambient lighting */}
      <div className="platform-clean__ambient-glow" aria-hidden="true" />

      {/* Section Header */}
      <div className="platform-clean__head shell">
        <h2>
          Une plateforme, <em>quatre piliers.</em>
        </h2>
        <p>
          Une méthode complète pour passer de la compréhension à l'action, en toute autonomie.
        </p>
      </div>

      {/* 4 Cards Container */}
      <div className="platform-clean__container">
        <div className="platform-clean__grid">
          {platformPillars.map((pillar) => (
            <article key={pillar.title} className="pillar-clean-card">
              <div className="pillar-clean-card__top">
                <span className="pillar-clean-card__icon" aria-hidden="true">
                  <PillarHeaderIcon type={pillar.icon} />
                </span>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>

              <div className="pillar-clean-card__preview">
                {pillar.ui}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const methodSteps = [
  {
    num: "01",
    title: "HISTOIRE",
    desc: "Découvre une situation financière du quotidien.",
  },
  {
    num: "02",
    title: "CHOIX",
    desc: "Fais ton choix et découvre ses conséquences.",
  },
  {
    num: "03",
    title: "SIMULATION",
    desc: "Observe les réactions du marché simulé.",
  },
  {
    num: "04",
    title: "DJÉLI / FEEDBACK",
    desc: "Comprends tes erreurs grâce aux conseils du mentor.",
  },
  {
    num: "05",
    title: "PROGRESSION",
    desc: "Développe tes compétences étape par étape.",
  },
]

function MethodCardVisual({ num }: { num: string }) {
  if (num === "01") {
    return (
      <div className="ms-visual ms-visual--story">
        <img
          src="/ahmadou.png"
          alt="Amadou dans une situation narrative"
          className="ms-story-img"
          loading="lazy"
        />
        <span className="ms-story-tag">Dakar · Situation réelle</span>
      </div>
    )
  }

  if (num === "02") {
    return (
      <div className="ms-visual ms-visual--choice">
        <div className="ms-choice-pill ms-choice-pill--active">
          <span className="ms-choice-ico">↗</span>
          <span>Attendre le repli</span>
          <span className="ms-choice-check">✓</span>
        </div>
        <div className="ms-choice-pill">
          <span className="ms-choice-ico">☆</span>
          <span>Entrer maintenant</span>
        </div>
        <div className="ms-choice-pill">
          <span className="ms-choice-ico">⇄</span>
          <span>Changer de marché</span>
        </div>
      </div>
    )
  }

  if (num === "03") {
    return (
      <div className="ms-visual ms-visual--sim">
        <svg
          viewBox="0 0 200 100"
          className="ms-candles-svg"
          aria-hidden="true"
        >
          <path
            d="M 4 56 Q 82 90 196 42"
            stroke="#e5b869"
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
            opacity="0.9"
          />
          {/* Candle 1 - red */}
          <line x1="24" y1="24" x2="24" y2="58" stroke="#991b1b" strokeWidth="1.8" />
          <rect x="20" y="30" width="8" height="20" fill="#ef4444" rx="2" />
          {/* Candle 2 - red */}
          <line x1="48" y1="26" x2="48" y2="66" stroke="#991b1b" strokeWidth="1.8" />
          <rect x="44" y="32" width="8" height="26" fill="#ef4444" rx="2" />
          {/* Candle 3 - green */}
          <line x1="72" y1="46" x2="72" y2="70" stroke="#166534" strokeWidth="1.8" />
          <rect x="68" y="50" width="8" height="14" fill="#22c55e" rx="2" />
          {/* Candle 4 - red */}
          <line x1="96" y1="44" x2="96" y2="76" stroke="#991b1b" strokeWidth="1.8" />
          <rect x="92" y="48" width="8" height="22" fill="#ef4444" rx="2" />
          {/* Candle 5 - red dip */}
          <line x1="120" y1="58" x2="120" y2="78" stroke="#991b1b" strokeWidth="1.8" />
          <rect x="116" y="62" width="8" height="11" fill="#ef4444" rx="2" />
          {/* Candle 6 - green */}
          <line x1="144" y1="38" x2="144" y2="68" stroke="#166534" strokeWidth="1.8" />
          <rect x="140" y="42" width="8" height="20" fill="#22c55e" rx="2" />
          {/* Candle 7 - green impulse */}
          <line x1="170" y1="12" x2="170" y2="60" stroke="#166534" strokeWidth="1.8" />
          <rect x="166" y="16" width="8" height="38" fill="#22c55e" rx="2" />
        </svg>
      </div>
    )
  }

  if (num === "04") {
    return (
      <div className="ms-visual ms-visual--djeli">
        <div className="ms-djeli-ring">
          <img
            src="/djeli.png"
            alt="Mentor Djéli"
            className="ms-djeli-avatar"
            loading="lazy"
          />
        </div>
        <span className="ms-djeli-badge">Conseil du mentor</span>
      </div>
    )
  }

  return (
    <div className="ms-visual ms-visual--prog">
      <div className="ms-prog-medallion" aria-hidden="true">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8L12 2z" />
          <path d="M8 21h8" />
        </svg>
      </div>
      <div className="ms-prog-pills">
        <span className="ms-prog-pill ms-prog-pill--gold">+120 XP</span>
        <span className="ms-prog-pill">+25 Cauris</span>
      </div>
    </div>
  )
}

function Method() {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const dragState = useRef({ isDown: false, startX: 0, scrollLeft: 0 })

  const handleScroll = () => {
    const el = trackRef.current
    if (!el) return
    const firstCard = el.querySelector<HTMLElement>(".method-step-card")
    if (!firstCard) return
    const cardWidth = firstCard.offsetWidth + 12
    const idx = Math.min(
      methodSteps.length - 1,
      Math.max(0, Math.round(el.scrollLeft / cardWidth))
    )
    setActiveIndex(idx)
  }

  const scrollToCard = (index: number) => {
    const el = trackRef.current
    if (!el) return
    const cards = el.querySelectorAll<HTMLElement>(".method-step-card")
    const target = cards[index]
    if (!target) return
    el.scrollTo({
      left: target.offsetLeft - el.offsetLeft,
      behavior: "smooth",
    })
    setActiveIndex(index)
  }

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = trackRef.current
    if (!el) return
    dragState.current = {
      isDown: true,
      startX: e.pageX - el.offsetLeft,
      scrollLeft: el.scrollLeft,
    }
  }

  const onMouseLeaveOrUp = () => {
    dragState.current.isDown = false
  }

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragState.current.isDown) return
    const el = trackRef.current
    if (!el) return
    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    const walk = (x - dragState.current.startX) * 1.2
    el.scrollLeft = dragState.current.scrollLeft - walk
  }

  return (
    <section id="methode" className="section method-compact">
      <div className="shell method-compact__shell">
        <div className="method-compact__head">
          <h2>La finance s'apprend aussi par l'histoire</h2>
          <p>
            Avec WÔY, chaque histoire devient une expérience pour apprendre,
            faire des choix et progresser.
          </p>
        </div>

        <div
          ref={trackRef}
          className="method-steps-track"
          onScroll={handleScroll}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeaveOrUp}
          onMouseUp={onMouseLeaveOrUp}
          onMouseMove={onMouseMove}
        >
          {methodSteps.map((step, idx) => (
            <article
              key={step.num}
              className={`method-step-card${activeIndex === idx ? " is-active" : ""}`}
            >
              <span className="method-step-card__num">{step.num}</span>
              <MethodCardVisual num={step.num} />
              <h3 className="method-step-card__title">{step.title}</h3>
              <p className="method-step-card__desc">{step.desc}</p>
            </article>
          ))}
        </div>

        <div className="method-dots" role="tablist" aria-label="Étapes de la méthode">
          {methodSteps.map((step, idx) => (
            <button
              key={step.num}
              type="button"
              role="tab"
              aria-selected={activeIndex === idx}
              aria-label={`Étape ${step.num} : ${step.title}`}
              className={`method-dot${activeIndex === idx ? " is-active" : ""}`}
              onClick={() => scrollToCard(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const narrativeChoices = [
  {
    letter: "A",
    label: "Investir immédiatement",
    tone: "warn" as const,
    feedback:
      "Attention : une promesse de placement sans risque doit être vérifiée.",
  },
  {
    letter: "B",
    label: "Vérifier les informations et les risques",
    tone: "good" as const,
    feedback:
      "Bon réflexe : comprendre les risques et vérifier les informations avant de décider.",
  },
  {
    letter: "C",
    label: "Demander conseil avant de décider",
    tone: "neutral" as const,
    feedback:
      "Demander conseil peut aider, mais il faut aussi vérifier les informations par soi-même.",
  },
]

const narrativeCharacters = [
  {
    id: "gassama",
    name: "Gassama",
    role: "Le contre-exemple",
    img: "/gassama.png",
    featured: false,
  },
  {
    id: "ahmadou",
    name: "Amadou",
    role: "L'apprenant",
    img: "/ahmadou.png",
    featured: true,
  },
  {
    id: "djeli",
    name: "Djéli",
    role: "Le guide",
    img: "/djeli.png",
    featured: false,
  },
]

function Narrative() {
  const [selected, setSelected] = useState<number | null>(null)
  const activeChoice = selected !== null ? narrativeChoices[selected] : null

  const handleChoiceKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    idx: number
  ) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault()
      const next = (idx + 1) % narrativeChoices.length
      setSelected(next)
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault()
      const prev =
        (idx - 1 + narrativeChoices.length) % narrativeChoices.length
      setSelected(prev)
    }
  }

  return (
    <section id="histoire" className="section narrative-compact">
      <div className="shell narrative-compact__shell">
        {/* Compact Header */}
        <div className="narrative-compact__head">
          <h2>
            Des histoires pour comprendre.{" "}
            <em>Des décisions pour apprendre.</em>
          </h2>
          <p>
            Avec Amadou, Gassama et Djéli, découvre des situations financières
            concrètes et apprends à faire les bons choix.
          </p>
        </div>

        {/* Main 2-Zone Layout (Left 38% Characters / Right 62% Interactive Simulation) */}
        <div className="narrative-compact__grid">
          {/* Left Zone: 3 Official Characters */}
          <aside
            className="narrative-cast"
            aria-label="Les personnages officiels WÔY Academy"
          >
            <div className="narrative-cast__pattern" aria-hidden="true" />
            <div className="narrative-cast__row">
              {narrativeCharacters.map((char) => {
                const isDjeliHighlighted =
                  char.id === "djeli" && selected !== null
                return (
                  <div
                    key={char.id}
                    className={`narrative-char narrative-char--${char.id}${
                      char.featured ? " is-featured" : ""
                    }${isDjeliHighlighted ? " is-speaking" : ""}`}
                  >
                    <div className="narrative-char__frame">
                      <img
                        src={char.img}
                        alt={`${char.name} — ${char.role}`}
                        className="narrative-char__img"
                        loading="lazy"
                      />
                    </div>
                    <div className="narrative-char__caption">
                      <b>{char.name}</b>
                      <span>{char.role}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </aside>

          {/* Right Zone: Interactive Pedagogical Simulation */}
          <div className="narrative-sim">
            <div className="narrative-sim__head">
              <span className="narrative-sim__tag">
                DÉMONSTRATION PÉDAGOGIQUE
              </span>
              <h3>Amadou face à une décision financière</h3>
              <p className="narrative-sim__story">
                « Amadou reçoit une prime de <b>250 000 FCFA</b>. Gassama lui
                propose un placement présenté comme sans risque. »
              </p>
            </div>

            <div className="narrative-sim__question-block">
              <p className="narrative-sim__question">
                Que devrait faire Amadou ?
              </p>
              <div
                className="narrative-sim__choices"
                role="radiogroup"
                aria-label="Que devrait faire Amadou ?"
              >
                {narrativeChoices.map((choice, idx) => {
                  const isSelected = selected === idx
                  return (
                    <button
                      key={choice.letter}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      className={`narrative-choice-btn${
                        isSelected ? ` is-selected is-${choice.tone}` : ""
                      }`}
                      onClick={() => setSelected(idx)}
                      onKeyDown={(e) => handleChoiceKeyDown(e, idx)}
                    >
                      <span className="narrative-choice-btn__letter">
                        {choice.letter}
                      </span>
                      <span className="narrative-choice-btn__text">
                        {choice.letter} — {choice.label}
                      </span>
                      <span
                        className="narrative-choice-btn__check"
                        aria-hidden="true"
                      >
                        {isSelected ? "✓" : ""}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {activeChoice && (
              <div
                className="narrative-sim__result"
                role="region"
                aria-live="polite"
              >
                <div
                  className={`narrative-sim__feedback is-${activeChoice.tone}`}
                >
                  <p>{activeChoice.feedback}</p>
                </div>

                <div className="narrative-sim__djeli-bar">
                  <div className="narrative-sim__djeli-content">
                    <img
                      src="/djeli.png"
                      alt="Djéli"
                      className="narrative-sim__djeli-mini"
                    />
                    <div>
                      <small>LE CONSEIL DE DJÉLI</small>
                      <p>
                        « Avant d'investir, prends le temps de comprendre les
                        risques et de vérifier les informations. »
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="narrative-sim__reset"
                    onClick={() => setSelected(null)}
                  >
                    Recommencer
                  </button>
                </div>
              </div>
            )}
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

interface RouteStep {
  id: string
  level: string
  subtitle: string
  nodeX: number
  nodeY: number
  badgeX: number
  badgeY: number
  mNodeX?: number
  mNodeY?: number
  mBadgeX?: number
  mBadgeY?: number
  description: string
  learning: string
  objective: string
  isElite?: boolean
}

const routeMapSteps: RouteStep[] = [
  {
    id: "n0",
    level: "N0",
    subtitle: "DÉCOUVERTE",
    nodeX: 48.0,
    nodeY: 89.0,
    badgeX: 61.0,
    badgeY: 89.0,
    mNodeX: 50.0,
    mNodeY: 72.9,
    mBadgeX: 21.0,
    mBadgeY: 72.9,
    description: "Comprendre les bases de l’argent, du risque et de la prise de décision financière.",
    learning: "Le rôle de la monnaie, l'épargne, l'inflation et les premiers pièges à éviter.",
    objective: "Poser des bases saines et lucides avant d'engager le moindre franc.",
  },
  {
    id: "n1",
    level: "N1",
    subtitle: "SÉCURITÉ TOTALE",
    nodeX: 51.0,
    nodeY: 72.0,
    badgeX: 37.0,
    badgeY: 72.0,
    mNodeX: 53.2,
    mNodeY: 63.0,
    mBadgeX: 21.0,
    mBadgeY: 63.0,
    description: "Identifier les arnaques, protéger son capital et adopter les bons réflexes de sécurité.",
    learning: "Sécurisation des portefeuilles, détection des faux rendements et gestion des clés.",
    objective: "Construire un bouclier impénétrable avant toute opération.",
  },
  {
    id: "n2",
    level: "N2",
    subtitle: "FONDAMENTAUX",
    nodeX: 45.8,
    nodeY: 60.5,
    badgeX: 59.0,
    badgeY: 60.5,
    mNodeX: 45.6,
    mNodeY: 56.8,
    mBadgeX: 74.5,
    mBadgeY: 56.8,
    description: "Comprendre le fonctionnement des actifs, de la crypto et des marchés financiers.",
    learning: "Actifs réels vs volatils, fonctionnement de la blockchain, rôle des marchés.",
    objective: "Savoir ce que l'on achète et pourquoi on l'achète.",
  },
  {
    id: "n3",
    level: "N3",
    subtitle: "LIRE LE MARCHÉ",
    nodeX: 52.6,
    nodeY: 51.5,
    badgeX: 38.5,
    badgeY: 51.5,
    mNodeX: 54.6,
    mNodeY: 51.2,
    mBadgeX: 21.0,
    mBadgeY: 51.2,
    description: "Analyser les tendances, lire les graphiques et interpréter les cycles économiques.",
    learning: "Supports, résistances, volumes, cycles haussiers et baissiers.",
    objective: "Développer une lecture objective sans se laisser submerger par le bruit.",
  },
  {
    id: "n4",
    level: "N4",
    subtitle: "DÉCISION & EXÉCUTION",
    nodeX: 46.0,
    nodeY: 42.5,
    badgeX: 60.0,
    badgeY: 42.5,
    mNodeX: 45.4,
    mNodeY: 45.3,
    mBadgeX: 74.5,
    mBadgeY: 45.3,
    description: "Définir un plan clair, calculer ses ratios risque/rendement et exécuter sans hésitation.",
    learning: "Plan d'investissement, stop-loss, take-profit et dimensionnement des positions.",
    objective: "Prendre des décisions mesurées basées sur des règles strictes.",
  },
  {
    id: "n5",
    level: "N5",
    subtitle: "RISK & PORTEFEUILLE",
    nodeX: 50.5,
    nodeY: 35.8,
    badgeX: 37.0,
    badgeY: 35.8,
    mNodeX: 52.9,
    mNodeY: 40.4,
    mBadgeX: 21.0,
    mBadgeY: 40.4,
    description: "Structurer un portefeuille équilibré, diversifié et résilient face aux tempêtes.",
    learning: "Allocation d'actifs, corrélation des marchés et gestion du risque global.",
    objective: "Préserver et faire croître son capital sur la durée.",
  },
  {
    id: "n6",
    level: "N6",
    subtitle: "MAÎTRISE PRO",
    nodeX: 54.8,
    nodeY: 29.5,
    badgeX: 65.5,
    badgeY: 29.5,
    mNodeX: 48.1,
    mNodeY: 36.6,
    mBadgeX: 74.5,
    mBadgeY: 36.6,
    description: "Affiner sa psychologie, maîtriser ses émotions et automatiser ses protocoles.",
    learning: "Gestion du stress, analyse avancée, routines des opérateurs professionnels.",
    objective: "Atteindre la constance et la discipline des investisseurs avertis.",
  },
  {
    id: "elite",
    level: "ÉLITE",
    subtitle: "CERCLE ÉLITE",
    nodeX: 52.5,
    nodeY: 22.5,
    badgeX: 63.5,
    badgeY: 22.5,
    mNodeX: 53.0,
    mNodeY: 31.3,
    mBadgeX: 21.0,
    mBadgeY: 31.3,
    description: "Intégrer le cercle restreint des mentors, partager son expertise et impacter sa communauté.",
    learning: "Stratégies institutionnelles, mentorat, transmission du savoir économique.",
    objective: "Transmettre et élever son entourage grâce à l'autonomie financière acquise.",
    isElite: true,
  },
]

function Route() {
  const [activeLevel, setActiveLevel] = useState(0)
  const [hoveredLevel, setHoveredLevel] = useState<number | null>(null)
  const displayIndex = hoveredLevel !== null ? hoveredLevel : activeLevel
  const step = routeMapSteps[displayIndex]

  const handleSelectLevel = (index: number) => {
    const clamped = Math.max(0, Math.min(routeMapSteps.length - 1, index))
    setActiveLevel(clamped)
  }

  return (
    <section id="route" className="route-interactive-section">
      {/* ========================================================
          1. DESKTOP VIEW ONLY (>= 1024px)
          Strictly identical to existing desktop code
          ======================================================== */}
      <div className="route-desktop-only">
        <div className="route-interactive__stage">
          {/* Background Illustrated Route Landscape — ROUTE OG with crystal-clear native text & icons */}
          <img
            src="/ROUTE OG.png"
            alt="La Route WÔY — Carte panoramique des 8 niveaux"
            className="route-interactive__bg-img"
          />

          {/* Ambient atmospheric vignetting */}
          <div className="route-interactive__vignette" aria-hidden="true" />

          {/* 2. LEFT EDITORIAL BLOCK — Simple, compact, and space-saving */}
          <div className="route-interactive__editorial route-interactive__editorial--compact">
            <span className="route-editorial__kicker">LA ROUTE WÔY</span>

            <h2 className="route-editorial__title-compact">
              UNE ROUTE. DES NIVEAUX.<br />
              <em>UNE TRANSFORMATION.</em>
            </h2>

            <p className="route-editorial__lead-compact">
              De N0 à Cercle Élite, franchis chaque étape à ton rythme.
            </p>

            <ul className="route-editorial__features">
              <li>
                <span className="route-editorial__feat-check">✓</span>
                <span>Progression pas à pas</span>
              </li>
              <li>
                <span className="route-editorial__feat-check">✓</span>
                <span>Gestion du risque &amp; sécurité</span>
              </li>
              <li>
                <span className="route-editorial__feat-check">✓</span>
                <span>Maîtrise &amp; transmission</span>
              </li>
            </ul>

            <p className="route-editorial__quote-compact">
              &ldquo;Le savoir est une arme, la méthode ton bouclier.&rdquo;
              <small>— DJÉLI WÔY</small>
            </p>
          </div>

          {/* 1 & 2. INTERACTIVE STEPS LAYER — Pedestal hotspot with animation + permanent text pill badge */}
          <div
            className="route-interactive__hotspots"
            role="tablist"
            aria-label="Sélectionner une étape de la Route"
          >
            {routeMapSteps.map((lvl, i) => {
              const isCurrent = i === displayIndex
              const isSelected = i === activeLevel

              return (
                <div key={lvl.id} className="route-step-interactive-group">
                  {/* 1. Clickable hotspot directly on the pedestal/icon with animated tactile feedback */}
                  <button
                    type="button"
                    className={`route-pedestal-hotspot${isCurrent ? " is-hovered" : ""}${
                      isSelected ? " is-selected" : ""
                    }`}
                    style={{
                      left: `${lvl.nodeX}%`,
                      top: `${lvl.nodeY}%`,
                    }}
                    onMouseEnter={() => setHoveredLevel(i)}
                    onMouseLeave={() => setHoveredLevel(null)}
                    onClick={() => handleSelectLevel(i)}
                    aria-label={`Icône ${lvl.level} : ${lvl.subtitle}`}
                  >
                    <span className="route-pedestal-hotspot__aura" />
                  </button>

                  {/* 2. Permanent clean text pill badge beside the icon, identical to the ÉLITE reference */}
                  <button
                    type="button"
                    className={`route-level-pill${isCurrent ? " is-hovered" : ""}${
                      isSelected ? " is-selected" : ""
                    }${lvl.isElite ? " is-elite" : ""}`}
                    style={{
                      left: `${lvl.badgeX}%`,
                      top: `${lvl.badgeY}%`,
                    }}
                    onMouseEnter={() => setHoveredLevel(i)}
                    onMouseLeave={() => setHoveredLevel(null)}
                    onClick={() => handleSelectLevel(i)}
                    aria-label={`Niveau ${lvl.level} : ${lvl.subtitle}`}
                  >
                    <span className="route-level-pill__num">{lvl.level}</span>
                    <span className="route-level-pill__dot">•</span>
                    <span className="route-level-pill__name">{lvl.subtitle}</span>
                  </button>
                </div>
              )
            })}
          </div>

          {/* RIGHT LEVEL INFO PANEL */}
          <div
            id={`route-panel-${step.id}`}
            role="tabpanel"
            className="route-interactive__panel"
          >
            {/* Quick Level Stepper */}
            <div className="route-panel__stepper" aria-label="Niveaux">
              {routeMapSteps.map((lvl, i) => {
                const isCurrent = i === displayIndex
                return (
                  <button
                    key={lvl.id}
                    type="button"
                    onClick={() => handleSelectLevel(i)}
                    onMouseEnter={() => setHoveredLevel(i)}
                    onMouseLeave={() => setHoveredLevel(null)}
                    className={`route-panel__step-btn${isCurrent ? " is-active" : ""}${
                      lvl.isElite ? " is-elite" : ""
                    }`}
                    aria-label={`Niveau ${lvl.level} : ${lvl.subtitle}`}
                  >
                    {lvl.isElite ? "★" : lvl.level}
                  </button>
                )
              })}
            </div>

            <div className="route-panel__head">
              <span className="route-panel__kicker">
                NIVEAU {displayIndex + 1} / {routeMapSteps.length}
              </span>
              <h3 className="route-panel__title">
                {step.isElite ? "Cercle Élite — Destination" : `${step.level} — ${step.subtitle}`}
              </h3>
              <p className="route-panel__desc">{step.description}</p>
            </div>

            <div className="route-panel__blocks">
              <div className="route-panel__block">
                <small>CE QUE TU VAS APPRENDRE</small>
                <p>{step.learning}</p>
              </div>
              <div className="route-panel__block">
                <small>OBJECTIF PÉDAGOGIQUE</small>
                <p>{step.objective}</p>
              </div>
            </div>

            <div className="route-panel__actions">
              <button
                type="button"
                className="route-panel__arrow-btn"
                disabled={displayIndex === 0}
                onClick={() => handleSelectLevel(displayIndex - 1)}
                aria-label="Niveau précédent"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                className="route-panel__arrow-btn"
                disabled={displayIndex === routeMapSteps.length - 1}
                onClick={() => handleSelectLevel(displayIndex + 1)}
                aria-label="Niveau suivant"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          2. MOBILE VIEW ONLY (< 1024px)
          Breathtaking 9:16 Vertical Interactive Experience
          ======================================================== */}
      <div className="route-mobile-only">
        <div className="route-mobile__stage">
          {/* Vertical 9:16 Background Map */}
          <img
            src="/route-mobile.png"
            alt="La Route WÔY — Carte verticale des 8 niveaux"
            className="route-mobile__bg-img"
          />

          {/* Vignette lighting overlay */}
          <div className="route-mobile__vignette" aria-hidden="true" />

          {/* TOP EDITORIAL BLOCK (in sky space) */}
          <div className="route-mobile__editorial">
            <span className="route-mobile__kicker">LA ROUTE WÔY</span>
            <h2 className="route-mobile__title">
              UNE ROUTE. DES NIVEAUX.<br />
              <em>UNE TRANSFORMATION.</em>
            </h2>
            <p className="route-mobile__lead">
              De N0 à Cercle Élite, franchis chaque étape à ton rythme.
            </p>
            <div className="route-mobile__chips">
              <span className="route-mobile__chip">✓ Progression pas à pas</span>
              <span className="route-mobile__chip">✓ Risque &amp; Sécurité</span>
              <span className="route-mobile__chip">✓ Maîtrise</span>
            </div>
          </div>

          {/* INTERACTIVE HOTSPOTS & BADGES LAYER */}
          <div
            className="route-mobile__hotspots"
            role="tablist"
            aria-label="Sélectionner une étape de la Route sur mobile"
          >
            {routeMapSteps.map((lvl, i) => {
              const isSelected = i === activeLevel

              return (
                <div key={`m-${lvl.id}`} className="route-mobile-step-group">
                  {/* Hotspot right on the pedestal */}
                  <button
                    type="button"
                    className={`route-mobile-hotspot${isSelected ? " is-selected" : ""}`}
                    style={{
                      left: `${lvl.mNodeX}%`,
                      top: `${lvl.mNodeY}%`,
                    }}
                    onClick={() => handleSelectLevel(i)}
                    aria-label={`Icône ${lvl.level} : ${lvl.subtitle}`}
                  >
                    <span className="route-mobile-hotspot__pulse" />
                  </button>

                  {/* Level Pill Badge */}
                  <button
                    type="button"
                    className={`route-mobile-pill${isSelected ? " is-selected" : ""}${
                      lvl.isElite ? " is-elite" : ""
                    }`}
                    style={{
                      left: `${lvl.mBadgeX}%`,
                      top: `${lvl.mBadgeY}%`,
                    }}
                    onClick={() => handleSelectLevel(i)}
                    aria-label={`Niveau ${lvl.level} : ${lvl.subtitle}`}
                  >
                    <span className="route-mobile-pill__num">{lvl.level}</span>
                    <span className="route-mobile-pill__dot">•</span>
                    <span className="route-mobile-pill__name">{lvl.subtitle}</span>
                  </button>
                </div>
              )
            })}
          </div>

          {/* BOTTOM LEVEL INFO PANEL (in village space below compass) */}
          <div
            id={`route-mobile-panel-${step.id}`}
            role="tabpanel"
            className="route-mobile__panel"
          >
            {/* Stepper horizontal */}
            <div className="route-mobile__stepper" aria-label="Niveaux">
              {routeMapSteps.map((lvl, i) => {
                const isSelected = i === activeLevel
                return (
                  <button
                    key={`m-btn-${lvl.id}`}
                    type="button"
                    onClick={() => handleSelectLevel(i)}
                    className={`route-mobile__step-btn${isSelected ? " is-active" : ""}${
                      lvl.isElite ? " is-elite" : ""
                    }`}
                    aria-label={`Niveau ${lvl.level} : ${lvl.subtitle}`}
                  >
                    {lvl.isElite ? "★" : lvl.level}
                  </button>
                )
              })}
            </div>

            {/* Header with Title and Nav arrows */}
            <div className="route-mobile__panel-head">
              <div className="route-mobile__panel-title-wrap">
                <span className="route-mobile__panel-kicker">
                  NIVEAU {displayIndex + 1} / {routeMapSteps.length}
                </span>
                <h3 className="route-mobile__panel-title">
                  {step.isElite ? "Cercle Élite — Destination" : `${step.level} — ${step.subtitle}`}
                </h3>
              </div>

              <div className="route-mobile__panel-arrows">
                <button
                  type="button"
                  className="route-mobile__arrow-btn"
                  disabled={displayIndex === 0}
                  onClick={() => handleSelectLevel(displayIndex - 1)}
                  aria-label="Niveau précédent"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="route-mobile__arrow-btn"
                  disabled={displayIndex === routeMapSteps.length - 1}
                  onClick={() => handleSelectLevel(displayIndex + 1)}
                  aria-label="Niveau suivant"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Description */}
            <p className="route-mobile__panel-desc">{step.description}</p>

            {/* Two Information Blocks */}
            <div className="route-mobile__panel-blocks">
              <div className="route-mobile__panel-block">
                <span className="route-mobile__block-tag">CE QUE TU VAS APPRENDRE</span>
                <p>{step.learning}</p>
              </div>
              <div className="route-mobile__panel-block">
                <span className="route-mobile__block-tag">OBJECTIF PÉDAGOGIQUE</span>
                <p>{step.objective}</p>
              </div>
            </div>
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
  const trackRef = useRef<HTMLDivElement | null>(null)
  const dragState = useRef({ isDown: false, startX: 0, scrollLeft: 0 })

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = trackRef.current
    if (!el) return
    dragState.current = {
      isDown: true,
      startX: e.pageX - el.offsetLeft,
      scrollLeft: el.scrollLeft,
    }
  }

  const onMouseLeaveOrUp = () => {
    dragState.current.isDown = false
  }

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dragState.current.isDown) return
    const el = trackRef.current
    if (!el) return
    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    const walk = (x - dragState.current.startX) * 1.2
    el.scrollLeft = dragState.current.scrollLeft - walk
  }

  return (
    <section id="profils" className="section profiles profiles--harmonized">
      <div className="shell profiles__shell">
        <div className="section-head section-head--split profiles__head">
          <div>
            <div className="eyebrow eyebrow--light">
              <span /> Pour qui ?
            </div>
            <h2>
              Ton point de départ
              <br />
              <em>n’est pas une limite.</em>
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

        <div
          ref={trackRef}
          className="profile-list profile-list--row"
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeaveOrUp}
          onMouseUp={onMouseLeaveOrUp}
          onMouseMove={onMouseMove}
        >
          {profiles.map(([number, title, text]) => (
            <article key={title} className="profile-card">
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
    <section className="fracture fracture-cinema">
      <div className="fracture-cinema__stage">
        <img
          src="/fracture.png"
          alt="Amadou apprend avec WÔY Academy tandis que Gassama investit sans méthode"
          className="fracture-cinema__img"
          loading="lazy"
        />
        <div className="fracture-cinema__shade" aria-hidden="true" />

        <div className="fracture-cinema__head">
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

        <div className="fracture-pills-pair">
          <div className="fracture-pills fracture-pills--good" aria-label="Avec WÔY : une méthode pour décider">
            {(
              [
                ["book", "Je comprends avant d’agir."],
                ["shield", "J’évalue les risques."],
                ["eye", "Je vérifie avant d’investir."],
                ["target", "Je décide par moi-même."],
              ] as [IconName, string][]
            ).map(([icon, label]) => (
              <span className="fracture-pill" key={label}>
                <i>
                  <Icon name={icon} size={13} />
                </i>
                {label}
              </span>
            ))}
          </div>

          <div className="fracture-pills fracture-pills--bad" aria-label="Sans méthode : des réflexes à questionner">
            {(
              [
                ["chart", "Je suis les tendances."],
                ["spark", "Je crois aux promesses."],
                ["wallet", "J’investis sans vérifier."],
                ["community", "Je dépends des autres."],
              ] as [IconName, string][]
            ).map(([icon, label]) => (
              <span className="fracture-pill" key={label}>
                <i>
                  <Icon name={icon} size={13} />
                </i>
                {label}
              </span>
            ))}
          </div>
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
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)

  // Stop audio if user scrolls away from the section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !audioRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight

      const isVisible = rect.top < windowHeight && rect.bottom > 0
      if (!isVisible && !audioRef.current.paused) {
        audioRef.current.pause()
        setIsPlaying(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleVisionAudio = () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="section vision vision--refined"
    >
      <audio
        ref={audioRef}
        src="/son-djeli.mp3"
        preload="none"
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />
      <div className="vision-backdrop" aria-hidden="true" />
      <div className="vision-pattern" aria-hidden="true" />

      <div className="shell vision__shell">
        <div className="vision-copy">
          <div className="eyebrow eyebrow--light">
            <span /> Notre vision
          </div>
          <h2>
            HIER, LES DJÉLIS
            <br />
            TRANSMETTAIENT LE SAVOIR.
            <em>AUJOURD'HUI, WÔY PREND LE RELAIS.</em>
          </h2>
          <p>
            Nous transmettons les connaissances financières pour que chacun
            puisse comprendre, décider et construire son avenir.
          </p>

          <button
            type="button"
            className={`vision-audio-guide${isPlaying ? " is-playing" : ""}`}
            onClick={toggleVisionAudio}
            aria-pressed={isPlaying}
            aria-label={
              isPlaying
                ? "Mettre en pause l'histoire des Djélis"
                : "Clique ici pour connaître l'histoire des Djélis"
            }
          >
            <span className="vision-audio-guide__icon" aria-hidden="true">
              {isPlaying ? (
                <span className="vision-eq">
                  <i />
                  <i />
                  <i />
                </span>
              ) : (
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </svg>
              )}
            </span>
            <span className="vision-audio-guide__text">
              {isPlaying
                ? "Écoute en cours · Mettre en pause"
                : "Clique ici pour connaître l’histoire des Djélis"}
            </span>
          </button>
        </div>
      </div>

      <div className="values-marquee">
        <div>
          Le savoir est l'élévation <span>&#183;</span> La maîtrise est la
          liberté <span>&#183;</span> La discipline est la clé{" "}
          <span>&#183;</span> La communauté est notre force <span>&#183;</span>{" "}
          L'héritage est notre mission.
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
    <section id="attente" className="final-cta final-cta--porte" onPointerMove={onPointerMove}>
      {particles.map((particle) => (
        <span
          className="particle"
          key={particle.id}
          style={{ left: particle.x, top: particle.y }}
        >
          {particle.symbol}
        </span>
      ))}
      <div className="final-cta__stage">
        <img
          src="/porte-woy.png"
          alt="Les portes de WÔY Academy s'ouvrent"
          className="final-cta__canvas-img"
        />
        <div className="final-cta__canvas-vignette" />

        <div className="final-cta__wall-content">
          <div className="final-cta__badge">
            <span className="final-cta__badge-dot" />
            <span>ACCÈS ANTICIPÉ · PLACES PRIORITAIRES</span>
          </div>

          <h2>
            Prêt à comprendre
            <br />
            <em>avant d’investir ?</em>
          </h2>

          <p>
            Rejoins la liste d’attente et sois informé en priorité de l’ouverture
            de la plateforme.
          </p>

          <div className="final-cta__perks">
            <div className="final-cta__perk">
              <span className="final-cta__perk-icon" aria-hidden="true">
                <Icon name="shield" size={16} />
              </span>
              <div className="final-cta__perk-text">
                <strong>Accès prioritaire à l’ouverture</strong>
                <span>Franchis les portes de l’Académie dès le lancement</span>
              </div>
            </div>

            <div className="final-cta__perk">
              <span className="final-cta__perk-icon" aria-hidden="true">
                <Icon name="target" size={16} />
              </span>
              <div className="final-cta__perk-text">
                <strong>Parcours complet de N0 à Cercle Élite</strong>
                <span>Histoires interactives, simulateur &amp; arène Laamb</span>
              </div>
            </div>

            <div className="final-cta__perk">
              <span className="final-cta__perk-icon" aria-hidden="true">
                <Icon name="community" size={16} />
              </span>
              <div className="final-cta__perk-text">
                <strong>Communauté &amp; Rapports WÔY</strong>
                <span>Progresse entouré d’apprenants et de mentors</span>
              </div>
            </div>
          </div>

          <div className="final-cta__actions">
            <ButtonLink href="#attente" onClick={onOpenReservation}>
              Rejoindre la liste d’attente <Icon name="arrow" size={16} />
            </ButtonLink>
            <div className="final-cta__sub-row">
              <span className="final-cta__reassurance">
                <Icon name="check" size={14} /> Préinscription gratuite
              </span>
              <a href="#plateforme" className="text-link">
                Revoir la plateforme →
              </a>
            </div>
          </div>
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
      <Route />
      <Fracture />
      <Profiles />
      <FinalCTA onOpenReservation={() => setIsReservationOpen(true)} />
      <Footer />
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </>
  )
}
