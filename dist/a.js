"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
function greet(user) {
    console.log("Hii", user.firstname);
}
isLegal({
    firstname: "tilak",
    lastname: "gubhajue",
    age: 13,
    email: "tilakg23@gmail.com"
});
greet({
    firstname: "tilak",
    lastname: "gubhajue",
    age: 13,
});
//# sourceMappingURL=a.js.map