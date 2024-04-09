const router = require("express").Router();
const { Category, Product } = require("../../models");



router.get("/", (req, res) => {
  
  Category.findAll({
    include: [Product],
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
 
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product],
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  
  Category.create({
    category_name: req.body.category_name,
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  
  Category.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: "No category found with this id" });
        return;
      }

      const originalData = dbCategoryData.get({ plain: true });

      Category.update(req.body, {
        where: {
          id: req.params.id,
        },
      })
        .then((updateResponse) => {
          Category.findOne({
            where: {
              id: req.params.id,
            },
          }).then((updatedDbCategoryData) => {
            const customMessage = "Category successfully updated.";

            res.json({
              original: originalData,
              message: customMessage,
              updated: updatedDbCategoryData.get({ plain: true }),
            });
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  
  Category.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCategoryData) => {
      if (!dbCategoryData) {
        res.status(404).json({ message: "No category found with this id" });
        return;
      }
      Category.destroy({
        where: {
          id: req.params.id,
        },
      });

      res.json({
        message: "Category successfully deleted.",
        original: dbCategoryData,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
//
module.exports = router;