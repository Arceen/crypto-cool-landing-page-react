import styles from "./features.module.css";
const Features = () => {
  return (
    <div className={styles.features_main_wrapper}>
      <div className={styles.features_main}>
        <h3 className={styles.features_header}>
          The amazing NFT art of the world here
        </h3>
        <div className={styles.single_feature_main}>
          <img
            src="assets/icons/card-tick.svg"
            className={styles.single_feature_icon}
            alt="feature icon"
          />
          <div className={styles.single_feature_column}>
            <h5 className={styles.single_feature_header}>Fast Transaction</h5>
            <div
              className={`small-text-02 ${styles.single_feature_description}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              etiam viverra tellus imperdiet.
            </div>
          </div>
        </div>
        <div className={styles.single_feature_main}>
          <img
            src="assets/icons/chart-square.svg"
            className={styles.single_feature_icon}
            alt="feature icon"
          />
          <div className={styles.single_feature_column}>
            <h5 className={styles.single_feature_header}>Growth Transaction</h5>
            <div
              className={`small-text-02 ${styles.single_feature_description}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              etiam viverra tellus
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
