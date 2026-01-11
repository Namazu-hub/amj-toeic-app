let voices = [];
function loadVoices() {
    voices = window.speechSynthesis.getVoices();
}
window.speechSynthesis.onvoiceschanged = loadVoices;

function speak(text) {
    window.speechSynthesis.cancel();
    const uttr = new SpeechSynthesisUtterance(text);
    if (voices.length === 0) loadVoices();

    const englishVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Samantha'))) || 
                         voices.find(v => v.lang.startsWith('en'));

    if (englishVoice) {
        uttr.voice = englishVoice;
        uttr.lang = englishVoice.lang;
    } else {
        uttr.lang = 'en-US';
    }
    uttr.rate = 0.9;
    window.speechSynthesis.speak(uttr);
}