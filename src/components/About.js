

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Brandon.
            <br className="hidden lg:inline-block" />Welcome to my portfolio as a developer!
          </h1>
          <p className="mb-8 leading-relaxed">          
            I am a highly motivated and passionate programmer who is constantly striving to develop the best software solutions.  
            {/* I am well-versed in the latest development technologies and tools, including React, Ruby on Rails, Django, Flask, and Testing. */}
          {/* <br />
            I am a creative problem-solver and an excellent communicator, with the ability to work independently and in a team environment. I am dedicated to producing quality work, and I am constantly striving to improve my technical and creative skills. I am committed to meeting deadlines and producing exceptional results.
          <br />
          Overall, I am a reliable and hardworking individual who loves programming and is always eager to take on new projects. I am excited to continue my career as a developer and create successful applications. */}
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
