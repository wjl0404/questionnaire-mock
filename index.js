var Koa = require("koa");
var Router = require("koa-router");
const mockList = require("./mock/index");
var app = new Koa();
var router = new Router();

async function getResponse(fn, ctx) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = fn(ctx);
      resolve(res);
    }, 500);
  });
}

mockList.forEach((item) => {
  const { url, method, response } = item;
  router[method](url, async (ctx) => {
    const res = await getResponse(response, ctx);
    ctx.body = res;
  });
});

app.use(router.routes());
app.listen(3001);
