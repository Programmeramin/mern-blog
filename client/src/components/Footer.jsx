import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {BsFacebook, BsInstagram, BsTwitter, BsGithub} from "react-icons/bs"


const FooterCom = () => {
  return (
    <>     
   
   <Footer container className="border border-t-8 border-teal-500">  
      <div className="">
        <div className="">
          <div className="">
          <Link to="/" className="self-center whitespace-nowrap text-lg sm:text-2xl font-semibold dark:text-white">
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-lg text-white">AMIN </span>
          BLOG
          </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
           
           <div>
           <Footer.Title title="About"/>
            <Footer.LinkGroup col>
               <Footer.Link href="https://www.100jsprojects.com" rel="nopener noreferrer">
                 100 JS Projects
               </Footer.Link>

               <Footer.Link href="/about" rel="nopener noreferrer">
                {`AMIN'S BLOG`}
               </Footer.Link>

            </Footer.LinkGroup>
           </div>

           <div>
           <Footer.Title title="FOLLOW US"/>
            <Footer.LinkGroup col>
               <Footer.Link href="https://www.github.com/Programmeramin" rel="nopener noreferrer">
                Github
               </Footer.Link>

               <Footer.Link href="#">
                Discord
               </Footer.Link>

            </Footer.LinkGroup>
           </div>
   
           <div>
           <Footer.Title title="Legal"/>
            <Footer.LinkGroup col>
               <Footer.Link href="#" >
                 Privacy Policy
               </Footer.Link>

               <Footer.Link href="#">
                 Terms &amp; Conditions
               </Footer.Link>

            </Footer.LinkGroup>
           </div>

          </div>

        </div>
      </div>
   </Footer>

        <Footer.Divider/>
        <div className="w-full sm:flex sm:items-center sm:justify-between p-6">
          <Footer.Copyright href="#" by="Amin's Blog" year={new Date().getFullYear()}/>

           <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook}/>
            <Footer.Icon href="#" icon={BsInstagram}/>
            <Footer.Icon href="#" icon={BsTwitter}/>
            <Footer.Icon href="https://www.github.com/Programmeramin" icon={BsGithub}/>
           </div>

        </div>

    </>
  )
}

export default FooterCom;
