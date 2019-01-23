#!/usr/bin/env bash

kubectl create -f production/deployments/0-db/db.yaml
kubectl create -f production/services/0-db/db.yaml
kubectl create -f production/deployments/1-pdfs/pdfs.yaml
kubectl create -f production/services/1-pdfs/pdfs.yaml
sleep 10
kubectl create -f production/deployments/2-api/api.yaml
kubectl create -f production/services/2-api/api.yaml
kubectl create -f production/deployments/3-app/app.yaml
kubectl create -f production/services/3-app/app.yaml
sleep 10
kubectl create -f production/deployments/4-haproxy/haproxy.yaml
kubectl create -f production/services/4-haproxy/haproxy.yaml
