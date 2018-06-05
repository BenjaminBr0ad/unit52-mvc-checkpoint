const uuid = require('uuid/v4')
const model = require('./snacksjson.js')

function getAll () {
  return model
}

function getOne (id) {
  const errors = []
  const snack = model.find(snack => snack.id === id)

  let response
  if (!snack) {
    errors.push(`Could not find snack with id: ${id}`)
    response = { errors }
  } else {
    response = snack
  }
  return response
}

function addSnack (id, name) {
  const errors = []

  let response = undefined
  for (let elem of model) {
    if (elem.id === id) {
      errors.push(`A snack with that id already exists`)
      response = { errors }
    }
  }
  if (response === undefined) {
    const newSnack = { name: name, id: id }
    model.push(newSnack)
    response = newSnack
    return response
  }
}

function updateSnack (id, name) {
  const errors = []
  const snack = model.find(snack => snack.id === id)

  let response
  if (!snack) {
    errors.push(`Could not find a snack with id: ${id}`)
    response = { errors }
  } else if (!name) {
    errors.push(`Please provide a snack name`)
    response = { errors }
  } else {
    snack.name = name
    response = snack
  }
  return response
}

function deleteSnack (id) {
  const errors = []
  const snack = model.find(snack => snack.id === id)

  let response
  if (!snack) {
    errors.push(`Could not find a snack with id: ${id}`)
    response = { errors }
  } else {
    const index = model.indexOf(snack)
    model.splice(index, 1)
    response = { model }
  }
  return response
}
//
module.exports = {
  getAll,
  getOne,
  addSnack,
  updateSnack,
  deleteSnack
}
