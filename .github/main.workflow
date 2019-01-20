workflow "Build and Publish" {
  on = "push"
  resolves = ["DevinCarr/publish-gh-pages"]
}

action "Install" {
  uses = "actions/npm@master"
  runs = "install"
}

action "Build" {
  uses = "actions/npm@master"
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
