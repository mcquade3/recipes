Accounts.onLogin(function(){
	FlowRouter.go('recipe-book');
});

Accounts.onLogout(function(){
	FlowRouter.go('home');
});

FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()) {
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/',{
	triggersEnter:[function(context, redirect){
		if(Meteor.userId()) {
			FlowRouter.go('recipe-book');
		}
	}],
	name: 'home',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/recipe-book',{
	name: 'recipe-book',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Recipes'});
	}
});

FlowRouter.route('/recipe/:id',{
	name: 'recipe-page',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'RecipePage'});
	}
});

FlowRouter.route('/menu', {
	name: 'menu',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Menu'});
	}
});