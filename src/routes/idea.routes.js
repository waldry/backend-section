const { Router } = require("express");

module.exports = function ({ IdeaController }) {
  const router = Router();

  router.get("", IdeaController.getAll);
  router.get("/:ideaId", IdeaController.get);
  router.get("/:ideaId/all", IdeaController.getUserIdeas);
  router.post("", IdeaController.create);
  router.patch("/:ideaId", IdeaController.update);
  router.delete("/:ideaId", IdeaController.delete);
  router.post(":ideaId/upvotes", IdeaController.upvoteIdea);
  router.post(":ideaId/downvotes", IdeaController.downvoteIdea);
  return router;
};
