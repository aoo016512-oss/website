// 각 메뉴별 하위 메뉴 데이터
const submenuData = {
    '참여마당': [
        { text: '대구교육 정책공모', icon: '+' },
        { text: '함께하는 대구교육문화', icon: '' },
        { text: '자유게시판', icon: '' },
        { text: '대구교육청 SNS', icon: '' },
        { text: '인사핫라인', icon: '' },
        { text: '신고센터', icon: '+' },
        { text: '국민제안', icon: '+' },
        { text: '공무원제안', icon: '→' },
        { text: '열린감사', icon: '+' },
        { text: '정책참여', icon: '+' },
        { text: '적극행정', icon: '+' },
        { text: '주민참여예산방', icon: '+' },
        { text: '설문 및 투표', icon: '' },
        { text: '교원임무경감', icon: '+' },
        { text: '사랑나눔교육기부', icon: '→' },
        { text: '문신제거 의료지원', icon: '' },
        { text: '국민생각함', icon: '→' }
    ],
    '알림마당': [
        { text: '공지사항', icon: '' },
        { text: '통합예약시스템', icon: '' },
        { text: '기관별 행사안내', icon: '+' },
        { text: '시험·채용정보', icon: '+' },
        { text: '시험정보', icon: '+' },
        { text: '채용정보', icon: '+' },
        { text: '대학생교육봉사활동', icon: '+' },
        { text: '학교인력풀센터 바로가기', icon: '' },
        { text: '계약제교원 인력풀', icon: '→' },
        { text: '교육공무직원 인력풀', icon: '→' },
        { text: '퇴직공무원 인력풀', icon: '→' },
        { text: '학교알림마당', icon: '' },
        { text: '계약정보', icon: '' },
        { text: '학교회계전출금 교부현황', icon: '' },
        { text: '보도자료', icon: '→' },
        { text: '원격수업/대체학습', icon: '+' },
    ],
    '교육마당': [
        { text: '국제바칼로레아(IB)', icon: '→' },
        { text: '고교학점제', icon: '→' },
        { text: 'AI디지털교육지료 수업지원센터', icon: '→' },
        { text: '전·재·편입학', icon: '+' },
        { text: '교육과정안내', icon: '' },
        { text: '자유학기제', icon: '+' },
        { text: '독서인문교육', icon: '+' },
        { text: '유·초·중·고', icon: '+' },
        { text: '평생·학부모 교육', icon: '+' },
        { text: '흡연예방교육', icon: '+' },
        { text: '학교폭력예방교육', icon: '' },
        { text: '학교교육정보화', icon: '+' },
        { text: '장학자료', icon: '' },
        { text: '학업중단예방·대안교육', icon: '+' },
        { text: '기초학력지원센터', icon: '+' },
        { text: '대구특수교육원', icon: '+' },
        { text: '통학구역안내', icon: '' },

        { text: '내 고장 대구·경북 다시보기', icon: '→' },
        { text: '현장체험학습정보방', icon: '→' },
        { text: '다문화교육', icon: '+' },
        { text: '체험 프로그램', icon: '' },
        { text: '국제협력누리집 바로가기', icon: '→' }
    ],
    '행정마당': [
        { text: '기록관', icon: '→' },
        { text: '교육통계', icon: '+' },
        { text: '입법예고', icon: '→' },
        { text: '법령·지침', icon: '+' },
        { text: '교육공무직', icon: '+' },
        { text: '재산 및 물품관리', icon: '+' },
        { text: '교육복지', icon: '+' },
        { text: '교육환경보호구역', icon: '+' },
        { text: '학교공간ON대구', icon: '→' },
        { text: 'BTL 민간투자 사업', icon: '+' },
        { text: '학교안전공제회', icon: '→' },
        { text: '에듀파인학교회계', icon: '+' },
        { text: '소청심사', icon: '+' },
        { text: '행정심판', icon: '+' },
        { text: '무료법률상담', icon: '+' },
        { text: '사회복무요원자료실', icon: '' },
        { text: '안전보건 자료실', icon: '+' },
        { text: '공무국외여행', icon: '+' },
        { text: '교육시설통합정보망', icon: '→' },
        { text: '간편도움메뉴얼', icon: '' }
    ],
    '민원/정보공개': [
        { text: '민원안내', icon: '+' },
        { text: '인터넷민원신청', icon: '+' },
        { text: '예약민원신청', icon: '' },
        { text: '고충민원신청', icon: '+' },
        { text: '민원자료실', icon: '+' },
        { text: '행정정보공통이용', icon: '' },
        { text: '민원소통함', icon: '' },
        { text: '학원·교습소관련', icon: '+' },
        { text: '영리·공익법인', icon: '+' },
        { text: '정보공개', icon: '+' },
        { text: '정책실명제', icon: '+' }
    ],
    '교육청안내': [
        { text: '열린교육감실', icon: '' },
        { text: '공약실천|매니페스토', icon: '' },
        { text: '인사정보', icon: '+' },
        { text: '재정현황', icon: '+' },
        { text: '업무추진비 공개', icon: '' },
        { text: '반부패청렴방', icon: '' },
        { text: '교육청 EI', icon: '' },
        { text: '기관연혁', icon: '+' },
        { text: '대구교육방향', icon: '+' },
        { text: '대구교육백서', icon: '' },
        { text: '일반현황', icon: '' },
        { text: '조직도 및 전화번호', icon: '+' },
        { text: '국가상징보기', icon: '' },
        { text: '부서별누리집', icon: '' },
        { text: '공개자료실', icon: '' },
        { text: '정책홍보 영상자료', icon: '' },
        { text: '오시는 길', icon: '+' }
    ]
};

// 서브메뉴 내용 업데이트 함수
function updateSubmenu(menuName) {
    const submenuContent = document.getElementById('submenu-content');
    if (!submenuContent || !submenuData[menuName]) return;
    
    const items = submenuData[menuName];
    submenuContent.innerHTML = items.map(item => {
        const iconHtml = item.icon ? `<span>${item.icon}</span>` : '';
        // 모든 하위 메뉴 항목은 임시링크(#)로 변경
        const href = '#';
        return `<a href="${href}" class="submenu-item">${item.text} ${iconHtml}</a>`;
    }).join('');
}

// 대상별 메뉴 버튼 클릭 이벤트
document.addEventListener('DOMContentLoaded', function() {
    const targetButtons = document.querySelectorAll('.target-btn');
    const submenu = document.querySelector('.quick-links-submenu');
    
    // 초기 상태: 첫 번째 버튼이 active이고 서브 메뉴 표시
    if (submenu) {
        submenu.classList.add('active');
    }
    
    // 각 버튼에 클릭 이벤트 추가
    targetButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 모든 버튼에서 active 클래스 제거
            targetButtons.forEach(btn => btn.classList.remove('active'));
            
            // 클릭한 버튼에 active 클래스 추가 (검정 배경)
            this.classList.add('active');
            
            // 서브 메뉴 항상 표시
            if (submenu) {
                submenu.classList.add('active');
            }
        });
    });

    // 네비게이션 메뉴 호버 이벤트 (서브메뉴 표시 및 내용 변경)
    const menuItems = document.querySelectorAll('.has-submenu');
    const submenuContainer = document.querySelector('.submenu-container');
    
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const menuName = this.getAttribute('data-menu');
            
            // 서브메뉴 내용 업데이트
            if (menuName) {
                updateSubmenu(menuName);
            }
            
            // 서브메뉴 표시
            if (submenuContainer) {
                submenuContainer.style.opacity = '1';
                submenuContainer.style.visibility = 'visible';
                submenuContainer.style.transform = 'translateX(-50%) translateY(0)';
                submenuContainer.style.pointerEvents = 'auto';
            }
        });
    });

    // 네비게이션 영역에서 마우스가 나갔을 때 서브메뉴 숨김
    const navMenu = document.querySelector('.manu');
    if (navMenu && submenuContainer) {
        navMenu.addEventListener('mouseleave', function() {
            submenuContainer.style.opacity = '0';
            submenuContainer.style.visibility = 'hidden';
            submenuContainer.style.transform = 'translateX(-50%) translateY(-10px)';
            submenuContainer.style.pointerEvents = 'none';
        });
    }
});