sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/f/cardsdemo/localService/mockserver"
], function (UIComponent,
			 mockserver) {
	"use strict";

	return UIComponent.extend("sap.f.cardsdemo.Component", {

		metadata: {
			manifest: "json"
		},

		init: function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// create the views based on the url/hash
			this.getRouter().initialize();

			mockserver.init();
		}
	});
});