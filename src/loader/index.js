// const { getOptions } = require('loader-utils');

module.exports = async function (svg) {
    const callback = this.async();
    const reg = /<svg(([\s\S])*?)<\/svg>/ig;
    if (reg.test(svg)) callback(null, `<template><svg ${RegExp.$1}</svg></template>`);
    else callback(null, '<template></template>');
};
