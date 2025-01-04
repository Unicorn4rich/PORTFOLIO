import { Caveat } from 'next/font/google'
import { BiHeading } from 'react-icons/bi';



export const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify weights you need
  variable: '--font-caveat', // Optional: use a CSS variable for easier reference
  display: 'swap', // Fallback option for better performance
});


export let data = [
  {
    pic: "/myImage/1.png",
    heading: "Blog Website"
  },
  {
    pic: "/myImage/2.png",
    heading: "Panacloud Website"
  },
  {
    pic: "/myImage/3.png",
    heading: "Iphone Website"
  },
  {
    pic: "/myImage/4.png",
    heading: "Multipage Website"
  },
  {
    pic: "/myImage/5.png",
    heading: "Figma Website"
  },
  {
    pic: "/myImage/6.png",
    heading: "Chairs Website"
  },
]