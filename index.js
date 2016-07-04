var i18next = require('i18next'),
    i18next_xhr = require('i18next-xhr-backend');

var i18next_detector = {
    init: function () {
    },
    detect: function () {
        return viewer.getAttribute('settings/language');
    },
    cacheUserLanguage: function () {
    },
    type: 'languageDetector'
};

var i18next_opts = {
    backend: {
        loadPath: 'assets/locales/{{ns}}.{{lng}}.json'
    },
    fallbackLng: 'en'
};

module.exports = function (callback) {
    i18next
        .use(i18next_xhr)
        .use(i18next_detector)
        .init(i18next_opts, callback);
};
