var code = ` <div id="{{boxId}}" style="top: 0;left: 0;width: 100vw;height: 100vh;background-color: #b2b2b269;position: absolute;z-index: 9999999;display: flex;justify-content: center;align-items: center;"><div style="width:300px;height:150px;background-color:#fff;border-radius:15px;position:relative;box-shadow:rgb(0 0 0/24%)0px 3px 8px;"> <div style="display: flex; align-items: center;"> <img style="display:flex;align-items:center;width:86px;border-radius:10px;margin:10px;" src="{{img}}" alt="" /> <div style="display:flex;flex-direction:column;"> <h2 style="display:flex;align-items:center;font-size:14px;margin:0 0 6 0;color: crimson;">{{title}}</h2> <p style="display:flex;align-items:center;font-size:12px;margin:0 4 0 0;">{{content}}</p> </div> </div> <div style="display: flex;justify-content: center;padding: 0 12px;"> <button id="btnClose" style="padding:6px 24px;background-color:#fff;width:40%;font-size:16px;border-radius:10px;border:1px solid#ccc;">关闭</button> <a style="margin-left:6px;width:100%;color:#fff;background-color:#1866FC;display:flex;justify-content:center;align-items:center;text-decoration:none;border-radius:10px;border:1px solid#ccc;" href="{{path}}">点击查看</a> </div> </div> </div>`;
var infoList = [
  {
    title: "【酷小呵公众号】，已上线！！",
    content: "防失联，微信扫描二维码关注，或者微信搜索：酷小呵，感谢支持！！",
    link: "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzkwNzQ5MzE2Nw==&scene=124#wechat_redirect \"target=\"_self\"",
    img: "https://bu.dusays.com/2024/03/17/65f6dabeb59ca.jpg",
  },
  {
    title: "【酷小呵自营】三网低价流量卡",
    content: "低至9/月100+G流量！运营商直营授权，三网套餐任选，可打电话发短信，无任何套路放心选购！",
    link: "https://simhaoka.com/phone/index?id=BEB2EC5A50CFC026883BD3CB2645EC14 \"target=\"_self\"",
    img: "https://wework.qpic.cn/wwpic3az/486090_vU9ToHSnRTeeXP9_1702133137",
  },
  {
    title: "【全网热瓜，每日更新】",
    content: "🍉🍉全网热瓜🍉每日更新！请点击尽情吃瓜！",
    link: "https://pan.xunlei.com/s/VNsxRiRp7kG2WbaJTtk81n_aA1?pwd=cknj# \"target=\"_self\"",
    img: "https://bu.dusays.com/2024/03/17/65f6dc01e6f57.png",
  },
];

function setCookie() {
  var date = new Date();
  var Hour = 1; //设置每小时过期时间
  let expireTime = Hour * 3600 * 1000;
  let expires = date.getTime() + expireTime;
  date.setTime(expires);
  document.cookie =
    "a1d=" + RandomNumBoth(10000, 100000) + "; expires=" + date.toGMTString();
  document.cookie =
    "testexp=" + expires + "; expires=" + date.toGMTString();
  // 过了这个时间就没用过期时间
  setTimeout(() => {
    checkCookie();
  }, expireTime + 10);
}

function getCookie(cookie_name) {
  var results = document.cookie.match(
    "(^|;) ?" + cookie_name + "=([^;]*)(;|$)"
  );
  if (results) return unescape(results[2]);
  else return null;
}
function checkCookie() {
  setTimeout(function () {
    if (!getCookie("a1d")) {
      setCookie();
      let btnClose = document.querySelector("#btnClose");
      if (btnClose) {
        return;
      }
      let a1d = infoList[RandomNumBoth(0, infoList.length - 1)];
      let boxId = RandomNumBoth(10000, 100000);
      let newCode = code.replace("{{title}}", a1d.title);
      newCode = newCode.replace("{{content}}", a1d.content);
      newCode = newCode.replace("{{path}}", a1d.link);
      newCode = newCode.replace("{{img}}", a1d.img);
      newCode = newCode.replace("{{boxId}}", boxId);

      let div = document.createElement("div");
      div.innerHTML = newCode;
      document.body.appendChild(div);
      btnClose = document.querySelector("#btnClose");

      btnClose.onclick = function () {
        document.getElementById(boxId).remove();
      };
    }
    else {
      let timeOut = getCookie("testexp") ?? 1000;
      if (timeOut >= 1000) {
        timeOut = timeOut - new Date().getTime();
        if (timeOut < 0) {
          checkCookie();
          return;
        }
      }
      console.log(timeOut);
        setTimeout(function () {
        checkCookie();
      }, timeOut);
    }
  }, 2000);//延时2秒展示
}
  function RandomNumBoth(Min, Max) {
  var Range = Max - Min;
  var Rand = Math.random();
  var num = Min + Math.round(Rand * Range); //四舍五入
  return num;
}
checkCookie();