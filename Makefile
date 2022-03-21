UID := $(shell id -u)
GID := $(shell id -g)

composer-install:
	UID=$(UID) GID=$(GID) docker-compose run php-cli composer install --no-cache

npm-install:
	UID=$(UID) GID=$(GID) docker-compose run node npm install

npm-run-dev:
	UID=$(UID) GID=$(GID) docker-compose run node npm run dev

npm-run-watch:
	UID=$(UID) GID=$(GID) docker-compose run node npm run watch

npm-run-build:
	UID=$(UID) GID=$(GID) docker-compose run node npm run build

