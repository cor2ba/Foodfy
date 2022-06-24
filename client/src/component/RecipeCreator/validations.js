export const Validations = (input) => {
  //Title:

  let errors = {};

  if (!input.title) {
    errors.title = "SHOULD CREATE A TITLE";
  }

  if (input.title >= 40) {
    errors.title = "THE MAX OF THE LENGTH IS 40";
  }

  if (input.title.search(/^[a-zA-Zñáéíóúü]*$/)) {
    errors.title = "THE TITLE SHOULD HAVE LETTERS";
  }

  //Summary:

  if (!input.summary) {
    errors.summary = "SHOULD CREATE A SUMMARY";
  }

  if (input.summary.length >= 100) {
    errors.summary = "THE MAX OF THE LENGTH IS 100";
  }

  // if (input.summary.search(/^[a-zA-Zñáéíóúü]*$/)) {
  //   errors.summary = "THE SUMMARY SHOULD HAVE LETTERS";
  // }

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

  if (input.steps.length >= 116) {
    errors.steps = "THE MAX OF THE LENGTH IS 116";
  }

  //Image:
  //(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)
  // if (!input.image) {
  //   errors.image = "SHOULD PUT A IMAGE";
  // }

  //Diets:

  if (input.diets.length === 0 || input.diets.length === 0) {
    errors.diets = "SHOULD HAVE 1 OR MORE DIETS";
  }

  return errors;
};
