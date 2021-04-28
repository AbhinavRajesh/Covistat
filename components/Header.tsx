import Link from "next/link";

import styles from "../styles/Header.module.scss";

interface HeaderProps {
  lastUpdated: string | null;
}

const Header = ({ lastUpdated }: HeaderProps) => {
  return (
    <header
      className={`flex justify-between items-start py-4 px-8 ${styles.navBar}`}
    >
      <div className="flex flex-col text-xl flex-1 justify-center">
        <span className="font-semibold">Kerala COVID-19 Stats</span>
        <small className="text-xs primary-color font-bold">{lastUpdated}</small>
      </div>
      <nav className="flex justify-around items-start">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/vaccine">
          <a>Vaccine Data</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
