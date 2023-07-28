//1. 모바일 메뉴 숨기기
//객체 = 모바일 메뉴 m_nav_open
//객체.속성 style.display = 'none'
//2. 햄버거 메뉴를 클릭시 모바일 메뉴 보이기
//객체 = 햄버거 메뉴 m_nav , 모바일 메뉴  m_nav_open
//속성
//이벤트
//메서드
//3. x 버튼 클릭시 모바일 메뉴 숨기기
//객체 = x 버튼 close, 모바일 메뉴 m_nav_open

const m_nav_open = document.querySelector ('.m_nav_open');
const m_nav = document.querySelector ('.m_nav');
const close = document.querySelector ('#close');
//정상출력 확인 
console.log(m_nav_open, m_nav);
//1. 모바일 메뉴 숨기기
m_nav_open.style.display = 'none';
//2. 햄버거 메뉴 클릭시 모바일 메뉴 보이기
//객체.이벤트
m_nav.addEventListener ('click',function(){
    //2-2. 모바일 메뉴 보이기
    m_nav_open.style.display = 'block';
})
//3. x 버튼클릭시 모바일 메뉴 숨기기
close.addEventListener ('click',function(){
    m_nav_open.style.display = 'none';
})
//main-swiper-slide
//const 변수명 = new Swiper('적용 대상'); - 기본 준비
//const 변수명 = new Swiper('적용대상',{속성:값, 속성:값});
const pawin_slide = new Swiper('#pawin_slide',{
    //자동재생-중가로({}) 묶어줘야함
    autoplay:{
        delay:1000,//슬라이드 간격(밀리초) 기본3초
        disableOnInteraction:false, //버튼 클릭후 자동재생 유지
    },
    loop:true,  //반복한다. = 자연스럽게 한방향으로 넘어가짐 마지막장 다음다시첫장
    effect:'fade',
    // direction:'vertical'
    //body안에 있는 모든 swiper-next,prev를 인식하기 때문에 
    //개별인식 가능 한 부모 이름을 반드시 앞에 먼저 작성한다.
    navigation: {
        nextEl: '#pawin_slide .swiper-button-next',
        prevEl: '#pawin_slide .swiper-button-prev',
    }
});
//연습----------------------
const new_slide = new Swiper('#new_slide',{
    autoplay:{delay:1000},
    loop:true,
    navigation: {
        nextEl: '#new_slide .swiper-button-next',
        prevEl: '#new_slide .swiper-button-prev',
    }
});

