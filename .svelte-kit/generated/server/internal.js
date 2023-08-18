
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	track_server_fetches: false,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\n\t\t    <!-- update the version number as needed -->\n\t\t\t<script defer src=\"/__/firebase/10.2.0/firebase-app-compat.js\"></script>\n\t\t\t<!-- include only the Firebase features as you need -->\n\t\t\t<script defer src=\"/__/firebase/10.2.0/firebase-auth-compat.js\"></script>\n\t\t\t<script defer src=\"/__/firebase/10.2.0/firebase-database-compat.js\"></script>\n\t\t\t<script defer src=\"/__/firebase/10.2.0/firebase-firestore-compat.js\"></script>\n\t\t\t<script defer src=\"/__/firebase/10.2.0/firebase-functions-compat.js\"></script>\n\t\t\t<script defer src=\"/__/firebase/10.2.0/firebase-messaging-compat.js\"></script>\n\t\t\t<script defer src=\"/__/firebase/10.2.0/firebase-storage-compat.js\"></script>\n\t\t\t<script defer src=\"/__/firebase/10.2.0/firebase-analytics-compat.js\"></script>\n\t\t\t<script defer src=\"/__/firebase/10.2.0/firebase-remote-config-compat.js\"></script>\n\t\t\t<script defer src=\"/__/firebase/10.2.0/firebase-performance-compat.js\"></script>\n\t\t\t<!-- \n\t\t\t  initialize the SDK after all desired features are loaded, set useEmulator to false\n\t\t\t  to avoid connecting the SDK to running emulators.\n\t\t\t-->\n\t\t\t<script defer src=\"/__/firebase/init.js?useEmulator=true\"></script>\n\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width\" />\n\t\t" + head + "\n\t</head>\n\t<body data-sveltekit-preload-data=\"hover\">\n\t\t<div style=\"display: contents\">" + body + "</div>\n\n\t\t<script>\n\t\t\tdocument.addEventListener('DOMContentLoaded', function() {\n\t\t\t  const loadEl = document.querySelector('#load');\n\t\t\t  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥\n\t\t\t  // // The Firebase SDK is initialized and available here!\n\t\t\t  //\n\t\t\t  // firebase.auth().onAuthStateChanged(user => { });\n\t\t\t  // firebase.database().ref('/path/to/ref').on('value', snapshot => { });\n\t\t\t  // firebase.firestore().doc('/foo/bar').get().then(() => { });\n\t\t\t  // firebase.functions().httpsCallable('yourFunction')().then(() => { });\n\t\t\t  // firebase.messaging().requestPermission().then(() => { });\n\t\t\t  // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });\n\t\t\t  // firebase.analytics(); // call to activate\n\t\t\t  // firebase.analytics().logEvent('tutorial_completed');\n\t\t\t  // firebase.performance(); // call to activate\n\t\t\t  //\n\t\t\t  // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥\n\t  \n\t\t\t  try {\n\t\t\t\tlet app = firebase.app();\n\t\t\t\tlet features = [\n\t\t\t\t  'auth', \n\t\t\t\t  'database', \n\t\t\t\t  'firestore',\n\t\t\t\t  'functions',\n\t\t\t\t  'messaging', \n\t\t\t\t  'storage', \n\t\t\t\t  'analytics', \n\t\t\t\t  'remoteConfig',\n\t\t\t\t  'performance',\n\t\t\t\t].filter(feature => typeof app[feature] === 'function');\n\t\t\t\tloadEl.textContent = `Firebase SDK loaded with ${features.join(', ')}`;\n\t\t\t  } catch (e) {\n\t\t\t\tconsole.error(e);\n\t\t\t\tloadEl.textContent = 'Error loading the Firebase SDK, check the console.';\n\t\t\t  }\n\t\t\t});\n\t\t  </script>\n\t</body>\n</html>\n",
		error: ({ status, message }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,\n\t\t\t\t\tUbuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "1awsvx"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
