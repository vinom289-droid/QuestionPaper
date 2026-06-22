import { Link, useParams } from "react-router-dom";
import data from "../data/Data";
import Header from "../components/Header";
function Department() {
    const { id } = useParams();

    const department = data.find((dept) => dept.id === id);

    if (!department) {
        return (
            <h1 className="text-center mt-10">
                Department Not Found
            </h1>
        );
    }

    return (
        <section className="h-screen">
            <Header showSearch={false} />
            <div className="p-10 text-center">
                <h1 className="text-3xl font-bold text-[#550000]">{department.name.toUpperCase()}</h1>

                <h2 className="mt-8 text-xl font-semibold">Select Course Type</h2>

                <div className="flex gap-6 mt-6 justify-center">

                    {department.hasUG && (
                        <Link to={`/dept/${department.id}/ug`}>
                        <button className="px-10 py-5 rounded-xl bg-[#550000] font-semibold text-white hover:scale-105 transition">
                            UG
                        </button>
                        </Link>
                    )}

                    {department.hasPG && (
                        <Link to={`/dept/${department.id}/pg`}>
                        <button className="px-10 py-5 rounded-xl bg-[#550000] font-semibold text-white hover:scale-105 transition">
                            PG
                        </button>
                        </Link>
                    )}

                </div>
            </div>
        </section>
    );
}

export default Department;