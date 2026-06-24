const departments = [
    { id: "tamil", name: "Department of Tamil", shift: ["I", "II"], hasUG: true, hasPG: true },
    { id: "english", name: "Department of English", shift: ["I", "II"], hasUG: true, hasPG: true },
    { id: "artificialIntelligence", name: "Department of Artificial Intelligence", shift: ["I", "II"], hasUG: true, hasPG: true },
    { id: "biochemistry", name: "Department of Biochemistry ", shift: ["I", "II"], hasUG: true, hasPG: true },
    { id: "botany", name: "Department of Botany", shift: ["I", "II"], hasUG: true, hasPG: true },
    { id: "biotechnology", name: "Department of Biotechnology", shift: ["I", "II"], hasUG: true, hasPG: true },
    { id: "businessAdministration", name: "Department of Business Administration", shift: ["I", "II"], hasUG: true, hasPG: true },
    { id: "B.com Business analytics", name: "Department of B.com Business Analytics", shift: ["I", "II"], hasUG: true, hasPG: true },
    { id: "Commerce computer application", name: "Department of Commerce Computer Application", shift: ["I", "II"], hasUG: true, hasPG: true },
    { id: "B.com strategies finance", name: "Department of B.com strategies finance", shift: ["I", "II"], hasUG: true, hasPG: true },
    { id: "Chemistry", name: "Department of Chemistry ", shift: ["I", "II"], hasUG: true, hasPG: true },
    { id: "Commerce", name: "Department of Commerce  ", shift: ["I", "II"], hasUG: true, hasPG: true },
    { id: "Counselling psychology", name: "Department of Counselling psychology", shift: ["I", "II"], hasUG: true, hasPG: true },
    { id: "B.com Honours", name: "Department of B.com Honours", shift: ["I", "II"], hasUG: true, hasPG: true },
    {id: "computerScience", name: "Department of Computer science", shift: ["I", "II"], hasUG: true, hasPG: true, 
        ug:{
            core: [
                { code: "23UCS13CC01", name: "Core Course - 1: Python Programming" },
                { code: "23UCS23CC02", name: "Core Course - 2: Object Oriented Programming with C++" },
                { code: "23UCS23CC03", name: "Core Course - 3: Data Structures and Algorithms" },
                { code: "23UCS33CC04", name: "Core Course - 4: Discrete Mathematics" },
                { code: "23UCS33CC05", name: "Core Course - 5: Database Systems" },
                { code: "23UCS43CC06", name: "Core Course - 6: Java Programming" },
                { code: "23UCS43CC07", name: "Core Course - 7: Digital Computer Fundamentals and Microprocessor" },
                { code: "23UCS53CC08", name: "Core Course - 8: Web Application Development" },
                { code: "23UCS53CC09", name: "Core Course - 9: Operations Research" },
                { code: "23UCS63CC10", name: "Core Course - 10: Software Engineering" },
                { code: "23UCS63CC11", name: "Core Course - 11: Mobile Application Development" }
            ],

            allied: [
                { code: "23UCS13AC01",  name: "Allied Course - 1: Numerical Methods" },
                { code: "23UCS23AC02",  name: "Allied Course - 2: Statistical Methods" },
                { code: "23UCS33AO01A", name: "Allied Optional - 1: Applied Physics - 1" },
                { code: "23UCS33AO01B", name: "Allied Optional - 1: Principles of Electronics" },
                { code: "23UCS43AO02A", name: "Allied Optional - 2: Applied Physics-2" },
                { code: "23UCS43AO02B", name: "Allied Optional - 2: Communication Electronics" }
            ]
        },
        pg:{
            core:[
                { code: "", name: "" },
            ]
        }
    },
    { id: "Information Technology", name: "Department of Information Technology ", shift: ["I", "II"], hasUG: true, hasPG: true },
    { id: "Data Science", name: "Department of Data Science", shift: ["I", "II"], hasUG: true, hasPG: true },
    { id: "Electronics", name: "Department of Electronics", shift: ["I", "II"], hasUG: true, hasPG: true },
    { id: "Economics", name: "Department of Economics", shift: ["I", "II"], hasUG: true, hasPG: false },
    { id: "Human excellence", name: "Department of Human excellence", shift: ["I", "II"], hasUG: true, hasPG: true },
    { id: "French", name: "Department of French", shift: ["I", "II"], hasUG: true, hasPG: false },
    { id: "Hindi", name: "Department of Hindi", shift: ["I", "II"], hasUG: true, hasPG: true },
    { id: "Human resources management", name: "Department of Human resources management", shift: ["I", "II"], hasUG: true, hasPG: true },
    { id: "History", name: "Department of History ", shift: ["I", "II"], hasUG: true, hasPG: true },
    { id: "Mathematics", name: "Department of Mathematics", shift: ["I", "II"], hasUG: true, hasPG: true },
    { id: "Physics", name: "Department of Physics", shift: ["I", "II"], hasUG: true, hasPG: true },
    { id: "Sanskrit", name: "Department of Sanskrit", shift: ["I", "II"], hasUG: true, hasPG: true },
    { id: "Software development and system administration", name: "Department of Software development and system administration", shift: ["I", "II"], hasUG: true, hasPG: true },
    { id: "Statistics", name: "Department of Statistics", shift: ["I", "II"], hasUG: true, hasPG: true },
    { id: "Viscom technology", name: "Department of Viscom technology", shift: ["I", "II"], hasUG: true, hasPG: true },
]

export default departments