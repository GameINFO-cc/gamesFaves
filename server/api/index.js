const router = require('express').Router()

const usersRouter = require('./users')
const favoritesRouter = require('./favorites')

router.use('/users', usersRouter)
router.use('/favorites', favoritesRouter)

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
