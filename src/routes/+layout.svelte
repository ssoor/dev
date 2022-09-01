<script>
  import "../app.css";
  import "../tailwind.css";
  import {goto} from '$app/navigation';
import { loop_guard } from "svelte/internal";
  /**
   * @type {{ entitys: { id: string; name: string; code: string; attributes:{ id: string; name: string | undefined; code: string; }[]; }[]; }}
   */
  export let data;
  // console.log(data);
</script>

<div class="root">
  <!-- ====== Navbar Section Start -->
  <header class="navbar py-3 text-sm shadow z-50">
    <div class="navbar-start px-4">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li tabindex="0">
            <a class="justify-between">
              Parent
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </a>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <a href="/" class="mr-4 nuxt-link-active">
        <img src="/_nuxt/img/dbdocs.a91ed98.svg" alt="dbdocs - dbdocs logo" height="25" width="25" />
      </a>
      <div class="vr-line" />
      <a href="/namnguyenn/first_project" aria-current="page"
        class="text-sm font-semibold ml-4 text-main-lighten-5 nuxt-link-exact-active nuxt-link-active">
        <span>first_project</span>
      </a>
    </div>
    <div class="navbar-center">
      <ul class="menu menu-horizontal p-0">
        <li><a class="header-btn selected">Table Structure</a></li>
        <li tabindex="0">
          <a class="header-btn">
            Relationships
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </a>
          <ul class="header-btn p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a class="header-btn">Share</a></li>
      </ul>
    </div>
    <div class="navbar-end px-4">
      <div class="flex items-center justify-end space-x-4">
        <button
          class="lightbox-200962053361448 rounded bg-primary-lighten-15 text-white px-4 py-1 font-semibold feedback-btn">
          Feedback
        </button>
        <a href="/docs/explore" target="_blank"><img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iI0JCQzFDQyI+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTExIDE4aDJ2LTJoLTJ2MnptMS0xNkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6bTAtMTRjLTIuMjEgMC00IDEuNzktNCA0aDJjMC0xLjEuOS0yIDItMnMyIC45IDIgMmMwIDItMyAxLjc1LTMgNWgyYzAtMi4yNSAzLTIuNSAzLTUgMC0yLjIxLTEuNzktNC00LTR6Ii8+PC9zdmc+"
            alt="help icon" class="align-middle w-7" /></a>
        <div class="exit-btn">
          <img
            src="data:image/svg+xml;base64,PHN2ZyAKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgCiAgICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgCiAgICBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgCiAgICB3aWR0aD0iMjRweCIgZmlsbD0iI0JCQzFDQyI+CiAgICA8Zz4KICAgICAgICA8cmVjdCBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0xMSw3TDkuNiw4LjRsMi42LDIuNkgydjJoMTAuMmwtMi42LDIuNkwxMSwxN2w1LTVMMTEsN3ogTTIwLDE5aC04djJoOGMxLjEsMCwyLTAuOSwyLTJWNWMwLTEuMS0wLjktMi0yLTJoLTh2Mmg4VjE5eiIvPgogICAgPC9nPgo8L3N2Zz4="
            alt="login icon" class="align-middle w-7" />
        </div>
      </div>
    </div>
  </header>
  <!-- ====== Navbar Section End -->
  <main class="main">
    <nav class="left sidebar bg-grey-lighten-20 min-w-72 max-w-sm">
      <div class="search-box">
        <span class="icon-wrap search-icon text-main-lighten-45"><svg aria-hidden="true" focusable="false"
            data-prefix="fal" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
            class="fa-icon svg-inline--fa fa-search fa-w-16">
            <path fill="currentColor"
              d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z"
              class="" />
          </svg></span>
        <input type="text" placeholder="Search for tables, fields, notes..." />
      </div>

      <div class="container4">
        <div class="collapse node schema-node">
          <input type="checkbox" class="peer" checked />
          <div class="collapse-title peer-checked:collapse-opened tooltip tooltip-right peer-hover:tooltip-opened"
            data-tip="hello">
            <div class="node-title collapse-icon">
              <span class="text">public</span>
            </div>
          </div>
          <div class="collapse-content">
            {#each data.entitys as entity}
            <div  class=" node schema-node level-1">
              <a href="/namnguyenn/first_project/entity/{entity.id}">
              <!-- <input type="checkbox" class="peer" on:click={() => {goto("/namnguyenn/first_project/entity/"+entity.id);}} /> -->
              <div
                class="flex collapse-title tooltip tooltip-right peer-hover:tooltip-opened peer-hover:hovered {entity.selected}"
                data-tip="hello">
                <div class="collapse-icon" on:click={(e)=>{
                  const ele = e.target.parentElement;
                  if (ele.classList.contains("collapse-opened")) {
                    ele.classList.remove("collapse-opened")
                  }else {
                    ele.classList.add("collapse-opened")
                  }}}>
                </div>
                <div class="node-title">
                  <img alt="img" src="/dbdocs-table-icon.svg" class="dbdocs-icon icon-wrap fa-icon-dark h-3 pr-1" />
                  <span class="text">{entity.code}  </span>
                </div>
                <div style="padding: 3px 0px;">
                  <span class="text-main-lighten-45 mr-2">{entity.name}</span>
                </div>
              </div>
            </a>
              {#if entity.attributes.length != 0}
              <div class="collapse-content">
                {#each entity.attributes as attribute}
                <div class="collapse node schema-node level-2">
                  <div class="collapse-title node-title peer-hover:hovered">
                    <img alt="img" src="/dbdocs-field-icon.svg" class="dbdocs-icon icon-wrap fa-icon-dark h-3 pr-1" />
                    <span class="text">{attribute.code}</span>
                  </div>
                </div>
                {/each}
              </div>
              {/if}
            </div>
            {/each}
          </div>
        </div>
      </div>
      <div class="collapseButton bg-grey-lighten-20 text-main-lighten-45"
        style="--right-offset:-12px; --btn-width:24px; --btn-height:36px;">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-chevron-left fa-w-10">
          <path fill="currentColor"
            d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
            class="" />
        </svg>
      </div>
    </nav>

    <div class="container4">
      <div class="container3">
        <slot />
      </div>
      <!-- <footer class="footer">页脚</footer> -->
    </div>
  </main>
</div>