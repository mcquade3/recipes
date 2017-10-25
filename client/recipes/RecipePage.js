Template.RecipePage.onCreated(function(){
	var self = this;
	self.autorun(function(){
		var id = FlowRouter.getParam('id');
		self.subscribe('singleRecipe', id);
	});
});

Template.RecipePage.helpers({
	recipes:()=> {
		var id = FlowRouter.getParam('id');
		return Recipes.findOne({_id: id});
	}
});