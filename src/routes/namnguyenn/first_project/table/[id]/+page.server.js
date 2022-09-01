import { error } from '@sveltejs/kit';

/** @type {import('../../../../../../.svelte-kit/types/src/routes/$types').PageServerLoad} */
export async function load({parent,params}) {
  let layoutData = await parent();

  console.log({entity: layoutData._entitys[params.id]}) 
  return {entity: layoutData._entitys[params.id]}

  return {
    entity: {
      "attributes": [
        {
          "code": "auto_respond_content_id",
          "comment": "自动回复内容id",
          "id": "o355",
          "name": "自动回复内容id",
          "type": {
            "code": "char",
            "length": 36,
            "name": "char",
            "type": "string"
          }
        },
        {
          "code": "auto_respond_id",
          "id": "o356",
          "name": "自动回复id",
          "type": {
            "code": "char",
            "length": 36,
            "name": "char",
            "type": "string"
          }
        },
        {
          "code": "type",
          "comment": "类型。1. 图片；2. 小程序；3. H5；4.视频；5. 文件；6.音频；7.文本；",
          "id": "o357",
          "name": "类型",
          "type": {
            "name": "tinyint",
            "type": "number"
          }
        },
        {
          "code": "text_content",
          "comment": "文本",
          "id": "o358",
          "name": "文本",
          "type": {
            "code": "varchar",
            "length": 500,
            "name": "varchar",
            "type": "string"
          }
        },
        {
          "code": "img_path",
          "comment": "图片 oss path",
          "id": "o359",
          "name": "图片 oss path",
          "type": {
            "code": "varchar",
            "length": 500,
            "name": "varchar",
            "type": "string"
          }
        },
        {
          "code": "h5_href",
          "comment": "H5链接",
          "id": "o360",
          "name": "H5链接",
          "type": {
            "code": "varchar",
            "length": 500,
            "name": "varchar",
            "type": "string"
          }
        },
        {
          "code": "h5_title",
          "comment": "H5标题",
          "id": "o361",
          "name": "H5标题",
          "type": {
            "code": "varchar",
            "length": 50,
            "name": "varchar",
            "type": "string"
          }
        },
        {
          "code": "h5_description",
          "comment": "H5描述",
          "id": "o362",
          "name": "H5描述",
          "type": {
            "code": "varchar",
            "length": 50,
            "name": "varchar",
            "type": "string"
          }
        },
        {
          "code": "h5_cover_path",
          "comment": "H5封面 oss path",
          "id": "o363",
          "name": "H5封面 oss path",
          "type": {
            "code": "varchar",
            "length": 500,
            "name": "varchar",
            "type": "string"
          }
        },
        {
          "code": "video_path",
          "comment": "视频 oss path",
          "id": "o364",
          "name": "视频 oss path",
          "type": {
            "code": "varchar",
            "length": 500,
            "name": "varchar",
            "type": "string"
          }
        },
        {
          "code": "file_path",
          "comment": "文件 oss path",
          "id": "o365",
          "name": "文件 oss path",
          "type": {
            "code": "varchar",
            "length": 500,
            "name": "varchar",
            "type": "string"
          }
        },
        {
          "code": "audio_path",
          "comment": "音频 oss path",
          "id": "o366",
          "name": "音频 oss path",
          "type": {
            "code": "varchar",
            "length": 500,
            "name": "varchar",
            "type": "string"
          }
        },
        {
          "code": "is_custom_miniprogram",
          "comment": "是否自定义小程序。否则是选择已有的",
          "id": "o367",
          "name": "是否自定义小程序",
          "type": {
            "length": 1,
            "name": "tinyint",
            "type": "number"
          }
        },
        {
          "code": "miniprogram_title",
          "comment": "小程序标题",
          "id": "o368",
          "name": "小程序标题",
          "type": {
            "code": "varchar",
            "length": 50,
            "name": "varchar",
            "type": "string"
          }
        },
        {
          "code": "miniprogram_appid",
          "comment": "小程序AppId。（非自定义时，用于选中已有的）",
          "id": "o369",
          "name": "小程序AppId",
          "type": {
            "code": "varchar",
            "length": 50,
            "name": "varchar",
            "type": "string"
          }
        },
        {
          "code": "miniprogram_page_group",
          "comment": "选择已有小程序时的页面分类",
          "id": "o370",
          "name": "选择已有小程序时的页面分类",
          "type": {
            "code": "varchar",
            "length": 50,
            "name": "varchar",
            "type": "string"
          }
        },
        {
          "code": "miniprogram_page_name",
          "comment": "选择已有小程序时的页面名称",
          "id": "o371",
          "name": "选择已有小程序时的页面名称",
          "type": {
            "code": "varchar",
            "length": 50,
            "name": "varchar",
            "type": "string"
          }
        },
        {
          "code": "miniprogram_url",
          "comment": "小程序路径",
          "id": "o372",
          "name": "小程序路径",
          "type": {
            "code": "varchar",
            "length": 500,
            "name": "varchar",
            "type": "string"
          }
        },
        {
          "code": "miniprogram_pic_path",
          "comment": "小程序封面 oss path",
          "id": "o373",
          "name": "小程序封面 oss path",
          "type": {
            "code": "varchar",
            "length": 500,
            "name": "varchar",
            "type": "string"
          }
        },
        {
          "code": "created_at",
          "comment": "记录创建时间",
          "id": "o374",
          "name": "created_at",
          "type": {
            "name": "datetime",
            "type": "datatime"
          }
        },
        {
          "code": "modified_at",
          "comment": "记录修改时间",
          "id": "o375",
          "name": "modified_at",
          "type": {
            "name": "datetime",
            "type": "datatime"
          }
        }
      ],
      "code": "auto_respond_content",
      "comment": "自动回复",
      "id": "o287",
      "name": "自动回复内容(auto_respond_content)"
    }
  }
  throw error(404, 'Not found');
}