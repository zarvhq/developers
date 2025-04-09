up:
	pnpm dev

clean:
	rm -rf node_modules .vitepress/dist .vitepress/cache

install:
	export NODE_VERSION=22.13.1
	export PNPM_VERSION=10.2.0
	pnpm install