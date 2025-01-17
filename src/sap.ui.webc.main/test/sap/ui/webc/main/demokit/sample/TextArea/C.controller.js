sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("sap.ui.webc.main.sample.TextArea.C", {
		handleChange: function(oEvent) {
			var demoToast = this.getView().byId("demoToast");
			demoToast.setText("Event change fired.");
			demoToast.show();
		},
		handleInput: function(oEvent) {
			var demoToast = this.getView().byId("demoToast");
			demoToast.setText("Event input fired.");
			demoToast.show();
		}
	});
});