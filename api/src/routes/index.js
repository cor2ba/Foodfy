const { Router } = require("express");
const axios = require("axios");
const apiKey = "738ffc312f4f4b428ac578d293033c30";
const { Recipe, Diet } = require("../db.js");
const urlRecipes = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&number=100`;

const router = Router();

router.get("/recipes", async (req, res) => {
  try {
    let recipes = await axios.get(urlRecipes),
      recipesData = await recipes.data.results;
    let mapedData = recipesData.map((f) => {
      return {
        image: f.image,
        id: f.id,
        title: f.title.toUpperCase(),
        healthScore: f.healthScore,
        diets: f.diets?.map((diets) => {
          return {
            diets,
          };
        }),
      };
    });
    const tableBd = await Recipe.findAll({
      include: {
        model: Diet,
        attributes: ["diets"],
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
        id: f.id,
        title: f.title.toUpperCase(),
        diets: f.diets?.map((diets) => {
          return {
            diets,
          };
        }),
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
    if (idReceta.length < 10) {
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
            diets: f.diets?.map((diets) => {
              return {
                diets,
              };
            }),
            healthScore: f.healthScore,
            summary: f.summary.replaceAll(/<(“[^”]”|'[^’]’|[^'”>])*>/g, ""),
            steps: "HAVEN´T STEPS",
          };
        }
        return {
          image: f.image,
          id: f.id,
          title: f.title,
          diets: f.diets?.map((diets) => {
            return {
              diets,
            };
          }),
          healthScore: f.healthScore,
          summary: f.summary.replaceAll(/<(“[^”]”|'[^’]’|[^'”>])*>/g, ""),
          steps: f.analyzedInstructions[0].steps.map((a) => a.step),
        };
      }));
      res.status(200).send(filtrados);
    } else if (idReceta.length > 25) {
      const recipe = await Recipe.findOne({
        where: { id: idReceta },
        include: [
          {
            model: Diet,
            attributes: ["diets"],
            through: { attributes: [] },
          },
        ],
      });
      const array = [];
      array.push(recipe);
      res.status(200).send(array);
    }
  } catch (error) {
    res.status(404).send("Ooops 404 error");
  }
});

router.post("/recipes", async (req, res) => {
  const { title, summary, healthScore, steps, image, diets } = req.body;
  console.log(title, summary, healthScore, steps, image, diets);
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
    for (let i = 0; i < diets.length; i++) {
      let promise = await Diet.findOne({
        where: { diets: diets[i] },
      });
      await obj.addDiets(promise);
    }
    return res.status(200).send({ confirmacion: `Recipe created` });
  } catch (error) {
    res.status(404).send(error);
  }
});

router.get("/diets", async (req, res) => {
  let arrDiets = [
    { diets: "GLUTEN FREE" },
    { diets: "DAIRY FREE" },
    { diets: "KETOGENIC" },
    { diets: "LACTO OVO VEGETARIAN" },
    { diets: "VEGAN" },
    { diets: "PALEO" },
    { diets: "PRIMAL" },
    { diets: "WHOLE 30" },
    { diets: "PALEOLITHIC" },
    { diets: "PESCATARIAN" },
  ];
  arrDiets.map((a) => {
    Diet.findOrCreate({ where: { diets: a.diets } });
  });
  try {
    let diets = await Diet.findAll();
    res.status(200).send(diets);
  } catch (error) {
    return res.status(404).send("Ooops 404 error");
  }
});

module.exports = router;
