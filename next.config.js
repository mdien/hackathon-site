const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
    en: 'en',
    id: 'id',
}

module.exports = {
    rewrites : async () => nextI18NextRewrites(localeSubpaths)
}