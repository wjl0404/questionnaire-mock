var Koa = require("koa");
var Router = require("koa-router");
const mockList = require("./mock/index");
const cors = require("koa2-cors");
var app = new Koa();
app.use(cors());
var router = new Router();

async function getResponse(fn, ctx) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = fn(ctx);
      resolve(res);
    }, 0);
  });
}
router.get("/", (ctx) => {
  ctx.body = "hello";
});
mockList.forEach((item) => {
  const { url, method, response } = item;
  router[method](url, async (ctx) => {
    const res = await getResponse(response, ctx);
    ctx.body = res;
  });
});

app.use(router.routes());
app.listen(3001);
