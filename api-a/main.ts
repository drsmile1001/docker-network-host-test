import { Application } from "./deps.ts";
console.log("a starting...")
const app = new Application();

app.use(async (ctx) => {
  console.log("a recive msg");
  const s = await fetch("http://localhost:5002").then((response) =>
    response.text()
  );
  ctx.response.body = s;
});
console.log("a listening...");
await app.listen({ port: 8000 });
