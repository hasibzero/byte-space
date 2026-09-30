import Hero from "@/components/hero/Hero";
import Logos from "@/components/logos/Logos";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <Logos />
    </div>
  );
}
