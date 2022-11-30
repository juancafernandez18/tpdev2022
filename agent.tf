resource "helm_release" "gitlab_agent" {
  name = "agentegitlab"

  repository = "https://charts.gitlab.io"
  chart      = "agentegitlab"

  create_namespace = true
  namespace        = var.agent_namespace

  set {
    name  = "config.kasAddress"
    value = var.kas_address
  }

  set {
    name  = "config.token"
    value = var.agent_token
  }
}
