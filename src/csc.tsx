import { Component } from "solid-js";

export const Courses: Component<{
  transform: string;
  ref: SVGSVGElement;
}> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1196 708" ref={props.ref}>
    <style>{`
    text {
      font-family: sans-serif;
    }
    .course {
      font-size: 16px;
      cursor: pointer;
    }
    .required {
      font-size: 10px;
      fill: #fff;
    }
    .major {
      stroke-width: 4;
    }
    .required rect {
      fill: #888;
    }
  `}</style>
    <defs>
      <marker
        id="arrowHead"
        viewBox="0 0 10 10"
        refX="0"
        refY="5"
        markerUnits="strokeWidth"
        markerWidth="7"
        markerHeight="7"
        orient="auto"
      >
        <path d="m 0 1 10 4L0 9" />
      </marker>
    </defs>
    <g transform={props.transform}>
      <g style="line-height:1.25;font-size:16px">
        <path d="M -1 278 V-2 h 431 v 280 Z" fill="#6276b9" fill-opacity=".15" />
        <path d="M 337 706 V 278 H 226 v 200 H 115 v 228 Z" fill="#0a7442" fill-opacity=".15" />
        <path d="M 430 130 h 231 v 355 h -16 l -1 65 H 514 V 408 h -84 V 130 Z" fill="#5ac0ca" fill-opacity=".15" />
        <path d="M -1 706 V 278 h 227 v 200 H 115 v 228 Z" fill="#71e471" fill-opacity=".15" />
        <path d="M 337 706 h 177 V 408 h -84 V 278 h -93 Z" fill="#c2f013" fill-opacity=".15" />
        <path d="M 891 417 v 289 H 514 V 550 h 130 l 1 -65 h 125 v -68 Z" fill="#5b57cf" fill-opacity=".15" />
        <path d="M 661 130 v 355 h 109 l 1 -68 h 120 V 130 Z" fill="#dc0c33" fill-opacity=".15" />
        <path d="M 891 130 h 304 v 576 H 891 Z" fill="#d366cb" fill-opacity=".15" />
        <path d="M 430 -2 h 765 v 132 H 430 Z" fill="#c2f0b3" fill-opacity=".15" />
        <text x="248" y="161">
          <tspan>Math and</tspan>
          <tspan x="248" dy="21">
            Statistics
          </tspan>
        </text>
        <text x="147" y="691">
          <tspan>Computer Graphics</tspan>
        </text>
        <text x="16" y="304">
          <tspan>Humans and</tspan>
          <tspan x="16" dy="21">
            Computing
          </tspan>
        </text>
        <text x="441" y="235">
          <tspan>Theory</tspan>
        </text>
        <text x="840" y="70">
          <tspan>Introductory Courses</tspan>
        </text>
        <text x="777" y="252">
          <tspan>Software</tspan>
          <tspan x="777" dy="21">
            Engineering
          </tspan>
        </text>
        <text x="349" y="690">
          <tspan>Scientific Computing</tspan>
        </text>
        <text x="1067" y="228">
          <tspan>Computer</tspan>
          <tspan x="1067" dy="21">
            Systems
          </tspan>
        </text>
        <text x="635" y="690">
          <tspan>Artificial Intelligence</tspan>
        </text>
      </g>
      <g font-size="12" stroke="#000">
        <g class="course">
          <rect width="65" height="30" x="562" y="516" rx="4" ry="4" fill="#b1c8d1" />
          <text x="564" y="538" stroke="none">
            CSC438
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="562" y="472" rx="4" ry="4" fill="#b1c8d1" />
          <text x="564" y="493" stroke="none">
            CSC463
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="562" y="347" rx="4" ry="4" fill="#b1c8d1" />
          <text x="564" y="369" stroke="none">
            CSC448
          </text>
        </g>
        <g class="course major">
          <rect width="65" height="32" x="528" y="32" rx="4" ry="4" fill="#5dd5b8" />
          <text x="530" y="54" stroke="none">
            CSC165
          </text>
        </g>
        <g class="course major">
          <rect width="65" height="32" x="484" y="174" rx="4" ry="4" fill="#b1c8d1" />
          <text x="486" y="197" stroke="none">
            CSC236
          </text>
        </g>
        <g class="course major">
          <rect width="100.2" height="32" x="466" y="263" rx="4" ry="4" fill="#b1c8d1" />
          <text x="471" y="285" stroke="none">
            CSC263/265
          </text>
        </g>
        <g class="course major">
          <rect width="65" height="30" x="483" y="347" rx="4" ry="4" fill="#b1c8d1" />
          <text x="485" y="369" stroke="none">
            CSC373
          </text>
        </g>
        <g class="course major">
          <rect width="65" height="30" x="757" y="6" rx="4" ry="4" fill="#5dd5b8" />
          <text x="759" y="27" stroke="none">
            CSC108
          </text>
        </g>
        <g class="course major">
          <rect width="65" height="30" x="757" y="58" rx="4" ry="4" fill="#5dd5b8"  />
          <text x="759" y="79" stroke="none">
            CSC148
          </text>
        </g>
        <g class="course major">
          <rect width="65" height="30" x="739" y="175" rx="4" ry="4" fill="#e68080" />
          <text x="741" y="197" stroke="none">
            CSC207
          </text>
        </g>
        <g class="course major">
          <rect width="65" height="30" x="908" y="264" rx="4" ry="4" fill="#c285ff" />
          <text x="910" y="285" stroke="none">
            CSC209
          </text>
        </g>
        <g class="course major">
          <rect width="65" height="30" x="1020" y="175" rx="4" ry="4" fill="#c285ff" />
          <text x="1022" y="197" stroke="none">
            CSC258
          </text>
        </g>
        <g class="course major">
          <rect width="65" height="30" x="967" y="444" rx="4" ry="4" fill="#c285ff" />
          <text x="970" y="465" stroke="none">
            CSC369
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="32" y="404" rx="4" ry="4" fill="#91f27a" />
          <text x="34" y="425" stroke="none">
            CSC318
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="145" y="561" rx="4" ry="4" fill="#66a366" />
          <text x="147" y="582" stroke="none">
            CSC320
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="257" y="489" rx="4" ry="4" fill="#66a366" />
          <text x="259" y="510" stroke="none">
            CSC317
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="32" y="614" rx="4" ry="4" fill="#91f27a" />
          <text x="34" y="636" stroke="none">
            CSC454
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="32" y="347" rx="4" ry="4" fill="#91f27a" />
          <text x="34" y="369" stroke="none">
            CSC300
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="32" y="558" rx="4" ry="4" fill="#91f27a" />
          <text x="34" y="579" stroke="none">
            CSC404
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="32" y="461" rx="4" ry="4" fill="#91f27a" />
          <text x="34" y="482" stroke="none">
            CSC428
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="399" y="451" rx="4" ry="4" fill="#b8ff70" />
          <text x="401" y="472" stroke="none">
            CSC336
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="355" y="558" rx="4" ry="4" fill="#b8ff70" />
          <text x="357" y="579" stroke="none">
            CSC446
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="443" y="604" rx="4" ry="4" fill="#b8ff70" />
          <text x="445" y="625" stroke="none">
            CSC456
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="443" y="558" rx="4" ry="4" fill="#b8ff70" />
          <text x="445" y="579" stroke="none">
            CSC436
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="627" y="558" rx="4" ry="4" fill="#80b2ff" />
          <text x="629" y="579" stroke="none">
            CSC384
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="574" y="614" rx="4" ry="4" fill="#80b2ff" />
          <text x="576" y="636" stroke="none">
            CSC486
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="793" y="565" rx="4" ry="4" fill="#80b2ff" />
          <text x="795" y="587" stroke="none">
            CSC401
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="831" y="614" rx="4" ry="4" fill="#80b2ff" />
          <text x="833" y="636" stroke="none">
            CSC485
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="736" y="614" rx="4" ry="4" fill="#80b2ff" />
          <text x="738" y="636" stroke="none">
            CSC413
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="739" y="516" rx="4" ry="4" fill="#80b2ff" />
          <text x="741" y="538" stroke="none">
            CSC311
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="807" y="300" rx="4" ry="4" fill="#e68080" />
          <text x="809" y="322" stroke="none">
            CSC301
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="807" y="346" rx="4" ry="4" fill="#e68080" />
          <text x="809" y="367" stroke="none">
            CSC302
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="684" y="404" rx="4" ry="4" fill="#e68080" />
          <text x="687" y="425" stroke="none">
            CSC410
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="684" y="300" rx="4" ry="4" fill="#e68080" />
          <text x="687" y="322" stroke="none">
            CSC324
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="684" y="346" rx="4" ry="4" fill="#e68080" />
          <text x="687" y="367" stroke="none">
            CSC488
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="1075" y="520" rx="4" ry="4" fill="#c285ff" />
          <text x="1077" y="542" stroke="none">
            CSC469
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="1075" y="614" rx="4" ry="4" fill="#c285ff" />
          <text x="1077" y="636" stroke="none">
            CSC457
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="1075" y="460" rx="4" ry="4" fill="#c285ff" />
          <text x="1077" y="482" stroke="none">
            CSC458
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="912" y="404" rx="4" ry="4" fill="#c285ff" />
          <text x="914" y="425" stroke="none">
            CSC343
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="912" y="614" rx="4" ry="4" fill="#c285ff" />
          <text x="914" y="636" stroke="none">
            CSC443
          </text>
        </g>
        <g class="required">
          <rect x="20" y="507" width="80" height="24" />
          <text x="21" y="517" stroke="none">
            CSC301/317/318/
          </text>
          <text x="32" y="529" stroke="none">
            384/417/419
          </text>
        </g>
        <g class="required">
          <rect x="1132" y="262" width="53" height="24" />
          <text x="1139" y="278" stroke="none">
            CSC263
          </text>
        </g>
        <g>
          <text x="1046" y="282" font-size="8" stroke="none">
            and
          </text>
          <ellipse cx="1052" cy="279" rx="10" ry="8" fill="none" />
        </g>
        <g>
          <text x="538" y="490" font-size="8" stroke="none">
            or
          </text>
          <ellipse cx="542" cy="487" rx="10" ry="8" fill="none" />
        </g>
        <g class="required">
          <rect x="723" y="568" width="27" height="24" />
          <text x="727" y="584" stroke="none">
            Alg1
          </text>
        </g>
        <g class="required">
          <rect x="831" y="447" width="27" height="24" />
          <text x="834" y="463" stroke="none">
            Sta1
          </text>
        </g>
        <g class="course major">
          <rect width="173.6" height="46.2" x="24" y="13" rx="4" ry="4" fill="#8a67be" />
          <text x="28" y="33" stroke="none">
            MAT(135,136)/137/157
          </text>
          <text x="85" y="52" stroke="none">
            (Calc1)
          </text>
        </g>
        <g class="course major">
          <rect width="173.6" height="46.2" x="33" y="200" rx="4" ry="4" fill="#8a67be" />
          <text x="39" y="219" stroke="none">
            STA237/247/255/257
          </text>
          <text x="78" y="239" stroke="none">
            (Sta1)
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="658" y="614" rx="4" ry="4" fill="#80b2ff" />
          <text x="660" y="636" stroke="none">
            CSC412
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="145" y="611" rx="4" ry="4" fill="#66a366" />
          <text x="147" y="632" stroke="none">
            CSC420
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="884" y="6" rx="4" ry="4" fill="#5dd5b8" />
          <text x="886" y="27" stroke="none">
            CSC104
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="969" y="6" rx="4" ry="4" fill="#5dd5b8" />
          <text x="972" y="27" stroke="none">
            CSC120
          </text>
        </g>
        <g class="course major">
          <rect width="142.1" height="46.2" x="219" y="13" rx="4" ry="4" fill="#8a67be" />
          <text x="228" y="33" stroke="none">
            MAT221/223/240
          </text>
          <text x="268" y="52" stroke="none">
            (Alg1)
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="1075" y="409" rx="4" ry="4" fill="#c285ff" />
          <text x="1077" y="430" stroke="none">
            CSC385
          </text>
        </g>
        <g class="required">
          <rect x="233" y="442" width="50" height="24" />
          <text x="239" y="458" stroke="none">
            CSC209
          </text>
        </g>
        <g class="required">
          <rect x="111" y="398" width="50" height="24" />
          <text x="117" y="414" stroke="none">
            CSC263
          </text>
        </g>
        <g class="required">
          <rect x="920" y="361" width="100" height="24" />
          <text x="927" y="377" stroke="none">
            CSC111/165/Calc1
          </text>
        </g>
        <g>
          <ellipse cx="226" cy="225" rx="10" ry="8" fill="none" />
          <text x="220" y="228" font-size="8" stroke="none">
            and
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="355" y="604" rx="4" ry="4" fill="#b8ff70" />
          <text x="357" y="625" stroke="none">
            CSC466
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="684" y="451" rx="4" ry="4" fill="#e68080" />
          <text x="687" y="472" stroke="none">
            CSC465
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="941" y="313" rx="4" ry="4" fill="#c285ff" />
          <text x="943" y="334" stroke="none">
            CSC309
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="111" y="347" rx="4" ry="4" fill="#91f27a" />
          <text x="113" y="369" stroke="none">
            CSC304
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="562" y="429" rx="4" ry="4" fill="#b1c8d1" />
          <text x="564" y="450" stroke="none">
            CSC473
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="1075" y="358" rx="4" ry="4" fill="#c285ff" />
          <text x="1077" y="380" stroke="none">
            CSC367
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="153" y="442" rx="4" ry="4" fill="#91f27a" />
          <text x="155" y="463" stroke="none">
            CSC303
          </text>
        </g>
        <g class="required">
          <rect x="191" y="398" width="27" height="24" />
          <text x="194" y="414" stroke="none">
            Alg1
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="257" y="611" rx="4" ry="4" fill="#66a366" />
          <text x="259" y="633" stroke="none">
            CSC419
          </text>
        </g>
        <g class="course major">
          <rect width="65" height="30" x="629" y="7" rx="4" ry="4" fill="#5dd5b8" />
          <text x="631" y="29" stroke="none">
            CSC110
          </text>
        </g>
        <g class="course major">
          <rect width="65" height="30" x="629" y="58" rx="4" ry="4" fill="#5dd5b8" />
          <text x="631" y="79" stroke="none">
            CSC111
          </text>
        </g>
        <g>
          <ellipse cx="717" cy="131" rx="10" ry="8" fill="none" />
          <text x="713" y="134" font-size="8" font-family="Dialog" stroke="none">
            or
          </text>
        </g>
        <g>
          <ellipse cx="583" cy="110" rx="10" ry="8" fill="none" />
          <text x="580" y="113" font-size="8" font-family="Dialog" stroke="none">
            or
          </text>
        </g>
        <g class="course major">
          <rect width="65" height="32" x="579" y="174" rx="4" ry="4" fill="#b1c8d1" />
          <text x="581" y="197" stroke="none">
            CSC240
          </text>
        </g>
        <g>
          <ellipse cx="564" cy="235" rx="10" ry="8" fill="none" />
          <text x="560" y="238" font-size="8" font-family="Dialog" stroke="none">
            or
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="1055" y="6" rx="4" ry="4" fill="#5dd5b8" />
          <text x="1058" y="27" stroke="none">
            JCC250
          </text>
        </g>
        <g class="course major">
          <rect width="173.6" height="46.2" x="24" y="92" rx="4" ry="4" fill="#8a67be" />
          <text x="49" y="112" stroke="none">
            MAT235/237/257
          </text>
          <text x="85" y="131" stroke="none">
            (Calc2)
          </text>
        </g>
        <g class="course">
          <rect width="65" height="30" x="254" y="551" rx="4" ry="4" fill="#66a366" />
          <text x="257" y="573" stroke="none">
            CSC417
          </text>
        </g>
        <g>
          <ellipse cx="339" cy="343" rx="10" ry="8" fill="none" />
          <text x="333" y="345" font-size="8" font-family="Dialog" stroke="none">
            and
          </text>
        </g>
        <g class="required">
          <rect x="581" y="391" width="27" height="24" />
          <text x="584" y="407" stroke="none">
            Alg1
          </text>
        </g>
      </g>
      <g transform="translate(22 323)" stroke="#000" fill="none" marker-end="url(#arrowHead)">
        <path d="M 545 -44 h 27 v 61" />
        <path d="M 494 -28 v 45" />
        <path d="M 767 -287 v 14" />
        <path d="M 782 -132 h 136 v 65" />
        <path d="M 42 111 v 19" />
        <path d="M 409 158 v 92 h -3" />
        <path d="M 409 158 v 141 h 4" />
        <path d="M 409 158 v 92 h 4" />
        <path d="M 545 -44 h 79 v 271" />
        <path d="m 617 265 -17 20" />
        <path d="M 750 -117 v 281 h 54 v 71" />
        <path d="M 886 -44 h -16 v 328" />
        <path d="M 750 -117 v 302" />
        <path d="M 750 223 v 61" />
        <path d="M 886 -44 h -57 v 13" />
        <path d="M 544 -44 h 251 v 13" />
        <path d="M 818 7 v 8" />
        <path d="M 750 -117 V 96 h -15" />
        <path d="M 545 -44 h 150 v 14" />
        <path d="M 1030 -117 v 29 H 713 v 58" />
        <path d="M 695 7 v 8" />
        <path d="M 978 151 v 62 h 67" />
        <path d="M 493 55 v 286 h 592 v -11" />
        <path d="M 750 -117 V 96 h 132" />
        <path d="M 923 112 v 172" />
        <path d="M 978 151 v 156 h -15" />
        <path d="M 493 55 v 286 h 430 v -11" />
        <path d="m 39 208 0 19" />
        <path d="m 1136 -36 2 189 h -12" />
        <path d="M 951 -44 h 61" />
        <path d="M 1030 -117 v 58" />
        <path d="M 1030 -36 v 172 h -12" />
        <path d="M 1030 -36 v 189 h 15" />
        <path d="M 540 164 h -3" />
        <path d="M 493 55 v 109 h 9" />
        <path d="M 520 171 v 37 h 12" />
        <path d="M 520 171 v 136 h 24" />
        <path d="m 722 270 10 15" />
        <path d="M 823 148 v 87" />
        <path d="M 836 136 h 14 v 148" />
        <path d="M 809 136 h -42 v 49" />
        <path d="M 2 -289 h -18 v 192 H 4" />
        <path d="M 121 -77 v 33 h 315" />
        <path d="M 717 208 h -32 v 76" />
        <path d="M 1030 -36 v 137 h 15" />
        <path d="M 221 144 v 199 h 232 v -24" />
        <path d="M 221 144 v 199 H 95 V 153 H 83" />
        <path d="M 221 144 v 37 h 6" />
        <path d="M 114 99 v 204 h 1" />
        <path d="m 941 63 -6 11" />
        <path d="m 250 -264 -42 152" />
        <path d="m 174 -265 27 153" />
        <path d="M 204 -90 v 64 h 189 v 146" />
        <path d="M 204 -90 v 343 h -8" />
        <path d="M 204 -90 v 394 h -9" />
        <path d="M 409 158 v 138 h -3" />
        <path d="m 928 -29 9 12" />
        <path d="M 121 -77 v 94" />
        <path d="M 493 55 v 66 h 39" />
        <path d="M 1030 -36 v 87 h 15" />
        <path d="m 126 99 16 15" />
        <path d="m 177 99 -5 13" />
        <path d="M 221 144 v 160 h 6" />
        <path d="M 640 -285 v 12" />
        <path d="m 654 -235 30 31" />
        <path d="m 749 -235 -41 33" />
        <path d="M 705 -192 h 45 v 37" />
        <path d="M 685 -192 H 409 v 312" />
        <path d="M 705 -192 h 342 v 37" />
        <path d="M 685 -192 H 469 v 36" />
        <path d="m 544 -259 12 32" />
        <path d="m 609 -235 -32 15" />
        <path d="M 561 -205 v 33 h -48 v 16" />
        <path d="M 561 -205 v 33 h 459 v 17" />
        <path d="m 494 -116 33 19" />
        <path d="m 589 -116 -33 19" />
        <path d="M 532 -88 h -38 v 20" />
        <path d="M 552 -88 h 88 v 231 h 14" />
        <path d="M 552 -88 h 88 V 96 h 14" />
        <path d="M 552 -88 h 88 v 252 h -27" />
        <path d="M 89 -264 v 25" />
        <path d="M 221 144 v 100 h 3" />
        <path d="M 317 -264 V 5" />
        <path d="m 175 -184 12 52 V 20 h 112" />
        <path d="M 317 28 v 153 h -9" />
        <path d="M 317 28 v 216 h -12" />
        <path d="M 317 28 v 279 h -9" />
        <path d="M 317 28 v 222 h 8" />
        <path d="M 317 28 v 268 h 8" />
        <path d="M 572 92 v 6" />
      </g>
    </g>
  </svg>
);
