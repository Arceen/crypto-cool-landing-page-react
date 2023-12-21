import styles from "./tagGroup.module.css";

const TagGroup = ({ data, tagSelectedCallback }) => {
  return (
    <div className={styles.tag_row}>
      {data.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              tagSelectedCallback(item.catId);
            }}
            className={`${styles.single_tag_main} ${
              item.active ? styles.active : ""
            }`}
          >
            {item.catName}
          </button>
        );
      })}
    </div>
  );
};

export default TagGroup;
