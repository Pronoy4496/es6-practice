const ages = [12, 13, 14, 16,17];
const ages2 = [15, 18, 19];
const ages3 = [25,28,30];
const allAges = ages.concat(ages2).concat(5).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges2);