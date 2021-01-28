// const { getOptions } = require('loader-utils');

module.exports = async function (svg) {
    const callback = this.async();
    let result = null;
    // result = svg.replace(/<\?xml.*\?>/ig, '');
    const str = svg.replace(/[\r\n]/, '').match(/<svg(([\s\S])*?)<\/svg>/ig, '');
    if (str) {
        result = str[0];
        // const options = getOptions(this);
        // console.log('options', options);
        // const { value } = options;
        // console.log('value', value);
        callback(null, `<template>${result}</template>`);
    } else {
        callback(null, '<template>null</template>');
    }
};
