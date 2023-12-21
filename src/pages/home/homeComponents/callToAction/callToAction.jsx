import SolidButton from "../../../../components/buttons/solidButton/solidButton";
import styles from "./callToAction.module.css";
const CallToAction = () => {
  return (
    <div className={styles.call_to_action_wrapper}>
      <div className={styles.call_to_action_main}>
        <div className={styles.call_to_action_pic_section}>
          <div className={styles.call_to_action_pic_sec_col01}>
            <div className={styles.ctc_item01}>
              <img
                className={styles.ctc_item01_bg}
                src="assets/images/hero01.jpeg"
                alt="img people"
              />
              <img
                className={styles.ctc_pfp}
                src="assets/images/guy_pic01.png"
                alt="img people"
              />
            </div>
            <div className={styles.ctc_item02}>
              <img
                className={styles.ctc_item02_bg}
                src="assets/images/hero03.jpeg"
                alt="img people"
              />
              <img
                className={styles.ctc_pfp}
                src="assets/images/girl_pic01.png"
                alt="img people"
              />
            </div>
          </div>

          <div className={styles.ctc_item03}>
            <img
              className={styles.ctc_item03_bg}
              src="assets/images/hero02.jpeg"
              alt="img bg"
            />
            <img
              className={styles.ctc_pfp}
              src="assets/images/girl_pic01.png"
              alt="img people"
            />
          </div>
        </div>
        <div className={styles.call_to_action_text_section}>
          <div className={styles.ctc_header01}>Create and sell your NFTs</div>
          <div className={styles.ctc_info01}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac
            phasellus placerat a pellentesque tellus sed egestas. Et tristique
            dictum sit tristique sed non. Lacinia lorem id consectetur pretium
            diam ut. Pellentesque eu sit blandit fringilla risus faucibus.
          </div>
          <SolidButton
            text="Sign Up Now"
            padding="20px 40px"
            fontFamily="Averta Demo"
            fontSize="20px"
            fontStyle="normal"
            fontWeight="400"
            letterSpacing="1.3px"
          />
        </div>
      </div>
    </div>
  );
};
export default CallToAction;
