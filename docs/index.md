# example-app

Aplicação de exemplo criada para testar recursos do Backstage:

- **Software Catalog** — este componente é registrado via `catalog-info.yaml`.
- **TechDocs** — esta página é renderizada a partir deste arquivo Markdown via mkdocs.
- **Kubernetes plugin** — a anotação `backstage.io/kubernetes-id: example-app`
  liga este componente aos recursos implantados em `kubernetes/`.
- **Scaffolder** — este mesmo esqueleto pode ser gerado via o template em
  `templates/example-node-service/`.

## Endpoints

| Rota | Descrição |
|---|---|
| `GET /` | Mensagem de identificação do serviço |
| `GET /healthz` | Health check (usado pelos probes do Kubernetes) |

## Rodando localmente

```bash
npm install
npm start
curl localhost:3000/healthz
```
