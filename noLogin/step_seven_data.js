/* General
Remote Address:10.17.171.11:8080
Request URL:http://static.mi.com/cart/
Request Method:GET
Status Code:200 OK
*/

/* Respones Headers
Accept-Ranges:bytes
Age:337
Cache-Control:max-age=600
Connection:Keep-Alive
Content-Length:72519
Content-Type:text/html; charset=utf-8
Date:Mon, 01 Feb 2016 01:54:00 GMT
ETag:"56ae373d-11b47"
Expires:Mon, 01 Feb 2016 02:04:00 GMT
Last-Modified:Sun, 31 Jan 2016 16:33:01 GMT
Proxy-Connection:Keep-Alive
Server:MIFE/3.0
Via:1.1 PASCPROXY1
X-Cacheable:MI-WWW-Cacheable
X-Via:1.1 dg49:88 (Cdn Cache Server V2.0), 1.1 zhdx137:8111 (Cdn Cache Server V2.0), 1.1 hydx21:2 (Cdn Cache Server V2.0)
*/



/* Request Headers
Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*//*;q=0.8
Accept-Encoding:gzip, deflate, sdch
Accept-Language:zh-CN,zh;q=0.8
Cookie:muuid=1450770821802_2635; xmuuid=XMGUEST-976AEF60-C0A6-11E5-834E-79B11ECF98D2; _newdevuuid=I1D5ftKnOayvI9zdSiBYh1OGIOfX9IrvTvTbIwaBwOaUhIUO77bcfznWqwIzzQeOM9qRjJp5MSeis5YxstEUQ53QPFGtpwZundIzpT6UY983gcTIqmCJt8qJET29AdWXSzzhq1CCw2XoineYZbmo7WkIiRG4KKlVb4tKAyMiFBkpY013SxjhCIe6MrdAQ2t4zkA2VbMN; _mmsid=1453949121424.6199; Hm_lvt_4982d57ea12df95a2b24715fb6440726=1453949122,1454031313; xm_user_www_num=2; lastsource=bzclk.baidu.com; mstz=3483a439883c8c4a-0ddb608103f045e9|%2F%2Fitem.mi.com%2Fbuyphone%2Fmi4|1033315935.12|pcpid|http%3A%2F%2Fitem.mi.com%2Fbuyphone%2Fmi4|http%3A%2F%2Fwww.mi.com%2Fmi4%2F; mstuid=1453425744489_2785; xm_vistor=1453425744489_2785_1454289032608-1454289750386
Host:static.mi.com
If-Modified-Since:Wed, 27 Jan 2016 13:11:20 GMT
If-None-Match:"56a8c1f8-11b4f"
Proxy-Connection:keep-alive
Referer:http://cart.mi.com/cart/recommend/goods_id/2143600001?package
User-Agent:Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4
*/

Respones:
<!doctype html>
<html lang="zh-CN" xml:lang="zh-CN">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta charset="UTF-8" />
<title>我的购物车——小米手机官网</title>
<meta name="viewport" content="width=1226" />
<link rel="shortcut icon" href="//s01.mifile.cn/favicon.ico" type="image/x-icon" />
<link rel="icon" href="//s01.mifile.cn/favicon.ico" type="image/x-icon" />
<link rel="stylesheet" href="//s01.mifile.cn/css/base.min.css?v2016a" />
<link rel="stylesheet" type="text/css" href="//s01.mifile.cn/css/cart.min.css?39656a" />
<script type="text/javascript">var _head_over_time = (new Date()).getTime();</script>
</head>
<body>
<div class="site-header site-mini-header">
    <div class="container">
        <div class="header-logo">
            <a class="logo ir" href="//www.mi.com/index.html" title="小米官网" >小米官网</a>
        </div>
        <div class="header-title" id="J_miniHeaderTitle"></div>
        <div class="topbar-info" id="J_userInfo">
        <a class="link" href="//order.mi.com/site/login" data-needlogin="true">登录</a><span class="sep">|</span><a class="link" href="https://account.xiaomi.com/pass/register" >注册</a>        </div>
    </div>
</div>

<div class="page-main">

    <div class="container">
        <div class="cart-loading loading" id="J_cartLoading">
            <div class="loader"></div>
        </div>
        <div class="cart-empty hide" id="J_cartEmpty">
            <h2>您的购物车还是空的！</h2>
            <p class="login-desc">登录后将显示您之前加入的商品</p>
            <a href="#" class="btn btn-primary btn-login" id="J_loginBtn">立即登录</a>
            <a href="//list.mi.com/0" class="btn btn-primary btn-shoping J_goShoping">马上去购物</a>
        </div>
        <div id="J_cartBox" class="hide">
            <div class="cart-goods-list" >
                <div class="list-head clearfix">
                    <div class="col col-check"><i class="iconfont icon-checkbox" id="J_selectAll">&#x221a;</i>全选</div>
                    <div class="col col-img">&nbsp;</div>
                    <div class="col col-name">商品名称</div>
                    <div class="col col-price">单价</div>
                    <div class="col col-num">数量</div>
                    <div class="col col-total">小计</div>
                    <div class="col col-action">操作</div>
                </div>
                <div class="list-body" id="J_cartListBody">
                </div>
            </div>
            <!-- 加价购 -->
            <div class="raise-buy-box" id="J_raiseBuyBox">
            </div>

            <div class="cart-bar clearfix" id="J_cartBar">
                <div class="section-left">
                    <a href="#" class="back-shopping J_goShoping">继续购物</a>
                    <span class="cart-total hide">共 <i id="J_cartTotalNum"></i> 件商品，已选择 <i id="J_selTotalNum"></i> 件</span>
                    <span class="cart-coudan hide" id="J_coudanTip">
                        ，还需 <i id="J_postFreeBalance"></i> 元即可免邮费  <a href="javascript:void(0);" id="J_showCoudan">立即凑单</a>
                    </span>
                </div>
                <span class="activity-money hide">
                    活动优惠：减 <i id="J_cartActivityMoney">0</i> 元
                </span>
                <span class="total-price">
                    合计（不含运费）：<em id="J_cartTotalPrice">00.00</em>元
                </span>
                <a href="javascript:void(0);" class="btn btn-a btn btn-primary" id="J_goCheckout">去结算</a>

                <div class="no-select-tip hide" id="J_noSelectTip">
                    请勾选需要结算的商品
                    <i class="arrow arrow-a"></i>
                    <i class="arrow arrow-b"></i>
                </div>
            </div>
        </div>

        <div class="cart-recommend" id="J_miRecommendBox"></div>
    </div>
</div>

<!-- 商品列表 模板 -->
<script  id="J_cartGoodsTemplate" type="text/x-dot-template">
    {{~it :value:index}}
        {{? !value.isOvercartTTL & !value.showCos && value.is_on_sale}}
            <div class="item-box">
                <div class="item-table J_cartGoods" data-info="{
                    commodity_id:'{{=value.commodity_id}}',
                    gettype:'{{=value.getType}}',
                    itemid:'{{=value.itemId}}',
                    num:'{{=value.num}}'}
                ">
                    <div class="item-row clearfix">
                        <div class="col col-check">
                            {{? value.sel_status === 1}}
                                <i class="iconfont icon-checkbox icon-checkbox-selected J_itemCheckbox" data-itemid="{{=value.itemId}}" data-status="{{=value.sel_status}}">&#x221a;</i>
                            {{?? value.sel_status === 0}}
                                <i class="iconfont icon-checkbox icon-checkbox  J_itemCheckbox" data-itemid="{{=value.itemId}}" data-status="{{=value.sel_status}}">&#x221a;</i>
                            {{?? value.sel_status === 2}}
                                 <i class="iconfont icon-checkbox icon-checkbox-show" >&#x221a;</i>
                            {{? }}
                        </div>
                        <div class="col col-img">
                            {{? value.noLink && value.image_url}}
                                <img alt="" src="{{=MI.cart.unit.formatImageUrl(value.image_url,'80')}}" width="80" height="80">
                            {{?? value.image_url}}
                                <a href="{{=value.goodsUrl}}" target="_blank">
                                    <img alt="" src="{{=MI.cart.unit.formatImageUrl(value.image_url,'80')}}" width="80" height="80">
                                </a>
                            {{?}}
                        </div>
                        <div class="col col-name">
                            {{? value.showTypeName || value.showType}}
                            <div class="tags">
                                {{? value.showTypeName}}
                                    <span class="tag tag-orange">{{=value.showTypeName}}</span>
                                {{?}}
                                {{? value.showType === 'bigtap'}}
                                    <span class="tag tag-green tag-openbuy">开放购买活动商品</span>
                                {{?}}
                            </div>
                            {{?}}

                            <h3 class="name">
                                {{? value.noLink }}
                                    {{=value.product_name}}
                                {{??}}
                                    <a href="{{=value.goodsUrl}}" target="_blank">
                                        {{=value.product_name}}
                                    </a>
                                {{?}}
                            </h3>
                            {{? value.commodity_id === '1143100014' }}
                                <p class="desc">
                                    此商品为预售商品，15天内发货<br>
                                    内含：1本参与感书籍、1件纪念版T恤、2本参与感海报主题笔记本
                                </p>
                            {{?}}
                            {{? value.adaptStr}}
                                <p class="desc">
                                    <span>适配机型：</span>
                                    {{=value.adaptStr}}
                                </p>
                            {{?}}

                            {{? value.isContract }}
                                <p class="desc">{{=value.contractContent}}<p>
                            {{?}}

                            {{? value.showOpenActTime}}
                                <p class="desc">
                                    本商品为开放购买商品，请您在 {{=MI.cart.unit.formatDate(value.cartTTL, '##M##月##D##日 ##h##:##m##')}} 前下单
                                </p>
                            {{?}}

                            {{? value.showCommonCartTTL && value.cartTTL > 0}}
                                <p class="desc">
                                    请您在 {{=MI.cart.unit.formatDate(value.cartTTL, '##M##月##D##日 ##h##:##m##')}} 前下单
                                </p>
                            {{? }}
                        </div>
                        <div class="col col-price">
                            {{=value.salePrice}}元
                        </div>
                        <div class="col col-num">
                            {{? value.can_change_num}}
                                <div class="change-goods-num clearfix J_changeGoodsNum">
                                    <a href="javascript:void(0)" class="J_minus"><i class="iconfont">&#xe60b;</i></a>
                                    <input tyep="text" name="{{=value.itemId}}" value="{{=value.num}}" data-num="{{=value.num}}" data-buylimit="{{=value.buy_limit}}" autocomplete="off" class="goods-num J_goodsNum">
                                    <a href="javascript:void(0)" class="J_plus"><i class="iconfont">&#xe609;</i></a>

                                    {{? (parseInt(value.buy_limit) - parseInt(value.num)) > 0 && parseInt(value.num) > 1 }}
                                        {{? parseInt(value.buy_limit) - parseInt(value.num) > 10 }}
                                            <div class="msg J_canBuyLimit">还可买 10 件以上</div>
                                        {{?? }}
                                            <div class="msg J_canBuyLimit">还可买 {{=parseInt(value.buy_limit) - parseInt(value.num)}} 件</div>
                                        {{? }}
                                    {{? }}
                                </div>
                            {{??}}
                                {{=value.num}}
                            {{?}}
                        </div>
                        <div class="col col-total">
                            {{=value.subtotal}}元
                            <p class="pre-info">
                                {{? value.elementsGoods  && value.elementsGoods.length > 0 && value.saveMoney}}
                                    已优惠{{=value.saveMoney}}元
                                {{?}}
                            </p>
                        </div>
                        <div class="col col-action">
                            <a id="{{=value.itemId}}" data-msg="{{=value.delConfirm}}" href="javascript:void(0);" title="删除" class="del J_delGoods"><i class="iconfont">&#xe602;</i></a>
                        </div>
                    </div>
                </div>

                {{? value.pulse_gift && value.pulse_gift.length > 0}}
                    <div class="item-sub-box">
                        {{~value.pulse_gift :giftValue:giftIndex}}
                            <div class="item-table">
                                <div class="item-row clearfix">
                                    <div class="col col-img">
                                        <a href="{{=giftValue.link_url}}" target="_blank" >
                                            <img alt="" src="{{=MI.cart.unit.formatImageUrl(giftValue.image_url,'60')}}" width="60" height="60">
                                        </a>
                                    </div>
                                    <div class="col col-name">
                                        <div class="tags"> <span class="tag tag-red">赠品</span> </div>
                                        <h3 class="name">
                                            <a href="{{=giftValue.link_url}}" target="_blank">{{=giftValue.product_name}}</a>
                                        </h3>
                                        {{? giftValue.selectable }}
                                        <p class="desc">
                                            <a href="javascript:void(0)" class="J_chooseGift" data-actid="{{=giftValue.actId}}">选择其他版本</a>
                                        </p>
                                        {{?}}
                                    </div>
                                    <div class="col col-price">
                                    </div>
                                    <div class="col col-num">
                                        {{=giftValue.num}}
                                    </div>
                                    <div class="col col-total">
                                    </div>
                                    <div class="col col-action">
                                    </div>
                                </div>
                            </div>
                        {{~}}
                        <i class="arrow"></i>
                    </div>
                {{?}}

                {{? value.pulse_reduction && value.pulse_reduction.length > 0}}
                    <div class="item-sub-box">
                        {{~value.pulse_reduction :reductionValue:reductionIndex}}
                            <div class="item-table">
                                <div class="item-row clearfix">
                                    <div class="col col-img">
                                        <span class="icon-activity icon-activity-reduction">满减</span>
                                    </div>
                                    <div class="col col-name">
                                        <h3 class="name">
                                            {{=reductionValue.actName}}
                                        </h3>
                                    </div>
                                    <div class="col col-price">
                                        -{{=reductionValue.reduceMoneySingle}}元
                                    </div>
                                    <div class="col col-num">
                                        {{=reductionValue.times}}
                                    </div>
                                    <div class="col col-total">
                                        -{{=reductionValue.reduceMoney}}元
                                    </div>
                                    <div class="col col-action">
                                    </div>
                                </div>
                            </div>
                        {{~}}
                        <i class="arrow"></i>
                    </div>
                {{?}}

                {{? value.pulse_bargains_cart && value.pulse_bargains_cart.length > 0 }}
                    <div class="item-sub-box">
                        {{~value.pulse_bargains_cart :bcValue:bcIndex}}
                            <div class="item-table">
                                <div class="item-row clearfix">
                                    <div class="col col-img">
                                        <a href="{{=bcValue.goodsUrl}}" target="_blank" >
                                            <img alt="" src="{{=MI.cart.unit.formatImageUrl(bcValue.image_url,'60')}}" width="60" height="60">
                                        </a>
                                    </div>
                                    <div class="col col-name">
                                        <div class="tags"> <span class="tag tag-orange">加价购</span> </div>
                                        <h3 class="name">
                                            <a href="{{=bcValue.goodsUrl}}" target="_blank">{{=bcValue.product_name}}</a>
                                        </h3>
                                    </div>
                                    <div class="col col-price">
                                        {{=bcValue.salePrice}}元
                                    </div>
                                    <div class="col col-num">
                                        {{=bcValue.num}}
                                    </div>
                                    <div class="col col-total">
                                            {{=bcValue.salePrice * parseInt(bcValue.num)}}元
                                    </div>
                                    <div class="col col-action">
                                        <a id="{{=bcValue.itemId}}" data-msg="{{=bcValue.delConfirm}}" href="javascript:void(0);" title="删除" class="del J_delGoods"><i class="iconfont">&#xe602;</i></a>
                                    </div>
                                </div>
                            </div>
                        {{~}}
                        <i class="arrow"></i>
                    </div>
                {{?}}

                {{? value.pulse_bargains && value.pulse_bargains.length > 0}}
                    <div class="item-sub-box">
                        {{~value.pulse_bargains :bargainsValue:bargainsIndex}}
                            {{? bargainsValue.num > 0}}
                            <div class="extend-buy J_raiseBuyItem" data-info="{
                                isBatch:'{{=bargainsValue.selectable ? 'true' : 'false'}}',
                                productId:'{{=bargainsValue.product_id}}',
                                goodsId:'{{=bargainsValue.product_id}}-0-1-{{=bargainsValue.actId}}',
                                bargainId:'{{=bargainsValue.bargainId}}',
                                actId:'{{=bargainsValue.actId}}',
                                type:'1',
                                num: {{=bargainsValue.num}},
                                maxnum: {{=bargainsValue.maxnum}}
                            }">
                                <i class="iconfont icon-plus">&#xe609;</i>{{=bargainsValue.product_name}} {{=bargainsValue.salePrice}}元
                                {{? bargainsValue.selecInfo && bargainsValue.selecInfo.length > 0}}
                                    （多版本可选）
                                {{? }}
                            </div>
                            {{? }}
                        {{~}}
                    </div>
                {{?}}

                {{? value.elementsGoods && value.elementsGoods.length > 0 && !value.isContract}}
                    <div class="item-sub-box">
                        {{~value.elementsGoods :goodsValue:goodsIndex}}
                            <div class="item-table">
                                <div class="item-row clearfix">
                                    <div class="col col-img">
                                        <a href="{{=goodsValue.product_link_url}}" target="_blank" >
                                            <img alt="" src="{{=MI.cart.unit.formatImageUrl(goodsValue.image_url,'60')}}" width="60" height="60">
                                        </a>
                                    </div>
                                    <div class="col col-name">
                                        <h3 class="name">
                                            <a href="{{=goodsValue.product_link_url}}" target="_blank">{{=goodsValue.product_name}}</a>
                                        </h3>
                                    </div>
                                    <div class="col col-price">
                                        {{? !goodsValue.is_suit}}
                                            {{=goodsValue.price}}元
                                        {{? }}
                                    </div>
                                    <div class="col col-num">
                                        1
                                    </div>
                                    <div class="col col-total">
                                        {{? !goodsValue.is_suit}}
                                            {{=goodsValue.price}}元
                                        {{? }}
                                    </div>
                                    <div class="col col-action">
                                    </div>
                                </div>
                            </div>
                        {{~}}
                        <i class="arrow"></i>
                    </div>
                {{?}}

                {{? value.properties && value.properties.insurance}}
                    {{?  value.properties.insurance.itemId }}
                        <div class="item-sub-box">
                            <div class="item-table" data-info="{
                                parent_itemId:'{{=value.itemId}}',
                                name:'{{=value.properties.insurance.name}}',
                                price:'{{=value.properties.insurance.price}}',
                                sku:'{{=value.properties.insurance.sku}}',
                                goodsId:'{{=value.properties.insurance.goods_id}}',
                                itemId:'{{=value.properties.insurance.itemId}}',
                                count:'{{=value.num}}'
                            }">
                                <div class="item-row clearfix">
                                    <div class="col col-img">
                                        <img src="{{=MI.cart.unit.formatImageUrl(value.properties.insurance.image_url,'50')}}" alt="" width="50" height="50">
                                    </div>
                                    <div class="col col-name">
                                        <h3 class="name">
                                            <a href="{{=MI.GLOBAL_CONFIG.wwwSite}}/service/safe" target="_blank">{{=value.properties.insurance.name}}</a>
                                            <a href="{{=MI.GLOBAL_CONFIG.cartSite}}/static/insuranceAgreement.php?type={{=value.properties.insurance.type}}" target="_blank" class="baoxian-service">查看详细条款</a>
                                        </h3>
                                    </div>
                                    <div class="col col-price">
                                        {{=value.properties.insurance.price}}元
                                    </div>
                                    <div class="col col-num">
                                        {{=value.num}}
                                    </div>
                                    <div class="col col-total">
                                        {{=value.properties.insurance.subtotal}}元
                                    </div>
                                    <div class="col col-action">
                                        <a id="{{=value.properties.insurance.itemId}}" data-msg="确定删除吗？" href="{{=MI.GLOBAL_CONFIG.orderSite}}/cart/delete/id/{{=value.properties.insurance.itemId}}" title="删除" class="del J_delGoods"><i class="iconfont">&#xe602;</i></a>
                                    </div>
                                </div>
                            </div>
                            <i class="arrow"></i>
                        </div>
                    {{?? value.properties.insurance.itemId === ''}}
                        <div class="item-sub-box">
                            <div class="extend-buy J_showBaoxian" data-info="{
                                    name:'{{=value.properties.insurance.name}}',
                                    parent_itemId:'{{=value.itemId}}',
                                    price:'{{=value.properties.insurance.price}}',
                                    sku:'{{=value.properties.insurance.sku}}',
                                    goodsId:'{{=value.properties.insurance.goods_id}}',
                                    itemId:'{{=value.properties.insurance.itemId}}',
                                    count:'{{=value.num}}',
                                    type:'{{=value.properties.insurance.type}}'
                                }">
                                <i class="iconfont icon-plus">&#xe609;</i>{{=value.properties.insurance.name}} ¥{{=value.properties.insurance.price}}/份
                                <a href="javascript:void(0);" data-info="{
                                    name:'{{=value.properties.insurance.name}}',
                                    parent_itemId:'{{=value.itemId}}',
                                    price:'{{=value.properties.insurance.price}}',
                                    sku:'{{=value.properties.insurance.sku}}',
                                    goodsId:'{{=value.properties.insurance.goods_id}}',
                                    itemId:'{{=value.properties.insurance.itemId}}',
                                    count:'{{=value.num}}',
                                    type:'{{=value.properties.insurance.type}}'
                                }">查看详细条款</a>
                            </div>
                        </div>
                    {{?}}
                {{?}}

                {{? value.properties && value.properties.wallMount}}
                    {{? !value.properties.wallMount.itemId}}
                        <div class="item-sub-box">
                            <div class="extend-buy J_showGuajia" data-gid="{{=value.properties.wallMount.goods_id}}" data-parent_itemid="{{=value.itemId}}">
                                <i class="iconfont icon-plus">&#xe609;</i>{{=value.properties.wallMount.name}} <a href="javascript:void(0);"  data-gid="{{=value.properties.wallMount.goods_id}}" data-parent_itemid="{{=value.itemId}}">查看详细条款</a>
                            </div>
                        </div>
                    {{?? value.properties.wallMount.itemId }}
                        <div class="item-sub-box">
                            <div class="item-table">
                                <div class="item-row clearfix">
                                    <div class="col col-img">
                                        <img src="{{=MI.cart.unit.formatImageUrl(value.properties.wallMount.image_url,'50')}}" alt="" width="50" height="50">
                                    </div>
                                    <div class="col col-name">
                                        <h3 class="name">
                                            {{=value.properties.wallMount.name}} 
                                        </h3>
                                    </div>
                                    <div class="col col-price">
                                    </div>
                                    <div class="col col-num">
                                    </div>
                                    <div class="col col-total">
                                    </div>
                                    <div class="col col-action">
                                        <a id="{{= value.properties.wallMount.itemId}}" data-msg="确定删除吗？" href="javascript:void(0);" title="删除" class="del J_delGoods"><i class="iconfont">&#xe602;</i></a>
                                    </div>
                                </div>
                            </div>
                            <i class="arrow"></i>
                        </div>
                    {{?}}
                {{?}}

                {{? value.properties && value.properties.waterTap}}
                    {{? !value.properties.waterTap.itemId}}
                        <div class="item-sub-box">
                            <div class="extend-buy J_showWaterInstall" data-gid="{{=value.properties.waterTap.goods_id}}" data-parent_itemid="{{=value.itemId}}">
                                <i class="iconfont icon-plus">&#xe609;</i>{{=value.properties.waterTap.name}} <a href="javascript:void(0);"  data-gid="{{=value.properties.waterTap.goods_id}}" data-parent_itemid="{{=value.itemId}}">查看详细条款</a>
                            </div>
                        </div>
                    {{?? value.properties.waterTap.itemId }}
                        <div class="item-sub-box">
                            <div class="item-table">
                                <div class="item-row clearfix">
                                    <div class="col col-img">
                                        <img src="{{=MI.cart.unit.formatImageUrl(value.properties.waterTap.image_url,'50')}}" alt="" width="50" height="50">
                                    </div>
                                    <div class="col col-name">
                                        <h3 class="name">
                                            {{=value.properties.waterTap.name}} 
                                        </h3>
                                    </div>
                                    <div class="col col-price">
                                    </div>
                                    <div class="col col-num">
                                    </div>
                                    <div class="col col-total">
                                    </div>
                                    <div class="col col-action">
                                        <a id="{{= value.properties.waterTap.itemId}}" data-msg="确定删除吗？" href="javascript:void(0);" title="删除" class="del J_delGoods"><i class="iconfont">&#xe602;</i></a>
                                    </div>
                                </div>
                            </div>
                            <i class="arrow"></i>
                        </div>
                    {{?}}
                {{?}}
            </div>
        {{? }}
    {{~}}
</script>

<!-- 活动商品 -->
<script  id="J_cartActivitysTemplate" type="text/x-dot-template">
    {{? it.gift && it.gift.length > 0}}
        {{~it.gift :giftValue:giftIndex}}
            <div class="item-box">
                <div class="item-table">
                    <div class="item-row clearfix">
                        <div class="col col-check">
                            <i class="iconfont icon-checkbox icon-checkbox-show" >&#x221a;</i>
                        </div>
                        <div class="col col-img">
                            <a href="{{=MI.GLOBAL_CONFIG.itemSite}}/{{=giftValue.commodity_id}}.html" target="_blank" >
                                <img src="{{=MI.cart.unit.formatImageUrl(giftValue.image_url,'80')}}" width="80" height="80">
                            </a>
                        </div>
                        <div class="col col-name">
                            <div class="tags">
                                <span class="tag tag-red">赠品</span>
                            </div>
                            <h3 class="name">
                                <a target="_blank" href="{{=MI.GLOBAL_CONFIG.itemSite}}/{{=giftValue.commodity_id}}.html">{{=giftValue.product_name}}</a>
                            </h3>
                            <p class="desc">
                                {{=giftValue.actName}}
                                {{? giftValue.selectable}}
                                    <br><a href="javascript:void(0)" class="J_chooseGift" data-actid="{{=giftValue.actId}}">选择其他赠品</a>
                                {{?}}
                            </p>
                        </div>
                        <div class="col col-price">
                            {{=giftValue.salePrice}}元
                        </div>
                        <div class="col col-num">
                            {{? giftValue.getType === 'gift' }}
                                {{=giftValue.num}}
                            {{??}}
                                <select name="{{=giftValue.itemId}}" id="J_cart_{{=giftValue.itemId}}" data-select="1">
                                    {{ for (var $i = 1; $i <= parseInt(giftValue.maxDropdownOption); $i+=1) { }}
                                        {{ if ($i ==  giftValue.num){  }}
                                            <option value= "{{=$i}}" selected='selected' >{{=$i}}</option>
                                        {{ }else{ }}
                                            <option value= "{{=$i}}"   >{{=$i}}</option>
                                        {{ } }}
                                    {{ } }}
                                </select>
                            {{?}}
                        </div>
                        <div class="col col-total">
                            {{=giftValue.subtotal}}元
                        </div>
                        <div class="col col-action">
                        </div>
                    </div>
                </div>
            </div>
        {{~}}
    {{?}}

    {{? it.reduction && it.reduction.length > 0}}
        {{~it.reduction :reductionValue:reductionIndex}}
            <div class="item-box">
                <div class="item-table">
                    <div class="item-row clearfix">
                        <div class="col col-check">
                            <i class="iconfont icon-checkbox icon-checkbox-show" >&#x221a;</i>
                        </div>
                        <div class="col col-img">
                            <span class="icon-activity icon-activity-reduction">满减</span>
                        </div>
                        <div class="col col-name">
                            <h3 class="name">
                                {{=reductionValue.actName}}
                            </h3>
                        </div>
                        <div class="col col-price">
                            -{{=reductionValue.reduceMoneySingle}}元
                        </div>
                        <div class="col col-num">
                            {{=reductionValue.times}}
                        </div>
                        <div class="col col-total">
                            -{{=reductionValue.reduceMoney}}元
                        </div>
                        <div class="col col-action">
                        </div>
                    </div>
                </div>
            </div>
        {{~}}
    {{?}}

    {{? it.coupons && it.coupons.length > 0}}
        {{~it.coupons :couponsValue:couponsIndex}}
            <div class="item-box">
                <div class="item-table">
                    <div class="item-row clearfix">
                        <div class="col col-check">
                            <i class="iconfont icon-checkbox icon-checkbox-show" >&#x221a;</i>
                        </div>
                        <div class="col col-img">
                            <span class="icon-activity icon-activity-coupons">返券</span>
                        </div>
                        <div class="col col-name">
                            <h3 class="name">
                                {{=couponsValue.actName}}  {{=couponsValue.coupon_type_name}}
                            </h3>
                        </div>
                        <div class="col col-price">
                        </div>
                        <div class="col col-num">
                            {{=couponsValue.coupon_num}}
                        </div>
                        <div class="col col-total">
                        </div>
                        <div class="col col-action">
                        </div>
                    </div>
                </div>
            </div>
        {{~}}
    {{?}}

    {{? it.postFree && it.postFree.actName}}
        <div class="item-box">
            <div class="item-table">
                <div class="item-row clearfix">
                    <div class="col col-check">
                        <i class="iconfont icon-checkbox icon-checkbox-show" >&#x221a;</i>
                    </div>
                    <div class="col col-img">
                        <span class="icon-activity icon-activity-postfree">免邮</span>
                    </div>
                    <div class="col col-name">
                        <h3 class="name">
                            免邮费：{{=it.postFree.actName}}
                        </h3>
                    </div>
                    <div class="col col-price">
                    </div>
                    <div class="col col-num">
                    </div>
                    <div class="col col-total">
                    </div>
                    <div class="col col-action">
                    </div>
                </div>
            </div>
        </div>
    {{?}}
</script>

<!-- 加价购 -->
<script  id="J_cartRaisebuyTemplate" type="text/x-dot-template">
    {{~it :value:index}}
        {{? parseInt(value.num) === 0 }}
            {{var  sel = 'hide'; }}
        {{??}}
            {{var  sel = ''; }}
        {{?}}
        <div class="item {{=sel}} J_raiseBuyItem" data-info="{
            isBatch:'{{=value.selectable ? 'true' : 'false'}}',
            productId:'{{=value.product_id}}',
            goodsId:'{{=value.product_id}}-0-1-{{=value.actId}}',
            bargainId:'{{=value.bargainId}}',
            actId:'{{=value.actId}}',
            type:'1',
            num:{{=value.num}},
            maxnum:{{=value.maxnum}}
        }">
            {{? value.bargain_name}}
                <i class="iconfont icon-plus">&#xe609;</i>{{=value.bargain_name}}
            {{??}}
                <i class="iconfont icon-plus">&#xe609;</i>{{=value.product_name}}
            {{?}}
        </div>
    {{~}}
</script>

<script id="J_cartRaisebuyClassTemplate" type="text/x-dot-template">
    {{~it :value:index}}
        <div class="modal fade modal-hide modal-choose-pro J_modalRaisebuy J_carouselContainer" id="J_choosePro-{{=value.actId}}" data-isadd="true" >
            <div class="modal-header">
                <span class="close" data-dismiss='modal'><i class="iconfont">&#xe602;</i></span>
                <h3>选择产品</h3>
            </div>
            <div class="modal-body">
                <ul class="clearfix list J_chooseProList {{? value.selecInfo.length > 3 }} J_carouselList {{?}}">
                    {{? value.selecInfo && value.selecInfo.length >0 }}
                        {{~value.selecInfo :itemValue:itemIndex}}
                            {{? itemValue.isBuy === 'true' }}
                                <li class="span4" data-gid="{{=itemValue.product_id}}-0-1-{{=value.actId}}" data-num="{{=itemValue.num}}" data-isbuy="{{=itemValue.isBuy}}" data-pid="{{=itemValue.product_id}}" data-actid="{{=value.actId}}">
                            {{??}}
                                <li class="span4" data-gid="{{=itemValue.product_id}}-0-1-{{=value.actId}}" data-num="{{=itemValue.shopcart_num ? itemValue.shopcart_num : 0}}" data-maxnum="{{=value.maxnum ? value.maxnum : ''}}" data-pid="{{=itemValue.product_id}}" data-actid="{{=value.actId}}">
                            {{?}}
                                <img disabled="" data-src="{{=MI.cart.unit.formatImageUrl(itemValue.image_url,'220')}}" alt="" width="220" height="220">
                                <p class="g-name">{{=itemValue.product_name}}</p>
                                <p class="g-price">{{=value.salePrice}}元</p>
                                <i class="icon-radio"></i>
                            </li>
                        {{~}}
                    {{?}}
                </ul>
            </div>
            <div class="modal-footer">
                <a href="javascript:void(0);" class="btn btn-gray btn-disable J_chooseProBtn" data-actid="{{=value.actId}}" data-type="1">加入购物车</a>
            </div>
        </div>
    {{~}}
</script>


<script id="J_goodsSubRaisebuyClassTemplate" type="text/x-dot-template">
    {{~it :value:index}}
        <div class="modal fade modal-hide modal-choose-pro J_modalGoodsSubRaisebuy J_carouselContainer" id="J_choosePro-{{=value.actId}}" data-isadd="true" >
            <div class="modal-header">
                <span class="close" data-dismiss='modal'><i class="iconfont">&#xe602;</i></span>
                <h3>选择产品</h3>
            </div>
            <div class="modal-body">
                <ul class="clearfix list J_chooseProList {{? value.selecInfo.length > 3 }} J_carouselList {{?}}">
                    {{? value.selecInfo && value.selecInfo.length >0 }}
                        {{~value.selecInfo :itemValue:itemIndex}}
                            {{? itemValue.isBuy === 'true' }}
                                <li class="span4" data-gid="{{=itemValue.product_id}}-0-1-{{=value.actId}}" data-num="{{=itemValue.num}}" data-isbuy="{{=itemValue.isBuy}}" data-pid="{{=itemValue.product_id}}" data-actid="{{=value.actId}}">
                            {{??}}
                                <li class="span4" data-gid="{{=itemValue.product_id}}-0-1-{{=value.actId}}" data-num="{{=itemValue.shopcart_num ? itemValue.shopcart_num : 0}}" data-maxnum="{{=value.maxnum ? value.maxnum : ''}}" data-pid="{{=itemValue.product_id}}" data-actid="{{=value.actId}}">
                            {{?}}
                                <img disabled="" data-src="{{=MI.cart.unit.formatImageUrl(itemValue.image_url,'220')}}" alt="" width="220" height="220">
                                <p class="g-name">{{=itemValue.product_name}}</p>
                                <p class="g-price">{{=value.salePrice}}元</p>
                                <i class="icon-radio"></i>
                            </li>
                        {{~}}
                    {{?}}
                </ul>
            </div>
            <div class="modal-footer">
                <a href="javascript:void(0);" class="btn btn-gray btn-disable J_chooseProBtn" data-actid="{{=value.actId}}" data-type="1">加入购物车</a>
            </div>
        </div>
    {{~}}
</script>

<!-- 凑单 -->
<script id="J_cartCoudanTemplate" type="text/x-dot-template">
    <div class="modal fade modal-hide modal-choose-pro modal-coudan J_modalCoudan J_carouselContainer" id="J_CoudanBox" >
        <div class="modal-header">
            <span class="close" data-dismiss="modal"><i class="iconfont">&#xe602;</i></span>
            <h3>选购凑单商品</h3>
            <p class="desc" id="J_coudanDesc">你还需要凑<span class="money"><i id="J_coudanMoney"></i>元</span>即可免运费</p>
            <p class="desc over hide" id="J_coudanOver">您已满足免运费条件</p>
        </div>
        <div class="modal-body" >
            <ul class="clearfix list J_chooseProList  J_carouselList">
                {{~it :value:index}}
                    <li class="span4" data-coudan="true" data-gid="{{=value.product_id}}" data-price="{{=value.price}}">

                        <img data-src="{{=MI.cart.unit.formatImageUrl(value.image_origin,'220')}}" alt="{{=value.product_name}}">
                        <p class="g-name">{{=value.product_name}}</p>
                        <p class="g-price">
                            {{=value.price}} 元
                        </p>
                        <i class="icon-radio"></i>
                    </li>
                {{~}}
            </ul>
        </div>
        <div class="modal-footer">
            <a href="javascript:void(0);" class="btn btn-gray btn-disable J_chooseProBtn">加入购物车</a>
        </div>
    </div>
</script>

<!-- 礼物 -->
<script id="J_cartGiftTemplate" type="text/x-dot-template">
    {{~it :value:index}}
        <div class="modal fade modal-hide modal-choose-pro J_modalGift J_carouselContainer" id="J_choosePro-{{=value.actId}}" data-isgift="true">
            <div class="modal-header">
                <span class="close" data-dismiss='modal'><i class="iconfont">&#xe602;</i></span>
                <h3>选择产品</h3>
                <div class="more J_carouselControl"></div>
            </div>
            <div class="modal-body">
                <ul class="clearfix list J_chooseProList {{? value.selecInfo.length > 3 }} J_carouselList {{?}}">
                    {{? value.selecInfo && value.selecInfo.length >0 }}
                        {{~value.selecInfo :itemValue:itemIndex}}
                            <li class="span4" data-gid="{{=itemValue.product_id}}" data-price={{=itemValue.product_id}}-0-1-{{=value.actId}}-2>

                                <img   data-src="{{=MI.cart.unit.formatImageUrl(itemValue.image_url,'220')}}" alt="" width="220" height="220">
                                <p class="g-name">{{=itemValue.product_name}}</p>
                                <p class="g-price">{{=itemValue.price}}元</p>
                                <i class="icon-radio"></i>
                            </li>
                        {{~}}
                    {{?}}
                </ul>
            </div>
            <div class="modal-footer">
                <a href="javascript:void(0);" class="btn btn-gray btn-disable J_chooseProBtn" data-actid="{{=value.actId}}" data-type="2">加入购物车</a>
            </div>
        </div>
    {{~}}
</script>

<!-- 过期、售罄商品 模版 -->
<script  id="J_cartCloseTemplate" type="text/x-dot-template">
{{~it :value:index}}
    <div class="item-box">
        <div class="item-table">
            <div class="item-row clearfix">
                <div class="col col-check">
                    {{? value.sel_status === 1}}
                        <i class="iconfont icon-checkbox icon-checkbox-selected J_itemCheckbox" data-itemid="{{=value.itemId}}" data-isdis="true" data-status="{{=value.sel_status}}">&#x221a;</i>
                    {{?? }}
                        &nbsp;
                    {{? }}
                </div>
                <div class="col col-status">
                    {{? value.showCos}}
                        售罄
                    {{?}}
                    {{? value.isOvercartTTL || value.showOpenActStatus }}
                        失效
                    {{?}}

                    {{? !value.is_on_sale }}
                        下架
                    {{? }}
                </div>
                <div class="col col-img">
                    {{? value.noLink }}
                        <img alt="" src="{{=MI.cart.unit.formatImageUrl(value.image_url,'80')}}" width="80" height="80">
                    {{??}}
                        <a href="{{=value.goodsUrl}}" target="_blank">
                            <img alt="" src="{{=MI.cart.unit.formatImageUrl(value.image_url,'80')}}" width="80" height="80">
                        </a>
                    {{?}}
                </div>
                <div class="col col-name">
                    <h3 class="name">
                        {{? value.noLink }}
                            {{=value.product_name}}
                        {{??}}
                            <a href="{{=value.goodsUrl}}" target="_blank">
                                {{=value.product_name}}
                            </a>
                        {{?}}
                    </h3>
                    {{? value.adaptStr}}
                        <p class="desc">
                            <span>适配机型：</span>
                            {{=value.adaptStr}}
                        </p>
                    {{? }}
                    {{? value.showType === 'bigtap'}}
                    <p class="desc">您未在{{=MI.cart.unit.formatDate(value.cartTTL, '##M##月##D##日 ##h##:##m##')}}前下单，本次开放购买不能下单。</p>
                    {{?}}
                </div>
                <div class="col col-price">
                    {{=value.salePrice}}元
                </div>
                <div class="col col-num">
                    {{=value.num}}
                </div>
                <div class="col col-total">
                    {{=value.subtotal}}元
                </div>
                <div class="col col-links">
                    {{? value.isOvercartTTL}}
                        <a href="javascript:void(0);" class="J_addFavorite add-favorite" data-gid="{{=value.commodity_id}}"><i class="iconfont hollow">&#xe614;</i><i class="iconfont solid">&#xe631;</i>喜欢</a>
                    {{?}}

                    {{? value.showCos || !value.is_on_sale}}
                        <a href="{{=MI.GLOBAL_CONFIG.orderSite}}/misc/subscribe/goods/{{=value.goodsId}}" target="_blank"><i class="iconfont">&#xe606;</i>到货提醒</a>
                    {{?}}
                </div>
                <div class="col col-action">
                    <a id="{{=value.itemId}}" data-msg="{{=value.delConfirm}}" href="javascript:void(0);" title="删除" class="del J_delGoods"><i class="iconfont">&#xe602;</i></a>
                </div>
            </div>
        </div>
    </div>
{{~}}
</script>


<!-- 删除开放购买商品提示 -->
<div class="modal fade modal-hide  modal-alert" id="J_modalAlert" >
    <div class="modal-bd">
        <div class="text">
            <h3 id="J_alertMsg"></h3>
        </div>
        <div class="actions">
            <button class="btn btn-gray" data-dismiss="modal" id="J_alertCancel">取消</button>
            <button class="btn btn-primary"  data-dismiss="modal" id="J_alertOk">确定</button>
        </div>
        <a class="close" data-dismiss="modal"  href="javascript: void(0);"><i class="iconfont">&#xe602;</i></a>
    </div>
</div>


<!--结算提示 -->
<script  id="J_preCheckTipTemplate" type="text/x-dot-template">
    {{? it.data.items && it.data.items.length}}
    <div class="modal fade modal-hide  modal-precheck-tip modal-precheck-tip-{{=it.data.items.length}}" id="J_modalPrecheckTip" >
    {{?? }}
        {{? it.texts.msg}}
            <div class="modal fade modal-hide  modal-precheck-tip modal-precheck-tip-msg" id="J_modalPrecheckTip" >
        {{?? }}
            <div class="modal fade modal-hide  modal-precheck-tip" id="J_modalPrecheckTip" >
        {{? }}
    {{? }}

    {{? it.texts.title}}
    <div class="modal-hd">
        <h3 class="title">{{=it.texts.title}}</h3>
        <a class="close" data-dismiss="modal"  href="javascript: void(0);"><i class="iconfont">&#xe602;</i></a>
    </div>
    {{?? }}
    <a class="close" data-dismiss="modal"  href="javascript: void(0);"><i class="iconfont">&#xe602;</i></a>
    {{? }}

    <div class="modal-bd">
        {{? it.texts.msg}}
            <p class="msg">{{=it.texts.msg}}</p>
        {{? }}

        {{? it.data.items && it.data.items.length}}
            <ul class="list clearfix" id="J_preCheckList">
            {{~it.data.items :itemValue:itemIndex}}
                <li data-itemid="{{=itemValue.itemId}}" data-gid="{{=itemValue.goodsId}}">
                {{? itemValue.image_url}}
                    <img src="{{=MI.cart.unit.formatImageUrl(itemValue.image_url,'160')}}" alt="{{=itemValue.product_name}}">
                {{? }}
                    <h3>{{=itemValue.product_name}}</h3>
                    <p class="price">{{=itemValue.salePrice}}元</p>
                </li>
            {{~}}
            </ul>
        {{? }}
    </div>
    <div class="modal-ft">
        <a href="javascript:void(0);" class="btn btn-primary" id="J_preCheckBtn" {{? it.texts.action }} data-action="{{=it.texts.action}}" {{??}} data-dismiss="modal" {{?}}>{{=it.texts.btn}}</a>
    </div>
</div>
</script>
<!-- 保险弹窗 -->
<!-- 保险弹窗 -->
<div class="modal fade in modal-hide modal-baoxian" id="J_baoxian">
    <div class="modal-header">
        <h3>小米手机意外保障服务</h3>
        <span class="close" data-dismiss="modal"><i class="iconfont">&#xe602;</i></span>
    </div>
    <div class="modal-body">
        <div class="con-1">
            <h4>购买保购障服务的手机在意外受损时可获得免费维修</h4>
            <ul class="icon-list clearfix">
                <li>
                    <span class="icon icon-1"></span>
                    屏幕碎裂免费换新屏
                </li>
                <li>
                    <span class="icon icon-2"></span>
                    进水、摔落免费修
                </li>
                <li>
                    <span class="icon icon-3"></span>
                    修好为止
                </li>
            </ul>
            <dl class="xuzhi">
                <dt>为保障您的权益，购买前请仔细阅读：</dt>
                <dd>· 本保障服务目前仅适用于小米手机用户，仅可随手机一起在线购买。</dd>
                <dd>· 本保障服务自您收到手机起生效，有效期为一年，若您在收到手机7日内需要取消保障服务，请连同手机一起申请退货。</dd>
                <dd>· 故意行为导致的手机损坏以及盗窃、抢劫、遗失手机等不在服务保障范围内（具体以小米手机意外保障服务条款为准）。<br>
                    <a href="//cart.mi.com/static/insuranceAgreement.php?type=" target="_blank" class="J_baoxianMore">了解《小米手机意外保障服务》详细条款&gt;</a>
                </dd>
            </dl>
        </div>
    </div>
    <div class="modal-footer clearfix">
        <p>
            <span class="J_baoxianAgree"><i class="iconfont icon-checkbox">&#x221a;</i> 我已经阅读并同意</span>《<a  href="//cart.mi.com/static/insuranceAgreement.php?type=" target="_blank"  class="J_baoxianMore">小米手机意外保障服务条款</a>》
        </p>
        <a class="btn btn-primary J_buyBaoxian" >确认并购买服务</a>
    </div>
</div>


<!-- 电视挂架弹窗 -->
<div class="modal fade in modal-hide modal-guajia" id="J_modalGuajia">
    <div class="modal-header">
        <h3>预约电视挂架安装服务</h3>
        <span class="close" data-dismiss="modal"><i class="iconfont">&#xe602;</i></span>
    </div>
    <div class="modal-body">
        <h4>购买须知：</h4>
        <ol class="icon-list clearfix">
            <li>本服务采用线上预约，安装时工作人员上门收费的服务模式。</li>
            <li>确认预约之后，工作人员将在商品（小米电视）到货后的3个工作日内，与您取得联系并上门安装。</li>
            <li>具体安装台数请与小米工作人员沟通。</li>
            <li>往返距离大于30公里的上门服务属于远程服务，对超出30公里的路程部分收取远程费，收费标准为1元/公里。</li>
        </ol>
        <table>
            <caption>
                材料费用：
            </caption>
            <thead>
                <tr>
                    <th class="th-1">
                        附件名称
                    </th>
                    <th class="th-2">
                        使用说明
                    </th>
                    <th class="th-3">
                        价格
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        小米电视壁挂架
                    </td>
                    <td>
                        用于墙面挂装，由小米授权服务商进行安装
                    </td>
                    <td>
                        99元
                    </td>
                </tr>
                <tr>
                    <td>
                        小米电视主机/条形音响挂架
                    </td>
                    <td>
                        用于墙面挂装，由小米授权服务商进行安装
                    </td>
                    <td>
                        80元
                    </td>
                </tr>
            </tbody>
        </table>

        <table>
            <caption>
                安装费用：
            </caption>
            <thead>
                <tr>
                    <th class="th-1">
                        安装类型
                    </th>
                    <th class="th-2">
                        服务内容
                    </th>
                    <th class="th-3">
                        人工费
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        主机/音响
                    </td>
                    <td>
                        条形音响+低音炮+座/挂装+连接组合+功能调试
                    </td>
                    <td>
                        50元/台
                    </td>
                </tr>
                <tr>
                    <td>
                        电视
                    </td>
                    <td>
                        电视+音响+座/挂装+连接组合+功能调试
                    </td>
                    <td>
                        100元/台
                    </td>
                </tr>
            </tbody>
        </table>

        <dl>
            <dt>如何计算费用：</dt>
            <dd>如网点到您家里单程22公里，需要安装电视挂装</dd>
            <dd>总计费用：手工费（100元）+挂架材料费（99元）+路程补贴 （22*2-30=14元）=213元</dd>
            <dd>*网点到家往返超出30公里，需另外收取1元/公里的远程服务费</dd>
        </dl>
        <p>
            <a href="http://bbs.xiaomi.cn/thread/index/tid/11435552" target="_blank">了解更多细则&gt;</a>
        </p>
    </div>
    <div class="modal-footer clearfix">
        <a class="btn btn-primary J_buyGuaJia">确认预约</a>
    </div>
</div>
<!-- 净水器或水龙头安装服务 -->
<div class="modal fade in modal-hide modal-water-install" id="J_modalWaterInstall">
    <div class="modal-header">
        <h3>预约小米净水器或水龙头安装服务</h3>
        <span class="close" data-dismiss="modal"><i class="iconfont">&#xe602;</i></span>
    </div>
    <div class="modal-body">
        <h4>购买须知：</h4>
        <ol class="icon-list clearfix">
            <li>本服务采用线上预约，安装时工作人员采取上门收费的服务形式。</li>
            <li>确认预约之后，工作人员将在商品（小米净水器）出库后（订单可查询）的3个工作日内，与您取得联系并上门安装。</li>
            <li>同一次上门安装小米净水器和不锈钢无铅水龙头，只收取一次安装人工费用（50元/台）。</li>
            <li>往返距离大于30公里的上门服务属于远程服务,对超出30公里的路程部分收取远程费,收费标准为1元/公里。</li>
        </ol>
        <p>
            <a href="http://bbs.xiaomi.cn/t-11515570" target="_blank">了解更多细则 &gt;</a>
        </p>
        <table>
            <caption>
                收费标准：
            </caption>
            <thead>
                <tr>
                    <th>
                        项目名称
                    </th>
                    <th >
                        安装人工费用
                    </th>
                    <th>
                        材料费用
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        安装小米净水器
                    </td>
                    <td>
                        50元/台
                    </td>
                    <td>
                        －－
                    </td>
                </tr>
                <tr>
                    <td>
                        安装不锈钢无铅水龙头
                    </td>
                    <td>
                        50元/台
                    </td>
                    <td>
                        240元
                    </td>
                </tr>
            </tbody>
        </table>

        <p>温馨提示：如果您无需更换水龙头，自己动手就可以完成净水器安装哦。<a href="//www.mi.com/water/gallery/?showInstall" target="_blank">参考安装演示 &raquo;</a></p>
    </div>
    <div class="modal-footer clearfix">
        <a class="btn btn-primary J_buyWaterInstall">确认预约</a>
    </div>
</div>
<div class="site-footer">
    <div class="container">
        <div class="footer-service">
            <ul class="list-service clearfix">
                            <li><a rel="nofollow" href="//www.mi.com/service/exchange#repaire" target="_blank"><i class="iconfont">&#xe634;</i>1小时快修服务</a></li>
                            <li><a rel="nofollow" href="//www.mi.com/service/exchange#back" target="_blank"><i class="iconfont">&#xe635;</i>7天无理由退货</a></li>
                            <li><a rel="nofollow" href="//www.mi.com/service/exchange#free" target="_blank"><i class="iconfont">&#xe636;</i>15天免费换货</a></li>
                            <li><a rel="nofollow" href="//www.mi.com/service/exchange#mail" target="_blank"><i class="iconfont">&#xe638;</i>满150元包邮</a></li>
                            <li><a rel="nofollow" href="//www.mi.com/c/service/poststation/" target="_blank"><i class="iconfont">&#xe637;</i>520余家售后网点</a></li>
                        </ul>
        </div>
        <div class="footer-links clearfix">
            
            <dl class="col-links col-links-first">
                <dt>帮助中心</dt>
                
                <dd><a rel="nofollow" href="//www.mi.com/service/help_center/guide/"   target="_blank">购物指南</a></dd>
                
                <dd><a rel="nofollow" href="//www.mi.com/service/help_center/pay/"   target="_blank">支付方式</a></dd>
                
                <dd><a rel="nofollow" href="//www.mi.com/service/help_center/delivery/"   target="_blank">配送方式</a></dd>
                
            </dl>
                
            <dl class="col-links ">
                <dt>服务支持</dt>
                
                <dd><a rel="nofollow" href="//www.mi.com/service/exchange"   target="_blank">售后政策</a></dd>
                
                <dd><a rel="nofollow" href="http://fuwu.mi.com/"   target="_blank">自助服务</a></dd>
                
                <dd><a rel="nofollow" href="http://xiazai.mi.com/"   target="_blank">相关下载</a></dd>
                
            </dl>
                
            <dl class="col-links ">
                <dt>小米之家</dt>
                
                <dd><a rel="nofollow" href="//www.mi.com/c/xiaomizhijia/"   target="_blank">小米之家</a></dd>
                
                <dd><a rel="nofollow" href="//www.mi.com/c/service/poststation/"   target="_blank">服务网点</a></dd>
                
                <dd><a rel="nofollow" href="http://service.order.mi.com/mihome/index"   target="_blank">预约服务</a></dd>
                
            </dl>
                
            <dl class="col-links ">
                <dt>关于小米</dt>
                
                <dd><a rel="nofollow" href="//www.mi.com/about"   target="_blank">了解小米</a></dd>
                
                <dd><a rel="nofollow" href="http://hr.xiaomi.com/"   target="_blank">加入小米</a></dd>
                
                <dd><a rel="nofollow" href="//www.mi.com/about/contact"   target="_blank">联系我们</a></dd>
                
            </dl>
                
            <dl class="col-links ">
                <dt>关注我们</dt>
                
                <dd><a rel="nofollow" href="http://e.weibo.com/xiaomishouji"   target="_blank">新浪微博</a></dd>
                
                <dd><a rel="nofollow" href="http://xiaoqu.qq.com/mobile/share/index.html?url=http%3A%2F%2Fxiaoqu.qq.com%2Fmobile%2Fbarindex.html%3Fwebview%3D1%26type%3D%26source%3Dindex%26_lv%3D25741%26sid%3D%26_wv%3D5123%26_bid%3D128%26%23bid%3D10525%26from%3Dwechat"   target="_blank">小米部落</a></dd>
                
                <dd><a rel="nofollow" href="#J_modalWeixin" data-toggle="modal" >官方微信</a></dd>
                
            </dl>
                
            <dl class="col-links ">
                <dt>特色服务</dt>
                
                <dd><a rel="nofollow" href="//order.mi.com/queue/f2code"   target="_blank">F 码通道</a></dd>
                
                <dd><a rel="nofollow" href="//www.mi.com/mimobile/"   target="_blank">小米移动</a></dd>
                
                <dd><a rel="nofollow" href="//order.mi.com/misc/checkitem"   target="_blank">防伪查询</a></dd>
                
            </dl>
                
            <div class="col-contact">
                <p class="phone">400-100-5678</p>
<p><span class="J_serviceTime-normal" style="
">周一至周日 8:00-18:00</span>
<span class="J_serviceTime-holiday" style="display:none;">2月7日至13日服务时间 9:00-18:00</span><br>（仅收市话费）</p>
<a rel="nofollow" class="btn btn-line-primary btn-small" href="//www.mi.com/service/contact" target="_blank"><i class="iconfont">&#xe600;</i> 24小时在线客服</a>            </div>
        </div>
    </div>
</div>
<div class="site-info">
    <div class="container">
        <div class="logo ir">小米官网</div>
        <div class="info-text">
            <p class="sites"><a href="//www.mi.com/index.html"   target="_blank">小米网</a><span class="sep">|</span><a href="http://www.miui.com/"   target="_blank">MIUI</a><span class="sep">|</span><a href="http://www.miliao.com/"   target="_blank">米聊</a><span class="sep">|</span><a href="http://www.duokan.com/"   target="_blank">多看书城</a><span class="sep">|</span><a href="http://www.miwifi.com/"   target="_blank">小米路由器</a><span class="sep">|</span><a href="http://call.mi.com/"   target="_blank">视频电话</a><span class="sep">|</span><a href="http://blog.xiaomi.com/"   target="_blank">小米后院</a><span class="sep">|</span><a href="http://xiaomi.tmall.com/"   target="_blank">小米天猫店</a><span class="sep">|</span><a href="http://shop115048570.taobao.com"   target="_blank">小米淘宝直营店</a><span class="sep">|</span><a href="http://union.mi.com/"   target="_blank">小米网盟</a><span class="sep">|</span><a href="//static.mi.com/feedback/"   target="_blank">问题反馈</a><span class="sep">|</span><a href="#J_modal-globalSites" data-toggle="modal" >Select Region</a>            </p>
            <p>&copy;<a href="//www.mi.com/" target="_blank" title="mi.com">mi.com</a> 京ICP证110507号 京ICP备10046444号 京公网安备1101080212535号 <a href="//c1.mifile.cn/f/i/2013/cn/jingwangwen.jpg" target="_blank">京网文[2014]0059-0009号</a>
 违法和不良信息举报电话：185-0130-1238</p>
        </div>
        <div class="info-links">
                    <a href="https://search.szfw.org/cert/l/CX20120926001783002010" target="_blank"><img src="//s01.mifile.cn/i/v-logo-2.png" alt="诚信网站" /></a>
                    <a href="https://ss.knet.cn/verifyseal.dll?sn=e12033011010015771301369&ct=df&pa=461082" target="_blank"><img src="//s01.mifile.cn/i/v-logo-1.png" alt="可信网站" /></a>
                    <a href="http://www.315online.com.cn/member/315140007.html" target="_blank"><img src="//s01.mifile.cn/i/v-logo-3.png" alt="网上交易保障中心" /></a>
                </div>
    </div>
</div>
<div id="J_modalWeixin" class="modal fade modal-hide modal-weixin" data-width="480" data-height="520">
        <div class="modal-hd">
            <a class="close" data-dismiss="modal"><i class="iconfont">&#xe602;</i></a>
            <h3>小米手机官方微信二维码</h3>
        </div>
        <div class="modal-bd">
            <p style="margin: 0 0 10px;">打开微信，点击右上角的“+”，选择“扫一扫”功能，<br/>对准下方二维码即可。</p>
            <img alt="" src="//c1.mifile.cn/f/i/2014/cn/qr.png" width="375" height="375" />
        </div>
    </div>
<!-- .modal-weixin END -->
<div class="modal modal-hide modal-bigtap-queue" id="J_bigtapQueue">
    <div class="modal-body">
        <span class="close" data-dismiss="modal" aria-hidden="true"><i class="iconfont">&#xe602;</i></span>
        <h3>正在排队，请稍候喔！</h3>
        <p class="queue-tip">抱歉，目前排队人数较多，导致服务器压力山大，请您耐心排队等待，<br>我们将在稍后告诉您排队结果。</p>
        <div class="queue-animate">
            <div id="J_mituWalking" class="mitu-walk"> </div>
            <div class="animate-mask animate-mask-left"></div>
            <div class="animate-mask animate-mask-right"></div>
        </div>
    </div>
</div>
<!-- .xm-dm-queue END -->
<div id="J_bigtapError" class="modal modal-hide modal-bigtap-error">
    <span class="close" data-dismiss="modal" aria-hidden="true"><i class="iconfont">&#xe602;</i></span>
    <div class="modal-body">
        <h3>抱歉，网络拥堵无法连接服务器</h3>
        <p  class="error-tip">由于访问人数太多导致服务器压力山大，请您稍后再重试。</p>
        <p >
            <a class="btn btn-primary" id="J_bigtapRetry">重试</a>
        </p>
    </div>
</div>
<!-- .xm-dm-error END -->
<div id="J_modal-globalSites" class="modal fade modal-hide modal-globalSites" data-width="640">
       <div class="modal-hd">
            <a class="close" data-dismiss="modal"><i class="iconfont">&#xe602;</i></a>
            <h3>Select Region</h3>
        </div>
        <div class="modal-bd">
            <h3>Welcome to Mi.com</h3>
            <p class="modal-globalSites-tips">Please select your country or region</p>
            <p class="modal-globalSites-links clearfix">
                <a href="//www.mi.com/index.html">Mainland China</a>
                <a href="http://www.mi.com/hk/">Hong Kong</a>
                <a href="http://www.mi.com/tw/">TaiWan</a>
                <a href="http://www.mi.com/sg/">Singapore</a>
                <a href="http://www.mi.com/my/">Malaysia</a>
                <a href="http://www.mi.com/ph/">Philippines</a>
                <a href="http://www.mi.com/in/">India</a>
                <a href="http://www.mi.com/id/">Indonesia</a>
                <a href="http://br.mi.com/">Brasil</a>
                <a href="http://www.mi.com/en/">Global Home</a>
            </p>
        </div>
    </div>
<!-- .modal-globalSites END -->
<script src="//s01.mifile.cn/js/base.min.js?v2016a"></script>
<script>
(function() {
    MI.namespace('GLOBAL_CONFIG');
    MI.GLOBAL_CONFIG = {
        orderSite: '//order.mi.com',
        wwwSite: '//www.mi.com',
        cartSite: '//cart.mi.com',
        itemSite: '//item.mi.com',
        assetsSite: '//s01.mifile.cn',
        listSite: '//list.mi.com',
        searchSite: '//search.mi.com',
        mySite: '//my.mi.com',
        damiaoSite: '//tp.hd.mi.com/',
        damiaoGoodsId:["2154500010","2154500011","2154500012","2154500013","2154500014","2154500015","2154800006","2154800007","2155200001","2155300003","2155300001","2155300002","2160100003","2160100004","2160100005","2160100006","2160100027","2160100028","2160100029","2160100030","2160100031","2160100032","2160200002","2160400006","2160400007","2160400008","2160400010"],
        logoutUrl: '//order.mi.com/site/logout',
        staticSite: '//static.mi.com',
        quickLoginUrl: 'https://account.xiaomi.com/pass/static/login.html'
    };
    MI.setLoginInfo.orderUrl = MI.GLOBAL_CONFIG.orderSite + '/user/order';
    MI.setLoginInfo.logoutUrl = MI.GLOBAL_CONFIG.logoutUrl;
    MI.setLoginInfo.init(MI.GLOBAL_CONFIG);
    MI.miniCart.init();
    MI.updateMiniCart();
})();
</script>
<script>
var net = document.createElement('script');
  net.type = 'text/javascript';
  net.async = true;
  net.src = 'https://tpssl.hd.mi.com/gettimestamp';
  var preNet = document.getElementsByTagName('script')[0];
  preNet.parentNode.insertBefore(net, preNet);
</script><script type="text/javascript" src="//s01.mifile.cn/js/cart.min.js?583359"></script>
<script src="//c1.mifile.cn/f/i/15/stat/js/xmsg_ti.js"></script>
<script>
var _msq = _msq || [];
_msq.push(['setDomainId', 100]);
_msq.push(['trackPageView']);
(function() {
    var ms = document.createElement('script');
    ms.type = 'text/javascript';
    ms.async = true;
    ms.src = '//c1.mifile.cn/f/i/15/stat/js/xmst.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ms, s);
})();
</script>
</body>
</html>