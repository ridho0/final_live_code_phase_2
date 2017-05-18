const Article = require('../models/collections/articles')
const methods = {}

methods.insertOne = function(req, res) {
  Article.create(req.body, function(error, record) {
    if (error) {
      res.json({ error })
    } else {
      res.redirect("/")
    }
  })
}

methods.getAll = function(req, res) {
  Article.find({},  function(error, records) {
    if (error) {
      res.json({ error })
    } else {
      res.json(records)
    }
  })
} // getAll


// methods.getByArticleName = function(req, res) {
//   Article.findOne({ username: req.params.username})
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
  Article.findByIdAndUpdate(req.params.id, { $set: req.body }, {new : true})
    .exec((error, record) => {
      if (error) {
        res.json({ error })
      } else {
        res.json(record)
      }
    })
}// updateById

methods.deleteById = function(req, res) {
  Article.findByIdAndRemove(req.params.id)
    .exec((error, record) => {
      if (error) {
        res.json({ error })
      } else {
        res.json(record)
      }
    })
}// updateById

module.exports = methods
