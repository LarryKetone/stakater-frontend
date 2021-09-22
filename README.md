# Simple React App + Docker + Kubernetes

The aim of this project is to create a simple react application , dockerize it and deploy with Kubernetes

# Summary
1. Created a react app using * [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html).
2. Installed [moment](https://momentjs.com/) and [axios](https://www.npmjs.com/package/axios) libraries.
3. Made an ajax call to the [spring backend](https://github.com/LarryKetone/stakater-backend) of this task.
4. Created a deployment , service , configmap yaml files

### Prerequisite
The requirements to run this project are as follows:

* node v10.19.0
* npm v6.14.4
* Kubernetes(Minikube)


### Steps To Run This Application

1. cd into application directory
   
2. Dockerize application && push to DockerHub 
   ( This step assumes you have logged in to dockerHub)
    * Build && Push
```bash
docker build -t {{dockerHubUsername}/stakater-frontend} .
docker push {{dockerHubUsername}/stakater-frontend}
```

3. Start minikube
```bash
minikube start
```

4. Run the helm charts
```bash
helm create stakater-frontend-chart stakater-frontend-chart --values stakater-frontend-chart/values.yaml
```

5. Expose service
```bash
minikube service stakater-frontend-service
```