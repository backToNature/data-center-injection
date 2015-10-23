define(function (require, exports, module) {
    var uri = {
        set: function (uri, key, value) {
            var origin = uri.substring(0, uri.indexOf('?') + 1);

            var QueryObj = this.parseQueryString(uri);
            if (typeof key === 'string') {
                QueryObj[key] = value;
            }
            var i = 0;
            var query = '';
            for (var k in QueryObj) {
                if (i == 0) {
                    query += k + '=' +  QueryObj[k];
                    i ++;
                } else {
                    query += '&' + k + '=' +  QueryObj[k];
                }
            }
            return (origin + query);
        },
        parseQueryString: function (url) {
            var reg_url =/^[^\?]+\?([\w\W]+)$/,
                reg_para=/([^&=]+)=([\w\W]*?)(&|$)/g,
                arr_url = reg_url.exec( url ),
                ret = {};
            if( arr_url && arr_url[1] ){

                var str_para = arr_url[1],result;
                while((result = reg_para.exec(str_para)) != null){
                    ret[result[1]] = result[2];
                }
            }
            return ret;
        }
    };

    module.exports = uri;
});