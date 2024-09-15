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

        document.addEventListener('keydown', function(event) {
            if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I') || (event.ctrlKey && event.shiftKey && event.key === 'J') || (event.ctrlKey && event.key === 'U')) {
                event.preventDefault();
                alert("Tổ hợp phím đã bị vô hiệu hóa.");
            }
        });

        document.addEventListener("contextmenu", function(event) {
            event.preventDefault();
            alert("Chuột phải đã bị vô hiệu hóa.");
        });
