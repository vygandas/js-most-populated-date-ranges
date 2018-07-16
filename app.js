'use strict';
console.log('\x1Bc');
console.log("App started.");

/**
 * Check if given number is in a range
 * @param n number
 * @param range [number, number]
 * @returns boolean
 */
const isNumberInRange = (n, range) => n >= range[0] && n <= range[1];

/**
 * Get incremented number. If it is undefined 1 is returned.
 * @param count number|undefined|null
 * @returns number
 */
const incrementedNumber = (count) => typeof count !== typeof undefined && !isNaN(count) ? count + 1 : 1;

/**
 * Get min and max numeric values in a given object.
 * Object must have keys and numeric values.
 * @param object {{string: number}}
 * @returns {{min: number, max: number}}
 */
const getMinMaxObjectValues = (object) => {
    const values = Object.keys(object).map(function(key) {
        return object[key];
    });
    return {
        min: Math.min.apply(null, values),
        max: Math.max.apply(null, values)
    };
};

/**
 * Get min and max values from array of ranges.
 * Range must be defined as an array of 2 elements meaning [start: number, end: number]
 * @param dates [[number, number]]
 * @returns {{min: number, max: number}}
 */
const getMinMaxFromRangesArray = (dates) => {
    return {
        min: Math.min.apply(null, dates.map(d => d[0])),
        max: Math.max.apply(null, dates.map(d => d[1]))
    };
};

/**
 * Get distribution data-set of alive people by year.
 * @param dates [[number, number]]
 * @returns {{string: number}} key is year and value is people count
 */
const getAlivePeopleCountDistributionByYear = (dates) => {
    const datesMinMax = getMinMaxFromRangesArray(dates);
    const pplCount = {};
    for (let i = datesMinMax.min; i <= datesMinMax.max; i++) {
        dates.map(yearRange => {
            if (isNumberInRange(i, yearRange)) {
                pplCount[i] = incrementedNumber(pplCount[i]);
            }
        });
    }
    return pplCount;
};

/**
 * Get values of object keys array where they match to a given value.
 * @param object {{string: string|number}}
 * @param value string|number
 * @returns [string]
 */
const getKeysWhereValue = (object, value) => Object.keys(object).filter(x => object[x] === value);

/**
 * Finds years with highest population
 * @param dates [[number, number]]
 * @returns [string]
 */
const findYearsWithHighestPopulation = (dates) => {
    const alivePeopleDistributionByYear = getAlivePeopleCountDistributionByYear(dates);
    return getKeysWhereValue(alivePeopleDistributionByYear, getMinMaxObjectValues(alivePeopleDistributionByYear).max);
};

console.log(findYearsWithHighestPopulation([[1920, 1940], [1911, 1944], [1920, 1955], [1938, 1940], [1960, 1960]]));