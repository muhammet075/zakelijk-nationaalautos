const sitemap = require("nextjs-sitemap-generator");
const path = require("path");

sitemap({
    baseUrl: "https://zakelijk.nationaalautos.nl", // Voeg hier het volledige URL-basispad toe
    pagesDirectory: path.resolve(__dirname, "../out/"),
    targetDirectory: path.resolve(__dirname, "../out/"),
    sitemapFilename: 'sitemap.xml',
    ignoredExtensions: ["js", "map", "json", "xml", "png", "css", "jpeg", "jpg", "icon", "svg"],
    ignoredPaths: [
        "404",
        "favicon",
    ],
    extraPaths: [
        "/", // Voeg hier extra paden toe als dat nodig is
    ],
});
