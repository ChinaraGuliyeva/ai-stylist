import type { JSX } from "react";

export const aboutHeading = "About me";
export const dashBoardHeading = "AI stylist";

export const dashBoardText: JSX.Element = (<>
  <p>An AI-powered project for clothing recognition and wardrobe matching.</p>

  <p>This is a purely educational project with no commercial intent. The idea and implementation are entirely my own. In the past, I’ve often bought unusual pieces only to struggle with fitting them into my wardrobe. ChatGPT actually helped me with that. At some point, I decided to look into how neural networks are trained and integrated into projects. I wanted to see if I could go beyond pre-set boundaries and embed my own taste into a model at a deeper level than just prompting. </p>

  <p>Having experienced both the strengths and weaknesses of AI as a user, I am now excited to explore them from a developer's perspective.

  </p>

  <p><a href="https://github.com/ChinaraGuliyeva/ai-stylist">Project Repository </a>. Feel free to contact me via email at <a href="mailto:ichinara@gmail.com">ichinara@gmail.com</a> if you have any questions. </p>
</>)

export const aboutText: JSX.Element = (
  <>
    <p>
      My name is Chinara Guliyeva. I am a Full-Stack Developer. You can find my LinkedIn {' '}
      <a
        href="https://www.linkedin.com/in/chinara-guliyeva/"
        target="_blank"
        rel="noreferrer"
      >
        here
      </a>.
    </p>
    <p>
      I have a deep passion for both exact sciences and the arts—specifically literature, painting, and music.
      The idea for this project was born at the intersection of these interests.
    </p>
    <p>
      I am inspired by the polymaths of the past, like Leonardo da Vinci, who seamlessly
      combined a mastery of engineering with profound artistic skill. I strive to be a versatile
      specialist—not just focusing on one niche while ignoring the rest, but harmoniously developing
      in all areas that resonate with me. To me, this synergy is what sparks creative imagination,
      drive, and a genuine passion for life and invention.
    </p>
  </>
);