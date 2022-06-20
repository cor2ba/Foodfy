export const Validations = (input) => {
  //Title:

  let errors = {};

  if (!input.title) {
    errors.title = "SHOULD CREATE A TITLE";
  }

  //Summary:

  if (!input.summary) {
    errors.summary = "SHOULD CREATE A SUMMARY";
  }

  //Health Score:

  if (!input.healthScore) {
    errors.healthScore = "SHOULD CREATE A HEALTH SCORE";
  }
  if (input.healthScore < 1 || input.healthScore > 100) {
    errors.healthScore = "SHOULD BE SELECT A NUMBER BETWEEN 1 TO 100";
  }

  //Steps:

  if (!input.steps.length) {
    errors.steps = "SHOULD BE CREATE A STEP TO STEP";
  }

  //Image:

  if (!input.image) {
    errors.image = "SHOULD PUT A IMAGE";
  }

  if (input.diets.length === 0 || input.diets.length === 0) {
    errors.diets = "SHOULD HAVE 1 OR MORE DIETS";
  }

  return errors;
};
