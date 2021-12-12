const router = require('express').Router();
const User = require('./UserModel');
const authUser = require('./AuthUser');

router.post('/users', async (req, res) => {
  console.log(req.body)
  try {
    const user = await User.create(req.body);
    await user.generateToken();
    res.json(user)
  } catch (e) {
    console.log(e)
    res.status(500).send()
  }
})

router.post('/login', async (req, res) => {
  const {email, password} = req.body;
  console.log(req.body)
  try {
    const user = await User.findByCredentials(email, password);
    await user.generateToken();
    res.status(200).send(user)
  } catch (e) {
    console.log(e);
    res.status(500).send()
  }
})

router.post('/auto-login', authUser, async (req, res) => {
  res.send(req.user)
})

router.post('/logout', authUser, async (req, res) => {
  const user = req.user;
  user.token = '';
  await user.save();
  res.status(200).send()
})

module.exports = router;