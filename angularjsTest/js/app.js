// var app = angular.module('myApp', []);/
var myController = app.controller('myController',function($scope){
	$scope.init=function(){
 		$scope.user="heweixia";
 	}
 	$scope.init();
});
var loadMenuController = app.controller('loadMenuController',function($scope){
	$scope.init=function(){
 		 $scope.menuList = [
        {name:'用户管理',anchor:'#memberMenuList',icon:'fa-user'},
        {name:'课程资源管理',anchor:'#courseResourceList',icon:'fa-mortar-board'},
        {name:'共享资源管理',anchor:'#shareResourceList',icon:'fa-file-text'},
        {name:'学习展评管理',anchor:'#learnEvaluate',icon:'fa-file'},
        {name:'公告管理',anchor:'#postList',icon:'fa-file-word-o'},
        {name:'社区管理',anchor:'#communityList',icon:'fa-group'}
    ];
 	}
 	$scope.init();
});

var memberMenuListController = app.controller('memberMenuListController',function($scope){
	$scope.init=function(){

	}
	$scope.init();
});
var courseResourceListController = app.controller('courseResourceListController',function($scope){
	$scope.init=function(){

	}
	$scope.init();
});
var shareResourceListController = app.controller('shareResourceListController',function($scope){
	$scope.init=function(){

	}
	$scope.init();
});
var postListController = app.controller('postListController',function($scope){
	$scope.init=function(){

	}
	$scope.init();
});
var communityListController = app.controller('communityListController',function($scope){
	$scope.init=function(){

	}
	$scope.init();
});
$('body').on('click','#container-bg .container-left ul li a',function(){
	$(this).addClass('menu-first-active');
	$(this).parent().siblings().find('.menu-first-active').removeClass('menu-first-active');
});
$('body').on('click','.common-page .panel ul li a',function(){
	$(this).addClass('menu-nav-active');
	$(this).parent().siblings().find('.menu-nav-active').removeClass('menu-nav-active');
});
$('body').on('click','.common-page .inputReseach .inputseach',function(){
	console.log(11111)
	$('.inputReseach form').css('display','block');
});
$('body').on('blur','.common-page .inputReseach form input',function(){
			console.log(22222)
	$('.inputReseach form').fadeOut(1000);	
});
 var code ; //在全局定义验证码   
    //产生验证码  
     console.log("jdkfjdfj"); 
   function createCode(){

         code = "";   
         var codeLength = 4;//验证码的长度  
         var checkCode = document.getElementById("code");   
         var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',  
         'S','T','U','V','W','X','Y','Z');//随机数  
         for(var i = 0; i < codeLength; i++) {//循环操作  
            var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）  
            code += random[index];//根据索引取得随机数加到code上  
        }  
        checkCode.value = code;//把code值赋给验证码  
    }  
   