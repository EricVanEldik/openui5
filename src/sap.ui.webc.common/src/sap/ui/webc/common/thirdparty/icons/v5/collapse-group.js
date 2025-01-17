sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Icons', '../generated/i18n/i18n-defaults'], function (Icons, i18nDefaults) { 'use strict';

	const name = "collapse-group";
	const pathData = "M156.5 243q-10 9-22 9-13 0-22-9-9-11-9-22 0-13 9-22l124-124q9-9 22-9 12 0 21 9l124 124q10 9 10 22 0 12-10 22-9 9-21 9-13 0-22-9l-102-103zm-2 225q-10 9-22 9-13 0-22-9-9-11-9-22 0-13 9-22l124-124q9-9 22-9 12 0 22 9l124 124q9 9 9 22 0 11-9 22-10 9-22 9-13 0-22-9l-102-103z";
	const ltr = false;
	const accData = i18nDefaults.ICON_COLLAPSE_GROUP;
	const collection = "SAP-icons-v5";
	const packageName = "@ui5/webcomponents-icons";
	Icons.registerIcon(name, { pathData, ltr, accData, collection, packageName });
	var pathDataV4 = { pathData, accData };

	return pathDataV4;

});
