const defaultUser = {
    name: ' ',
    email: ' ',
    level: 1
}

const user1 = {
    ...defaultUser, // para herdar as coisas de defaultUser
    name: 'Breno',
    email: 'brenokaua09@gmail.com'
}

const adm1 = {
    ...defaultUser,
    name: 'Adm Bolado',
    email: 'bobesponja123@gmail.com',
    level: 2
}

console.log(adm1)