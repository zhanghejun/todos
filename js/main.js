var todo=angular.module('todo',['ngAnimate']);
todo.controller('mainCtil',['$scope','$timeout',function($scope,$timeout){
	//存储
		$scope.todos=[];
   if(localStorage.__x){
   	    $scope.todos=JSON.parse(localStorage.__x); 
   	     $scope.count=$scope.todos.length;
    }else{
    	$scope.todos=[];
    }
    $scope.save=function () {
        localStorage.__x=JSON.stringify($scope.todos)
    }
    
//时钟
  	$scope.title='Todos'
	setInterval(function(){
		$timeout(function(){
			var data = new Date();
			var h= data.getHours();
			var m= data.getMinutes();
			var s= data.getSeconds();
			s=(s<10)?('0'+s):s
			m=(m<10)?('0'+m):m
		    $scope.title=h+':'+m+':'+s	
		},0);
	},500)
	
//删除
	$scope.del=function(id){
		var index;
		for(var i=0;i<$scope.todos.length;i++){
			if($scope.todos[i].id===id){
				index=i;
			}
		}
		$scope.todos.splice(index,1);
		$scope.count=$scope.todos.length;
	}
	 
//双击焦点出现
	$scope.focus=function(e){
		$timeout(function(){
			$(e.currentTarget).find('input').trigger('focus')
		},0)	
	}
	
//新增
		$scope.add=function(e){
			if($scope.todos.length===0){
				var id =1000;
			}else{
				var max=-Infinity;
				for(var i=0;i<$scope.todos.length;i++){
					var value =$scope.todos[i];
					if(value.id>max){
						max=value.id
					}
				}
				var id=max+1;
			}
		if(e.keyCode===13){
			console.table($scope.todos)
			if($scope.name===''){
				return
			}
			$scope.todos.push({id:id,name:$scope.name,isDone:false})
			 $scope.count=$scope.todos.length;
			$scope.name='';
		}
	}
	
	$scope.clear = function(){
			var arr=[];
			for(var i=0;i<$scope.todos.length;i++){
				if(!$scope.todos[i].isDone){
					arr.push($scope.todos[i])
				}
			}
			$scope.todos=arr;
	}
		
}])
