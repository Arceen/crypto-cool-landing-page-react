import { useEffect, useState } from "react";
import { convertDateToCountdown } from "../../../utils/functions";
import styles from "./discoverCard.module.css";
// const data = {
//   userImages: [
//     "assets/images/guy_pic01.png",
//     "assets/images/girl_pic02.png",
//     "assets/images/guy_pic02.png",
//     "assets/images/girl_pic03.png",
//   ],
//   bgImage: "assets/images/hero01.jpeg",
//   title: "ArtCrypto",
//   ethValue: "0.25",
//   time: new Date(),
//   timeLeftArray: {
//     hours: "3",
//     minutes: "50",
//     seconds: "2",
//   },
//   current: 1,
//   total: 321,
// };
const DiscoverCard = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState(data["time"]);
  const [convertedTime, setConvertedTime] = useState(
    convertDateToCountdown(data["time"]),
  );
  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft = new Date(new Date(timeLeft).getTime() - 1000);
      setTimeLeft(newTimeLeft);
      setConvertedTime(convertDateToCountdown(newTimeLeft));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.discover_card_main}>
      <div className={styles.userSection}>
        {Array.isArray(data.userImages) &&
          data.userImages.slice(0, 4).map((usrSrc, index) => {
            return (
              <img
                className={`${styles.pfp} ${
                  index === 0
                    ? styles.usr01
                    : index === 1
                    ? styles.usr02
                    : index === 2
                    ? styles.usr03
                    : styles.usr04
                }`}
                key={index}
                src={usrSrc}
                alt="pp"
              />
            );
          })}
      </div>
      <img
        src={data.bgImage}
        className={styles.discover_card_bg_image}
        alt="bg img"
      />
      <div className={styles.dc_title}>{data.title}</div>
      <div className={styles.eth_row}>
        <div className={styles.eth}>
          <img
            className={styles.eth_ico}
            src="assets/icons/ethereum03.svg"
            alt="icon"
          />
          {data.ethValue} ETH
        </div>
        <div
          className={styles.count_div}
        >{`${data.current} of ${data.total}`}</div>
      </div>
      <div className={styles.hr}></div>
      <div className={styles.bid_row}>
        <div className={styles.time_left}>
          <span className={styles.sp_bold}>{convertedTime.hours}</span>h &nbsp;
          <span className={styles.sp_bold}>{convertedTime.minutes}</span>
          m&nbsp;
          <span className={styles.sp_bold}>{convertedTime.seconds}</span>
          s&nbsp;left
        </div>
        <button className={styles.bid_btn}>Place a bid</button>
      </div>
    </div>
  );
};
export default DiscoverCard;
