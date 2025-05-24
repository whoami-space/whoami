
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
	export const COLORTERM: string;
	export const WORKSPACE_SERVICE_ACCOUNT_EMAIL: string;
	export const NIX_BUILD_CORES: string;
	export const COREPACK_ENABLE_DOWNLOAD_PROMPT: string;
	export const TERM_PROGRAM_VERSION: string;
	export const configureFlags: string;
	export const mesonFlags: string;
	export const PKG_CONFIG_PATH: string;
	export const PYTHONNOUSERSITE: string;
	export const shell: string;
	export const depsHostHost: string;
	export const NODE: string;
	export const npm_config_ignore_scripts: string;
	export const UV_USE_IO_URING: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_package_scripts_check_watch: string;
	export const STRINGS: string;
	export const npm_package_private: string;
	export const depsTargetTarget: string;
	export const stdenv: string;
	export const npm_config_argv: string;
	export const builder: string;
	export const npm_config_bin_links: string;
	export const MONOSPACE_ENV: string;
	export const npm_config_globalconfig: string;
	export const MONOSPACE_COMMIT_SHA: string;
	export const PWD: string;
	export const npm_package_scripts_postbuild: string;
	export const CAPRA_ENABLED_FEATURES: string;
	export const npm_package_devDependencies__tailwindcss_vite: string;
	export const npm_config_save_prefix: string;
	export const SOURCE_DATE_EPOCH: string;
	export const npm_package_devDependencies_vite: string;
	export const NIX_ENFORCE_NO_NATIVE: string;
	export const npm_package_readmeFilename: string;
	export const NIX_PATH: string;
	export const CUSTOM_ENV_ENABLED: string;
	export const npm_package_devDependencies_flowbite_svelte_icons: string;
	export const npm_package_scripts_build: string;
	export const enableParallelInstalling: string;
	export const FIREBASE_DEPLOY_AGENT: string;
	export const CXX: string;
	export const _: string;
	export const TEMPDIR: string;
	export const system: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const HOST_PATH: string;
	export const npm_package_packageManager: string;
	export const WEB_HOST: string;
	export const enableParallelBuilding: string;
	export const ENABLE_CAPRA_GENKIT_TOKEN_LOGGING: string;
	export const IN_NIX_SHELL: string;
	export const doInstallCheck: string;
	export const buildCommandPath: string;
	export const HOME: string;
	export const NIX_BINTOOLS: string;
	export const enableParallelChecking: string;
	export const COREPACK_ROOT: string;
	export const npm_config_version_git_tag: string;
	export const LANG: string;
	export const npm_package_devDependencies_typescript: string;
	export const LS_COLORS: string;
	export const depsTargetTargetPropagated: string;
	export const COLLAB_WS_URL: string;
	export const npm_config_init_license: string;
	export const npm_package_version: string;
	export const cmakeFlags: string;
	export const npm_package_scripts_prepare: string;
	export const NIX_SSL_CERT_FILE: string;
	export const outputs: string;
	export const npm_config_version_commit_hooks: string;
	export const NIX_STORE: string;
	export const TMPDIR: string;
	export const GIT_ASKPASS: string;
	export const npm_package_devDependencies_flowbite: string;
	export const PROMPT_COMMAND: string;
	export const MONOSPACE_ON_START_COMMANDS: string;
	export const npm_package_pnpm_onlyBuiltDependencies_0: string;
	export const WORKSPACE_SLUG: string;
	export const LD: string;
	export const MONOSPACE_ENV_CFG_HASH: string;
	export const INIT_CWD: string;
	export const READELF: string;
	export const npm_package_devDependencies__sveltejs_adapter_vercel: string;
	export const npm_package_scripts_preview: string;
	export const npm_lifecycle_script: string;
	export const npm_package_description: string;
	export const doCheck: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const npm_config_version_tag_prefix: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const YARN_WRAP_OUTPUT: string;
	export const depsBuildBuild: string;
	export const COLLAB_YJS_ROOM: string;
	export const NPM_CONFIG_PREFIX: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const IDX_CHANNEL: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const IDX_ENV_CONFIG_FILE_PATH: string;
	export const SIZE: string;
	export const propagatedNativeBuildInputs: string;
	export const ACLOCAL_PATH: string;
	export const npm_config_prefix: string;
	export const npm_package_dependencies_rippleui: string;
	export const MONOSPACE_PREVIEW_CONFIG: string;
	export const npm_package_type: string;
	export const strictDeps: string;
	export const USER: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const npm_package_devDependencies__tailwindcss_forms: string;
	export const TZDIR: string;
	export const AR: string;
	export const AS: string;
	export const MONOSPACE_RECOVERY_MODE: string;
	export const TEMP: string;
	export const NPM_CONFIG_GLOBALCONFIG: string;
	export const NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
	export const NIX_CFLAGS_LINK: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const npm_config_version_git_sign: string;
	export const NIX_BUILD_TOP: string;
	export const NM: string;
	export const ENVIRONMENT_SERVICE_PATH: string;
	export const npm_config_version_git_message: string;
	export const NIX_CFLAGS_COMPILE: string;
	export const patches: string;
	export const passAsFile: string;
	export const buildInputs: string;
	export const LOCALE_ARCHIVE: string;
	export const npm_config_user_agent: string;
	export const PERMANENT_TAG: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies_svelte: string;
	export const MONOSPACE_ON_CREATE_COMMANDS: string;
	export const LC_CTYPE: string;
	export const SSL_CERT_FILE: string;
	export const npm_config_strict_ssl: string;
	export const depsBuildTarget: string;
	export const OBJCOPY: string;
	export const npm_package_devDependencies_flowbite_svelte: string;
	export const out: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_devDependencies__tailwindcss_typography: string;
	export const GOOGLE_CLOUD_WORKSTATIONS: string;
	export const STRIP: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const XDG_DATA_DIRS: string;
	export const npm_package_scripts_check: string;
	export const TMP: string;
	export const OBJDUMP: string;
	export const BROWSER: string;
	export const PATH: string;
	export const propagatedBuildInputs: string;
	export const CC: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const NIX_CC: string;
	export const IDX_TOKEN_SOCK: string;
	export const depsBuildTargetPropagated: string;
	export const depsBuildBuildPropagated: string;
	export const NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
	export const npm_config_registry: string;
	export const npm_config_ignore_optional: string;
	export const CONFIG_SHELL: string;
	export const __structuredAttrs: string;
	export const npm_node_execpath: string;
	export const RANLIB: string;
	export const npm_config_engine_strict: string;
	export const NIX_HARDENING_ENABLE: string;
	export const NIX_LDFLAGS: string;
	export const nativeBuildInputs: string;
	export const name: string;
	export const TERM_PROGRAM: string;
	export const depsHostHostPropagated: string;
	export const VSCODE_IPC_HOOK_CLI: string;
	export const npm_config_init_version: string;
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
		COLORTERM: string;
		WORKSPACE_SERVICE_ACCOUNT_EMAIL: string;
		NIX_BUILD_CORES: string;
		COREPACK_ENABLE_DOWNLOAD_PROMPT: string;
		TERM_PROGRAM_VERSION: string;
		configureFlags: string;
		mesonFlags: string;
		PKG_CONFIG_PATH: string;
		PYTHONNOUSERSITE: string;
		shell: string;
		depsHostHost: string;
		NODE: string;
		npm_config_ignore_scripts: string;
		UV_USE_IO_URING: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_package_scripts_check_watch: string;
		STRINGS: string;
		npm_package_private: string;
		depsTargetTarget: string;
		stdenv: string;
		npm_config_argv: string;
		builder: string;
		npm_config_bin_links: string;
		MONOSPACE_ENV: string;
		npm_config_globalconfig: string;
		MONOSPACE_COMMIT_SHA: string;
		PWD: string;
		npm_package_scripts_postbuild: string;
		CAPRA_ENABLED_FEATURES: string;
		npm_package_devDependencies__tailwindcss_vite: string;
		npm_config_save_prefix: string;
		SOURCE_DATE_EPOCH: string;
		npm_package_devDependencies_vite: string;
		NIX_ENFORCE_NO_NATIVE: string;
		npm_package_readmeFilename: string;
		NIX_PATH: string;
		CUSTOM_ENV_ENABLED: string;
		npm_package_devDependencies_flowbite_svelte_icons: string;
		npm_package_scripts_build: string;
		enableParallelInstalling: string;
		FIREBASE_DEPLOY_AGENT: string;
		CXX: string;
		_: string;
		TEMPDIR: string;
		system: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		HOST_PATH: string;
		npm_package_packageManager: string;
		WEB_HOST: string;
		enableParallelBuilding: string;
		ENABLE_CAPRA_GENKIT_TOKEN_LOGGING: string;
		IN_NIX_SHELL: string;
		doInstallCheck: string;
		buildCommandPath: string;
		HOME: string;
		NIX_BINTOOLS: string;
		enableParallelChecking: string;
		COREPACK_ROOT: string;
		npm_config_version_git_tag: string;
		LANG: string;
		npm_package_devDependencies_typescript: string;
		LS_COLORS: string;
		depsTargetTargetPropagated: string;
		COLLAB_WS_URL: string;
		npm_config_init_license: string;
		npm_package_version: string;
		cmakeFlags: string;
		npm_package_scripts_prepare: string;
		NIX_SSL_CERT_FILE: string;
		outputs: string;
		npm_config_version_commit_hooks: string;
		NIX_STORE: string;
		TMPDIR: string;
		GIT_ASKPASS: string;
		npm_package_devDependencies_flowbite: string;
		PROMPT_COMMAND: string;
		MONOSPACE_ON_START_COMMANDS: string;
		npm_package_pnpm_onlyBuiltDependencies_0: string;
		WORKSPACE_SLUG: string;
		LD: string;
		MONOSPACE_ENV_CFG_HASH: string;
		INIT_CWD: string;
		READELF: string;
		npm_package_devDependencies__sveltejs_adapter_vercel: string;
		npm_package_scripts_preview: string;
		npm_lifecycle_script: string;
		npm_package_description: string;
		doCheck: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		npm_config_version_tag_prefix: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		YARN_WRAP_OUTPUT: string;
		depsBuildBuild: string;
		COLLAB_YJS_ROOM: string;
		NPM_CONFIG_PREFIX: string;
		npm_package_devDependencies_svelte_check: string;
		IDX_CHANNEL: string;
		TERM: string;
		npm_package_name: string;
		IDX_ENV_CONFIG_FILE_PATH: string;
		SIZE: string;
		propagatedNativeBuildInputs: string;
		ACLOCAL_PATH: string;
		npm_config_prefix: string;
		npm_package_dependencies_rippleui: string;
		MONOSPACE_PREVIEW_CONFIG: string;
		npm_package_type: string;
		strictDeps: string;
		USER: string;
		VSCODE_GIT_IPC_HANDLE: string;
		npm_package_devDependencies__tailwindcss_forms: string;
		TZDIR: string;
		AR: string;
		AS: string;
		MONOSPACE_RECOVERY_MODE: string;
		TEMP: string;
		NPM_CONFIG_GLOBALCONFIG: string;
		NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
		NIX_CFLAGS_LINK: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		npm_config_version_git_sign: string;
		NIX_BUILD_TOP: string;
		NM: string;
		ENVIRONMENT_SERVICE_PATH: string;
		npm_config_version_git_message: string;
		NIX_CFLAGS_COMPILE: string;
		patches: string;
		passAsFile: string;
		buildInputs: string;
		LOCALE_ARCHIVE: string;
		npm_config_user_agent: string;
		PERMANENT_TAG: string;
		npm_execpath: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies_svelte: string;
		MONOSPACE_ON_CREATE_COMMANDS: string;
		LC_CTYPE: string;
		SSL_CERT_FILE: string;
		npm_config_strict_ssl: string;
		depsBuildTarget: string;
		OBJCOPY: string;
		npm_package_devDependencies_flowbite_svelte: string;
		out: string;
		npm_package_scripts_dev: string;
		npm_package_devDependencies__tailwindcss_typography: string;
		GOOGLE_CLOUD_WORKSTATIONS: string;
		STRIP: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		XDG_DATA_DIRS: string;
		npm_package_scripts_check: string;
		TMP: string;
		OBJDUMP: string;
		BROWSER: string;
		PATH: string;
		propagatedBuildInputs: string;
		CC: string;
		npm_package_devDependencies__sveltejs_kit: string;
		NIX_CC: string;
		IDX_TOKEN_SOCK: string;
		depsBuildTargetPropagated: string;
		depsBuildBuildPropagated: string;
		NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
		npm_config_registry: string;
		npm_config_ignore_optional: string;
		CONFIG_SHELL: string;
		__structuredAttrs: string;
		npm_node_execpath: string;
		RANLIB: string;
		npm_config_engine_strict: string;
		NIX_HARDENING_ENABLE: string;
		NIX_LDFLAGS: string;
		nativeBuildInputs: string;
		name: string;
		TERM_PROGRAM: string;
		depsHostHostPropagated: string;
		VSCODE_IPC_HOOK_CLI: string;
		npm_config_init_version: string;
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
