define(function(require, exports, module) {
    var tmpWrapper = '<div class="cyanData-content">' +
            '{{each iframeList as value i}}' +
                '<div class="cyanData-content-iframeWrapper">' +
                    '<h3 class="cyanData-content-iframe-title">{{value.title}}</h3>' +
                    '<iframe class="cyanData-iframe" marginwidth="0" marginheight="0" frameborder="0" scrolling="no" allowtransparency="true" src="value.url"></iframe>' +
                '</div>' +
            '{{/each}}' +
            '{{each paramsList as value i}}' +
                '<div class="cyanData-content-iframeWrapper">' +
                    '<h3 class="cyanData-content-iframe-title">{{value.title}}</h3>' +
                    '<div id="cyanData-backend-param" class="cyanData-iframe cyanData-param"></div>' +
                '</div>' +
            '{{/each}}' +
            '</div>';
    var iframe = '{{each iframeList as value i}}' +
        '<div class="cyanData-content-iframeWrapper">' +
        '<h3 class="cyanData-content-iframe-title">{{value.title}}</h3>' +
        '<iframe class="cyanData-iframe" marginwidth="0" marginheight="0" frameborder="0" scrolling="no" allowtransparency="true" src="value.url"></iframe>' +
        '</div>' +
        '{{/each}}';
    var params = '{{each paramsList as value i}}' +
        '<div class="cyanData-content-iframeWrapper">' +
        '<h3 class="cyanData-content-iframe-title">{{value.title}}</h3>' +
        '<div id="cyanData-backend-param" class="cyanData-iframe cyanData-param"></div>' +
        '</div>' +
        '{{/each}}';
    module.exports = tmpWrapper;
});
