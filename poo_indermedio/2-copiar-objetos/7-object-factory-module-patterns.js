
function requiredParam(p){
    throw new Error(p + " es required");
}

function CreateStudent({
    name = requiredParam("name"),
    email = requiredParam("email"),
    twitter,
    instagram
} = { }) {
    const privateVars = {
        "_name": name
    }

    const public = {
        email,
        socialMedia: {
            twitter,
            instagram
        },
        get name() {
            return privateVars["_name"];
        },
        set name(newName) {
            if (newName.length > 0) {
                privateVars["jame"] = newName
            } else {
                console.warn("Tu nombre debe tener al menos un caracter")
            }
        }
        // readName() {
        //     return privateVars["_name"];
        // },
        // changeName(newName) {
        //     privateVars["jame"] = newName
        // }
    }
    return public
}

const juan = CreateStudent({
    name: "juan",
    email: "email"
});

console.log("Done!");