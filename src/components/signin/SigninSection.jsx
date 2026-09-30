import Image from "next/image";
import Link from "next/link";
import SigninForm from "./SigninForm";
import { signinArtwork, signinCopy, signinLogo } from "./signinData";
import styles from "./SigninSection.module.css";

/**
 * Sign-in screen.
 *
 * Mirrors the create-account route: same blue grid surface and the same
 * supplied artwork export, but the copy and artwork share the left column while
 * the form card sits in a white panel on the right.
 */
export default function SigninSection() {
  return (
    <main className={styles.section}>
      <Link href="/" aria-label="ByteSpace home" className={styles.mark}>
        <Image
          src={signinLogo.src}
          alt={signinLogo.alt}
          width={signinLogo.width}
          height={signinLogo.height}
          priority
        />
      </Link>

      <div className={styles.inner}>
        <div className={styles.promo}>
          <div className={styles.copy}>
            <h1 className={styles.title}>{signinCopy.title}</h1>
            <p className={styles.body}>{signinCopy.body}</p>
          </div>

          <div className={styles.media}>
            <Image
              className={styles.artwork}
              src={signinArtwork.src}
              alt={signinArtwork.alt}
              width={signinArtwork.width}
              height={signinArtwork.height}
              priority
            />
          </div>
        </div>

        <div className={styles.card}>
          <p className={styles.eyebrow}>{signinCopy.eyebrow}</p>
          <h2 className={styles.heading}>{signinCopy.heading}</h2>

          <div className={styles.formWrap}>
            <SigninForm />
          </div>
        </div>
      </div>
    </main>
  );
}