/**
 * Created by lenovo on 2016/11/26.
 * author:zhanganqi
 *
 */

//ע��select��ǩ��value����---��option֮��Ĺ�ϵ
$(function () {
    $.ajax({
        type: 'get',
        url: url.self+'/api/getmoneyctrl',
        dataType: 'json',
        data:{ },
        success: function (data) {
            console.log(data);
            //����ģ����󣬲���Ⱦ��ҳ����
            var tag = template("savemoney", data);
            $('.product_box').html(tag);
            //��ȡ��������ݣ������ҳ��������ҳ��д�����Ժ��̨���ݱ��˿���ֱ��ʹ��
            var optionNum=Math.floor(data.totalCount/data.pagesize);
            /*
             //ѭ��������׷��ҳ��������option��ǩ
            for(var i=0;i<optionNum;i++){
                var option=document.createElement("option");
                $(option).html(i+1+"/14");
                $(option).attr("value",i+1);
                $(".selectPage").append(option);
            }
            */
            //����strƴ�ӵķ���
            var tag="";
            for(var i=0;i<optionNum;i++){
                tag+="<option value='"+(i+1)+"'>"+(i+1)+"/14</option>";
            }
            $(".selectPage").append(tag);
//�������������ݸı�ʱ����ҳ�淢���仯��Ҫ�����ı䵽��һҳ��������һҳ��������ݲ���Ⱦ��ҳ����ȥ
            $(".selectPage").on("change", function () {
                var value=$(this).val();
                getInfo(value);
            })
//�����һҳ����ȡ�����������ҳ��������ȡ��ҳ��Ӧ�����ݣ�����Ⱦ��ҳ����ȥ
            $(".prev-page").click(function () {
                var value=$('.selectPage').val();
                if(value>1){
                    value=value-1;
                    $('.selectPage')[0].value=value;
                    getInfo(value);
                }
            })
//�����һҳ����ȡ�����������ҳ��������ȡ��ҳ��Ӧ�����ݣ�����Ⱦ��ҳ����ȥ
            $(".next-page").click(function () {
                var value=$('.selectPage').val();
                if(value<14){  //��ҳ������14ҳʱ�ٵ��Ҳ�����ڸı�Ҳ��������������
                    value=+value+1;
                    $('.selectPage')[0].value=value;
                    getInfo(value);
                }
            })
        }
    })
    //����������Ʒ��Ϣ���ݲ���Ⱦ��ҳ����
    function getInfo(value){
        $.ajax({
            type: 'get',
            url: url.self+'/api/getmoneyctrl',
            dataType: 'json',
            data:{pageid:value},
            success: function (data) {
                //console.log(data);
                var tag = template("savemoney", data);
                $('.product_box').html(tag);
            }
        })
    }
//����ص�����
    $(".mmb_footer .w3").on('click', function () {
        var timer = setInterval(function () {
            var leader = document.body.scrollTop;
            var target = 0;
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader + step;
            if (leader === target) {
                clearInterval(timer);
            }
            document.body.scrollTop = leader;
        }, 20);
    })
})
