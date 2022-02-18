/*
ADMIN =0
MODERATOR= 1
SUPPORT =2
USER_READ_ONLY =3
*/
var level;
(function (level) {
    level[level["ADMIN"] = 0] = "ADMIN";
    level[level["MODERATOR"] = 2] = "MODERATOR";
    level[level["SUPPORT"] = 6] = "SUPPORT";
    level[level["USER_READ_ONLY"] = 7] = "USER_READ_ONLY";
})(level || (level = {}));
var users = {
    pseudo: "batman",
    level: 6,
    work: "SUPPORT"
};
if (users.level === level.SUPPORT) {
    console.log("Bienvenue ".concat(users.pseudo, "\n     vous travaillez au service \n     ").concat(users.work, "\n     "));
}
