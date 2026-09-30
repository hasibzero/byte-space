import Image from "next/image";
import Link from "next/link";
import SignupForm from "./SignupForm";
import { signupArtwork, signupCopy } from "./signupData";
import styles from "./SignupSection.module.css";

/**
 * Create-account screen.
 *
 * The page reuses the hero's blue grid surface so the route feels like the same
 * product, and lays the supplied artwork export out beside the form.
 */
export default function SignupSection() {
  return (
    <main className={styles.section}>
      <Link href="/" aria-label="ByteSpace home" className={styles.mark}>
        b
      </Link>

      <div className={styles.inner}>
        <div className={styles.copy}>
          <h1 className={styles.title}>{signupCopy.title}</h1>
          <p className={styles.body}>{signupCopy.body}</p>

          <div className={styles.formWrap}>
            <SignupForm />
          </div>
        </div>

        <div className={styles.media}>
          <Image
            className={styles.artwork}
            src={signupArtwork.src}
            alt={signupArtwork.alt}
            width={signupArtwork.width}
            height={signupArtwork.height}
            priority
          />
        </div>
      </div>
    </main>
  );
}