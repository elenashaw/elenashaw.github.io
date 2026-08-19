function loadHitokoto() {
    const container = document.getElementById('hitokoto-container');
    if (!container) return;

    // --- 在这里维护你的名言库 ---
    const quotes = [
        { text: "你所取得的成就就是你习惯的滞后指标。", author: "詹姆斯·克利尔 ·《原子习惯》" },
        { text: "每一个不曾起舞的日子，都是对生命的辜负。", author: "尼采" },
        { text: "所谓自由，不是随心所欲，而是自我主宰。", author: "康德" }
    ];

    // 随机选择
    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    container.innerHTML = `
        <div style="
            margin-top: 28px;
            padding: 12px 18px;
            border-left: 3px solid #d0d7de;
            max-width: 480px;
        ">
            <div style="
                color: #59636e;
                font-size: 1rem;
                line-height: 1.6;
            ">${quote.text}</div>
            <div style="
                color: #59636e;
                font-size: 0.82rem;
                text-align: right;
                margin-top: 6px;
            ">— ${quote.author}</div>
        </div>
    `;

    // 确保容器可见
    container.style.display = 'block';
}
