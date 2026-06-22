import sjc from '../assest/sjcLogo.png'
function Header({search,setSearch,showSearch = true}) {
    return (
        <section className="bg-[#550000] relative w-full h-24">
                <div className="flex items-center gap-4 ">
                    <img src={sjc} alt="sjc logo" className='w-20 h-20 object-cover ' />
                    <div className='text-center'>
                        <h1 className="text-white text-[28px] font-bold whitespace-nowrap ">St. Joseph's College </h1>
                        <h1 className="font-medium text-yellow-300">(Autonomous)</h1>
                        <h1 className="text-white font-medium text-[12px]">Tiruchirapalli, TamilNadu, India.</h1>
                    </div>
                    {showSearch && (
                        <div className="flex flex-col items-center justify-center gap-2">
                            <h1 className='text-yellow-300 font-semibold text-center text-[15px]'>
                                Previous Year Question Papers
                            </h1>

                            <input
                                type="text"
                                placeholder="Search your department"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            className="ml-4 border p-1 w-96 rounded-lg text-[13px] font-semibold"
                            />
                        </div>
                    )}
                </div>
        </section>
    )
} 
export default Header