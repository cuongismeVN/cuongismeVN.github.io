document.addEventListener('DOMContentLoaded', function() {
    // Tạo phần tử âm thanh và thiết lập các thuộc tính
    const audioElement = document.createElement('audio');
    audioElement.id = 'backgroundMusic';
    audioElement.src = 'https://thanhdieu.com/files/Em-N%C3%A0o-C%C3%B3-T%E1%BB%99i.mp3'; // Đường dẫn mới đến file nhạc
    audioElement.loop = true; // Phát nhạc liên tục
    audioElement.volume = 0.5; // Đặt âm lượng từ 0.0 đến 1.0

    // Thêm phần tử âm thanh vào tài liệu
    document.body.appendChild(audioElement);

    // Thêm sự kiện người dùng để phát âm thanh
    const playAudio = () => {
        audioElement.play().catch(error => {
            console.error('Lỗi phát âm thanh:', error);
        });
    };

    // Thực hiện phát âm thanh khi người dùng nhấp vào bất kỳ đâu trên trang
    document.body.addEventListener('click', playAudio);


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


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('keydown', function(event) {
    // Chặn F12
    if (event.key === 'F12') {
      event.preventDefault();
      alert("F12 đã bị vô hiệu hóa.");
    }
    // Chặn Ctrl+Shift+I (Mở Developer Tools)
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
      event.preventDefault();
      alert("Tổ hợp Ctrl+Shift+I đã bị vô hiệu hóa.");
    }
    // Chặn Ctrl+Shift+J (Console)
    if (event.ctrlKey && event.shiftKey && event.key === 'J') {
      event.preventDefault();
      alert("Tổ hợp Ctrl+Shift+J đã bị vô hiệu hóa.");
    }
    // Chặn Ctrl+U (Xem mã nguồn)
    if (event.ctrlKey && event.key === 'U') {
      event.preventDefault();
      alert("Tổ hợp Ctrl+U đã bị vô hiệu hóa.");
    }
  });


document.addEventListener("contextmenu", function (event) {
     event.preventDefault();  // Ngăn menu chuột phải
     alert("Chuột phải đã bị vô hiệu hóa.");
   });



document.addEventListener("keydown", function (event) {
    // Chặn Ctrl+Shift+I (Chrome, Firefox) và Ctrl+Shift+J
    if ((event.ctrlKey && event.shiftKey && event.key === "I") ||
        (event.ctrlKey && event.shiftKey && event.key === "J") ||
        (event.ctrlKey && event.key === "U")) {  // Chặn Ctrl+U (Xem mã nguồn)
      event.preventDefault();
      alert("Tổ hợp phím đã bị vô hiệu hóa.");
    }
  });

  var _0x7eff = ["c", "C", "x", "u", "I", "preventDefault", "cái địt con mẹ màyyy", "contextmenu", "addEventListener", "keydown", "ctrlKey", "key", "includes", "F12"];
  const disabledKeys = [_0x7eff[0], _0x7eff[1], _0x7eff[2], _0x7eff[3], _0x7eff[4]];
  const showAlert = (_0xc0c8x3) => {
    _0xc0c8x3[_0x7eff[5]]();
    return alert(_0x7eff[6]);
  };
  document[_0x7eff[8]](_0x7eff[7], (_0xc0c8x3) => {
    showAlert(_0xc0c8x3)
  });
  document[_0x7eff[8]](_0x7eff[9], (_0xc0c8x3) => {
    if (_0xc0c8x3[_0x7eff[10]] && disabledKeys[_0x7eff[12]](_0xc0c8x3[_0x7eff[11]]) || _0xc0c8x3[_0x7eff[11]] === _0x7eff[13]) {
      showAlert(_0xc0c8x3)
    }
  });

