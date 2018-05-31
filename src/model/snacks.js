const uuid = require('uuid/v4')
const model = require('./snacks.json')

[
  {
    "name": "chips",
    "id": "d32336ad-a734-4d32-8732-21543a18dfbc"
  },
  {
    "name": "cheese",
    "id": "b373072c-80df-4fae-8cfd-e8cfb07a0498"
  },
  {
    "name": "hot dogs",
    "id": "f2a4879b-7157-45ce-b570-5afe7efb6598"
  },
  {
    "name": "popcorn",
    "id": "d7be703f-ae4d-4f9e-be5f-ad0fa2a64ba2"
  }
]

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

function addSnack (id=uuidv4(), name="corn dogs") {
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
    response = model
  }
  return response
}

module.exports = {
  getAll,
  getOne,
  addSnack,
  updateSnack,
  deleteSnack
}
