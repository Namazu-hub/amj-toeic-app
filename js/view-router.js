function showView(v) {
    document.querySelectorAll('.view').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('nav button').forEach(el => el.classList.remove('active'));
    
    document.getElementById(v).classList.add('active');
    document.getElementById('nav-'+v).classList.add('active');
    
    if(v === 'study') resetStudy();
    if(v === 'test') {
        document.getElementById('test-start-screen').classList.remove('hidden');
        document.getElementById('quiz-area').classList.add('hidden');
        document.getElementById('test-result').classList.add('hidden');
    }
    if(v === 'grammar') {
        document.getElementById('grammar-start-screen').classList.remove('hidden');
        document.getElementById('grammar-quiz-area').classList.add('hidden');
        document.getElementById('grammar-result').classList.add('hidden');
        document.getElementById('grammar-translation').classList.add('hidden');
    }
    if(v === 'list') renderList();
}