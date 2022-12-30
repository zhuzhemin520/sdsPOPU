# 安装库
`npm install`
# 启动项目
`npm start`
# 打包项目
`npm run build`

# 修改配置文件config.js中数据url为项目名称开始的地址
dataUrl: "/datas/shandongpopu.geojson"->dataUrl: "/github名称/datas/shandongpopu.geojson"
# 部署至github
`npm run deploy`

通过nodejs搭建系统开发框架，其中npm作为前端组件库的包管理工具，用vscode作为开发工具，在UI框架上选用了主流的React组件库antd(阿里巴巴开源产品)代替了传统的html,在样式上还是采用css,在开发语言上选用了typescript(微软开源产品，javascript的超集)，图表用echarts实现（百度开源产品），地图框架使用了arcgis api 4.x。