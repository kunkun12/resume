

define(['angular','js/rotuteConfig','js/controller','js/factory','angular-animate',"ui-bootstrap","ng-sanitize"],
    function(angular,rotuteConfig,controller,factory){
    var resumeApp = angular.module('resumeApp', ['ngRoute', 'ngAnimate','ui.bootstrap',"ngSanitize"]);
        rotuteConfig.start(resumeApp);
        factory.start(resumeApp);
        controller.start(resumeApp);
        angular.bootstrap(document.body, ['resumeApp']);
})
