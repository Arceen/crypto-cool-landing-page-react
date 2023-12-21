import SolidButton from "../buttons/solidButton/solidButton";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer_wrapper}>
      <div className={styles.footer_main_div}>
        <div className={styles.footer_top_div}>
          <div className={styles.footer_info_col}>
            <div className={styles.footer_info_header}>NFters</div>
            <div className={styles.footer_info_details}>
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </div>
            <div className={styles.footer_info_socials}>
              <a href="www.facebook.com" target="_blank">
                <img
                  class={styles.footer_icon}
                  src="assets/icons/facebook.svg"
                  alt="fb icon"
                />
              </a>
              <a href="www.twitter.com" target="_blank">
                <img
                  class={styles.footer_icon}
                  src="assets/icons/twitter.svg"
                  alt="x icon"
                />
              </a>
              <a href="www.linkedin.com" target="_blank">
                <img
                  class={styles.footer_icon}
                  src="assets/icons/linkedin.svg"
                  alt="linkedin icon"
                />
              </a>
            </div>
          </div>
          <div className={styles.footer_generic_col}>
            <div className={styles.footer_generic_header}>Market Place</div>
            <a href="#" className={styles.generic_item}>
              All NFTs
            </a>
            <a href="#" className={styles.generic_item}>
              New
            </a>
            <a href="#" className={styles.generic_item}>
              Art
            </a>
            <a href="#" className={styles.generic_item}>
              Sports
            </a>
            <a href="#" className={styles.generic_item}>
              Utility
            </a>
            <a href="#" className={styles.generic_item}>
              Music
            </a>
            <a href="#" className={styles.generic_item}>
              Domain Name
            </a>
          </div>
          <div className={styles.footer_generic_col}>
            <div className={styles.footer_generic_header}>My Account</div>
            <a href="#" className={styles.generic_item}>
              Profile
            </a>
            <a href="#" className={styles.generic_item}>
              Favorite
            </a>
            <a href="#" className={styles.generic_item}>
              My Collections
            </a>
            <a href="#" className={styles.generic_item}>
              Settings
            </a>
          </div>
          <div className={styles.footer_generic_subscribe_column}>
            <div className={styles.footer_generic_header}>Stay In The Loop</div>
            <div className={styles.footer_subscribe_text}>
              Join our mailing list to stay in the loop with our newest feature
              releases, NFT drops, and tips and tricks for navigating NFTs.
            </div>
            <div className={styles.subscribe_div}>
              <input
                className={styles.subscribe_email}
                type="email"
                placeholder="Enter your email address"
              />
              <div className={styles.subscribe_button_wrapper}>
                <SolidButton
                  backgroundColor="var(--blue)"
                  text="Subscribe Now"
                  padding="15px 30px"
                  fontFamily="DM Sans"
                  fontSize="12px"
                  fontWeight="400"
                  letterSpacing="0.79px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_divider}></div>
      <div className={styles.footer_copyright}>Copyright © 2022 Avi Yansah</div>
      <div className={styles.footer_my_div}>
        Made with{" "}
        <img
          className={styles.footer_react_logo}
          src="logo192.png"
          alt="react logo"
        />{" "}
        by <strong>A.H.M. ANNUR</strong>
      </div>
    </footer>
  );
};

export default Footer;
