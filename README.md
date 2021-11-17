## 安装
- `npm install -D vuecomponent-svg-loader`

## 使用
```
    vue2
    {
        test: /\.svg$/,
        use: ['vue-loader', 'vuecomponent-svg-loader')]
    }
```
```
    vue3
    {
        test: /\.svg$/,
        use: ['babel-loader', 'vuecomponent-svg-loader')]
    }
```
