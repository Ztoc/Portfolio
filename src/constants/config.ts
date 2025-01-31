type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    p: string;
    h2: string;
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  };
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
    tech: TSection;
  };
};

export const config: TConfig = {
  html: {
    title: 'Senior Software Engineer',
    fullName: 'Jeremy R. Carter',
    email: 'carterjeremyryan@gmail.com',
  },
  hero: {
    name: 'Jeremy R. Carter',
    p: [
      'Passionate Software Engineer with 9+ years of experience',
      'Focusing on building optimized and scalable applications',
    ],
  },
  contact: {
    p: 'Get in touch',
    h2: 'Contact.',
    form: {
      name: {
        span: 'Your Name',
        placeholder: "What's your name?",
      },
      email: { span: 'Your Email', placeholder: "What's your email?" },
      message: {
        span: 'Your Message',
        placeholder: 'What do you want to say?',
      },
    },
  },
  sections: {
    about: {
      p: 'Introduction',
      h2: 'Overview.',
      content: `I am a passionate software engineer with 9+ years of experience, focusing on building optimized and scalable applications. I am a quick learner and always eager to take on new challenges and continuously expand my knowledge. Collaborating with teams to deliver high-quality software solutions is my passion.`,
    },
    experience: {
      p: 'What I have done so far',
      h2: 'Work Experience.',
    },
    feedbacks: {
      p: 'What others say',
      h2: 'Testimonials.',
    },
    works: {
      p: 'My work',
      h2: 'Projects.',
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
    tech: {
      p: 'What I use',
      h2: 'Technologies.',
    },
  },
};
