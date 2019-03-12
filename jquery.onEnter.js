/**
 * jQuery.onEnter.js
 * Written by: Jay Simons
 * Cloudulus.Media (https://code.cloudulus.media)
 */

if (window.jQuery) {
    (function ($) {
        $.fn.onEnter = function (opt1, opt2, opt3) {
            return this.on('keyup', function (e) {
                var me = $(this);
                var code = e.keyCode ? e.keyCode : e.which;
                if (code == 13) {
                    if (typeof opt1 == 'function')
                    {
                        callback(me, opt2);
                        return true;
                    }else if (opt1 == 'tab')
                    {
                        var eles = $(document).find('input,select,textarea,button').filter(':visible:not(:disabled):not([readonly])');
                        var foundMe = false;
                        var next = null;
                        eles.each(function(){
                            if (!next){
                                if (foundMe) next = $(this);
                                if (JSON.stringify($(this)) == JSON.stringify(me)) foundMe = true;
                            }
                        });
                        next.focus();
                        if (typeof opt2 === 'function')
                        {
                            opt2(me, opt3);
                        }
                        return true;
                    }
                }
            }).on('keydown', function(e){
                var code = e.keyCode ? e.keyCode : e.which;
                if (code == 13)
                {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                }
            });
        }
    })(jQuery);
} else {
    console.log("onEnter.js: This class requies jQuery > v3!");
}