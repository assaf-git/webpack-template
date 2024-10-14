import "./style.css";
import { test } from "./home.js";

console.log(test);

if (process.env.NODE_ENV !== "production") {
    console.log("Looks like we are in development mode!");
  }