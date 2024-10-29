# -------------------------🧩 APP-------------------------

# 🚀 Production

app.build_prod:
	docker compose -f docker-compose.yml build --no-cache \
	; docker compose -f docker-compose.yml down

app.start_prod:
	docker compose -f docker-compose.yml down && docker compose -f docker-compose.yml up \
	; docker compose -f docker-compose.yml down

app.multi_platform.build_prod:
	docker buildx build --platform linux/amd64,linux/arm64 \
	-t {dockerhub_user}/stock-watcher-runner-prod:latest \
	-f ./Dockerfile . \
	--push