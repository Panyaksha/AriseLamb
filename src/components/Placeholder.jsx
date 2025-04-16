// components/Hero.jsx
const Placeholder = ({title, desc, button}) => {
    return (
      <section className="flex items-center justify-start bg-white text-black min-h-screen">
        <div className="p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl mb-6">
            {desc}
          </p>
          <button className="px-6 py-3 bg-white text-black rounded-full border border-black/15">
            {button}
          </button>
        </div>
      </section>
    );
  };
  
export default Placeholder;  