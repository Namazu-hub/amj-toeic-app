

let filteredStudyWords = [];
let studyIdx = 0;
let testWords = [];
let testIdx = 0;
let tScore = 0;
let gList = [];
let gIdx = 0;
let gScore = 0;

// --- 暗記カード ---
function resetStudy() {
    const g = document.getElementById('study-genre').value;
    filteredStudyWords = (g === "全ジャンル") ? [...rawData].sort(() => Math.random() - 0.5) : rawData.filter(w => w.cat === g);
    studyIdx = 0; updateStudy();
}
function updateStudy() {
    if(filteredStudyWords.length === 0) return;
    const w = filteredStudyWords[studyIdx];
    document.getElementById('study-en').innerText = w.en;
    document.getElementById('study-jp').innerText = w.jp;
    document.getElementById('study-tag').innerText = w.cat;
    document.getElementById('study-jp').classList.add('hidden');
    document.getElementById('study-count').innerText = `${studyIdx+1}/${filteredStudyWords.length}`;
    speak(w.en);
}
function toggleFlip() { document.getElementById('study-jp').classList.toggle('hidden'); }
function nextCard() { studyIdx = (studyIdx + 1) % filteredStudyWords.length; updateStudy(); }
function prevCard() { studyIdx = (studyIdx - 1 + filteredStudyWords.length) % filteredStudyWords.length; updateStudy(); }

// --- 単語テスト ---
function startTest() {
    tScore = 0; testIdx = 0;
    const g = document.getElementById('test-genre').value; // ジャンル取得
    const pool = (g === "全ジャンル") ? [...rawData] : rawData.filter(w => w.cat === g);
    
    if(pool.length < 4) { alert("このジャンルの単語が足りません（最低4語必要）"); return; }

    testWords = pool.sort((a,b) => (stats[a.en].c - stats[b.en].c) || (Math.random()-0.5)).slice(0, 10);
    document.getElementById('test-start-screen').classList.add('hidden');
    document.getElementById('quiz-area').classList.remove('hidden');
    renderQuiz();
}

function renderQuiz() {
    const progress = (testIdx / testWords.length) * 100;
    document.getElementById('test-progress-bar').style.width = `${progress}%`;

    if(testIdx >= testWords.length) {
        document.getElementById('quiz-area').classList.add('hidden');
        document.getElementById('test-result').classList.remove('hidden');
        document.getElementById('result-score').innerText = `正解: ${tScore}/${testWords.length}`;
        return;
    }
    const q = testWords[testIdx];
    document.getElementById('quiz-en').innerText = q.en;
    document.getElementById('quiz-tag').innerText = q.cat;
    speak(q.en);
    let opts = [q.jp];
    while(opts.length < 4) {
        let r = rawData[Math.floor(Math.random()*rawData.length)].jp;
        if(!opts.includes(r)) opts.push(r);
    }
    opts.sort(() => Math.random()-0.5);
    const container = document.getElementById('options'); container.innerHTML = '';
    opts.forEach(o => {
        const d = document.createElement('div'); d.className = 'option'; d.innerText = o;
        d.onclick = () => {
            if(document.querySelector('.option.correct')) return;
            if(o === q.jp) { d.classList.add('correct'); tScore++; saveStats(q.en, true); }
            else { d.classList.add('wrong'); saveStats(q.en, false);
                Array.from(container.children).forEach(c => { if(c.innerText === q.jp) c.classList.add('correct'); });
            }
            setTimeout(() => { testIdx++; renderQuiz(); }, 1200);
        };
        container.appendChild(d);
    });
}

// --- 文法テスト ---
function startGrammarTest() {
    gScore = 0; gIdx = 0;
    const g = document.getElementById('grammar-genre').value; // 文法ジャンル取得
    const pool = (g === "全ジャンル") ? [...grammarData] : grammarData.filter(item => item.cat === g);
    
    if(pool.length === 0) { alert("このジャンルの問題がありません"); return; }

    gList = pool.sort(() => Math.random() - 0.5).slice(0, 5);
    document.getElementById('grammar-start-screen').classList.add('hidden');
    document.getElementById('grammar-quiz-area').classList.remove('hidden');
    renderGQuiz();
}

function renderGQuiz() {
    if(gIdx >= gList.length) {
        document.getElementById('grammar-quiz-area').classList.add('hidden');
        document.getElementById('grammar-result').classList.remove('hidden');
        document.getElementById('grammar-result-score').innerText = `スコア: ${gScore}/${gList.length}`;
        return;
    }
    const item = gList[gIdx];
    document.getElementById('grammar-sentence').innerText = item.q;
    document.getElementById('grammar-tag').innerText = item.cat;
    document.getElementById('grammar-translation').classList.add('hidden');
    const container = document.getElementById('grammar-options'); container.innerHTML = '';
    item.options.forEach(opt => {
        const b = document.createElement('div'); b.className = 'option'; b.innerText = opt;
        b.onclick = () => {
            if(document.querySelector('#grammar-options .option.correct')) return;
            if(opt === item.ans) { b.classList.add('correct'); gScore++; }
            else { b.classList.add('wrong'); 
                Array.from(container.children).forEach(c => { if(c.innerText === item.ans) c.classList.add('correct'); });
            }
            document.getElementById('grammar-translation').innerText = "訳: " + item.trans;
            document.getElementById('grammar-translation').classList.remove('hidden');
            setTimeout(() => { gIdx++; renderGQuiz(); }, 2500);
        };
        container.appendChild(b);
    });
}

// --- 進捗一覧 ---
function renderList() {
    const b = document.getElementById('list-body');
    const genre = document.getElementById('list-genre').value;
    b.innerHTML = '';
    const filtered = (genre === "全ジャンル") ? rawData : rawData.filter(w => w.cat === genre);

    filtered.sort((a,b) => stats[a.en].c - stats[b.en].c).forEach(w => {
        const s = stats[w.en];
        const acc = s.t === 0 ? 0 : (s.c / s.t * 100);
        const mastery = Math.min(s.c * 10, 100);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><b>${w.en}</b><br><small style="color:#999">${w.cat}</small></td>
            <td>${w.jp}</td>
            <td>
                <span class="stat-text">正解率: ${acc.toFixed(1)}%</span>
                <div class="bar-container"><div class="accuracy-fill" style="width:${acc}%"></div></div>
                <span class="stat-text">習得度: ${mastery}pt (正解 ${s.c}回)</span>
                <div class="bar-container"><div class="mastery-fill" style="width:${mastery}%"></div></div>
            </td>`;
        b.appendChild(tr);
    });
}

function handleSpeak(e, mode) {
    e.stopPropagation();
    let word = "";
    if(mode === 'study') word = filteredStudyWords[studyIdx].en;
    else if(mode === 'test') word = testWords[testIdx].en;
    speak(word);
}

loadVoices();
resetStudy();