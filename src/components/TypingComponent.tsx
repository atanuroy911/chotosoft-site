import { TypeAnimation } from 'react-type-animation';

const TypingComponent = ({text}: {text: any}) => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        text[0],
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        text[1],
        1000,
        text[2],
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className={"text-sm text-start lg:text-lg"}
    />
  );
};

export default TypingComponent;