containers-tool := docker-compose
dev-dockerfile := -f docker-compose.yml

.PHONY: build-dev
build-dev:
	$(containers-tool) $(dev-dockerfile) build

.PHONY: dev
dev:
	$(containers-tool) $(dev-dockerfile) up
