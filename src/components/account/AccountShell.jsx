import Image from "next/image";
import Link from "next/link";
import { accountLogo } from "./accountData";
import styles from "./AccountShell.module.css";

/**
 * Shell shared by the sign-in and create-account screens.
 *
 * It owns the blue grid surface, the corner glyph and the centred content
 * column, so each route only supplies its own layout and copy.
 */
export default function AccountShell({ children }) {
  return (
    <main className={styles.section}>
      <Link href="/" aria-label="ByteSpace home" className={styles.mark}>
        <Image
          src={accountLogo.src}
          alt={accountLogo.alt}
          width={accountLogo.width}
          height={accountLogo.height}
          priority
        />
      </Link>

      <div className={styles.inner}>{children}</div>
    </main>
  );
}