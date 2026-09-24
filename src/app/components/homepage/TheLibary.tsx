import Link from "next/link";

const getLibaries = async()=>{
    const response = await fetch('https://api.abcz.workers.dev/api/fitlog')
    const data = await response.json();
    return data;
    
}
const TheLibary = async() => {
    
    const libraryData = await getLibaries();
    console.log(libraryData,'LibraryData')
    
    return (
         <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">

        {/* Heading */}
        <div className="mb-6">
          <h2 className="font-oswald text-3xl font-bold uppercase leading-none text-white sm:text-4xl">
            The Library
          </h2>

          <p className="mt-2 font-inter text-sm text-[#9CA3AF] sm:text-base">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Workout Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {libraryData.map((library:any) => (
            <Link href={'/'}
              key={library.id}
              className="overflow-hidden rounded-xl border border-[#2D313B] bg-[#0C0D10]"
            >

              {/* Image */}
              <div className="aspect-[1.8/1] w-full overflow-hidden">
                <img
                  src={library.image}
                  alt={library.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-5">

                {/* Muscle Groups */}
                <div className="flex flex-wrap gap-2">
                  {library.muscleGroups.map((muscle:any) => (
                    <span
                      key={muscle}
                      className="rounded-full bg-[#CCFF00] px-3 py-1 font-inter text-[10px] font-bold uppercase leading-none text-black"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>

                {/* Name */}
                <h3 className="mt-4 font-oswald text-lg font-bold uppercase leading-tight text-white">
                  {library.name}
                </h3>

                {/* Equipment */}
                <p className="mt-1 font-inter text-xs text-[#9CA3AF]">
                  {library.equipment}
                </p>

                {/* Divider */}
                <div className="my-4 h-px bg-[#1C1F26]" />

                {/* Meta information */}
                <div className="flex items-center gap-4 font-inter text-xs text-[#9CA3AF]">

                  {/* Duration */}
                  <div className="flex items-center gap-1.5">
                    <span>◷</span>
                    <span>{library.duration} min</span>
                  </div>

                  {/* Calories */}
                  <div className="flex items-center gap-1.5">
                    <span>♥</span>
                    <span>{library.caloriesBurned} kcal</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#9CA3AF]">☆</span>
                    <span>{library.rating}</span>
                  </div>

                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
    );
};

export default TheLibary;