const { Router } = require("express");
const axios = require("axios");
const API_KEY = process.env;
const apiKey = "06f9b29e561e42bcad48b3a63859a5ff";
const { Recipe, Diet } = require("../db.js");
const urlRecipes = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&number=100`;

const router = Router();

router.get("/recipes", async (req, res) => {
  let arrDiets = [
    { diets: "Gluten Free" },
    { diets: "Lacto Vegetarian" },
    { diets: "Ketogenic" },
    { diets: "Vegetarian" },
    { diets: "Ovo Vegetarian" },
    { diets: "Vegan" },
    { diets: "Pescetarian" },
    { diets: "Paleo" },
    { diets: "Primal" },
    { diets: "Low FODMAP" },
    { diets: "Whole30" },
  ];
  arrDiets.map((a) => {
    Diet.findOrCreate({ where: { diets: a.diets } });
  });
  try {
    let recipes = await axios.get(urlRecipes),
      recipesData = await recipes.data.results;
    let mapedData = recipesData.map((f) => {
      if (f.diets.length === 0) {
        return {
          image: f.image,
          id: f.id,
          title: f.title.toUpperCase(),
          diets: "DON´T DEFINED",
        };
      }
      return {
        image: f.image,
        id: f.id,
        title: f.title.toUpperCase(),
        diets: f.diets.map((d) => d.toUpperCase()),
      };
    });
    const tableBd = await Recipe.findAll({
      include: {
        model: Diet,
        through: {
          attributes: [],
        },
      },
    });
    let concat = tableBd.concat(mapedData);
    res.status(200).send(concat);
  } catch (error) {
    res.status(404).send("Ooops 404 error");
  }
});

router.get("/recipe", async (req, res) => {
  const { name } = req.query;
  try {
    let recipes = await axios.get(urlRecipes);
    let recipesData = await recipes.data.results;
    let filteredName = recipesData.filter((r) =>
      r.title.toLowerCase().includes(name.toLowerCase())
    );
    let filtrados = (filteredName = filteredName.map((f) => {
      return {
        image: f.image,
        title: f.title.toUpperCase(),
        diets: f.diets.map((d) => d.toUpperCase()),
      };
    }));
    res.status(200).json(filtrados);
  } catch (error) {
    res.status(404).send("Ooops 404 error");
  }
});

router.get("/recipe/:idReceta", async (req, res) => {
  const { idReceta } = req.params;
  try {
    if (idReceta.length < 20) {
      let recipes = await axios.get(urlRecipes),
        recipesData = await recipes.data.results;
      let findedId = recipesData.filter(
        (r) => Number(r.id) === Number(idReceta)
      );
      let filtrados = (findedId = findedId.map((f) => {
        if (f.analyzedInstructions.length === 0) {
          return {
            image: f.image,
            id: f.id,
            title: f.title,
            diets: f.diets,
            healthScore: f.healthScore,
            summary: f.summary.replaceAll(/<(“[^”]”|'[^’]’|[^'”>])*>/g, ""),
            steps: "Haven´t steps",
          };
        }
        return {
          image: f.image,
          id: f.id,
          title: f.title,
          diets: f.diets,
          healthScore: f.healthScore,
          summary: f.summary.replaceAll(/<(“[^”]”|'[^’]’|[^'”>])*>/g, ""),
          steps: f.analyzedInstructions[0].steps.map((a) => a.step),
        };
      }));
      res.status(200).send(filtrados);
    } else if (idReceta.length > 20) {
      const recipe = await Recipe.findOne({ where: { id: idReceta } });
      res.status(200).send(recipe);
    }
  } catch (error) {
    res.status(404).send("Ooops 404 error");
  }
});

router.post("/recipes", async (req, res) => {
  const { title, summary, healthScore, steps, image, diet } = req.body;
  try {
    if (!title || !summary) {
      res.status(404).send("It is mandatory to fill in your title and summary");
    }
    const existente = await Recipe.findOne({ where: { title: title } });
    if (existente) return res.status(404).send("That recipe already exists");
    const obj = await Recipe.create({
      title,
      summary,
      healthScore,
      steps,
      image,
    });
    await obj.addDiets(diet);
    return res.status(200).send({ confirmacion: `Recipe created` });
  } catch (error) {
    res.status(404).send("Ooops 404 error");
  }
});

router.get("/diets", async (req, res) => {
  try {
    let diets = await Diet.findAll();
    res.status(200).send(diets);
  } catch (error) {
    return res.status(404).send("Ooops 404 error");
  }
});

module.exports = router;
