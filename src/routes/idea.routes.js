const { Router } = require("express");
const { ParseIntMiddleware, AuthMiddleware } = require("../middlewares");

module.exports = function ({ IdeaController }) {
  const router = Router();

  router.get("", [ParseIntMiddleware], IdeaController.getAll);
  router.get("/:ideaId", IdeaController.get);
  router.get("/:ideaId/all", IdeaController.getUserIdeas);
  router.post("", IdeaController.create);
  router.patch("/:ideaId", AuthMiddleware, IdeaController.update);
  router.delete("/:ideaId", AuthMiddleware, IdeaController.delete);
  router.post(":ideaId/upvotes", AuthMiddleware, IdeaController.upvoteIdea);
  router.post(":ideaId/downvotes", AuthMiddleware, IdeaController.downvoteIdea);
  return router;
};
