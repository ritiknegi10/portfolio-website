const mongoose = require("mongoose");

//intro page
const introSchema = new mongoose.Schema({
  welcomeText: {
    type: String,
    requierd: true,
  },
  firstName: {
    type: String,
    requierd: true,
  },
  lastName: {
    type: String,
    requierd: true,
  },
  caption: {
    type: String,
    requierd: true,
  },
  description: {
    type: String,
    requierd: true,
  },
});

//about page
const aboutSchema = new mongoose.Schema({
  lottiURL: {
    type: String,
    requierd: true,
  },

  description1: {
    type: String,
    requierd: true,
  },
  description2: {
    type: String,
    requierd: true,
  },
  skills: {
    type: Array,
    required: true,
  },
});

//project page
const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    requierd: true,
  },
  description: {
    type: String,
    requierd: true,
  },
  image: {
    type: String,
    requierd: true,
  },
  link: {
    type: String,
    requierd: true,
  },
  github: {
    type: String,
    requierd: true,
  },
  technolgies: {
    type: Array,
    required: true,
  },
});

//contact page
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    requierd: true,
  },
  age: {
    type: String,
    requierd: true,
  },
  email: {
    type: String,
    requierd: true,
  },
  mobile: {
    type: String,
    requierd: true,
  },
  address: {
    type: String,
    requierd: true,
  },
});

module.exports = {
  intro: mongoose.model("intros", introSchema),
  about: mongoose.model("abouts", aboutSchema),
  project: mongoose.model("projects", projectSchema),
  contact: mongoose.model("contacts", contactSchema),
};
