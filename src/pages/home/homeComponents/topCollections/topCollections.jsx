import { useEffect, useState } from "react";
import styles from "./topCollections.module.css";
import SolidButton from "../../../../components/buttons/solidButton/solidButton";
import OutlineButton from "../../../../components/buttons/outlineButton/outlineButton";
import {
  dummyBidData,
  dummyTopCollectionOverData,
} from "../../../../utils/dummyData";

const TopCollections = () => {
  const [currentTopIndex, setCurrentTopIndex] = useState(0);
  useEffect(() => {
    const indexChangeInterval = setInterval(() => {
      setCurrentTopIndex((index) => (index + 1) % dummyBidData.length);
    }, 5000);
    return () => clearInterval(indexChangeInterval);
  }, []);
  return (
    <div className={styles.tcollections_main_wrapper}>
      <div className={styles.tcollections_main}>
        {currentTopIndex < dummyBidData.length && (
          <div className={styles.top_bids_main}>
            <img
              className={styles.top_bid_img}
              src={dummyBidData[currentTopIndex].bgSrc}
              alt="top bid"
            />
            <div className={styles.top_bid_user_main}>
              <div className={styles.top_bid_user_section}>
                <img
                  className={styles.top_bid_user_image}
                  src={dummyBidData[currentTopIndex].userPic}
                  alt="user"
                />
                <div className={styles.top_bid_title_col}>
                  <div className={styles.top_bid_title}>
                    {dummyBidData[currentTopIndex].title}
                  </div>
                  <div className={styles.top_bid_stock_level}>
                    {`${dummyBidData[currentTopIndex].total} in the stock`}
                  </div>
                </div>
              </div>
              <div className={styles.top_bid_highest_col}>
                <div className={styles.top_bid_highest_bid_main}>
                  Highest Bid
                </div>

                <div className={styles.top_bid_btc_row}>
                  <img src="assets/icons/ethereum01.svg" alt="icon" />
                  <div className={styles.top_bid_btc}>
                    {`${dummyBidData[currentTopIndex].ethVal} ETH`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={styles.other_bids_main}>
          {Array.isArray(dummyBidData) &&
            dummyBidData.length > 0 &&
            dummyBidData
              .filter((item, index) => index !== currentTopIndex)
              .map((bid, index) => {
                return (
                  <div key={bid.key} className={styles.other_bids_single_main}>
                    <img
                      src={bid.bgSrc}
                      className={styles.other_bids_image}
                      alt="bid pic"
                    />
                    <div className={styles.other_bids_single_col}>
                      <div className={styles.other_bids_single_title}>
                        {bid.title}
                      </div>
                      <div className={styles.other_bids_single_info_row}>
                        <img
                          className={styles.other_bids_single_profile_pic}
                          src={bid.userPic}
                          alt="user"
                        />
                        <div className={styles.other_bids_tag_main}>
                          <img
                            src="assets/icons/ethereum03.svg"
                            alt="eth ico"
                          />
                          <div className={styles.other_bids_single_eth_text}>
                            {`${bid.ethVal} ETH`}
                          </div>
                        </div>
                        <div className={styles.other_bids_single_info_text}>
                          {`${bid.current} of ${bid.total}`}
                        </div>
                      </div>
                      {index === 0 ? (
                        <SolidButton
                          fontFamily="Averta Demo"
                          fontSize="14px"
                          padding="13px 19px"
                          text="Place a bid"
                          borderRadius="50px"
                          letterSpacing="normal"
                        />
                      ) : (
                        <OutlineButton
                          fontFamily="Averta Demo"
                          fontSize="14px"
                          padding="12px 18px"
                          text="Place a bid"
                          borderRadius="50px"
                          letterSpacing="normal"
                        />
                      )}
                    </div>
                  </div>
                );
              })}
        </div>
        <div className={styles.top_collections_main}>
          <div className={styles.top_collections_header}>Top Collections</div>
          <div className={styles.top_collections_side_text}>Last 7 days</div>
          <div className={styles.top_collection_list_main}>
            {Array.isArray(dummyTopCollectionOverData) &&
              dummyTopCollectionOverData.map((coin, index) => {
                return (
                  <div
                    key={coin.key}
                    className={`${styles.top_collection_single} ${
                      index === dummyTopCollectionOverData.length - 1
                        ? styles.no_bottom_border
                        : ""
                    }`}
                  >
                    <div className={styles.top_collection_single_ranking}>
                      {index + 1}
                    </div>
                    <div className={styles.top_collection_single_img_container}>
                      {coin.verified && (
                        <img
                          className={styles.top_collection_check}
                          src="assets/icons/verify.svg"
                          alt="verify ico"
                        />
                      )}
                      <img
                        src={coin.imgSrc}
                        className={styles.top_collection_single_image}
                        alt="collection img"
                      />
                    </div>

                    <div className={styles.top_collection_single_name_col}>
                      <div className={styles.top_collection_single_name_title}>
                        {coin.title}
                      </div>
                      <div className={styles.top_collection_single_btc_val_row}>
                        <img
                          src="assets/icons/ethereum01.svg"
                          alt="eth ico"
                          className={styles.top_collection_eth_ico}
                        />
                        <div className={styles.top_collection_eth_value}>
                          {coin.levels.toLocaleString("en-US")}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${styles.top_collection_single_diff} ${
                        coin.diff > 0
                          ? styles.top_collection_green
                          : styles.top_collection_red
                      }`}
                    >
                      {coin.diff > 0 ? `+${coin.diff}%` : `${coin.diff}%`}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCollections;
