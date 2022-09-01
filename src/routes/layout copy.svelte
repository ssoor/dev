<script>
    import "../tailwind.css";
    /** @type {import('./$types').PageData} */
    export let data;

    console.log(data);
</script>

<div id="root" class="flex flex-col">
    <!-- ====== Navbar Section Start -->
    <header class="navbar h-12 text-sm shadow z-50">
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
            <img src="/_nuxt/img/dbdocs.a91ed98.svg" alt="dbdocs - dbdocs logo" height="25" width="25">
          </a>
          <div class="vr-line"></div>
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
            </button> <a href="/docs/explore" target="_blank"><img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iI0JCQzFDQyI+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTExIDE4aDJ2LTJoLTJ2MnptMS0xNkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDh6bTAtMTRjLTIuMjEgMC00IDEuNzktNCA0aDJjMC0xLjEuOS0yIDItMnMyIC45IDIgMmMwIDItMyAxLjc1LTMgNWgyYzAtMi4yNSAzLTIuNSAzLTUgMC0yLjIxLTEuNzktNC00LTR6Ii8+PC9zdmc+"
                alt="help icon" class="align-middle w-7"></a>
            <div class="exit-btn"><img
                src="data:image/svg+xml;base64,PHN2ZyAKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgCiAgICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgCiAgICBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgCiAgICB3aWR0aD0iMjRweCIgZmlsbD0iI0JCQzFDQyI+CiAgICA8Zz4KICAgICAgICA8cmVjdCBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiLz4KICAgIDwvZz4KICAgIDxnPgogICAgICAgIDxwYXRoIGQ9Ik0xMSw3TDkuNiw4LjRsMi42LDIuNkgydjJoMTAuMmwtMi42LDIuNkwxMSwxN2w1LTVMMTEsN3ogTTIwLDE5aC04djJoOGMxLjEsMCwyLTAuOSwyLTJWNWMwLTEuMS0wLjktMi0yLTJoLTh2Mmg4VjE5eiIvPgogICAgPC9nPgo8L3N2Zz4="
                alt="login icon" class="align-middle w-7"></div>
          </div>
        </div>
      </header>
    <!-- ====== Navbar Section End -->
    <div class="flex-1 flex w-full z-10">
        <nav id="sidebar-quicklinks" class="sidebar flex flex-col bg-grey-lighten-20 sidebar w-72">
            <button type="button" class="button action backdrop"><span class="button-wrap" /></button>
            <div class="search-box">
                <span class="icon-wrap search-icon text-main-lighten-45"><svg aria-hidden="true" focusable="false"
                        data-prefix="fal" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512" class="fa-icon svg-inline--fa fa-search fa-w-16">
                        <path fill="currentColor"
                            d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z"
                            class="" />
                    </svg></span>
                <input type="text" placeholder="Search for tables, fields, notes..." />
            </div>

            <div class="collapse node schema-node">
                <input type="checkbox" class="peer z-50" checked />
                <div class="collapse-title peer-checked:collapse-opened tooltip tooltip-right peer-hover:tooltip-opened" data-tip="hello">
                    <div class="node-title collapse-icon">
                            <span class="text">public</span>
                    </div>
                </div>
                <div class="collapse-content">
                    <div class="collapse node schema-node level-1">
                        <input type="checkbox" class="peer z-50" />
                        <div class="collapse-title peer-checked:collapse-opened tooltip tooltip-right peer-hover:tooltip-opened peer-hover:hovered" data-tip="hello">
                            <div class="node-title collapse-icon">
                                <img src="/dbdocs-table-icon.svg" class="dbdocs-icon icon-wrap fa-icon-dark h-3 pr-1" />
                                <span class="text">users</span>
                            </div>
                        </div>
                    </div>
                    <div class="collapse node schema-node level-1">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title node-title collapse-icon  peer-hover:hovered">
                            <img src="/dbdocs-table-icon.svg" class="dbdocs-icon icon-wrap fa-icon-dark h-3 pr-1" />
                            <span class="text">merchants</span>
                        </div>
                    </div>
                    <div class="collapse node schema-node level-1">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title node-title collapse-icon  peer-hover:hovered">
                            <img src="/dbdocs-table-icon.svg" class="dbdocs-icon icon-wrap fa-icon-dark h-3 pr-1" />
                            <span class="text">countries</span>
                        </div>
                    </div>
                    <div class="collapse node schema-node level-1">
                        <input type="checkbox" class="peer" />
                        <div class="collapse-title node-title collapse-icon peer-hover:hovered">
                            <img src="/dbdocs-table-icon.svg" class="dbdocs-icon icon-wrap fa-icon-dark h-3 pr-1" />
                            <span class="text">order_items</span>
                        </div>
                    </div>

                    <div class="collapse node schema-node level-1">
                        <input type="checkbox" class="peer z-50" checked/>
                        <div class="collapse-title peer-checked:collapse-opened tooltip tooltip-right peer-hover:tooltip-opened peer-hover:hovered selected" data-tip="hello">
                            <div class="node-title collapse-icon">
                                <img src="/dbdocs-table-icon.svg" class="dbdocs-icon icon-wrap fa-icon-dark h-3 pr-1" />
                                <span class="text">products</span>
                            </div>
                        </div>
                        <div class="collapse-content">
                            <div class="collapse node schema-node level-2">
                                <div class="collapse-title node-title peer-hover:hovered">
                                    <img src="/dbdocs-field-icon.svg"
                                        class="dbdocs-icon icon-wrap fa-icon-dark h-3 pr-1" />
                                    <span class="text">id</span>
                                </div>
                            </div>
                            <div class="collapse node schema-node level-2">
                                <div class="collapse-title node-title peer-hover:hovered">
                                    <img src="/dbdocs-field-icon.svg"
                                        class="dbdocs-icon icon-wrap fa-icon-dark h-3 pr-1" />
                                    <span class="text">name</span>
                                </div>
                            </div>
                            <div class="collapse node schema-node level-2">
                                <div class="collapse-title node-title peer-hover:hovered">
                                    <img src="/dbdocs-field-icon.svg"
                                        class="dbdocs-icon icon-wrap fa-icon-dark h-3 pr-1" />
                                    <span class="text">merchant_id</span>
                                </div>
                            </div>
                            <div class="collapse node schema-node level-2">
                                <div class="collapse-title node-title peer-hover:hovered">
                                    <img src="/dbdocs-field-icon.svg"
                                        class="dbdocs-icon icon-wrap fa-icon-dark h-3 pr-1" />
                                    <span class="text">price</span>
                                </div>
                            </div>
                            <div class="collapse node schema-node level-2">
                                <div class="collapse-title node-title peer-hover:hovered">
                                    <img src="/dbdocs-field-icon.svg"
                                        class="dbdocs-icon icon-wrap fa-icon-dark h-3 pr-1" />
                                    <span class="text">status</span>
                                </div>
                            </div>
                            <div class="collapse node schema-node level-2">
                                <div class="collapse-title node-title peer-hover:hovered">
                                    <img src="/dbdocs-field-icon.svg"
                                        class="dbdocs-icon icon-wrap fa-icon-dark h-3 pr-1" />
                                    <span class="text">created_at</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="collapseButton bg-grey-lighten-20 text-main-lighten-45"
                style="--right-offset:-12px; --btn-width:24px; --btn-height:36px;">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" role="img"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                    class="svg-inline--fa fa-chevron-left fa-w-10">
                    <path fill="currentColor"
                        d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
                        class="" />
                </svg>
            </div>
        </nav>
        <div class="toc" style="display: none;">
            <aside class="document-toc-container">
                <section class="document-toc">
                    <header>
                        <h2 class="document-toc-heading">
                            In this article
                        </h2>
                    </header>
                    <ul class="document-toc-list" id="toc-entries">
                        <li class="document-toc-item ">
                            <a class="document-toc-link" href="#主根元素">主根元素</a>
                        </li>
                        <li class="document-toc-item ">
                            <a class="document-toc-link" href="#文档元数据">文档元数据</a>
                        </li>
                        <li class="document-toc-item ">
                            <a class="document-toc-link" href="#分区根元素">分区根元素</a>
                        </li>
                        <li class="document-toc-item ">
                            <a class="document-toc-link" href="#内容分区">内容分区</a>
                        </li>
                        <li class="document-toc-item ">
                            <a class="document-toc-link" href="#文本内容">文本内容</a>
                        </li>
                        <li class="document-toc-item ">
                            <a class="document-toc-link" href="#内联文本语义">内联文本语义</a>
                        </li>
                        <li class="document-toc-item ">
                            <a class="document-toc-link" href="#图片和多媒体">图片和多媒体</a>
                        </li>
                        <li class="document-toc-item ">
                            <a class="document-toc-link" href="#内嵌内容">内嵌内容</a>
                        </li>
                        <li class="document-toc-item ">
                            <a class="document-toc-link" href="#svg_和_mathml">SVG 和 MathML</a>
                        </li>
                        <li class="document-toc-item ">
                            <a class="document-toc-link" href="#脚本">脚本</a>
                        </li>
                        <li class="document-toc-item ">
                            <a class="document-toc-link" href="#编辑标识">编辑标识</a>
                        </li>
                        <li class="document-toc-item ">
                            <a class="document-toc-link" href="#表格内容">表格内容</a>
                        </li>
                        <li class="document-toc-item ">
                            <a class="document-toc-link" href="#表单">表单</a>
                        </li>
                        <li class="document-toc-item ">
                            <a class="document-toc-link" href="#交互元素">交互元素</a>
                        </li>
                        <li class="document-toc-item ">
                            <a class="document-toc-link" href="#web_组件">Web 组件</a>
                        </li>
                        <li class="document-toc-item ">
                            <a class="document-toc-link" href="#过时的和弃用的元素">过时的和弃用的元素</a>
                        </li>
                    </ul>
                </section>
            </aside>
        </div>
        <div id="content" class="project-view-container h-full bg-white border-l border-solid flex-1 min-w-0"
            role="main">
            <div class="table-view flex flex-col w-full h-full virtual-scrollbar-wrapper">

                <div class="pl-12 pr-12 2xl:pr-96">
                    <div class="text-xs breadcrumbs pt-8">
                        <ul>
                            <li>
                                <a>
                                    namnguyenn
                                </a>
                            </li>
                            <li>
                                <a>
                                    first_project
                                </a>
                            </li>
                            <li>
                                <a>
                                    public
                                </a>
                            </li>
                            <li>
                                <a>
                                    <img src="/dbdocs-table-icon.svg" class="inline w-3 h-3 mr-1">
                                    countries
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <slot />
            </div>
        </div>
    </div>
    <footer id="nav-footer" class="page-footer" style="display: none;">
        <div class="page-footer-grid">
            <div class="page-footer-logo-col">
                <a href="/" class="mdn-footer-logo" aria-label="MDN homepage"><svg width="48" height="17"
                        viewBox="0 0 48 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <title id="mdn-footer-logo-svg">MDN logo</title>
                        <path
                            d="M20.04 16.512H15.504V10.416C15.504 9.488 15.344 8.824 15.024 8.424C14.72 8.024 14.264 7.824 13.656 7.824C12.92 7.824 12.384 8.064 12.048 8.544C11.728 9.024 11.568 9.64 11.568 10.392V14.184H13.008V16.512H8.472V10.416C8.472 9.488 8.312 8.824 7.992 8.424C7.688 8.024 7.232 7.824 6.624 7.824C5.872 7.824 5.336 8.064 5.016 8.544C4.696 9.024 4.536 9.64 4.536 10.392V14.184H6.6V16.512H0V14.184H1.44V8.04H0.024V5.688H4.536V7.32C5.224 6.088 6.32 5.472 7.824 5.472C8.608 5.472 9.328 5.664 9.984 6.048C10.64 6.432 11.096 7.016 11.352 7.8C11.992 6.248 13.168 5.472 14.88 5.472C15.856 5.472 16.72 5.776 17.472 6.384C18.224 6.992 18.6 7.936 18.6 9.216V14.184H20.04V16.512Z"
                            fill="currentColor" />
                        <path
                            d="M33.6714 16.512H29.1354V14.496C28.8314 15.12 28.3834 15.656 27.7914 16.104C27.1994 16.536 26.4154 16.752 25.4394 16.752C24.0154 16.752 22.8954 16.264 22.0794 15.288C21.2634 14.312 20.8554 12.984 20.8554 11.304C20.8554 9.688 21.2554 8.312 22.0554 7.176C22.8554 6.04 24.0634 5.472 25.6794 5.472C26.5594 5.472 27.2794 5.648 27.8394 6C28.3994 6.352 28.8314 6.8 29.1354 7.344V2.352H26.9754V0H32.2314V14.184H33.6714V16.512ZM29.1354 11.04V10.776C29.1354 9.88 28.8954 9.184 28.4154 8.688C27.9514 8.176 27.3674 7.92 26.6634 7.92C25.9754 7.92 25.3674 8.176 24.8394 8.688C24.3274 9.2 24.0714 10.008 24.0714 11.112C24.0714 12.152 24.3114 12.944 24.7914 13.488C25.2714 14.032 25.8394 14.304 26.4954 14.304C27.3114 14.304 27.9514 13.96 28.4154 13.272C28.8954 12.584 29.1354 11.84 29.1354 11.04Z"
                            fill="currentColor" />
                        <path
                            d="M47.9589 16.512H41.9829V14.184H43.4229V10.416C43.4229 9.488 43.2629 8.824 42.9429 8.424C42.6389 8.024 42.1829 7.824 41.5749 7.824C40.8389 7.824 40.2709 8.056 39.8709 8.52C39.4709 8.968 39.2629 9.56 39.2469 10.296V14.184H40.6869V16.512H34.7109V14.184H36.1509V8.04H34.5909V5.688H39.2469V7.344C39.9669 6.096 41.1269 5.472 42.7269 5.472C43.7509 5.472 44.6389 5.776 45.3909 6.384C46.1429 6.992 46.5189 7.936 46.5189 9.216V14.184H47.9589V16.512Z"
                            fill="currentColor" />
                    </svg></a>
                <p>Your blueprint for a better internet.</p>
                <ul class="social-icons">
                    <li>
                        <a class="icon icon-twitter" href="https://twitter.com/mozdevnet" target="_blank"
                            rel="noopener noreferrer"><span class="visually-hidden">MDN on Twitter</span></a>
                    </li>
                    <li>
                        <a class="icon icon-github-mark-small" href="https://github.com/mdn/" target="_blank"
                            rel="noopener noreferrer"><span class="visually-hidden">MDN on GitHub</span></a>
                    </li>
                </ul>
            </div>
            <div class="page-footer-nav-col-1">
                <h2 class="footer-nav-heading">MDN</h2>
                <ul class="footer-nav-list">
                    <li class="footer-nav-item">
                        <a href="/en-US/about">About</a>
                    </li>
                    <li class="footer-nav-item">
                        <a href="https://hacks.mozilla.org/" target="_blank" rel="noopener noreferrer">Hacks Blog</a>
                    </li>
                    <li class="footer-nav-item">
                        <a href="https://www.mozilla.org/en-US/careers/listings/?team=Marketing" target="_blank"
                            rel="noopener noreferrer">Careers</a>
                    </li>
                </ul>
            </div>
            <div class="page-footer-nav-col-2">
                <h2 class="footer-nav-heading">Support</h2>
                <ul class="footer-nav-list">
                    <li class="footer-nav-item">
                        <a class="footer-nav-link" href="https://support.mozilla.org/products/mdn-plus">Product help</a>
                    </li>
                    <li class="footer-nav-item">
                        <a class="footer-nav-link"
                            href="/en-US/docs/MDN/Contribute/Feedback#documentation_issues">Report a page issue</a>
                    </li>
                    <li class="footer-nav-item">
                        <a class="footer-nav-link" href="/en-US/docs/MDN/Contribute/Feedback#site_issues">Report a site
                            issue</a>
                    </li>
                </ul>
            </div>
            <div class="page-footer-nav-col-3">
                <h2 class="footer-nav-heading">Our communities</h2>
                <ul class="footer-nav-list">
                    <li class="footer-nav-item">
                        <a class="footer-nav-link" href="/en-US/community">MDN Community</a>
                    </li>
                    <li class="footer-nav-item">
                        <a class="footer-nav-link" href="https://discourse.mozilla.org/c/mdn/236" target="_blank"
                            rel="noopener noreferrer">MDN Forum</a>
                    </li>
                    <li class="footer-nav-item">
                        <a class="footer-nav-link" href="https://wiki.mozilla.org/Matrix" target="_blank"
                            rel="noopener noreferrer">MDN Chat</a>
                    </li>
                </ul>
            </div>
            <div class="page-footer-nav-col-4">
                <h2 class="footer-nav-heading">Developers</h2>
                <ul class="footer-nav-list">
                    <li class="footer-nav-item">
                        <a class="footer-nav-link" href="/en-US/docs/Web">Web Technologies</a>
                    </li>
                    <li class="footer-nav-item">
                        <a class="footer-nav-link" href="/en-US/docs/Learn">Learn Web Development</a>
                    </li>
                    <li class="footer-nav-item">
                        <a class="footer-nav-link" href="/en-US/plus">MDN Plus</a>
                    </li>
                </ul>
            </div>
            <div class="page-footer-moz">
                <a href="https://www.mozilla.org/" class="footer-moz-logo-link" target="_blank"
                    rel="noopener noreferrer"><svg width="112" height="32" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <title id="mozilla-footer-logo-svg">Mozilla logo</title>
                        <path
                            d="M41.753 14.218c-2.048 0-3.324 1.522-3.324 4.157 0 2.423 1.119 4.286 3.29 4.286 2.082 0 3.447-1.678 3.447-4.347 0-2.826-1.522-4.096-3.413-4.096Zm54.89 7.044c0 .901.437 1.618 1.645 1.618 1.427 0 2.949-1.024 3.044-3.352-.649-.095-1.365-.185-2.02-.185-1.426-.005-2.668.397-2.668 1.92Z"
                            fill="currentColor" />
                        <path
                            d="M0 0v32h111.908V0H0Zm32.56 25.426h-5.87v-7.884c0-2.423-.806-3.352-2.39-3.352-1.924 0-2.702 1.365-2.702 3.324v4.868h1.864v3.044h-5.864v-7.884c0-2.423-.806-3.352-2.39-3.352-1.924 0-2.702 1.365-2.702 3.324v4.868h2.669v3.044H6.642v-3.044h1.863v-7.918H6.642V11.42h5.864v2.11c.839-1.489 2.3-2.39 4.252-2.39 2.02 0 3.878.963 4.566 3.01.778-1.862 2.361-3.01 4.566-3.01 2.512 0 4.812 1.522 4.812 4.84v6.402h1.863v3.044h-.005Zm9.036.307c-4.314 0-7.296-2.635-7.296-7.106 0-4.096 2.484-7.481 7.514-7.481s7.481 3.38 7.481 7.29c0 4.472-3.228 7.297-7.699 7.297Zm22.578-.307H51.942l-.403-2.11 7.7-8.846h-4.376l-.621 2.17-2.888-.313.498-4.907h12.294l.313 2.11-7.767 8.852h4.533l.654-2.172 3.167.308-.872 4.908Zm7.99 0h-4.191v-5.03h4.19v5.03Zm0-8.976h-4.191v-5.03h4.19v5.03Zm2.618 8.976 6.054-21.358h3.945l-6.054 21.358h-3.945Zm8.136 0 6.048-21.358h3.945l-6.054 21.358h-3.939Zm21.486.307c-1.863 0-2.887-1.085-3.072-2.792-.805 1.427-2.232 2.792-4.498 2.792-2.02 0-4.314-1.085-4.314-4.006 0-3.447 3.323-4.253 6.518-4.253.778 0 1.584.034 2.3.124v-.465c0-1.427-.034-3.133-2.3-3.133-.84 0-1.488.061-2.143.402l-.453 1.578-3.195-.34.549-3.224c2.45-.996 3.692-1.27 5.992-1.27 3.01 0 5.556 1.55 5.556 4.75v6.083c0 .805.314 1.085.963 1.085.184 0 .375-.034.587-.095l.034 2.11a5.432 5.432 0 0 1-2.524.654Z"
                            fill="currentColor" />
                    </svg></a>
                <ul class="footer-moz-list">
                    <li class="footer-moz-item">
                        <a href="https://www.mozilla.org/privacy/websites/" class="footer-moz-link" target="_blank"
                            rel="noopener noreferrer">Website Privacy Notice</a>
                    </li>
                    <li class="footer-moz-item">
                        <a href="https://www.mozilla.org/privacy/websites/#cookies" class="footer-moz-link"
                            target="_blank" rel="noopener noreferrer">Cookies</a>
                    </li>
                    <li class="footer-moz-item">
                        <a href="https://www.mozilla.org/about/legal/terms/mozilla" class="footer-moz-link"
                            target="_blank" rel="noopener noreferrer">Legal</a>
                    </li>
                    <li class="footer-moz-item">
                        <a href="https://www.mozilla.org/about/governance/policies/participation/"
                            class="footer-moz-link" target="_blank" rel="noopener noreferrer">Community Participation
                            Guidelines</a>
                    </li>
                </ul>
            </div>
            <div class="page-footer-legal">
                <p id="license" class="page-footer-legal-text">
                    Visit
                    <!-- -->
                    <a href="https://www.mozilla.org" target="_blank" rel="noopener noreferrer">Mozilla
                        Corporation’s</a>
                    <!-- -->not-for-profit parent, the
                    <!-- -->
                    <a target="_blank" rel="noopener noreferrer" href="https://foundation.mozilla.org/">Mozilla
                        Foundation</a>.<br />Portions of this content are ©1998–
                    <!-- -->2022
                    <!-- --> by individual mozilla.org contributors. Content available
                    under
                    <!-- -->
                    <a href="/docs/MDN/About#Copyrights_and_licenses">a Creative Commons license</a>.
                </p>
            </div>
        </div>
    </footer>
</div>