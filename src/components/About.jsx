import { motion as Motion } from "framer-motion";
import { aboutInfo, assets } from "../assets/assets";
export const About = () => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-0 px-6">
        {/* Heading  */}
        <h2 className="text-3xl font-bold text-center mb-4">
          About<span className="text-blue">Me</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Get to know about my background and passion
        </p>
        {/* image + my journey */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* image */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <Motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full h-full object-cover"
              src={assets.aboutImg}
              alt="Profile"
            />
          </div>
          {/* Text content */}
          <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-gray-300 mb-6">
                I’m Sagar Ingle, a passionate programmer with a love for
                learning and problem-solving. A quick learner and self-driven, I
                thrive on exploring new technologies and expanding my skills. My
                core expertise lies in JavaScript, and I enjoy building
                solutions with this versatile language.
              </p>
              <p className="text-gray-300 mb-12">
                I am deeply interested in web application development and love
                contributing to making the web more accessible and dynamic. I'm
                open to job opportunities that align with my skills and
                interests.
              </p>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="text-blue text-4xl mb-4">
                      <data.icon />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
                    <p className="text-gray-400">{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Motion.div>
        </div>
      </div>
    </Motion.div>
  );
};
