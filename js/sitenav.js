/**
 * Created by Administrator on 2016/11/22.
 */
$(function(){


    $.ajax({
        type:'get',
        url:url.self+'/api/getsitenav',//���ݣ����贫��
        dataType:'json',
        success:function(data) {
            console.log(data);
                var tag='';
            //����ҳ������Ҫ��Ⱦ������
                for(var k in data.result){
                    tag+='<div class="pic_icon" class="clearfix">'
                        +'<a href="'+data.result[k].navHref +'" id="'+data.result[k].navId+'">'
                        +'<img src="'+data.result[k].navImg+'" alt=""/>'
                        +'<span>'+data.result[k].navTitle+'</span>'
                        +'</a>'
                        +'</div>'
                }
            $('.web_url').html(tag);
            //$('.web_url').append(tag);

              }
        })
    })