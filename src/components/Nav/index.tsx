import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {
  StyledLogo,
  StyledNav,
  StyledBtn,
  StyledButton,
  Login,
} from '../Nav/styles';

export const Nav = () => {
  return (
    <div>
      <StyledNav>
        <Logo />
        <NavMenu />
        <Login>
          <LoginBtn href="/"></LoginBtn>
        </Login>
      </StyledNav>
    </div>
  );
};

export const Logo = () => {
  return (
    <StyledLogo>
      <a href="/">
        <Image
          alt="Logo da Share"
          src="/Navbarbrand.png"
          layout="intrinsic"
          width={20}
          height={20}
        />
      </a>
    </StyledLogo>
  );
};

const NavMenu = () => {
  return (
    <ul className="lista">
      <Btn href="/" name="Home" className="home" />
      <Btn href="/" name="FAQ" className="faq" />
      <Btn href="/" name="Inscrições" className="inscricoes" />
    </ul>
  );
};

const MenuHamb = () => {
  return (
    <ul className="listaHamb">
      <Btn href="/" name="Home" className="home" />
      <Btn href="/" name="FAQ" className="faq" />
      <Btn href="/" name="Inscrições" className="inscricoes" />
    </ul>
  );
};

function Button({ href, name, className }) {
  return (
    <Link href={href} passHref>
      <StyledBtn className={name}>{name}</StyledBtn>
    </Link>
  );
}

const Btn = ({ href, name, className }) => {
  return (
    <StyledButton>
      <Button href={href} name={name} className={className} />
    </StyledButton>
  );
};

Button.propTypes = {
  href: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
};

export const UserIcon = () => {
  return (
    <>
      <svg
        width="25"
        height="30"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M41.7953 38.9531C44.0393 36.2533 45.5999 33.0527 46.3453 29.6222C47.0907 26.1916 46.9989 22.632 46.0776 19.2444C45.1564 15.8568 43.4327 12.741 41.0526 10.1604C38.6724 7.5799 35.7058 5.61057 32.4035 4.41906C29.1013 3.22754 25.5607 2.84889 22.0812 3.31514C18.6017 3.78139 15.2857 5.07882 12.4136 7.09768C9.54159 9.11654 7.19804 11.7974 5.58124 14.9136C3.96443 18.0297 3.12193 21.4894 3.12501 25C3.12619 30.1034 4.92461 35.0434 8.2047 38.9531L8.17345 38.9797C8.28282 39.111 8.40782 39.2235 8.52032 39.3531C8.66095 39.5141 8.81251 39.6656 8.95782 39.8219C9.39532 40.2969 9.84532 40.7531 10.3172 41.1813C10.4609 41.3125 10.6094 41.4344 10.7547 41.5594C11.2547 41.9906 11.7688 42.4 12.3016 42.7813C12.3703 42.8281 12.4328 42.8891 12.5016 42.9375V42.9188C16.1611 45.494 20.5267 46.8761 25.0016 46.8761C29.4764 46.8761 33.842 45.494 37.5016 42.9188V42.9375C37.5703 42.8891 37.6313 42.8281 37.7016 42.7813C38.2328 42.3985 38.7484 41.9906 39.2484 41.5594C39.3938 41.4344 39.5422 41.311 39.6859 41.1813C40.1578 40.7516 40.6078 40.2969 41.0453 39.8219C41.1906 39.6656 41.3406 39.5141 41.4828 39.3531C41.5938 39.2235 41.7203 39.111 41.8297 38.9781L41.7953 38.9531ZM25 12.5C26.3907 12.5 27.7501 12.9124 28.9064 13.685C30.0626 14.4576 30.9639 15.5557 31.496 16.8405C32.0282 18.1253 32.1675 19.5391 31.8962 20.903C31.6249 22.2669 30.9552 23.5198 29.9719 24.5031C28.9885 25.4864 27.7357 26.1561 26.3717 26.4274C25.0078 26.6987 23.5941 26.5595 22.3093 26.0273C21.0245 25.4951 19.9263 24.5939 19.1537 23.4376C18.3811 22.2813 17.9688 20.9219 17.9688 19.5313C17.9688 17.6665 18.7095 15.878 20.0282 14.5594C21.3468 13.2408 23.1352 12.5 25 12.5ZM12.5109 38.9531C12.5381 36.9015 13.3718 34.9431 14.8318 33.5015C16.2918 32.0599 18.2607 31.2511 20.3125 31.25H29.6875C31.7393 31.2511 33.7082 32.0599 35.1682 33.5015C36.6282 34.9431 37.462 36.9015 37.4891 38.9531C34.0623 42.0412 29.6129 43.7501 25 43.7501C20.3871 43.7501 15.9378 42.0412 12.5109 38.9531Z"
          fill="black"
        />
      </svg>
    </>
  );
};
export const LoginIcon = () => {
  return (
    <>
      <svg
        width="203"
        height="50"
        viewBox="0 0 203 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M194.795 38.9532C197.039 36.2533 198.6 33.0528 199.345 29.6222C200.091 26.1916 199.999 22.632 199.078 19.2444C198.156 15.8569 196.433 12.741 194.053 10.1605C191.672 7.57992 188.706 5.61059 185.404 4.41907C182.101 3.22755 178.561 2.84891 175.081 3.31516C171.602 3.78141 168.286 5.07884 165.414 7.0977C162.542 9.11655 160.198 11.7974 158.581 14.9136C156.964 18.0297 156.122 21.4894 156.125 25C156.126 30.1034 157.925 35.0434 161.205 38.9532L161.173 38.9797C161.283 39.111 161.408 39.2235 161.52 39.3532C161.661 39.5141 161.813 39.6657 161.958 39.8219C162.395 40.2969 162.845 40.7532 163.317 41.1813C163.461 41.3125 163.609 41.4344 163.755 41.5594C164.255 41.9907 164.769 42.4 165.302 42.7813C165.37 42.8282 165.433 42.8891 165.502 42.9375V42.9188C169.161 45.494 173.527 46.8762 178.002 46.8762C182.476 46.8762 186.842 45.494 190.502 42.9188V42.9375C190.57 42.8891 190.631 42.8282 190.702 42.7813C191.233 42.3985 191.748 41.9907 192.248 41.5594C192.394 41.4344 192.542 41.311 192.686 41.1813C193.158 40.7516 193.608 40.2969 194.045 39.8219C194.191 39.6657 194.341 39.5141 194.483 39.3532C194.594 39.2235 194.72 39.111 194.83 38.9782L194.795 38.9532ZM178 12.5C179.391 12.5 180.75 12.9124 181.906 13.685C183.063 14.4576 183.964 15.5557 184.496 16.8405C185.028 18.1253 185.167 19.5391 184.896 20.903C184.625 22.2669 183.955 23.5198 182.972 24.5031C181.989 25.4865 180.736 26.1561 179.372 26.4274C178.008 26.6987 176.594 26.5595 175.309 26.0273C174.024 25.4951 172.926 24.5939 172.154 23.4376C171.381 22.2814 170.969 20.9219 170.969 19.5313C170.969 17.6665 171.71 15.8781 173.028 14.5594C174.347 13.2408 176.135 12.5 178 12.5ZM165.511 38.9532C165.538 36.9015 166.372 34.9431 167.832 33.5015C169.292 32.0599 171.261 31.2511 173.313 31.25H182.688C184.739 31.2511 186.708 32.0599 188.168 33.5015C189.628 34.9431 190.462 36.9015 190.489 38.9532C187.062 42.0412 182.613 43.7501 178 43.7501C173.387 43.7501 168.938 42.0412 165.511 38.9532Z"
          fill="black"
        />
        <path
          d="M1.68 17.05V25.975H11.355V27.25H1.68V37H0.135V15.775H12.855V17.05H1.68ZM22.4927 29.785C21.0727 29.835 19.8477 29.95 18.8177 30.13C17.7977 30.3 16.9527 30.535 16.2827 30.835C15.6227 31.135 15.1327 31.495 14.8127 31.915C14.4927 32.325 14.3327 32.795 14.3327 33.325C14.3327 33.825 14.4127 34.26 14.5727 34.63C14.7427 34.99 14.9627 35.29 15.2327 35.53C15.5127 35.76 15.8327 35.93 16.1927 36.04C16.5527 36.15 16.9277 36.205 17.3177 36.205C17.8977 36.205 18.4277 36.145 18.9077 36.025C19.3977 35.895 19.8477 35.72 20.2577 35.5C20.6777 35.27 21.0677 35 21.4277 34.69C21.7877 34.38 22.1427 34.045 22.4927 33.685V29.785ZM13.7177 24.19C14.4977 23.41 15.3177 22.82 16.1777 22.42C17.0377 22.02 18.0127 21.82 19.1027 21.82C19.9027 21.82 20.6027 21.95 21.2027 22.21C21.8027 22.46 22.2977 22.825 22.6877 23.305C23.0877 23.775 23.3877 24.35 23.5877 25.03C23.7877 25.7 23.8877 26.45 23.8877 27.28V37H23.3177C23.0177 37 22.8327 36.86 22.7627 36.58L22.5527 34.66C22.1427 35.06 21.7327 35.42 21.3227 35.74C20.9227 36.06 20.5027 36.33 20.0627 36.55C19.6227 36.77 19.1477 36.94 18.6377 37.06C18.1277 37.18 17.5677 37.24 16.9577 37.24C16.4477 37.24 15.9527 37.165 15.4727 37.015C14.9927 36.865 14.5627 36.635 14.1827 36.325C13.8127 36.015 13.5127 35.62 13.2827 35.14C13.0627 34.65 12.9527 34.065 12.9527 33.385C12.9527 32.755 13.1327 32.17 13.4927 31.63C13.8527 31.09 14.4177 30.62 15.1877 30.22C15.9577 29.82 16.9427 29.5 18.1427 29.26C19.3527 29.02 20.8027 28.88 22.4927 28.84V27.28C22.4927 25.9 22.1927 24.84 21.5927 24.1C21.0027 23.35 20.1227 22.975 18.9527 22.975C18.2327 22.975 17.6177 23.075 17.1077 23.275C16.6077 23.475 16.1827 23.695 15.8327 23.935C15.4827 24.175 15.1977 24.395 14.9777 24.595C14.7577 24.795 14.5727 24.895 14.4227 24.895C14.3127 24.895 14.2227 24.87 14.1527 24.82C14.0827 24.77 14.0227 24.705 13.9727 24.625L13.7177 24.19ZM39.289 35.08C38.859 35.64 38.249 36.11 37.459 36.49C36.669 36.87 35.774 37.1 34.774 37.18L34.384 38.41C35.294 38.56 35.979 38.785 36.439 39.085C36.909 39.395 37.144 39.845 37.144 40.435C37.144 40.735 37.074 41.005 36.934 41.245C36.804 41.485 36.614 41.685 36.364 41.845C36.124 42.015 35.834 42.14 35.494 42.22C35.154 42.31 34.784 42.355 34.384 42.355C33.974 42.355 33.574 42.295 33.184 42.175C32.794 42.065 32.469 41.915 32.209 41.725L32.359 41.305C32.419 41.195 32.499 41.14 32.599 41.14C32.649 41.14 32.714 41.165 32.794 41.215C32.884 41.275 32.994 41.335 33.124 41.395C33.264 41.455 33.434 41.51 33.634 41.56C33.834 41.62 34.079 41.65 34.369 41.65C34.889 41.65 35.289 41.54 35.569 41.32C35.849 41.1 35.989 40.805 35.989 40.435C35.989 40.185 35.924 39.975 35.794 39.805C35.664 39.635 35.479 39.495 35.239 39.385C35.009 39.285 34.729 39.2 34.399 39.13C34.079 39.07 33.724 39.015 33.334 38.965L33.904 37.195C32.994 37.155 32.164 36.955 31.414 36.595C30.664 36.235 30.019 35.73 29.479 35.08C28.939 34.42 28.519 33.625 28.219 32.695C27.919 31.765 27.769 30.71 27.769 29.53C27.769 28.39 27.919 27.35 28.219 26.41C28.519 25.47 28.959 24.66 29.539 23.98C30.119 23.3 30.824 22.775 31.654 22.405C32.494 22.025 33.454 21.835 34.534 21.835C35.504 21.835 36.364 21.99 37.114 22.3C37.864 22.61 38.519 23.03 39.079 23.56L38.704 24.07C38.654 24.12 38.604 24.165 38.554 24.205C38.514 24.235 38.454 24.25 38.374 24.25C38.274 24.25 38.139 24.185 37.969 24.055C37.799 23.915 37.569 23.765 37.279 23.605C36.989 23.445 36.624 23.3 36.184 23.17C35.754 23.03 35.229 22.96 34.609 22.96C33.749 22.96 32.984 23.115 32.314 23.425C31.654 23.725 31.094 24.16 30.634 24.73C30.174 25.3 29.824 25.99 29.584 26.8C29.354 27.61 29.239 28.52 29.239 29.53C29.239 30.58 29.359 31.51 29.599 32.32C29.849 33.13 30.199 33.815 30.649 34.375C31.099 34.925 31.644 35.345 32.284 35.635C32.924 35.925 33.634 36.07 34.414 36.07C35.134 36.07 35.734 35.985 36.214 35.815C36.704 35.645 37.104 35.46 37.414 35.26C37.734 35.06 37.984 34.875 38.164 34.705C38.344 34.535 38.494 34.45 38.614 34.45C38.734 34.45 38.834 34.5 38.914 34.6L39.289 35.08ZM51.1744 29.785C49.7544 29.835 48.5294 29.95 47.4994 30.13C46.4794 30.3 45.6344 30.535 44.9644 30.835C44.3044 31.135 43.8144 31.495 43.4944 31.915C43.1744 32.325 43.0144 32.795 43.0144 33.325C43.0144 33.825 43.0944 34.26 43.2544 34.63C43.4244 34.99 43.6444 35.29 43.9144 35.53C44.1944 35.76 44.5144 35.93 44.8744 36.04C45.2344 36.15 45.6094 36.205 45.9994 36.205C46.5794 36.205 47.1094 36.145 47.5894 36.025C48.0794 35.895 48.5294 35.72 48.9394 35.5C49.3594 35.27 49.7494 35 50.1094 34.69C50.4694 34.38 50.8244 34.045 51.1744 33.685V29.785ZM42.3994 24.19C43.1794 23.41 43.9994 22.82 44.8594 22.42C45.7194 22.02 46.6944 21.82 47.7844 21.82C48.5844 21.82 49.2844 21.95 49.8844 22.21C50.4844 22.46 50.9794 22.825 51.3694 23.305C51.7694 23.775 52.0694 24.35 52.2694 25.03C52.4694 25.7 52.5694 26.45 52.5694 27.28V37H51.9994C51.6994 37 51.5144 36.86 51.4444 36.58L51.2344 34.66C50.8244 35.06 50.4144 35.42 50.0044 35.74C49.6044 36.06 49.1844 36.33 48.7444 36.55C48.3044 36.77 47.8294 36.94 47.3194 37.06C46.8094 37.18 46.2494 37.24 45.6394 37.24C45.1294 37.24 44.6344 37.165 44.1544 37.015C43.6744 36.865 43.2444 36.635 42.8644 36.325C42.4944 36.015 42.1944 35.62 41.9644 35.14C41.7444 34.65 41.6344 34.065 41.6344 33.385C41.6344 32.755 41.8144 32.17 42.1744 31.63C42.5344 31.09 43.0994 30.62 43.8694 30.22C44.6394 29.82 45.6244 29.5 46.8244 29.26C48.0344 29.02 49.4844 28.88 51.1744 28.84V27.28C51.1744 25.9 50.8744 24.84 50.2744 24.1C49.6844 23.35 48.8044 22.975 47.6344 22.975C46.9144 22.975 46.2994 23.075 45.7894 23.275C45.2894 23.475 44.8644 23.695 44.5144 23.935C44.1644 24.175 43.8794 24.395 43.6594 24.595C43.4394 24.795 43.2544 24.895 43.1044 24.895C42.9944 24.895 42.9044 24.87 42.8344 24.82C42.7644 24.77 42.7044 24.705 42.6544 24.625L42.3994 24.19ZM67.0702 15.175V37H65.6302V15.175H67.0702ZM78.0263 21.835C79.0963 21.835 80.0513 22.02 80.8913 22.39C81.7413 22.75 82.4563 23.265 83.0363 23.935C83.6163 24.605 84.0563 25.415 84.3563 26.365C84.6663 27.305 84.8213 28.36 84.8213 29.53C84.8213 30.7 84.6663 31.755 84.3563 32.695C84.0563 33.635 83.6163 34.44 83.0363 35.11C82.4563 35.78 81.7413 36.295 80.8913 36.655C80.0513 37.015 79.0963 37.195 78.0263 37.195C76.9563 37.195 75.9963 37.015 75.1463 36.655C74.3063 36.295 73.5913 35.78 73.0013 35.11C72.4213 34.44 71.9763 33.635 71.6663 32.695C71.3663 31.755 71.2163 30.7 71.2163 29.53C71.2163 28.36 71.3663 27.305 71.6663 26.365C71.9763 25.415 72.4213 24.605 73.0013 23.935C73.5913 23.265 74.3063 22.75 75.1463 22.39C75.9963 22.02 76.9563 21.835 78.0263 21.835ZM78.0263 36.07C78.9163 36.07 79.6913 35.92 80.3513 35.62C81.0213 35.31 81.5763 34.87 82.0163 34.3C82.4663 33.73 82.8013 33.045 83.0213 32.245C83.2413 31.435 83.3513 30.53 83.3513 29.53C83.3513 28.54 83.2413 27.64 83.0213 26.83C82.8013 26.02 82.4663 25.33 82.0163 24.76C81.5763 24.18 81.0213 23.735 80.3513 23.425C79.6913 23.115 78.9163 22.96 78.0263 22.96C77.1363 22.96 76.3563 23.115 75.6863 23.425C75.0263 23.735 74.4713 24.18 74.0213 24.76C73.5813 25.33 73.2463 26.02 73.0163 26.83C72.7963 27.64 72.6863 28.54 72.6863 29.53C72.6863 30.53 72.7963 31.435 73.0163 32.245C73.2463 33.045 73.5813 33.73 74.0213 34.3C74.4713 34.87 75.0263 35.31 75.6863 35.62C76.3563 35.92 77.1363 36.07 78.0263 36.07ZM93.6612 30.4C94.3012 30.4 94.8712 30.31 95.3712 30.13C95.8712 29.94 96.2912 29.68 96.6312 29.35C96.9712 29.02 97.2312 28.625 97.4112 28.165C97.5912 27.705 97.6812 27.195 97.6812 26.635C97.6812 26.075 97.5862 25.565 97.3962 25.105C97.2162 24.635 96.9512 24.235 96.6012 23.905C96.2612 23.575 95.8412 23.32 95.3412 23.14C94.8512 22.96 94.2912 22.87 93.6612 22.87C93.0312 22.87 92.4662 22.96 91.9662 23.14C91.4762 23.32 91.0562 23.575 90.7062 23.905C90.3662 24.235 90.1062 24.635 89.9262 25.105C89.7462 25.565 89.6562 26.075 89.6562 26.635C89.6562 27.195 89.7462 27.705 89.9262 28.165C90.1062 28.625 90.3662 29.02 90.7062 29.35C91.0562 29.68 91.4762 29.94 91.9662 30.13C92.4662 30.31 93.0312 30.4 93.6612 30.4ZM99.2412 38.005C99.2412 37.535 99.1162 37.16 98.8662 36.88C98.6262 36.59 98.3012 36.365 97.8912 36.205C97.4812 36.045 97.0062 35.935 96.4662 35.875C95.9362 35.805 95.3762 35.755 94.7862 35.725C94.2062 35.695 93.6212 35.665 93.0312 35.635C92.4412 35.605 91.8862 35.545 91.3662 35.455C90.9862 35.605 90.6362 35.78 90.3162 35.98C89.9962 36.17 89.7212 36.39 89.4912 36.64C89.2612 36.89 89.0812 37.16 88.9512 37.45C88.8212 37.75 88.7562 38.07 88.7562 38.41C88.7562 38.85 88.8662 39.255 89.0862 39.625C89.3162 40.005 89.6462 40.33 90.0762 40.6C90.5162 40.88 91.0512 41.1 91.6812 41.26C92.3112 41.42 93.0362 41.5 93.8562 41.5C94.6162 41.5 95.3212 41.415 95.9712 41.245C96.6312 41.075 97.2012 40.835 97.6812 40.525C98.1712 40.215 98.5512 39.845 98.8212 39.415C99.1012 38.985 99.2412 38.515 99.2412 38.005ZM100.801 22.735V23.23C100.801 23.45 100.661 23.585 100.381 23.635L98.1012 23.8C98.3812 24.18 98.5962 24.605 98.7462 25.075C98.8962 25.545 98.9712 26.055 98.9712 26.605C98.9712 27.325 98.8412 27.98 98.5812 28.57C98.3312 29.15 97.9712 29.65 97.5012 30.07C97.0412 30.48 96.4812 30.8 95.8212 31.03C95.1712 31.26 94.4512 31.375 93.6612 31.375C92.8112 31.375 92.0362 31.245 91.3362 30.985C90.9162 31.225 90.5812 31.51 90.3312 31.84C90.0912 32.16 89.9712 32.48 89.9712 32.8C89.9712 33.23 90.1212 33.56 90.4212 33.79C90.7312 34.02 91.1312 34.19 91.6212 34.3C92.1212 34.4 92.6862 34.465 93.3162 34.495C93.9562 34.525 94.6062 34.56 95.2662 34.6C95.9262 34.63 96.5712 34.69 97.2012 34.78C97.8412 34.87 98.4062 35.03 98.8962 35.26C99.3962 35.48 99.7962 35.795 100.096 36.205C100.406 36.605 100.561 37.14 100.561 37.81C100.561 38.43 100.406 39.025 100.096 39.595C99.7862 40.165 99.3362 40.67 98.7462 41.11C98.1662 41.55 97.4612 41.9 96.6312 42.16C95.8012 42.43 94.8712 42.565 93.8412 42.565C92.7912 42.565 91.8712 42.455 91.0812 42.235C90.2912 42.025 89.6262 41.735 89.0862 41.365C88.5562 41.005 88.1562 40.585 87.8862 40.105C87.6162 39.625 87.4812 39.115 87.4812 38.575C87.4812 37.785 87.7412 37.11 88.2612 36.55C88.7812 35.98 89.4912 35.535 90.3912 35.215C89.8912 35.045 89.4862 34.8 89.1762 34.48C88.8762 34.15 88.7262 33.705 88.7262 33.145C88.7262 32.935 88.7662 32.715 88.8462 32.485C88.9262 32.255 89.0462 32.03 89.2062 31.81C89.3662 31.58 89.5612 31.365 89.7912 31.165C90.0212 30.965 90.2812 30.785 90.5712 30.625C89.8612 30.215 89.3062 29.67 88.9062 28.99C88.5162 28.31 88.3212 27.515 88.3212 26.605C88.3212 25.885 88.4462 25.235 88.6962 24.655C88.9562 24.065 89.3212 23.56 89.7912 23.14C90.2612 22.72 90.8212 22.395 91.4712 22.165C92.1312 21.935 92.8612 21.82 93.6612 21.82C94.3212 21.82 94.9262 21.9 95.4762 22.06C96.0362 22.22 96.5362 22.445 96.9762 22.735H100.801ZM105.698 22.075V37H104.273V22.075H105.698ZM106.313 16.93C106.313 17.11 106.273 17.28 106.193 17.44C106.123 17.59 106.028 17.725 105.908 17.845C105.788 17.965 105.648 18.06 105.488 18.13C105.328 18.2 105.158 18.235 104.978 18.235C104.798 18.235 104.628 18.2 104.468 18.13C104.308 18.06 104.168 17.965 104.048 17.845C103.928 17.725 103.833 17.59 103.763 17.44C103.693 17.28 103.658 17.11 103.658 16.93C103.658 16.75 103.693 16.58 103.763 16.42C103.833 16.25 103.928 16.105 104.048 15.985C104.168 15.865 104.308 15.77 104.468 15.7C104.628 15.63 104.798 15.595 104.978 15.595C105.158 15.595 105.328 15.63 105.488 15.7C105.648 15.77 105.788 15.865 105.908 15.985C106.028 16.105 106.123 16.25 106.193 16.42C106.273 16.58 106.313 16.75 106.313 16.93ZM112.153 24.685C112.843 23.825 113.638 23.135 114.538 22.615C115.448 22.095 116.458 21.835 117.568 21.835C118.388 21.835 119.108 21.965 119.728 22.225C120.358 22.485 120.878 22.86 121.288 23.35C121.698 23.84 122.008 24.43 122.218 25.12C122.428 25.81 122.533 26.59 122.533 27.46V37H121.093V27.46C121.093 26.06 120.773 24.965 120.133 24.175C119.493 23.375 118.518 22.975 117.208 22.975C116.238 22.975 115.328 23.225 114.478 23.725C113.638 24.215 112.888 24.9 112.228 25.78V37H110.788V22.075H111.583C111.833 22.075 111.978 22.2 112.018 22.45L112.153 24.685Z"
          fill="black"
        />
      </svg>
    </>
  );
};
function LoginBtn({ href }) {
  return (
    <Link href={href} passHref>
      <a href={href}>
        <UserIcon />
      </a>
    </Link>
  );
}
