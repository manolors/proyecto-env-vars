import path from "path";
const isGitHubPages = false;
const folderName = path.basename(process.cwd()) + "/";

console.log(process.env.MY_TOKEN);
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const base = mode === "production" && isGitHubPages ? "/" + folderName : "/";

export default {
  root: "src",
  base,
  mode,
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "./"
  }
};
