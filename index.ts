import { Application, Router } from "https://deno.land/x/denotrain@v0.4.4/mod.ts";
import { quotes } from "./quotes.ts";


const app = new Application({hostname : "192.168.1.16"});

const router = new Router();
app.use("/api",router);
 
app.get("/", (ctx) => {
  
  return "hello world";
})
router.get("/quotes", (ctx) => {
  
  return {"quotes": quotes};
});

await  app.run();