import Image from "next/image";
import AccountShell from "@/components/account/AccountShell";
import { accountArtwork } from "@/components/account/accountData";
import SignupForm from "./SignupForm";
import { signupCopy } from "./signupData";
import styles from "./SignupSection.module.css";

/**
 * Create-account screen.
 *
 * The page reuses the shared account shell, so it keeps the hero's blue grid
 * surface, and mirrors the sign-in route: copy and artwork share the left
 * column while the form sits in a white card on the right.
 */
export default function SignupSection() {
  return (
    <AccountShell>
      <div className={styles.grid}>
        <div className={styles.promo}>
          <div className={styles.copy}>
            <h1 className={styles.title}>{signupCopy.title}</h1>
            <p className={styles.body}>{signupCopy.body}</p>
          </div>

          <div className={styles.media}>
            <Image
              className={styles.artwork}
              src={accountArtwork.src}
              alt={accountArtwork.alt}
              width={accountArtwork.width}
              height={accountArtwork.height}
              priority
            />
          </div>
        </div>

        <div className={styles.card}>
          <p className={styles.eyebrow}>{signupCopy.eyebrow}</p>
          <h2 className={styles.heading}>{signupCopy.heading}</h2>

          <div className={styles.formWrap}>
            <SignupForm />
          </div>
        </div>
      </div>
    </AccountShell>
  );
}