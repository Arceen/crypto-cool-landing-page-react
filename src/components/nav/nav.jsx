import OutlineButton from "../buttons/outlineButton/outlineButton";
import SolidButton from "../buttons/solidButton/solidButton";
import styles from "./nav.module.css";
const Navbar = () => {
  return (
    <nav className={styles.nav_main_wrapper}>
      <div className={styles.nav_main}>
        <div className={styles.links_section}>
          <a href="#" className={styles.nft_logo}>
            NFTERS
          </a>
          <a
            href="#marketplace"
            className={`${styles.text_link} ${styles.first_text_link}`}
          >
            Marketplace
          </a>
          <a href="#resource" className={styles.text_link}>
            Resource
          </a>
          <a href="#about" className={styles.text_link}>
            About
          </a>
        </div>

        <div className={styles.buttons_section}>
          <div className={styles.search_section}>
            <img
              className={styles.search_icon}
              src="assets/icons/search-normal-1.svg"
              alt="search icon"
            />
            <input className={styles.search_input} placeholder="Search" />
          </div>
          <SolidButton text="Upload" padding="18px 40px" />
          <OutlineButton text="Connect Wallet" padding="18px 22px" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
