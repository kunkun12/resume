
require.config({
  baseUrl: '.',
  paths: {
    'angular': '//cdn.bootcss.com/angular.js/1.2.0rc3/angular',
    'angular-route':"//cdn.bootcss.com/angular.js/1.2.0rc3/angular-route",
    'angular-animate':'//cdn.bootcss.com/angular.js/1.2.0rc3/angular-animate',
    "ng-sanitize":"//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.0rc3/angular-sanitize.min",
    'ui-bootstrap':'//cdn.bootcss.com/angular-ui-bootstrap/0.9.0/ui-bootstrap.min'
  },
  shim: {
    'angular' : {'exports' : 'angular'},
    'angular-route': { deps: ['angular']},
    'ui-bootstrap': { deps: ['angular']},
    'angular-animate':{ deps: ['angular']},
     'ng-sanitize': { deps: ['angular']}
  }
});

require(['angular','js/rotuteConfig','js/controller','js/factory','angular-animate',"ui-bootstrap","ng-sanitize"],
    function(angular,rotuteConfig,controller,factory){
    var resumeApp = angular.module('resumeApp', ['ngRoute', 'ngAnimate','ui.bootstrap',"ngSanitize"]);
        rotuteConfig.start(resumeApp);
        factory.start(resumeApp);
        controller.start(resumeApp);
        angular.bootstrap(document.body, ['resumeApp']);
})
