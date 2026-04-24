import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "../data/projects";

export default function ProjectDetail() {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) return <div>Not found</div>;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen px-6 md:px-20 py-20 bg-black text-white"
        >
            <Link to="/" className="text-gray-300 hover:text-white transition">← Back</Link>

            <h1 className="text-5xl font-bold text-white mt-6">
                {project.title}
            </h1>

            <p className="text-gray-300 mt-4 max-w-2xl">
                {project.description}
            </p>

            <a href={project.link} target="_blank" className="inline-block mt-6 text-white font-semibold hover:text-gray-300 transition">
                Visit Site →
            </a>

            <div className="grid md:grid-cols-3 gap-10 mt-16">
                <div className="border border-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-4">Problem</h3>
                    <div className="space-y-2 text-gray-300">
                        {project.problem.map((p, i) => <p key={i}>• {p}</p>)}
                    </div>
                </div>

                <div className="border border-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-4">Solution</h3>
                    <div className="space-y-2 text-gray-300">
                        {project.solution.map((p, i) => <p key={i}>• {p}</p>)}
                    </div>
                </div>

                <div className="border border-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-4">Impact</h3>
                    <div className="space-y-2 text-gray-300">
                        {project.impact.map((p, i) => <p key={i}>• {p}</p>)}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}