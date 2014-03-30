resume
======
[在线地址](http://kunkun12.com/resume)
###如何运行。

下载源码部署到自己的WebServer下面，或者使用NodeJS。下载源码之后使用命令行工具进入到该项目目录下，运行npm install。模块安装完毕之后、输入 localhost:3000。
###技术路线
<p>MMVM框架：AngluarJS</p>
<p>AngluarJS插件：angular-route、angular-animate、ng-sanitize、ui-bootstrap</p>
<p>AMD模块化框架：requireJS</p>
<p>CSS框架：BootStrap、LESS。</p>
<p>动画效果均是由CSS3实现</p>
<p>web包管理工具:bower</p>
<p>自动化构建工具：grunt及其插件less、uglify、concat、cssmin。</p>
<p>项目优化工具：r.js合并压缩AMD模块</p>
<p>版本管理工具：Git、GitHub</p>
<p>开发环境的WebServer:NodeJS+Express</p>

###目录介绍：
    bower_components 存放bower管理的前端依赖库
    |css 里面的文件均是通过生成的grunt生成的。
        |about.css 
        |experience.css
        |home.css
        |selfAssessment.css
        |workexperience.css
        |skills.css 由此以上的CSS均是由Less编译而成
        |style.css 合并后未压缩的CSS
        |style.min.css 压缩后的CSS
    |images
    |js
       |controller.js AngluarJS中的控制器
       |routeConfig.js 路由配置文件
       |factory.js  Service存放数据
       |main.js 入口文件-主模块
       |built
       		|main-built.js由r.js打包压缩之后生成的文件。
    |less  less文件的源码存放处
    |views 存放视图模板文件。
    app.js webServer启动文件。
    bower.json。bower模块配置文件。
    build.js r.js打包使用的配置文件。
    r.js 打包工具 运行node r.js -o build.js 会自动执行AMD模块的合并压缩
    Gruntfile.js 主要配置Less编译、CSS压缩合并。
