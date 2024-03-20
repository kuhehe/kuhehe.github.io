function openPopup() {
            var overlay = document.getElementById("overlay");
            var popup = document.getElementById("popup");
            var countdownElement = document.getElementById("countdown");

            overlay.style.display = "flex";
            popup.classList.add("show");

            // Set 15 seconds for auto-close
            var countdown = 15;
            countdownElement.textContent = "广告倒计时：" + countdown + " 秒";

            var countdownInterval = setInterval(function () {
                countdown--;
                countdownElement.textContent = "广告倒计时：" + countdown + " 秒";

                if (countdown <= 0) {
                    clearInterval(countdownInterval);
                    closePopup();
                }
            }, 1000);
        }

        function closePopup() {
            var overlay = document.getElementById("overlay");
            var popup = document.getElementById("popup");

            overlay.style.display = "none";
            popup.classList.remove("show");
            // Clear text content
            popup.innerHTML = "";
        }

        function redirectToPage() {
            window.location.href = "https://pan.quark.cn/s/2bc4a2b8f64d#/list/share";
        }

function redirectToPage2() {
            window.location.href = "https://pan.quark.cn/s/2bc4a2b8f64d#/list/share";
        }

        window.onload = function () {
            openPopup();
        };