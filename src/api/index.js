import service from "@/utils/request";


/**
 ************************* 首页接口**********************
 * */

/**
* 获取echart数据
* */
export function getEchart(data) {
    return service.request({
        method: "get",
        url: `/?type=${data.type}`,
    })
}

