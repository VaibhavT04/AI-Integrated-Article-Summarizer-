import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="Sumz_Logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/VaibhavT04")}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text mb-10">
        Summarize Articles with <br className="max-md:hidden"/>
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Simplify your reading with the best tool avaible on the
        internet which summarizes the huge boring articles into 
        a short concisely summarized easy to read structure.
      </h2>
    </header>
  );
};

export default Hero;
