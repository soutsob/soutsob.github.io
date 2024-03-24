let activeElBeforeOpen, searchBtn = document.querySelector(".js-open-search");
if (null !== searchBtn) {
    function closeSearchPopup() {
        searchBtn.classList.contains("fixed") || (document.querySelector("#fixed-header").classList.remove("search-focus"), document.querySelector(".search-popup").classList.remove("open"), searchBtn.classList.remove("open"), document.removeEventListener("mouseup", e), activeElBeforeOpen && activeElBeforeOpen.focus())
    }

    function openSearchPopup() {
        activeElBeforeOpen = document.activeElement, document.querySelector(".search-popup").classList.add("open"), document.querySelector("#fixed-header").classList.add("search-focus"), setTimeout(function () {
            document.querySelector(".search-popup .search-form__input").focus()
        }, 100), document.addEventListener("mouseup", e)
    }

    searchBtn.addEventListener("click", e => {
        searchBtn.classList.contains("fixed") || (searchBtn.classList.contains("open") ? (searchBtn.classList.remove("open"), closeSearchPopup()) : (e.preventDefault(), searchBtn.classList.add("open"), openSearchPopup()))
    }), document.addEventListener("keydown", function (e) {
        "Escape" === e.code && closeSearchPopup()
    });
    const e = e => {
        var s = $(document.querySelector("#fixed-header"));
        s.is(e.target) || 0 !== s.has(e.target).length || closeSearchPopup()
    };
    let s = document.querySelector(".search-results-list");
    s && jQuery(function (e) {
        let t = document.getElementById("more_posts"), c = 1,
            o = document.body.className.match(/(^|\s)paged-(\d+)(\s|$)/);
        o && (c = o[2]);
        var a = !0;
        e(window).scroll(function () {
            e(document).scrollTop() > e(document).height() - 3e3 && 1 == a && e.ajax({
                url: theme_script_localize.ajaxurl,
                data: {
                    action: "more_search_results_ajax",
                    query_vars: loadmore_params.posts,
                    paged: c
                },
                type: "POST",
                beforeSend: function () {
                    t.classList.add("posts-loading"), a = !1
                },
                success: function (o) {
                    t.classList.remove("posts-loading"), o && (e(s).append(o), a = !0, c++)
                }
            })
        })
    })
}