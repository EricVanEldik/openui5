sap.ui.define(['sap/ui/webc/common/thirdparty/base/renderer/LitRenderer'], function (litRender) { 'use strict';

	const block0 = (context, tags, suffix) => litRender.html`<${litRender.scopeTag("ui5-responsive-popover", tags, suffix)} horizontal-align="Center" placement-type="Bottom" aria-label="${litRender.ifDefined(context.actionSheetStepsText)}" class="${litRender.classMap(context.classes.popover)}" @ui5-after-close=${litRender.ifDefined(context._afterClosePopover)} content-only-on-desktop prevent-focus-restore _hide-header><ul class="ui5-wizard-responsive-popover-list">${ litRender.repeat(context._groupedTabs, (item, index) => item._id || index, (item, index) => block1(item, index, context, tags, suffix)) }</ul><div slot="footer" class="ui5-responsive-popover-footer"><${litRender.scopeTag("ui5-button", tags, suffix)} design="Transparent" @click="${context._closeRespPopover}">Cancel</${litRender.scopeTag("ui5-button", tags, suffix)}></div></${litRender.scopeTag("ui5-responsive-popover", tags, suffix)}>`;
	const block1 = (item, index, context, tags, suffix) => litRender.html`<li><${litRender.scopeTag("ui5-button", tags, suffix)} icon="${litRender.ifDefined(item.icon)}" ?disabled="${item.disabled}" design="Transparent" data-ui5-header-tab-ref-id="${litRender.ifDefined(item.accInfo.ariaPosinset)}" @click="${context._onOverflowStepButtonClick}">${litRender.ifDefined(item.titleText)}</${litRender.scopeTag("ui5-button", tags, suffix)}></li>`;

	return block0;

});
