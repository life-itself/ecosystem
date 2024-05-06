const Hero = () => (
  <div className="relative isolate overflow-hidden pt-14">
        <div className="mx-auto max-w-6xl py-12 sm:py-16 lg:py-20 text-center">
        <img
      src="/img/dandelion-hasan-almasi-unsplash.jpg"
      alt=""
      className="absolute inset-0 -z-10 h-full w-full object-cover bg-slate-700 opacity-40"
        />
          <h2 className="text-4xl tracking-normal sm:text-4xl font-serif -mt-20 mb-20">
            A <span className="text-5xl">growing network</span> of individuals, organisations, communities, and initiatives
            are developing ideas, practices, and infrastructures for <span className="text-5xl">radical transformation</span>
          </h2>
          <h1 className="text-4xl font-medium tracking-wide sm:text-7xl py-7">
            A Second Renaissance <span className="text-8xl font-bold">ecosystem</span> is <span className="text-8xl font-bold">emerging</span>
          </h1>
          <p className="text-xl font-serif">
            This page introduces key resources for making sense of the ecosystem's key features.

          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 my-20">
            <button onClick={() => window.location.href = '#graphic'} className="bg-amber-500 hover:bg-teal-600 text-white font-bold tracking-wide py-2 px-4 rounded">
              What does it look like?
            </button>
            <button onClick={() => window.location.href = '#projects'} className="bg-amber-500 hover:bg-teal-600 text-white font-bold tracking-wide py-2 px-4 rounded">
              Who is part of it?
            </button>
            <button onClick={() => window.location.href = '#resources'} className="bg-amber-500 hover:bg-teal-600 text-white font-bold tracking-wide py-2 px-4 rounded">
              Learn more
            </button>
            <a href="https://lifeitself.org/get-involved"><button className="bg-amber-500 hover:bg-teal-600 text-white font-bold tracking-wide py-2 px-4 rounded">
              Get involved
            </button></a>
          </div>
        </div>
      </div>
);

const New = () => (
  <div id="next" className="overflow-hidden bg-white pt-12 sm:pt-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:ml-auto lg:pl-4 lg:pt-4">
          <div className="lg:max-w-lg">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            A new ecosystem for social change is gaining traction
            </h1>
            <p className="mt-6 text-2xl font-serif leading-8 text-gray-600">
        We are seeing a growing ecosystem of people and organisations who are recognising the need for a <span className="underline">major civilisational transition</span> from Modernity 
to a <span className="underline">new cultural paradigm</span>. They are choosing alternative ways of living and working to support that shift.
        <br></br><br></br>
        We’ve been mapping it since 2019, and know others who have been mapping it too. 
We’ve profiled over 200 organisations who are part of it, and outlined some of the ecosystem's key characteristics.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 my-20">
            <button onClick={() => window.location.href = '#projects'} className="bg-teal-600 hover:bg-teal-400 text-white font-bold tracking-wide py-2 px-4 rounded">
              See mapping projects
            </button>
          </div>
          </div>
        </div>
        <div className="flex items-start justify-end order-first py-20">
          <img
            src="/assets/Screenshot 2024-04-08 at 14.41.54.png"
            alt=""
            className="max-w-none md:-ml-4 lg:-ml-0 bg-yellow-200 w-full"
          />
        </div>
      </div>
    </div>
  </div>
);


const Graphic = () => (
  <div id="graphic">
  <figure className="mt-16">
          <img
            className="rounded-xl bg-gray-50 object-cover"
            src="/assets/changemaking-ecosystem-map.jpeg"
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-l leading-6 text-gray-500">
            <p className="mt-0.5 h-5 w-5 flex-none text-gray-300"/>
            This map is currently a work in progress. The final version and write-up will be available soon.
          </figcaption>
        </figure>
        </div>
);

const Potential = () => (
  <div className="bg-teal-50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold tracking-normal text-gray-900 sm:text-6xl mb-10">The ecosystem has ripening potential to make a real difference</h2>
        <p className="mt-6 text-2xl font-serif leading-8 text-gray-600">
        Change often happens on the margins. We think this ecosystem holds <span className="underline">powerful knowledge and perspectives</span>, which diverge from the mainstream <span className="italic">and</span> the progressive, on
what is needed in response to current crises – as well as <span className="underline">practical experience and learnings</span> in how to <span className="underline">cultivate deep-rooted change</span>.
        <br></br><br></br>
        Communities and individuals in the ecosystem have been innovating, combining, and experimenting with new processes, practices, theories, technologies, and infrastructures, 
drawing from a wide range of bodies of knowledge – from ancient and traditional wisdom, 
to contemporary science and technology. 
        </p>
      </div>
    </div>
);

const But = () => (
  <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 -mb-40">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold tracking-normal text-gray-900 sm:text-6xl mb-10">But at the moment it is difficult to discover, engage with, and make sense of</h2>
        <p className="mt-6 text-2xl font-serif leading-8 text-gray-600 pb-20 mb-20">
        The ecosystem is currently vague, complex, and sprawling. Some of the many names and terms associated with it are: <span className="underline">Integral, 
        Metamodern, Regenerative, Metacrisis-aware, Liminal Web, Game B</span>, and more.  
        <br></br><br></br>
        While there is growing recognition around certain thinkers, practices, and physical and virtual gathering places, it is hard to make sense of the breadth and variety. For instance, it has no clear name, language, or identity. <span className="underline">This 
        makes it hard to talk about</span>, both within the ecosystem and especially to others outside it. <span className="underline">This, in turn, makes effective and strategic collective action more difficult</span>.
        </p>
      </div>
    </div>
);

const Mapping = () => (
  <div className="bg-teal-50 px-6 py-24 sm:py-32 lg:px-8 -mb-40">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold tracking-normal text-gray-900 sm:text-6xl mb-10">Mapping the Emerging Ecosystem</h2>
        <p className="mt-6 text-2xl font-serif leading-8 text-gray-600">
        There may never be a clear, singular identity and direction for the ecosystem. However, we think that <span className="underline">mapping</span> supports <span className="underline">greater 
        understanding, interconnectedness, and coherence</span> within the ecosystem, as well as greater <span className="underline">visibility, accessibility, and credibility</span> outside it. 
        </p>
        <div className="mt-6 text-2xl font-serif leading-8 text-gray-600 text-left">
          <p className="-mb-10">Some of the questions currently animating our work are...</p>
          <br></br><br></br>
          <ul className="list-disc pb-10 mb-20">
            <li>What are the "boundaries" and "landmarks" of the space?</li> 
            <li>How is the ecosystem situated in relation to other communities, fields, or movements?</li>
            <li>Where might there be tensions and disagreements underlying high-level commonalities?</li>
            <li>How do we help ourselves and others to get a grasp on something that is complex, broad, and still emerging, without unduly imposing reductionist definitions?</li>
          </ul>
        </div>
      </div>
  </div>
);

const Resources = () => {
  return (
    <div id="resources" className="bg-white px-6 py-24 sm:py-32 lg:px-8 -mb-40">
    <h2 className="pb-10 text-4xl font-bold font-headings tracking-tight text-center">Key Resources</h2>
    <p className="pb-10 text-2xl font-serif text-gray-600 text-center">Essential resources for exploring and making sense of the emerging Second Renaissance ecosystem</p>
    <ul role="list" className="mx-auto my-6 !pl-0 grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <div className="group relative flex flex-col items-start gap-y-3 m-0 p-0">
        <div role="heading" className="text-base font-semibold text-primary">
          <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
          <a href="/publications/overview-ecosystem-names" className="flex flex-col gap-y-3 transition font-medium text-primary group-hover:text-secondary">
            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <img src="/assets/img/many-names-andrew-seaman-unsplash.jpg" className="z-10 w-full mb-2 aspect-video object-cover object-left m-0 rounded-lg shadow-sm" alt="Conscious Coliving"/>
            <span className="relative z-10">Many Names, One Ecosystem? Deciphering the Different Terms for the Second Renaissance Movement</span>
          </a>
        </div>
        <p className="relative z-10 text-sm text-primary/80 line-clamp-3">An overview of the most widely used names and terms for the ecosystem: meaning, history, and associated thinkers, perspectives, and communities.</p>
      </div>
      <div className="group relative flex flex-col items-start gap-y-3 m-0 p-0">
        <div role="heading" className="text-base font-semibold text-primary">
          <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
          <a href="/wiki/overview-mapping-efforts" className="flex flex-col gap-y-3 transition font-medium text-primary group-hover:text-secondary">
            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <img src="/assets/liminal-web.png" className="z-10 w-full mb-2 aspect-video object-cover object-left m-0 rounded-lg shadow-sm" alt="Conscious Coliving"/>
            <span className="relative z-10">Related Mapping Efforts</span>
          </a>
        </div>
        <p className="relative z-10 text-sm text-primary/80 line-clamp-3">What other efforts have been made to map who/what is part of the Second Renaissance ecosystem? Acknowledging related efforts by our peers not only to map the ecosystem itself but also to “map the mappers”.</p>
      </div>
      <div className="group relative flex flex-col items-start gap-y-3 m-0 p-0">
        <div role="heading" className="text-base font-semibold text-primary">
          <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
          <a href="/glossary" className="flex flex-col gap-y-3 transition font-medium text-primary group-hover:text-secondary">
            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <img src="/assets/img/glossary-romain-vignes-unsplash.jpg" className="z-10 w-full mb-2 aspect-video object-cover object-left m-0 rounded-lg shadow-sm" alt="Conscious Coliving"/>
            <span className="relative z-10">Glossary of Key Terms</span>
          </a>
        </div>
        <p className="relative z-10 text-sm text-primary/80 line-clamp-3">A (non-exhaustive) list of some of the key terminology used in the ecosystem. There are no doubt many more that should be added, so please get in touch with suggestions!</p>
      </div>
    </ul>
    </div>
  );
}

const Projects = () => {
  return (
    <div id="projects" className="bg-white px-6 py-24 sm:py-32 lg:px-8 -mb-40">
    <h2 className="pb-10 text-4xl font-bold font-headings tracking-tight text-center">Our Mapping Projects</h2>
    <p className="pb-10 text-2xl font-serif text-gray-600 text-center">We've been mapping the ecosystem since 2019. We've created directories of organisations who are part of it, outlined some key characteristics, and created visual maps.</p>
    <ul role="list" className="mx-auto my-6 !pl-0 grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <div className="group relative flex flex-col items-start gap-y-3 m-0 p-0">
        <div role="heading" className="text-base font-semibold text-primary">
          <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
          <a href="/ecosystem/pip" className="flex flex-col gap-y-3 transition font-medium text-primary group-hover:text-secondary">
            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <img src="/assets/Screenshot 2024-04-08 at 14.41.54.png" className="z-10 w-full mb-2 aspect-video object-cover object-left m-0 rounded-lg shadow-sm" alt="Conscious Coliving"/>
            <span className="relative z-10">The "PIP" Ecosystem (2021-22)</span>
          </a>
        </div>
        <p className="relative z-10 text-sm text-primary/80 line-clamp-3">Directory & visualisations of organisations taking "paradigmatic, integrative, and pragmatic" approaches to social change</p>
      </div>
      <div className="group relative flex flex-col items-start gap-y-3 m-0 p-0">
        <div role="heading" className="text-base font-semibold text-primary">
          <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
          <a href="/ecosystem/state-of-sensemaking-2020" className="flex flex-col gap-y-3 transition font-medium text-primary group-hover:text-secondary">
            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
            <img src="/assets/Social_Change_Ecosystem-1024x626.png" className="z-10 w-full mb-2 aspect-video object-cover object-left m-0 rounded-lg shadow-sm" alt="Conscious Coliving"/>
            <span className="relative z-10">State of Sensemaking (2019-20)</span>
          </a>
        </div>
        <p className="relative z-10 text-sm text-primary/80 line-clamp-3">A report outlining trends and buzzwords in the space & diagram of organisations grouped by core activities</p>
      </div>
    </ul>
    </div>
  );
}

const Page = () => {
  return (
    <>
      <Hero></Hero>
      <New></New>
      <Graphic></Graphic>
      <Potential></Potential>
      <But></But>
      <Mapping></Mapping>
      <Resources></Resources>
      <Projects></Projects>
    </>
  );
};

export function getStaticProps() {
  return {
    props: {
      meta: {
        layout: 'unstyled'
      }
    }
  }
}

export default Page;
