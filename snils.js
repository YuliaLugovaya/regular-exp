// Изучи тесты `spec/snils.spec.js`
// Чтобы понимать как должны работать твои методы.


// Определи, есть ли во входной строке номер СНИЛС.
function hasSNILS(string) {
    let regular = /\d{3}-\d{3}-\d{3} \d{2}/;
    if (regular.test(string)) {
        return true;
    } else {
        return false;
    }
}


// Найди и верни номер СНИЛС из строки.
function grabSNILS(string) {
    let regular = /\d{3}-\d{3}-\d{3} \d{2}/;
    let number = string.match(regular);
    return number[0];
}


// Найди и верни все номера СНИЛС, что есть в строке.
function grabAllSNILS(string) {
    let regular = /\d{3}-\d{3}-\d{3} \d{2}/g;
    let number = string.match(regular);
    return number;
}

//console.log(grabAllSNILS("The numbers are 350-802-074 94, 234-600-142 22, and 013-605-876 94"))

// Зашифруй номера СНИЛС. Example: XXX-XXX-XXX 30.
function hideAllSNILS(string) {
    let regular = /\d{3}-\d{3}-\d{3}/g;
    let code = 'XXX-XXX-XXX';
    let hide = string.replace(regular, code);
    return hide;
}



// Отформатируй все номера СНИЛС, чтобы использовались правильные разделители:
// '48001443027', '480.014.430.27', и '480--014--430 27' должны превратиться в '480-014-430 27'.
function formatSNILS(string) {
    let regular = /(?<one>\d{3}).*?(?<two>\d{3}).*?(?<three>\d{3}).*?(?<four>\d{2})/g;
    let names = '$<one>-$<two>-$<three> $<four>';
    let format = string.replace(regular, names);
    return format;
}

module.exports = {
    hasSNILS,
    grabSNILS,
    grabAllSNILS,
    hideAllSNILS,
    formatSNILS
};
