import {
  IconCar,
  IconChevronRight,
  IconDotsCircleHorizontal,
  IconDroplet,
  IconEyeCheck,
  IconMapPin,
  IconMoodEmpty,
  IconMotorbike,
  IconPlane,
  IconSettings,
  IconSpider,
  IconSunrise,
  IconSunset,
  IconTemperature,
  IconUvIndex,
  IconWash,
  IconWind,
  IconWindElectricity,
} from "@tabler/icons-react";

function Home() {
  return (
    <div>
      <div className="flex items-center justify-between fixed text-white p-4 w-full max-w-[458px] mx-auto bg-shade-1 z-50">
        <p className="text-2xl font-semibold">Sondala Faridpur</p>
        <IconMapPin className="cursor-pointer bg-transparent/20 rounded-full p-2 size-10 hover:bg-transparent/40" />
        <IconDotsCircleHorizontal className="cursor-pointer bg-transparent/20 rounded-full p-2 size-10 hover:bg-transparent/40" />
        <IconSettings className="cursor-pointer bg-transparent/20 rounded-full p-2 size-10 hover:bg-transparent/40" />
      </div>

      <div className=" p-4 pt-20 text-white min-h-screen min-w-screen flex flex-col gap-6 bg-shade-1">
        <div className="text-9xl mx-auto relative">
          29
          <p className="absolute top-0 -right-11 opacity-60">°</p>
        </div>

        <div className="flex flex-col items-center justify-center font-semibold">
          <p>Clear 21°/37°</p>
          <p>Air Quality :- 93 - Satisfactory</p>
        </div> 

        <div className="w-full rounded-3xl p-3 ps-6 bg-transparent/20 font-semibold flex gap-4 items-center">
          <IconSettings className="cursor-pointer bg-transparent/20 rounded-full p-2 size-9 hover:bg-transparent/40" />
          High pollen count
        </div>

        <div className="p-3 bg-transparent/20 w-full rounded-xl">
          <div className="font-semibold overflow-x-scroll no-scrollbar">
            <ul className="flex gap-5">
              <li className="flex flex-col items-center justify-center">
                <p>Now</p>
                <p>29°</p>
              </li>
              <li className="flex flex-col items-center justify-center">
                <p>10:00am</p>
                <p>29°</p>
              </li>
              <li className="flex flex-col items-center justify-center">
                <p>11:00am</p>
                <p>30°</p>
              </li>
              <li className="flex flex-col items-center justify-center">
                <p>12:00pm</p>
                <p>30°</p>
              </li>
              <li className="flex flex-col items-center justify-center">
                <p>01:00pm</p>
                <p>31°</p>
              </li>
              <li className="flex flex-col items-center justify-center">
                <p>02:00pm</p>
                <p>30°</p>
              </li>
              <li className="flex flex-col items-center justify-center">
                <p>03:00pm</p>
                <p>32°</p>
              </li>
              <li className="flex flex-col items-center justify-center">
                <p>04:00pm</p>
                <p>28°</p>
              </li>
              <li className="flex flex-col items-center justify-center">
                <p>05:00pm</p>
                <p>27°</p>
              </li>
              <li className="flex flex-col items-center justify-center">
                <p>06:00pm</p>
                <p>22°</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full rounded-xl p-3 bg-transparent/20">
          <p className="font-semibold text-lg">Tommarow's Temperature</p>
          <p className="text-sm">Almost the smae as today</p>
          <p className="font-bold">.</p>
        </div>

        <div className="flex flex-col gap-5 w-full rounded-xl p-3 bg-transparent/20 font-semibold">
          <ul className="flex flex-col gap-5">
            <li className="flex items-center justify-between">
              <div>23/04 &nbsp; Today</div> <div>21°/37°</div>
            </li>
            <li className="flex items-center justify-between">
              <div>24/04 &nbsp; Tomorrow</div> <div>21°/38°</div>
            </li>
            <li className="flex items-center justify-between">
              <div>25/04 &nbsp; Thu</div> <div>22°/39°</div>
            </li>
            <li className="flex items-center justify-between">
              <div>26/04 &nbsp; Fri</div> <div>24°/40°</div>
            </li>
            <li className="flex items-center justify-between">
              <div>27/04 &nbsp; Sat</div> <div>23°/39°</div>
            </li>
            <li className="flex items-center justify-between">
              <div>28/04 &nbsp; Sun</div> <div>23°/39°</div>
            </li>
            <li className="flex items-center justify-between">
              <div>29/04 &nbsp; Mon</div> <div>23°/40°</div>
            </li>
          </ul>
          <div className="flex items-center justify-center w-3/4 rounded-3xl p-3 ps-6 bg-transparent/20 font-semibold mx-auto hover:bg-transparent/40">
            15-day weather forecast
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full rounded-xl p-3 bg-transparent/20">
          <div className="py-2 border-white/20 flex justify-between items-center">
            <p className="text-l">Air quality</p>
            <div>
              <IconChevronRight className="cursor-pointer bg-transparent/20 rounded-full p-2 size-10 hover:bg-transparent/40" />
            </div>
          </div>
          <hr />
          <h1 className="text-xl">Satisfactory 75</h1>
          <p className="text-xs">
            Air Quality is acceptable. However, unusually sensitive ....
          </p>
        </div>

        <div className="flex gap-3 justify-between">
          <div className="flex flex-col justify-between items-start p-3 bg-transparent/20 rounded-xl w-32 h-28">
            <div>
              <IconUvIndex />
            </div>
            <div className="text-xs">UV</div>
            <div className="font-semibold text-lg">1 Very weak</div>
          </div>
          <div className="flex flex-col justify-between items-start p-3 bg-transparent/20 rounded-xl w-32 h-28">
            <div>
              <IconTemperature />
            </div>
            <div className="text-xs">Feels like</div>
            <div className="font-semibold text-lg">26°</div>
          </div>
          <div className="flex flex-col justify-between items-start p-3 bg-transparent/20 rounded-xl w-32 h-28">
            <div>
              <IconDroplet />
            </div>
            <div className="text-xs">Humidity</div>
            <div className="font-semibold text-lg">45%</div>
          </div>
        </div>

        <div className="flex gap-3 justify-between">
          <div className="flex flex-col justify-between items-start p-3 bg-transparent/20 rounded-xl w-32 h-28">
            <div>
              <IconWind />
            </div>
            <div className="text-xs">WNW wind</div>
            <div className="font-semibold text-lg">8 km/h</div>
          </div>
          <div className="flex flex-col justify-between items-start p-3 bg-transparent/20 rounded-xl w-32 h-28">
            <div>
              <IconWindElectricity />
            </div>
            <div className="text-xs">Air pressure</div>
            <div className="font-semibold text-lg">1005 hPa</div>
          </div>
          <div className="flex flex-col justify-between items-start p-3 bg-transparent/20 rounded-xl w-32 h-28">
            <div>
              <IconEyeCheck />
            </div>
            <div className="text-xs">Visibility</div>
            <div className="font-semibold text-lg">14 km</div>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full rounded-xl p-3 bg-transparent/20">
          <div className="flex justify-between">
            <div className="flex flex-col gap-1 items-center">
              <div>
                <IconSunrise />
              </div>
              <p className="text-xs">Sunrise</p>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <div>
                <IconSunset />
              </div>
              <p className="text-xs">Sunset</p>
            </div>
          </div>
          <div>
            <hr />
          </div>
          <div className="flex justify-between">
            <div>5:40 am</div>
            <div>6:47 pm</div>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full rounded-xl p-3 bg-transparent/20">
          <div>
            <p>Lifestyle tips</p>
          </div>
          <div>
            <hr />
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex gap-2">
              <div className="flex flex-col justify-center items-center w-32 h-28 gap-2">
                <div>
                  <IconSettings />
                </div>
                <div className="text-xs text-center">
                  High pollen count
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-32 h-28 gap-2">
                <div>
                  <IconUvIndex />
                </div>
                <div className="text-xs text-center">
                  High UV index
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-32 h-28 gap-2">
                <div>
                  <IconMoodEmpty />
                </div>
                <div className="text-xs text-center">
                  Use moisturizers
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="flex flex-col justify-center items-center w-32 h-28 gap-2">
                <div>
                  <IconWash />
                </div>
                <div className="text-xs text-center">
                  Very suitable for car washing
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-32 h-28 gap-2">
                <div>
                  <IconMotorbike />
                </div>
                <div className="text-xs text-center">
                  Suitable for outdoor workout
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-32 h-28 gap-2">
                <div>
                  <IconCar />
                </div>
                <div className="text-xs text-center">
                  Good traffic conditions
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="flex flex-col justify-center items-center w-32 h-28 gap-2">
                <div>
                  <IconPlane />
                </div>
                <div className="text-xs text-center">
                  Not suitable for a trip
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-32 h-28 gap-2">
                <div>
                  <IconSpider />
                </div>
                <div className="text-xs text-center">
                  Some mosquitos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
