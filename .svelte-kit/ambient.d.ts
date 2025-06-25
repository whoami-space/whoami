
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const WORKSPACE_SERVICE_ACCOUNT_EMAIL: string;
	export const PKG_CONFIG_PATH: string;
	export const PYTHONNOUSERSITE: string;
	export const UV_USE_IO_URING: string;
	export const MONOSPACE_ENV: string;
	export const MONOSPACE_COMMIT_SHA: string;
	export const PWD: string;
	export const CAPRA_ENABLED_FEATURES: string;
	export const NIX_PATH: string;
	export const CUSTOM_ENV_ENABLED: string;
	export const FIREBASE_DEPLOY_AGENT: string;
	export const DART_CODE_CONFIGURATION_PATH: string;
	export const WEB_HOST: string;
	export const ENABLE_CAPRA_GENKIT_TOKEN_LOGGING: string;
	export const HOME: string;
	export const COLLAB_WS_URL: string;
	export const NIX_SSL_CERT_FILE: string;
	export const PROMPT_COMMAND: string;
	export const MONOSPACE_ON_START_COMMANDS: string;
	export const WORKSPACE_SLUG: string;
	export const MONOSPACE_ENV_CFG_HASH: string;
	export const COLLAB_YJS_ROOM: string;
	export const NPM_CONFIG_PREFIX: string;
	export const IDX_CHANNEL: string;
	export const IDX_ENV_CONFIG_FILE_PATH: string;
	export const ACLOCAL_PATH: string;
	export const MONOSPACE_PREVIEW_CONFIG: string;
	export const USER: string;
	export const TZDIR: string;
	export const MONOSPACE_RECOVERY_MODE: string;
	export const NPM_CONFIG_GLOBALCONFIG: string;
	export const NIX_CFLAGS_LINK: string;
	export const SHLVL: string;
	export const ENVIRONMENT_SERVICE_PATH: string;
	export const NIX_CFLAGS_COMPILE: string;
	export const LOCALE_ARCHIVE: string;
	export const PERMANENT_TAG: string;
	export const MONOSPACE_ON_CREATE_COMMANDS: string;
	export const LC_CTYPE: string;
	export const SSL_CERT_FILE: string;
	export const GOOGLE_CLOUD_WORKSTATIONS: string;
	export const XDG_DATA_DIRS: string;
	export const PATH: string;
	export const IDX_TOKEN_SOCK: string;
	export const NIX_LDFLAGS: string;
	export const VSCODE_CWD: string;
	export const VSCODE_NLS_CONFIG: string;
	export const VSCODE_HANDLES_SIGPIPE: string;
	export const VSCODE_AMD_ENTRYPOINT: string;
	export const VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
	export const BROWSER: string;
	export const ELECTRON_RUN_AS_NODE: string;
	export const VSCODE_IPC_HOOK_CLI: string;
	export const VSCODE_L10N_BUNDLE_LOCATION: string;
	export const ELECTRON_NO_ASAR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		WORKSPACE_SERVICE_ACCOUNT_EMAIL: string;
		PKG_CONFIG_PATH: string;
		PYTHONNOUSERSITE: string;
		UV_USE_IO_URING: string;
		MONOSPACE_ENV: string;
		MONOSPACE_COMMIT_SHA: string;
		PWD: string;
		CAPRA_ENABLED_FEATURES: string;
		NIX_PATH: string;
		CUSTOM_ENV_ENABLED: string;
		FIREBASE_DEPLOY_AGENT: string;
		DART_CODE_CONFIGURATION_PATH: string;
		WEB_HOST: string;
		ENABLE_CAPRA_GENKIT_TOKEN_LOGGING: string;
		HOME: string;
		COLLAB_WS_URL: string;
		NIX_SSL_CERT_FILE: string;
		PROMPT_COMMAND: string;
		MONOSPACE_ON_START_COMMANDS: string;
		WORKSPACE_SLUG: string;
		MONOSPACE_ENV_CFG_HASH: string;
		COLLAB_YJS_ROOM: string;
		NPM_CONFIG_PREFIX: string;
		IDX_CHANNEL: string;
		IDX_ENV_CONFIG_FILE_PATH: string;
		ACLOCAL_PATH: string;
		MONOSPACE_PREVIEW_CONFIG: string;
		USER: string;
		TZDIR: string;
		MONOSPACE_RECOVERY_MODE: string;
		NPM_CONFIG_GLOBALCONFIG: string;
		NIX_CFLAGS_LINK: string;
		SHLVL: string;
		ENVIRONMENT_SERVICE_PATH: string;
		NIX_CFLAGS_COMPILE: string;
		LOCALE_ARCHIVE: string;
		PERMANENT_TAG: string;
		MONOSPACE_ON_CREATE_COMMANDS: string;
		LC_CTYPE: string;
		SSL_CERT_FILE: string;
		GOOGLE_CLOUD_WORKSTATIONS: string;
		XDG_DATA_DIRS: string;
		PATH: string;
		IDX_TOKEN_SOCK: string;
		NIX_LDFLAGS: string;
		VSCODE_CWD: string;
		VSCODE_NLS_CONFIG: string;
		VSCODE_HANDLES_SIGPIPE: string;
		VSCODE_AMD_ENTRYPOINT: string;
		VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
		BROWSER: string;
		ELECTRON_RUN_AS_NODE: string;
		VSCODE_IPC_HOOK_CLI: string;
		VSCODE_L10N_BUNDLE_LOCATION: string;
		ELECTRON_NO_ASAR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
