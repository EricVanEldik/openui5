sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Icons'], function (Icons) { 'use strict';

	const name = "home";
	const pathData = "M467 157q12 12 19.5 27.5T494 218v214q0 34-23 56.5T414 511H97q-33 0-56-22.5T18 432V218q0-38 27-61L203 20q24-20 54-20t52 20zM296 300h-80v159h80V300zm142-82q0-13-8-21L272 60q-17-13-35 0L79 197q-8 8-8 21v214q0 12 7.5 19.5T97 459h66V300q0-22 15.5-37.5T216 247h80q22 0 37 15.5t15 37.5v159h66q12 0 19.5-7.5T441 432z";
	const ltr = false;
	const collection = "SAP-icons-v5";
	const packageName = "@ui5/webcomponents-icons";
	Icons.registerIcon(name, { pathData, ltr, collection, packageName });
	var pathDataV4 = { pathData };

	return pathDataV4;

});
