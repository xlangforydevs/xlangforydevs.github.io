'use strict';
function switchToRelevantPage(new_lang, known_lang) {
    new_lang = new_lang.toLowerCase();
    known_lang = known_lang.toLowerCase();
    window.location.href = `./${new_lang}/${known_lang}`;
}
