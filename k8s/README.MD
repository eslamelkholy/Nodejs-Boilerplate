## Converting Docker Compose To Kubernetes

#### Using Kompose Via [Kompose IO](https://kompose.io/getting-started/)

```
kompose convert -o k8s

```

### Key Commands

```
kubectl version
kubectl get [deployments | services | pods]
kubectl apply -f [fileName | FolderName]
kubectl port-forward [name-of-pods] 8080:80
kubectl run nginx-server --image=nginx:alpine

```
