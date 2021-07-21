(function () {
    var sc = 0; // 스크롤 초기화
    var winH = 0; // 창높이

    // 버튼 토글 공통
    $('.btn_toggle').on('click', function() {
        $(this).siblings().toggleClass('open');
    });

    // ***** 네비게이션 열기 *****
    $('#header .btn_open').on('click', function () {
        $('#header .gnb_box').addClass('open');
        $('#header .dimm').fadeIn();
        $('#header .btn_close').fadeIn();
    });
    $('#header .btn_close, #header .dimm').on('click', function () {
        $('#header .gnb_box').removeClass('open');
        $('#header .dimm').fadeOut();
        $('#header .btn_close').fadeOut();
    });

    // ***** gnb *****
    $('.gnb .depth1>li>a').on('click', function () {
        $(this).toggleClass('active').parent().siblings().find('>a').removeClass('active');
        $(this).next().slideToggle().parent().siblings().find('.depth2').slideUp();
    });


    // ***** 메인 슬라이더 *****
    var mainSlider = new Swiper('.main_slider', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    // ***** 메인 메뉴 슬라이더 ******
    var mainMenuSlider = new Swiper('.menu_slider', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $('.main_menu .menu_slider_wrap').on('click', function (e) {
        e.preventDefault();
    });

    // ***** 메인 sns 슬라이더 *****
    var snsSlider = new Swiper('.sns_slider', {
        slidesPerView: 'auto',
        spaceBetween: 5,
    });

    $('.main_sns .sns_slider_wrap').on('click', function (e) {
        e.preventDefault();
    });


    
    var btnTop = $('#footer .btn_top');
    var posArr = []
    var brandAni = $('.brand_ani');

    // ** 서브 brand_ani 위치값
    $(window).resize(function() {
        brandAni.each(function(i) {
            posArr[i] = $(this).offset().top - 700;
        });
    }).trigger('resize');

    $(window).scroll(function () {
        sc = $(this).scrollTop();
        
        // ***** Top 버튼 *****
        if (sc >= 80) {
            btnTop.fadeIn(300);
        } else {
            btnTop.fadeOut(300);
        }

         // ***** 서브_브랜드스토리 애니메이션 *****
        if (sc > posArr[0]) {
            brandAni.eq(0).addClass('scroll');
        }

        if (sc > posArr[1]) {
            brandAni.eq(1).addClass('scroll');
        }

        if (sc > posArr[2]) {
            brandAni.eq(2).addClass('scroll');
        }

    }).trigger('scroll');

    // ** 스크롤 부드럽게
    btnTop.on('click', function (e) {
        e.preventDefault();

        $('html , body').animate({
            scrollTop: 0
        }, 1000);
    });


    // ***** 서브_탭메뉴 스크롤 *****
    var subTab = $('.sub_tab .tab');

    if(subTab.length) {
        var posX = subTab.find('.active').offset().left - 15;

        subTab.animate({ scrollLeft: posX },0);
    }


   // ***** 서브_메뉴 리스트 클릭 시 상세 정보 창 *****
    var modalInfo = $('.menu_container .modal_info');
    var detailPop = $('.menu_container .modal_info .menu_detail_pop');

    $('.menu_container .menu_list li').on('click', function(e) {
        e.preventDefault();

        var idx = $(this).index();

        $('.menu_container .dimm').fadeIn();
        modalInfo.fadeIn(200);
        detailPop.eq(idx).fadeIn(200).siblings('.menu_detail_pop').hide();
    })

    $('.modal_info .btn_close, .menu_container .dimm').on('click', function() {
        $('.menu_container .dimm').fadeOut();
        modalInfo.fadeOut(200);
    });

    // 지도 높이
    $(window).resize(function () {
        winH = $(this).height();

        $('#map').height(winH);
    }).trigger('resize');

    // ***** 서브_매장찾기 버튼 클릭 시 폼 열기 *****
    $('.store_search_container .search_box .btn_open').on('click', function () {
        $(this).toggleClass('on');
        $('.store_search_container .search_form').toggleClass('open');
        
    });
})();