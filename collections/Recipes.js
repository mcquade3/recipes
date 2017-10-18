import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
SimpleSchema.extendOptions(['autovalue']);

Recipes = new Mongo.Collection('recipes');

Recipes.allow({
	insert: function(userId, doc) {
		console.log("Record inserted");
		return !!userId;
	}
});

const Ingredient = new SimpleSchema({
	name: {
		type: String
	},
	amount: {
		type: String
	}
});

Recipes.attachSchema(new SimpleSchema({
	name: {
		type: String
	},
	desc: {
		type: String,
		label: "Description"
	},
	ingredients: {
		type: Array
	},
	'ingredients.$':{
		type: Ingredient
	},
	inMenu: {
		type: Boolean,
		label: "In Menu",
		defaultValue: false,
		optional: true,
		autoform: {
			afFieldInput: {
				type: "hidden"
			},
		   afFormGroup: {
				label: false
			}
		}
	},
	author: {
		type: String,
		autovalue: function(){
			return this.userId;
		},
		autoform: {
			afFieldInput: {
				type: "hidden"
			},
		   afFormGroup: {
				label: false
			}
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autovalue: function() {
			return new Date();
		},
		autoform: {
			afFieldInput: {
				type: "hidden"
			},
			afFormGroup: {
				label: false
			}
		}
	}
}));