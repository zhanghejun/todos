$(function(){
    //var lis=$('.todos .row')
    //lis.find('.check').on('click',function(){
    //    $(this).closest('.row').toggleClass('wancheng');
    //})
    //lis.find('.delete').on('click',function(){
    //    $(this).closest('li').remove();
    //})
    //lis.on('dblclick',function(){
    //    $(this).addClass('bianji');
    //    var el=$(this).find('input');
    //    el.val(el.val()).focus()
    //})
    //lis.find('input').on('blur',function(){
    //    $(this).closest('li').removeClass('bianji');
    //    $(this)
    //        .closest('li')
    //        .find('p')
    //        .text($(this).val());
    //})
    //$('.header input').focus();
    //$('.header input').on('keyup',function(e){
    //    var v=$(this).val()
    //    if(e.keyCode===13){
    //        $('<li class="row"><div class="check"></div><p>'+v+'</p><div class="delete"></div><input type="text" value="">').appendTo('.card .todos')
    //    }
    //
    //
    //})

    $.setL = function(key,value){
        localStorage[key]=JSON.stringify(value);
    }
    $.getL=function(key){
        return JSON.parse(localStorage[key]);
    }

    //获取
    var database=[];
    var render=function(){
        $('.todos').empty();
        if(!localStorage['data']){
            return;
        }
        database= $.getL('data');
        for(var i=0; i<database.length;i++){
            var v=database[i];
            $('<li class="row" data-id="'+ v.id+'"><div class="check"></div><p>' + v.name + '</p><div class="delete"></div><input type="text" value="'+ v.name+'">').appendTo('.card .todos')
        }
    }
   render();


        //新增
    $('.header input').focus();
    var header= $('.header input')
    header.on('keyup',function(e) {

        if (e.keyCode === 13) {
            var v = $(this).val().trim();
            if( v === ''){
                return
            }
            $('<li class="row" data-id="'+v.id+'"><div class="check"></div><p>' + v + '</p><div class="delete"></div><input type="text" value="'+v+'">').appendTo('.card .todos')
           //存取
//          if(database.length===0){
//              var id=1;
//          }else{
//              var id=database[database.length-1].id+1
//          }
            database.push(
                {id:1,name:v,isDone:0}
            );
            $.setL('data',database);
            $(this).val('').focus();
        }
    })
    //点击效果
    $('.card .todos').on('click','.check',function(){
        $(this).closest('.row').toggleClass('wancheng');
    })
    $('.card .todos').on('click','.delete',function(){
        $(this).closest('li').remove();
    })
    $('.card .todos').on('dblclick','.row',function(){
        $(this).addClass('bianji');
            var el=$(this).find('input');
            el.val(el.val()).focus()
    })
    $('.card .todos').on('blur','input',function(){
            $(this).closest('li').removeClass('bianji');
            $(this)
                .closest('li')
                .find('p')
                .text($(this).val());
        })
})