function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luis', 'Admin');
usuarios.set('Ana', 'Admin');
usuarios.set('Sara', 'User');
usuarios.set('joao', 'Admin');

console.log(getAdmins(usuarios));