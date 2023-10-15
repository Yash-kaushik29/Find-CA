import React from "react";
import { footerLinks } from "../constants";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <footer className="max-container mx-[50px] mt-[150px]">
      <div className="flex justify-between items-start gap-10 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start mt-5">
          <a href="/">
            <img src="/images/logo2.png" width={150} height={46} alt="logo" />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            India's first platform dedicated to simplifying partner search
          </p>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap mt-5">
          {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
                <ul>
                  {section.links.map((link) => (
                    <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-coral-red cursor-pointer" key={link.name}>
                      <a href={link.link} >{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        <div className="bg-white h-[1px] w-full"></div>

        <div className="flex flex-col lg:flex-row flex-1 justify-between">
            <div>
                <p className="text-white text-md font-semibold">Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</p>
            </div>
            <div className="flex gap-4 mt-5 lg:mt-0">
                <a href=""><FacebookIcon className="cursor-pointer"/></a>
                <a href=""><InstagramIcon className="cursor-pointer"/></a>
                <a href=""><LinkedInIcon className="cursor-pointer"/></a>
                <a href=""><WhatsAppIcon className="cursor-pointer"/></a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
