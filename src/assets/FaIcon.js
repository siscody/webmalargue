import React from 'react'
import { faIcon, faIconW } from '.'


export const FaIcon = ({ iconFill, iconWidth, iconHeight }) => {
  return (


    // <img height={iconHeight} width={iconWidth} src={faIcon} alt="Faceboock"
    //   onmouseover='this.src="./img/faIconW.png'
    //   onmouseout='this.src="./img/faIcon.png'
    // onmouseover='`{faIconW}`'
    // onmouseout='this.src="./img/SVG/facebook.svg'
    // />

    <svg xmlns="http://www.w3.org/2000/svg"
      width={iconWidth}
      height={iconHeight}
      viewBox="0 0 52 52">
      <defs>

        <clipPath id="clip-path">
          <rect id="Rectángulo_11" data-name="Rectángulo 11" class="cls-1" width="12.926" height="24.134" />
        </clipPath>
      </defs>
      <g id="facebook" transform="translate(-1073 -4302)" fill={iconFill}>
        <g id="Grupo_596" data-name="Grupo 596" transform="translate(10 10)">
          <path id="Elipse_1" data-name="Elipse 1" class="cls-1" d="M26,2a24.007,24.007,0,0,0-9.341,46.115A24.007,24.007,0,0,0,35.341,3.885,23.848,23.848,0,0,0,26,2m0-2A26,26,0,1,1,0,26,26,26,0,0,1,26,0Z" transform="translate(1063 4292)" />
        </g>
        <g id="Grupo_4" data-name="Grupo 4" transform="translate(1092 4315.933)">
          <g id="Grupo_3" data-name="Grupo 3" class="cls-2" transform="translate(0 0)">
            <path id="Trazado_36" data-name="Trazado 36" class="cls-1" d="M12.079,13.575l.67-4.367H8.558V6.373A2.184,2.184,0,0,1,11.02,4.013h1.906V.3A23.217,23.217,0,0,0,9.544,0C6.092,0,3.837,2.092,3.837,5.878V9.208H0v4.367H3.837V24.133H8.558V13.575Z" transform="translate(0 0)" />
          </g>
        </g>
      </g>
    </svg>

  )
}
