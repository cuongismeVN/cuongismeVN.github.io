let userChoice = '';
let isRolling = false;
let balance = 0; // Số dư xu hiện tại
let maxDeposit = 10; // Giới hạn số lần nạp xu mặc định

// Kiểm tra và cập nhật số lần nạp xu
function getDepositCount() {
    return parseInt(localStorage.getItem('depositCount') || '0');
}

function setDepositCount(count) {
    localStorage.setItem('depositCount', count);
}

// Nạp xu vào tài khoản
function deposit() {
    let depositCount = getDepositCount();
    
    if (depositCount >= maxDeposit) {
        alert("Bạn đã đạt giới hạn nạp xu " + maxDeposit + " lần!");
        return;
    }

    balance += 100; // Nạp 100 xu mỗi lần
    depositCount++;
    setDepositCount(depositCount); // Cập nhật số lần nạp xu vào localStorage

    document.getElementById('balance').textContent = `Số dư hiện tại: ${balance}`;
}

// Sử dụng mã code để mở rộng giới hạn nạp xu
function usePromoCode() {
    const code = document.getElementById('promoCode').value.trim();
    const validCode = "VIP10"; // Mã code hợp lệ để mở rộng 10 lần nạp xu

    if (code === validCode) {
        maxDeposit += 10; // Mở rộng số lần nạp xu lên 10 lần
        alert("Mã code hợp lệ! Bạn đã mở rộng thêm 10 lần nạp xu.");
    } else {
        alert("Mã code không hợp lệ.");
    }
}

// Chọn Chẵn/Lẻ
function selectChoice(choice) {
    if (isRolling) return; // Nếu xúc sắc đang quay, không cho phép người chơi chọn lại.
    if (balance < 100) {
        alert("Bạn không có đủ xu để chơi. Hãy nạp xu.");
        return;
    }

    userChoice = choice;

    // Giảm số xu theo số cược
    balance -= 100;
    document.getElementById('balance').textContent = `Số xu hiện tại: ${balance}`;

    document.getElementById('warning').textContent = ''; // Xóa cảnh báo
    document.getElementById('result').textContent = '';  // Xóa kết quả cũ
    document.getElementById("dice").textContent = "🎲";  // Đặt lại biểu tượng xúc sắc

    isRolling = true;
    // Sau khi người dùng chọn Chẵn/Lẻ, bắt đầu quay xúc sắc
    startRolling();
}

// Quay xúc sắc
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Bắt đầu quay xúc sắc trong 10 giây
function startRolling() {
    let countdown = 10;
    const diceElement = document.getElementById("dice");
    const interval = setInterval(() => {
        diceElement.textContent = `🎲 đang quay... (${countdown}s)`;
        countdown--;
        if (countdown < 0) {
            clearInterval(interval);
            // Sau khi 10 giây, quay xúc sắc và hiển thị kết quả
            showResult();
        }
    }, 1000);
}

// Hiển thị kết quả sau khi quay
function showResult() {
    const diceValue = rollDice();
    document.getElementById("dice").textContent = `🎲 ${diceValue}`;

    // Tạo ra một xác suất 1% để người chơi thắng
    const isWin = Math.random() < 0.01; // Tỷ lệ thắng 1%

    let resultText = '';
    let resultClass = '';
    let warningText = '';

    if (isWin) {
        // Nếu người chơi thắng
        if ((diceValue % 2 === 0 && userChoice === 'even') || (diceValue % 2 !== 0 && userChoice === 'odd')) {
            resultText = `Bạn thắng! Xúc sắc là ${diceValue}. Bạn nhận được 90 xu!`;
            resultClass = 'even';
            balance += 90; // Người chơi nhận thưởng 90 xu
        } else {
            resultText = `Bạn thua! Xúc sắc là ${diceValue}.`;
            resultClass = 'odd';
        }
    } else {
        // Nếu người chơi thua
        if ((diceValue % 2 === 0 && userChoice === 'even') || (diceValue % 2 !== 0 && userChoice === 'odd')) {
            resultText = `Bạn thua! Xúc sắc là ${diceValue}.`;
            resultClass = 'odd';
        } else {
            resultText = `Bạn thắng! Xúc sắc là ${diceValue}. Bạn nhận được 90 xu!`;
            resultClass = 'even';
            balance += 90; // Người chơi nhận thưởng 90 xu
        }

        warningText = 'Lưu ý: Tỉ lệ thắng của bạn là 1%.';
    }

    // Hiển thị kết quả
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = resultText;
    resultDiv.className = 'result ' + resultClass;

    // Hiển thị cảnh báo về tỷ lệ thắng
    const warningDiv = document.getElementById("warning");
    warningDiv.textContent = warningText;

    // Cập nhật lại số xu
    document.getElementById('balance').textContent = `Số xu hiện tại: ${balance}`;

    // Đặt lại trạng thái sau khi kết thúc
    isRolling = false;
}

// Reset trò chơi
function resetGame() {
    if (isRolling) return; // Nếu xúc sắc đang quay, không cho phép reset.

    userChoice = '';
    document.getElementById("dice").textContent = "🎲"; // Đặt lại biểu tượng xúc sắc
    document.getElementById('result').textContent = '';  // Xóa kết quả
    document.getElementById('warning').textContent = '';  // Xóa cảnh báo
}

function playMusic() {
    const audio = document.getElementById("background-music");
    const musicButton = document.getElementById("musicButton");

    // Bắt đầu phát nhạc nếu chưa phát
    if (audio.paused) {
        audio.play(); // Phát nhạc
        musicButton.style.display = "none"; // Ẩn nút phát nhạc
    }
}