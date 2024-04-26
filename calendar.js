// html 안의 요소에 대해 접근
const calendarDates = document.querySelector('.calendarDates');
const currentEl = document.querySelector('h2.currentMonth');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');



const today = new Date();
const dayArr = ['일', '월', '화', '수', '목', '금', '토'];

let currentYear = today.getFullYear();
let currentMonth = today.getMonth();

console.log(`${currentYear}년 <-- getFullYear()`); // 연도(year)
console.log(`${currentMonth}월 <-- getMonth()`) // 월(month)  (제로베이스)
console.log(`${today.getDate()}일 <-- getDate()`);  // 일(date)
console.log(`${dayArr[today.getDay()]}요일 <-- getDay()`);  // 요일(day)

console.log(new Date(currentYear, currentMonth, 0).getDate() + " <<-현재 월의 총 일의 수") // 0번째 날

function renderCalandar() {
    
    // 현재 월의 첫 번째 날짜
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    // 다음 달의 0 번째 날짜 => 현재 월의 마지막 날짜
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    // 현재 월의 첫 번째 요일
    const startDayOfWeek = firstDayOfMonth.getDay();

    currentEl.textContent = `${currentYear}년 ${currentMonth + 1}월`;

    for (let i = 0; i < startDayOfWeek; i++) {
        //반복문의 목적 : 현재 월의 첫 번째 요일이 목요일이라고 가정 -> 일,월,화,수,목은 빈 칸으로 만들기 위함임.
        const emptyDate = document.createElement('div');
        
        // 캘린더 element에 빈 날짜를 추가함.
        calendarDates.appendChild(emptyDate);
    }

    for(let i = 1; i <= daysInMonth; i++) {
        const dateElement = document.createElement('div');
        dateElement.classList.add("date");
        dateElement.textContent = i;
        calendarDates.appendChild(dateElement);
    }
}

renderCalandar();

prevBtn.addEventListener('click', function(){
    currentMonth--;
    if(currentMonth < 0){
        currentYear--;
        currentMonth = 11;
    }
    calendarDates.textContent = ''; // 전 월에 대한 element 제거
    renderCalandar();
})

nextBtn.addEventListener('click', function(){
    currentMonth++;
    if(currentMonth > 11) {
        currentYear++;
        currentMonth = 0
    }
    calendarDates.textContent = ''; // 전 월에 대한 element 제거
    renderCalandar();
})



