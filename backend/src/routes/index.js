const {Router} = require('express');
const router = Router();

const User = require('../models/User')

const jwt = require('jsonwebtoken');

router.get('/', (req, res) => res.send('Hola SoMoRaLance'));

router.post('/signup', async (req, res) => {
    const {nombre, fecha, email, password} = req.body;
    // console.log(email, password);
    const newUser = new User({nombre, fecha, email, password});
    // console.log(newUser);
    await newUser.save();
    const token = await jwt.sign({_id: newUser._id}, 'secretkey');
    res.status(200).json({token});
    // console.log(req.body);
    // res.send('Testing Signup');
})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({email});
    if (!user) return res.status(401).send('El correo no\' exists');
    if (user.password !== password) return res.status(401).send('Contraseñá Erronea');

		const token = jwt.sign({_id: user._id}, 'secretkey');

    return res.status(200).json({token});
});

router.get('/tareas', (req, res) => {
    res.json([
        {
            _id: '1',
            name: "task one",
            description: 'asdadasd',
            date: "2019-11-06T15:50:18.921Z"
        },
        {
            _id: '2',
            name: "task two",
            description: 'asdadasd',
            date: "2019-11-06T15:50:18.921Z"
        },
        {
            _id: '3',
            name: "task three",
            description: 'asdadasd',
            date: "2019-11-06T15:50:18.921Z"
        },
    ])
});

router.get('/tareas-privadas', verifyToken, (req, res) => {
    res.json([
        {
            _id: '1',
            name: "task one",
            description: 'asdadasd',
            date: "2019-11-06T15:50:18.921Z"
        },
        {
            _id: '2',
            name: "task two",
            description: 'asdadasd',
            date: "2019-11-06T15:50:18.921Z"
        },
        {
            _id: '3',
            name: "task three",
            description: 'asdadasd',
            date: "2019-11-06T15:50:18.921Z"
        },
    ])
});

async function verifyToken(req, res, next) {
	try {
		if (!req.headers.authorization) {
			return res.status(401).send('Solicitud no autorizada');
		}
		let token = req.headers.authorization.split(' ')[1];
		if (token === 'null') {
			return res.status(401).send('Solicitud no autorizada');
		}

		const payload = await jwt.verify(token, 'secretkey');
		if (!payload) {
			return res.status(401).send('Solicitud no autorizada');
		}
		req.userId = payload._id;
		next();
	} catch(e) {
		//console.log(e)
		return res.status(401).send('Solicitud no autorizada');
	}
}

router.get('/profile', verifyToken, (req, res) => {
    res.send(req.userId);
})




module.exports = router;