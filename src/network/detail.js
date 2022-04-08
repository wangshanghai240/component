import {request} from './request'

// 请求详情页数据
export function getDetailData(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}
// 获取推荐列表数据
export function getRecommend(){
    return request({
        url:'/recommend',
    })
}
export class Goods{
    constructor(itemInfo,columns,services){
        this.title = itemInfo.title;
        this.price = itemInfo.price;
        this.lowNowPrice = itemInfo.lowNowPrice
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc
        this.discountBgColor = itemInfo.discountBgColor
        this.columns = columns;
        this.services = services;
    }
}

export class Shop{
    constructor(shopInfo){
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods;
    }
}