// Tell Bing (and the other IndexNow search engines) about every page in the live sitemap.
// Run after a deploy, e.g. when news is added:  npm run indexnow
const SITE = "https://www.astromining-industrial.com";
const KEY = "0e28ce84682b042b6320b6f67a34b490"; // must match public/<KEY>.txt

const sitemap = await (await fetch(`${SITE}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList })
});

console.log(`IndexNow: ${response.status} ${response.statusText} (${urlList.length} URLs)`);
if (!response.ok) process.exitCode = 1;
