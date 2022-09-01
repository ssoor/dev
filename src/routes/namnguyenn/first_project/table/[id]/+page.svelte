<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div class="flex-auto h-0 pt-6 pr-12 2xl:pr-48 pl-12">

    <div class="mb-12">
        <div class="font-bold text-main-lighten-5">
            <div class="flex items-center">
                <img src="/dbdocs-table-icon.svg" class="inline w-5" />
                <div class="ml-3">{data.entity.name}</div>
                <!-- <div class="ml-3">{data.entity.name}({data.entity.code})</div> -->
            </div>
        </div>
        <div class="mt-5 text-xs">
            <div class="flex text-main-lighten-45">
                <div class="w-1/12">创建人</div>
                <div class="w-full text-main-lighten-20 font-semibold">
                    namnguyenn
                </div>
            </div>
        </div>
        <div class="mt-5 text-xs">
            <div class="flex text-main-lighten-45 ">
                <div class="w-1/12">备注</div>
                {#if data.entity.comment}
                <div class="w-full panel-container flex flex-col relative text-xs text-main-lighten-20 leading-relaxed">
                    <div class="note-content">
                        <div class="markdown-content">
                            <p>{data.entity.comment}</p>
                        </div>
                    </div>
                    <!---->
                </div>
                {/if}
            </div>

            <!---->
        </div>
    </div>
    <div class="collapse w-full text-xs -ml-3 mb-12">
        <input type="checkbox" class="peer" checked />
        <div
            class="collapse-title collapse-icon-3 peer-checked:collapse-icon-open px-3 text-main-lighten-5 font-bold text-base mb-2 flex items-center cursor-pointer">
            <span>字段 (5)</span>
        </div>
        <div class="collapse-content ">
            <table class="w-full text-left table-fixed JColResizer" id="JColResizer0">
                <thead>
                    <tr>
                        <th class="border-b border-solid border-grey-lighten-15 hover:bg-grey-lighten-20"
                            style="width: 207.438px;">
                            <div class="p-3 font-semibold capitalize text-main-lighten-5">
                                标识符
                                <!---->
                            </div>
                        </th>
                        <th class="border-b border-solid border-grey-lighten-15 hover:bg-grey-lighten-20"
                            style="width: 157.438px;">
                            <div class="p-3 font-semibold capitalize text-main-lighten-5">
                                名称
                                <!---->
                            </div>
                        </th>
                        <th class="border-b border-solid border-grey-lighten-15 hover:bg-grey-lighten-20"
                            style="width: 157.438px;">
                            <div class="p-3 font-semibold capitalize text-main-lighten-5">
                                类型
                                <!---->
                            </div>
                        </th>
                        <th class="border-b border-solid border-grey-lighten-15 hover:bg-grey-lighten-20"
                            style="width: 157.438px;">
                            <div class="p-3 font-semibold capitalize text-main-lighten-5">
                                约束
                                <!---->
                            </div>
                        </th>
                        <th class="border-b border-solid border-grey-lighten-15 hover:bg-grey-lighten-20"
                            style="width: 254.891px;">
                            <div class="p-3 font-semibold capitalize text-main-lighten-5">
                                关系
                                <!---->
                            </div>
                        </th>
                        <th class="border-b border-solid border-grey-lighten-15 hover:bg-grey-lighten-20"
                            style="width: 455.781px;">
                            <div class="p-3 font-semibold capitalize text-main-lighten-5">
                                默认值 &amp; 备注
                                <div class="v-popover ml-1 inline align-top">
                                    <div aria-describedby="popover_svfyzpt3ce" class="trigger"
                                        style="display: inline-block;">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="markdown"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                                            class="text-lg cursor-pointer text-main-lighten-45 hover:text-primary-darken-25 svg-inline--fa fa-markdown fa-w-20">
                                            <path fill="currentColor"
                                                d="M593.8 59.1H46.2C20.7 59.1 0 79.8 0 105.2v301.5c0 25.5 20.7 46.2 46.2 46.2h547.7c25.5 0 46.2-20.7 46.1-46.1V105.2c0-25.4-20.7-46.1-46.2-46.1zM338.5 360.6H277v-120l-61.5 76.9-61.5-76.9v120H92.3V151.4h61.5l61.5 76.9 61.5-76.9h61.5v209.2zm135.3 3.1L381.5 256H443V151.4h61.5V256H566z"
                                                class="" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {#each data.entity.attributes as attribute}
                    <tr class="">
                        <td class="border-b border-solid border-grey-lighten-15 align-top">
                            <div class="text-main-lighten-5 font-semibold px-3 py-2 truncate">
                                {attribute.code}
                            </div>
                        </td>
                        <td class="border-b border-solid border-grey-lighten-15 align-top">
                            <div class="text-main-lighten-20 px-3 py-2">
                                {attribute.name}
                            </div>
                        </td>
                        <td class="border-b border-solid border-grey-lighten-15 align-top">
                            <div class="text-main-lighten-20 px-3 py-2">
                                <div class="truncate">{attribute.type.name}</div>
                            </div>
                        </td>
                        <td class="border-b border-solid border-grey-lighten-15 align-top">
                            <div class="column-setting flex flex-wrap content-between px-3 pt-1.5">
                                <!-- {#if attribute.type.length}
                                <span class="mr-2 mb-1.5 truncate">
                                    <div
                                        class="py-0.5 px-1.5 bg-primary-lighten-50 rounded font-semibold text-primary-lighten-15 text-xs">
                                        <div class="flex items-center">
                                            <img src="/_nuxt/img/key.851f373.svg" alt="key icon" class="inline w-3" />
                                            <span class="uppercase ml-1 truncate">pk</span>
                                        </div>
                                    </div>
                                </span>
                                {/if} -->
                                {#if attribute.type.length}
                                <span class="mr-2 mb-1.5 truncate">
                                    <div
                                        class="py-0.5 px-1.5 bg-grey-lighten-15 rounded font-semibold text-main-lighten-20 text-xs truncate">
                                        自定义约束
                                    </div>
                                </span>
                                {/if}
                            </div>
                        </td>
                        <td class="border-b border-solid border-grey-lighten-15 align-top">
                            <div class="text-main-lighten-45 px-3 py-2">
                                <div class="flex hover:text-primary-lighten-15 cursor-pointer truncate">
                                    <div>
                                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" svg-inline="" role="presentation"
                                            focusable="false" tabindex="-1" class="inline w-5 h-4 outline-none">
                                            <circle cx="12.8" cy="30.8" fill="currentColor" r="4.8" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M12.8 30.8a2.4 2.4 0 012.4-2.4h38.4a2.4 2.4 0 110 4.8H15.2a2.4 2.4 0 01-2.4-2.4z"
                                                fill="currentColor" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M52.915 14.72a2.4 2.4 0 01-.035 3.394L40.23 30.51l12.65 12.396a2.4 2.4 0 11-3.36 3.429l-14.4-14.11a2.4 2.4 0 010-3.429l14.4-14.11a2.4 2.4 0 013.395.034z"
                                                fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div class="flex flex-col">
                                        <div>
                                            <a href="/namnguyenn/first_project?field=product_id&amp;table=order_items&amp;schema=public&amp;view=table_structure"
                                                class="ml-1">
                                                order_items.product_id
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <!---->
                            </div>
                        </td>
                        <td class="border-b border-solid border-grey-lighten-15 align-top">
                            <div class="px-3 py-2">
                                <!-- <div class="text-primary-darken-15">
                                    <span class="font-bold">Default: </span>
                                    <span>now()</span>
                                </div> -->
                                {#if attribute.comment}
                                <div
                                    class="panel-container flex flex-col relative text-xs text-main-lighten-20 leading-relaxed">
                                    <div class="note-content">
                                        <div class="markdown-content">
                                            <p>{attribute.comment}</p>
                                        </div>
                                    </div>
                                    <!---->
                                </div>
                                {/if}
                            </div>
                        </td>
                    </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
    <div class="collapse w-full text-xs -ml-3 mb-12">
        <input type="checkbox" class="peer" checked />
        <div
            class="collapse-title collapse-icon-3 peer-checked:collapse-icon-open px-3 text-main-lighten-5 font-bold text-base mb-2 flex items-center cursor-pointer">
            <span>关系 (2)</span>
        </div>
        <div class="collapse-content ">
            <table class="w-full text-left table-fixed JColResizer" id="JColResizer1">
                <thead>
                    <tr>
                        <th class="border-b border-solid border-grey-lighten-15 hover:bg-grey-lighten-20"
                            style="width: 207.438px;">
                            <div class="p-3 font-semibold capitalize text-main-lighten-5">
                                字段
                            </div>
                        </th>
                        <th class="border-b border-solid border-grey-lighten-15 hover:bg-grey-lighten-20"
                            style="width: 276.594px;">
                            <div class="p-3 font-semibold capitalize text-main-lighten-5">
                                名称
                            </div>
                        </th>
                        <th class="border-b border-solid border-grey-lighten-15 hover:bg-grey-lighten-20"
                            style="width: 207.438px;">
                            <div class="p-3 font-semibold capitalize text-main-lighten-5">
                                类型
                            </div>
                        </th>
                        <th class="border-b border-solid border-grey-lighten-15 hover:bg-grey-lighten-20"
                            style="width: 691.531px;">
                            <div class="p-3 font-semibold capitalize text-main-lighten-5">
                                特性
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="">
                        <td class="border-b border-solid border-grey-lighten-15 align-top">
                            <div class="text-main-lighten-5 font-semibold px-3 py-2 truncate">
                                <span><span>merchant_id</span>
                                    <span>,&nbsp;</span></span><span><span>status</span>
                                    <!---->
                                </span>
                            </div>
                        </td>
                        <td class="border-b border-solid border-grey-lighten-15 align-top">
                            <div class="px-3 py-2 text-main-lighten-20 truncate">
                                product_status
                            </div>
                        </td>
                        <td class="border-b border-solid border-grey-lighten-15 align-top">
                            <!---->
                        </td>
                        <td class="border-b border-solid border-grey-lighten-15 align-top">
                            <div class="column-setting flex flex-wrap content-between px-3 py-2" />
                        </td>
                    </tr>
                    <tr class="">
                        <td class="border-b border-solid border-grey-lighten-15 align-top">
                            <div class="text-main-lighten-5 font-semibold px-3 py-2 truncate">
                                <span><span>id</span>
                                    <!---->
                                </span>
                            </div>
                        </td>
                        <td class="border-b border-solid border-grey-lighten-15 align-top">
                            <!---->
                        </td>
                        <td class="border-b border-solid border-grey-lighten-15 align-top">
                            <!---->
                        </td>
                        <td class="border-b border-solid border-grey-lighten-15 align-top">
                            <div class="column-setting flex flex-wrap content-between px-3 py-2">
                                <span class="mr-2 mb-1.5 truncate">
                                    <div
                                        class="py-0.5 px-1.5 bg-grey-lighten-15 rounded font-semibold text-main-lighten-20 text-xs truncate">
                                        unique
                                    </div>
                                </span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!---->
    <div class="collapse -ml-3 mb-12">
        <input type="checkbox" class="peer" checked />
        <div id="table-reference-diagram"
            class="collapse-title collapse-icon-3 peer-checked:collapse-icon-open px-3 text-main-lighten-5 font-bold text-base mb-2 flex items-center cursor-pointer">
            <span>表关系</span>
        </div>
        <div class="collapse-content ">
            <div class="px-3">
                <div class="border rounded flex justify-center relative">
                    <!---->
                    <div id="export-diagram-btn" class="export-diagram-btn export-btn">
                        <div class="dropdown">
                            <div class="v-popover">
                                <div aria-describedby="popover_l77cxpcwpv" class="trigger"
                                    style="display: inline-block;">
                                    <div class="icon text-main-lighten-45 hover:text-main-lighten-5">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                            class="download-icon svg-inline--fa fa-download fa-w-16">
                                            <path fill="currentColor"
                                                d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                                                class="" />
                                        </svg>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                            data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 320 512"
                                            class="angle-down-icon svg-inline--fa fa-angle-down fa-w-10">
                                            <path fill="currentColor"
                                                d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
                                                class="" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="info-icon-tooltips">
                        <div class="v-popover">
                            <div aria-describedby="popover_46rmsv3z9m" class="trigger" style="display: inline-block;">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="save" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                    class="text-main-lighten-45 hover:text-main-lighten-5 svg-inline--fa fa-save fa-w-14">
                                    <path fill="currentColor"
                                        d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"
                                        class="" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <button class="expand-btn"><svg aria-hidden="true" focusable="false" data-prefix="fal"
                            data-icon="expand-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                            class="fa-icon svg-inline--fa fa-expand-alt fa-w-14">
                            <path fill="currentColor"
                                d="M198.829 275.515l5.656 5.656c4.686 4.686 4.686 12.284 0 16.971L54.627 448H116c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V364c0-6.627 5.373-12 12-12h8c6.627 0 12 5.373 12 12v61.373l149.858-149.858c4.687-4.687 12.285-4.687 16.971 0zM436 32H332c-6.627 0-12 5.373-12 12v8c0 6.627 5.373 12 12 12h61.373L243.515 213.858c-4.686 4.686-4.686 12.284 0 16.971l5.656 5.656c4.686 4.686 12.284 4.686 16.971 0L416 86.627V148c0 6.627 5.373 12 12 12h8c6.627 0 12-5.373 12-12V44c0-6.627-5.373-12-12-12z"
                                class="" />
                        </svg></button>
                    <div class="diagram-container h-normal">
                        <div class="diagram-container">
                            <div class="diagram" style="background-color: rgb(251, 251, 251);">
                                <div class="konvajs-content" role="presentation"
                                    style="position: relative; user-select: none; width: 1369px; height: 480px;">
                                    <canvas width="1369" height="480"
                                        style="padding: 0px; margin: 0px; border: 0px; background: transparent; position: absolute; top: 0px; left: 0px; width: 1369px; height: 480px; display: block;" /><canvas
                                        width="1369" height="480"
                                        style="padding: 0px; margin: 0px; border: 0px; background: transparent; position: absolute; top: 0px; left: 0px; width: 1369px; height: 480px; display: block;" /><canvas
                                        width="1369" height="480"
                                        style="padding: 0px; margin: 0px; border: 0px; background: transparent; position: absolute; top: 0px; left: 0px; width: 1369px; height: 480px; display: block;" /><canvas
                                        width="1369" height="480"
                                        style="padding: 0px; margin: 0px; border: 0px; background: transparent; position: absolute; top: 0px; left: 0px; width: 1369px; height: 480px; display: block;" /><canvas
                                        width="1369" height="480"
                                        style="padding: 0px; margin: 0px; border: 0px; background: transparent; position: absolute; top: 0px; left: 0px; width: 1369px; height: 480px; display: block;" />
                                </div>
                            </div>
                            <div class="controller-container" style="--display-controller:flex;">
                                <div class="controller light">
                                    <label class="scale-value">100%</label>
                                    <div class="vue-slider vue-slider-ltr" default="default"
                                        style="padding: 7px 0px; width: 50px; height: 8px;">
                                        <div class="vue-slider-rail">
                                            <div class="vue-slider-process"
                                                style="height: 100%; top: 0px; left: 0%; width: 62.963%; transition-property: width, left; transition-duration: 0.5s;" />
                                            <div aria-valuetext="1" class="vue-slider-dot" role="slider"
                                                aria-valuenow="1" aria-valuemin="0.15" aria-valuemax="1.5"
                                                aria-orientation="horizontal" tabindex="0"
                                                style="width: 14px; height: 14px; transform: translate(-50%, -50%); top: 50%; left: 62.963%; transition: left 0.5s ease 0s;">
                                                <div class="vue-slider-dot-handle"
                                                    style="background: rgb(52, 152, 219); box-shadow: none; border: 1px solid white;" />
                                            </div>
                                        </div>
                                    </div>
                                    <button> Focus </button>
                                    <button> Auto-arrange </button>
                                    <button>Highlight</button>
                                    <label class="vue-js-switch"><input type="checkbox" class="v-switch-input" />
                                        <div class="v-switch-core"
                                            style="width: 28px; height: 16px; background-color: rgb(204, 204, 204); border-radius: 8px;">
                                            <div class="v-switch-button"
                                                style="width: 10px; height: 10px; transition: transform 300ms ease 0s; transform: translate3d(3px, 3px, 0px);" />
                                        </div>
                                        <!---->
                                    </label>
                                    <!---->
                                    <!---->
                                </div>
                            </div>
                            <!---->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>