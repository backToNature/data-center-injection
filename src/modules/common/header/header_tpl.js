define(function(require, exports, module) {
    var tmpWrapper = '<div class="cyanData-header-title-wrapper">' +
                            '<h3 class="cyanData-header-hide">>></h3>' +
                            '<h1 class="cyanData-header-title">cyData</h1>' +
                            '<ul class="cyanData-header-params clearfix">' +
                            '{{each list as value i}}' +
                                '<li class="cyanData-params-color{{i%3}}">{{value}};</li>' +
                            '{{/each}}' +

                            '<li class="cyanData-params-color1"><a target="_blank" href="{{ad.getConfigUrl}}">广告位:</a>' +
                            '{{each ad.position as value i}}' +
                            '<a target="_blank" href="{{value.url}}">{{value.position}}</a>|' +
                            '{{/each}}' +
        '                   </li>' +
                            '</ul>' +
                        '</div>';
                    
    module.exports = tmpWrapper;
});
