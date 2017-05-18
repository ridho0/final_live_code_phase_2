const User = require('../models/collections/users')
const methods = {}

methods.insertOne = function(req, res) {
  User.create(req.body, function(error, record) {
    if (error) {
      res.json({ error })
    } else {
      res.json(record)
    }
  })
}

methods.getAll = function(req, res) {
  User.find({},  function(error, records) {
    if (error) {
      res.json({ error })
    } else {
      res.json(records)
    }
  })
} // getAll


// methods.getByUserName = function(req, res) {
//   User.findOne({ username: req.params.username})
//     .select('username')
//     .exec((error, record) => {
//       if (error) {
//         res.json({ error })
//       } else {
//         res.json(record)
//       }
//     })
// }

methods.updateById = function(req, res) {
  User.findByIdAndUpdate(req.params.id, { $set: req.body }, {new : true})
    .exec((error, record) => {
      if (error) {
        res.json({ error })
      } else {
        res.json(record)
      }
    })
}// updateById

methods.deleteById = function(req, res) {
  User.findByIdAndRemove(req.params.id)
    .exec((error, record) => {
      if (error) {
        res.json({ error })
      } else {
        res.json(record)
      }
    })
}// updateById

module.exports = methods
