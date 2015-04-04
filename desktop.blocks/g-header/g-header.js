modules.define('g-header', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {
    BEMDOM.decl('g-header', {
        onSetMod: {
            js: {
                'inited': function () {
                    $.easing["easeInExpo"] = function (x, t, b, c, d) {
                        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
                    }
                    $.easing["easeInQuart"] = function (x, t, b, c, d) {
                        return c*(t/=d)*t*t*t + b;
                    }
                    var inner = this.findBlockInside('g-header_inner');
                    inner.bindTo('up', 'click', function(e) {
                        console.log('click');
                        $("body,html").animate({scrollTop: 0}, 750, 'easeInQuart');
                    });

                    var self = this;
                    var support = this.findBlockInside('g-support');
                    var desc = $('.g-logo__description');


                    $(window).scroll(repos);

                    function repos () {
                        setTimeout(function () {
                            if ($(window).scrollTop() > 0) {
                                self.setMod('state', 'flow');
                                support.setMod('dark', true);
                                $('.g-header_inner__up').css('display', 'block');
                                //desc.css('display', 'none');
                            } else {
                                self.delMod('state');
                                support.delMod('dark');
                                $('.g-header_inner__up').css('display', 'none');
                                //desc.css('display', 'block');
                            }
                        });
                    }

                    repos();
                },

                '': function () {
                    $(window).unbind('scroll');
                }
            }
        }
    }, {});
    provide(BEMDOM);
});
