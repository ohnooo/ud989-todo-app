/*global Backbone */

// app = app 	** if app exist, don't do anything
// || 			** or
// app = {} 	** if app is emplty, set to new empty object.
var app = app || {};

// Immediate invoke function.
(function () {
	// Any variable decare inside of this function does not contaminate global scope,
	// don't accidentally over ride any variable decare in the global scope.
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			completed: false,
			priority: false
		},

		// Toggle the `completed` state of this todo item.
		toggle: function () {
			this.save({
				completed: !this.get('completed')
			});
		},
		togglePriority: function () {
			this.save({
				priority: !this.get('priority')
			});
		}
	});
	//() immediately invoke
})();
