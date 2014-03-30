
define(['angular','angular-route'],function(angular){
    var rotuteConfig=function(resumeApp){
        resumeApp.config(["$routeProvider",function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/page-home.html',
                    controller: 'mainController'
                }).when('/experience',{
                    templateUrl: 'views/page-experience.html',
                     controller: 'experienceController'
                }).when("/skills",{
                     templateUrl: 'views/page-skills.html',
                     controller: 'skillsController'
                }).when('/about', {
                    templateUrl: 'views/page-about.html',
                    controller: 'aboutController'
                }).when('/workExperience', {
                    templateUrl: 'views/page-workexperience.html',
                    controller: 'workExperienceController'
                }).when('/selfAssessment', {
                    templateUrl: 'views/page-selfassessment.html',
                    controller: 'selfAssessmentController'
                });
        }]);
    }        
return {start:rotuteConfig}
      
});
