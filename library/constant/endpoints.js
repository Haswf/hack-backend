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
        reset: "/api/users/reset-password"
    },
    auth: {
        login: "/api/auth/login",
        logout: "/api/auth/logout",
        recover: "/api/auth/recover",
        oneTimeToken: "/api/auth/one-time-token"
    }
});