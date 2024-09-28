import React from "react";
import { NavLink } from "react-router-dom";
import image2 from "../about/image2.jpeg";
import image1 from "../about/image 1.jpeg";
function About() {
  return (
    <div className="grid grid-cols-5 sm:max-lg:grid-cols-4 gap-x-8 gap-y-16 text-lg items-center  px-4 xl:px-0 my-6 bg-primary-900 text-white">
      <div className="col-span-full lg:col-span-3 bg-primary-900">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium text-center lg:text-left p-4">
          Welcome to Cape Jobs
        </h1>

        <div className="space-y-8 p-3">
          <p>
            Welcome to Cape Jobs! Whether you’re seeking your next career
            adventure or looking to hire top talent, you’re in the right place.
            Explore opportunities, connect with professionals, and take the next
            step toward your goals!
          </p>
          <p>
            For Job Seekers: Explore our vast array of job listings tailored to
            your skills and interests. Whether you're looking for full-time
            roles, part-time opportunities, or internships, we have something
            for everyone. Don’t forget to create a standout profile and upload
            your resume to increase your visibility to potential employers!
          </p>
        </div>
      </div>

      <div className="col-span-full sm:col-span-2 ">
        <img className=" p-9 rounded-2xl" src={image2}></img>
        {/* <Image
          src={about_1}
          placeholder="blur"
          quality={80}
          alt="Family sitting around a fire pit in front of cabin"
        /> */}
      </div>

      <div className="col-span-full sm:col-span-2">
        <img className=" p-9 rounded-sm " src={image1}></img>
        {/* <Image
          src={about_2}
          placeholder="blur"
          quality={80}
          alt="Family that manages The Wild Oasis"
        /> */}
      </div>

      <div className="col-span-full lg:col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium text-center lg:text-left">
          For Employers
        </h1>

        <div className="space-y-8 flex flex-col items-center">
          <p>
            For Employers: Find the perfect candidates with our robust search
            tools and customized recruitment solutions. Post job listings,
            manage applications, and connect with qualified talent in just a few
            clicks.
          </p>
          <p>
            Together, let’s pave the way for your success. Start your journey
            with us today!"
          </p>

          {/* <Link
            href="/about"
            className="self-center lg:self-start inline-block mt-4 bg-accent-500 px-8 py-2 text-primary-800 text-lg font-semibold rounded-full hover:bg-accent-600 transition-all"
          >
            Explore our luxury cabins
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default About;
