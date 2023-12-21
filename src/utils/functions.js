import { dummyCardData, dummyCategoryData } from "./dummyData";
// GENERATION CODE FOR DUMMY/RANDOM DATA

// Generating random time counter for hero section
// return a random time  from 12 hours to 7 days in the future
export const generateRandomDatetime = () => {
  const currentTimeinMillis = new Date().getTime();
  const hourInMillis = 60 * 60 * 1000;
  const minTime = currentTimeinMillis + 12 * hourInMillis;
  const maxTime = currentTimeinMillis + 99 * hourInMillis;
  const randomTime = Math.floor(Math.random() * (maxTime - minTime)) + minTime;
  return new Date(randomTime);
};

export const generateSingleDiscoverCard = () => {
  const { nameList, bgList, usrPicList, imagesBasePath } = dummyCardData;

  const fakeDate = generateRandomDatetime();
  return {
    userImages: randomChoice(usrPicList, 4, false).map(
      (file) => imagesBasePath + file,
    ),
    bgImage: imagesBasePath + randomChoice(bgList)[0],
    title: randomChoice(nameList, 2).join(""),
    ethValue: Math.random().toFixed(2),
    time: fakeDate,
    current: 1,
    total: Math.ceil(Math.random() * 121),
    catIdList: randomChoice(
      dummyCategoryData.map((item) => item.catId).filter((item) => item !== 0),
      2,
    ),
  };
};
export const generateBatchDiscoverCardData = (count) => {
  const fakeData = [];
  while (count--) {
    fakeData.push(generateSingleDiscoverCard());
  }
  return fakeData;
};

// CONVERSION / PARSING

export const convertDateToCountdown = (futureTime) => {
  const now = new Date();
  const timeDifferenceinSeconds = Math.floor((futureTime - now) / 1000);

  // Adding 0 infront of the number if it is single digit
  // 01 instead of 1
  const padWithZero = (n) => (n < 10 ? `0${n}` : n);
  const hours = padWithZero(Math.floor(timeDifferenceinSeconds / 3600));
  const minutes = padWithZero(
    Math.floor((timeDifferenceinSeconds % 3600) / 60),
  );
  const seconds = padWithZero(Math.floor(timeDifferenceinSeconds % 60));

  return { hours, minutes, seconds };
};

// utils

// returns a list of choices for data gen mostly
const randomChoice = (allChoices, N = 1, notUnique = true) => {
  //gotta check base case if we need unique items but someone wants more than the allchoices length

  if (!notUnique && allChoices.length < N) return null;

  const selectedChoices = [];
  if (!notUnique) {
    while (N--) {
      const selectedIdx = Math.floor(Math.random() * allChoices.length);
      selectedChoices.push(allChoices[selectedIdx]);
      allChoices = allChoices.filter((item, index) => index !== selectedIdx);
    }
    return selectedChoices;
  }
  while (N--) {
    selectedChoices.push(
      allChoices[Math.floor(Math.random() * allChoices.length)],
    );
  }
  return selectedChoices;
};
