(function () {
    AJS.tables = AJS.tables || {}, AJS.tables.rowStriping = function () {
        for (var t = AJS.$("table.aui-zebra > tbody"), e = 0, i = t.length; i > e; e++)AJS.$(t[e]).find("> tr").filter(":odd").addClass("aui-zebra")
    }, AJS.$(AJS.tables.rowStriping)
})(), AJS.setUpToolbars = function () {
    function t() {
        AJS.$(".aui-toolbar button").closest(".toolbar-item").addClass("contains-button")
    }

    function e() {
        AJS.$(".aui-toolbar .toolbar-split-right").each(function (t, e) {
            var i = AJS.$(e), n = i.closest(".aui-toolbar"), r = n.find(".toolbar-split-left"), s = n.data("leftWidth"), a = n.data("rightWidth");
            s || (s = r.outerWidth(), n.data("leftWidth", s)), a || (a = 0, AJS.$(".toolbar-item", e).each(function (t, e) {
                a += AJS.$(e).outerWidth()
            }), n.data("rightWidth", a));
            var o = n.width(), l = o - s;
            o > a && a > l ? r.addClass("force-split") : r.removeClass("force-split")
        })
    }

    function i() {
        n.each(function (t, e) {
            var i = 0;
            AJS.$(e).children(".toolbar-item").each(function () {
                i += AJS.$(this).outerWidth()
            }), AJS.$(this).width(i)
        })
    }

    if (AJS.$.browser.msie) {
        var n = AJS.$(".aui-toolbar .toolbar-group");
        if (n.each(function (t, e) {
            AJS.$(e).children(":first").addClass("first"), AJS.$(e).children(":last").addClass("last")
        }), 7 == parseInt(AJS.$.browser.version, 10)) {
            i(), t();
            var r = !1;
            AJS.$(window).resize(function () {
                r !== !1 && clearTimeout(r), r = setTimeout(e, 200)
            })
        }
    }
}, AJS.toInit(function () {
    AJS.setUpToolbars()
});