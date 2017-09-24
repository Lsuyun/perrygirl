  jQuery(document).ready(function($) {
			$('.header-top').hover(function(){
		    $('.li-1 a').css("background",'blue');
		    $('.li-1 a').css("color",'#fff');


	},function(){
				$('.li-1 a').css("background",'#fff');
		        $('.li-1 a').css("color",'blue');
			})


		});

		 jQuery(document).ready(function($) {
		 	$('.li-0 ').hover(function() {
		 		/* Act on the event */
		 		$('.product-center').slideDown(500);
				$('.medium').hide();
		 	},function(){
		 		$('.medium').show();
				$('.product-center').hide();
		 	}
		 	)


		 	$('.product-center ').hover(function() {
		 		/* Act on the event */
		 		$('.product-center').show();
		 		$('.medium').hide();
		 	},function(){
		 		$('.product-center').hide();
		 		$('.medium').show();
		 	})
            
		 })

		jQuery(document).ready(function($) {
			$('.one').hover(function() {
				/* Stuff to do when the mouse enters the element */
				$('.one a').css("color",'blue');
				$('.one i').css("color",'blue');
				$('.product-all').show();
				$('.product-note-service').hide();
				$('.product-voice-service').hide();
				$('.product-liuliang-service').hide();
				$('.two a').css("color",'#fff');
				$('.two i').css("color",'#fff');
				$('.three a').css("color",'#fff');
				$('.three i').css("color",'#fff');
				$('.fore a').css("color",'#fff');
				$('.fore i').css("color",'#fff');


			})

			$('.two').hover(function() {
				/* Stuff to do when the mouse enters the element */
				$('.two a').css("color",'blue');
				$('.two i').css("color",'blue');
				$('.product-all').hide();
				$('.product-note-service').show();
				$('.product-voice-service').hide();
				$('.product-liuliang-service').hide();
				$('.one a').css("color",'#fff');
				$('.one i').css("color",'#fff');
				$('.three a').css("color",'#fff');
				$('.three i').css("color",'#fff');
				$('.fore a').css("color",'#fff');
				$('.fore i').css("color",'#fff');



			})

			$('.three').hover(function() {
				/* Stuff to do when the mouse enters the element */
				$('.three a').css("color",'blue');
				$('.three i').css("color",'blue');
				$('.product-all').hide();
				$('.product-note-service').hide();
				$('.product-voice-service').show();
				$('.product-liuliang-service').hide();
				$('.two a').css("color",'#fff');
				$('.two i').css("color",'#fff');
				$('.one a').css("color",'#fff');
				$('.one i').css("color",'#fff');
				$('.fore a').css("color",'#fff');
				$('.fore i').css("color",'#fff');



			})

			$('.fore').hover(function() {
				/* Stuff to do when the mouse enters the element */
				$('.fore a').css("color",'blue');
				$('.fore i').css("color",'blue');
				$('.product-all').hide();
				$('.product-note-service').hide();
				$('.product-voice-service').hide();
				$('.product-liuliang-service').show();
				$('.two a').css("color",'#fff');
				$('.two i').css("color",'#fff');
				$('.three a').css("color",'#fff');
				$('.three i').css("color",'#fff');
				$('.one a').css("color",'#fff');
				$('.one i').css("color",'#fff');



			})

		})

		jQuery(document).ready(function($){
			 $(".down-medium-list li").each(function() {              
               $(this).hover(function(){
                   $(this).css("border-color",'#008af1');
                   $(this).find('.down-medium-list-one-color').show();
                   $(this).find('.down-medium-list-one-img').hide();

              },
               function(){
               	   $(this).css("border-color",'#9f9f9f');
                   $(this).find('.down-medium-list-one-color').hide();
                    $(this).find('.down-medium-list-one-img').show();

                }
		)
    })

        $('.all-all').hover(function(){
        	$('.fixed-left').show();

        },function(){
        	$('.fixed-left').hide();

        })

        $('.fixed-left').hover(function(){
        	$('.fixed-left').show();
        },function(){
        	$('.fixed-left').hide();
        })


        $(window).scroll(function(event){
            var header_height = $('.wrapper').height();
            var gdt_height = $(document).scrollTop();
            if($(window).scrollTop() < 100){
                $(".scroll").hide();
            }else{
                $(".scroll").show();
            }
        });

        $(".scroll").click(function(){
            $(".scroll").hide();
            if(!$('body,html').animate({"scrollTop":0},1000)){
                $('body,html').scrollTop(0)
            }
        });



			})