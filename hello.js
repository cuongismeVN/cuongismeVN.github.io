        document.getElementById('loginButton').addEventListener('click', function() {
            var password = document.getElementById('passwordInput').value;
            var cheatMenu = document.getElementById('cheatMenu');

            // Đặt mật khẩu chính xác ở đây
            var correctPassword = '1'; // Thay đổi thành mật khẩu của bạn

            if (password === correctPassword) {
                // Hiển thị menu cheat nếu mật khẩu đúng
                cheatMenu.style.display = 'block';
                document.getElementById('login').style.display = 'none';
            } else {
                alert('Key Sai, Nhấn Get Key Để Lấy Key Mới Nhất.');
            }
        });

        document.getElementById('contactButton').addEventListener('click', function() {
            window.location.href = 'https://t.me/cheatioscrack'; // Thay đổi địa chỉ email nếu cần
        });

        document.getElementById('searchSpeedButton').addEventListener('change', function() {
            if (this.checked) {
                console.log('Cheat: Đã Tìm Speed !');
                // Logic thực hiện cheat vô hạn máu
            } else {
                console.log('Cheat: Tìm Speed Đã Tắt !');
                // Logic tắt cheat vô hạn máu
            }
        });

        document.getElementById('activateSpeedButton').addEventListener('change', function() {
            if (this.checked) {
                console.log('Cheat: Speed Run Đã Bật!');
                // Logic thực hiện cheat vô hạn đạn
            } else {
                console.log('Cheat: Đã Tắt Speed Run!');
                // Logic tắt cheat vô hạn đạn
            }
        });

        document.getElementById('deactivateSpeedButton').addEventListener('change', function() {
            if (this.checked) {
                console.log('Cheat: Xóa Speed Đã Bật!');
                // Logic thực hiện cheat tăng tốc độ
            } else {
                console.log('Cheat: Đã Tắt Xóa Speed !');
                // Logic tắt cheat tăng tốc độ
            }
        });

         // Gán chức năng vào các nút
         document.getElementById('searchSpeedButton').addEventListener('click', function() {
            h5gg.clearResults();
            h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x200000000');
            alert('Đã Tìm Speed_(' + h5gg.getResultsCount() + '/1)');
        });

        document.getElementById('activateSpeedButton').addEventListener('click', function() {
            h5gg.editAll('4366458311853786803', 'I64');
            alert('Speed Run');
        });

        document.getElementById('deactivateSpeedButton').addEventListener('click', function() {
            h5gg.editAll('4397530849764387586', 'I64');
            alert('Đã Xóa Speed');
        });
