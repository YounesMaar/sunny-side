import {
  dataContent,
  navLinks,
  skillsContent,
  testimonials,
} from "./lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Header from "./components/header";

const App = () => {
  return (
    <div className="w-full h-full">
      <Header />
      <div id="content">
        {dataContent.map(({ order: ord, description, link, src, title }, i) => (
          <div key={i} className="md:grid md:grid-cols-2">
            <div
              className="flex flex-col justify-center items-center px-5 md:px-10 space-y-4 w-full text-center py-10 md:py-0"
              style={{ order: ord }}
            >
              <h2 className="font-bold text-2xl">{title}</h2>
              <p className="w-2/3 mx-auto"> {description}</p>

              <a className="hover:underline" href={link}>
                Learn more
              </a>
            </div>
            <img
              style={{ order: 2 }}
              src={src}
              alt={`image-${i}`}
              className="object-cover w-full"
            />
          </div>
        ))}
      </div>
      <div id="skills">
        <div className="md:grid md:grid-cols-2">
          {skillsContent.map(({ description, src, title }, i) => (
            <div key={i} className="relative">
              <img
                src={src}
                alt={`skill-${i}`}
                height={400}
                className="w-full"
              />
              <div className="flex flex-col justify-center items-center absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-center w-full md:w-fit">
                <h2 className="text-lg md:text-xl font-bold">{title}</h2>
                <p className="text-sm px-3">{description} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="testimonials">
        <div className="container mx-auto py-6">
          <h2 className="text-xl uppercase text-gray-400 font-bold text-center">
            client testimonials
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            {testimonials.map(({ description, name, profile, niche }, i) => (
              <div
                key={i}
                className="flex flex-col justify-center items-center gap-5 py-5 px-2 text-center"
              >
                <Avatar className="w-20 h-20">
                  <AvatarImage src={profile} alt={`profile-${i}`} />
                  <AvatarFallback>
                    {description.substring(1, 3).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <p className="text-sm">{description} </p>
                <div className="flex-flex-col items-center justify-center">
                  <h2 className="m-0 font-bold">{name} </h2>
                  <h3 className="text-sm text-gray-400">{niche} </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="gallery">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          <img
            src="/assets/images/desktop/image-gallery-milkbottles.jpg"
            alt=""
          />
          <img src="/assets/images/desktop/image-gallery-cone.jpg" alt="" />
          <img
            src="/assets/images/desktop/image-gallery-sugarcubes.jpg"
            alt=""
          />
          <img src="/assets/images/desktop/image-gallery-orange.jpg" alt="" />
        </div>
      </div>
      <div
        id="footer"
        className="bg-green-500/40 flex flex-col items-center justify-center py-8 gap-5 h-[40vh]"
      >
        <img
          className="cursor-pointer"
          src="/assets/images/logo.svg"
          alt="logo"
          width={200}
        />
        <div className="md:flex hidden  justify-between items-center space-x-8">
          {navLinks.map(({ link, path }, i) => (
            <a
              className="cursor-pointer text-green-800 text-sm hover:underline"
              key={i}
              href={path}
            >
              {link}
            </a>
          ))}
        </div>
        <div className="flex mt-10 justify-center items-center gap-4">
          <a href="/facebook">
            <img src="/assets/images/icon-facebook.svg" alt="facebook" />
          </a>
          <a href="/instagram">
            <img src="/assets/images/icon-instagram.svg" alt="instagram" />
          </a>
          <a href="/twitter">
            <img src="/assets/images/icon-twitter.svg" alt="twitter" />
          </a>
          <a href="pinterest">
            <img src="/assets/images/icon-pinterest.svg" alt="pintrest" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
