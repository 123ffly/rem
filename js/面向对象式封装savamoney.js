/**
 * Created by lenovo on 2016/11/28.
 * author:caoye
 */

/*-----�������ʽ�ķ�װ������һ��cy����cy.getInfoʵ�� --��ȡajax����ִ��һϵ�еķ���-----*/
$(function () {
    var cy={
        getInfo: function (obj,callback) {
            $.ajax({
                type: 'get',
                url: 'http://127.0.0.1:9090/api/getmoneyctrl',
                dataType: 'json',
                data:obj,
                success: function (data) {
                    callback(data);
                }
            })
        }
    }
    cy.getInfo({}, function (data) {
        //����ģ����󣬲���Ⱦ��ҳ����
        var tag = template("savemoney", data);
        $('.product_box').html(tag);
        //��ȡ��������ݣ������ҳ��������ҳ��д��
        var optionNum=Math.floor(data.totalCount/data.pagesize);
        //����strƴ�ӵķ���
        var tag="";
        for(var i=0;i<optionNum;i++){
            tag+="<option value='"+(i+1)+"'>"+(i+1)+"/14</option>";
        }
        $(".selectPage").append(tag);

        $(".selectPage").on("change", function () {
            var value=$(this).val();
            cy.getInfo({pageid:value}, function (data) {
                var tag = template("savemoney", data);
                $('.product_box').html(tag);
            })
        })
        $(".prev-page").click(function () {
            var value=$('.selectPage').val();
            if(value>1){
                value=value-1;
                $('.selectPage')[0].value=value;
                cy.getInfo({pageid:value}, function (data) {
                    var tag = template("savemoney", data);
                    $('.product_box').html(tag);
                })
            }
        })
        $(".next-page").click(function () {
            var value=$('.selectPage').val();
            if(value<14){
                value=+value+1;
                $('.selectPage')[0].value=value;
                cy.getInfo({pageid:value}, function (data) {
                    var tag = template("savemoney", data);
                    $('.product_box').html(tag);
                })
            }
        })
    })
})