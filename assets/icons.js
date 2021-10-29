import React from 'react';
import Svg, { ClipPath, Path, G, Rect, Defs } from "react-native-svg"

const IconHome = (props) => {
    return (
        <Svg width="22" height="22" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M9.11894 0.110037C9.35287 -0.036679 9.64713 -0.036679 9.88106 0.110037L18.6502 5.60995C18.9946 5.82594 19.1031 6.28755 18.8927 6.64099C18.6822 6.99442 18.2325 7.10584 17.8881 6.88986L9.5 1.62893L1.11192 6.88986C0.767547 7.10584 0.317772 6.99442 0.107321 6.64099C-0.10313 6.28755 0.00543603 5.82594 0.349811 5.60995L9.11894 0.110037Z" fill={props.color} />
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M2.85 9.90002C3.25085 9.90002 3.65 10.3161 3.65 10.7059V16.29H15.35V10.7059C15.35 10.3161 15.7691 9.90002 16.17 9.90002C16.5709 9.90002 17 10.3161 17 10.7059V16.7294C17 17.0664 16.8624 17.3896 16.6173 17.6279C16.3723 17.8662 16.04 18 15.6935 18H3.30645C2.95996 18 2.62766 17.8662 2.38265 17.6279C2.13764 17.3896 2 17.0664 2 16.7294V10.7059C2 10.3161 2.44915 9.90002 2.85 9.90002Z" fill={props.color} />
        </Svg>
    )
}

const IconActivity = (props) => {
    return (
        <Svg width="22" height="22" viewBox="0 0 18 18" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <G clip-path="url(#clip0_10:111)">
                <Path d="M9.00027 0.759728C9.02295 0.982753 8.95612 1.20566 8.81449 1.37942C8.67286 1.55319 8.46801 1.66359 8.24499 1.68635C6.86652 1.82949 5.55682 2.36028 4.46762 3.21722C3.37843 4.07415 2.55433 5.22216 2.09081 6.52823C1.62728 7.8343 1.54331 9.24498 1.8486 10.5968C2.1539 11.9487 2.83598 13.1863 3.81581 14.1664C4.79564 15.1465 6.03312 15.829 7.38488 16.1346C8.73663 16.4403 10.1473 16.3567 11.4535 15.8936C12.7597 15.4304 13.908 14.6066 14.7652 13.5177C15.6224 12.4287 16.1536 11.1192 16.2971 9.74075C16.3232 9.52029 16.4348 9.31891 16.6081 9.1801C16.7813 9.04128 17.0022 8.97616 17.223 8.99881C17.4438 9.02145 17.6469 9.13004 17.7884 9.30113C17.9298 9.47222 17.9983 9.69207 17.979 9.91322C17.8029 11.6097 17.1497 13.2216 16.095 14.5621C15.0403 15.9025 13.6273 16.9167 12.0199 17.487C10.4124 18.0573 8.67624 18.1604 7.01257 17.7843C5.34891 17.4083 3.82586 16.5685 2.61993 15.3623C1.414 14.1561 0.574565 12.6329 0.198908 10.9691C-0.176749 9.30537 -0.0732492 7.56922 0.497413 5.96188C1.06808 4.35455 2.08254 2.94182 3.42323 1.88744C4.76392 0.833051 6.37596 0.180168 8.07252 0.00445199C8.18304 -0.00693489 8.29472 0.0035737 8.40117 0.0353768C8.50763 0.0671798 8.60677 0.119654 8.69294 0.189798C8.7791 0.259943 8.85059 0.346383 8.90333 0.444175C8.95606 0.541968 8.989 0.649196 9.00027 0.759728Z" fill={props.color} />
                <Path d="M10.1502 0.684171C10.2026 0.466266 10.3393 0.278081 10.5304 0.160976C10.7215 0.0438714 10.9513 0.00742931 11.1692 0.0596593C11.5965 0.161114 12.0113 0.294133 12.4126 0.454207C12.5185 0.493241 12.6156 0.553091 12.698 0.630225C12.7804 0.707359 12.8465 0.800216 12.8925 0.903319C12.9384 1.00642 12.9633 1.11768 12.9655 1.23054C12.9678 1.3434 12.9474 1.45557 12.9057 1.56043C12.8639 1.66529 12.8015 1.76073 12.7223 1.84111C12.643 1.92149 12.5485 1.98518 12.4442 2.02843C12.3399 2.07169 12.2281 2.09362 12.1152 2.09295C12.0023 2.09227 11.8907 2.069 11.787 2.0245C11.4601 1.89487 11.1219 1.78778 10.7758 1.70436C10.6678 1.67854 10.566 1.63169 10.4761 1.5665C10.3862 1.50131 10.31 1.41905 10.2519 1.32442C10.1938 1.22979 10.1549 1.12464 10.1375 1.01498C10.12 0.905317 10.1243 0.793291 10.1502 0.685298V0.684171Z" fill={props.color} />
                <Path d="M17.5294 5.5698C17.4464 5.36142 17.284 5.19453 17.078 5.10584C16.872 5.01716 16.6392 5.01394 16.4308 5.09691C16.2224 5.17987 16.0555 5.34222 15.9669 5.54824C15.8782 5.75425 15.875 5.98706 15.9579 6.19544C16.0887 6.52235 16.1958 6.86053 16.2792 7.20774C16.3315 7.42584 16.4683 7.61422 16.6596 7.73144C16.7542 7.78949 16.8594 7.82831 16.9691 7.84571C17.0788 7.8631 17.1908 7.85872 17.2988 7.83281C17.4068 7.8069 17.5087 7.75998 17.5985 7.69472C17.6884 7.62946 17.7645 7.54714 17.8225 7.45246C17.8806 7.35778 17.9194 7.25259 17.9368 7.1429C17.9542 7.03322 17.9498 6.92118 17.9239 6.81319C17.8224 6.3898 17.6905 5.97426 17.5294 5.5698Z" fill={props.color} />
                <Path d="M13.8386 2.13386C13.9858 1.96482 14.1942 1.86119 14.4179 1.84576C14.6415 1.83033 14.8621 1.90436 15.0312 2.05157C15.3773 2.35255 15.7008 2.67947 15.9984 3.02892C16.138 3.20032 16.205 3.41959 16.1849 3.63973C16.1648 3.85988 16.0592 4.0634 15.8909 4.20668C15.7225 4.34997 15.5048 4.42161 15.2842 4.40628C15.0637 4.39094 14.858 4.28984 14.7111 4.12464C14.4683 3.83927 14.2046 3.57248 13.922 3.32652C13.7528 3.17942 13.6489 2.97113 13.6333 2.74747C13.6176 2.52381 13.6915 2.30309 13.8386 2.13386Z" fill={props.color} />
                <Path d="M9.00256 4.19006C9.00256 3.96583 8.91349 3.75079 8.75493 3.59223C8.59638 3.43368 8.38133 3.3446 8.1571 3.3446C7.93287 3.3446 7.71783 3.43368 7.55927 3.59223C7.40072 3.75079 7.31165 3.96583 7.31165 4.19006V9.82645C7.31165 10.2943 7.69041 10.6719 8.1571 10.6719H11.5389C11.7632 10.6719 11.9782 10.5828 12.1368 10.4243C12.2953 10.2657 12.3844 10.0507 12.3844 9.82645C12.3844 9.60222 12.2953 9.38718 12.1368 9.22862C11.9782 9.07007 11.7632 8.98099 11.5389 8.98099H9.00256V4.19006Z" fill={props.color} />
            </G>
            <Defs>
                <ClipPath id="clip0_10:111">
                    <Rect width="18" height="18" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

const IconApprovals = (props) => {
    return (
        <Svg width="22" height="22" viewBox="0 0 18 18" fill="#BBBBBB" xmlns="http://www.w3.org/2000/svg">
            <G clip-path="url(#clip0_10:102)">
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M12.2107 8.03928C12.2631 8.09153 12.3047 8.1536 12.333 8.22194C12.3614 8.29028 12.376 8.36354 12.376 8.43753C12.376 8.51152 12.3614 8.58478 12.333 8.65312C12.3047 8.72145 12.2631 8.78353 12.2107 8.83578L8.83573 12.2108C8.78348 12.2632 8.7214 12.3047 8.65307 12.3331C8.58473 12.3614 8.51147 12.376 8.43748 12.376C8.36349 12.376 8.29023 12.3614 8.22189 12.3331C8.15355 12.3047 8.09148 12.2632 8.03923 12.2108L6.35173 10.5233C6.29943 10.471 6.25794 10.4089 6.22964 10.3406C6.20134 10.2722 6.18677 10.199 6.18677 10.125C6.18677 10.0511 6.20134 9.97783 6.22964 9.9095C6.25794 9.84117 6.29943 9.77908 6.35173 9.72678C6.45735 9.62116 6.60061 9.56182 6.74998 9.56182C6.82394 9.56182 6.89718 9.57639 6.96551 9.60469C7.03384 9.63299 7.09593 9.67448 7.14823 9.72678L8.43748 11.0172L11.4142 8.03928C11.4665 7.98689 11.5286 7.94533 11.5969 7.91698C11.6652 7.88862 11.7385 7.87402 11.8125 7.87402C11.8865 7.87402 11.9597 7.88862 12.0281 7.91698C12.0964 7.94533 12.1585 7.98689 12.2107 8.03928Z" fill={props.color} stroke={props.color} stroke-width="0.1" />
                <Path d="M4 2.25C4 1.93934 3.74816 1.6875 3.4375 1.6875H3.375C2.77826 1.6875 2.20597 1.92455 1.78401 2.34651C1.36205 2.76847 1.125 3.34076 1.125 3.9375V15.75C1.125 16.3467 1.36205 16.919 1.78401 17.341C2.20597 17.7629 2.77826 18 3.375 18H14.625C15.2217 18 15.794 17.7629 16.216 17.341C16.6379 16.919 16.875 16.3467 16.875 15.75V3.9375C16.875 3.34076 16.6379 2.76847 16.216 2.34651C15.794 1.92455 15.2217 1.6875 14.625 1.6875H14.5625C14.2518 1.6875 14 1.93934 14 2.25C14 2.56066 14.2518 2.8125 14.5625 2.8125H14.625C14.9234 2.8125 15.2095 2.93103 15.4205 3.142C15.6315 3.35298 15.75 3.63913 15.75 3.9375V15.75C15.75 16.0484 15.6315 16.3345 15.4205 16.5455C15.2095 16.7565 14.9234 16.875 14.625 16.875H3.375C3.07663 16.875 2.79048 16.7565 2.5795 16.5455C2.36853 16.3345 2.25 16.0484 2.25 15.75V3.9375C2.25 3.63913 2.36853 3.35298 2.5795 3.142C2.79048 2.93103 3.07663 2.8125 3.375 2.8125H3.4375C3.74816 2.8125 4 2.56066 4 2.25Z" fill={props.color} stroke={props.color} stroke-width="0.1" />
                <Path d="M10.6875 1.125C10.8367 1.125 10.9798 1.18426 11.0852 1.28975C11.1907 1.39524 11.25 1.53832 11.25 1.6875V2.8125C11.25 2.96168 11.1907 3.10476 11.0852 3.21025C10.9798 3.31574 10.8367 3.375 10.6875 3.375H7.3125C7.16332 3.375 7.02024 3.31574 6.91475 3.21025C6.80926 3.10476 6.75 2.96168 6.75 2.8125V1.6875C6.75 1.53832 6.80926 1.39524 6.91475 1.28975C7.02024 1.18426 7.16332 1.125 7.3125 1.125H10.6875ZM7.3125 0C6.86495 0 6.43572 0.17779 6.11926 0.494257C5.80279 0.810725 5.625 1.23995 5.625 1.6875V2.8125C5.625 3.26005 5.80279 3.68928 6.11926 4.00574C6.43572 4.32221 6.86495 4.5 7.3125 4.5H10.6875C11.1351 4.5 11.5643 4.32221 11.8807 4.00574C12.1972 3.68928 12.375 3.26005 12.375 2.8125V1.6875C12.375 1.23995 12.1972 0.810725 11.8807 0.494257C11.5643 0.17779 11.1351 0 10.6875 0L7.3125 0Z" fill={props.color} stroke={props.color} stroke-width="0.1" />
            </G>
            <Defs>
                <ClipPath id="clip0_10:102">
                    <Rect width="18" height="18" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>

    )
}

const IconSettings = (props) => {
    return (
        <Svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M7.46458 1.95725C7.85508 0.347583 10.1449 0.347583 10.5354 1.95725C10.594 2.19907 10.7089 2.42363 10.8707 2.61267C11.0324 2.8017 11.2366 2.94987 11.4664 3.0451C11.6963 3.14033 11.9454 3.17995 12.1935 3.16071C12.4415 3.14148 12.6816 3.06394 12.894 2.93442C14.3084 2.07275 15.9282 3.69158 15.0665 5.10692C14.9372 5.31927 14.8597 5.55914 14.8406 5.80704C14.8214 6.05494 14.8609 6.30387 14.9561 6.5336C15.0512 6.76332 15.1992 6.96736 15.388 7.12913C15.5768 7.2909 15.8012 7.40583 16.0428 7.46458C17.6524 7.85508 17.6524 10.1449 16.0428 10.5354C15.8009 10.594 15.5764 10.7089 15.3873 10.8707C15.1983 11.0324 15.0501 11.2366 14.9549 11.4664C14.8597 11.6963 14.8201 11.9454 14.8393 12.1935C14.8585 12.4415 14.9361 12.6816 15.0656 12.894C15.9273 14.3084 14.3084 15.9282 12.8931 15.0665C12.6807 14.9372 12.4409 14.8597 12.193 14.8406C11.9451 14.8214 11.6961 14.8609 11.4664 14.9561C11.2367 15.0512 11.0326 15.1992 10.8709 15.388C10.7091 15.5768 10.5942 15.8012 10.5354 16.0428C10.1449 17.6524 7.85508 17.6524 7.46458 16.0428C7.40599 15.8009 7.29113 15.5764 7.12935 15.3873C6.96757 15.1983 6.76344 15.0501 6.53357 14.9549C6.3037 14.8597 6.0546 14.8201 5.80653 14.8393C5.55846 14.8585 5.31844 14.9361 5.106 15.0656C3.69158 15.9273 2.07183 14.3084 2.9335 12.8931C3.06284 12.6807 3.14025 12.4409 3.15944 12.193C3.17863 11.9451 3.13906 11.6961 3.04393 11.4664C2.94881 11.2367 2.80082 11.0326 2.612 10.8709C2.42318 10.7091 2.19885 10.5942 1.95725 10.5354C0.347583 10.1449 0.347583 7.85508 1.95725 7.46458C2.19907 7.40599 2.42363 7.29113 2.61267 7.12935C2.8017 6.96757 2.94987 6.76344 3.0451 6.53357C3.14033 6.3037 3.17995 6.0546 3.16071 5.80653C3.14148 5.55846 3.06394 5.31844 2.93442 5.106C2.07275 3.69158 3.69158 2.07183 5.10692 2.9335C6.02358 3.49083 7.21158 2.99767 7.46458 1.95725Z" stroke={props.color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M9 7C7.89543 7 7 7.89543 7 9C7 10.1046 7.89543 11 9 11C10.1046 11 11 10.1046 11 9C11 7.89543 10.1046 7 9 7ZM5.5 9C5.5 7.067 7.067 5.5 9 5.5C10.933 5.5 12.5 7.067 12.5 9C12.5 10.933 10.933 12.5 9 12.5C7.067 12.5 5.5 10.933 5.5 9Z" fill={props.color} />
        </Svg>

    )
}

const IconLogout = () => {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M2 12L7 16V13H16V11H7V8L2 12Z" fill="#073042" />
            <Path d="M13.001 2.999C11.8185 2.99572 10.6471 3.22711 9.55471 3.67976C8.4623 4.13241 7.47057 4.79733 6.63696 5.636L8.05096 7.05C9.37296 5.728 11.131 4.999 13.001 4.999C14.871 4.999 16.629 5.728 17.951 7.05C19.273 8.372 20.002 10.13 20.002 12C20.002 13.87 19.273 15.628 17.951 16.95C16.629 18.272 14.871 19.001 13.001 19.001C11.131 19.001 9.37296 18.272 8.05096 16.95L6.63696 18.364C8.33596 20.064 10.596 21.001 13.001 21.001C15.406 21.001 17.666 20.064 19.365 18.364C21.065 16.665 22.002 14.405 22.002 12C22.002 9.595 21.065 7.335 19.365 5.636C18.5314 4.79733 17.5396 4.13241 16.4472 3.67976C15.3548 3.22711 14.1834 2.99572 13.001 2.999Z" fill="#073042" />
        </Svg>
    )
}

const IconHistory = () => {
    return (
        <Svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M22.1485 9.65625H16.1485C16.0454 9.65625 15.961 9.74062 15.961 9.84375V10.9688C15.961 11.0719 16.0454 11.1562 16.1485 11.1562H22.1485C22.2516 11.1562 22.336 11.0719 22.336 10.9688V9.84375C22.336 9.74062 22.2516 9.65625 22.1485 9.65625ZM19.0079 12.8438H16.1485C16.0454 12.8438 15.961 12.9281 15.961 13.0312V14.1562C15.961 14.2594 16.0454 14.3438 16.1485 14.3438H19.0079C19.111 14.3438 19.1954 14.2594 19.1954 14.1562V13.0312C19.1954 12.9281 19.111 12.8438 19.0079 12.8438ZM11.1868 7.55859H10.1719C10.0266 7.55859 9.90942 7.67578 9.90942 7.82109V13.6336C9.90942 13.718 9.94927 13.7953 10.0172 13.8445L13.5071 16.3898C13.6243 16.4742 13.7883 16.4508 13.8727 16.3336L14.475 15.5109V15.5086C14.5594 15.3914 14.5336 15.2273 14.4165 15.143L11.4469 12.9961V7.82109C11.4493 7.67578 11.3297 7.55859 11.1868 7.55859Z" fill="#BBBBBB" />
            <Path d="M18.8625 15.7945H17.5078C17.3766 15.7945 17.2524 15.8625 17.182 15.975C16.8844 16.4461 16.5375 16.882 16.1391 17.2805C15.4524 17.9672 14.6531 18.5062 13.7649 18.8812C12.8438 19.2703 11.8664 19.4672 10.8586 19.4672C9.84845 19.4672 8.87111 19.2703 7.95236 18.8812C7.06408 18.5062 6.26486 17.9672 5.57814 17.2805C4.89142 16.5937 4.35236 15.7945 3.97736 14.9062C3.5883 13.9875 3.39142 13.0101 3.39142 12C3.39142 10.9898 3.5883 10.0148 3.97736 9.09374C4.35236 8.20546 4.89142 7.40624 5.57814 6.71952C6.26486 6.0328 7.06408 5.49374 7.95236 5.11874C8.87111 4.72968 9.8508 4.5328 10.8586 4.5328C11.8688 4.5328 12.8461 4.72968 13.7649 5.11874C14.6531 5.49374 15.4524 6.0328 16.1391 6.71952C16.5375 7.11796 16.8844 7.55389 17.182 8.02499C17.2524 8.13749 17.3766 8.20546 17.5078 8.20546H18.8625C19.0242 8.20546 19.1274 8.03671 19.0547 7.89374C17.5266 4.85389 14.4281 2.87811 10.9688 2.83827C5.90392 2.77499 1.69689 6.92108 1.68752 11.9812C1.67814 17.0508 5.78673 21.164 10.8563 21.164C14.3602 21.164 17.5102 19.1812 19.0547 16.1062C19.1274 15.9633 19.0219 15.7945 18.8625 15.7945Z" fill="#BBBBBB" />
        </Svg>
    );
}

const IconCheck = () => {
    return (
        <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 1.66667C11.0773 1.66667 9.66862 1.94688 8.35426 2.4913C7.0399 3.03573 5.84564 3.83371 4.83968 4.83968C3.83371 5.84564 3.03573 7.0399 2.49131 8.35426C1.94688 9.66862 1.66667 11.0773 1.66667 12.5C1.66667 13.9227 1.94688 15.3314 2.49131 16.6457C3.03573 17.9601 3.83371 19.1544 4.83968 20.1603C5.84564 21.1663 7.0399 21.9643 8.35426 22.5087C9.66862 23.0531 11.0773 23.3333 12.5 23.3333C15.3732 23.3333 18.1287 22.192 20.1603 20.1603C22.192 18.1287 23.3333 15.3732 23.3333 12.5C23.3333 9.62682 22.192 6.87132 20.1603 4.83968C18.1287 2.80803 15.3732 1.66667 12.5 1.66667ZM7.71646 0.951506C9.23303 0.323322 10.8585 0 12.5 0C15.8152 4.96705e-08 18.9946 1.31696 21.3388 3.66117C23.683 6.00537 25 9.18479 25 12.5C25 15.8152 23.683 18.9946 21.3388 21.3388C18.9946 23.683 15.8152 25 12.5 25C10.8585 25 9.23303 24.6767 7.71646 24.0485C6.19989 23.4203 4.8219 22.4996 3.66117 21.3388C2.50043 20.1781 1.57969 18.8001 0.951506 17.2835C0.323322 15.767 0 14.1415 0 12.5C0 10.8585 0.323322 9.23303 0.951506 7.71646C1.57969 6.19989 2.50043 4.8219 3.66117 3.66117C4.8219 2.50043 6.19989 1.57969 7.71646 0.951506ZM18.8539 7.68261C19.2133 7.97012 19.2716 8.49453 18.9841 8.85391L11.7863 17.8511L6.13318 13.1402C5.77962 12.8455 5.73185 12.3201 6.02648 11.9665C6.32112 11.6129 6.84659 11.5652 7.20015 11.8598L11.547 15.4822L17.6826 7.81275C17.9701 7.45337 18.4945 7.3951 18.8539 7.68261Z" fill="#37C584" />
        </Svg>

    )
}
export { IconHome, IconActivity, IconApprovals, IconSettings, IconLogout, IconHistory, IconCheck };