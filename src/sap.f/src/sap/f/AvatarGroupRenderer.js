/*!
 * ${copyright}
 */

// Provides default renderer for control sap.f.AvatarGroupRenderer
sap.ui.define(["sap/f/library"],
	function (library) {
		"use strict";

		/**
		 * <code>AvatarGroup</code> renderer.
		 * @author SAP SE
		 * @namespace
		 */
		var AvatarGroupRenderer = {
			apiVersion: 2
		};

		/**
		 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
		 *
		 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the Render-Output-Buffer
		 * @param {sap.f.AvatarGroup} oAvatarGroup an object representation of the control that should be rendered
		 */
		AvatarGroupRenderer.render = function (oRm, oAvatarGroup) {
			var sAvatarGroupClass = "sapFAvatarGroup",
				sGroupType = oAvatarGroup.getGroupType(),
				sAvatarGroupTypeClass = sAvatarGroupClass + sGroupType,
				aItems = oAvatarGroup.getItems(),
				bShowMoreButton = oAvatarGroup._shouldShowMoreButton(),
				bInteractive = oAvatarGroup.getProperty("_interactive");

			oRm.openStart("div", oAvatarGroup)
				.class(sAvatarGroupClass)
				.class(sAvatarGroupTypeClass)
				.class(sAvatarGroupClass + oAvatarGroup.getAvatarDisplaySize());

			if (bShowMoreButton) {
				oRm.class("sapFAvatarGroupShowMore");
			}

			if (!bInteractive) {
				oRm.class("sapFAvatarGroupNonInteractive");
			}

			if (oAvatarGroup._bAutoWidth) {
				oRm.style("width", "auto");
			}

			if (sGroupType === "Group") {
				oRm.attr("role", "button");
			}

			oRm.openEnd();

			for (var i = 0; i < oAvatarGroup._iAvatarsToShow; i++) {
				oRm.renderControl(aItems[i]);
			}

			if (bShowMoreButton) {
				oRm.renderControl(oAvatarGroup._oShowMoreButton);
			}

			oRm.close("div");
		};

		return AvatarGroupRenderer;
	}, /* bExport= */ true);