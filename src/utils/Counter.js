import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({ from, to, duration }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const controls = animate(count, to, { duration: duration });
    return controls.stop;
  }, [isInView]);


  return (
    <motion.p
      ref={ref}
     
      whileInView={{
        opacity: 1,
      }}
      className="
 font-bold  text-4xl md:text-5xl
 "
    >
      {rounded}
    </motion.p>
  );
};
export default Counter;
