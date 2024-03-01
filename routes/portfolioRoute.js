const router = require("express").Router();
const { default: Intro } = require("../client/src/pages/Home/intro");
const { intro, about, project, contact } = require("../models/portfolioModel");

router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await intro.find();
    const abouts = await about.find();
    const projects = await project.find();
    const contacts = await contact.find();
    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      project: projects,
      contact: contacts[0],
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/update-intro ", async (req, res) => {
  try {
    const intro = await Intro.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro updated succesfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
