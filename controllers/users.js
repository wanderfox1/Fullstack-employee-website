

const login = async (req, res) => {

    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(401).json({message: 'Заполните обязательные поля'});
    }

    const user = await prisma

    res.send('login')
}

const register = async (req, res) => {
    res.send('register')
}

const current = async (req, res) => {
    res.send('current')
}

module.exports = {
    login,
    register,
    current
}
