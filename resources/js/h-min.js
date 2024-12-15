let menuBtn = document.querySelector(".mobile-menu-btn");
null !== menuBtn && menuBtn.addEventListener("click", function (e) {
    e.preventDefault(), document.querySelector(".mobile-menu-btn, #mobile-sidebar-menu").classList.toggle("active"), document.querySelector("body").classList.toggle("scroll-stop"), document.getElementById("fixed-header").classList.toggle("mobile-active")
}), jQuery(function (e) {
    e(document.querySelectorAll(".header-menu li.with-sub > a")).click(function (e) {
        e.preventDefault()
    });
    let t, n = document.getElementById("blur"), s = document.getElementById("fixed-header"),
        i = document.getElementById("search-popup"), l = document.querySelectorAll(".header-menu li.with-sub"), o = "";
    e(l).on("mouseenter click", function () {
        s.classList.contains("mobile-active") || (s.classList.contains("header--transparent") && (o = "header--transparent", s.classList.remove("header--transparent")), clearTimeout(t), n.style.backdropFilter = "blur(10px)", n.style.backgroundColor = "rgba(0, 0, 0, 0.2)", i.classList.add("unvisible"), l.forEach(e => {
            e.classList.remove("active")
        }), this.classList.add("active"))
    }).on("mouseleave", function () {
        s.classList.contains("mobile-active") || (t = setTimeout(function () {
            o && (s.classList.add(o), o = ""), n.removeAttribute("style"), i.classList.remove("unvisible"), l.forEach(e => {
                e.classList.remove("active")
            })
        }, 200))
    }), e(".header-menu > li:not(.with-sub)").on("hover mouseenter", function () {
        l.forEach(e => {
            e.classList.remove("active")
        })
    }), e(l).on("click", function (t) {
        s.classList.contains("mobile-active") && (t.preventDefault(), e(l).not(e(this)).removeClass("active").find(".submenu").slideUp("fast"), e(this).toggleClass("active").find(".submenu").slideToggle("fast"))
    }), e(l).find(".submenu li a").on("click", function (e) {
        e.stopPropagation()
    }), window.addEventListener("resize", function () {
        let e = document.querySelector(".mobile-menu-btn.active");
        e && (l.forEach(e => {
            e.classList.remove("active"), e.getElementsByClassName("submenu")[0].removeAttribute("style")
        }), e.click())
    }, !0)
});