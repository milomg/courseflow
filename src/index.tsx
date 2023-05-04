import { createResource, createSignal, onCleanup, onMount } from "solid-js";
import { render } from "solid-js/web";
import { Courses } from "./csc";
import "./style.css";

type CourseFormat = Record<
  string,
  {
    courseId: string;
    org: string;
    orgName: string;
    courseTitle;
    code: string;
    courseDescription: string;
    prerequisities: string;
    corequisites: string;
    exclusions: string;
    recommendedPreparation: string;
    section: string;
    session: "F" | "S" | "Y";
    webTimetableInstructions: string;
    deliveryInstructions: string;
    breadthCategories: string;
    distributionCategories: string;
    meetings: Record<
      string,
      {
        schedule: Record<
          string,
          {
            meetingDay: string;
            meetingStartTime: string;
            meetingEndTime: string;
            meetingScheduleId: string;
            assignedRoom1: string | null;
            assignedRoom2: string | null;
          }
        >;
        instructors: Record<
          string,
          {
            instructorId: string;
            firstName: string;
            lastName: string;
          }
        >;
        meetingId: string;
        teachingMethod: string;
        sectionNumber: string;
        subtitle: string;
        cancel: string;
        waitlist: string;
        deliveryMode: string;
        online: string;
        enrollmentCapacity: string;
        actualEnrolment: string;
        actualWaitlist: string;
        enrollmentIndicator: string;
        meetingStatusNotes: string;
        enrollmentControls: Array<{
          postId: string | null;
          postCode: string | null;
          postName: string | null;
          subjectId: string;
          subjectCode: string;
          subjectName: string;
          designationId: string;
          designationCode: string;
          designationName: string;
          yearOfStudy: string;
          typeOfProgramId: string | null;
          typeOfProgramCode: string | null;
          typeOfProgramName: string | null;
          primaryOrgId: string;
          primaryOrgCode: string;
          primaryOrgName: string;
          secondaryOrgId: string;
          secondaryOrgCode: string;
          secondaryOrgName: string;
          assocOrgId: string;
          assocOrgCode: string;
          assocOrgName: string;
          adminOrgId: string;
          adminOrgCode: string;
          adminOrgName: string;
        }>;
      }
    >;
  }
>;

const App = () => {
  let courses!: SVGSVGElement;
  let dialog!: HTMLDialogElement;

  const [title, setTitle] = createSignal("");
  const [description, setDescription] = createSignal("");

  const [courseData] = createResource<CourseFormat>(async () => {
    const raw = await fetch("/courses.json");
    return raw.json();
  });

  const [transform, setTransform] = createSignal("");

  const originalWidth = 1196;
  const originalHeight = 708;
  const scaled = Math.max(originalHeight / window.innerHeight, originalWidth / window.innerWidth);

  let viewX = 0;
  let viewY = 0;
  let zoom = 1;
  const wheelEvent = (e: WheelEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (e.ctrlKey) {
      let oldZoom = zoom;
      zoom = Math.max(Math.min(zoom * Math.pow(2, e.deltaY * -0.01), 2), 0.5);
      let mouesX = e.offsetX * scaled - (window.innerWidth * scaled - originalWidth) / 2;
      let mouesY = e.offsetY * scaled - (window.innerHeight * scaled - originalHeight) / 2;
      viewX = mouesX - (mouesX - viewX) * (zoom / oldZoom);
      viewY = mouesY - (mouesY - viewY) * (zoom / oldZoom);
    } else if (e.shiftKey) {
      viewX -= e.deltaY;
    } else {
      viewX -= e.deltaX;
      viewY -= e.deltaY;
    }

    viewX = Math.min(Math.max(viewX, -originalWidth * zoom), originalWidth);
    viewY = Math.min(Math.max(viewY, -originalHeight * zoom), originalHeight);

    setTransform(`translate(${viewX},${viewY}) scale(${zoom})`);

    return false;
  };
  window.addEventListener("wheel", wheelEvent, { passive: false });
  onCleanup(() => window.removeEventListener("wheel", wheelEvent));

  let lastRadius = 0;
  let lastX = 0;
  let lastY = 0;
  const onTouchStart = (e: TouchEvent) => {
    if (e.touches.length >= 2) {
      e.preventDefault();
      e.stopPropagation();
      let touch1 = e.touches[0];
      let touch2 = e.touches[1];
      lastRadius = Math.hypot(touch1.clientX - touch2.clientX, touch1.clientY - touch2.clientY) * scaled;
      lastX = ((touch1.clientX + touch2.clientX) / 2) * scaled - (window.innerWidth * scaled - originalWidth) / 2;
      lastY = ((touch1.clientY + touch2.clientY) / 2) * scaled - (window.innerHeight * scaled - originalHeight) / 2;
    } else if (e.touches.length === 1) {
      let touch = e.touches[0];
      lastX = touch.clientX;
      lastY = touch.clientY;
    }
  };
  const onTouchMove = (e: TouchEvent) => {
    if (e.touches.length >= 2) {
      let touch1 = e.touches[0];
      let touch2 = e.touches[1];
      let radius = Math.hypot(touch1.clientX - touch2.clientX, touch1.clientY - touch2.clientY) * scaled;
      let oldZoom = zoom;
      zoom = Math.max(Math.min(zoom * (radius / lastRadius), 4), 0.5);
      lastRadius = radius;
      let mouseX = ((touch1.clientX + touch2.clientX) / 2) * scaled - (window.innerWidth * scaled - originalWidth) / 2;
      let mouseY =
        ((touch1.clientY + touch2.clientY) / 2) * scaled - (window.innerHeight * scaled - originalHeight) / 2;
      viewX = mouseX - (mouseX - viewX) * (zoom / oldZoom) + (mouseX - lastX);
      viewY = mouseY - (mouseY - viewY) * (zoom / oldZoom) + (mouseY - lastY);
      lastX = mouseX;
      lastY = mouseY;
      viewX = Math.min(Math.max(viewX, -originalWidth * zoom), originalWidth);
      viewY = Math.min(Math.max(viewY, -originalHeight * zoom), originalHeight);
      setTransform(`translate(${viewX},${viewY}) scale(${zoom})`);
    } else if (e.touches.length === 1) {
      let touch = e.touches[0];
      viewX += (touch.clientX - lastX) * scaled;
      viewY += (touch.clientY - lastY) * scaled;
      lastX = touch.clientX;
      lastY = touch.clientY;
      viewX = Math.min(Math.max(viewX, -originalWidth * zoom), originalWidth);
      viewY = Math.min(Math.max(viewY, -originalHeight * zoom), originalHeight);
      setTransform(`translate(${viewX},${viewY}) scale(${zoom})`);
    }
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (e.touches.length === 1) {
      let touch = e.touches[0];
      lastX = touch.clientX;
      lastY = touch.clientY;
    }
  };

  onMount(() => {
    courses.addEventListener("touchstart", onTouchStart, { passive: false });
    courses.addEventListener("touchmove", onTouchMove, { passive: false });
    courses.addEventListener("touchend", onTouchEnd, { passive: false });
    onCleanup(() => {
      courses.removeEventListener("touchstart", onTouchStart);
      courses.removeEventListener("touchmove", onTouchMove);
      courses.removeEventListener("touchend", onTouchEnd);
    });

    dialog.addEventListener("click", (e) => {
      if (e.target !== dialog.firstElementChild) {
        dialog.close();
      }
    });

    let list = courses.querySelectorAll(".course");

    list.forEach((course) => {
      course.addEventListener("click", (e) => {
        const courseString = (e.target as SVGGElement).textContent.replace(/\//g, "").slice(0, 6);
        const data = courseData();
        const keys = Object.keys(data);
        const courseName = keys.find((key) => key.startsWith(courseString))!;
        const course = data[courseName];
        setTitle(course.courseTitle);
        setDescription(course.courseDescription);
        dialog.showModal();
      });
    });
  });

  return (
    <>
      <Courses ref={courses} transform={transform()} />
      <dialog ref={dialog}>
        <div>
          <h1>Course: {title()}</h1>
          <div innerHTML={description()}/>
        </div>
      </dialog>
    </>
  );
};

render(() => <App />, document.getElementById("root") as HTMLElement);
