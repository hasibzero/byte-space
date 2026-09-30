import Image from "next/image";
import AccountShell from "@/components/account/AccountShell";
import SigninForm from "./SigninForm";
import { accountArtwork } from "@/components/account/accountData";
import { signinCopy } from "./signinData";
import styles from "./SigninSection.module.css";

/**
 * Sign-in screen.
 *
 * Mirrors the create-account route on the shared shell: the copy and artwork
 * share the left column while the form sits in a white card on the right.
 */
export default function SigninSection() {
  return (
    <AccountShell>
      <div className={styles.grid}>
        <div className={styles.promo}>
          <div className={styles.copy}>
            <h1 className={styles.title}>{signinCopy.title}</h1>
            <p className={styles.body}>{signinCopy.body}</p>
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
          <p className={styles.eyebrow}>{signinCopy.eyebrow}</p>
          <h2 className={styles.heading}>{signinCopy.heading}</h2>

          <div className={styles.formWrap}>
            <SigninForm />
          </div>
        </div>
      </div>
    </AccountShell>
  );
}