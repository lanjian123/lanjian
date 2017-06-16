angular.module('myapp', ['ui.router'])
.config(['$stateProvider',function($stateProvider) {
	$stateProvider
	.state({
		name:'home',
		url:'/home',
		template:'<h1>这里是home</h1>'
	})
	.state({
		name:'desk',
		url:'/desk',
		template:'<h1>这里是desk</h1>'
	})
	.state({
		name:'book',
		url:'/book',
		template:'<h1>这里是book</h1>'
	})
	.state({
		name:'room',
		url:'/room',
		template:'<h1>这里是room</h1>'
	})
}])