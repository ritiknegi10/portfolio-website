const router = require("express").Router();
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

module.exports = router;
