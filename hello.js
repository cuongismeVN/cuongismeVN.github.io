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

        // Hiệu ứng particles.js
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ff69b4"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": true
                }
            },
            "retina_detect": true
        });

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
