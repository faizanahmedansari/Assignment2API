const MovieModel = require('../models/MovieModel');

module.exports = {
  create: (req, res) => {
    let movie = new MovieModel({
      name: req.body.name,
      image: req.body.image,
      summary: req.body.summary
    });

    movie.save()
      .then(result => {
        res.json({ success: true, result: result });
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  },
  update: (req, res) => {
    MovieModel.update({_id: req.body._id}, req.body)
      .then(movie => {
        if (!movie) res.json({ success: false, result: "Movie does not exist" });

        res.json(movie);
      })
      .catch(err => {
        res.json({ success: false, result: err });
      });
  },
  retrieve: (req, res) => {
    MovieModel.find()
      .then(result => {
        if (!result) res.json({ success: false, result: "No results found" });

        res.json({ success: true, result: result });
      })
      .catch(err => res.json({success: false, result: err}));
  },
  delete: (req, res) => {
    MovieModel.remove({_id: req.body._id})
      .then(result => {
        if (!result) res.json({ success: false, result: "No movie was found with the ID" });
        res.json({ success: true, result: result });
      })
      .catch(err => res.json({ success: false, result: err }));
  }
}