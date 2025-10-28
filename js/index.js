document.getElementById("pdfBtn").addEventListener("click", function(e){
  e.preventDefault(); // 기본 동작 막기 (한 번에 제어)
  
  const fileUrl = this.getAttribute("href");
  const fileName = this.getAttribute("download");
  
  // 1️⃣ 다운로드 트리거
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // 2️⃣ PDF 새 탭으로 열기
  window.open(fileUrl, "_blank");
});