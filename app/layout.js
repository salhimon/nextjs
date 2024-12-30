// RootLayout.js
import "./styles/globals.css";

export const metadata = {
  title: "Mon Portfolio",
  description: "Découvrez mes projets et compétences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/public/icon2.ico" />
      </head>
      <body>
        <header>
          <nav>
            <div className="nav-right">
              <a href="/">Accueil</a>
              <a href="/about">À propos</a>
              <a href="/projects">Projets</a>
              <a href="/contact">Contact</a>
            </div>
          </nav>
        </header>
        <main>
          {children}
          <div style={{ textAlign: "center", padding: "2rem" }} className="metadata-display">
            <h1>{metadata.title}</h1>
            <p>{metadata.description}</p>
          </div>
        </main>
        <footer>
          <p>© 2024 Mon Portfolio. Tous droits réservés.</p>
        </footer>
      </body>
    </html>
  );
}
