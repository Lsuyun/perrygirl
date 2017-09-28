 jQuery(document).ready(function($) {
 	//表单获得焦点
 	$('input.search_text').focus(function(){
 		$(this).attr('value','');
 		$(this).removeClass().addClass('blue');

 	})
 	//表单失去焦点
 	$('input.search_text').blur(function(){
 		$(this).removeClass().addClass('search_text');
 	})
    
    //右边内容隐藏效果
 	$('.user_r').hover(function() {
 		/* Stuff to do when the mouse enters the element */
 		$('.hidden_r').show();
 	}, function() {
 		/* Stuff to do when the mouse leaves the element */
 		$('.hidden_r').hide();
 	});

 	//中间内容隐藏效果
 	$('.hidden_m_title span').hover(function() {
 		/* Stuff to do when the mouse enters the element */
        $('.hidden_m_title span').removeClass('span_style');
 		$(this).addClass('span_style');


 	});

     $(".user_m").hover(function() {
     	/* Stuff to do when the mouse enters the element */
     	$(".hidden_m").show();
     }, function() {
     	/* Stuff to do when the mouse leaves the element */
     	$(".hidden_m").hide();
     });
 	$(".update").hover(function() {
 		/* Stuff to do when the mouse enters the element */
 		$(".visited_update").show();
 		$(".visited-code").hide();
 	});

 	$(".cord").hover(function() {
 		/* Stuff to do when the mouse enters the element */
 		$(".visited_update").hide();
 		$(".visited-code").show();
 	});
    
    // 轮换版特效开始
    var timer="";
    var i=0;
     
     $('.small_pic li').hover(function() {
     	/* Stuff to do when the mouse enters the element */
     	clearInterval(timer);
     	i=$(this).index();
     	var backImg = $('.small_pic li').eq(i).find('img').attr("backImg");
    	var backColor = $('.small_pic li').eq(i).find('img').attr("backColor");
    	var background = 'url(' + backImg + ')' + 'no-repeat center' + backColor;
    	$('#focus_background').css({background: background});
    	$(this).addClass('hover').siblings('').removeClass('hover');
    	
    	$('.focus_title a').eq(i).show().siblings('a').hide();
     }, function() {
     	/* Stuff to do when the mouse leaves the element */
     	timer=setInterval(move,1000);
     });

     timer=setInterval(move,1000);
    function move(){
    	if (i>11) {i=0};
    	var backImg = $('.small_pic li').eq(i).find('img').attr("backImg");
    	var backColor = $('.small_pic li').eq(i).find('img').attr("backColor");
    	var background = 'url(' + backImg + ')' + 'no-repeat center' + backColor;
    	$('#focus_background').css({background: background});
         $('.small_pic li').eq(i).addClass('hover');
         $('.small_pic li').not($('.small_pic li').eq(i)).removeClass('hover');
    	$('.focus_title a').eq(i).show().siblings('a').hide();
    	i++;
    }


    //轮换版右侧全部分类鼠标样式开始
    $('ul.rank_title li a').hover(function() {
    	/* Stuff to do when the mouse enters the element */
    	$(this).addClass('rank_hover');
    	$('ul.rank_title li a').not($(this)).removeClass('rank_hover');
    });
    //轮换版右侧全部分类内容切换开始
    $('ul.rank_title li').hover(function(){
    	var cur=$(this).index();
    	// alert(cur);
    	$('.focus_rank div.focus_content ul').eq(cur).show().siblings('ul').hide();
    })
    // 轮换版特效结束
    // 今日热播左侧内容切换特效
    $('.hot_l_title ul.title_r li a.one ').hover(function() {
    	/* Stuff to do when the mouse enters the element */
    	$(this).addClass('hot_style');
    	$('ul.title_r li a.one ').not($(this)).removeClass('hot_style');
    });
    
    $('ul.title_r li.li_one').hover(function(){
    	var j=$(this).index();
    	// alert(cur);
    	$('.hot_left ul.public_pic_one').eq(j).show().siblings('ul').hide();
    })
    // 今日热播左侧内容切换特效结束
    //今日热播右侧内容切换特效开始
    $('.hot_right .hot_title_r .hot_r_l a ').hover(function() {
    	/* Stuff to do when the mouse enters the element */
    	$(this).addClass('hot_style');
    	$('.hot_right .hot_title_r .hot_r_l a ').not($(this)).removeClass('hot_style');
    	var x=$(this).index();
    	$('ul.hot_r_pic').eq(x).show().siblings('ul').hide();
    });

    //今日热播右侧内容切换特效结束
    //
     // 电视剧左侧内容切换特效
    $('.hot_l_title ul.title_r li a.two ').hover(function() {
    	/* Stuff to do when the mouse enters the element */
    	$(this).addClass('hot_style');
    	$('ul.title_r li a.two ').not($(this)).removeClass('hot_style');
    });
    
    $('ul.title_r li.li_two').hover(function(){
    	var y=$(this).index();
    	// alert(y);
    	$('.hot_left ul.public_pic_two').eq(y).show().siblings('ul').hide();
    })
    // 电视剧左侧内容切换特效结束
     // 电视剧右侧内容切换特效
     $('li.tv_one ').hover(function() {
    	/* Stuff to do when the mouse enters the element */
    	$(this).addClass('tv_tab_hover');
    	$('li.tv_one').not($(this)).removeClass('tv_tab_hover');
    });
     $('li.tv_one').hover(function(){
    	var j=$(this).index();
    	// alert(y);
    	$('div.tv_txt').eq(j).show().siblings('div.tv_txt').hide();
    	$('ul.tv_b_txt').eq(j).show().siblings('ul.tv_b_txt').hide();
    })
     // 电视剧右侧内容切换特效结束
     
     //猜你喜欢左边的特效
     var index=0;
     $('div.like_l_title a').click(function(){
     	// alert(1234);
     	
     	index++;//index--
     	// index = (index==-3)?0:index;
     	if(index==3)//if{index==-3}index==0
     		index=0;
     	var left=953*index;
     	$('div.like_l_pic ul.imageslist').stop().animate({'left':'-'+left+'px'},300)
     	// $('div.like_l_pic ul.imageslist').stop().animate({'left':left+'px'},300)
     })

     //电影左侧内容效果
     $('.hot_l_title ul.mov_r li a.three ').hover(function() {
    	/* Stuff to do when the mouse enters the element */
    	$(this).addClass('hot_style');
    	$('ul.mov_r li a.three ').not($(this)).removeClass('hot_style');
    });

     $('ul.mov_r li.li_three').hover(function(){
    	var y=$(this).index();
    	// alert(y);
    	$('.hot_left ul.public_pic_three').eq(y).show().siblings('ul').hide();
    })
     //电影左侧内容效果结束
     //电影右侧内容效果
      $('li.tv_two ').hover(function() {
    	/* Stuff to do when the mouse enters the element */
    	$(this).addClass('tv_tab_hover');
    	$('li.tv_two').not($(this)).removeClass('tv_tab_hover');
    });
     $('li.tv_two').hover(function(){
    	var j=$(this).index();
    	// alert(j);
    	// alert(y);
    	$('div.tv_txt_1').eq(j).show().siblings('div.tv_txt_1').hide();
    	$('ul.tv_b_txt_1').eq(j).show().siblings('ul.tv_b_txt_1').hide();
    })
     //电影右侧内容效果结束
     //
     //
     //
     //
     //
     //
     //底部广告轮换效果开始
     var timer1="";
      var x=0;
     
     $('.cir a').hover(function() {
     	/* Stuff to do when the mouse enters the element */
     	clearInterval(timer1);
     	x=$(this).index();
    	$(this).addClass('hover_b').siblings('').removeClass('hover_b');
    	
    	$('ul.b_l').eq(x).show().siblings('ul.b_l').hide();
     }, function() {
     	/* Stuff to do when the mouse leaves the element */
     	timer1=setInterval(float,1000);
     });

     timer1=setInterval(float,1000);
     function float(){
    	if (x>3) {x=0};
         $('.cir a').eq(x).addClass('hover_b');
         $('.cir a').not($('.cir a').eq(x)).removeClass('hover_b');
    	$('ul.b_l').eq(x).show().siblings('ul.b_l').hide();
    	x++;
    }

    $('.bot_pub').hover(function() {
    	$('p.tao_3').show();
    }, function() {
    	$('p.tao_3').hide();
  
    });
    //底部广告轮换效果结束
    //
    // $('a.fixed_1').hover(function() {
    // 	// alert(123);
    // 	 $('a.fixed_1 span').removeClass('span').addClass('.hover');
    // },300);
    	
 })