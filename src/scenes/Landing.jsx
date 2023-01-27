
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState, useEffect } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const first_text = "Hello there! {";
  const second_text = "     Welcome to my site!";
  const third_text =  "     I hope you enjoy the expierience!";

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const textState = ["istyping", "isdeleting"];
    const [typing, setTyping] = useState(textState[0]);

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}  
useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing === "istyping" && text1 !== first_text) {
        setText1(first_text.slice(0, text1.length + 1));
      }
      else if (text1 === first_text && typing === "istyping"){
        sleep(2000).then(()=>{
        setTyping(textState[1])
        })
      }
      else if ( (text1 === first_text && typing==="isdeleting") || typing === "isdeleting" ) {
        setText1(first_text.slice(0, text1.length - 1));
        if(text1.length<=2){
            setTyping(textState[0])
        }
      }
    }, 100);
  return () => clearTimeout(timeout);
}, [text1, typing]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText1(first_text.slice(0, text1.length + 1));
    }, 100);
    return () => clearTimeout(timeout);
  }, [text1]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText2(second_text.slice(0, text2.length + 1));
    }, 250);

    return () => clearTimeout(timeout);
  }, [text2]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText3(third_text.slice(0, text3.length + 1));
    }, 300);

    return () => clearTimeout(timeout);
  }, [text3]);
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              src="assets/profile-image.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="assets/profile-image.png"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Sander {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              Doggen
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
          <span>
                
                <div className=" text-2xl">
                    <SyntaxHighlighter className="blinking-cursor" language="javascript">
                    {text1}
                    </SyntaxHighlighter>
                </div>
               
                <div className=" text-2xl">
                    <SyntaxHighlighter className="blinking-cursor" language="javascript" >
                    {text2}
                    </SyntaxHighlighter>
                </div>
                <div className=" text-2xl">
                    <SyntaxHighlighter className="blinking-cursor" language="javascript" >
                    {text3}
                    </SyntaxHighlighter>
                </div>
                <div className=" text-2xl">
                    <SyntaxHighlighter className="blinking-cursor" language="javascript" >
                    {`}`}
                    </SyntaxHighlighter>
                </div>
            </span>
         
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-white rounded-sm py-3 px-7 font-semibold
             hover:text-blue transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          
        </motion.div>
      </div>
    </section>
  );
  
};

export default Landing;