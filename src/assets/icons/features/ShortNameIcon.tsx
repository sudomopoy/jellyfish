import { IconProps } from "@/@types/iconProps";

export const ShortNameIcon = ({ ...props }: IconProps) => {
    return (
        <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.21875 5.21693C4.93185 5.34188 4.77058 5.67046 4.83297 6.003C4.87422 6.22296 5.12997 6.47269 5.35191 6.50969C5.63211 6.55639 5.74786 6.61814 5.80252 6.75001C5.86259 6.89507 5.80042 7.10214 5.67886 7.16187C5.63967 7.18116 5.06273 7.20668 4.39676 7.21867C3.25933 7.23912 3.17876 7.24583 3.06739 7.32906C2.84197 7.49754 2.77168 7.63478 2.77168 7.90647C2.77168 8.17821 2.84202 8.31549 3.06747 8.48389C3.18392 8.57086 3.24055 8.57287 6.15164 8.59397L9.11722 8.61546L9.19933 8.71691C9.30224 8.84405 9.30233 8.94473 9.19976 9.2877C9.15486 9.43788 9.09539 9.66712 9.06763 9.7971C8.99411 10.1413 8.93907 10.2635 8.84415 10.2936C8.79779 10.3083 8.12455 10.3235 7.34806 10.3273C5.99494 10.3339 5.93134 10.3379 5.81756 10.4228C5.59206 10.5911 5.52168 10.7284 5.52168 11.0002C5.52168 11.2719 5.59197 11.4092 5.81743 11.5776C5.93027 11.6619 6.00632 11.6673 7.39241 11.6877C8.65651 11.7064 8.85799 11.7184 8.9181 11.7786C8.95621 11.8167 9.02183 12.0004 9.06398 12.1868C9.10613 12.3731 9.1723 12.6306 9.21102 12.759C9.30198 13.0604 9.29979 13.1594 9.19933 13.2835L9.11722 13.385L6.15164 13.4065C3.24055 13.4276 3.18392 13.4296 3.06747 13.5166C2.84202 13.685 2.77168 13.8222 2.77168 14.094C2.77168 14.3657 2.84197 14.5029 3.06739 14.6714C3.17876 14.7546 3.25933 14.7613 4.39676 14.7818C5.06273 14.7938 5.63967 14.8193 5.67886 14.8386C5.80042 14.8983 5.86259 15.1054 5.80252 15.2504C5.74786 15.3823 5.63211 15.444 5.35191 15.4908C5.12997 15.5278 4.87422 15.7775 4.83297 15.9974C4.76964 16.335 4.93386 16.6624 5.22824 16.7854C5.44197 16.8747 15.0509 16.8711 15.6408 16.7815C16.248 16.6892 16.7617 16.527 17.3398 16.2449C18.5293 15.6644 19.4457 14.7481 20.0261 13.5586C20.83 11.9113 20.83 10.0891 20.0261 8.44186C19.1807 6.70945 17.5465 5.50839 15.6408 5.21899C15.0601 5.13078 5.42092 5.12889 5.21875 5.21693ZM14.0869 6.59477C13.1565 6.74726 12.3664 7.14691 11.6776 7.81336C9.8644 9.56777 9.87553 12.4623 11.7022 14.2101C12.2853 14.7681 12.91 15.118 13.6984 15.3283C14.063 15.4257 14.199 15.4395 14.7814 15.4387C15.3577 15.4379 15.5036 15.4229 15.8645 15.3274C17.4686 14.903 18.6843 13.6874 19.1086 12.0833C19.2041 11.7224 19.2191 11.5765 19.2199 11.0002C19.2207 10.4178 19.2069 10.2818 19.1096 9.91715C18.8992 9.12876 18.5493 8.50412 17.9913 7.921C17.1806 7.07369 16.1278 6.59941 14.9553 6.55326C14.6382 6.54075 14.3248 6.55575 14.0869 6.59477ZM14.5723 7.98167C14.463 8.07315 13.0627 11.2141 13.0627 11.3677C13.0627 11.4277 13.1102 11.5242 13.1682 11.5822C13.2698 11.6839 13.295 11.6877 13.8557 11.6877H14.4377V12.7854V13.883L14.5432 13.9885C14.6684 14.1138 14.8616 14.1268 14.9906 14.0188C15.0999 13.9273 16.5002 10.7863 16.5002 10.6328C16.5002 10.5727 16.4527 10.4762 16.3947 10.4182C16.2931 10.3166 16.2679 10.3127 15.7072 10.3127H15.1252V9.21509V8.11741L15.0197 8.01196C14.8945 7.88666 14.7013 7.8736 14.5723 7.98167ZM1.78125 10.3714C1.36664 10.5575 1.25058 11.1072 1.55317 11.4518C1.73162 11.655 1.91045 11.6982 2.50132 11.6809C3.04307 11.665 3.13279 11.6313 3.32761 11.3704C3.45183 11.204 3.45183 10.7964 3.32761 10.63C3.12836 10.3632 3.04874 10.3352 2.45719 10.3234C2.06841 10.3157 1.87475 10.3295 1.78125 10.3714Z"
                fill="url(#paint0_linear_222_1806)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_222_1806"
                    x1="11.006"
                    y1="16.8505"
                    x2="11.006"
                    y2="5.15186"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#D8ECF8" />
                    <stop offset="1" stopColor="#98C0EF" />
                </linearGradient>
            </defs>
        </svg>
    );
};
