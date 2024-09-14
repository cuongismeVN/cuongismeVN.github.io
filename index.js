// Music By CisMe
// Up Link Nhạc - Đuôi Menu
// Ước Bị Crack


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const songList = [
    { title: "Nhạc Nóng Lạnh ", link: "https://cuongismevn.github.io/music/nhacsex.mp3" },
    { title: "Hành Lang Cũ", link: "https://cuongismevn.github.io/music/hanhlangcu.mp3" },
    { title: "Nhạc Tết Ver 2", link: "https://cuongismevn.github.io/music/nhactet2.mp3" },
    { title: "Sơn Tùng Lofi ", link: "https://cuongismevn.github.io/music/sontungchill.mp3" },
    { title: "Nhạc Đi Tắm", link: "https://cuongismevn.github.io/music/nhacditam.mp3" },
    { title: "Nhạc Cách Mạng", link: "https://cuongismevn.github.io/music/nhaccachmang.mp3" },
    { title: "Em Nào Có Tội", link: "https://thanhdieu.com/files/Em-N%C3%A0o-C%C3%B3-T%E1%BB%99i.mp3" },
    { title: "Bạc Phận ( dách 5 triệu )", link: "https://cuongismevn.github.io/music/bacphan.mp3" },
    { title: "Nhạc Tết Ver 1", link: "https://cuongismevn.github.io/music/nhactet.mp3" },
    { title: "Future Remix", link: "https://cuongismevn.github.io/music/future.mp3" },
];

document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('searchBar');
    const songListElement = document.getElementById('songList');
    const audioPlayer = document.getElementById('audioPlayer');
    const audioSource = document.getElementById('audioSource');
    
    // Hiển thị danh sách bài hát
    function renderSongList(songs) {
        songListElement.innerHTML = ''; // Xóa danh sách hiện tại
        songs.forEach(function(song) {
            const li = document.createElement('li');
            li.textContent = song.title;
            li.setAttribute('data-link', song.link);
            
            // Xử lý sự kiện khi click vào bài hát
            li.addEventListener('click', function() {
                const songLink = li.getAttribute('data-link');
                audioSource.src = songLink; // Cập nhật link nhạc
                audioPlayer.load();  // Nạp lại audio với link mới
                audioPlayer.play();  // Phát nhạc
            });
            
            songListElement.appendChild(li);
        });
    }

    renderSongList(songList); // Hiển thị danh sách bài hát khi tải trang

    // Tìm kiếm bài hát
    searchBar.addEventListener('keyup', function() {
        const searchValue = this.value.toLowerCase();
        const filteredSongs = songList.filter(song => song.title.toLowerCase().includes(searchValue));
        renderSongList(filteredSongs);
    });
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
