const { Router } = require("express");
const axios = require("axios");
const apiKey = "e495ee53f621493f8855565bea64f124";
const { Recipe, Diet } = require("../db.js");
const urlRecipes = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&number=100`;

const router = Router();

router.get("/recipes", async (req, res) => {
  let arrDiets = [
    { diet: "Gluten Free" },
    { diet: "Lacto Vegetarian" },
    { diet: "Ketogenic" },
    { diet: "Vegetarian" },
    { diet: "Ovo Vegetarian" },
    { diet: "Vegan" },
    { diet: "Pescetarian" },
    { diet: "Paleo" },
    { diet: "Primal" },
    { diet: "Low FODMAP" },
    { diet: "Whole30" },
  ];
  arrDiets.map((a) => {
    Diet.findOrCreate({ where: { diet: a.diet } });
  });
  try {
    let recipes = await axios.get(urlRecipes),
      recipesData = await recipes.data.results;
    let mapedData = recipesData.map((f) => {
      return {
        image: f.image,
        title: f.title,
        diets: f.diets,
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

router.get("/recipes", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      let recipes = await axios.get(urlRecipes);
      let recipesData = await recipes.data.results;
      let filteredName = recipesData.filter((r) =>
        r.title.toLowerCase().includes(name.toLowerCase())
      );
      let filtrados = (filteredName = filteredName.map((f) => {
        return {
          image: f.image,
          title: f.title,
          diets: f.diets,
        };
      }));
      res.status(200).json(filtrados);
    }
  } catch (error) {
    res.status(404).send("Ooops 404 error");
  }
});

router.get("/recipes/:idReceta", async (req, res) => {
  const { idReceta } = req.params;
  try {
    if (idReceta.length < 20) {
      let recipes = await axios.get(urlRecipes),
        recipesData = await recipes.data.results;
      let findedId = recipesData.filter(
        (r) => Number(r.id) === Number(idReceta)
      );
      let filtrados = (findedId = findedId.map((f) => {
        return {
          image: f.image,
          title: f.title,
          diets: f.diets,
          healthScore: f.healthScore,
          summary: f.summary,
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
  const { title, summary, healthScore, analyzedInstructions, img, diet } =
    req.body;
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
      analyzedInstructions,
      img,
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
