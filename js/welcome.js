function welcome(){
    let welcome_text = '欢迎光顾本蒟蒻的小窝~'
    if(document.referrer!==''){
        let referrer=document.referrer.split("/")[2];
        welcome_text="欢迎你，来自"+referrer.toUpperCase()+"的用户！";//获取用户来源域名
    }
    swal({
        title: " 酷小呵推荐👇👇",
        text: '超值大流量卡 <a href="https://simhaoka.com/phone/index?id=BEB2EC5A50CFC026883BD3CB2645EC14">超值大流量卡</a>  </p>  微信公众号：酷小呵 ',
        imageUrl: "https://bu.dusays.com/2024/02/06/65c1ce484c3da.jpg",//图片，自行修改位置
        timer: 10000,//弹出时间
        showConfirmButton: true
    });
}
$(document).ready(()=>{//若未引用JQuery，请引用
    welcome()
})

