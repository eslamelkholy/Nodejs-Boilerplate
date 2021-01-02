## Converting Docker Compose To Kubernetes

### Quick Start

```
kubectl apply -f k8s
kubectl port-forward <nginx-pod-name> 4000:80
```

#### Using Kompose To Migrate From Compose To Kubernetes Via [Kompose IO](https://kompose.io/getting-started/)

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
kubectl delete -f [filename | FolderName]

```

### Notes

###### Don't Forget to Add Sleep Command For Node Development To Avoid Fucken CrashLoopBackOff Issue

```
args: ["-c", "while true; do echo Done Deploying sv-premier; sleep 3600;done"]
name: nodejs-boilerplate
```
