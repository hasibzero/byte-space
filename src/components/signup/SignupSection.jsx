import Image from "next/image";
import AccountShell from "@/components/account/AccountShell";
import SignupForm from "./SignupForm";
import { accountArtwork } from "@/components/account/accountData";
import { signupCopy } from "./signupData";
import styles from "./SignupSection.module.css";

/**
 * Create-account screen.
 *
 * The page reuses the shared account shell, so it keeps the hero's blue grid
 * surface, and lays the supplied artwork export beside the form.
 */
export default function SignupSection() {
  return (
    <AccountShell>
      <div className={styles.grid}>
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
            src={accountArtwork.src}
            alt={accountArtwork.alt}
            width={accountArtwork.width}
            height={accountArtwork.height}
            priority
          />
        </div>
      </div>
    </AccountShell>
  );
}