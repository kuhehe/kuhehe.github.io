let uptime = ~~((new Date() - new Date("2024-01-01")) / 864E5);
let uptimeTags = Array.from(document.getElementsByTagName("uptime"));
uptimeTags.forEach(ele => { ele.textContent = `${uptime}天` });