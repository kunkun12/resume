define([],function(){
	var appFactory=function(resumeApp){
    	resumeApp.factory('Addressinfo', function() {
           return [{
              title:"欢迎访问我的新浪微博",
              href:"http://weibo.com/u/1821556025",
              src:"images/weibo.jpg"
            },{
              title:"欢迎访问我的个人博客",
              href:"http://www.cnblogs.com/dubaokun/",
              src:"images/cnblogs.gif"
            },{
              title:"欢迎访问我的Github",
              href:"https://github.com/kunkun12",
              src:"images/githublog.png"
            },{
              title:"欢迎访问我的个人网站",
              href:"http://kunkun12.com/",
              src:"images/kunkun.png"
            }];
        });
      resumeApp.factory('Experiencefo', function() {
           return {school:{
             schoolinfo:"2008.09-2012.06  华北水利水电学院(本科) 专业：地理信息系统",
             description:"在校期间自学计算机技术，参与了四个实际的项目。主要基于.NET平台开发,并且带领过四人以上的团队。"
           },  
            workexperience:[
            {
              companyName:"艾德思齐-艾德无线",
              date:"2012年2月-2014-6月",
              titile:"JS研发工程师",
              description:"参与广告SDKJS（Hybrid）的研发、WebAPP（适配主流的IOS、Android系统）以及公司业务系统的前端、同时参与系统前端架构设计，开发设计文档编写"
            },
            {
              companyName:"Esri(中国)信息技术有限公司",
              date:"2012年2月-2014-6月",
              titile:"web前端工程师",
              description:"主要基于JS/HTML 单页面WebGIS系统开发，以前端工作为主同时也参会后端Rest服务的实现。另外包括文档编写、项目相关的PPT制作以及系统的部署。同时也会在重要会议上进行讲座形式的知识分享"
            }
            ]
           }
        });
         resumeApp.factory('skillInfo', function() {
           return [ "JS：扎实的JavaScript/HTML/CSS 基础、熟悉Angluarjs、Dojo、Vue.js、jQuery、Zepto、Underscore、D3.js等，了解ES6",
                    "熟悉AMD、CommonJS模块化规范、熟悉使用Dojo、RequireJS模块化开发以及r.js优化AMD程序。",
                    "HTML5:熟悉HTML5语义化标签、熟悉HTML5 相关API 如Canvas 、SVG、Geolcation 、IndexDb、LocalStrorage、WebSocket、WebWork、Video的使用。",                
                   "CSS3:熟悉CSS3新特性如transform、transication、animate、Media Query、fLexbox等。熟悉Bootstrap、Angular-Bootstrap、SemanticUI等UI组件框架，熟悉Less",
                   "熟悉移动WebAPP、Hybrid WebApp开发，熟悉Cordova，Ionic。了解Android 、Windows Phone的Native开发。",
                   "熟悉NodeJS、Express、常用Node模块如 Async、Request、cheerio、node-mysql、grunt/gulp、socket.io,了解Meteor",
                   "地图开发：掌握ArcGIS产品以及相关Map API、了解Google Map API、Leaflet Map API",                               
                  "了解HTTP协议，REST程序设计，能够使用NodeJS、Django开发REST Service",
                  "有PHP基础，熟悉YII框架。了解Python 以及Django",
                  "熟悉.NET的 WebService、WPF、SilverLight开发，了解Java 以及DWR框架",
                  "数据库：了解PostgresQL、MySQL、MongoDb、Sqlite的基本使用。",
                  "理解面向对象程序设计，了解常用设计模式。",
                  "其他技能：Linux、Mac基本命令，熟悉Git、SourceTree、PS、Grunt/Gulp、了解Yeoman。"];
          });
          resumeApp.factory('workExperienceInfo', function() {
           return {work: [
                    "2014年11月2015年1月艾德智投DSP平台（PC web-AngularJS）",
                    "2014年9月-2014年10月 Android积分墙（hybrid)",
                    "2014年8月 IOS积分墙吐元素（SDKJS） ",
                    "2014年8月 KateSpate商品展示(mobile web) ",
                    "2014-7月-2014年8月。ios Web积分墙(web App)",   
                    "2013.12-2014.4 影像在线分类系统(JS/HTML)",
                    "2013.11-2013.12 影像在线分发平台(JS/HTML)",
                    "2013.10-2013.11 参与Esri 产品—ArcGIS WebApp Builder",
                    "2013.7-2013.10 影像超市 (JS/HTML)",
                    "2013.3-2013.6 Portal API viewer (JS/HTML)",
                    "2012.10-2012.12 公共气象信息展示平台(JS/HTML)",
                    "2012.7-2012.9 用户大会讲座查询系统 (JS/HTML)",
                    "2012.3-2012.6 水环境分析与评价系统。(JS/HTML)",
                    "2012.2-2012.3 义工地图故事。(Silverlight)"],
                   university:[   "2011.7-2012.1 国家级数字城市-“数字邓州”项目(.NET)",                                 
                                  "2011.5-2011.8 南水北调中线工程丹江口水库水质预测管理系统(Silverlight)",
                                  "2011.2-2012.5 社交资源共享网站(javascript+Asp.NET)",
                                  "2010.6-2010.12 郑州东区水文生态效应决策支持系统(.NET)"]};
          
        });
          resumeApp.factory('selfAssessmentInfo', function() {
           return ["痴迷计算机技术、热爱编程、喜欢研究、折腾技术、有轻微的代码洁癖、对于新技术有强烈的追求，经常游走于各种技术分享会之间",
           "从事前端开发，同时也喜欢折腾后端技术。个人看好WebApp以及Hybrid WebAPP",
           "时刻关注新技术动态、喜欢分享技术，喜欢开源。经常会分享到自己的 <a href='http://weibo.com/u/1821556025' target='_blank'>微博</a> <a href='http://www.cnblogs.com/dubaokun/' target='_blank'>博客</a> <a href='http://kunkun12.com' target='_blank'>个人网站</a> <a href='https://github.com/kunkun12' target='_blank'>GitHub</a>",
           "我的业余爱好： Coding、开源硬件、阅读、美女、滑雪、旅游、爬山、摄影 "];
        });
  }
   
   return  	{start:appFactory};
})