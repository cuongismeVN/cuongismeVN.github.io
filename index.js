 // === KHỞI TẠO keys + deviceId ===
 let keys = JSON.parse(localStorage.getItem("keys")) || {
    "ongtrum123": device123,
    "ongtrum456": null,
    "ongtrum789": null
  };

  let deviceId = localStorage.getItem("deviceId");
  if (!deviceId) {
    deviceId = "device-" + Math.random().toString(36).substr(2, 9);
    localStorage.setItem("deviceId", deviceId);
  }

  function checkKey() {
    const inputKey = document.getElementById("keyInput").value.trim();

    if (!keys.hasOwnProperty(inputKey)) {
      document.getElementById("errorMsg").style.display = "block";
      showNotification("❌ Key không tồn tại!");
      return;
    }

    const assignedDevice = keys[inputKey];

    if (assignedDevice === null) {
      keys[inputKey] = deviceId;
      localStorage.setItem("keys", JSON.stringify(keys));
      document.getElementById("overlay").style.display = "none";
      document.body.style.overflow = "auto";
      showNotification("✅ Đăng nhập thành công (lần đầu)!");
    } else if (assignedDevice === deviceId) {
      document.getElementById("overlay").style.display = "none";
      document.body.style.overflow = "auto";
      showNotification("✅ Đăng nhập thành công!");
    } else {
      document.getElementById("errorMsg").style.display = "block";
      showNotification("❌ Key này đã được sử dụng trên thiết bị khác!");
    }
  }

  function showNotification(message) {
    const notificationEl = document.getElementById("notification");
    notificationEl.textContent = message;
    notificationEl.classList.add("show");
    setTimeout(() => {
      notificationEl.classList.remove("show");
    }, 3000);
  }

  document.addEventListener('contextmenu', e => e.preventDefault());
  document.onkeydown = function(e) {
    const blockedKeys = [
      e.keyCode === 123,
      e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74),
      e.ctrlKey && e.keyCode === 85
    ];
    if (blockedKeys.some(Boolean)) return false;
  };

  const MAX_HISTORY = 15;
  let lastPrediction = "";
  let history = JSON.parse(localStorage.getItem("history")) || [];

  const md5InputEl = document.getElementById("md5Input");
  const historyInputEl = document.getElementById("historyInput");
  const resultEl = document.getElementById("result");
  const confirmBtnsEl = document.getElementById("confirmBtns");
  const historyBoxEl = document.getElementById("historyBox");

  function md5ToDice(md5) {
    const matches = md5.match(/[0-9a-f]{2}/g);
    if (!matches || matches.length < 3) return null;
    return matches.slice(0, 3).map(hex => (parseInt(hex, 16) % 6) + 1);
  }

  function predict() {
    const md5 = md5InputEl.value.trim().toLowerCase();
    if (!/^[0-9a-f]{32}$/.test(md5)) {
      alert("Vui lòng nhập mã MD5 hợp lệ (32 ký tự hex)!");
      showNotification("⚠️ MD5 không hợp lệ!");
      return;
    }
    const dice = md5ToDice(md5);
    if (!dice) {
      alert("Không thể phân tích MD5! Vui lòng kiểm tra lại.");
      showNotification("⚠️ Không thể phân tích MD5!");
      return;
    }
    const total = dice.reduce((sum, val) => sum + val, 0);
    lastPrediction = total >= 11 ? "T" : "X";
    resultEl.textContent = `KẾT QUẢ DỰ ĐOÁN: ${lastPrediction}`;
    confirmBtnsEl.style.display = "block";
    showNotification(`📢 Đã dự đoán: ${lastPrediction}`);
  }

  function confirmResult(isCorrect) {
    if (!lastPrediction) {
      alert("Chưa có dự đoán nào!");
      showNotification("⚠️ Chưa có dự đoán!");
      return;
    }
    const actualResult = isCorrect ? lastPrediction : (lastPrediction === "T" ? "X" : "T");
    history.push(actualResult);
    if (history.length > MAX_HISTORY) history.shift();
    localStorage.setItem("history", JSON.stringify(history));
    updateHistoryDisplay();
    confirmBtnsEl.style.display = "none";
    showNotification("✅ Đã lưu kết quả!");
  }

  function resetMd5() {
    md5InputEl.value = "";
    resultEl.textContent = "KẾT QUẢ: --";
    confirmBtnsEl.style.display = "none";
    lastPrediction = "";
    showNotification("🔄 Đã reset MD5!");
  }

  function updateHistoryDisplay() {
    historyBoxEl.textContent = history.length ? history.join("") : "--";
  }

  historyInputEl.addEventListener("input", e => {
    const input = e.target.value.toUpperCase().replace(/[^TX]/g, '');
    history = input.slice(-MAX_HISTORY).split('');
    localStorage.setItem("history", JSON.stringify(history));
    updateHistoryDisplay();
  });

  updateHistoryDisplay();