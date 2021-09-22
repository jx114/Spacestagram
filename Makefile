.PHONY: build

deploy:
	gcloud auth configure-docker

deploy:
	gcloud container clusters get-credentials autopilot-cluster-1 --region us-central1 --project spacestagram-326720

deploy:
	skaffold run --default-repo=gcr.io/spacestagram-326720