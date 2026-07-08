import { Link } from "react-router-dom";
import data from "../data/Data";

function Third({ search }) {
    const filteredDepartments = data.filter((dept) =>
        dept.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="w-full min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 py-10">

                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-[#550000]">
                        Departments
                    </h1>

                    <p className="text-gray-600 mt-2">
                        Select a department to access previous year question papers.
                    </p>
                </div>

                {filteredDepartments.length > 0 ? (
                    <div className="space-y-2">

                        {filteredDepartments.map((dept) => (
                            <Link
                                key={dept.id}
                                to={`/dept/${dept.id}`}
                                className="block"
                            >
                                <div
                                    className="  bg-white border border-gray-200 rounded-lg px-6 py-4 transition duration-200 hover:border-[#550000] hover:bg-[#faf7f7]"
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h2 className="text-lg font-semibold text-gray-800">
                                                {dept.name}
                                            </h2>

                                        </div>

                                        <div className="flex gap-2">

                                            {dept.shift.map((shift) => (
                                                <span
                                                    key={shift}
                                                    className=" px-4 py-1 text-sm font-medium border border-[#550000] text-[#550000] rounded-full"
                                                >
                                                    Shift {shift}
                                                </span>
                                            ))}

                                        </div>

                                    </div>
                                </div>
                            </Link>
                        ))}

                    </div>
                ) : (

                    <div className="bg-white border border-gray-200 rounded-lg py-12 text-center">

                        <h2 className="text-2xl font-semibold text-[#550000]">
                            No Department Found
                        </h2>

                        <p className="text-gray-600 mt-2">
                            We couldn't find any department matching your search.
                        </p>

                    </div>

                )}

            </div>
        </section>
    );
}

export default Third;