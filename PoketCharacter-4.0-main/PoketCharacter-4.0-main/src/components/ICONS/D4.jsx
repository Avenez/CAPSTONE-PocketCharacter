import React from "react";
const D4 = () => {
  const svgCode = `<svg xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 285.25137 285.25137" x="0px" y="0px"><g transform="translate(-190.71222,-356.02657)"><path style="" d="m 326.93145,637.68443 c -3.61271,-2.85144 -11.93771,-9.35226 -18.5,-14.44628 -6.5623,-5.09402 -14.18145,-11.01229 -16.93145,-13.15171 -9.04173,-7.03422 -23.85243,-18.51502 -32.5,-25.193 -4.675,-3.61021 -15.025,-11.64204 -23,-17.84851 -7.975,-6.20646 -15.77637,-12.24308 -17.33637,-13.4147 -1.56,-1.17163 -3.36,-2.59271 -4,-3.15796 -0.64,-0.56526 -4.86978,-3.87907 -9.39951,-7.36403 -5.24587,-4.03592 -7.96872,-6.76441 -7.5,-7.51553 0.71808,-1.15073 6.20188,-8.40005 41.29699,-54.59271 9.40197,-12.375 26.28849,-34.65 37.52561,-49.5 11.23712,-14.85 26.78258,-35.325 34.54547,-45.5 7.7629,-10.175 15.97138,-21.07553 18.24108,-24.2234 2.2697,-3.14787 4.42846,-5.73537 4.79724,-5.75 0.36878,-0.0146 4.50451,5.0359 9.19052,11.2234 4.68601,6.1875 10.25414,13.5 12.37362,16.25 2.11949,2.75 9.44359,12.425 16.27578,21.5 6.8322,9.075 12.67052,16.725 12.97405,17 0.30354,0.275 3.91052,5 8.01552,10.5 4.105,5.5 7.69904,10.225 7.98676,10.5 0.28771,0.275 3.82103,4.92631 7.85181,10.33624 4.03078,5.40994 7.93395,10.58494 8.67371,11.5 0.73976,0.91507 5.0478,6.61376 9.57342,12.66376 4.52562,6.05 9.28951,12.35 10.58642,14 1.29692,1.65 2.70668,3.45 3.13281,4 1.39897,1.80564 18.64983,24.68351 20.63986,27.37232 1.06964,1.44522 3.65714,4.71513 5.75,7.26646 2.09287,2.55133 3.78875,5.25133 3.76862,6 -0.0201,0.74867 -2.99437,3.61122 -6.60945,6.36122 -3.61508,2.75 -12.93611,9.96624 -20.71341,16.03608 -22.24939,17.36468 -51.03554,39.72238 -54.67347,42.46392 -1.82457,1.375 -8.97609,6.90958 -15.89224,12.29906 -6.91616,5.38949 -13.92484,10.84916 -15.57484,12.1326 -1.65,1.28344 -7.40144,5.76136 -12.78097,9.95093 -5.37954,4.18958 -10.10454,7.5879 -10.5,7.55184 -0.39547,-0.0361 -3.67488,-2.39857 -7.28758,-5.25 z M 327.7579,444.4 327.5,384.64544 l -2.77917,4.19991 c -1.52854,2.30995 -3.41627,4.97723 -4.19495,5.92728 -1.98787,2.42536 -10.8671,14.03173 -25.03744,32.72737 -6.66995,8.8 -15.72112,20.725 -20.11371,26.5 -4.39259,5.775 -14.28738,18.825 -21.98843,29 -7.70104,10.175 -19.30909,25.44478 -25.79565,33.93285 -6.48657,8.48807 -11.99392,15.95449 -12.23857,16.59204 -0.24466,0.63755 3.89775,4.49276 9.20534,8.56715 5.30759,4.07438 11.74096,9.06578 14.29637,11.092 2.55542,2.02622 23.54621,18.34534 46.64621,36.26472 l 42,32.58068 0.2579,-58.93745 c 0.14184,-32.41559 0.14184,-85.82699 0,-118.69199 z M 357.5,609.46962 c 8.8,-6.86739 23.38688,-18.21995 32.41529,-25.2279 16.50097,-12.80822 49.27673,-38.3165 52.09777,-40.54596 0.83218,-0.65767 3.86968,-2.97573 6.75,-5.15125 C 451.64338,536.369 454,534.46004 454,534.30239 c 0,-0.15765 -4.18765,-5.80268 -9.3059,-12.54451 C 439.57586,515.01604 429.11508,501.175 421.44794,491 413.78079,480.825 406.9641,471.825 406.29973,471 404.28645,468.49993 359.35149,409.30893 350.12248,397 L 341.5,385.5 341.25102,428 C 340.65795,529.23355 340.53791,621.99854 341,621.97801 c 0.275,-0.0122 7.7,-5.64099 16.5,-12.50839 z" fill="#000000"/></g></svg>`;

  return (
    <>
      <div className="DicesBox">
        <div dangerouslySetInnerHTML={{ __html: svgCode }} className="Dices" />
      </div>
    </>
  );
};

export default D4;