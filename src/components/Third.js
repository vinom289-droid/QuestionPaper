import { Link } from "react-router-dom"
import data from "../data/Data";
function Third({ search }) {
    const filteredDepartments = data.filter((dept) =>
        dept.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <section className="w-full h-fit  bg-white">
            <div className='px-32 py-10'>
                <ul className="font-semibold text-[#550000]">
                    {filteredDepartments.length > 0 ? (filteredDepartments.map((dept) => (
                        <li
                            className="border-gray-200 mx-auto transition-all relative duration-100 px-4 border p-1 mb-2 rounded-xl hover:bg-[#550000] hover:text-white hover:scale-[1.04]"
                            key={dept.id}
                        >
                            <Link to={`/dept/${dept.id}`} className="flex items-center gap-4 w-full">
                                <div className="flex-1">
                                    {dept.name}
                                </div>
                                <div className="flex gap-1 shrink-0">
                                    {dept.shift.map((shift) => (
                                        <span
                                            key={shift}
                                            className="text-xs px-4 py-1 rounded-lg bg-gray-200 text-[#550000]"
                                        >
                                            {shift}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        </li>
                    ))) : (
                        <div className="p-6 text-center">
                            <h2 className="text-xl font-semibold text-[#550000]">
                                ⚠ No Department Found
                            </h2>

                            <p className="text-gray-600 mt-2">
                                We couldn't find any department matching your search.
                            </p>
                        </div>
                    )}
                </ul>
            </div>
        </section>
    )
}
export default Third