module.exports = async function (svg) {
    const loaderContext = this;
    const { resourcePath, async } = loaderContext;
    // 根据路径获取文件名字
    const pathArr = resourcePath.includes('\\') ? resourcePath.split('\\') : resourcePath.split('/');
    let name = pathArr.pop(),
        svgStr = svg;
    if (!name.endsWith('.svg')) name = pathArr.pop();
    const callback = async();
    const reg = /<svg(([\s\S])*?)<\/svg>/ig;
    const regDefs = /<defs(([\s\S])*?)<\/defs>/ig;
    const regStyle = /<style(([\s\S])*?)<\/style>/ig;
    const regT = / t="(([\s\S])*?)"/ig;
    const regPid = / p-id="(([\s\S])*?)"/ig;
    if (svgStr.includes('</defs>')) svgStr = svgStr.replace(regDefs, '');
    if (svgStr.includes('</style>')) svgStr = svgStr.replace(regStyle, '');
    if (svgStr.includes(' t="')) svgStr = svgStr.replace(regT, '');
    if (svgStr.includes(' p-id="')) svgStr = svgStr.replace(regPid, '');
    if (reg.test(svgStr)) callback(null, `<template><svg class="v-svg-${name.replace('.svg', '')}" ${RegExp.$1}</svg></template>`);
    else callback(null, '<template></template>');
};
