function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    
    const dateElement = document.getElementById('date');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = now.toLocaleDateString('ja-JP', options);
}

// 1秒ごとに時計を更新
setInterval(updateClock, 1000);

// ページが読み込まれたときにも一度実行
updateClock();