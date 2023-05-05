var list = [...document.querySelector(".view-courses-view > .view-content").children].map((x) => ({
  title: x.firstElementChild.innerText,
  body: x.querySelector(".views-field-body").firstElementChild.innerHTML,
  hours: x.querySelector(".views-field-field-hours .field-content")?.innerHTML,
  prerequisite: x.querySelector(".views-field-field-prerequisite .field-content")?.innerHTML,
  exclusion: x.querySelector(".views-field-field-exclusion .field-content")?.innerHTML,
  distributionRequirements: x.querySelector(".views-field-field-distribution-requirements .field-content")?.innerHTML,
  breadthRequirements: x.querySelector(".views-field-field-breadth-requirements .field-content")?.innerHTML,
  deliveryMode: x.querySelector(".views-field-field-method-of-delivery .field-content")?.innerHTML,
}));

// https://artsci.calendar.utoronto.ca/print/view/pdf/section_view/print_page/debug?view_args[]=Computer-Science
console.log(JSON.stringify(list));

// https://artsci.calendar.utoronto.ca/print/view/pdf/section_view/print_page/debug?view_args[]=Mathematics
var filter = ["MAT137", "MAT157", "MAT135", "MAT136", "MAT235", "MAT237", "MAT257", "MAT221", "MAT223", "MAT240"];
console.log(JSON.stringify(list.filter((x) => filter.includes(x.title.slice(0, 6)))));

// https://artsci.calendar.utoronto.ca/print/view/pdf/section_view/print_page/debug?view_args[]=Statistical-Sciences
var filter = ["STA237", "STA247", "STA255", "STA257"];
console.log(JSON.stringify(list.filter((x) => filter.includes(x.title.slice(0, 6)))));

// https://timetable.iit.artsci.utoronto.ca/api/20229/courses?org=CSC&code=&section=&studyyear=&daytime=&weekday=&prof=&breadth=&deliverymode=&online=&waitlist=&available=&fyfcourse=&title=
