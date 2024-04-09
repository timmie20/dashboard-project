import React, { useContext } from "react";
import { IoClose } from "react-icons/io5";
import Logo from "../assets/logo/Graph.png";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const NavMobileView = ({ setIsOpen }) => {
  const { pathname } = useContext(AppContext);
  return (
    <>
      <nav className="fixed left-0 top-0 z-50 flex h-full flex-col gap-10 bg-white px-8 py-4 shadow-xl">
        <div className="absolute right-2 top-7 z-20 cursor-pointer ">
          <IoClose size={30} onClick={() => setIsOpen(false)} />
        </div>
        <div className="flex items-center gap-2">
          <img src={Logo} alt="website logo" />
          <h5 className="font-Poppins font-bold text-[#45464E]">Metrix</h5>
        </div>

        <div className="flex flex-1 flex-col">
          <Link
            to="/dashboard"
            className={`nav_links ${pathname === "/dashboard" ? "active" : ""}`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M14.0755 0H17.4615C18.8637 0 20 1.14585 20 2.55996V5.97452C20 7.38864 18.8637 8.53449 17.4615 8.53449H14.0755C12.6732 8.53449 11.537 7.38864 11.537 5.97452V2.55996C11.537 1.14585 12.6732 0 14.0755 0Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.53852 0H5.92449C7.32676 0 8.46301 1.14585 8.46301 2.55996V5.97452C8.46301 7.38864 7.32676 8.53449 5.92449 8.53449H2.53852C1.13626 8.53449 0 7.38864 0 5.97452V2.55996C0 1.14585 1.13626 0 2.53852 0ZM2.53852 11.4655H5.92449C7.32676 11.4655 8.46301 12.6114 8.46301 14.0255V17.44C8.46301 18.8532 7.32676 20 5.92449 20H2.53852C1.13626 20 0 18.8532 0 17.44V14.0255C0 12.6114 1.13626 11.4655 2.53852 11.4655ZM17.4615 11.4655H14.0755C12.6732 11.4655 11.537 12.6114 11.537 14.0255V17.44C11.537 18.8532 12.6732 20 14.0755 20H17.4615C18.8637 20 20 18.8532 20 17.44V14.0255C20 12.6114 18.8637 11.4655 17.4615 11.4655Z"
                fill="black"
              />
            </svg>
            <span>Dashboard</span>
          </Link>

          <Link className="nav_links relative">
            <svg
              width="24"
              height="24"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.7614 17.9167H6.80492C4.24962 17.9167 2.28928 16.9937 2.84611 13.279L3.49447 8.24466C3.83772 6.39111 5.02002 5.68173 6.0574 5.68173H14.5395C15.5921 5.68173 16.7058 6.44451 17.1024 8.24466L17.7508 13.279C18.2237 16.5742 16.3167 17.9167 13.7614 17.9167Z"
                stroke="#130F26"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.8759 5.49865C13.8759 3.51026 12.264 1.89835 10.2756 1.89835V1.89835C9.31806 1.89429 8.39839 2.27182 7.7199 2.94744C7.04141 3.62307 6.66 4.54114 6.66 5.49865H6.66"
                stroke="#130F26"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.747 9.25151H12.7088"
                stroke="#130F26"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.88807 9.25151H7.84993"
                stroke="#130F26"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Orders</span>
            {/* <div
              className={`absolute top-3 size-5 rounded-full bg-[#FFCC91] text-center text-sm ${! ? "left-[40px]" : "right-[80px]"}`}
            >
              3
            </div> */}
          </Link>

          <Link className="nav_links">
            <svg
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.99291 11.6723C10.0671 11.6723 12.6946 12.1382 12.6946 13.999C12.6946 15.8598 10.0846 16.339 6.99291 16.339C3.91791 16.339 1.29125 15.8773 1.29125 14.0157C1.29125 12.154 3.90041 11.6723 6.99291 11.6723Z"
                stroke="#1C1D22"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.99291 9.01649C4.97458 9.01649 3.33791 7.38066 3.33791 5.36233C3.33791 3.34399 4.97458 1.70816 6.99291 1.70816C9.01041 1.70816 10.6471 3.34399 10.6471 5.36233C10.6546 7.37316 9.02958 9.00899 7.01875 9.01649H6.99291Z"
                stroke="#1C1D22"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.7359 8.06799C14.0701 7.88049 15.0976 6.73549 15.1001 5.34966C15.1001 3.98382 14.1042 2.85049 12.7984 2.63632"
                stroke="#1C1D22"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.4962 11.2768C15.7887 11.4693 16.6912 11.9227 16.6912 12.856C16.6912 13.4985 16.2662 13.9152 15.5795 14.176"
                stroke="#1C1D22"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Customers</span>
          </Link>

          <Link className="nav_links">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.4189 15.7321C21.4189 19.3101 19.3099 21.4191 15.7319 21.4191H7.94988C4.36288 21.4191 2.24988 19.3101 2.24988 15.7321V7.93211C2.24988 4.35911 3.56388 2.25011 7.14288 2.25011H9.14288C9.86088 2.25111 10.5369 2.58811 10.9669 3.16311L11.8799 4.37711C12.3119 4.95111 12.9879 5.28911 13.7059 5.29011H16.5359C20.1229 5.29011 21.4469 7.11611 21.4469 10.7671L21.4189 15.7321Z"
                stroke="#53545C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.48096 14.463H16.216"
                stroke="#53545C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Inventory</span>
          </Link>

          <Link
            className={`nav_links ${pathname === "/dashboard/conversations" ? "active" : ""}`}
            to="/dashboard/conversations"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.0714 19.0699C16.0152 22.1263 11.4898 22.7867 7.78642 21.074C7.23971 20.8539 6.79148 20.676 6.36537 20.676C5.17849 20.683 3.70117 21.8339 2.93336 21.067C2.16555 20.2991 3.31726 18.8206 3.31726 17.6266C3.31726 17.2004 3.14642 16.7602 2.92632 16.2124C1.21283 12.5096 1.87411 7.98269 4.93026 4.92721C8.8316 1.02443 15.17 1.02443 19.0714 4.9262C22.9797 8.83501 22.9727 15.1681 19.0714 19.0699Z"
                stroke="#53545C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.9394 12.413H15.9484"
                stroke="#53545C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9304 12.413H11.9394"
                stroke="#53545C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.9214 12.413H7.9304"
                stroke="#53545C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Conversations</span>
          </Link>

          <Link className="nav_links">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.8067 7.62357L20.1842 6.54348C19.6577 5.62956 18.4907 5.31427 17.5755 5.83867V5.83867C17.1399 6.0953 16.6201 6.16811 16.1307 6.04104C15.6413 5.91398 15.2226 5.59747 14.9668 5.16133C14.8023 4.8841 14.7139 4.56835 14.7105 4.24599V4.24599C14.7254 3.72918 14.5304 3.22836 14.17 2.85762C13.8096 2.48689 13.3145 2.27782 12.7975 2.27803H11.5435C11.037 2.27802 10.5513 2.47987 10.194 2.8389C9.83669 3.19793 9.63717 3.68455 9.63961 4.19107V4.19107C9.6246 5.23688 8.77248 6.07677 7.72657 6.07666C7.40421 6.07331 7.08846 5.9849 6.81123 5.82036V5.82036C5.89606 5.29597 4.72911 5.61125 4.20254 6.52517L3.53435 7.62357C3.00841 8.53635 3.3194 9.70256 4.23 10.2323V10.2323C4.8219 10.574 5.18653 11.2055 5.18653 11.889C5.18653 12.5725 4.8219 13.204 4.23 13.5458V13.5458C3.32056 14.0719 3.00923 15.2353 3.53435 16.1453V16.1453L4.16593 17.2346C4.41265 17.6797 4.8266 18.0082 5.31619 18.1474C5.80578 18.2865 6.33064 18.2249 6.77462 17.976V17.976C7.21108 17.7213 7.73119 17.6515 8.21934 17.7822C8.70749 17.9128 9.12324 18.233 9.37416 18.6716C9.5387 18.9488 9.62711 19.2646 9.63046 19.587V19.587C9.63046 20.6435 10.487 21.5 11.5435 21.5H12.7975C13.8505 21.5 14.7055 20.6491 14.7105 19.5961V19.5961C14.7081 19.088 14.9089 18.6 15.2682 18.2407C15.6275 17.8814 16.1155 17.6806 16.6236 17.6831C16.9452 17.6917 17.2596 17.7797 17.5389 17.9394V17.9394C18.4517 18.4653 19.6179 18.1543 20.1476 17.2437V17.2437L20.8067 16.1453C21.0618 15.7075 21.1318 15.186 21.0012 14.6963C20.8706 14.2067 20.5502 13.7893 20.111 13.5366V13.5366C19.6718 13.2839 19.3514 12.8665 19.2208 12.3769C19.0902 11.8873 19.1603 11.3658 19.4154 10.9279C19.5812 10.6383 19.8214 10.3982 20.111 10.2323V10.2323C21.0161 9.70285 21.3264 8.54345 20.8067 7.63272V7.63272V7.62357Z"
                stroke="#53545C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                cx="12.1751"
                cy="11.889"
                r="2.63616"
                stroke="#53545C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Settings</span>
          </Link>
        </div>

        <div className="text-gray-clr-medium">
          <div className=" flex w-full items-center gap-3 rounded-2xl bg-gray-clr-light px-4 py-[11px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21V19ZM3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H6C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19V16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14H3V19Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-sm">Contact Support</p>
          </div>

          <div className="mt-4 flex w-full flex-col gap-4 rounded-2xl bg-orange-clr-full bg-opacity-20 px-4 py-[11px]">
            <span className="flex items-center gap-3">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 12V22H4V12"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 7H2V12H22V7Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 22V7"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-sm">Free Gift Awaits You!</p>
            </span>
            <p className="text-[12px]">Upgrade your account</p>
          </div>

          <div className="flex w-full items-center gap-3 px-4 py-9">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M0 4.447C0 1.996 2.03024 0 4.52453 0H9.48564C11.9748 0 14 1.99 14 4.437V15.553C14 18.005 11.9698 20 9.47445 20H4.51537C2.02515 20 0 18.01 0 15.563V14.623V4.447Z"
                fill="#CC5F5F"
              />
              <path
                d="M19.7789 9.4548L16.9331 6.5458C16.639 6.2458 16.1657 6.2458 15.8725 6.5478C15.5803 6.8498 15.5813 7.3368 15.8745 7.6368L17.4337 9.2298H15.9387H7.54844C7.13452 9.2298 6.79852 9.5748 6.79852 9.9998C6.79852 10.4258 7.13452 10.7698 7.54844 10.7698H17.4337L15.8745 12.3628C15.5813 12.6628 15.5803 13.1498 15.8725 13.4518C16.0196 13.6028 16.2114 13.6788 16.4043 13.6788C16.5952 13.6788 16.787 13.6028 16.9331 13.4538L19.7789 10.5458C19.9201 10.4008 20 10.2048 20 9.9998C20 9.7958 19.9201 9.5998 19.7789 9.4548Z"
                fill="#CC5F5F"
              />
            </svg>
            <span className="text-sm text-[#CC5F5F]">Logout</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavMobileView;
