import Header from "../components/Header";
import { useParams, Link } from "react-router-dom";
import data from "../data/Data";

function Categories() {
    const { id, courseType } = useParams();

    const categories =
        courseType === "ug"
            ? [
                { name: "Languages", id: "languages" },
                { name: "Core Subjects", id: "core" },
                { name: "Allied Subjects", id: "allied" },
                { name: "Discipline Specific Elective", id: "dse" },
                { name: "Generic Elective", id: "elective" },
                { name: "Value Education", id: "ve" },
            ]
            : [
                { name: "Core Subjects", id: "core" },
                { name: "Elective", id: "elective" },
                { name: "Generic Elective", id: "electivePg" },
                { name: "Open Elective", id: "openElective" },
            ];

    const department = data.find((dept) => dept.id === id);

    return (
        <section className="min-h-screen bg-gray-50">
            <Header showSearch={false} />

            <div className="max-w-5xl mx-auto px-6 py-10">

                {/* Page Heading */}
                <div className="text-center border-b border-gray-200 pb-6">
                    <p className="text-sm text-gray-500 uppercase tracking-widest">
                        {courseType === "ug"
                            ? "Undergraduate Programme"
                            : "Postgraduate Programme"}
                    </p>

                    <h1 className="mt-2 text-4xl font-bold text-[#550000]">
                        {department.name}
                    </h1>

                    <p className="mt-3 text-gray-600">
                        Select a subject category to continue.
                    </p>
                </div>

                <div className="mt-10">

                    <div>

                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                to={`/dept/${id}/${courseType}/${category.id}`}
                            >
                                <div
                                    className="bg-white border border-gray-200 rounded-lg px-6 py-3 mb-3 flex items-center justify-between hover:border-[#550000]  hover:bg-gray-100 transition duration-200 cursor-pointer"
                                >
                                    <span className="text-lg font-medium text-gray-800">
                                        {category.name}
                                    </span>

                                    <span className="text-[#550000] text-xl font-bold">
                                        →
                                    </span>
                                </div>
                            </Link>
                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Categories;