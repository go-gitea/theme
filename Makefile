STYLES := static/styles
DIST := dist

.PHONY: all
all: build

.PHONY: clean
clean:
	rm -rf $(STYLES) $(DIST)

.PHONY: install
install:
	npm install -q
	npm install -q -g gulp-cli

.PHONY: build
build:
	gulp

.PHONY: release
release:
	mkdir -p dist/
	cp -r archetypes/ dist/
	cp -r i18n/ dist/
	cp -r layouts/ dist/
	cp -r static/ dist/
	cp -r DCO dist/
	cp -r LICENSE dist/
	cp -r MAINTAINERS dist/
	cp -r README.md dist/
	cp -r theme.toml dist/
