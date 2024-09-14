import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import Menu from "../Menu";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <Link href="/">
          <Image
            alt="ロゴ"
            src="/festina_lente_300ppi .png"
            width={110}
            height={110}
          />
        </Link>
        <Menu />
      </div>
    </header>
  );
}
