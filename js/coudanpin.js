/**
 * Created by Administrator on 2016/11/26.
 * @author: caoye
 */
/*
 * �д��Ż��ĵط��� 1.��ɫѡ���ͷ 2.δʹ������ͼ��
 * */
$(function () {
    //�ص�����
    mmb.goBack();
    /*-----���й����������������ȫ�ֱ�����д��������----*/
    //shopid������ѡ���̵�id����areaid������ѡ������id��
    var shopid = 0, areaid = 0, tmpShopid, tmpareaid;

    //����ҳ���������� ajax��������Ĭ�ϵ�����
    getProJson();

    //�����б���ز���
    $("#store").on("click", function () {
        tmpShopid = shopid;
        //console.log(tmpShopid);
        //���ص����б�
        $(".area-drop").addClass("hide");
        //��ʾ�����ص����б�
        $(".store-drop").toggleClass("hide");
        //����ajax���� ��������
        $.ajax({
            url: url.self+'/api/getgsshop',
            data: {},
            type: "get",
            dataType: "json",
            success: function (data) {
                var html = template("shop-moban", data);
                $(".store-drop").html(html);

                $(".store-drop li ").on("click", function () {
                    shopid = $(this).attr("shopId");
                    //console.log(shopid);
                    var shopName = $(this).html();
                    $("#store").html(shopName);
                    $(".store-drop").addClass("hide");
                    //����shopidʱ��Ҫ��̬������Ʒ�б�����
                    if (tmpShopid != shopid) {
                        getProJson();
                    }
                })
            }
        })
    })

    //�����б���ز���
    $("#area").on("click", function () {
        tmpareaid = areaid;
        $(".store-drop").addClass("hide");
        $(".area-drop").toggleClass("hide");
        //����ajax���� �����б�����
        $.ajax({
            url: url.self+"/api/getgsshoparea",
            data: {},
            type: "get",
            dataType: "json",
            success: function (data) {
                var html = template("area-moban", data);
                $(".area-drop").html(html);
                $(".area-drop li ").on("click", function () {
                    areaid = $(this).attr("areaId");
                    var areaName = $(this).html();
                    $("#area").html(areaName);
                    $(".area-drop").addClass("hide");
                    //����areaidʱ��Ҫ��̬������Ʒ�б�����
                    if (tmpareaid != areaid) {
                        getProJson();
                    }

                })
            }
        })
    })

    //��װ�Ļ�ȡ��Ʒ�б����ݵĺ���
    function getProJson() {
        //����ajax���� ��Ʒ�б�����
        $.ajax({
            url:  url.self+"/api/getgsproduct",
            data: {shopid: shopid, areaid: areaid},
            type: "get",
            dataType: "json",
            success: function (data) {
                //console.log(data);
                var html = template("pro-moban", data);
                $(".pro-order").html(html);
            }
        })
    }

})