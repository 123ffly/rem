/**
 * Created by Administrator on 2016/11/26.
 */

//��װ��mmb�����ṩһЩ����
window.mmb = {

    /*---���й���url��ַ---*/
    url1: "http://127.0.0.1:3000/api/getbaicaijiatitle",
    url2: "http://127.0.0.1:3000/api/getbaicaijiaproduct",
    url3: "http://127.0.0.1:3000/api/getgsshop",
    url4: "http://127.0.0.1:3000/api/getgsshoparea",
    url5: "http://127.0.0.1:3000/api/getgsproduct",
    /*---footter���ַ��ض�����ʵ�ֺ���goBack----*/
    goBack: function () {
        //���"���ض���"�����ص�����
        $(".footer-back").click(function () {
            document.body.scrollTop = 0;
        })
        //��arow�ص�����
        $("#arow").click(function () {
            document.body.scrollTop = 0;
        })
    },

};

