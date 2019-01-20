workflow "Build and Publish" {
  on = "push"
  resolves = ["DevinCarr/publish-gh-pages"]
}

action "Install" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  runs = "install"
}

action "Build" {
  uses = "actions/npm@de7a3705a9510ee12702e124482fad6af249991b"
  needs = ["Install"]
  runs = "build"
}

action "DevinCarr/publish-gh-pages" {
  uses = "DevinCarr/publish-gh-pages@master"
  needs = ["Build"]
  secrets = ["GITHUB_TOKEN"]
  env = {
    PUBLISH_DIRECTORY = "build"
  }
}
