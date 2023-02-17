import './header.css'
import { todoAnimation } from '../../framer_motion/framer_motion';
import {motion} from 'framer-motion'
const Header = () => {
  return (
    <motion.div className="header" variants={todoAnimation} initial="initial" animate="animate">
      <h1>What's on the agenda today? </h1>
    </motion.div>
  );
};

export default Header;
