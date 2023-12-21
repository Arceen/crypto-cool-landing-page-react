import OutlineButton from "../../../../components/buttons/outlineButton/outlineButton";
import DiscoverCard from "../../../../components/cards/discover/discoverCard";
import styles from "./discover.module.css";
import { dummyCategoryData } from "../../../../utils/dummyData";
import {
  convertDateToCountdown,
  generateBatchDiscoverCardData,
} from "../../../../utils/functions";
import { useEffect, useState } from "react";
import TagGroup from "../../../../components/groups/tagGroup/tagGroup";

const Discover = () => {
  // card count is the number Initial & more nfts data loads
  // allCatId is the default category ID for all items / handles base case of all categories selected
  const cardCount = 16;
  const allCatId = 0;

  // basically cardData is the actual data, filteredData contains only needed data, I wanted to use useEffect with a filterId to filter it but it is very expensive on memory if the original data is big as at worst case it will carry 2 sets of data (All Categories)

  const [cardData, setCardData] = useState(
    generateBatchDiscoverCardData(cardCount),
  );
  const [activeFilterId, setActiveFilterId] = useState(0);
  const [filteredData, setFilteredData] = useState(cardData);
  const [categorySelectedData, setCategorySelectedData] =
    useState(dummyCategoryData);

  const fetchMoreData = () => {
    setCardData((prevCardData) => [
      ...prevCardData,
      ...generateBatchDiscoverCardData(cardCount),
    ]);
  };

  // callback for changing filter tag clicks
  const filterTagChanged = (newSelectedCatId) => {
    //base case if new and old selected are the same
    if (newSelectedCatId === activeFilterId) return;
    const newCategorySelectedData = [...categorySelectedData].map((item) => {
      return { ...item, active: item.catId === newSelectedCatId };
    });
    setCategorySelectedData(newCategorySelectedData);

    // changing the active filterid to trigger useEffect
    setActiveFilterId(newSelectedCatId);
  };

  // will trigger if activeFilterId changed
  useEffect(() => {
    // Base cases, could have filtered but wasting processing time
    if (activeFilterId === allCatId) {
      setFilteredData(cardData);
    } else {
      const newFilteredData = JSON.parse(JSON.stringify(cardData)).filter(
        (item, index) => item.catIdList.includes(activeFilterId),
      );
      setFilteredData(newFilteredData);
    }
  }, [activeFilterId]);

  return (
    <div className={styles.discover_main_wrapper}>
      <div className={styles.discover_main_div}>
        <div className={styles.discover_header}>Discover more NFTs</div>
        <div className={styles.filter_section}>
          <TagGroup
            data={categorySelectedData}
            tagSelectedCallback={filterTagChanged}
          />
          <button className={styles.all_filters_btn}>
            <img
              src="assets/icons/filter-icon.svg"
              alt="filter icon"
              styles={styles.all_filters_icon}
            />
            <span className={styles.all_filters_text}>All Filters</span>
          </button>
        </div>
        <div className={styles.card_container}>
          {filteredData.map((data) => {
            return <DiscoverCard key={data.time} data={data} />;
          })}
        </div>

        <div className={styles.buttons_wrapper}>
          <OutlineButton
            text="More NFTs"
            padding="20px 40px"
            fontFamily="DM Sans"
            fontSize="20px"
            fontWeight="500"
            letterSpacing="normal"
            callback={fetchMoreData}
          />
        </div>
      </div>
    </div>
  );
};

export default Discover;
