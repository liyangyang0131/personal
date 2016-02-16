$(function(){
    $(window).resize(function(){
        if($(window).width()<800){
            $(".header").hide();
            $(".headerS").show();
        }else{
            $(".header").show();
            $(".headerS").hide();
        }
    })
    $(".line").click(function(){
        $(".menu").slideToggle(1000);
    })

    //头部
    var header = $(".headerR>.container-fluid>.row>div");
    header.hover(function(){
        $(this).css("transform","scale(1.2,1.2)");
    },function(){
        $(this).css("transform","scale(1,1)");
    })
    header.click(function(){
        if($(this).html() == "about"){
            $({top:$(document).scrollTop()}).animate({top:$(".personal").offset().top},{
                duration:700,
                step:function(){
                    $(document).scrollTop(this.top);
                }
            })
        }
        if($(this).html() == "skills"){
            $({top:$(document).scrollTop()}).animate({top:$(".myskill").offset().top},{
                duration:700,
                step:function(){
                    $(document).scrollTop(this.top);
                }
            })
        }
        if($(this).html() == "portfolio"){
            $({top:$(document).scrollTop()}).animate({top:$(".main").offset().top},{
                duration:700,
                step:function(){
                    $(document).scrollTop(this.top);
                }
            })
        }
        if($(this).html() == "contact"){
            $({top:$(document).scrollTop()}).animate({top:$(".footer").offset().top},{
                duration:700,
                step:function(){
                    $(document).scrollTop(this.top);
                }
            })
        }
    })

    $(".menu div").click(function(){
        if($(this).html() == "about"){
            $({top:$(document).scrollTop()}).animate({top:$(".personal").offset().top},{
                duration:700,
                step:function(){
                    $(document).scrollTop(this.top);
                }
            })
        }
        if($(this).html() == "skills"){
            $({top:$(document).scrollTop()}).animate({top:$(".myskill").offset().top},{
                duration:700,
                step:function(){
                    $(document).scrollTop(this.top);
                }
            })
        }
        if($(this).html() == "portfolio"){
            $({top:$(document).scrollTop()}).animate({top:$(".main").offset().top},{
                duration:700,
                step:function(){
                    $(document).scrollTop(this.top);
                }
            })
        }
        if($(this).html() == "contact"){
            $({top:$(document).scrollTop()}).animate({top:$(".footer").offset().top},{
                duration:700,
                step:function(){
                    $(document).scrollTop(this.top);
                }
            })
        }
    })

    //点击enter进入
    $(".enterBox").click(function(){
        $({top:$(document).scrollTop()}).animate({top:$(".personal").offset().top},{
            duration:700,
            step:function(){
                $(document).scrollTop(this.top);
            }
        })
    })

    //滚动条到达一定的高度，出现的动画
    var arr1 = [{lefts:5,tops:110},{lefts:50,tops:0},{lefts:78,tops:125},{lefts:74,tops:257},{lefts:38,tops:350},{lefts:12,tops:290}];
    $(document).scroll(function(){
        if($(document).scrollTop()>$(".myskill").offset().top-10&&$(document).scrollTop()<$(".main").offset().top){
            $(".change li").each(function(i){
                $(this).css({left:arr1[i].lefts+"%",top:arr1[i].tops+"px"});
            })
            $(".cover").css("right","30%");
        }else{
            $(".change li").each(function(i){
                $(this).css({left:"40%",top:"170px"});
            })
            $(".cover").css("right","-100%");
        }
    })


    //--------------------------------------------websit
    $(".show a").hover(function(){
        $(this).addClass("rs");
    },function(){
        $(this).removeClass("rs");
    })


    //------------------------------------------游戏，应用
    var arr = [280,260,320,330,340,300,340,240,280,260];
    $(".box>.container-fluid>.row>div").each(function(i){
        $(this).css("height",arr[i]+"px");
    })
    var clientW = $(window).width();
    var clientH = $(window).height();
    var bx = $(".box").width();
    var by = $(".box").height();
    $(document).scroll(function(){
        if( $(document).scrollTop()>2200 ){
            $(".box").css({
                //transition:"transform 2s ease 0.5s",
                left:"-20%",
                top:0,
                transform:"scale(1,1)",
            })
        }else{
            console.log(1);
            $(".box").css({
                left:"-15%",
                top:0,
                transform:"scale(0.1,0.1)",
            })
        }
    })
  /*  setTimeout(function(){
        $(".box").css({
            left:"-20%",
            top:"0",
            transition:"transform 1s ease",
            transform:"scale(1,1)"
        })
    },100)*/
    var px,py;
    $(".parent").mousemove(function(e){
        px = e.clientX;
        py = e.clientY;
    })
    var blx = ($(".box").width()-clientW)/clientW;
    var bly = ($(".box").height()-clientH)/clientH;
    setInterval(function(){
        $(".box").css({
            transition:"left 0.5s,top 0.5s",
            left:-px*blx,
            top:-py*bly

        })
    },300)


    //----------------------3D轮播--------------
    var timer_lunbo;
    var els = $(".sence a");
    var bg=['lun1.png','lun2.png','lun3.png','lun4.jpg','lun5.jpg'];
    els.each(function(i){
        $(this).css({"background":"url(images/"+bg[i]+") no-repeat",backgroundSize:"contain"});
    });
    var station=[[-500,-250,10],[-250,-130,20],[0,0,30],[250,-130,20],[500,-250,10]];
    var lunbo;
    lunbo = function(){
        els.each(function(i){
            $(this).css({"transform":"translate3d("+station[i][0]+"px,0,"+station[i][1]+"px)",zIndex:station[i][2]});
        })
        station.unshift(station.pop());
    };
    timer_lunbo = setInterval(lunbo,3000);

    els.hover(function(){
        clearInterval(timer_lunbo);
    },function(){
        timer_lunbo = setInterval(lunbo,3000);
    })

    els.click(function(){
        var index = $(els).index(this);
        $(".zhezhao").css("display","block");
        $(".ps").css({"background":"url(images/"+bg[index]+")","backgroundSize":"contain"});
    })
    $(".btn").click(function(){
        $(".zhezhao").css("display","none");
    })


})