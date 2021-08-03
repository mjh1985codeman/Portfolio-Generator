const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// Notice the lack of parentheses around the `profileDataArr` parameter?
const printProfileData = (profileDataArr) => {
  profileDataArr.forEach((profileItem) => console.log(profileItem));
};
printProfileData(profileDataArgs);
