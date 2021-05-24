//using selectors inside the element

// traversing the dom

const Buttons = document.querySelectorAll(".question-btn");
const questions = document.querySelectorAll(".question");

Buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const article = btn.parentElement.parentElement;

    article.classList.toggle("show-text");
    questions.forEach((ques) => {
      if (ques !== article) {
        ques.classList.remove("show-text");
      }
    });
  });
});
