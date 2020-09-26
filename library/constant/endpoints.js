// Module to save API endpoints
module.exports = Object.freeze({
    discussion: {
        collection: "/api/discussions/",
        single: "/api/discussions/:id"
    },
    reply: {
        collection: "/api/replies/",
        single: "/api/replies/:id"
    },
    user: {
        collection: "/api/users/",
        single: "/api/users/:id",
    },
    auth: {
        login: "/api/auth/login",
    },
    search: {
        search: "/api/search"
    },
    symptom: {
        collections: "/api/symptoms",
        single: "/api/symptoms/:id",
    },
    surveyResult: {
        collections: "/api/survey-results",
        single: "/api/survey-results/:id",
    }
});