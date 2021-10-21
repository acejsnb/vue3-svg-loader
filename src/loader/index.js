module.exports = async function (svg) {
    const ctx = this;
    const { resourcePath, async, _module: { resourceResolveData: { context } } } = ctx;
    const source = svg.replaceAll('\n', '').replaceAll('   ', '');
    // 根据路径获取文件名字
    const pathArr = resourcePath.includes('\\') ? resourcePath.split('\\') : resourcePath.split('/');
    let name = pathArr.pop(),
        svgHtml = '';
    if (!name.endsWith('.svg')) name = pathArr.pop();
    const callback = async();
    const reg = /<svg (([\s\S])*?)<\/svg>/ig;
    if (reg.test(source)) svgHtml = `<svg class="v-svg-${name.replace('.svg', '')}" ${RegExp.$1}</svg>`;
    if (context.issuer.endsWith('.vue')) callback(null, `<template>${svgHtml}</template>`);
    else callback(null, `export default () => ${svgHtml}`);
};
