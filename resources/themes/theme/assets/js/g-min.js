jQuery.event.special.touchstart = {
    setup: function (e, t, i) {
        this.addEventListener("touchstart", i, {passive: !1})
    }
}, jQuery.event.special.touchmove = {
    setup: function (e, t, i) {
        this.addEventListener("touchmove", i, {passive: !1})
    }
};
var winH = window.innerHeight;

let StartAccordion = function (e) {
    if (null != e) try {
        e.forEach(e => {
            e.querySelectorAll(".accordion-item").forEach(o => {
                o.querySelector(".accordion-item__content").style.maxHeight = 0, o.classList.contains("active") && i(o), o.querySelector(".accordion-item__header").onclick = function (n) {
                    o.classList.contains("active") ? t(e) : (t(e), function (e) {
                        e.classList.toggle("active"), i(e)
                    }(o))
                }
            })
        })
    } catch (e) {
        console.log(e)
    }

    function t(e) {
        e.querySelectorAll(".accordion-item").forEach(e => {
            e.classList.remove("active"), e.querySelector(".accordion-item__content").style.maxHeight = 0
        })
    }

    function i(e) {
        e.querySelector(".accordion-item__content").style.maxHeight = e.querySelector(".wrap").clientHeight + "px"
    }
};
if (StartAccordion(document.querySelectorAll(".accordion")), null != document.querySelector(".wow")) try {
    new WOW({mobile: !1}).init()
} catch (e) {
    document.querySelectorAll(".wow").forEach(e => {
        e.classList.remove("wow")
    })
}
let fixedHeader = document.getElementById("fixed-header");
if (fixedHeader) {
    let e;
    var bH = document.body.scrollHeight, moreElements = document.getElementsByClassName("fixedWithNav");
    window.addEventListener("scroll", function () {
        document.body.classList.contains("scroll-stop") || (e = !0) && (hasScrolled(bH, moreElements), e = !1)
    })
}

function hasScrolled(e, t) {
    let i = document.documentElement.scrollTop;
    i > winH ? (fixedHeader.classList.add("fixed--nav"), fixedHeader.classList.contains("header--transparent") && (fixedHeader.classList.remove("header--transparent"), fixedHeader.classList.add("header--transparent-hide")), Array.from(t).forEach(function (e) {
        e.classList.add("fixed--nav")
    })) : i + winH < e && (fixedHeader.classList.remove("fixed--nav"), fixedHeader.classList.contains("header--transparent-hide") && (fixedHeader.classList.add("header--transparent"), fixedHeader.classList.remove("header--transparent-hide")), Array.from(t).forEach(function (e) {
        e.classList.remove("fixed--nav")
    }))
}

jQuery(function (e) {
    const t = e("#home-bg-vid");
    t.is(":visible") && (e("source", t).each(function () {
        const t = e(this);
        t.attr("src", t.data("src"))
    }), t[0].load());
    let i = document.querySelectorAll(".agree");
    i && i.forEach(e => {
        e.checked && (e.click(), e.removeAttribute("checked"))
    }), e(window).on("orientationchange resize", function () {
        let t = e(document.querySelector(".mfp-wrap"));
        if (t.length) {
            let e = document.documentElement.scrollTop;
            t.css("top", e)
        }
    });
    e('a[href ^= "https://www.google.com/maps/place/"]', ".footer-locations__item-description, .contact__acc-content").on("click", function (t) {
        t.preventDefault();
        let i = e(this).attr("href");
        i && function (e, t) {
            let i = void 0 !== window.screenLeft ? window.screenLeft : window.screenX,
                o = void 0 !== window.screenTop ? window.screenTop : window.screenY;
            console.log(i), console.log(o);
            let n = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
                s = winH || (document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height),
                l = n / 100 * 65, r = s / 100 * 80, c = n / window.screen.availWidth, a = (n - l) / 2 / c + i,
                d = (s - r) / 2 / c + o,
                u = window.open(e, t, "scrollbars=yes, width=" + l + ", height=" + r + ", top=" + d + ", left=" + a);
            u.opener = null, window.focus && u.focus()
        }(i, "SOUTSOB location")
    })
}), jQuery(function (e) {
    e(document.querySelectorAll(".next-arrow, .prev-arrow, .slick-dots")).on("click", function () {
        let t = e(this).closest(".slick-slider");
        t && t.slick("slickPause")
    });
    let t = e(document.getElementById("imageCarousel"));
    if (t.length) {
        let i = e(document.getElementById("imageCarousel-arrows"));
        t.slick({
            infinite: !1,
            fade: !0,
            dots: !0,
            arrows: !0,
            speed: 800,
            prevArrow: i.find(".prev-arrow"),
            nextArrow: i.find(".next-arrow")
        })
    }
    let i = e(document.getElementById("idt-slider"));
    if (i.length) {
        let t = e(document.getElementById("idt-slider-arrows"));
        i.slick({
            autoplay: !0,
            infinite: !1,
            fade: !0,
            dots: !0,
            arrows: !0,
            autoplaySpeed: 2300,
            speed: 800,
            pauseOnHover: !0,
            prevArrow: t.find(".prev-arrow"),
            nextArrow: t.find(".next-arrow"),
            responsive: [{breakpoint: 630, settings: {dots: !0}}]
        })
    }
    let o = e(document.getElementById("idt-case-slider"));
    o.length && o.slick({
        autoplay: !0,
        infinite: !1,
        fade: !1,
        dots: !0,
        arrows: !1,
        autoplaySpeed: 2e3,
        speed: 800,
        pauseOnHover: !0
    });
    let n = jQuery(document.getElementById("customer-video-slider"));
    if (n.length) {
        let e = [{breakpoint: 630, settings: {slidesToShow: 2}}];
        n.find(".customer-video__item").length > 3 ? e.push({
            breakpoint: 970,
            settings: {slidesToShow: 3, slidesToScroll: 3}
        }) : e.push({breakpoint: 970, settings: "unslick"}), n.not(".slick-initialized").slick({
            autoplay: !0,
            infinite: !1,
            dots: !0,
            arrows: !1,
            pauseOnHover: !1,
            slidesToScroll: 1,
            mobileFirst: !0,
            responsive: e
        }), window.addEventListener("resize", function (e) {
            n.slick("resize")
        })
    }
    let s = e(document.getElementById("tabs_slider"));
    if (s.length) {
        let t = e(document.getElementById("tabs-slider-arrows")), i = e(document.querySelector(".dots-bar"));
        s.not(document.getElementsByClassName("slick-initialized")).slick({
            infinite: !1,
            dots: !0,
            appendDots: i,
            customPaging: function (t, i) {
                return '<button class="tab">' + e(t.$slides[i]).attr("title") + "</button>"
            },
            arrows: !0,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
            mobileFirst: !0,
            adaptiveHeight: !0,
            fade: !0,
            cssEase: "ease",
            responsive: [],
            prevArrow: t.find(".prev-arrow"),
            nextArrow: t.find(".next-arrow")
        }), window.addEventListener("resize", function (e) {
            s.slick("resize")
        })
    }
    let l = e(document.getElementById("tech-expertise-slider"));
    if (l.length) {
        let t = e(document.getElementsByClassName("tech-expertise__pagination")),
            i = e(document.getElementById("tech-arrows"));
        l.not(document.getElementsByClassName("slick-initialized")).slick({
            dots: !0,
            arrows: !1,
            autoplaySpeed: 2e3,
            speed: 400,
            pauseOnHover: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            mobileFirst: !0,
            waitForAnimate: !1,
            fade: !0,
            draggable: !0,
            asNavFor: t,
            responsive: [{breakpoint: 630, settings: {draggable: !1}}]
        });
        let o = l.slick("getSlick").slideCount;
        o > 3 && (t.slick({
            dots: !1,
            arrows: !0,
            autoplaySpeed: 2e3,
            speed: 400,
            pauseOnHover: !0,
            slidesToShow: 2,
            slidesToScroll: 2,
            mobileFirst: !0,
            variableWidth: !0,
            waitForAnimate: !1,
            asNavFor: l,
            infinite: !1,
            draggable: !0,
            prevArrow: '<span class="arrow-prev"><svg width="15" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.174 6.557a.65.65 0 0 0 0 .886l5.915 6.35a.65.65 0 1 0 .951-.886L1.538 7 7.04 1.093A.65.65 0 1 0 6.09.207L.174 6.557ZM13.482.207l-5.915 6.35a.65.65 0 0 0 0 .886l5.915 6.35a.65.65 0 1 0 .95-.886L8.933 7l5.5-5.907a.65.65 0 1 0-.95-.886Z" fill="#787878"/></svg></span>',
            nextArrow: '<span class="arrow-next"><svg width="15" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.826 6.557a.65.65 0 0 1 0 .886l-5.915 6.35a.65.65 0 1 1-.951-.886L13.462 7 7.96 1.093A.65.65 0 1 1 8.91.207l5.915 6.35ZM1.518.207l5.915 6.35a.65.65 0 0 1 0 .886l-5.915 6.35a.65.65 0 1 1-.95-.886L6.067 7l-5.5-5.907a.65.65 0 0 1 .95-.886Z" fill="#787878"/></svg></span>',
            responsive: [{breakpoint: 970, settings: {slidesToShow: 3}}, {
                breakpoint: 1280,
                settings: {slidesToShow: 4}
            }]
        }), window.addEventListener("resize", function (e) {
            t.slick("resize")
        })), i.find(".next-arrow").on("click", function () {
            let t = e(".section-tech-expertise__pag.active").data("slide") + 1;
            t > o && (t = 1), e(".tech-expertise__pag").removeClass("active"), e("span[data-slide=" + t + "]").addClass("active"), l.slick("slickNext")
        }), i.find(".prev-arrow").on("click", function () {
            let t = e(".tech-expertise__pag.active").data("slide") - 1;
            t < 1 && (t = o), e(".tech-expertise__pag").removeClass("active"), e("div[data-slide=" + t + "]").addClass("active"), l.slick("slickPrev")
        }), e("div[data-slide].tech-expertise__pag").click(function () {
            e(".tech-expertise__pag").removeClass("active"), e(this).addClass("active");
            let t = e(this).data("slide");
            l.slick("slickGoTo", t - 1)
        }), window.addEventListener("resize", function (e) {
            l.slick("resize")
        })
    }
    let r = e(document.getElementsByClassName("what-we-do-list"));
    if (r.length) {
        let t = r.find(".what-we-do-item").length, i = e(document.getElementById("what-we-do-arrows")),
            o = [{breakpoint: 630, settings: {slidesToShow: 2, slidesToScroll: 2}}, {
                breakpoint: 970,
                settings: {slidesToShow: 4, slidesToScroll: 4}
            }];
        t < 5 && o.push({
            breakpoint: 970,
            settings: "unslick"
        }), r.not(document.getElementsByClassName("slick-initialized")).slick({
            infinity: !1,
            dots: !0,
            arrows: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            mobileFirst: !0,
            prevArrow: i.find(".prev-arrow"),
            nextArrow: i.find(".next-arrow"),
            responsive: o
        }), window.addEventListener("resize", function (e) {
            r.slick("resize")
        })
    }
    let c = jQuery(document.getElementById("single-post-top__slider"));
    c.length && (c.not(document.getElementsByClassName("slick-initialized")).slick({
        infinite: !1,
        dots: !0,
        arrows: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{breakpoint: 970, settings: "unslick"}, {breakpoint: 630, settings: {slidesToShow: 2}}],
        mobileFirst: !0
    }), window.addEventListener("resize", function (e) {
        c.slick("resize")
    }));
    let a = jQuery(document.getElementsByClassName("other-locations__row"));
    a.length && (a.not(document.getElementsByClassName("slick-initialized")).slick({
        infinite: !1,
        dots: !0,
        arrows: !1,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{breakpoint: 970, settings: {slidesToShow: 2}}, {breakpoint: 629, settings: {slidesToShow: 1}}]
    }), window.addEventListener("resize", function (e) {
        a.slick("resize")
    }));
    let d = jQuery(document.getElementsByClassName("vertical-slides"));
    d.length && (d.not(document.getElementsByClassName("slick-initialized")).slick({
        infinite: !1,
        dots: !1,
        arrows: !1,
        slidesToShow: 4,
        slidesToScroll: 3,
        vertical: !0,
        verticalSwiping: !0,
        swipe: !0,
        touchMove: !0,
        responsive: [{
            breakpoint: 970,
            settings: {vertical: !1, verticalSwiping: !1, centerMode: !1, dots: !0, slidesToShow: 2, slidesToScroll: 2}
        }, {breakpoint: 629, settings: {vertical: !1, verticalSwiping: !1, centerMode: !1, dots: !0, slidesToShow: 1}}]
    }), window.addEventListener("resize", function (e) {
        d.slick("resize")
    }));
    let u = document.querySelectorAll(".slider-mobile");
    u.length > 0 && (e(u).find(".list").slick({
        infinite: !1,
        dots: !0,
        arrows: !1,
        fade: !1,
        speed: 800,
        slidesToShow: 1,
        mobileFirst: !0,
        responsive: [{breakpoint: 659, settings: "unslick"}]
    }), window.addEventListener("resize", function (t) {
        e(u).find(".list").slick("resize")
    }));
    let m = document.querySelectorAll(".slider-tablet");
    m.length > 0 && (e(m).find(".list").slick({
        infinite: !1,
        dots: !0,
        arrows: !1,
        fade: !1,
        speed: 800,
        slidesToShow: 1,
        mobileFirst: !0,
        responsive: [{breakpoint: 969, settings: "unslick"}]
    }), window.addEventListener("resize", function (t) {
        e(m).find(".list").slick("resize")
    })), jQuery(document.getElementsByClassName("customer-video__item-link")).length && videoLinksInit(".customer-video__item-link")
}), function () {
    let e = jQuery(document.querySelector(".cn"));
    localStorage && !localStorage.getItem("cookie_accept") && setTimeout(function () {
        e.addClass("showed-cookie-notice")
    }, 5e3), jQuery(document.querySelectorAll(".cn__btn")).on("click", function (t) {
        t.preventDefault(), e.removeClass("showed-cookie-notice"), localStorage && jQuery(this).hasClass("cn__accept") ? (console.log("cookie accept"), localStorage.setItem("cookie_accept", "yes")) : localStorage.setItem("cookie_accept", "no")
    })
}(), jQuery(function (e) {
    setTimeout(function () {
        let t = e(document.getElementById("dynamic-location-country"));
        e.ajax({
            type: "POST",
            dataType: "html",
            url: theme_script_localize.ajaxurl,
            data: {action: "geo_ip_footer_location_country_ajax"},
            beforeSend: function () {
                t.addClass("lazy")
            },
            success: function (i) {
                let o = e(i);
                o.length ? t.append(o) : t.remove(), t.addClass("loaded")
            },
            error: function (e) {
                console.log(e)
            }
        })
    }, 500), e(document.getElementById("to_top")).click(function () {
        return e("body,html").animate({scrollTop: 0}, 400), !1
    })
}), window.addEventListener("DOMContentLoaded", function () {
    let e = localStorage;
    if (e) {
        let t = theme_script_localize.site_url, i = Date.now(), o = document.querySelector(".clientreferer");
        if (document.referrer) {
            let n = document.referrer;
            -1 === n.search(t) && (e.setItem("referrerTime", i), e.setItem("referrer", n), null !== o && o.setAttribute("value", e.getItem("referrer")))
        } else e.removeItem("referrerTime"), e.removeItem("referrer");
        e.getItem("referrer") && i - e.getItem("referrerTime") <= 216e5 ? null !== o && o.setAttribute("value", e.getItem("referrer")) : (e.removeItem("referrerTime"), e.removeItem("referrer"))
    }
    let t = ("; " + document.cookie).split("; landing=").pop().split(";").shift(),
        i = document.querySelector(".clientland");
    t && null !== i ? i.setAttribute("value", decodeURI(t)) : (document.cookie = "landing=" + encodeURI(location.href) + "; path=/", null !== i && i.setAttribute("value", location.href))
}), function (e, t) {
    e.each(readyQ, function (t, i) {
        e(i)
    }), e.each(bindReadyQ, function (i, o) {
        e(t).bind("ready", o)
    })
}(jQuery, document);