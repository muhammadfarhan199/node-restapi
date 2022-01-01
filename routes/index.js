import express from "express";

const router = express.Router();

const users = [{firstName: "Muhammad", lastName: "Farhan"}]

//@route GET/
router.get('/', (req, res) => {
  res.send(users)
});

export default router;