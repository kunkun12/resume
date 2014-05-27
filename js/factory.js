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
             description:"描述：在校期间自学计算机技术，参与了四个实际的项目。主要基于.NET平台开发,并且带领过四人以上的团队。"
           },  
            workexperience:[
            {
              companyName:"Esri(中国)信息技术有限公司",
              date:"2012年2月-至今(含实习期三个月)",
              titile:"技术工程师",
              description:"主要基于JS/HTML 单页面WebGIS系统开发，以前端工作为主同时也参会后端Rest服务的实现。另外包括文档编写、项目相关的PPT制作以及系统的部署。同时也会在重要会议上进行讲座形式的知识分享"
            }
            ]
           }
        });
         resumeApp.factory('skillInfo', function() {
           return [ "前端：理解Javascript中的基本概念，掌握Dojo、jQuery、了解Angluarjs、Underscore、Qunit、Jasmine;了解HTML5语义化、新增标签以及新增API的使用，熟悉常用的CSS、了解CSS3的使用、了解MediaQuery、Less、Bootstrap。",                
                   "后台:熟悉NodeJS 、express，了解常用npm模块使用如Async、Request、Q,Socket.io、Mongosee等,熟悉C#、了解Python、Java。了解HTTP协议，REST程序设计，能够使用NodeJS、Django编写REST API熟悉PostgresQL、了解MySQL、MongoDb", 
                  "JS模块化：掌握AMD、CommonJS规范、熟悉Dojo、RequireJS进行AMD模块开发以及r.js项目优化",
                   "地图开发：掌握ArcGIS产品以及相关Map API、了解Google Map API、Leaflet Map API",                               
                  "移动开发：了解PhoneGap、Windows Phone开发","其他前端技术：熟悉Silverlight 开发",                 
                  "其他技能:了解linux基本命令，熟悉git 操作、熟练PS切图、会使用，了解yeoman"];
          });
          resumeApp.factory('workExperienceInfo', function() {
           return {work: [   "2013.12-2014.4 影像在线分类系统(JS/HTML)",
                    "2013.11-2013.12 影像在线分发平台(JS/HTML)",
                    "2013.10-2013.11 参与Esri 产品—ArcGIS WebApp Builder 两个Widget实现(JS/HTML)",
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
           return ["痴迷计算机技术、热爱编程、喜欢研究、折腾技术、有轻微的代码洁癖、对于新技术有强烈的追求",
           "主要研究方向为地图相关的前端开发，同时也关注后端技术。个人看好WebApp并希望从事相关工作",
           "时刻关注新技术动态、喜欢分享技术，喜欢开源。经常会分享到自己的 <a href='http://weibo.com/u/1821556025' target='_blank'>微博</a> <a href='http://www.cnblogs.com/dubaokun/' target='_blank'>博客</a> <a href='http://kunkun12.com' target='_blank'>个人网站</a> <a href='https://github.com/kunkun12' target='_blank'>GitHub</a>",
           "我的业余爱好： Coding、开源硬件、阅读、美女、旅游、爬山、摄影 "];
          
        });
  }
   
   return  	{start:appFactory};
})