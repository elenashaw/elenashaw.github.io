function loadHitokoto() {
    const container = document.getElementById('hitokoto-container');
    if (!container) return;

    // --- 1. 在这里维护你的名言库 ---
    const quotes = [
        { text: "你所取得的成就就是你习惯的滞后指标。", author: "詹姆斯·克利尔 ·《原子习惯》" },
        { text: "每一个不曾起舞的日子，都是对生命的辜负。", author: "尼采" },
        { text: "所谓自由，不是随心所欲，而是自我主宰。", author: "康德" }
    ];

    // 随机选择
    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    // --- 2. 在这里维护框的长相 (CSS) ---
    // 我们直接把样式写在 innerHTML 里，这样就只有一个框，且完全由 JS 控制
    container.innerHTML = `
        <div style="
            margin-top: 30px;
            padding: 16px 20px;
            background: rgba(255, 255, 255, 0.08);
            border-left: 4px solid #ff9800;
            border-radius: 0 12px 12px 0;
            max-width: 480px;
            transition: 0.3s;
            backdrop-filter: blur(5px);
        ">
            <div style="
                color: rgba(255, 255, 255, 0.95);
                font-size: 1.05rem;
                line-height: 1.6;
                margin-bottom: 10px;
                letter-spacing: 0.5px;
            ">${quote.text}</div>
            
            <div style="
                color: rgba(255, 255, 255, 0.6);
                font-size: 0.85rem;
                text-align: right;
                font-style: italic;
            ">— ${quote.author}</div>
        </div>
    `;

    // 确保容器可见
    container.style.display = 'block';
}