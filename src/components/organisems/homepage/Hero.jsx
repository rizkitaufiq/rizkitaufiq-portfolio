import PropTypes from "prop-types";
import Links from "../../particles/Links";
import TypingEffect from "../../../hooks/animated/TypingEffect";
import ButtonIcon from "../../atoms/button/ButtonIcon";
import ButtonSM from "../../atoms/button/ButtonSM";

const Hero = (props) => {
  const { id } = props;
  const messages = ["Full Stack Developer", "Web Developer", "Game Developer"];
  const typedMessage = TypingEffect(messages);
  return (
    <section id={id} className="lg:h-full text-primary w-full mt-3 lg:mt-7">
      <div className="lg:h-full">
        <div className="relative bottom-2 lg:-bottom-49 p-6 ">
          <Links />
          <div className="flex flex-column w-full lg:px-20 gap-3 lg:gap-1">
            <div className="flex justify-center items-center w-[50%]">
              <div className="mb-6 lg:mb-10 w-full max-w-sm lg:max-w-3xl ">
                <div className="font-bold text-[10px] lg:text-[30px] lg:mt-10">
                  <h1>
                    Hi, It`s <span className="text-secondary"> Rizki</span>
                  </h1>
                  <p className="text-secondary">
                    I`m a <span className="text-primary"> {typedMessage}</span>
                  </p>
                  <article>
                    <p className=" text-[8px] lg:text-[15px] text-justify">
                      Bachelor of computer graduate experience as a Full Stack
                      Developer, working with HTML, CSS, JavaScript, PHP and
                      MySQL. I attended a Full Stack Developer bootcamp program
                      to deepen my skills in web development and also has a
                      strong foundation in Back End development. Game developer
                      with hands-on experience in Unity and C#, creating
                      immersive 2D and 3D games for android and desktop. Have
                      teaching experience in subjects related to IT.
                    </p>
                  </article>
                </div>

                <div className="flex mt-2 lg:mt-5 gap-1 lg:gap-2">
                  <a href="https://www.linkedin.com/in/rizkitaufiqr">
                    <ButtonIcon
                      borderColor="border-secondary"
                      hoverBgColor="hover:bg-primary"
                    >
                      <i className="text-center bx bxl-linkedin-square text-sm lg:text-xl text-secondary"></i>
                    </ButtonIcon>
                  </a>

                  <a href="https://github.com/rizkitaufiq">
                    <ButtonIcon
                      borderColor="border-secondary"
                      hoverBgColor="hover:bg-primary"
                    >
                      <i className="text-center bx bxl-github text-sm lg:text-xl text-secondary"></i>
                    </ButtonIcon>
                  </a>

                  <a href="https://play.google.com/store/apps/developer?id=rzk+developer">
                    <ButtonIcon
                      borderColor="border-secondary"
                      hoverBgColor="hover:bg-primary"
                    >
                      <i className="text-center bx bxl-play-store text-sm lg:text-xl text-secondary"></i>
                    </ButtonIcon>
                  </a>

                  <a href="https://www.instagram.com/rizki_taufiqr/">
                    <ButtonIcon
                      borderColor="border-secondary"
                      hoverBgColor="hover:bg-primary"
                    >
                      <i className="text-center bx bxl-instagram text-sm lg:text-xl text-secondary"></i>
                    </ButtonIcon>
                  </a>
                </div>

                <div className="flex mt-2 lg:mt-5 gap-1 lg:gap-2">
                  <a href="https://drive.google.com/file/d/1lefP4axZlunAKk4gMO-P171l0BK-ZA8y/view?usp=sharing">
                    <ButtonSM
                      bgColor="bg-secondary"
                      hoverBgColor="hover:bg-default"
                      text="document"
                      hoverTextColor="hover:text-secondary"
                    />
                  </a>

                  <a href="https://wa.me/6282327243687">
                    <ButtonSM
                      bgColor="bg-default"
                      hoverBgColor="hover:bg-primary"
                      text="contact"
                      hoverTextColor="hover:text-secondary"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center w-[50%] -mt-10 lg:mt-14">
              <img
                src="images/homepage/content/personal/foto-3.JPG"
                alt="image"
                className="z-[1] w-[150px] h-[150px] lg:w-[400px] lg:h-[400px] rounded-full object-cover border-2 border-secondary shadow-[0_0_25px_5px_rgba(0,0,0,0.8)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  id: PropTypes.string,
};

export default Hero;
