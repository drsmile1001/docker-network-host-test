import { Application } from "./deps.ts"
console.log("b starting...")
const app = new Application();

app.use(async (ctx) => {
  console.log("b recive msg")
  ctx.response.body = "hello from b";
});
console.log("b listening...")
await app.listen({ port: 5002 });
