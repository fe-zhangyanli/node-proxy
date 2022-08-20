const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /users/hello:
 *  get:
 *    tags:
 *      - 打招呼
 *    summary: hello 打招呼方法
 *    description: 打招呼方法的详细描述
 *    parameters:
 *      - name: name
 *        description: 用户名字
 *        in: query
 *        required: true
 *        type: string
 *    responses:
 *      200:
 *        description: 成功返回 world
 */
router.get("/hello", (req, res) => {
  const name = req.query.name;
  res.send(`hello ${name}`);
});

module.exports = router;