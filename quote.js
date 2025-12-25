 
// Elena 的私人思想库数据
window.myQuotes = [
    { text: "控制你的认知，约束你的冲动，让你的欲望仅限于你能力范围内的事。", from: "马可·奥勒留", source: "沉思录" },
    { text: "困扰人们的并非事物本身，而是他们对事物的看法。", from: "埃比克泰德", source: "手册" },
    { text: "每一个不曾舞动的日子，都是对生命的辜负。", from: "尼采", source: "查拉图斯特拉如是说" },
    { text: "自律即自由。", from: "康德", source: "实践理性批判" },
    { text: "每个人都想要改变世界，却没人想到要改变自己。", from: "托尔斯泰", source: "随笔" },
    { text: "你所取得的成就是你习惯的滞后指标。", from: "詹姆斯·克利尔", source: "原子习惯" },
    { text: "所谓天才，本质上是长时间练习的产物。", from: "安德斯·艾利克森", source: "刻意练习" },
    { text: "在任何高度，只要你愿意，你都可以为自己创造一片宁静。", from: "马可·奥勒留", source: "沉思录" },
    { text: "A mistake repeated more than once is a decision.", from:"Paulo Coelho"},
];

// 渲染语录的逻辑
function loadHitokoto() {
    const container = document.getElementById('hitokoto-container');
    if (!container || !window.myQuotes) return;

    // 随机选择一句
    const data = window.myQuotes[Math.floor(Math.random() * window.myQuotes.length)];
    
    container.innerHTML = ''; 
    const quoteBox = document.createElement('div');
    
    // 适配 Hero 深色背景的样式
    quoteBox.style.cssText = `
        margin-top: 25px;
        padding: 15px;
        background: rgba(255, 255, 255, 0.08);
        border-left: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 0 12px 12px 0;
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.9rem;
        line-height: 1.6;
        cursor: pointer;
        transition: 0.3s;
        max-width: 450px;
    `;

    quoteBox.innerHTML = `
        <div style="letter-spacing: 0.3px;">${data.text}</div>
        <div style="font-size: 0.75rem; opacity: 0.6; margin-top: 8px; text-align: right; font-weight: 300;">
            — ${data.from} · 《${data.source}》
        </div>
    `;

    // 交互效果
    quoteBox.onmouseover = () => { quoteBox.style.background = "rgba(255, 255, 255, 0.15)"; };
    quoteBox.onmouseout = () => { quoteBox.style.background = "rgba(255, 255, 255, 0.08)"; };
    quoteBox.onclick = loadHitokoto;

    container.appendChild(quoteBox);
}