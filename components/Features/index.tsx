import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import Image from 'next/image';
import featuresData from "./featuresData";
import img from "../../public/images/features/life.jpg";
import img1 from "../../public/images/features/bu.jpg";
import img2 from "../../public/images/features/bb.jpg";

import im from "../../public/images/features/bbb.jpg";
import im1 from "../../public/images/features/int.jpg";
import im2 from "../../public/images/features/post.jpg";
import im3 from "../../public/images/features/reg.jpg";
import { BiSolidPencil } from 'react-icons/bi';
import './style.css';
import React, { useState } from 'react';
import Link from 'next/link';

const Features = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const getBackgroundColor = () => {
    switch (hoveredButton) {
        case 'undergraduate':
            return 'blue';
        case 'postgraduate':
            return 'lightcoral';
        case 'international':
            return 'lightblue';
        default:
            return '';
    }
};

  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14 ">
              <div>
                <Image
                  className="img1"
                  src={
                    hoveredButton === 'studentLife'
                      ? img
                      : hoveredButton === 'whyBugema'
                      ? img2
                      : img1
                  }
                  alt="Shining Stars"
                  width="600"
                  height="250"
                />
                {/* <Image className="img1" src={img1} alt="Bugema University" width="600" height="150"/> */}
                </div>
            <div>
              {/* Section title on big screens */}
              <div className="mb-8 hidden md:block">
                <SectionTitle
                  title="ABOUT SHINING STARS NURSERY AND PRIMARY"
                  paragraph="Shining Stars Nursery and primary School was started in 2003 by the then Minister of Buganda Kingdom, later Member of parliament for Bamunanika constituency and currently State Minister for Higher Education, Owek. Hon. Dr. J. C. Muyingo."
                  // center
                  />
              </div>

              {/* Section title on small screens */}
              <div className="mb-8 block md:hidden text-sm">
                <SectionTitle
                  title="ABOUT SHINING STARS NURSERY AND PRIMARY"
                  paragraph="Shining Stars Nursery and primary School was started in 2003 by the then Minister of Buganda Kingdom, later Member of parliament for Bamunanika constituency and currently State Minister for Higher Education, Owek. Hon. Dr. J. C. Muyingo."
                  // center
                  />
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-14">
                <div>
                  <Link href="/whybugema"
                    className="animated-button flex rounded-md bg-primary/60 py-1 px-3 md:py-2 md:px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    onMouseEnter={() => setHoveredButton('whyBugema')}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                  <span className="icon-container">
                    <BiSolidPencil className="hidden md:block text-xl mx-2" />
                  </span>
                  Why Shining Stars
                
                  </Link>
                </div>
              <div>
                  <Link href="#"
                    className="animated-button flex rounded-md bg-primary/60 py-1 px-3 md:py-2 md:px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    onMouseEnter={() => setHoveredButton('studentLife')}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                  <span className="icon-container ">
                    <BiSolidPencil className="hidden md:block text-xl mx-2" />
                  </span>
                  School life
                  
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Features;