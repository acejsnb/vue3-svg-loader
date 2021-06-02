module.exports = async function (svg) {
    const loaderContext = this;
    const { resourcePath, async } = loaderContext;
    // 根据路径获取文件名字
    const pathArr = resourcePath.split('\\');
    let name = pathArr.pop();
    if (!name.endsWith('.svg')) name = pathArr.pop();
    const callback = async();
    const reg = /<svg(([\s\S])*?)<\/svg>/ig;
    if (reg.test(svg)) callback(null, `<template><svg class="v-svg-${name.replace('.svg', '')}" ${RegExp.$1}</svg></template>`);
    else callback(null, '<template></template>');
};
