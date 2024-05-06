console.log("安全跳转中台页面");
// 定义安全跳转对象
const safeGoFun = {
    NzcheckLink: async (domName) => {
        // 获取文章页非社会分享的a标签
        const links = document.querySelectorAll(domName);
        if (links) {
            // 锚点正则
            let reg = new RegExp(/^[#\/].*/);
            let relative = new RegExp(/^(?!www\.|http[s]?:\/\/|[\/\\])(.*)$/);
            for (let i = 0; i < links.length; i++) {
                const ele = links[i];
                let eleHref = ele.getAttribute("href"),
                    eleIsDownLoad = ele.getAttribute("data-download"),
                    eleRel = ele.getAttribute("rel");
                if (
                    !reg.test(eleHref) && !relative.test(eleHref) &&
                    eleRel !== "prev" && eleRel !== "next" &&
                    eleRel !== "category" && eleRel !== "tag" &&
                    eleHref !== "javascript:void(0);") {
                    // 判断是否下载地址和白名单
                    if (!(await safeGoFun.NzcheckLocalSite(eleHref))) {
                        // encodeURIComponent() URI编码
                        ele.setAttribute(
                            "href",
                            "/go.html?goUrl=" + encodeURIComponent(eleHref)
                        );
                    }
                }
            }
        }
    },
    // 校验白名单，自己博客，local测试
    NzcheckLocalSite: async (url) => {
        try {
            // 白名单地址则不修改href
            const safeUrls = ["localhost:4000", "kuhehe.top", "www.kuhehe.top"];
            let isOthers = false;
            for (let i = 0; i < safeUrls.length; i++) {
                const ele = safeUrls[i];
                if (url.includes(ele)) {
                    isOthers = true;
                    break;
                }
            }
            return isOthers;
        } catch (err) {
            return true;
        }
    },
};
// 将 safeGoFun 对象的属性复制到全局的 window 对象中
Object.keys(safeGoFun).forEach((key) => {
    window[key] = safeGoFun[key];
});
// 页面加载完成调用 NzcheckLink 函数
document.addEventListener("DOMContentLoaded", function () {
    window.NzcheckLink("#start a:not(.not-check-link):not(.fancybox)");
});