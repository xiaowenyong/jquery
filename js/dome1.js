/**
 * Created by Administrator on 2017/5/3.
 */
$(function () {
    $('.box').click(function () {
        $(this).hide(1000);
        $(this).siblings().show(1000);
    });
})