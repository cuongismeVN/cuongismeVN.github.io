// Music By CisMe
// Up Link Nhạc - Đuôi Menu
// Ước Bị Crack

const songList = [
    { title: "Em Nào Có Tội", link: "https://thanhdieu.com/files/Em-N%C3%A0o-C%C3%B3-T%E1%BB%99i.mp3" },
    { title: "lỏ", link: "https://github.com/cuongismeVN/music/blob/main/bacphan.mp3" },
    { title: "Cambodia Remix", link: "https://download1478.mediafire.com/facw5vvps9ngitA-DZU8DopsB_8F6r94l5jZhSrU0sBh4e_vdu3KOYsL8a-XDdMWh-zN9JW7jZkC0Is4g_z7ML73vKP73CDdLaIkNSyJdSMF3Ygzwa1SzBU6YYh1Y2XVboqAO6NmF3SGzdKPAD4Bf2IV5Y9TRFl-zxmnm7XQHyCajw/6u4r8nbjmtunguz/tomp3.cc+-+The+History+Of+Future+Dan+Dan++Cambodia+Remix+++Nhạc+Hot+Tik+Tok+2022_64kbps.mp3" },
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
