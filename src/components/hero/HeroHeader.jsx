import Image from "next/image";
import { CartIcon } from "./icons";
import { asset, heroActions, heroNav } from "./heroData";
import styles from "./HeroHeader.module.css";

/**
 * Site header for the hero: brand, primary navigation and account actions.
 *
 * The nav is absolutely centred so it stays visually balanced regardless of
 * how wide the logo and action groups become, while the header itself keeps a
 * full-bleed edge-to-edge layout.
 */
export default function HeroHeader() {
  return (
    <header className={styles.header}>
      <a href="/" aria-label="ByteSpace home" className={styles.brand}>
        <Image
          className={styles.logo}
          src={asset("logo")}
          alt="ByteSpace"
          width={171}
          height={37}
          preload
        />
      </a>

      <nav className={styles.nav} aria-label="Primary">
        {heroNav.map((item) => (
          <a key={item.label} href={item.href} className={styles.navLink}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className={styles.actions}>
        {heroActions.map((item) => (
          <a key={item.label} href={item.href} className={styles.actionLink}>
            {item.label}
          </a>
        ))}
        <CartIcon className={styles.cart} />
      </div>
    </header>
  );
}
