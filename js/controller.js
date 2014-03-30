
define([],function(){
  var appController=function(resumeApp){
    	resumeApp.controller('mainController',["$scope","Addressinfo","selfAssessmentInfo", function($scope,Addressinfo,selfAssessmentInfo) {
            $scope.pageClass = 'page-home';
            $scope.Adrresses=Addressinfo;
            $scope.selfAssessmentInfo=selfAssessmentInfo;
           // $scope.codeinfo=
        }]);
        resumeApp.controller('aboutController',["$scope",function($scope) {
            $scope.pageClass = 'page-about';
        }]);
        resumeApp.controller('experienceController', ['$scope','Experiencefo', function($scope,Experiencefo){
           $scope.pageClass='page-experience';
           $scope.Experiencefo=Experiencefo;
        }]);
        resumeApp.controller('skillsController', ['$scope','skillInfo', function($scope,skillInfo){
           $scope.pageClass='page-skills';
          $scope.SkillInfo=skillInfo;
        }]);
         resumeApp.controller('workExperienceController', ['$scope','workExperienceInfo', function($scope,workExperienceInfo){
            $scope.pageClass='page-workexperience';
            $scope.workExperienceInfo=workExperienceInfo;
        }]);
        resumeApp.controller('selfAssessmentController', ['$scope','selfAssessmentInfo', function($scope,selfAssessmentInfo){
            $scope.pageClass='page-selfAssessment';
            $scope.selfAssessmentInfo=selfAssessmentInfo;
        }]);
  }
   
   return  	{start:appController};

})



