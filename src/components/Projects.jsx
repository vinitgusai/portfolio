import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { stagger } from "../utils/animations";
import projects from "../data/projects";

export default function Projects() {
    const ref = useRef([]);

    useEffect(() => {
        if (ref.current && ref.current.length > 0) {
            stagger(ref.current.filter(Boolean));
        }
    }, []);

    return (
        <section className="px-6 md:px-20 py-20 bg-black">
            <h2 className="text-3xl mb-10 text-white font-bold">Selected Work</h2>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((p, i) => (
                    <Link
                        key={p.slug}
                        to={`/project/${p.slug}`}
                        ref={(el) => (ref.current[i] = el)}
                        className="border border-gray-800 p-6 rounded-xl hover:border-white transition duration-300 bg-[#0a0a0a]"
                    >
                        <h3 className="text-xl font-semibold text-white">
                            {p.title}
                        </h3>

                        <p className="text-gray-300 mt-3">
                            {p.description}
                        </p>

                        <span className="text-sm text-gray-400 mt-4 block">
                            View Case Study →
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}