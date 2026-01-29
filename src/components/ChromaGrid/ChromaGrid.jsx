import { useRef } from "react";
import "./ChromaGrid.css";

export const ChromaGrid = ({
  items,
  className = "",
  columns = 3,
  rows = 2,
}) => {
  const rootRef = useRef(null);

  // Gunakan `items` yang di-pass dari App.jsx, bukan data demo
  const data = items?.length ? items : [];

  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={
        {
          "--cols": columns,
          "--rows": rows,
        }
      }
    >
      {data.map((c, i) => (
        <article
          key={i}
          className="chroma-card"
          style={
            {
              "--card-border": c.borderColor || "transparent",
              "--card-gradient": c.gradient,
            }
          }
        >
          <div className="chroma-img-wrapper">
            <img
              className="chroma-screenshot"
              src={c.screenshot || c.image}
              alt={`${c.title} preview`}
              loading="lazy"
            />
            {c.screenshot && c.image && (
              <img className="chroma-logo" src={c.image} alt="" loading="lazy" />
            )}
          </div>
          <footer className="chroma-info">
            <h3 className="name">{c.title}</h3>
            {c.handle && <span className="handle">{c.handle}</span>}
            <p className="role">{c.subtitle}</p>
            {c.location && <span className="location">{c.location}</span>}
            {c.stack?.length ? (
              <ul className="chroma-stack" aria-label="Tech stack">
                {c.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            <div className="chroma-links">
              {c.url && (
                <a
                  className="chroma-button"
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
              )}
              {c.repoUrl ? (
                <a
                  className="chroma-button chroma-button--secondary"
                  href={c.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Repo
                </a>
              ) : c.repoLabel ? (
                <span className="chroma-repo-label">{c.repoLabel}</span>
              ) : null}
            </div>
          </footer>
        </article>
      ))}
    </div>
  );
};

export default ChromaGrid;
