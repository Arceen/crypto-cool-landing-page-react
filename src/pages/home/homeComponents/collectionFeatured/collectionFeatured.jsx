import OutlineButton from "../../../../components/buttons/outlineButton/outlineButton";
import styles from "./collectionFeatured.module.css";

const collectionFeaturedData = [
  {
    key: 1,
    images: [
      "assets/images/topbid01.jpeg",
      "assets/images/hero02.jpeg",
      "assets/images/cf01.jpeg",
      "assets/images/cf02.jpeg",
    ],
    title: "Amazing Collection",
    userImg: "assets/images/guy_pic01.png",
    userName: "Arkhan",
    totalItems: 54,
  },
  {
    key: 2,
    images: [
      "assets/images/hero01.jpeg",
      "assets/images/cf01.jpeg",
      "assets/images/hero02.jpeg",
      "assets/images/hero03.jpeg",
    ],
    title: "Top Collection",
    userImg: "assets/images/girl_pic01.png",
    userName: "Sierra",
    totalItems: 12,
  },
  {
    key: 3,
    images: [
      "assets/images/topbid02.jpeg",
      "assets/images/topbid03.jpeg",
      "assets/images/tc03.jpeg",
      "assets/images/tc05.jpeg",
    ],
    title: "Best Collection",
    userImg: "assets/images/guy_pic01.png",
    userName: "AJ",
    totalItems: 99,
  },
];

const CollectionFeatured = () => {
  return (
    <div className={styles.collections_featured_main_wrapper}>
      <div className={styles.collections_featured_main}>
        <div className={styles.header}>Collection Featured NFTs</div>
        <div className={styles.row}>
          {collectionFeaturedData.slice(0, 3).map((collectionData) => {
            return (
              <SingleCollection
                key={collectionData.key}
                data={collectionData}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const SingleCollection = ({ data }) => {
  return (
    <div className={styles.row_single}>
      <div className={styles.col}>
        <img src={data["images"][0]} className={styles.img01} alt="img 01" />
        <div className={styles.title}>{data["title"]}</div>
        <div className={styles.profile_section}>
          <img className={styles.pfp} src={data["userImg"]} alt="pfp" />
          <div className={styles.pf_name}>by {data["userName"]}</div>
        </div>
      </div>
      <div className={styles.col2}>
        <div className={styles.col3}>
          <img
            className={styles.thumb_pic}
            src={data["images"][1]}
            alt="thumb 01"
          />
          <img
            className={styles.thumb_pic}
            src={data["images"][2]}
            alt="thumb 02"
          />
          <img
            className={styles.thumb_pic}
            src={data["images"][3]}
            alt="thumb 03"
          />
        </div>
        <OutlineButton
          color="#2639ED"
          fontFamily="DM Sans"
          fontSize="11px"
          fontWeight="700"
          borderRadius="60px"
          lineHeight="normal"
          padding="6px 11px"
          letterSpacing="normal"
          border="1px solid #2639ED"
          text={`Total ${data["totalItems"]} Items`}
        />
      </div>
    </div>
  );
};

export default CollectionFeatured;
