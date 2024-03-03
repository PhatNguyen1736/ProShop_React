import bccrypt from 'bcryptjs'
const users = [
    {
        name: 'AdminUser',
        email: 'admin@example.com',
        password: bccrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Bebo',
        email: 'bebo@example.com',
        password: bccrypt.hashSync('123456', 10)
    },
    {
        name: 'Kevin',
        email: 'kevin@example.com',
        password: bccrypt.hashSync('123456', 10)
    },
    {
        name: 'Lina',
        email: 'lina@example.com',
        password: bccrypt.hashSync('123456', 10)
    }
]
export default users