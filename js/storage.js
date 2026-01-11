const STORAGE_KEY = 'amj_toeic_modular_v9';
let stats = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

function initStats() {
    rawData.forEach(w => {
        if(!stats[w.en]) stats[w.en] = {c: 0, t: 0};
    });
}

function saveStats(word, isCorrect) {
    if(!stats[word]) stats[word] = {c: 0, t: 0};
    stats[word].t++;
    if(isCorrect) stats[word].c++;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}

function exportData() {
    const data = localStorage.getItem(STORAGE_KEY);
    navigator.clipboard.writeText(data).then(() => alert("コピーしました"));
}

function importData() {
    const data = prompt("データを貼り付け");
    if(data) { localStorage.setItem(STORAGE_KEY, data); location.reload(); }
}

initStats();