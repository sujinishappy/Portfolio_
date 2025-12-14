document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".pdf-btn").forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      e.preventDefault();

      const fileUrl = this.getAttribute("href");
      const fileName = this.getAttribute("download");

      // 다운로드
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // 새 탭에서도 열기
      window.open(fileUrl, "_blank");
    });
  });
});

// pdf 다운받기 및 바로 가기

  // 스크롤 페이드 인터랙션
  // const observer = new IntersectionObserver(
  //   (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("visible");
  //         observer.unobserve(entry.target);
  //       }
  //     });
  //   },
  //   {
  //     threshold: 0.15
  //   }
  // );

  // document.querySelectorAll(".fade-in").forEach((el) => {
  //   observer.observe(el);
  // });