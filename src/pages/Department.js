import { Link, useParams } from "react-router-dom";
import data from "../data/Data";
import Header from "../components/Header";

function Department() {
    const { id } = useParams();

    const department = data.find((dept) => dept.id === id);

    if (!department) {
        return (
            <h1 className="text-center mt-10 text-2xl font-semibold text-red-700">
                Department Not Found
            </h1>
        );
    }

    return (
        <section className="min-h-screen bg-gray-100">
            <Header showSearch={false} />

            <div className="max-w-5xl mx-auto px-6 py-12">

                {/* Department Title */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-[#550000]">
                       
                    </h1>

                    

                    <p className="mt-5 text-gray-600 text-lg">
                        Select a course to view the available subjects and previous year question papers.
                    </p>
                </div>

                {/* Course Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {department.hasUG && (
                        <Link
                            to={`/dept/${department.id}/ug`}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border hover:border-[#550000] border-gray-200 p-8 text-center group"
                        >
                            <h2 className="text-2xl font-bold text-[#550000]">
                                {department.ug.title}
                            </h2>

                            <p className="mt-3 text-gray-600">
                                Undergraduate Programme
                            </p>

                            <div className="mt-6 inline-block px-5 py-2 rounded-lg bg-[#550000] text-white font-medium">
                                View Categories
                            </div>
                        </Link>
                    )}

                    {department.hasPG && (
                        <Link
                            to={`/dept/${department.id}/pg`}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300  hover:border-[#550000] border border-gray-200 p-8 text-center group"
                        >
                            <h2 className="text-2xl font-bold text-[#550000] group-hover:text-red-800">
                                {department.pg.title}
                            </h2>

                            <p className="mt-3 text-gray-600">
                                Postgraduate Programme
                            </p>

                            <div className="mt-6 inline-block px-5 py-2 rounded-lg bg-[#550000] text-white font-medium">
                                View Categories
                            </div>
                        </Link>
                    )}

                </div>

            </div>
        </section>
    );
}

export default Department;