function showAd() {
  // Ẩn nút "Xem quảng cáo" sau khi bấm
  document.getElementById("nut_quangcao").style.display = "none";

  // Đợi 3 giây rồi hiện overlay quảng cáo
  setTimeout(() => {
    document.getElementById("quangcao_overlay").style.display = "flex";
  }, 500);
}

function closeAd() {
  document.getElementById("quangcao_overlay").style.display = "none";
}

