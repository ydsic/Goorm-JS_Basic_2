function showContent(contentId) {
  const content = document.querySelector("#" + contentId);
  const section = content.closest(".section");
  const hiddenIcon = section.querySelector('.openIcon');
  content.classList.toggle('hidden');
  hiddenIcon.classList.toggle('hidden');
}


document.addEventListener("DOMContentLoaded", () => {
  const observerTarget = document.querySelector(".targetDiv");

  const loadMoreData = () => {
    const list = document.querySelector(".mission-content");
 
    for (let i = 0; i < 3; i++) {
      const item = document.createElement("section");
      item.className = "section2";
      item.innerHTML = `<h2>무한 스크롤 - ${list.children.length + 1} </h2>`;
      list.appendChild(item);
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        loadMoreData();
      } 
  });
  observer.observe(observerTarget);
});

