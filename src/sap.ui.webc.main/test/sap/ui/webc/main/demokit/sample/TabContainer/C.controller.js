sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/webc/main/Toast"
], function(Controller, JSONModel, Toast) {
	"use strict";

	return Controller.extend("sap.ui.webc.main.sample.TabContainer.C", {

		onInit: function() {
			var oModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock/products.json"));
			this.getView().setModel(oModel);
		},
		handleTabSelect: function(oEvent) {
			var demoToast = this.getView().byId("demoToast");
			demoToast.setText("Event tabSelect fired.");
			demoToast.show();
		}

	});
});