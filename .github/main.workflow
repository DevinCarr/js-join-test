workflow "Build and Publish" {
  on = "push"
  resolves = ["Publish"]
}

action "Install" {
  uses = "actions/npm@master"
  args = "install"
}

action "Build" {
  uses = "actions/npm@master"
  needs = ["Install"]
  args = "run build"
}

action "Publish" {
  uses = "DevinCarr/publish-gh-pages@master"
  needs = ["Build"]
  secrets = ["GITHUB_TOKEN"]
  env = {
    PUBLISH_DIRECTORY = "build"
  }
}
