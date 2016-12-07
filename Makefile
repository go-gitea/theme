STYLES := static/styles

.PHONY: all
all: build

.PHONY: clean
clean:
	rm -rf $(STYLES) master.tar.gz

.PHONY: install
install:
	npm install -q
	npm install -q -g gulp-cli

.PHONY: build
build:
	gulp

.PHONY: release
release:
	tar -cvzf master.tar.gz \
		archetypes/ \
		i18n/ \
		layouts/ \
		static/ \
		DCO \
		LICENSE \
		MAINTAINERS \
		README.md \
		theme.toml
