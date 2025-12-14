// document.getElementById("pdfBtn").addEventListener("click", function(e){
// e.preventDefault(); // 기본 동작 막기 (한 번에 제어)

// const fileUrl = this.getAttribute("href");
// const fileName = this.getAttribute("download");

// // 1️⃣ 다운로드 트리거
// const link = document.createElement("a");
// link.href = fileUrl;
// link.download = fileName;
// document.body.appendChild(link);
// link.click();
// document.body.removeChild(link);

// // 2️⃣ PDF 새 탭으로 열기
// window.open(fileUrl, "_blank");
// });

const section = document.querySelector('.bg-01');
const items = document.querySelectorAll('.fade-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) { 
            items.forEach(item => item.classList.add('on'));
            observer.unobserve(entry.target); // 한 번만 실행하고 싶을 때
        }
    });
}, { threshold: 0.5 });

observer.observe(section);

const section2 = document.querySelector('.bg-02');
const items2 = document.querySelectorAll('.fade-item2');

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) { 
            items2.forEach(item => item.classList.add('on'));
            observer2.unobserve(entry.target); // 한 번만 실행하고 싶을 때
        }
    });
}, { threshold: 0.5 });

observer2.observe(section2);

const section3 = document.querySelector('.bg-03');
const imgs = document.querySelectorAll('.bg_03>img');

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            imgs.forEach((img, index) => {
                setTimeout(() => {
                    img.classList.add('show');
                }, index * 300); // 각 이미지 0.3초 간격 등장
            });

          observer3.unobserve(section3);
        }
    });
}, { threshold: 0.6 });

observer3.observe(section3);