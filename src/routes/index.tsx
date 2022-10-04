import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h1>
        Welcome to Qwik SAP fundamental-styles <span class="lightning">⚡️</span>
      </h1>

      <ul>
        <li role="listitem" class="fd-list__item fd-list__item--action">
          Check out the <code>src/routes</code> directory to get started.
        </li>
        <li role="listitem" class="fd-list__item fd-list__item--action">
          Add integrations with <code>npm run qwik add</code>.
        </li>
        <li>
          More info about development in <code>README.md</code>
        </li>
      </ul>
      <button class="fd-button"   >
      <span class="fd-button__text">Cozy Badge Button</span>
    <span class="fd-button__badge">3984</span>
      </button>
      <h2>Commands</h2>

      <table class="commands">
        <tr>
          <td>
            <code>npm run dev</code>
          </td>
          <td>Start the dev server and watch for changes.</td>
        </tr>
        <tr>
          <td>
            <code>npm run preview</code>
          </td>
          <td>Production build and start preview server.</td>
        </tr>
        <tr>
          <td>
            <code>npm run build</code>
          </td>
          <td>Production build.</td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add</code>
          </td>
          <td>Select an integration to add.</td>
        </tr>
      </table>

      <h2>Add Integrations</h2>

      <table class="commands">
        <tr>
          <td>
            <code>npm run qwik add cloudflare-pages</code>
          </td>
          <td>
            <a class="fd-link"  href="https://developers.cloudflare.com/pages" target="_blank">
              Cloudflare Pages Server
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add express</code>
          </td>
          <td>
            <a class="fd-link" href="https://expressjs.com/" target="_blank">
              Nodejs Express Server
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add netlify-edge</code>
          </td>
          <td>
            <a class="fd-link"  href="https://docs.netlify.com/" target="_blank">
              Netlify Edge Functions
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <code>npm run qwik add static-node</code>
          </td>
          <td>
            <a class="fd-link" 
              href="https://qwik.builder.io/qwikcity/static-site-generation/overview/"
              target="_blank"
            >
              Static Site Generation (SSG)
            </a>
          </td>
        </tr>
      </table>

      <h2>Community</h2>

      <ul  class="fd-list" role="list">
        <li  role="listitem" class="fd-list__item fd-list__item--action">
          <span>Questions or just want to say hi? </span>
          <a class="fd-link" href="https://qwik.builder.io/chat" target="_blank">
            Chat on discord!
          </a>
        </li>
        <li  role="listitem" class="fd-list__item fd-list__item--action">
          <span>Follow </span>
          <a class="fd-link" href="https://twitter.com/QwikDev" target="_blank">
            @QwikDev
          </a>
          <span> on Twitter</span>
        </li>
        <li  role="listitem" class="fd-list__item fd-list__item--action">
          <span>Open issues and contribute on </span>
          <a class="fd-link" href="https://github.com/BuilderIO/qwik" target="_blank">
            Github
          </a>
        </li>
      </ul>
      <Link class="fd-link"  href="/flower">
        Blow my mind 🤯
      </Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
