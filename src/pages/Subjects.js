import { useParams } from "react-router-dom";
import data from "../data/Data";
import commonSubjects from "../data/CommonSubjects";
import Header from "../components/Header";
import { Link } from "react-router-dom";
function Subjects(){
    const { id, courseType, category } = useParams();

    const department = data.find(
        (dept) => dept.id === id
    );

    let subjects = [];

    if (category === "languages") {
        subjects = commonSubjects[courseType].languages;
    }
    else if (category === "others") {
        subjects = commonSubjects[courseType].others;
    }
    else if (category === "core") {
        subjects = department?.[courseType]?.core || [];
    }
    else if (category === "allied") {
        subjects = department?.[courseType]?.allied || [];
    }
    else if (category === "dse") {
        subjects = department?.[courseType]?.dse || [];
    }
    else if (category === "elective") {
        subjects = department?.[courseType]?.electives || [];
    }
    else if (category === "project") {
        subjects = department?.[courseType]?.project || [];
    }

    return (
        <section className="min-h-screen">

            <Header showSearch={false} />

            <div className="p-10 text-center">

                <h1 className="text-3xl font-bold text-[#550000]">
                    {department?.name.toUpperCase()}
                </h1>

                <h2 className="mt-8 text-xl font-semibold">
                    Select Subject
                </h2>

            </div>

            <div className="px-14">

                {subjects.length > 0 ? (

                    <table className="w-full border-collapse">

                        <thead>

                            <tr className="bg-[#550000] text-white">

                                <th className="border p-3 text-center">
                                    Course Code
                                </th>

                                <th className="border p-3 text-left pl-8 ">
                                    Subject
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {subjects.map((subject) => (

                                <tr
                                    key={subject.code}
                                    className="hover:bg-gray-200 cursor-pointer"
                                >

                                    <td className="border p-2 text-center ">

                                        <Link
                                            to={`/papers/${subject.code}`}
                                        >
                                            {subject.code}
                                        </Link>

                                    </td>

                                    <td className="border p-2 text-left pl-8">

                                        <Link
                                            to={`/papers/${subject.code}`}
                                        >
                                            {subject.name}
                                        </Link>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                ) : (

                    <h2 className="text-center font-light text-red-600 text-[20px]">
                         ⚠ No Subjects Available. Yet to be released
                    </h2>

                )}

            </div>

        </section>
    );
}
export default Subjects