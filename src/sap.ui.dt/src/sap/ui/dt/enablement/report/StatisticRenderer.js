/*!
 * ${copyright}
 */

// Provides default renderer for control sap.ui.dt.enablement.report.Statistic
sap.ui.define(function() {
	"use strict";

	/**
	 * @author SAP SE
	 * @version ${version}
	 * @namespace
	 */
	var StatisticRenderer = {};

	/**
	 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
	 *
	 * @param {sap.ui.core.RenderManager} rm The RenderManager that can be used for writing to the render output buffer.
	 * @param {sap.ui.dt.enablement.report.Statistic} oStatistic An object representation of the control that should be rendered.
	 */
	StatisticRenderer.render = function(rm, oStatistic) {
		rm.addClass("sapUiDtStatisticReport");

		rm.write("<div");
		rm.writeControlData(oStatistic);

		rm.writeStyles();

		rm.writeClasses();

		rm.write(">");

		rm.renderControl(oStatistic._getForm());

		rm.write("</div>");
	};

	return StatisticRenderer;
});