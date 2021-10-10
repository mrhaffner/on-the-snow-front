import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <svg
          width="132"
          height="42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#logo_svg__clip0)">
            <path
              d="M62.799 5.257h5.73l5.021 8.019V5.25h4.275V20.6h-4.37l-6.39-10.092V20.6h-4.263l-.003-15.343zM57.455 5.25c-3.751 0-7.76.007-7.76.007s-1.87-.033-2.668 1.205c-.801 1.242-.722 2.606-.722 2.606v7.675s-.015 2.144 1.11 3.062c1.126.916 2.436.795 2.436.795h7.444s3.613.36 3.613-3.878V9.081s.296-3.83-3.453-3.83zM56.4 16.75h-5.585l.021-7.687H56.4v7.687zM81.557 5.257v3.816h4.86V20.6h4.761V9.073h4.644V5.257H81.557zM97.757 5.255h4.525v5.856h5.959V5.255h4.549v15.301h-4.549v-6.354h-5.959v6.33h-4.573l.048-15.277zM127.437 5.257v3.801h-8.22v2.338h8.25v3.084h-8.25v2.263h8.233V20.6h-12.747V5.23l12.734.027z"
              fill="#12B5EA"
            ></path>
            <path
              d="M65.62 23.529h6.744l5.906 9.43v-9.44h5.031v18.063h-5.143l-7.518-11.88v11.88h-5.013l-.008-18.053zM98.84 23.519c-4.415 0-9.132.01-9.132.01s-2.195-.044-3.138 1.42c-.941 1.456-.849 3.056-.849 3.056v9.038s-.018 2.52 1.308 3.6c1.322 1.082 2.87.939 2.87.939h8.754s4.254.42 4.254-4.566v-8.99s.346-4.507-4.066-4.507zM62.374 23.51v4.488H51.58v2.732h8.267s3.7-.403 3.7 3.14v4.74s.118 2.972-3.736 2.972H46.303v-4.539h12.1v-2.65h-7.975s-2.084.096-3.054-.587c-1.12-.794-.969-2.4-.969-2.4V26.7s-.02-1.482 1.253-2.412c1.159-.844 3.922-.776 3.922-.776h10.794zM103.943 23.504l3.798 18.108h5.195l2.793-12.437 2.775 12.407h5.224l3.803-18.087h-5.09l-1.926 10.582-2.215-10.548h-5.161l-2.199 10.548-1.89-10.558-5.107-.015z"
              fill="#0079C1"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M93.686 26.837l1.5 2.948 2.956-1.484-.711 2.156-2.958 1.49-1.501-2.951.714-2.16zm1.173 11.415l-1.5-2.948-2.958 1.487.71-2.16 2.962-1.487 1.498 2.948-.712 2.16zm2.418-4.723l2.965-1.49-2.174-.711-2.965 1.49 1.499 2.943 2.17.708-1.496-2.94zm-8.974-.474l2.965-1.491-1.495-2.943 2.17.711 1.498 2.939-2.966 1.493-2.172-.709z"
              fill="#fff"
            ></path>
            <path
              d="M41.615 5.027C38.007 2.668 29.917.07 20.91 0 11.906.07 3.815 2.668.206 5.027.076 5.114-3.1 26.652 20.91 41.84 44.923 26.652 41.746 5.114 41.615 5.027z"
              fill="#0079C1"
            ></path>
            <path
              d="M39.683 6.345C36.409 4.228 29.073 1.902 20.91 1.84c-8.162.062-15.496 2.388-18.768 4.505-.118.073-2.997 19.365 18.768 32.968C42.68 25.71 39.797 6.418 39.683 6.345z"
              fill="#fff"
            ></path>
            <path
              d="M38.72 7.323c-3.105-1.926-10.064-4.048-17.81-4.105-7.744.057-14.703 2.179-17.806 4.105C2.99 7.394.26 24.98 20.91 37.383 41.563 24.98 38.83 7.394 38.72 7.323z"
              fill="#12B5EA"
            ></path>
            <path
              d="M13.372 13.238l-9.23 4.238C2.357 11.649 3.048 7.358 3.104 7.323 6.207 5.397 13.166 3.275 20.91 3.218c7.746.057 14.705 2.179 17.81 4.105.055.034.727 4.206-.967 9.911l-16.83-5.511-7.55 1.515z"
              fill="#0079C1"
            ></path>
            <path
              d="M4.098 17.354s5.76-3.12 8.713-4.75c3.044-1.678 7.015-4.828 7.194-4.84.28-.023 1.462 1.7 5.764 4.07 4.022 2.218 7.061 3.44 12.423 5.114l-.089.587s-1.345-.574-6.076-1.99c-1.312-.392 2.175 1.508 2.413 1.9 0 0-4.112-1.9-7.33-2.67-.862-.205 7.479 3.42 1.164 5.475-5.005 1.628-16.358 2.397 2.5 9.634l-8.363 8.064-3.643-.321S-1.529 21.813 22.761 19.51c14-1.328.656-5.79.656-5.79l-.149 2.774s-2.413-3.076-2.891-3.559c-.476-.482-1.846 2.292-2.203 1.75-.36-.543-1.937-.816-3.129-.272-1.191.543-3.307 2.081-3.753 2.171-1.183.24 4.202-4.026 2.472-3.166-2.675 1.33-7.118 3.302-9.488 4.75l.195 1.22-.373-2.035zM34.652 7.976l-.478-1.44-.46.935.477 1.44 1.419-.482.46-.933-1.418.48zM33.475 10.365l.477 1.439.46-.935-.477-1.44-1.42.482-.458.935 1.418-.481zM35.342 9.816l1.423-.482-.925-.467-1.422.482.476 1.437.924.465-.476-1.435zM32.788 8.526l-1.423.483.925.465 1.422-.484-.476-1.434-.923-.466.475 1.436zM28.737 8.644l-.483-.68-.092.568.483.68.67-.487.092-.568-.67.487zM28.502 10.097l.483.68.093-.569-.482-.68-.672.487-.092.569.67-.487zM29.396 9.5l.672-.488-.562-.094-.672.489.48.679.563.092-.481-.678zM27.843 9.241l-.671.488.562.094.672-.49-.482-.678-.562-.092.481.678zM35.102 13.16l-.387-.206.089.29.387.206.202-.39-.088-.29-.203.39zM35.33 13.902l.386.205-.09-.29-.386-.206-.203.39.09.29.203-.39zM35.61 13.406l.205-.39-.288.09-.203.39.386.205.287-.09-.386-.205zM34.818 13.656l-.203.39.287-.09.203-.391-.385-.204-.286.09.384.205z"
              fill="#fff"
            ></path>
          </g>
        </svg>
      </a>
    </Link>
  );
};

export default Logo;
