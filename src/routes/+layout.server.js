// @ts-nocheck
import { error } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ params }) {
    let schemaEntitys = {
        "entityies": [
            {
                "attributes": [
                    {
                        "code": "statistic_id",
                        "id": "468B5FB2-4A1E-4E88-ABD5-A6604E7ED66C",
                        "name": "统计表id",
                        "value": "468B5FB2-4A1E-4E88-ABD5-A6604E7ED66C"
                    },
                    {
                        "code": "task_id",
                        "id": "FB1684FB-7AAD-4C26-83AA-3968E2EDF29D",
                        "name": "任务id",
                        "value": "FB1684FB-7AAD-4C26-83AA-3968E2EDF29D"
                    },
                    {
                        "code": "type",
                        "id": "EEA1B2B3-7D69-4D62-BE71-3E9FD354A82D",
                        "name": "任务类型名称",
                        "value": "EEA1B2B3-7D69-4D62-BE71-3E9FD354A82D"
                    },
                    {
                        "code": "member_name",
                        "id": "CC749AAB-0660-492C-B0BB-094CFC3AB266",
                        "name": "成员姓名",
                        "value": "CC749AAB-0660-492C-B0BB-094CFC3AB266"
                    },
                    {
                        "code": "member_mobile",
                        "id": "920FA209-19A0-40B9-AE16-2A8554D61E29",
                        "name": "成员电话",
                        "value": "920FA209-19A0-40B9-AE16-2A8554D61E29"
                    },
                    {
                        "code": "user_id",
                        "id": "F8F90BD1-20C7-431F-90A8-D65A36A4E647",
                        "name": "成员企微user_id",
                        "value": "F8F90BD1-20C7-431F-90A8-D65A36A4E647"
                    },
                    {
                        "code": "target_quantity",
                        "id": "B8D18CDC-724C-497A-803C-A93F114116FA",
                        "name": "目标数量",
                        "value": "B8D18CDC-724C-497A-803C-A93F114116FA"
                    },
                    {
                        "code": "completion_quantity",
                        "id": "43835545-C1ED-4FE5-81E0-1782685119BE",
                        "name": "目前完成数量",
                        "value": "43835545-C1ED-4FE5-81E0-1782685119BE"
                    },
                    {
                        "code": "is_finish",
                        "comment": "0 否 1 完成",
                        "id": "F2A3ABEF-D713-44DC-88BE-4E2D42CAC190",
                        "name": "是否完成目标数量",
                        "value": "F2A3ABEF-D713-44DC-88BE-4E2D42CAC190"
                    },
                    {
                        "code": "begin_time",
                        "id": "1FB8DB04-CC5C-459B-AEA1-AD66552A4C1D",
                        "name": "任务周期开始时间",
                        "value": "1FB8DB04-CC5C-459B-AEA1-AD66552A4C1D"
                    },
                    {
                        "code": "end_time",
                        "id": "584EE6D7-87B3-48F6-8064-7A8E90ECE404",
                        "name": "任务周期结束时间",
                        "value": "584EE6D7-87B3-48F6-8064-7A8E90ECE404"
                    },
                    {
                        "code": "created_on",
                        "id": "096EEA9D-F3E5-42D7-A154-0F900FF48838",
                        "name": "创建时间",
                        "value": "096EEA9D-F3E5-42D7-A154-0F900FF48838"
                    },
                    {
                        "code": "created_by",
                        "id": "1239973D-711F-49EA-B3EB-A1C7438DB8B4",
                        "name": "创建人",
                        "value": "1239973D-711F-49EA-B3EB-A1C7438DB8B4"
                    },
                    {
                        "code": "modified_on",
                        "id": "E7AAD6D4-B3F6-48D3-BCA6-C78DBB25421D",
                        "name": "更新时间",
                        "value": "E7AAD6D4-B3F6-48D3-BCA6-C78DBB25421D"
                    },
                    {
                        "code": "modified_by",
                        "id": "A916B058-4BF8-41B4-A43B-CAEF75900774",
                        "name": "更新人",
                        "value": "A916B058-4BF8-41B4-A43B-CAEF75900774"
                    }
                ],
                "code": "job_contact_statistic",
                "id": "904201DA-2F86-4727-905B-4CC13E0F0B2F",
                "name": "加客统计表",
                "primary": {
                    "attributes": [
                        "468B5FB2-4A1E-4E88-ABD5-A6604E7ED66C"
                    ]
                }
            },
            {
                "attributes": [
                    {
                        "code": "id",
                        "id": "EC016092-05C4-4DA6-8144-7D8F7901008F",
                        "name": "租户号",
                        "value": "EC016092-05C4-4DA6-8144-7D8F7901008F"
                    },
                    {
                        "code": "task_id",
                        "id": "15AF80F4-A427-48C6-A045-30BA7CAD673F",
                        "name": "任务id",
                        "value": "15AF80F4-A427-48C6-A045-30BA7CAD673F"
                    },
                    {
                        "code": "statistic_id",
                        "id": "D3F12A40-AEF6-4FEF-876E-52938AB48947",
                        "name": "统计表id",
                        "value": "D3F12A40-AEF6-4FEF-876E-52938AB48947"
                    },
                    {
                        "code": "customer_name",
                        "id": "27867221-D51B-4173-97CD-FDB795271824",
                        "name": "客户姓名",
                        "value": "27867221-D51B-4173-97CD-FDB795271824"
                    },
                    {
                        "code": "customer_mobile",
                        "id": "6DC83FC2-A574-4316-A9A5-49D0BACFDC4E",
                        "name": "客户电话",
                        "value": "6DC83FC2-A574-4316-A9A5-49D0BACFDC4E"
                    },
                    {
                        "code": "avatar",
                        "id": "ACD102DC-7935-42AE-9A5B-4842FB54A6A7",
                        "name": "客户头像",
                        "value": "ACD102DC-7935-42AE-9A5B-4842FB54A6A7"
                    },
                    {
                        "code": "created_by",
                        "id": "BC1495C4-C253-4780-8275-C75B6EA3B8E1",
                        "name": "创建人",
                        "value": "BC1495C4-C253-4780-8275-C75B6EA3B8E1"
                    },
                    {
                        "code": "modified_on",
                        "id": "49569397-5180-4A53-ABAD-DA7D9C0E8079",
                        "name": "更新时间",
                        "value": "49569397-5180-4A53-ABAD-DA7D9C0E8079"
                    },
                    {
                        "code": "modified_by",
                        "id": "68FF9716-15E7-44D2-8F85-34A9F9841EEE",
                        "name": "更新人",
                        "value": "68FF9716-15E7-44D2-8F85-34A9F9841EEE"
                    },
                    {
                        "code": "created_on",
                        "id": "7E8BF822-C291-489F-BFDC-4F6C5E90043B",
                        "name": "创建时间",
                        "value": "7E8BF822-C291-489F-BFDC-4F6C5E90043B"
                    },
                    {
                        "code": "add_customer_time",
                        "id": "2F2126FA-D8B7-4F77-8042-1DE70D487E35",
                        "name": "添加客户时间",
                        "value": "2F2126FA-D8B7-4F77-8042-1DE70D487E35"
                    },
                    {
                        "code": "customer_qw_id",
                        "id": "894B3D2F-D992-4A35-B98E-BF9B3B999CB1",
                        "name": "企微外部联系人的userid",
                        "value": "894B3D2F-D992-4A35-B98E-BF9B3B999CB1"
                    }
                ],
                "code": "job_customer_fixed_quantity",
                "id": "8BC4A21E-E686-40DA-9ED4-77770C0FE8F7",
                "name": "固定人数加客",
                "primary": {
                    "attributes": [
                        "EC016092-05C4-4DA6-8144-7D8F7901008F"
                    ]
                }
            },
            {
                "attributes": [
                    {
                        "code": "id",
                        "id": "49748085-CB57-4395-80DF-F69D071A6499",
                        "value": "49748085-CB57-4395-80DF-F69D071A6499"
                    },
                    {
                        "code": "task_id",
                        "id": "CF600C3D-6108-40D5-A3AF-E735F263440A",
                        "name": "任务表id",
                        "value": "CF600C3D-6108-40D5-A3AF-E735F263440A"
                    },
                    {
                        "code": "statistic_id",
                        "id": "C68A5991-3996-42F6-B8D3-78DFFEE7FB3D",
                        "name": "统计表id",
                        "value": "C68A5991-3996-42F6-B8D3-78DFFEE7FB3D"
                    },
                    {
                        "code": "customer_name",
                        "id": "C8906622-8084-48AA-8141-B0EEA9F80AF7",
                        "name": "客户名称",
                        "value": "C8906622-8084-48AA-8141-B0EEA9F80AF7"
                    },
                    {
                        "code": "customer_mobile",
                        "id": "F7FB8424-EFF5-4C31-B86A-FEE5C13E1F1B",
                        "name": "客户电话",
                        "value": "F7FB8424-EFF5-4C31-B86A-FEE5C13E1F1B"
                    },
                    {
                        "code": "is_finish",
                        "comment": "0 否 1 是",
                        "id": "7BEADC12-1538-40E5-9A50-5B4FE840FCED",
                        "name": "是否已完成",
                        "value": "7BEADC12-1538-40E5-9A50-5B4FE840FCED"
                    },
                    {
                        "code": "created_by",
                        "id": "4C992766-A5EC-4351-8322-86C2D1A9C009",
                        "name": "创建人",
                        "value": "4C992766-A5EC-4351-8322-86C2D1A9C009"
                    },
                    {
                        "code": "created_on",
                        "id": "6916C3DF-D7C7-4EDA-AA25-74DD3CF4D7D6",
                        "name": "创建时间",
                        "value": "6916C3DF-D7C7-4EDA-AA25-74DD3CF4D7D6"
                    },
                    {
                        "code": "modified_by",
                        "id": "C0B01C5C-C824-40CD-8D87-F767126A9300",
                        "name": "更新人",
                        "value": "C0B01C5C-C824-40CD-8D87-F767126A9300"
                    },
                    {
                        "code": "modified_on",
                        "id": "21BF8EE4-3CAC-446A-8758-E7BCF9E92AD2",
                        "name": "更新时间",
                        "value": "21BF8EE4-3CAC-446A-8758-E7BCF9E92AD2"
                    },
                    {
                        "code": "add_customer_time",
                        "id": "185CDFC5-5EB0-448A-8E27-8E61070751DF",
                        "name": "添加客户时间",
                        "value": "185CDFC5-5EB0-448A-8E27-8E61070751DF"
                    },
                    {
                        "code": "avatar",
                        "id": "5598E40C-9650-4F29-BAA0-F6F1A6A14558",
                        "name": "客户头像",
                        "value": "5598E40C-9650-4F29-BAA0-F6F1A6A14558"
                    },
                    {
                        "code": "customer_qw_id",
                        "id": "C56573F5-CB41-4CD0-A95D-43D8DCEF8372",
                        "name": "企微外部联系人的userid",
                        "value": "C56573F5-CB41-4CD0-A95D-43D8DCEF8372"
                    }
                ],
                "code": "job_customer_mobile",
                "id": "8B435211-1DEA-4BA4-BD5C-B6594F789F06",
                "name": "导入电话加客",
                "primary": {
                    "attributes": [
                        "49748085-CB57-4395-80DF-F69D071A6499"
                    ]
                }
            },
            {
                "attributes": [
                    {
                        "code": "id",
                        "id": "125435B2-AC55-451D-8730-8E677DE73C5E",
                        "value": "125435B2-AC55-451D-8730-8E677DE73C5E"
                    },
                    {
                        "code": "task_id",
                        "id": "8EB77E56-67C5-4E54-8DA3-F5652421AA50",
                        "name": "所属任务",
                        "value": "8EB77E56-67C5-4E54-8DA3-F5652421AA50"
                    },
                    {
                        "code": "statistic_id",
                        "id": "69257EC0-995B-473A-84D4-D1085AE2992A",
                        "name": "所属统计单",
                        "value": "69257EC0-995B-473A-84D4-D1085AE2992A"
                    },
                    {
                        "code": "customer_name",
                        "id": "50BA2193-B333-4C1F-B383-4E642EBADD3A",
                        "name": "客户",
                        "value": "50BA2193-B333-4C1F-B383-4E642EBADD3A"
                    },
                    {
                        "code": "customer_mobile",
                        "id": "F16E4D46-9321-4F63-A325-B88515ABC32F",
                        "name": "客户电话",
                        "value": "F16E4D46-9321-4F63-A325-B88515ABC32F"
                    },
                    {
                        "code": "customer_qw_id",
                        "id": "1A2AAF3F-7B49-45ED-9914-9B2556D302D8",
                        "name": "企微外部联系人UserID",
                        "value": "1A2AAF3F-7B49-45ED-9914-9B2556D302D8"
                    },
                    {
                        "code": "avatar",
                        "id": "3F9CAA61-53E0-439B-9E73-B50F7DDF58F2",
                        "name": "头像",
                        "value": "3F9CAA61-53E0-439B-9E73-B50F7DDF58F2"
                    },
                    {
                        "code": "add_customer_time",
                        "id": "E4CDEDB5-F562-4C3A-8CED-BA20F066F9C0",
                        "name": "添加客户时间",
                        "value": "E4CDEDB5-F562-4C3A-8CED-BA20F066F9C0"
                    },
                    {
                        "code": "longitude",
                        "id": "1052063A-4113-4E32-9424-BC7A5EF8926B",
                        "name": "经度",
                        "value": "1052063A-4113-4E32-9424-BC7A5EF8926B"
                    },
                    {
                        "code": "latitude",
                        "id": "FC4EFF78-9904-4441-943A-EB3F823A1B3D",
                        "name": "维度",
                        "value": "FC4EFF78-9904-4441-943A-EB3F823A1B3D"
                    },
                    {
                        "code": "address",
                        "id": "EDDDEA3B-0DAC-4050-8970-B5BE602EC692",
                        "name": "地址信息",
                        "value": "EDDDEA3B-0DAC-4050-8970-B5BE602EC692"
                    },
                    {
                        "code": "created_by",
                        "id": "FC88AD23-64F8-4EE6-AE5B-4B0A684D4003",
                        "value": "FC88AD23-64F8-4EE6-AE5B-4B0A684D4003"
                    },
                    {
                        "code": "modified_by",
                        "id": "E64BC745-839C-4F26-8EDF-22C4134E60CD",
                        "value": "E64BC745-839C-4F26-8EDF-22C4134E60CD"
                    },
                    {
                        "code": "created_on",
                        "id": "AE4F23CB-D722-405C-BEBD-8AC90E4DC763",
                        "value": "AE4F23CB-D722-405C-BEBD-8AC90E4DC763"
                    },
                    {
                        "code": "modified_on",
                        "id": "7B1FC1F9-1914-4D8E-A3BC-8DACD98EC436",
                        "value": "7B1FC1F9-1914-4D8E-A3BC-8DACD98EC436"
                    }
                ],
                "code": "job_customer_region",
                "id": "8648EC1D-4BA5-45A5-A6DE-4A9D6D903495",
                "name": "定点范围拓客任务客户表",
                "primary": {
                    "attributes": [
                        "125435B2-AC55-451D-8730-8E677DE73C5E"
                    ]
                }
            },
            {
                "attributes": [
                    {
                        "code": "id",
                        "id": "E562D78A-1854-48A3-AF93-5316FC3D8750",
                        "value": "E562D78A-1854-48A3-AF93-5316FC3D8750"
                    },
                    {
                        "code": "task_id",
                        "id": "6B766FDB-EF05-4494-BAEA-99872C368637",
                        "name": "任务ID",
                        "value": "6B766FDB-EF05-4494-BAEA-99872C368637"
                    },
                    {
                        "code": "statistic_id",
                        "id": "51352A4B-99D9-4B17-9B78-3542141B5D9C",
                        "name": "统计表ID",
                        "value": "51352A4B-99D9-4B17-9B78-3542141B5D9C"
                    },
                    {
                        "code": "is_finish",
                        "comment": "1 是 0 否",
                        "id": "AF80BE45-F719-4A0D-B3EC-DBA573D64C67",
                        "name": "是否完成",
                        "value": "AF80BE45-F719-4A0D-B3EC-DBA573D64C67"
                    },
                    {
                        "code": "begin_time",
                        "id": "344E95D8-E11B-4E74-A794-F1A08B793B2F",
                        "name": "开始时间",
                        "value": "344E95D8-E11B-4E74-A794-F1A08B793B2F"
                    },
                    {
                        "code": "end_time",
                        "id": "7542F38D-BEC6-436F-A2CA-264DDE6FB737",
                        "name": "结束时间",
                        "value": "7542F38D-BEC6-436F-A2CA-264DDE6FB737"
                    },
                    {
                        "code": "urls",
                        "id": "FDD33C12-1BAD-492E-A53E-9A8F851C7C77",
                        "name": "上传截图Json字符串",
                        "value": "FDD33C12-1BAD-492E-A53E-9A8F851C7C77"
                    },
                    {
                        "code": "upload_time",
                        "id": "870440D9-0F4D-44CF-BFD1-3C17343C2689",
                        "name": "上传时间",
                        "value": "870440D9-0F4D-44CF-BFD1-3C17343C2689"
                    },
                    {
                        "code": "created_by",
                        "id": "F923D8B2-4F09-4C40-B790-99852350DBA7",
                        "value": "F923D8B2-4F09-4C40-B790-99852350DBA7"
                    },
                    {
                        "code": "created_on",
                        "id": "19AB12BD-8BCC-46BE-A375-C3879DFE1F1D",
                        "value": "19AB12BD-8BCC-46BE-A375-C3879DFE1F1D"
                    },
                    {
                        "code": "modified_by",
                        "id": "BA77E6CE-70A5-4B85-A2B1-1D53B162BFF6",
                        "value": "BA77E6CE-70A5-4B85-A2B1-1D53B162BFF6"
                    },
                    {
                        "code": "modified_on",
                        "id": "56B3755F-396B-495F-86A5-103AE812E4A4",
                        "value": "56B3755F-396B-495F-86A5-103AE812E4A4"
                    }
                ],
                "code": "job_evidence_job",
                "id": "5F754272-2713-4AB7-8C8F-5F8FE355C296",
                "name": "朋友圈/群运营员工任务明细",
                "primary": {
                    "attributes": [
                        "E562D78A-1854-48A3-AF93-5316FC3D8750"
                    ]
                }
            },
            {
                "attributes": [
                    {
                        "code": "id",
                        "id": "620FDA27-BE76-469F-A559-C74A77C331C8",
                        "name": "定点拓客任务二维码",
                        "value": "620FDA27-BE76-469F-A559-C74A77C331C8"
                    },
                    {
                        "code": "task_id",
                        "id": "0CA1F22F-911B-44DF-AFC4-75A9CE9DA001",
                        "name": "所属任务",
                        "value": "0CA1F22F-911B-44DF-AFC4-75A9CE9DA001"
                    },
                    {
                        "code": "statistic_id",
                        "id": "B60C25E9-727A-4C83-8394-7BD8E216127C",
                        "name": "所属统计单",
                        "value": "B60C25E9-727A-4C83-8394-7BD8E216127C"
                    },
                    {
                        "code": "app_id",
                        "id": "5A297A77-29E1-49CB-B186-8C7D603D453C",
                        "name": "应用ID",
                        "value": "5A297A77-29E1-49CB-B186-8C7D603D453C"
                    },
                    {
                        "code": "channel_id",
                        "comment": "唯一",
                        "id": "D11B4026-12F0-4CE6-B615-73DAD9959E25",
                        "name": "渠道码ID",
                        "value": "D11B4026-12F0-4CE6-B615-73DAD9959E25"
                    },
                    {
                        "code": "qw_state",
                        "comment": "当前由渠道码定义",
                        "id": "F175567B-B4C9-454B-9173-2474A0FC12D1",
                        "name": "企业微信回调事件的state字段",
                        "value": "F175567B-B4C9-454B-9173-2474A0FC12D1"
                    },
                    {
                        "code": "longitude",
                        "id": "719FF4FA-0668-4C29-903D-F5F08837EA1E",
                        "name": "申请地经度",
                        "value": "719FF4FA-0668-4C29-903D-F5F08837EA1E"
                    },
                    {
                        "code": "latitude",
                        "id": "90952E65-E9CA-4AC1-A661-A12DF9A76000",
                        "name": "申请地维度",
                        "value": "90952E65-E9CA-4AC1-A661-A12DF9A76000"
                    },
                    {
                        "code": "address",
                        "id": "CE4BFC8A-4B99-49CF-B64A-84F8F88CB4CD",
                        "name": "定位地址",
                        "value": "CE4BFC8A-4B99-49CF-B64A-84F8F88CB4CD"
                    },
                    {
                        "code": "url",
                        "id": "4F1E5529-6252-4D08-8F19-2C857D22FE02",
                        "name": "二维码链接地址",
                        "value": "4F1E5529-6252-4D08-8F19-2C857D22FE02"
                    },
                    {
                        "code": "expired_at",
                        "id": "8AFDCA2D-6FC8-47F7-B1A6-8A027284256A",
                        "name": "过期时间",
                        "value": "8AFDCA2D-6FC8-47F7-B1A6-8A027284256A"
                    },
                    {
                        "code": "created_by",
                        "id": "4BFEA7A4-3CAA-4845-89C1-D59C3BCD05BA",
                        "name": "创建人",
                        "value": "4BFEA7A4-3CAA-4845-89C1-D59C3BCD05BA"
                    },
                    {
                        "code": "modified_by",
                        "id": "7F501F03-410D-4BF3-A3EE-61A052D6E5B0",
                        "name": "更新人",
                        "value": "7F501F03-410D-4BF3-A3EE-61A052D6E5B0"
                    },
                    {
                        "code": "created_on",
                        "id": "7C72527F-2D68-4BC4-A9ED-955C91484B83",
                        "name": "创建时间",
                        "value": "7C72527F-2D68-4BC4-A9ED-955C91484B83"
                    },
                    {
                        "code": "modified_on",
                        "id": "5810E3C9-C6D8-4A2C-9DFD-14C3C9AE30F5",
                        "name": "更新时间",
                        "value": "5810E3C9-C6D8-4A2C-9DFD-14C3C9AE30F5"
                    },
                    {
                        "code": "status",
                        "comment": "默认0未回收  1已回收",
                        "id": "8E0741BD-0097-464A-8E04-CA15C7FFA9B8",
                        "name": "状态",
                        "value": "8E0741BD-0097-464A-8E04-CA15C7FFA9B8"
                    }
                ],
                "code": "job_region_task_qrcode",
                "id": "8CB5C297-ABA9-4167-A0C1-48D399EDD787",
                "name": "二维码表",
                "primary": {
                    "attributes": [
                        "620FDA27-BE76-469F-A559-C74A77C331C8"
                    ]
                }
            },
            {
                "attributes": [
                    {
                        "code": "task_id",
                        "id": "F2DBB1F3-D544-4B0E-B0C4-DC01982AF498",
                        "name": "有序uuid",
                        "value": "F2DBB1F3-D544-4B0E-B0C4-DC01982AF498"
                    },
                    {
                        "code": "e_id",
                        "id": "ADA4EC0F-810C-45C7-8260-593B2692BC0C",
                        "name": "中台enterprise微服务换取的中台企业id",
                        "value": "ADA4EC0F-810C-45C7-8260-593B2692BC0C"
                    },
                    {
                        "code": "app_id",
                        "id": "6C772EF8-FB0A-483D-8093-33361969C30B",
                        "name": "中台enterprise微服务换取的中台自定义应用id",
                        "value": "6C772EF8-FB0A-483D-8093-33361969C30B"
                    },
                    {
                        "code": "name",
                        "id": "1207428E-DF44-4E26-981F-5A8E4E598DB1",
                        "name": "任务名称",
                        "value": "1207428E-DF44-4E26-981F-5A8E4E598DB1"
                    },
                    {
                        "code": "task_progress",
                        "id": "A9CF74CA-13EB-4787-A587-9A1118CDA6C0",
                        "name": "任务进度保留3位小数",
                        "value": "A9CF74CA-13EB-4787-A587-9A1118CDA6C0"
                    },
                    {
                        "code": "task_type_id",
                        "id": "0C9E5F3B-4E30-4F42-9B19-9DE5B5EA0D54",
                        "name": "任务类型ID",
                        "value": "0C9E5F3B-4E30-4F42-9B19-9DE5B5EA0D54"
                    },
                    {
                        "code": "status",
                        "comment": "0未发布 1 已发布未开始 2 已发布进行中 3 已发布已结束",
                        "id": "A3194543-C5D4-4513-8402-1087864D2BEB",
                        "name": "任务状态",
                        "value": "A3194543-C5D4-4513-8402-1087864D2BEB"
                    },
                    {
                        "code": "begin_time",
                        "id": "8B95FB72-0B3C-43FE-B1C3-8DF8166BB548",
                        "name": "任务开始时间",
                        "value": "8B95FB72-0B3C-43FE-B1C3-8DF8166BB548"
                    },
                    {
                        "code": "end_time",
                        "id": "3DC8C668-7C76-4673-A6FF-BEACDB458851",
                        "name": "任务结束时间",
                        "value": "3DC8C668-7C76-4673-A6FF-BEACDB458851"
                    },
                    {
                        "code": "is_notice",
                        "comment": "0 不开启 1开启",
                        "id": "6F181C5A-A867-4F5E-AEC5-257F7AFA7E4B",
                        "name": "是否结束前提醒",
                        "value": "6F181C5A-A867-4F5E-AEC5-257F7AFA7E4B"
                    },
                    {
                        "code": "notice_time",
                        "comment": "记录的是提醒时间后续不需要再计算，is_notice为1时有效",
                        "id": "5A626E94-77EB-4B5B-A0CF-93C36FD552B3",
                        "name": "结束前xx小时进行提醒",
                        "value": "5A626E94-77EB-4B5B-A0CF-93C36FD552B3"
                    },
                    {
                        "code": "content",
                        "id": "42C51022-D476-45D1-A745-0766363D8FC2",
                        "name": "任务内容",
                        "value": "42C51022-D476-45D1-A745-0766363D8FC2"
                    },
                    {
                        "code": "created_on",
                        "id": "46B1BF55-BD66-429D-B97F-B954F13A6A5F",
                        "name": "任务创建时间",
                        "value": "46B1BF55-BD66-429D-B97F-B954F13A6A5F"
                    },
                    {
                        "code": "created_by",
                        "id": "A2ADC559-2710-482A-B24D-A1F440ABAC32",
                        "name": "任务创建人id",
                        "value": "A2ADC559-2710-482A-B24D-A1F440ABAC32"
                    },
                    {
                        "code": "modified_on",
                        "id": "20111CAA-E55E-42AF-9C25-42630C44B3C1",
                        "name": "任务修改时间",
                        "value": "20111CAA-E55E-42AF-9C25-42630C44B3C1"
                    },
                    {
                        "code": "modified_by",
                        "id": "E964B91F-2C18-4702-9EA1-1495CEC9171E",
                        "name": "任务修改人id",
                        "value": "E964B91F-2C18-4702-9EA1-1495CEC9171E"
                    },
                    {
                        "code": "contact_file_info",
                        "id": "E87DCDEF-AD6F-4766-9AB7-17B732AC2437",
                        "name": "任务附件",
                        "value": "E87DCDEF-AD6F-4766-9AB7-17B732AC2437"
                    },
                    {
                        "code": "cycle_info",
                        "id": "1731FD15-1F4A-43B2-BCFE-C76E135F9F79",
                        "name": "群运营任务周期提醒的配置信息存储为JSON字符串",
                        "value": "1731FD15-1F4A-43B2-BCFE-C76E135F9F79"
                    },
                    {
                        "code": "region_info",
                        "comment": "json字符形式存储圈定的范围的圆心和半径信息",
                        "id": "69372203-E9A0-4A06-9B7D-6970A7ADE0CB",
                        "name": "定点范围拓客任务时非空,json字符形式存储圈定的范围的圆心和半径信息",
                        "value": "69372203-E9A0-4A06-9B7D-6970A7ADE0CB"
                    }
                ],
                "code": "job_task",
                "id": "177C9B9F-054F-4CC7-AEC0-83088D6C5807",
                "name": "任务表",
                "primary": {
                    "attributes": [
                        "F2DBB1F3-D544-4B0E-B0C4-DC01982AF498"
                    ]
                }
            },
            {
                "attributes": [
                    {
                        "code": "id",
                        "id": "B1E36177-24AF-4636-B7FE-C7BBDDD2AFCF",
                        "name": "主键",
                        "value": "B1E36177-24AF-4636-B7FE-C7BBDDD2AFCF"
                    },
                    {
                        "code": "task_id",
                        "id": "4F2FBE06-85D0-48D9-9BF0-58CB1DCA4238",
                        "name": "任务id",
                        "value": "4F2FBE06-85D0-48D9-9BF0-58CB1DCA4238"
                    },
                    {
                        "code": "type",
                        "comment": "0-任务分配提醒 1-任务开始提醒  2-任务即将结束提醒 3-任务结束提醒",
                        "id": "FD16E6BF-27B6-4D7E-9660-D32AF43E9389",
                        "name": "事件类型",
                        "value": "FD16E6BF-27B6-4D7E-9660-D32AF43E9389"
                    },
                    {
                        "code": "is_push",
                        "comment": "0-未完成 1-已完成",
                        "id": "A2DBA5BF-E69B-48C0-A431-344D8374A250",
                        "name": "推送状态",
                        "value": "A2DBA5BF-E69B-48C0-A431-344D8374A250"
                    },
                    {
                        "code": "trigger_time",
                        "id": "4D1DD828-63BC-4D04-ABBA-23117887E7B2",
                        "name": "推送触发的时间",
                        "value": "4D1DD828-63BC-4D04-ABBA-23117887E7B2"
                    },
                    {
                        "code": "push_content_json",
                        "id": "524263EC-6646-43CE-99FF-2EBB8A7A66E4",
                        "name": "企微提醒内容",
                        "value": "524263EC-6646-43CE-99FF-2EBB8A7A66E4"
                    },
                    {
                        "code": "created_on",
                        "id": "0A600A23-6C0D-4EA6-95CF-967CC318A011",
                        "name": "创建时间",
                        "value": "0A600A23-6C0D-4EA6-95CF-967CC318A011"
                    },
                    {
                        "code": "modified_on",
                        "id": "318EF357-1262-46D8-B0B1-363C0FCF7E9D",
                        "name": "修改时间",
                        "value": "318EF357-1262-46D8-B0B1-363C0FCF7E9D"
                    }
                ],
                "code": "job_task_notice",
                "id": "A4A77321-D00F-471E-9676-89EFE921F933",
                "name": "任务推送提醒表",
                "primary": {
                    "attributes": [
                        "B1E36177-24AF-4636-B7FE-C7BBDDD2AFCF"
                    ]
                }
            },
            {
                "attributes": [
                    {
                        "code": "id",
                        "id": "B65E6055-9C59-42E0-A63A-B9EF65908EF1",
                        "value": "B65E6055-9C59-42E0-A63A-B9EF65908EF1"
                    },
                    {
                        "code": "project_id",
                        "id": "6FF472CC-80A3-49C0-AFB1-ADBDF89A3232",
                        "name": "项目id",
                        "value": "6FF472CC-80A3-49C0-AFB1-ADBDF89A3232"
                    },
                    {
                        "code": "task_id",
                        "id": "CC98CDF1-A88F-4868-951D-3B64D486FD96",
                        "name": "任务id",
                        "value": "CC98CDF1-A88F-4868-951D-3B64D486FD96"
                    },
                    {
                        "code": "created_by",
                        "id": "7C987A85-9EBF-4BEC-A310-C7C610A93282",
                        "name": "创建人",
                        "value": "7C987A85-9EBF-4BEC-A310-C7C610A93282"
                    },
                    {
                        "code": "created_on",
                        "id": "2AB52CAF-A219-4B10-81F5-0D215C72BE9C",
                        "name": "创建时间",
                        "value": "2AB52CAF-A219-4B10-81F5-0D215C72BE9C"
                    },
                    {
                        "code": "modified_by",
                        "id": "AB8F3A66-9405-43A4-A06E-9FCABE721880",
                        "name": "更新人",
                        "value": "AB8F3A66-9405-43A4-A06E-9FCABE721880"
                    },
                    {
                        "code": "modified_on",
                        "id": "399DC4F9-8CA9-49F5-9AF5-B6D0304CC108",
                        "name": "更新时间",
                        "value": "399DC4F9-8CA9-49F5-9AF5-B6D0304CC108"
                    },
                    {
                        "code": "project_name",
                        "id": "907B85EB-A140-453D-876F-9E9B9BD1FDE6",
                        "value": "907B85EB-A140-453D-876F-9E9B9BD1FDE6"
                    }
                ],
                "code": "job_task_project_relation",
                "id": "A9B43D9B-A0FB-4F04-B70B-407168094F02",
                "name": "项目任务关系表",
                "primary": {
                    "attributes": [
                        "B65E6055-9C59-42E0-A63A-B9EF65908EF1"
                    ]
                }
            },
            {
                "attributes": [
                    {
                        "code": "type_id",
                        "id": "F2C91AC3-37E2-43C8-B599-1E0406F0B77F",
                        "name": "任务类型id",
                        "value": "F2C91AC3-37E2-43C8-B599-1E0406F0B77F"
                    },
                    {
                        "code": "kind",
                        "comment": "加客",
                        "id": "177B8041-07A3-4B06-A416-F51E9509BC10",
                        "name": "大类型（用于根据大类型找到对应的统计表）:0",
                        "value": "177B8041-07A3-4B06-A416-F51E9509BC10"
                    },
                    {
                        "code": "type",
                        "comment": "add_customer_nums",
                        "id": "EA81158A-1128-4C17-91F1-818C51385194",
                        "name": "类型名称：add_customer_mobile",
                        "value": "EA81158A-1128-4C17-91F1-818C51385194"
                    },
                    {
                        "code": "name",
                        "id": "B15C3FA4-A023-4828-80EA-5E91D1D161CC",
                        "name": "任务类型名称",
                        "value": "B15C3FA4-A023-4828-80EA-5E91D1D161CC"
                    },
                    {
                        "code": "created_on",
                        "id": "C7F0B6DC-1461-4B5D-9D59-C155B178899F",
                        "name": "创建时间",
                        "value": "C7F0B6DC-1461-4B5D-9D59-C155B178899F"
                    },
                    {
                        "code": "created_by",
                        "id": "BB4299D4-8D2D-4FA8-BD88-1AB6B0ECA3E8",
                        "name": "创建人",
                        "value": "BB4299D4-8D2D-4FA8-BD88-1AB6B0ECA3E8"
                    },
                    {
                        "code": "modified_by",
                        "id": "68A64197-8D84-4BD9-ADB3-1A8EE94625DC",
                        "name": "更新人",
                        "value": "68A64197-8D84-4BD9-ADB3-1A8EE94625DC"
                    },
                    {
                        "code": "modified_on",
                        "id": "7B2D20AD-DA92-4A4A-978F-7E8C81ADB267",
                        "name": "更新时间",
                        "value": "7B2D20AD-DA92-4A4A-978F-7E8C81ADB267"
                    }
                ],
                "code": "job_task_type",
                "id": "F5D06159-8391-40DF-B8EB-995B3BBF0F2D",
                "name": "任务类型表",
                "primary": {
                    "attributes": [
                        "F2C91AC3-37E2-43C8-B599-1E0406F0B77F"
                    ]
                }
            },
            {
                "attributes": [
                    {
                        "code": "id",
                        "id": "D935393F-EA01-47A3-85FC-690F6E4751ED",
                        "name": "id",
                        "value": "D935393F-EA01-47A3-85FC-690F6E4751ED"
                    },
                    {
                        "code": "lxl",
                        "id": "EC7C0D81-B7DF-4112-B733-9902A52C937F",
                        "value": "EC7C0D81-B7DF-4112-B733-9902A52C937F"
                    }
                ],
                "code": "lxl_test",
                "id": "7EDADD32-7B83-423C-89D1-4867D75E8FDA",
                "name": "lxltest",
                "primary": {
                    "attributes": [
                        "D935393F-EA01-47A3-85FC-690F6E4751ED"
                    ]
                }
            }
        ],
        "values": [
            {
                "code": "varchar",
                "id": "468B5FB2-4A1E-4E88-ABD5-A6604E7ED66C",
                "name": "统计表id",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "FB1684FB-7AAD-4C26-83AA-3968E2EDF29D",
                "name": "任务id",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "EEA1B2B3-7D69-4D62-BE71-3E9FD354A82D",
                "name": "任务类型名称",
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "CC749AAB-0660-492C-B0BB-094CFC3AB266",
                "name": "成员姓名",
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "920FA209-19A0-40B9-AE16-2A8554D61E29",
                "name": "成员电话",
                "string": {
                    "limits": {
                        "maximum": 11
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "F8F90BD1-20C7-431F-90A8-D65A36A4E647",
                "name": "成员企微user_id",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "int",
                "id": "B8D18CDC-724C-497A-803C-A93F114116FA",
                "name": "目标数量",
                "number": {
                    "limits": {
                        "maximum": 2147483647,
                        "minimum": -2147483647
                    }
                },
                "type": "number"
            },
            {
                "code": "int",
                "id": "43835545-C1ED-4FE5-81E0-1782685119BE",
                "name": "目前完成数量",
                "number": {
                    "limits": {
                        "maximum": 2147483647,
                        "minimum": -2147483647
                    }
                },
                "type": "number"
            },
            {
                "code": "bit",
                "comment": "0 否 1 完成",
                "id": "F2A3ABEF-D713-44DC-88BE-4E2D42CAC190",
                "name": "是否完成目标数量",
                "number": {
                    "limits": {
                        "maximum": 2147483647,
                        "minimum": -2147483647
                    }
                },
                "type": "number"
            },
            {
                "code": "datetime",
                "id": "1FB8DB04-CC5C-459B-AEA1-AD66552A4C1D",
                "name": "任务周期开始时间",
                "type": "datatime"
            },
            {
                "code": "datetime",
                "id": "584EE6D7-87B3-48F6-8064-7A8E90ECE404",
                "name": "任务周期结束时间",
                "type": "datatime"
            },
            {
                "code": "datetime",
                "id": "096EEA9D-F3E5-42D7-A154-0F900FF48838",
                "name": "创建时间",
                "type": "datatime"
            },
            {
                "code": "varchar",
                "id": "1239973D-711F-49EA-B3EB-A1C7438DB8B4",
                "name": "创建人",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "datetime",
                "id": "E7AAD6D4-B3F6-48D3-BCA6-C78DBB25421D",
                "name": "更新时间",
                "type": "datatime"
            },
            {
                "code": "varchar",
                "id": "A916B058-4BF8-41B4-A43B-CAEF75900774",
                "name": "更新人",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "EC016092-05C4-4DA6-8144-7D8F7901008F",
                "name": "租户号",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "15AF80F4-A427-48C6-A045-30BA7CAD673F",
                "name": "任务id",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "D3F12A40-AEF6-4FEF-876E-52938AB48947",
                "name": "统计表id",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "27867221-D51B-4173-97CD-FDB795271824",
                "name": "客户姓名",
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "6DC83FC2-A574-4316-A9A5-49D0BACFDC4E",
                "name": "客户电话",
                "string": {
                    "limits": {
                        "maximum": 11
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "ACD102DC-7935-42AE-9A5B-4842FB54A6A7",
                "name": "客户头像",
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "BC1495C4-C253-4780-8275-C75B6EA3B8E1",
                "name": "创建人",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "datetime",
                "id": "49569397-5180-4A53-ABAD-DA7D9C0E8079",
                "name": "更新时间",
                "type": "datatime"
            },
            {
                "code": "varchar",
                "id": "68FF9716-15E7-44D2-8F85-34A9F9841EEE",
                "name": "更新人",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "datetime",
                "id": "7E8BF822-C291-489F-BFDC-4F6C5E90043B",
                "name": "创建时间",
                "type": "datatime"
            },
            {
                "code": "datetime",
                "id": "2F2126FA-D8B7-4F77-8042-1DE70D487E35",
                "name": "添加客户时间",
                "type": "datatime"
            },
            {
                "code": "varchar",
                "id": "894B3D2F-D992-4A35-B98E-BF9B3B999CB1",
                "name": "企微外部联系人的userid",
                "string": {
                    "limits": {
                        "maximum": 128
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "49748085-CB57-4395-80DF-F69D071A6499",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "CF600C3D-6108-40D5-A3AF-E735F263440A",
                "name": "任务表id",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "C68A5991-3996-42F6-B8D3-78DFFEE7FB3D",
                "name": "统计表id",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "C8906622-8084-48AA-8141-B0EEA9F80AF7",
                "name": "客户名称",
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "F7FB8424-EFF5-4C31-B86A-FEE5C13E1F1B",
                "name": "客户电话",
                "string": {
                    "limits": {
                        "maximum": 11
                    }
                },
                "type": "string"
            },
            {
                "code": "bit",
                "comment": "0 否 1 是",
                "id": "7BEADC12-1538-40E5-9A50-5B4FE840FCED",
                "name": "是否已完成",
                "number": {
                    "limits": {
                        "maximum": 2147483647,
                        "minimum": -2147483647
                    }
                },
                "type": "number"
            },
            {
                "code": "varchar",
                "id": "4C992766-A5EC-4351-8322-86C2D1A9C009",
                "name": "创建人",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "datetime",
                "id": "6916C3DF-D7C7-4EDA-AA25-74DD3CF4D7D6",
                "name": "创建时间",
                "type": "datatime"
            },
            {
                "code": "varchar",
                "id": "C0B01C5C-C824-40CD-8D87-F767126A9300",
                "name": "更新人",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "datetime",
                "id": "21BF8EE4-3CAC-446A-8758-E7BCF9E92AD2",
                "name": "更新时间",
                "type": "datatime"
            },
            {
                "code": "datetime",
                "id": "185CDFC5-5EB0-448A-8E27-8E61070751DF",
                "name": "添加客户时间",
                "type": "datatime"
            },
            {
                "code": "varchar",
                "id": "5598E40C-9650-4F29-BAA0-F6F1A6A14558",
                "name": "客户头像",
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "C56573F5-CB41-4CD0-A95D-43D8DCEF8372",
                "name": "企微外部联系人的userid",
                "string": {
                    "limits": {
                        "maximum": 128
                    }
                },
                "type": "string"
            },
            {
                "code": "char",
                "id": "125435B2-AC55-451D-8730-8E677DE73C5E",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "8EB77E56-67C5-4E54-8DA3-F5652421AA50",
                "name": "所属任务",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "69257EC0-995B-473A-84D4-D1085AE2992A",
                "name": "所属统计单",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "50BA2193-B333-4C1F-B383-4E642EBADD3A",
                "name": "客户",
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "F16E4D46-9321-4F63-A325-B88515ABC32F",
                "name": "客户电话",
                "string": {
                    "limits": {
                        "maximum": 11
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "1A2AAF3F-7B49-45ED-9914-9B2556D302D8",
                "name": "企微外部联系人UserID",
                "string": {
                    "limits": {
                        "maximum": 128
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "3F9CAA61-53E0-439B-9E73-B50F7DDF58F2",
                "name": "头像",
                "type": "string"
            },
            {
                "code": "datetime",
                "id": "E4CDEDB5-F562-4C3A-8CED-BA20F066F9C0",
                "name": "添加客户时间",
                "type": "datatime"
            },
            {
                "code": "decimal",
                "id": "1052063A-4113-4E32-9424-BC7A5EF8926B",
                "name": "经度",
                "number": {
                    "limits": {
                        "maximum": 9223372036854776000,
                        "minimum": -9223372036854776000
                    },
                    "precision": 8
                },
                "type": "number"
            },
            {
                "code": "decimal",
                "id": "FC4EFF78-9904-4441-943A-EB3F823A1B3D",
                "name": "维度",
                "number": {
                    "limits": {
                        "maximum": 9223372036854776000,
                        "minimum": -9223372036854776000
                    },
                    "precision": 8
                },
                "type": "number"
            },
            {
                "code": "varchar",
                "id": "EDDDEA3B-0DAC-4050-8970-B5BE602EC692",
                "name": "地址信息",
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "FC88AD23-64F8-4EE6-AE5B-4B0A684D4003",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "E64BC745-839C-4F26-8EDF-22C4134E60CD",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "datetime",
                "id": "AE4F23CB-D722-405C-BEBD-8AC90E4DC763",
                "type": "datatime"
            },
            {
                "code": "datetime",
                "id": "7B1FC1F9-1914-4D8E-A3BC-8DACD98EC436",
                "type": "datatime"
            },
            {
                "code": "varchar",
                "id": "E562D78A-1854-48A3-AF93-5316FC3D8750",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "6B766FDB-EF05-4494-BAEA-99872C368637",
                "name": "任务ID",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "51352A4B-99D9-4B17-9B78-3542141B5D9C",
                "name": "统计表ID",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "tinyint",
                "comment": "1 是 0 否",
                "id": "AF80BE45-F719-4A0D-B3EC-DBA573D64C67",
                "name": "是否完成",
                "number": {
                    "limits": {
                        "maximum": 127,
                        "minimum": -127
                    }
                },
                "type": "number"
            },
            {
                "code": "datetime",
                "id": "344E95D8-E11B-4E74-A794-F1A08B793B2F",
                "name": "开始时间",
                "type": "datatime"
            },
            {
                "code": "datetime",
                "id": "7542F38D-BEC6-436F-A2CA-264DDE6FB737",
                "name": "结束时间",
                "type": "datatime"
            },
            {
                "code": "text",
                "id": "FDD33C12-1BAD-492E-A53E-9A8F851C7C77",
                "name": "上传截图Json字符串",
                "type": "string"
            },
            {
                "code": "datetime",
                "id": "870440D9-0F4D-44CF-BFD1-3C17343C2689",
                "name": "上传时间",
                "type": "datatime"
            },
            {
                "code": "varchar",
                "id": "F923D8B2-4F09-4C40-B790-99852350DBA7",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "datetime",
                "id": "19AB12BD-8BCC-46BE-A375-C3879DFE1F1D",
                "type": "datatime"
            },
            {
                "code": "varchar",
                "id": "BA77E6CE-70A5-4B85-A2B1-1D53B162BFF6",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "datetime",
                "id": "56B3755F-396B-495F-86A5-103AE812E4A4",
                "type": "datatime"
            },
            {
                "code": "char",
                "id": "620FDA27-BE76-469F-A559-C74A77C331C8",
                "name": "定点拓客任务二维码",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "0CA1F22F-911B-44DF-AFC4-75A9CE9DA001",
                "name": "所属任务",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "B60C25E9-727A-4C83-8394-7BD8E216127C",
                "name": "所属统计单",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "5A297A77-29E1-49CB-B186-8C7D603D453C",
                "name": "应用ID",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "comment": "唯一",
                "id": "D11B4026-12F0-4CE6-B615-73DAD9959E25",
                "name": "渠道码ID",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "comment": "当前由渠道码定义",
                "id": "F175567B-B4C9-454B-9173-2474A0FC12D1",
                "name": "企业微信回调事件的state字段",
                "string": {
                    "limits": {
                        "maximum": 30
                    }
                },
                "type": "string"
            },
            {
                "code": "decimal",
                "id": "719FF4FA-0668-4C29-903D-F5F08837EA1E",
                "name": "申请地经度",
                "number": {
                    "limits": {
                        "maximum": 9223372036854776000,
                        "minimum": -9223372036854776000
                    },
                    "precision": 9
                },
                "type": "number"
            },
            {
                "code": "decimal",
                "id": "90952E65-E9CA-4AC1-A661-A12DF9A76000",
                "name": "申请地维度",
                "number": {
                    "limits": {
                        "maximum": 9223372036854776000,
                        "minimum": -9223372036854776000
                    },
                    "precision": 9
                },
                "type": "number"
            },
            {
                "code": "varchar",
                "id": "CE4BFC8A-4B99-49CF-B64A-84F8F88CB4CD",
                "name": "定位地址",
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "4F1E5529-6252-4D08-8F19-2C857D22FE02",
                "name": "二维码链接地址",
                "type": "string"
            },
            {
                "code": "datetime",
                "id": "8AFDCA2D-6FC8-47F7-B1A6-8A027284256A",
                "name": "过期时间",
                "type": "datatime"
            },
            {
                "code": "varchar",
                "id": "4BFEA7A4-3CAA-4845-89C1-D59C3BCD05BA",
                "name": "创建人",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "7F501F03-410D-4BF3-A3EE-61A052D6E5B0",
                "name": "更新人",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "datetime",
                "id": "7C72527F-2D68-4BC4-A9ED-955C91484B83",
                "name": "创建时间",
                "type": "datatime"
            },
            {
                "code": "datetime",
                "id": "5810E3C9-C6D8-4A2C-9DFD-14C3C9AE30F5",
                "name": "更新时间",
                "type": "datatime"
            },
            {
                "code": "tinyint",
                "comment": "默认0未回收  1已回收",
                "id": "8E0741BD-0097-464A-8E04-CA15C7FFA9B8",
                "name": "状态",
                "number": {
                    "limits": {
                        "maximum": 127,
                        "minimum": -127
                    }
                },
                "type": "number"
            },
            {
                "code": "varchar",
                "id": "F2DBB1F3-D544-4B0E-B0C4-DC01982AF498",
                "name": "有序uuid",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "ADA4EC0F-810C-45C7-8260-593B2692BC0C",
                "name": "中台enterprise微服务换取的中台企业id",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "6C772EF8-FB0A-483D-8093-33361969C30B",
                "name": "中台enterprise微服务换取的中台自定义应用id",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "1207428E-DF44-4E26-981F-5A8E4E598DB1",
                "name": "任务名称",
                "string": {
                    "limits": {
                        "maximum": 100
                    }
                },
                "type": "string"
            },
            {
                "code": "decimal",
                "id": "A9CF74CA-13EB-4787-A587-9A1118CDA6C0",
                "name": "任务进度保留3位小数",
                "number": {
                    "limits": {
                        "maximum": 9223372036854776000,
                        "minimum": -9223372036854776000
                    },
                    "precision": 3
                },
                "type": "number"
            },
            {
                "code": "varchar",
                "id": "0C9E5F3B-4E30-4F42-9B19-9DE5B5EA0D54",
                "name": "任务类型ID",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "bit",
                "comment": "0未发布 1 已发布未开始 2 已发布进行中 3 已发布已结束",
                "id": "A3194543-C5D4-4513-8402-1087864D2BEB",
                "name": "任务状态",
                "number": {
                    "limits": {
                        "maximum": 2147483647,
                        "minimum": -2147483647
                    }
                },
                "type": "number"
            },
            {
                "code": "datetime",
                "id": "8B95FB72-0B3C-43FE-B1C3-8DF8166BB548",
                "name": "任务开始时间",
                "type": "datatime"
            },
            {
                "code": "datetime",
                "id": "3DC8C668-7C76-4673-A6FF-BEACDB458851",
                "name": "任务结束时间",
                "type": "datatime"
            },
            {
                "code": "bit",
                "comment": "0 不开启 1开启",
                "id": "6F181C5A-A867-4F5E-AEC5-257F7AFA7E4B",
                "name": "是否结束前提醒",
                "number": {
                    "limits": {
                        "maximum": 2147483647,
                        "minimum": -2147483647
                    }
                },
                "type": "number"
            },
            {
                "code": "datetime",
                "comment": "记录的是提醒时间后续不需要再计算，is_notice为1时有效",
                "id": "5A626E94-77EB-4B5B-A0CF-93C36FD552B3",
                "name": "结束前xx小时进行提醒",
                "type": "datatime"
            },
            {
                "code": "text",
                "id": "42C51022-D476-45D1-A745-0766363D8FC2",
                "name": "任务内容",
                "type": "string"
            },
            {
                "code": "datetime",
                "id": "46B1BF55-BD66-429D-B97F-B954F13A6A5F",
                "name": "任务创建时间",
                "type": "datatime"
            },
            {
                "code": "varchar",
                "id": "A2ADC559-2710-482A-B24D-A1F440ABAC32",
                "name": "任务创建人id",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "datetime",
                "id": "20111CAA-E55E-42AF-9C25-42630C44B3C1",
                "name": "任务修改时间",
                "type": "datatime"
            },
            {
                "code": "varchar",
                "id": "E964B91F-2C18-4702-9EA1-1495CEC9171E",
                "name": "任务修改人id",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "E87DCDEF-AD6F-4766-9AB7-17B732AC2437",
                "name": "任务附件",
                "string": {
                    "limits": {
                        "maximum": 2000
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "1731FD15-1F4A-43B2-BCFE-C76E135F9F79",
                "name": "群运营任务周期提醒的配置信息存储为JSON字符串",
                "type": "string"
            },
            {
                "code": "varchar",
                "comment": "json字符形式存储圈定的范围的圆心和半径信息",
                "id": "69372203-E9A0-4A06-9B7D-6970A7ADE0CB",
                "name": "定点范围拓客任务时非空,json字符形式存储圈定的范围的圆心和半径信息",
                "type": "string"
            },
            {
                "code": "char",
                "id": "B1E36177-24AF-4636-B7FE-C7BBDDD2AFCF",
                "name": "主键",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "char",
                "id": "4F2FBE06-85D0-48D9-9BF0-58CB1DCA4238",
                "name": "任务id",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "tinyint",
                "comment": "0-任务分配提醒 1-任务开始提醒  2-任务即将结束提醒 3-任务结束提醒",
                "id": "FD16E6BF-27B6-4D7E-9660-D32AF43E9389",
                "name": "事件类型",
                "number": {
                    "limits": {
                        "maximum": 127,
                        "minimum": -127
                    }
                },
                "type": "number"
            },
            {
                "code": "bit",
                "comment": "0-未完成 1-已完成",
                "id": "A2DBA5BF-E69B-48C0-A431-344D8374A250",
                "name": "推送状态",
                "number": {
                    "limits": {
                        "maximum": 2147483647,
                        "minimum": -2147483647
                    }
                },
                "type": "number"
            },
            {
                "code": "timestamp",
                "id": "4D1DD828-63BC-4D04-ABBA-23117887E7B2",
                "name": "推送触发的时间",
                "type": "datatime"
            },
            {
                "code": "varchar",
                "id": "524263EC-6646-43CE-99FF-2EBB8A7A66E4",
                "name": "企微提醒内容",
                "string": {
                    "limits": {
                        "maximum": 4096
                    }
                },
                "type": "string"
            },
            {
                "code": "timestamp",
                "id": "0A600A23-6C0D-4EA6-95CF-967CC318A011",
                "name": "创建时间",
                "type": "datatime"
            },
            {
                "code": "timestamp",
                "id": "318EF357-1262-46D8-B0B1-363C0FCF7E9D",
                "name": "修改时间",
                "type": "datatime"
            },
            {
                "code": "varchar",
                "id": "B65E6055-9C59-42E0-A63A-B9EF65908EF1",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "6FF472CC-80A3-49C0-AFB1-ADBDF89A3232",
                "name": "项目id",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "CC98CDF1-A88F-4868-951D-3B64D486FD96",
                "name": "任务id",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "7C987A85-9EBF-4BEC-A310-C7C610A93282",
                "name": "创建人",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "datetime",
                "id": "2AB52CAF-A219-4B10-81F5-0D215C72BE9C",
                "name": "创建时间",
                "type": "datatime"
            },
            {
                "code": "varchar",
                "id": "AB8F3A66-9405-43A4-A06E-9FCABE721880",
                "name": "更新人",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "datetime",
                "id": "399DC4F9-8CA9-49F5-9AF5-B6D0304CC108",
                "name": "更新时间",
                "type": "datatime"
            },
            {
                "code": "varchar",
                "id": "907B85EB-A140-453D-876F-9E9B9BD1FDE6",
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "F2C91AC3-37E2-43C8-B599-1E0406F0B77F",
                "name": "任务类型id",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "bit",
                "comment": "加客",
                "id": "177B8041-07A3-4B06-A416-F51E9509BC10",
                "name": "大类型（用于根据大类型找到对应的统计表）:0",
                "number": {
                    "limits": {
                        "maximum": 2147483647,
                        "minimum": -2147483647
                    }
                },
                "type": "number"
            },
            {
                "code": "varchar",
                "comment": "add_customer_nums",
                "id": "EA81158A-1128-4C17-91F1-818C51385194",
                "name": "类型名称：add_customer_mobile",
                "string": {
                    "limits": {
                        "maximum": 50
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "B15C3FA4-A023-4828-80EA-5E91D1D161CC",
                "name": "任务类型名称",
                "type": "string"
            },
            {
                "code": "datetime",
                "id": "C7F0B6DC-1461-4B5D-9D59-C155B178899F",
                "name": "创建时间",
                "type": "datatime"
            },
            {
                "code": "varchar",
                "id": "BB4299D4-8D2D-4FA8-BD88-1AB6B0ECA3E8",
                "name": "创建人",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "68A64197-8D84-4BD9-ADB3-1A8EE94625DC",
                "name": "更新人",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "datetime",
                "id": "7B2D20AD-DA92-4A4A-978F-7E8C81ADB267",
                "name": "更新时间",
                "type": "datatime"
            },
            {
                "code": "varchar",
                "id": "D935393F-EA01-47A3-85FC-690F6E4751ED",
                "name": "id",
                "string": {
                    "limits": {
                        "maximum": 36
                    }
                },
                "type": "string"
            },
            {
                "code": "varchar",
                "id": "EC7C0D81-B7DF-4112-B733-9902A52C937F",
                "string": {
                    "limits": {
                        "maximum": 69
                    }
                },
                "type": "string"
            }
        ]
    }

    let values = [];
    schemaEntitys.values.forEach(value => {
        values[value.id] = value
    })

    let data = { entitys: [], _entitys: {}, entity: {}, params: params };
    schemaEntitys.entityies.forEach(entity => {
        let outEntity = {
            id: entity.id,
            name: entity.name,
            code: entity.code,
            selected: "",
            /**
             * @type {{ id: string; name: string | undefined; code: string; }[]}
             */
            attributes: [],
        }

        if (params.id == entity.id) {
            outEntity.selected = "selected";
        }

        if (!entity.name) {
            entity.name = "";
        }

        let attributes = [];
        entity.attributes.forEach(attr => {
            attr.value = values[attr.value];
            attributes.push(attr);
            console.log(attr);

            let outAttribute = {
                id: attr.id,
                name: attr.name,
                code: attr.code,
            }
            outEntity.attributes.push(outAttribute)
        })

        data.entitys.push(outEntity)

        data._entitys[entity.id] = entity;
        data._entitys[entity.id].attributes = attributes;
    })

    let keys = Object.keys(data.entitys).sort((a, b) => {
        if (data.entitys[a].code > data.entitys[b].code) {
            return 1;
        } else {
            return -1;
        }
    });

    let newEntitys = [];
    keys.forEach(key => {
        newEntitys.push(data.entitys[key])
    })
    data.entitys = newEntitys;

    if (params.id) {
        data.entity = data._entitys[params.id]
    }

    return data;
    throw error(404, 'Not found');
}