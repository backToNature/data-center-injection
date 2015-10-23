define(function(require, exports, module) {
    var tmpWrapper = '<div class="cyanData-header-title-wrapper">' +
                            '<h3 class="cyanData-header-hide">>></h3>' +
                            '<h1 class="cyanData-header-title">cyData</h1>' +
                            '<ul class="cyanData-header-params clearfix">' +
                            '{{each list as value i}}' +
                                '<li class="cyanData-params-color{{i%3}}">{{value}};</li>' +
                            '{{/each}}' +
                            '</ul>' +
                        '</div>';
                    
    module.exports = tmpWrapper;
});
