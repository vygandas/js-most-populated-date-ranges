'use strict';
console.log('\x1Bc');
console.log("App started.");

const isYearInAYearRange = (year, range) => (year >= range[0] && year <= range[1]);

const incrementedCount = (count) => (typeof count !== typeof undefined ? count+1 : 1);

const findYearsWithHighestPopulation = (dates) => {
    const yearStart = 1900;
    const yearFinish = 2000;

    const pplCount = {};

    for (let i = yearStart; i <= yearFinish; i++) {
        dates.map(yearRange => {
            if (isYearInAYearRange(i, yearRange)) {
            pplCount[i] = incrementedCount(pplCount[i]);
        }
    });
    }
    return Object.keys(pplCount).filter(x => {
        return pplCount[x] == Math.max.apply(null, Object.values(pplCount));
    });
};


console.log(findYearsWithHighestPopulation([[1920, 1940], [1911, 1944], [1920, 1955], [1938, 1940], [1960, 1960]]));