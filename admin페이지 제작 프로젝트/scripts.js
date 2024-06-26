// 현재 날짜와 시간을 표시하는 함수
function updateDateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString('ko-KR');
    const formattedTime = now.toLocaleTimeString('ko-KR');
    document.getElementById('date-time').textContent = `${formattedDate} ${formattedTime}`;
}

// 페이지 로드 시 현재 날짜와 시간을 업데이트
window.onload = updateDateTime;

// 일정 간격으로 현재 시간 업데이트 (예: 매 초마다)
setInterval(updateDateTime, 1000);

// 다크 모드 전환 기능
const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
toggleDarkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const table = document.getElementById('productTable');
    if (document.body.classList.contains('dark-mode')) {
        table.classList.add('table-dark');
    } else {
        table.classList.remove('table-dark');
    }
    const modal = document.querySelector('.modal-content');
    if (document.body.classList.contains('dark-mode')) {
        modal.classList.add('dark-mode');
    } else {
        modal.classList.remove('dark-mode');
    }
});

// 크롤링한 데이터를 아래와 같은 형태의 객체 배열로 가정합니다.
const data = [
    { category: "상의", brand: 'Supreme', product: '슈프림 박스로고 후드티', price: '390,000' },
    { category: "하의", brand: 'DIESEL', product: '디젤 트랙 팬츠', price: '188,000' },
    { category: "신발", brand: 'Nike', product: '에어포스 1', price: '137,000' },
    { category: "패션잡화", brand: 'Music&Goods', product: '빵빵이 키링', price: '29,000' },
];

const dataTable = document.getElementById('data-table');
const noDataMessage = document.getElementById('no-data-message');

if (data.length > 0) {
    noDataMessage.style.display = 'none';
    data.forEach((item) => {
        const row = dataTable.insertRow();
        row.insertCell(0).innerHTML = item.category;
        row.insertCell(1).innerHTML = item.brand;
        row.insertCell(2).innerHTML = item.product;
        row.insertCell(3).innerHTML = item.price;
    });
} else {
    noDataMessage.style.display = 'block';
}
