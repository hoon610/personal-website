import DCNNimg from "../assets/DCNNimg.jpg";
import FCimg from "../assets/FCimg.jpg";
import ANFgif from "../assets/ANFgif.gif";
import PRJAgif from "../assets/PRJAgif.gif";

import NPgif from "../assets/NPgif.gif";
import ThreeDgif from "../assets/3Dgif.gif";

export const ProjectList = [
  {
    name: "Ant Genus Classifier made in a Deep Neural Network",
    image: DCNNimg,
    skills: "Python, Tensorflow, Keras, JupyterNotebooks",
    github: "https://github.com/hoon610/imageclassifier",
    link: "",
    summary:
      "Created a deep convolutional neural network image classifier made in Python with TensorFlow. Check out my documentation for making this model in the Substack link above!",
    documentation:
      "https://hoonkang.substack.com/p/creating-a-machine-learning-deep",
  },

  {
    name: "Digitization of 1951 Navajo Project Aerial Photos",
    image: NPgif,
    skills: "Python, ArcGIS, JavaScript",
    github: "",
    link: "https://geodata-asu.hub.arcgis.com/apps/asu::1951-navajo-project-aerial-photos/about",
    summary:
      "Digitized and catalogued a set of aerial photographs of Navajo County, Arizona using an automated data pipeline. Created a web index in ArcGIS deployed to a ready to use API",
    documentation: "",
  },
  {
    name: "ASU Map and Geospatial Hub 3D Explorer",
    image: ThreeDgif,
    skills: "ArcGIS, Javascript",
    github: "https://github.com/mapgeoasu/3dexplorer",
    link: "https://mapgeoasu.github.io/3dexplorer/",
    summary:
      "Assisted in the digitization and creation of a 3D representation of ASU's Map and Geospatial Hub. The model allows for users to view digitized versions of maps that are available in an online repository",
    documentation: "",
  },
  {
    name: "Model of Ant Nuptial Flights based on Current Weather",
    image: ANFgif,
    skills: "R, JavaScript, WeatherAPI",
    github: "https://github.com/hoon610/antnuptialflightmodel",
    link: "https://hoon610.github.io/antnuptialflightmodel/",
    summary:
      "Designed a model and a web app that pulls current weather data to predict the likelihood of ant nuptial flight occurences. Currently the true model is no longer available due to ethical reasons, but if you have any questions on how it was generated or how the data was sourced shoot me an email!",
    documentation: "",
  },

  {
    name: "Facebook Clone built in ReactJS and Firebase",
    image: FCimg,
    skills: "React, Node.js, Firebase, MongoDB, HTML/CSS",
    github: "https://github.com/hoon610/fb-clone",
    link: "https://hoonbook.netlify.app/",
    summary:
      "A Facebook clone built in React and Firebase. View in the link above using Google Authentication or as a guest user. It might be flagged as a phishing site on your browser for looking too good!",
    documentation: "",
  },
  {
    name: "Endlessly Scrolling Rogue-like Game built in Unity",
    image: PRJAgif,
    skills: "Unity, C#",
    github: "",
    link: "",
    summary:
      "An endlessly scrolling game inspired by Vampire Survivors built in Unity/C#. The game features an endlessly scrolling world, two weapon classes, XP/leveling, and randomly spawning chests/enemies",
    documentation: "",
  },
];
