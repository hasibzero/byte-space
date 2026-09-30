import Hero from "@/components/hero/Hero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero />
    </main>
  );
}
