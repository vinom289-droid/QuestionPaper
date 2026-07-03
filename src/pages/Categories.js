import Header from "../components/Header";
import { useParams } from "react-router-dom";
import data from "../data/Data";
import { Link } from "react-router-dom";
function Categories() {
    const { id, courseType } = useParams();

    const categories =
        courseType === "ug"
            ? [
                { name: "Languages", id: "languages" },
                { name: "Core Subjects", id: "core" },
                { name: "Allied Subjects", id: "allied" },
                { name: "Discipline Specific Elective", id: "dse" },
                { name: "Others", id: "others" }
            ]
            :[
                {name:"Core Subjects",id:"core"},
                {name:"Elective",id:"elective"},
                {name:"Others",id:"others"}
            ]

    const department = data.find(
        (dept) => dept.id === id
    );
    return (
        <section className="h-screen">
            <Header showSearch={false} />

            <div className="p-7 text-center">
                <h1 className="text-3xl font-bold text-[#550000]">
                    {department.name.toUpperCase()}
                </h1>

                <h2 className="mt-8 text-[16px] font-semibold">
                    Select Category of the Subject
                </h2>
            </div>
            <div className="flex flex-col gap-5 items-center">
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        to={`/dept/${id}/${courseType}/${category.id}`}
                        
                    >
                        <button className="px-10 py-3 rounded-xl bg-[#550000] font-semibold text-white hover:scale-105 transition hover:underline">
                            {category.name}
                        </button>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Categories;