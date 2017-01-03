var app = angular.module("myapp",[]);
app.filter("cityFilter",function(){
	return function(data,parent){
		var filterData=[];
		angular.forEach(data,function(obj) {
			if(obj.parent===parent){
				filterData.push(obj);
			}
		});
		return filterData;
	}
});
app.controller('formCtr',['$scope',function($scope){
	var that=this;
	$scope.hobbies=[{
		id:1,
		name:"看书"
	},{
		id:2,
		name:'玩游戏'
	},{
		id:3,
		name:'散步'
	},{
		id:4,
		name:'看电影'
	}];
	$scope.cities=[{
		id:1001,
		name:'湖北',
		parent:0

	},{
		id:10011,
		name:'咸宁',
		parent:1001,
	},{
		id:10012,
		name:'岳阳',
		parent:1001,
	},{
		id:100121,
		name:'大连',
		parent:10012,
	},{
		id:100111,
		name:'通城',
		parent:10011,
	},{
		id:10014,
		name:'恩施',
		parent:1001,
	},{
		id:100141,
		name:'建始',
		parent:10014,
	},{
		id:1002,
		name:'广东',
		parent:0,
	},{
		id:10022,
		name:'东莞',
		parent:1002,
	},{
		id:10021,
		name:'深圳',
		parent:1002,
	},{
		id:100211,
		name:'宝安',
		parent:10021
	},{
		id:100221,
		name:'一碗水',
		parent:10022,
	},{
		id:100212,
		name:'福田',
		parent:10021
	},{
		id:1003,
		name:'北京',
		parent:0
	},{
		id:10031,
		name:'朝阳',
		parent:1003
	},{
		id:100311,
		name:'石景',
		parent:10031
	}]
	$scope.data={
		hobbies:[1,2],
		city:100211
	};
	//让城市关联使用
	$scope.findCityId=function(id){
		var parentId;
		angular.forEach($scope.cities,function(city){
			if(city.id===id){
				parentId=city.parent;
				return ;
			}
		});

		return parentId;
	};
	$scope.initCity=function(){
		if($scope.data.city!==undefined){
			$scope.data.area=$scope.findCityId($scope.data.city);
			$scope.data.province=$scope.findCityId($scope.data.area);
			//console.log($scope.data.province);
		}
	}
	$scope.initCity();
   //多选框选择
	$scope.toggleHobbySelection=function(id){
		var index=-1;
		if($scope.data.hobbies===undefined){
			$scope.data.hobbies=[];
		}else{
			index=$scope.data.hobbies.indexOf(id);
		}
		
		if(index===-1){
			$scope.data.hobbies.push(id);
		}else{
			$scope.data.hobbies.splice(index,1);
		}
		//console.log($scope.data.hobbies);
	};
	//先保留一份默认值
	$scope.origenData=angular.copy($scope.data);
	$scope.reset=function(){
		$scope.data=angular.copy($scope.origenData);
		$scope.myform.$setPristine();
		$scope.initCity();
	}
}]);