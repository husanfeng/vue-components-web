import Mock from 'mockjs'
// 模拟table数据
const datas = {
    "endRow": 10,
    "firstPage": 1,
    "hasNextPage": true,
    "hasPreviousPage": false,
    "isFirstPage": true,
    "isLastPage": false,
    "lastPage": 8,
    "list": [
        {
            "accountId": 158949,
            "accountItemCode": "6602010608",
            "accountItemName": "管理费用-员工成本-社会保险费-综合保险",
            "accountLevel": "4",
            "buCode": "B299999999",
            "childAccountItemCode": "0",
            "childAccountItemName": "",
            "createdBy": "system",
            "createdTime": "2018-10-03 17:27:46",
            "emsIsValidity": "Y",
            "isParentValue": "N",
            "isPost": "Y",
            "itemProperty": "E",
            "updatedBy": "system",
            "updatedTime": "2018-10-03 18:54:13",
            "valid": "Y"
        },
        {
            "accountId": 156542,
            "accountItemCode": "6601550299",
            "accountItemName": "销售费用-专业机构费-非审计费用-其他",
            "accountLevel": "4",
            "buCode": "B29",
            "childAccountItemCode": "0",
            "childAccountItemName": "",
            "createdBy": "system",
            "createdTime": "2018-10-03 17:23:52",
            "emsIsValidity": "Y",
            "isParentValue": "N",
            "isPost": "Y",
            "itemProperty": "E",
            "updatedBy": "system",
            "updatedTime": "2018-10-04 09:09:23",
            "valid": "Y"
        },
        {
            "accountId": 158356,
            "accountItemCode": "3101140201",
            "accountItemName": "衍生工具-其他货币合约-公允价值变动",
            "accountLevel": "4",
            "buCode": "B29",
            "childAccountItemCode": "0",
            "childAccountItemName": "",
            "createdBy": "system",
            "createdTime": "2018-10-03 17:27:29",
            "emsIsValidity": "Y",
            "isParentValue": "N",
            "isPost": "Y",
            "itemProperty": "A",
            "updatedBy": "system",
            "updatedTime": "2018-10-03 18:52:55",
            "valid": "Y"
        },
        {
            "accountId": 158016,
            "accountItemCode": "2221010401",
            "accountItemName": "应交税费-应交增值税-进项税额转出",
            "accountLevel": "4",
            "buCode": "B29",
            "childAccountItemCode": "0",
            "childAccountItemName": "",
            "createdBy": "system",
            "createdTime": "2018-10-03 17:27:21",
            "emsIsValidity": "Y",
            "isParentValue": "N",
            "isPost": "Y",
            "itemProperty": "L",
            "updatedBy": "system",
            "updatedTime": "2018-10-03 18:52:10",
            "valid": "Y"
        },
        {
            "accountId": 159552,
            "accountItemCode": "1601020701",
            "accountItemName": "固定资产-融资租入固定资产-船舶及设备",
            "accountLevel": "4",
            "buCode": "B29",
            "childAccountItemCode": "0",
            "childAccountItemName": "",
            "createdBy": "system",
            "createdTime": "2018-10-03 17:28:13",
            "emsIsValidity": "Y",
            "isParentValue": "N",
            "isPost": "Y",
            "itemProperty": "A",
            "updatedBy": "system",
            "updatedTime": "2018-10-03 17:51:16",
            "valid": "Y"
        },
        {
            "accountId": 156949,
            "accountItemCode": "6602010401",
            "accountItemName": "管理费用-员工成本-津贴及补贴",
            "accountLevel": "4",
            "buCode": "B29",
            "childAccountItemCode": "0",
            "childAccountItemName": "",
            "createdBy": "system",
            "createdTime": "2018-10-03 17:24:23",
            "emsIsValidity": "Y",
            "isParentValue": "N",
            "isPost": "Y",
            "itemProperty": "E",
            "updatedBy": "system",
            "updatedTime": "2018-10-04 09:10:42",
            "valid": "Y"
        },
        {
            "accountId": 157038,
            "accountItemCode": "4003070101",
            "accountItemName": "其他综合收益-按权益法核算的被投资单位以后不能重分类进损益的其他综合收益变动",
            "accountLevel": "4",
            "buCode": "B29",
            "childAccountItemCode": "0",
            "childAccountItemName": "",
            "createdBy": "system",
            "createdTime": "2018-10-03 17:24:28",
            "effectiveDateStart": "2014-12-31",
            "emsIsValidity": "Y",
            "isParentValue": "N",
            "isPost": "Y",
            "itemProperty": "O",
            "updatedBy": "system",
            "updatedTime": "2018-10-04 09:10:57",
            "valid": "Y"
        },
        {
            "accountId": 159797,
            "accountItemCode": "6603020417",
            "accountItemName": "财务费用-利息收益-委托贷款利息收益-附属子公司-公允值调整",
            "accountLevel": "4",
            "buCode": "B29",
            "childAccountItemCode": "0",
            "childAccountItemName": "",
            "createdBy": "system",
            "createdTime": "2018-10-03 17:28:20",
            "emsIsValidity": "Y",
            "isParentValue": "N",
            "isPost": "Y",
            "itemProperty": "E",
            "updatedBy": "system",
            "updatedTime": "2018-10-03 17:51:25",
            "valid": "Y"
        },
        {
            "accountId": 156454,
            "accountItemCode": "5101980101",
            "accountItemName": "制造费用-结转",
            "accountLevel": "4",
            "buCode": "B29",
            "childAccountItemCode": "0",
            "childAccountItemName": "",
            "createdBy": "system",
            "createdTime": "2018-10-03 17:23:46",
            "emsIsValidity": "Y",
            "isParentValue": "N",
            "isPost": "Y",
            "itemProperty": "E",
            "updatedBy": "system",
            "updatedTime": "2018-10-04 09:09:07",
            "valid": "Y"
        },
        {
            "accountId": 159389,
            "accountItemCode": "1901010801",
            "accountItemName": "待处理财产损溢-待处理固定资产损溢-燃气管道",
            "accountLevel": "4",
            "buCode": "B29",
            "childAccountItemCode": "0",
            "childAccountItemName": "",
            "createdBy": "system",
            "createdTime": "2018-10-03 17:28:03",
            "emsIsValidity": "Y",
            "isParentValue": "N",
            "isPost": "Y",
            "itemProperty": "A",
            "updatedBy": "system",
            "updatedTime": "2018-10-03 17:51:05",
            "valid": "Y"
        }
    ],
    "navigateFirstPage": 1,
    "navigateLastPage": 8,
    "navigatePages": 8,
    "navigatepageNums": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
    ],
    "nextPage": 2,
    "pageNum": 1,
    "pageSize": 10,
    "pages": 417,
    "prePage": 0,
    "size": 10,
    "startRow": 1,
    "total": 4170
}
Mock.mock(`${process.env.API.emsBaseDataURL}/account/findPage`, 'post', datas)

// 值集模拟数据
const datas_select = {
    "dataResult": [
        {
            "vsiId": "043FFAFAA92942BD851595BBE9DCA70D",
            "vsiKey": "7",
            "vsiParentKey": "",
            "vsiValue": "其他1"
        },
        {
            "vsiId": "046535705D90485C908DBF34CCEBF1F1",
            "vsiKey": "3",
            "vsiParentKey": "",
            "vsiValue": "轮船"
        },
        {
            "vsiId": "13E8A29295BB41A4B0DC22BCC97C6551",
            "vsiKey": "5",
            "vsiParentKey": "",
            "vsiValue": "汽车"
        },
        {
            "vsiId": "3B04ABBB6CF541C9ABE1AB71AE2C6EB5",
            "vsiKey": "4",
            "vsiParentKey": "",
            "vsiValue": "飞机"
        },
        {
            "vsiId": "5B9697613DC1463BA1A0FDF6BEA41101",
            "vsiKey": "1",
            "vsiParentKey": "",
            "vsiValue": "火车1"
        },
        {
            "vsiId": "713972E283E24227B9FD666C6F69E66F",
            "vsiKey": "0",
            "vsiParentKey": "",
            "vsiValue": "无"
        },
        {
            "vsiId": "7F1FC8147734419D893F0C29D9495286",
            "vsiKey": "6",
            "vsiParentKey": "",
            "vsiValue": "公务派车"
        },
        {
            "vsiId": "95C24ABFB9E3459F9D88FF7310DB0241",
            "vsiKey": "2",
            "vsiParentKey": "",
            "vsiValue": "高铁/动车"
        }
    ],
    "msg": "处理成功",
    "statusCode": "0"
}
Mock.mock(`${process.env.API.baseURL}/sys/valueset/item/list/VEHICLE`, 'get', datas_select)
// 值集模拟数据
const datas_select2 = { "dataResult": [{ "vsiId": "03E23E0E8D7A4B59A60ECDB59A690459", "vsiKey": "1", "vsiParentKey": "1", "vsiValue": "软卧1" }, { "vsiId": "0EC4BD47E81B42E698CBDD599CC2D6B1", "vsiKey": "3", "vsiParentKey": "1", "vsiValue": "硬卧" }, { "vsiId": "23C44F32B9D5446DAE4F2DDAA106BE64", "vsiKey": "2", "vsiParentKey": "1", "vsiValue": "软座" }, { "vsiId": "E95188179AE84A4C91C032957A3C1B1E", "vsiKey": "4", "vsiParentKey": "1", "vsiValue": "硬座" }], "msg": "处理成功", "statusCode": "0" }
Mock.mock(`${process.env.API.baseURL}/sys/valueset/item/list/VEHICLE_LEVEL/1`, 'get', datas_select2)


// 模拟供应商table数据
const datas_v = {
    "endRow": 11,
    "firstPage": 1,
    "hasNextPage": true,
    "hasPreviousPage": false,
    "isFirstPage": true,
    "isLastPage": false,
    "lastPage": 11,
    "list": [
        {
            "accountDes": "中国银行",
            "advancePaymentAccount": "QZYY0.0.1221100101.0.0.0.0.0.0.0",
            "areaCode": "6528",
            "bankName": "中国银行",
            "bkInfCode": "10002",
            "buCode": "B29",
            "companyCode": "QZYY0",
            "companyName": "中国银行",
            "createdTime": "2018-09-14 19:49:04",
            "employeeNo": "11192424",
            "expiryDate": "2018-09-14T19:50:54.000+0800",
            "expiryDateStr": "2018-09-14 19:50:54",
            "failure": "Y",
            "id": 2813,
            "isValidity": "Y",
            "liabilityAccount": "QZYY0.0.2241390101.0.0.0.0.0.0.0",
            "placeId": "86679",
            "trxParty": "S:101968",
            "updatedTime": "2018-09-20 15:28:36",
            "vendorAccountName": "晓明",
            "vendorAccountNo": "4340611470033650",
            "vendorCode": "1124272",
            "vendorId": 101968,
            "vendorName": "晓明",
            "vendorSiteId": "86679",
            "vendorSiteName": "OFFICE",
            "vendorType": "EMPLOYEE"
        },
        {
            "accountDes": "中国银行",
            "advancePaymentAccount": "QZYY0.0.1221100101.0.0.0.0.0.0.0",
            "areaCode": "6528",
            "bankName": "中国银行",
            "bkInfCode": "10002",
            "buCode": "B29",
            "companyCode": "QZYY0",
            "companyName": "中国银行",
            "createdTime": "2018-09-14 19:49:04",
            "employeeNo": "11192424",
            "expiryDate": "2018-09-14T19:50:54.000+0800",
            "expiryDateStr": "2018-09-14 19:50:54",
            "failure": "Y",
            "id": 2813,
            "isValidity": "Y",
            "liabilityAccount": "QZYY0.0.2241390101.0.0.0.0.0.0.0",
            "placeId": "86679",
            "trxParty": "S:101968",
            "updatedTime": "2018-09-20 15:28:36",
            "vendorAccountName": "晓明",
            "vendorAccountNo": "4340611470033650",
            "vendorCode": "1124272",
            "vendorId": 101968,
            "vendorName": "晓明",
            "vendorSiteId": "86679",
            "vendorSiteName": "OFFICE",
            "vendorType": "EMPLOYEE"
        },
        {
            "accountDes": "中国银行",
            "advancePaymentAccount": "QZYY0.0.1221100101.0.0.0.0.0.0.0",
            "areaCode": "6528",
            "bankName": "中国银行",
            "bkInfCode": "10002",
            "buCode": "B29",
            "companyCode": "QZYY0",
            "companyName": "中国银行",
            "createdTime": "2018-09-14 19:49:04",
            "employeeNo": "11192424",
            "expiryDate": "2018-09-14T19:50:54.000+0800",
            "expiryDateStr": "2018-09-14 19:50:54",
            "failure": "Y",
            "id": 2813,
            "isValidity": "Y",
            "liabilityAccount": "QZYY0.0.2241390101.0.0.0.0.0.0.0",
            "placeId": "86679",
            "trxParty": "S:101968",
            "updatedTime": "2018-09-20 15:28:36",
            "vendorAccountName": "晓明",
            "vendorAccountNo": "4340611470033650",
            "vendorCode": "1124272",
            "vendorId": 101968,
            "vendorName": "晓明",
            "vendorSiteId": "86679",
            "vendorSiteName": "OFFICE",
            "vendorType": "EMPLOYEE"
        },
        {
            "accountDes": "中国银行",
            "advancePaymentAccount": "QZYY0.0.1221100101.0.0.0.0.0.0.0",
            "areaCode": "6528",
            "bankName": "中国银行",
            "bkInfCode": "10002",
            "buCode": "B29",
            "companyCode": "QZYY0",
            "companyName": "中国银行",
            "createdTime": "2018-09-14 19:49:04",
            "employeeNo": "11192424",
            "expiryDate": "2018-09-14T19:50:54.000+0800",
            "expiryDateStr": "2018-09-14 19:50:54",
            "failure": "Y",
            "id": 2813,
            "isValidity": "Y",
            "liabilityAccount": "QZYY0.0.2241390101.0.0.0.0.0.0.0",
            "placeId": "86679",
            "trxParty": "S:101968",
            "updatedTime": "2018-09-20 15:28:36",
            "vendorAccountName": "晓明",
            "vendorAccountNo": "4340611470033650",
            "vendorCode": "1124272",
            "vendorId": 101968,
            "vendorName": "晓明",
            "vendorSiteId": "86679",
            "vendorSiteName": "OFFICE",
            "vendorType": "EMPLOYEE"
        },
        {
            "accountDes": "中国银行",
            "advancePaymentAccount": "QZYY0.0.1221100101.0.0.0.0.0.0.0",
            "areaCode": "6528",
            "bankName": "中国银行",
            "bkInfCode": "10002",
            "buCode": "B29",
            "companyCode": "QZYY0",
            "companyName": "中国银行",
            "createdTime": "2018-09-14 19:49:04",
            "employeeNo": "11192424",
            "expiryDate": "2018-09-14T19:50:54.000+0800",
            "expiryDateStr": "2018-09-14 19:50:54",
            "failure": "Y",
            "id": 2813,
            "isValidity": "Y",
            "liabilityAccount": "QZYY0.0.2241390101.0.0.0.0.0.0.0",
            "placeId": "86679",
            "trxParty": "S:101968",
            "updatedTime": "2018-09-20 15:28:36",
            "vendorAccountName": "晓明",
            "vendorAccountNo": "4340611470033650",
            "vendorCode": "1124272",
            "vendorId": 101968,
            "vendorName": "晓明",
            "vendorSiteId": "86679",
            "vendorSiteName": "OFFICE",
            "vendorType": "EMPLOYEE"
        },
        {
            "accountDes": "中国银行",
            "advancePaymentAccount": "QZYY0.0.1221100101.0.0.0.0.0.0.0",
            "areaCode": "6528",
            "bankName": "中国银行",
            "bkInfCode": "10002",
            "buCode": "B29",
            "companyCode": "QZYY0",
            "companyName": "中国银行",
            "createdTime": "2018-09-14 19:49:04",
            "employeeNo": "11192424",
            "expiryDate": "2018-09-14T19:50:54.000+0800",
            "expiryDateStr": "2018-09-14 19:50:54",
            "failure": "Y",
            "id": 2813,
            "isValidity": "Y",
            "liabilityAccount": "QZYY0.0.2241390101.0.0.0.0.0.0.0",
            "placeId": "86679",
            "trxParty": "S:101968",
            "updatedTime": "2018-09-20 15:28:36",
            "vendorAccountName": "晓明",
            "vendorAccountNo": "4340611470033650",
            "vendorCode": "1124272",
            "vendorId": 101968,
            "vendorName": "晓明",
            "vendorSiteId": "86679",
            "vendorSiteName": "OFFICE",
            "vendorType": "EMPLOYEE"
        },
        {
            "accountDes": "中国银行",
            "advancePaymentAccount": "QZYY0.0.1221100101.0.0.0.0.0.0.0",
            "areaCode": "6528",
            "bankName": "中国银行",
            "bkInfCode": "10002",
            "buCode": "B29",
            "companyCode": "QZYY0",
            "companyName": "中国银行",
            "createdTime": "2018-09-14 19:49:04",
            "employeeNo": "11192424",
            "expiryDate": "2018-09-14T19:50:54.000+0800",
            "expiryDateStr": "2018-09-14 19:50:54",
            "failure": "Y",
            "id": 2813,
            "isValidity": "Y",
            "liabilityAccount": "QZYY0.0.2241390101.0.0.0.0.0.0.0",
            "placeId": "86679",
            "trxParty": "S:101968",
            "updatedTime": "2018-09-20 15:28:36",
            "vendorAccountName": "晓明",
            "vendorAccountNo": "4340611470033650",
            "vendorCode": "1124272",
            "vendorId": 101968,
            "vendorName": "晓明",
            "vendorSiteId": "86679",
            "vendorSiteName": "OFFICE",
            "vendorType": "EMPLOYEE"
        },
        {
            "accountDes": "中国银行",
            "advancePaymentAccount": "QZYY0.0.1221100101.0.0.0.0.0.0.0",
            "areaCode": "6528",
            "bankName": "中国银行",
            "bkInfCode": "10002",
            "buCode": "B29",
            "companyCode": "QZYY0",
            "companyName": "中国银行",
            "createdTime": "2018-09-14 19:49:04",
            "employeeNo": "11192424",
            "expiryDate": "2018-09-14T19:50:54.000+0800",
            "expiryDateStr": "2018-09-14 19:50:54",
            "failure": "Y",
            "id": 2813,
            "isValidity": "Y",
            "liabilityAccount": "QZYY0.0.2241390101.0.0.0.0.0.0.0",
            "placeId": "86679",
            "trxParty": "S:101968",
            "updatedTime": "2018-09-20 15:28:36",
            "vendorAccountName": "晓明",
            "vendorAccountNo": "4340611470033650",
            "vendorCode": "1124272",
            "vendorId": 101968,
            "vendorName": "晓明",
            "vendorSiteId": "86679",
            "vendorSiteName": "OFFICE",
            "vendorType": "EMPLOYEE"
        },
        {
            "accountDes": "中国银行",
            "advancePaymentAccount": "QZYY0.0.1221100101.0.0.0.0.0.0.0",
            "areaCode": "6528",
            "bankName": "中国银行",
            "bkInfCode": "10002",
            "buCode": "B29",
            "companyCode": "QZYY0",
            "companyName": "中国银行",
            "createdTime": "2018-09-14 19:49:04",
            "employeeNo": "11192424",
            "expiryDate": "2018-09-14T19:50:54.000+0800",
            "expiryDateStr": "2018-09-14 19:50:54",
            "failure": "Y",
            "id": 2813,
            "isValidity": "Y",
            "liabilityAccount": "QZYY0.0.2241390101.0.0.0.0.0.0.0",
            "placeId": "86679",
            "trxParty": "S:101968",
            "updatedTime": "2018-09-20 15:28:36",
            "vendorAccountName": "晓明",
            "vendorAccountNo": "4340611470033650",
            "vendorCode": "1124272",
            "vendorId": 101968,
            "vendorName": "晓明",
            "vendorSiteId": "86679",
            "vendorSiteName": "OFFICE",
            "vendorType": "EMPLOYEE"
        },
        {
            "accountDes": "中国银行",
            "advancePaymentAccount": "QZYY0.0.1221100101.0.0.0.0.0.0.0",
            "areaCode": "6528",
            "bankName": "中国银行",
            "bkInfCode": "10002",
            "buCode": "B29",
            "companyCode": "QZYY0",
            "companyName": "中国银行",
            "createdTime": "2018-09-14 19:49:04",
            "employeeNo": "11192424",
            "expiryDate": "2018-09-14T19:50:54.000+0800",
            "expiryDateStr": "2018-09-14 19:50:54",
            "failure": "Y",
            "id": 2813,
            "isValidity": "Y",
            "liabilityAccount": "QZYY0.0.2241390101.0.0.0.0.0.0.0",
            "placeId": "86679",
            "trxParty": "S:101968",
            "updatedTime": "2018-09-20 15:28:36",
            "vendorAccountName": "晓明",
            "vendorAccountNo": "4340611470033650",
            "vendorCode": "1124272",
            "vendorId": 101968,
            "vendorName": "晓明",
            "vendorSiteId": "86679",
            "vendorSiteName": "OFFICE",
            "vendorType": "EMPLOYEE"
        },
    ],
    "navigateFirstPage": 1,
    "navigateLastPage": 7,
    "navigatePages": 8,
    "navigatepageNums": [
        1,
        2,
        3,
        4,
        5,
        6,
        7
    ],
    "nextPage": 2,
    "pageNum": 1,
    "pageSize": 10,
    "pages": 7,
    "prePage": 0,
    "size": 10,
    "startRow": 1,
    "total": 67
}
Mock.mock(`${process.env.API.emsBaseDataURL}/vendor/findVendorListByType`, 'post', datas_v)
