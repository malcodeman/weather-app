// Source: https://source.unsplash.com/

function random() {
    return "https://source.unsplash.com/random";
}

function randomFromUser(username) {
    return "https://source.unsplash.com/user/" + username;
}

function randomFromUsersLikes(username) {
    return "https://source.unsplash.com/user/" + username + "/likes/";
}

function randomFromCollection(collectionId) {
    return "https://source.unsplash.com/collection/" + collectionId;
}

function randomFromSearchTerm(keyword) {
    return "https://source.unsplash.com/random/?" + keyword;
}

module.exports = {
    random: random,
    randomFromUser: randomFromUser,
    randomFromUsersLikes: randomFromUsersLikes,
    randomFromCollection: randomFromCollection,
    randomFromSearchTerm: randomFromSearchTerm
}