    // 设置显示开始的小时（0 到 23）
    const startHour = 10;
    // 设置显示开始的分钟（0 到 59）
    const startMinute = 30;
    // 设置显示结束的小时（0 到 23）
    const endHour = 11;
    // 设置显示结束的分钟（0 到 59）
    const endMinute = 0;

    function checkTime() {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();

      const start = startHour * 60 + startMinute;
      const end = endHour * 60 + endMinute;
      const current = currentHour * 60 + currentMinute;

      if (current >= start && current <= end) {
        document.getElementById('myModule').classList.remove('hien');
        document.getElementById('myModule').innerHTML = document.getElementById('myModule').innerHTML;
      } else {
        document.getElementById('myModule').classList.add('hien');
      }
    }

    // 每秒检查一次时间
    setInterval(checkTime, 1000);