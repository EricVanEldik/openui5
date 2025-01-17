/*!
 * ${copyright}
 */
/*global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap/ui/core/sample/common/pages/Any",
		"sap/ui/core/internal/samples/odata/v2/SalesOrders/tests/pages/Main",
		"sap/ui/core/internal/samples/odata/v2/SalesOrders/tests/MessagesForNoteFields",
		"sap/ui/core/internal/samples/odata/v2/SalesOrders/tests/MessageStripAndAggregatedTableRowHighlighting",
		"sap/ui/core/internal/samples/odata/v2/SalesOrders/tests/MessageLifecycleSideEffects",
		"sap/ui/core/internal/samples/odata/v2/SalesOrders/tests/TransitionMessagesOnly",
		"sap/ui/core/internal/samples/odata/v2/SalesOrders/tests/FilterSalesOrderItemsByItemsWithMessages",
		"sap/ui/core/internal/samples/odata/v2/SalesOrders/tests/CreateAndDeleteSalesOrderItems",
		"sap/ui/core/internal/samples/odata/v2/SalesOrders/tests/UnboundMessages",
		"sap/ui/core/internal/samples/odata/v2/SalesOrders/tests/MessagesWithMultipleTargets",
		"sap/ui/core/internal/samples/odata/v2/SalesOrders/tests/MessagesReturnedFromAFunctionImport",
		"sap/ui/core/internal/samples/odata/v2/SalesOrders/tests/IgnoredMessages",
		"sap/ui/core/internal/samples/odata/v2/SalesOrders/tests/CloneSalesOrderItem",
		"sap/ui/core/internal/samples/odata/v2/SalesOrders/tests/ODataListBinding.create/TC1_SalesOrders",
		"sap/ui/core/internal/samples/odata/v2/SalesOrders/tests/ODataListBinding.create/TC2_CreateItems"
	], function () {
		QUnit.start();
	});
});