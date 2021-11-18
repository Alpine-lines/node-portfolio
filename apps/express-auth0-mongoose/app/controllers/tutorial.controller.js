const db = require('../models');
const Tutorial = db.tutorials;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // // Validate request
    // if (!req.body) {
    //     res.status(400).send({ message: "Content cannot be empty!" });
    //     return;
    // }

    const tutorial = new Tutorial({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published
    });

    tutorial
        .save(tutorial)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

exports.findAll = (req, res) => {
    const title = req.body.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i"} }: {};

    Tutorial.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Tutorial.findById(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Tutorial with id ${id} not found.` });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Error retrieving Tutorial with id ${id}`
            });
        });
};

exports.update = (req, res) => {
  if (!req.body) {
      return res.status(404).send({
        message: "Data to update can not be empty!"
      });
  }
  
  const id = req.params.id;
  
  Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
            });
        } else {
            res.send({ message: "Tutorial was updated successfully." });
        }
    })
    .catch(err => {
        res.status(500).send({
          message: `Error updating Tutorial with id ${id}`
        });
      });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Tutorial.deleteOne({_id: id})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
                });
            } else {
                res.send({
                    message: "Tutorial was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Tutorial with id=" + id
            });
        });
};

exports.deleteAll = (req, res) => {
    Tutorial.deleteMany({})
        .then(data => {
        res.send({
            message: `${data.deletedCount} Tutorials were deleted successfully!`
        });
        })
        .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while removing all tutorials."
        });
        }); 
};

exports.findAllPublished = (req, res) => {
    Tutorial.find({ published: true })
        .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving tutorials."
            });
          });
};