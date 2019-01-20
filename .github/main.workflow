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
  secrets = [
    "GIT_PERSONAL_ACCESS_TOKEN",
    "GIT_USER",
    "GIT_EMAIL",
  ]
  env = {
    PUBLISH_DIRECTORY = "build"
  }
}
