document.addEventListener("DOMContentLoaded", () => {
const bg02Section = document.querySelector("#bg02");
if (!bg02Section) return;

const bg02Observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        bg02Section.classList.add("active");
        // 한 번만 실행하고 싶으면 다음 줄로 관찰 해제
        // observer.unobserve(bg02Section);
    }
    });
}, {
    threshold: 0.7   // 섹션이 30% 정도 보이면 발동
});

bg02Observer.observe(bg02Section);
});

document.addEventListener("DOMContentLoaded", () => {
  const plan = document.querySelector("#plan");
  if (!plan) return;

  const planObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        plan.classList.add("active");
        observer.unobserve(plan); // 한 번만 실행되게
      }
    });
  }, {
    threshold: 0.1  // 20% 보이면 발동
  });

  planObserver.observe(plan);
});

document.addEventListener("DOMContentLoaded", () => {
  const service01 = document.querySelector(".service01");
  if (!service01) return;

  const service01Observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        service01.classList.add("active");
        observer.unobserve(service01); // 한 번만 실행하고 끝
      }
    });
  }, {
    threshold: 0.5  // 30% 정도 보이면 발동
  });

  service01Observer.observe(service01);
});

document.addEventListener("DOMContentLoaded", () => {
  const threeBgSection = document.querySelector(".three-bg-section");
  if (!threeBgSection) return;

  const threeBgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        threeBgSection.classList.add("active");
        observer.unobserve(threeBgSection); // 한 번만 실행
      }
    });
  }, {
    threshold: 0.2    // 30% 정도 보이면 발동
  });

  threeBgObserver.observe(threeBgSection);
});


document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".slider-track");
  if (!track) return;

  // 원본 3장을 복제해서 6장으로 (무한 루프용)
  track.innerHTML += track.innerHTML;
  const slides = Array.from(track.children);
  const total = slides.length;      // 6 (1,2,3,1,2,3)
  const half = total / 2;           // 3 (원본 세트 길이)

  let index = 0;

  function applyTransform() {
    track.style.transform =
      `translateX(calc(-1 * ${index} * (var(--slide-width) + var(--slide-gap))))`;

    slides.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === index);
    });
  }

  // 처음 0번 슬라이드 중앙에
  applyTransform();

  const DURATION = 600;   // 슬라이드 모션 시간(ms)
  const DELAY   = 8000;   // 한 장 보여주는 시간(ms)

  setInterval(() => {
    // 항상 오른쪽(다음)으로 한 칸씩
    index = (index + 1) % total;
    track.style.transition = "transform 0.6s ease-in-out";
    applyTransform();

    // 복제 세트로 넘어갔을 때(3,4,5 중 하나),
    // 모션 끝난 뒤에 눈에 안 띄게 원본 위치로 점프
    if (index >= half) {
      setTimeout(() => {
        track.style.transition = "none";
        index = index - half;   // 3→0, 4→1, 5→2 로 되돌림
        applyTransform();       // 같은 화면인데 인덱스만 원본으로 교체
      }, DURATION + 50);
    }

  }, DELAY);
});