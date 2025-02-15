import React from "react";
import { motion } from 'framer-motion';
import { useNavigate,useLocation ,Link } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const goToQuiz = () =>{
    location.pathname==='/quiz'? navigate(0):navigate('/quiz')
    }
  
  
  const svgVariants = {
    hidden: { rotate: -180 },
    visible: { 
      rotate: 0,
      transition: { duration : 1 }
    },
  }
  
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut",
      }
    }
  };

  return (
<nav className="bg-black border-gray-200 border-b-4 border ">
  <div className=" max-w-screen-xl flex justify-center  sm:justify-between items-center sm:mx-auto p-4">
      <Link to='/'className="flex gap-2 sm:gap-4">
      <motion.svg
                 style={{ fill: '#ffff' }} 
                className="sm:h-16 sm:w-16 w-8 h-8"
                variants={svgVariants}
                initial="hidden"
                animate="visible"
                
      version="1.1" id="_x32_"
   width="800px" height="800px" viewBox="0 0 512 512">
<g>
  <motion.path 
     
     variants={pathVariants}
  className="st0" d="M179.335,226.703c22.109,0.219,37.484,21.172,44.047,27.047c1.578,1.828,3.875,2.984,6.469,2.984
    c4.766,0,8.641-3.859,8.641-8.641c0-2.656-1.219-5.031-3.125-6.609l0.016-0.031c-5-4.781-20.547-25.688-55.734-25.688
    s-43.609,26.406-44.5,29.594c-0.016,0.156-0.094,0.297-0.094,0.453c0,1.359,1.078,2.438,2.438,2.438
    c1.094,0,1.844-0.875,2.266-1.813C142.491,241.047,150.382,226.406,179.335,226.703z"/>
  <motion.path 
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                  className="st0" d="M331.554,216.813c-35.188,0-50.734,20.875-55.734,25.656l0.016,0.047c-1.906,1.578-3.125,3.922-3.125,6.594
    c0,4.781,3.875,8.641,8.625,8.641c2.609,0,4.938-1.156,6.516-2.969c6.531-5.891,21.906-26.828,44.016-27.063
    c28.953-0.281,36.844,14.344,39.578,19.75c0.422,0.922,1.172,1.797,2.281,1.797c1.344,0,2.422-1.094,2.422-2.422
    c0-0.172-0.063-0.328-0.094-0.469C375.163,243.188,366.741,216.813,331.554,216.813z"/>
  <motion.path 
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                  className="st0" d="M331.054,370.563l-36.141-2.063l-17.172-10.781c0,0-10.031,5.922-12.328,7.297h-9.094h-9.094
    c-2.297-1.375-12.297-7.297-12.297-7.297l-0.375,0.234c-0.266-0.25-0.438-0.563-0.75-0.797c-3.25-2.344-5.047-4.656-4.906-6.313
    c0.297-3.438,6.609-8.219,11.063-10.391l4.141-1.953v-50.094c0-9.156-6.094-18.391-17.594-26.688
    c-12.266-8.844-30.875-16.375-41.094-12.953c-3.781,1.25-5.797,5.297-4.547,9.078c1.188,3.781,5.344,5.875,9.109,4.688
    c3.156-0.953,16.75,2.641,28.5,11.313c6.969,5.109,11.094,10.547,11.094,14.563v41.266c-5.438,3.375-14.25,10.281-15.125,19.859
    c-0.375,4.25,0.719,10.313,7.297,16.469l-4,2.5l-36.156,2.063c0,0-36.203-28.922-40.297-34.813l24.578,58.234
    c0,0,64.594,0.906,67.234,0.609c12.313-10.016,23.219-21.391,23.219-21.391s10.906,11.375,23.203,21.391
    c2.656,0.297,67.25-0.609,67.25-0.609l24.563-58.234C367.257,341.641,331.054,370.563,331.054,370.563z"/>
  < motion.path 
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                  className="st0" d="M181.772,319.344c20.031,0,32.766-16.594,32.766-22.219s-12.734-22.203-32.766-22.203
    s-32.781,16.578-32.781,22.203S161.741,319.344,181.772,319.344z"/>
  <motion.path 
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                  className="st0" d="M325.335,319.344c20.031,0,32.781-16.594,32.781-22.219s-12.75-22.203-32.781-22.203
    s-32.766,16.578-32.766,22.203S305.304,319.344,325.335,319.344z"/>
  <motion.path 
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                  className="st0" d="M482.46,167.234l-88.891-22.219c0,0-11-76.734-12.781-89.219c-1.766-12.453-12.484-46.344-51.703-46.344
    H182.897c-39.188,0-49.906,33.891-51.703,46.344c-1.734,12.484-12.75,89.219-12.75,89.219l-88.922,22.219
    c-37.766,8.906-39.344,34.719-4.453,34.719c10.688,0,38.25,0,70.734,0c-14.891,42.609-48.75,141.25-73.266,227.125L69.022,419
    v58.594l46.484-22.219l18.188,42.438l21.406-42.844c28.813,31.219,65.484,47.578,101.219,47.578
    c36.109,0,72.266-14.031,100.656-43.172l19.25,38.438l18.188-42.438l46.469,22.219V419l46.484,10.078
    c-24.547-85.875-58.375-184.516-73.266-227.125c33.391,0,61.906,0,72.813,0C521.819,201.953,520.257,176.141,482.46,167.234z
     M387.46,297.5c0,120.625-61.375,176.75-124.359,180.484l28.359-43.953h-36.406h-36.422l28.219,43.734
    c-60.625-5.938-121.688-68.625-121.703-180.656c-1.297-40.516,4.797-72.406,17.969-95.156c57.219,0,112.891,0,112.891,0
    s56.063,0,113.5,0C382.694,224.672,388.788,256.594,387.46,297.5z"/>
</g>
      </motion.svg>
      <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap text-white">
    Rien à cacher !
      </span>
      </Link>


    <button
    onClick={goToQuiz}
    className="hidden sm:block h-14 px-16 text-sm font-bold text-purple-300 bg-purple-700 border-2 border-purple-300 rounded-full shadow-[0_0_4em_1em_rgba(191,123,255,0.781)] hover:text-purple-700 hover:bg-purple-300 hover:shadow-[0_0_4em_2em_rgba(191,123,255,0.781)] active:shadow-[0_0_2.5em_2em_rgba(191,123,255,0.781)] focus:outline-none transition-all duration-300">
      Lancer défi 
    </button>

  </div>
</nav>


  );
}

export default Navbar;