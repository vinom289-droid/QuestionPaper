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
        <section className="min-h-screen bg-white">
            <Header showSearch={false} />

            <div className="max-w-3xl mx-auto px-6 py-9">

                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-[#550000]">
                        {department.name}
                    </h1>



                    <p className="mt-6 text-gray-600 text-lg">
                        Select a course to view the available subjects.
                    </p>
                </div>


                <div className="flex flex-col items-center gap-8">

                    {department.hasUG && (
                        <Link
                            to={`/dept/${department.id}/ug`}
                            className="group relative w-full border-b-2 border-yellow-500 max-w-md bg-gray-100 rounded-2xl shadow-md 
        transition-all duration-300 hover:shadow-[0_0_22px_rgba(0,0,0,0.30)] 
        p-6 pt-10 text-center overflow-hidden"
                        >

                            {/* Undergraduate Ribbon */}
                            <div className="absolute top-0 left-0">
                                <div className="bg-yellow-500 text-[#550000] px-3 py-1 font-semibold text-sm 
            transform -skew-x-12">
                                    <span className="block transform skew-x-12">
                                        Undergraduate
                                    </span>
                                </div>
                            </div>

                            <h2 className="text-[20px] font-bold text-[#550000]">
                                {department.ug.title}
                            </h2>

                            <div className="mt-4 inline-block px-5 py-3  bg-[#550000] 
        text-[13px] text-white font-bold 
        group-hover:bg-yellow-500 group-hover:text-[#550000] transition duration-300">
                                View Categories
                            </div>

                        </Link>
                    )}

                    {department.hasPG && (
                        <Link
                            to={`/dept/${department.id}/pg`}
                            className="group relative w-full border-b-2 border-yellow-500 max-w-md bg-white rounded-xl shadow-md 
        transition-all duration-300 hover:shadow-[0_0_22px_rgba(0,0,0,0.30)] 
         p-6 pt-10 text-center overflow-hidden"
                        >

                            {/* Postgraduate Ribbon */}
                            <div className="absolute top-0 left-0">
                                <div className="bg-yellow-500 text-[#550000] px-3 py-1 font-semibold text-sm 
            transform -skew-x-12">
                                    <span className="block transform skew-x-12">
                                        Postgraduate
                                    </span>
                                </div>
                            </div>

                            <h2 className="text-[20px] font-bold text-[#550000]">
                                {department.pg.title}
                            </h2>

                            <div className="mt-4 inline-block px-5 py-3  bg-[#550000] 
        text-[13px] text-white font-bold 
        group-hover:bg-yellow-500 group-hover:text-[#550000] transition duration-300">
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