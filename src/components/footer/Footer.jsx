import Image from "next/image";
import NewsletterForm from "./NewsletterForm";
import { footerBrand, footerColumns, footerLegal, newsletter } from "./footerData";
import styles from "./Footer.module.css";

/**
 * Site footer: brand and newsletter on the left, link columns on the right, and
 * a legal bar closing the page.
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.signup}>
            <a href="/" aria-label="ByteSpace home" className={styles.brand}>
              <Image
                className={styles.logo}
                src={footerBrand.logo}
                alt={footerBrand.logoAlt}
                width={footerBrand.logoWidth}
                height={footerBrand.logoHeight}
              />
            </a>

            <p className={styles.tagline}>{newsletter.body}</p>

            <NewsletterForm {...newsletter} />
          </div>

          <nav className={styles.columns} aria-label="Footer">
            {footerColumns.map((column) => (
              <ul key={column.id} className={styles.column}>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={styles.link}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className={styles.legal}>
          <p className={styles.copyright}>{footerLegal.copyright}</p>

          <ul className={styles.legalLinks}>
            {footerLegal.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}