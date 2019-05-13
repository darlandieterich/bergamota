Package.describe({
  name: "darlandieterich:bergamota",
  summary: "small auxiliary framework for day-to-day",
  version: "0.0.1",
  git: "https://github.com/darlandieterich/bergamota"
});

Package.onUse(function(api) {
  api.addFiles("dist/bergamota.js", "client");
});
