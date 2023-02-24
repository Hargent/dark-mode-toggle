class DarkModeView {
  _parentElement = document.querySelector(".toggle-icons");
  _root = document.querySelector(":root");
  toggleMode(data) {
    try {
      this._parentElement.addEventListener("click", (e) => {
        const btn = e.target.closest(".toggle-icon");
        const btnList = [...this._parentElement.children];

        if (!btn) return;
        if (data.mode !== btn.dataset.mode) {
          data.mode = btn.dataset.mode;
          this._root.style.setProperty(
            "--background-color",
            data.color[data.mode]
          );
          btnList.forEach((el) => {
            // el.classList.remove("roll-in-right");
            // el.classList.remove("roll-in-left");
            this._animationClear(el);
            if (!el.isEqualNode(btn)) {
              data.isDark
                ? el.classList.add("roll-in-right")
                : el.classList.add("roll-in-left");

              el.classList.remove("hidden");
              data.isDark = data.isDark ? false : true;
            }
          });

          btn.classList.toggle("hidden");
        }
      });
    } catch (err) {
      console.error(err);
    }
  }
  _animationClear(element) {
    element.classList.remove("roll-in-right");
    element.classList.remove("roll-in-left");
  }
}
export default new DarkModeView();

// console.log(darkmode);
