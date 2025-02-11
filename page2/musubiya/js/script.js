jQuery("#js-drawer-icon").on("click", function () {
    jQuery(this).toggleClass("is-checked");
    jQuery("#js-drawer").toggleClass("open");
});