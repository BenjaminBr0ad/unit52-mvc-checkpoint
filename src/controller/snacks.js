const model = require('../model/snacks')

function getAll (req, res, next) {
  const snacks = model.getAll()
  res.status(200).json({ snacks })
}

function getOne (req, res, next) {
  const snack = model.getOne(req.params.id)

  if (snack.errors) {
    return next({ status: 404, message: `Could not find snack with id: ${req.params.id}`, error: snack.errors })
  }
  res.status(200).json({ snack })
}

function addSnack (req, res, next) {
  const newSnack = model.addSnack(uuidv4(), "corn dogs")

  if (newSnack.errors) {
    return next({ status: 400, message: `Could not create new snack`, error: snack.errors })
  }
  res.status(201).json({ newSnack: newSnack})
}

function updateSnack (req, res, next) {
  let item = "bottled water"
  const updatedSnack = model.updateSnack(req.params.id, item)

  if (updatedSnack.errors) {
    return next({ status: 400, message: `Could not update snack`, error: updatedSnack.errors })
  }
  res.status(200).json({ updatedSnack: updatedSnack })
}

function deleteSnack (req, res, next) {
  const deletedSnack = model.deleteSnack(req.params.id)

  if (deletedSnack.errors) {
    return next({ status: 404, message: `Could not delete snack`, error: deletedSnack.errors })
  }
  res.status(204).json({ deletedSnack: deletedSnack})
}

module.exports = {
  getAll,
  getOne,
  addSnack,
  updateSnack,
  deleteSnack
}
