import Header from "../components/Header";
import { useParams } from "react-router-dom";
import data from "../data/Data";
function Categories() {
    const { id, courseType } = useParams();

    const categories =
        courseType === "ug"
            ? ["Languages", "Core Subjects", "Allied Subjects", "Others"]
            : ["Core Subjects", "Electives", "Project", "Others"];

    const department = data.find(
        (dept) => dept.id === id
    );
    return (
        <section className="h-screen">
            <Header showSearch={false} />

            <div className="p-10 text-center">
                <h1 className="text-3xl font-bold text-[#550000]">
                    {department.name.toUpperCase()}
                </h1>

                <h2 className="mt-8 text-xl font-semibold">
                    Select Category of the Subject
                </h2>
            </div>
            <div className="flex gap-8 justify-center">
                {categories.map((category) => (
                    <button
                        key={category}
                        className="px-10 py-5 rounded-xl bg-[#550000] font-semibold text-white hover:scale-105 transition"
                    >
                        {category}
                    </button>
                ))}
            </div>
        </section>
    );
}

export default Categories;