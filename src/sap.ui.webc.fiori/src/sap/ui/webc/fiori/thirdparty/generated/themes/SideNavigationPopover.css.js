sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Themes', 'sap/ui/webc/common/thirdparty/theming/generated/themes/sap_fiori_3/parameters-bundle.css', './sap_fiori_3/parameters-bundle.css'], function (Themes, defaultThemeBase, parametersBundle_css) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

	var defaultThemeBase__default = /*#__PURE__*/_interopDefaultLegacy(defaultThemeBase);

	Themes.registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_fiori_3", () => defaultThemeBase__default);
	Themes.registerThemePropertiesLoader("@ui5/webcomponents-fiori", "sap_fiori_3", () => parametersBundle_css);
	var SideNavigationPopoverCss = {packageName:"@ui5/webcomponents-fiori",fileName:"themes/SideNavigationPopover.css",content:".ui5-side-navigation-popover [ui5-li][focused]:first-child::part(native-li):after{border-top-left-radius:var(--_ui5_side_navigation_overflow_border_radius);border-top-right-radius:var(--_ui5_side_navigation_overflow_border_radius)}.ui5-side-navigation-popover [ui5-li][focused]:last-child::part(native-li):after{border-bottom-left-radius:var(--_ui5_side_navigation_overflow_border_radius);border-bottom-right-radius:var(--_ui5_side_navigation_overflow_border_radius)}"};

	return SideNavigationPopoverCss;

});
