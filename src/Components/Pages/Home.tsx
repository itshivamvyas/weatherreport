function Home() {
  return (
    <div className="bg-black/80 p-4 border-x-2 text-white min-h-screen min-w-screen flex flex-col gap-6">

      <div>
        <p className="text-2xl font-semibold">Sondala Faridpur</p>
        </div>

        <div className="text-9xl mx-auto">29°</div>

        <div className="mx-auto font-semibold">Clear 21°/37° Air Quality :93 - Satisfactory</div>

        <div className="w-full rounded-3xl p-3 ps-6 bg-black/80 font-semibold">High pollen count</div>

        <div className="w-full rounded-xl p-3 bg-black/80 font-semibold overflow-x-scroll">
          <ul className="flex gap-3">
            <li className="flex flex-col items-center justify-center"><p>Now</p><p>29°</p></li>
            <li className="flex flex-col items-center justify-center"><p>10:00am</p><p>29°</p></li>
            <li className="flex flex-col items-center justify-center"><p>11:00am</p><p>30°</p></li>
            <li className="flex flex-col items-center justify-center"><p>12:00pm</p><p>30°</p></li>
            <li className="flex flex-col items-center justify-center"><p>01:00pm</p><p>31°</p></li>
            <li className="flex flex-col items-center justify-center"><p>02:00pm</p><p>30°</p></li>
            <li className="flex flex-col items-center justify-center"><p>03:00pm</p><p>32°</p></li>
            <li className="flex flex-col items-center justify-center"><p>04:00pm</p><p>28°</p></li>
            <li className="flex flex-col items-center justify-center"><p>05:00pm</p><p>27°</p></li>
            <li className="flex flex-col items-center justify-center"><p>06:00pm</p><p>22°</p></li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center w-full rounded-xl p-3 bg-black/80">
          <p className="font-semibold">Tommarow's Temperature</p>
          <p className="font-extralight text-sm">Almost the smae as today</p>
          <p className="font-bold">.</p>
        </div>

        <div className="flex flex-col gap-3 w-full rounded-xl p-3 bg-black/80 font-semibold">
          <ul className="flex flex-col gap-3">
            <li className="flex items-center justify-between"><div>23/04 Today</div> <div>21°/37°</div></li>
            <li className="flex items-center justify-between"><div>24/04 Tomorrow</div> <div>21°/38°</div></li>
            <li className="flex items-center justify-between"><div>25/04 Thu</div> <div>22°/39°</div></li>
            <li className="flex items-center justify-between"><div>26/04 Fri</div> <div>24°/40°</div></li>
            <li className="flex items-center justify-between"><div>27/04 Sat</div> <div>23°/39°</div></li>
            <li className="flex items-center justify-between"><div>28/04 Sun</div> <div>23°/39°</div></li>
            <li className="flex items-center justify-between"><div>29/04 Mon</div> <div>23°/40°</div></li>
          </ul>
          <div className="flex items-center justify-center w-4/6 rounded-3xl p-3 ps-6 bg-slate-600/20 font-semibold mx-auto">15-day weather forecast</div>
        </div>

        <div className="w-full rounded-xl p-3 bg-black/80">
          <p className="font-extralight border-b-2 py-2 border-white/20">Air quality</p>
          <p className="font-extralight text-sm">Almost the smae as today</p>
          <p className="font-bold">.</p>
        </div>

    </div>
  );
}

export default Home;
