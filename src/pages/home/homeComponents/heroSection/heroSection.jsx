import SolidButton from "../../../../components/buttons/solidButton/solidButton.jsx";
import styles from "./heroSection.module.css";
import {
  generateRandomDatetime,
  convertDateToCountdown,
} from "../../../../utils/functions.js";
import TextRotation from "../../../../components/animations/textRotation/textRotation.jsx";
import { useEffect, useState } from "react";

const infoData = [
  { key: 1, numData: "98K+", name: "Artwork" },
  { key: 2, numData: "12K+", name: "Auction" },
  { key: 3, numData: "15K+", name: "Artist" },
];

const imageData = [
  {
    key: 1,
    btcName: "Abstr Gradient NFT",
    userImg: "assets/images/guy_pic01.png",
    userName: "Arkhan17",
    currentBid: 0.25,
    endTime: generateRandomDatetime(),
    backgroundSrc: "assets/images/hero01.jpeg",
    selected: true,
  },
  {
    key: 2,
    btcName: "Doge NFT",
    userImg: "assets/images/girl_pic01.png",
    userName: "Zeronis32",
    currentBid: 0.85,
    endTime: generateRandomDatetime(),
    backgroundSrc: "assets/images/hero02.jpeg",
    selected: false,
  },
  {
    key: 3,
    btcName: "Halo NFT",
    userImg: "assets/images/guy_pic01.png",
    userName: "Toronto13",
    currentBid: 0.6,
    endTime: generateRandomDatetime(),
    backgroundSrc: "assets/images/hero03.jpeg",
    selected: false,
  },
];

const HeroSection = () => {
  const [imageDataState, setImageDataState] = useState([...imageData]);
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setImageDataState([
        ...imageDataState.map((item) => {
          return { ...item, endTime: item.endTime - 1000 };
        }),
      ]);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);
  return (
    <div className={styles.hero_main_wrapper}>
      <div className={styles.hero_main}>
        <img
          className={styles.hero_bg}
          src="assets/icons/Dot.svg"
          alt="bg"
        ></img>
        <div className={styles.info_section}>
          <h1 className={styles.header}>
            Discover, and collect Digital Art NFTs{" "}
          </h1>
          <p className={styles.info_text}>
            Digital marketplace for crypto collectibles and non-fungible tokens
            (NFTs). Buy, Sell, and discover exclusive digital assets.
          </p>
          <div className={styles.button_wrapper}>
            <SolidButton text="Explore Now" animate={true} />
          </div>
          <div className={styles.info_counter_main}>
            {infoData &&
              infoData.slice(0, 3).map((data, index) => {
                return (
                  <div key={data.key} className={styles.info_count_single_div}>
                    <h1>{data.numData}</h1>
                    <p>{data.name}</p>
                  </div>
                );
              })}
          </div>
        </div>
        <div className={styles.image_section_stack_wrapper}>
          <div className={styles.image_section_stack}>
            {imageDataState &&
              imageDataState
                .filter((item) => item.selected)
                .slice(-1)
                .map((btc, index) => {
                  const { hours, minutes, seconds } = convertDateToCountdown(
                    btc.endTime,
                  );
                  return (
                    <div className={styles.img_bid_details_main}>
                      <div className={styles.user_info}>
                        <h3 className={styles.user_btc}>{btc.btcName}</h3>
                        <div className={styles.user_row}>
                          <img
                            className={styles.user_img}
                            src={btc.userImg}
                            alt="user img"
                          />
                          <h4 className={styles.user_name}>{btc.userName}</h4>
                        </div>
                      </div>
                      <div className={styles.btc_details}>
                        <div className={styles.current_bid_column}>
                          <div className={styles.bid_header}>Current Bid</div>
                          <div className={styles.bid_amount_main}>
                            <img
                              src="assets/icons/ethereum02.svg"
                              className={styles.btc_icon}
                              alt="btc"
                            />
                            <h6 className={styles.btc_eth}>
                              {`${btc.currentBid} ETH`}
                            </h6>
                          </div>
                        </div>
                        <div className={styles.current_bid_column}>
                          <div className={styles.bid_header}>Ends in</div>
                          <div className={styles.expire_date}>
                            <span className={styles.span_number}>{hours}</span>
                            <span className={styles.span_unit}>h</span>{" "}
                            <span className={styles.span_number}>
                              {minutes}
                            </span>
                            <span className={styles.span_unit}>m</span>{" "}
                            <span className={styles.span_number}>
                              {seconds}
                            </span>
                            <span className={styles.span_unit}>s</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            <div className={styles.rotating_hero_icon_main}>
              <div className={styles.rotate_wrapper}>
                <div className={styles.rotating_text}>
                  <TextRotation text="Live Auction • Live Auction • " />
                </div>
                <img
                  className={styles.eth_icon}
                  src="assets/icons/ethereum01.svg"
                  alt="eth"
                />
              </div>
            </div>
            {imageData &&
              imageData.slice(0, 3).map((data, index) => {
                // picking 3 even if the passed data is too long
                // so it doesn't break the bond design
                // changing the styles based on the index property
                return (
                  <img
                    key={data.key}
                    className={`${styles.single_hero_image} ${
                      index === 0
                        ? styles.hero_image_0
                        : index === 1
                        ? styles.hero_image_1
                        : styles.hero_image_2
                    }`}
                    src={data.backgroundSrc}
                    alt="hero img"
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
