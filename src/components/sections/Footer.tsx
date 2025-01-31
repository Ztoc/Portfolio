import { motion } from 'framer-motion';
import { SectionWrapper } from '../../hoc';
import { styles } from '../../constants/styles';
import { fadeIn } from '../../utils/motion';
import Linkedin from '../../assets/linkedin.svg';
import Github from '../../assets/github.svg';
import Gmail from '../../assets/gmail.svg';
import Skype from '../../assets/skype.svg';
import { config } from '../../constants/config';

const Footer = () => {
  return (
    <div className={`${styles.padding} relative z-0 mx-auto max-w-7xl`}>
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="flex flex-col items-center justify-center gap-4"
      >
        <p className={`${styles.sectionSubText} text-center`}>Connect with me</p>
        <div className="flex flex-row gap-6 md:gap-10">
          <a
            href="https://www.linkedin.com/in/jeremyrcarter"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img src={Linkedin} alt="Linkedin" width={30} height={30} />
          </a>
          <a href={`mailto:${config.html.email}`} className="transition-transform hover:scale-110">
            <img src={Gmail} alt="Gmail" width={30} height={30} />
          </a>
          <a
            href="skype:live:.cid.5d9e402b783ee9ff?chat"
            className="transition-transform hover:scale-110"
          >
            <img src={Skype} alt="Skype" width={30} height={30} />
          </a>
          <a
            href="https://github.com/ztoc"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img src={Github} alt="Github" width={30} height={30} />
          </a>
        </div>
        <p className="mt-4 text-secondary text-[14px]">
          © {new Date().getFullYear()} {config.html.fullName}. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Footer, '');
