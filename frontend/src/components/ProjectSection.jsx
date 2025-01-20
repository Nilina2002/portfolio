import React from 'react';

const projects = [
    {
        title: 'Project One',
        description: 'This is a description of project one.',
        link: 'http://example.com/project-one'
    },
    {
        title: 'Project Two',
        description: 'This is a description of project two.',
        link: 'http://example.com/project-two'
    },
    {
        title: 'Project Three',
        description: 'This is a description of project three.',
        link: 'http://example.com/project-three'
    },
    {
        title: 'Project Four',
        description: 'This is a description of project four.',
        link: 'http://example.com/project-four'
    },
    {
        title: 'Project Five',
        description: 'This is a description of project five.',
        link: 'http://example.com/project-five'
    },
    {
        title: 'Project Six',
        description: 'This is a description of project six.',
        link: 'http://example.com/project-six'
    }

];

const ProjectSection = () => {
    return (
        <section className="py-12 mt-64 flex flex-col items-center justify-center bg-amber-600">
            <h2 className="text-5xl font-bold p-5 mb-8 text-white whitespace-nowrap">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                        <p className="text-gray-700 mb-4">{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectSection;