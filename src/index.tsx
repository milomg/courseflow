import { render } from "solid-js/web";
import "./style.css";

const App = () => {
  const courses = (
    <embed
      src="./csc.svg"
      style={{ "pointer-events": "none", "transform-origin": "top left" }}
    />
  ) as HTMLEmbedElement;

  courses.onload = () => {
    let el = courses.getSVGDocument().documentElement;
    let list = el.querySelectorAll(".course");

    const originalWidth = el.clientWidth;
    const originalHeight = el.clientHeight;

    list.forEach((course) => {
      course.addEventListener("click", (e) => {
        console.log(e.target);
      });
    });

    let viewX = 0;
    let viewY = 0;
    let zoom = 1;
    window.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.ctrlKey) {
          let oldZoom = zoom;
          zoom = Math.max(
            Math.min(zoom * Math.pow(2, e.deltaY * -0.01), 2),
            0.5
          );
          viewX = (zoom / oldZoom) * (viewX - e.offsetX) + e.offsetX;
          viewY = (zoom / oldZoom) * (viewY - e.offsetY) + e.offsetY;
        } else if (e.shiftKey) {
          viewX -= e.deltaY;
        } else {
          viewX -= e.deltaX;
          viewY -= e.deltaY;
        }

        viewX = Math.min(
          Math.max(viewX, -originalWidth * zoom),
          window.innerWidth
        );
        viewY = Math.min(
          Math.max(viewY, -originalHeight * zoom),
          window.innerHeight
        );

        courses.style.transform = `translate(${viewX}px,${viewY}px) scale(${zoom})`;

        return false;
      },
      { passive: false }
    );
  };

  return courses;
};

render(() => <App />, document.getElementById("root") as HTMLElement);
