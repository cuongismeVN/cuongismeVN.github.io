        // Danh sách các đường dẫn đến bài hát
        const songs = [
            'https://thanhdieu.com/files/Em-N%C3%A0o-C%C3%B3-T%E1%BB%99i.mp3',
            'https://cuongismevn.github.io/music/sontungchill.mp3',
            'https://cuongismevn.github.io/music/nhacsex.mp3',
            'https://cuongismevn.github.io/music/hanhlangcu.mp3',
            'https://cuongismevn.github.io/music/nhacditam.mp3',
            'https://cuongismevn.github.io/music/nhactet2.mp3',
            'https://cuongismevn.github.io/music/nhaccachmang.mp3',
            'https://cuongismevn.github.io/music/bacphan.mp3',
            'https://cuongismevn.github.io/music/nhactet.mp3',
            'https://cuongismevn.github.io/music/future.mp3'
        ];

        document.getElementById('loginButton').addEventListener('click', function() {
            var password = document.getElementById('passwordInput').value;
            var cheatMenu = document.getElementById('cheatMenu');
            var correctPassword = '1'; // Thay đổi thành mật khẩu của bạn

            if (password === correctPassword) {
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
            } else {
                console.log('Cheat: Tìm Speed Đã Tắt !');
            }
        });

        document.getElementById('activateSpeedButton').addEventListener('change', function() {
            if (this.checked) {
                console.log('Cheat: Speed Run Đã Bật!');
            } else {
                console.log('Cheat: Đã Tắt Speed Run!');
            }
        });

        document.getElementById('deactivateSpeedButton').addEventListener('change', function() {
            if (this.checked) {
                console.log('Cheat: Xóa Speed Đã Bật!');
            } else {
                console.log('Cheat: Đã Tắt Xóa Speed !');
            }
        });

        // Phát nhạc ngẫu nhiên
        let isPlaying = false;
        let currentSongIndex = -1;

        function playRandomSong() {
            if (!isPlaying) {
                isPlaying = true;
                const audio = document.getElementById('backgroundMusic');
                currentSongIndex = Math.floor(Math.random() * songs.length);
                audio.src = songs[currentSongIndex];
                audio.play();
            } else {
                document.getElementById('backgroundMusic').pause();
                isPlaying = false;
            }
        }

        document.getElementById('playMusicButton').addEventListener('change', function() {
            playRandomSong();
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
