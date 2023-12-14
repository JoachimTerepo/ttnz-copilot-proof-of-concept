import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-indigo-900 self-stretch flex w-full flex-col justify-center items-stretch max-md:max-w-full">
        <div className="flex-col overflow-hidden relative flex min-h-[729px] w-full items-stretch pb-12 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/41b2706767c178c1c236e35a6b63392619ee647eebf454458db702e602a16cf3?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/41b2706767c178c1c236e35a6b63392619ee647eebf454458db702e602a16cf3?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/41b2706767c178c1c236e35a6b63392619ee647eebf454458db702e602a16cf3?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/41b2706767c178c1c236e35a6b63392619ee647eebf454458db702e602a16cf3?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/41b2706767c178c1c236e35a6b63392619ee647eebf454458db702e602a16cf3?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/41b2706767c178c1c236e35a6b63392619ee647eebf454458db702e602a16cf3?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/41b2706767c178c1c236e35a6b63392619ee647eebf454458db702e602a16cf3?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/41b2706767c178c1c236e35a6b63392619ee647eebf454458db702e602a16cf3?apiKey=1c91b3a335184570bbfd43ce5f3632dd&"
            className="absolute h-full w-full object-cover object-center inset-0"
          />
          <div className="relative bg-slate-700 flex w-full flex-col items-center pt-4 px-16 max-md:max-w-full max-md:px-5">
            <div className="flex w-full max-w-6xl items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
              <div className="flex items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd093d3d1ab39257bce66ea067320ca6ecd5c162dc90e48752df4a45d88f6c49?apiKey=1c91b3a335184570bbfd43ce5f3632dd&"
                  className="aspect-[6.07] object-contain object-center w-[170px] overflow-hidden shrink-0 max-w-full self-start"
                />
                <div className="flex basis-[0%] flex-col items-stretch mt-2.5 self-start">
                  <div className="text-white text-center text-lg leading-7 whitespace-nowrap">
                    Home
                  </div>
                  <div className="bg-orange-300 flex shrink-0 h-[5px] flex-col mt-5" />
                </div>
                <div className="text-white text-center text-lg leading-7 mt-2.5 self-start">
                  About
                </div>
                <div className="text-white text-center text-lg leading-7 self-center whitespace-nowrap my-auto">
                  Support
                </div>
              </div>
              <div className="text-white text-center text-lg leading-7 self-center my-auto">
                Log in
              </div>
            </div>
          </div>
          <div className="relative flex w-[629px] max-w-full flex-col items-stretch ml-36 mt-36 mb-12 self-start max-md:my-10">
            <div className="text-orange-300 text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              We know natural hazards.
              <br />
              You should too.
            </div>
            <div className="text-neutral-50 text-lg leading-7 mt-9 max-md:max-w-full">
              The affordable way to better understand the natural hazards that a
              property is exposed to in the Auckland region.
            </div>
            <div className="items-stretch flex justify-between gap-2 mt-16 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
              <div className="text-indigo-900 text-base leading-6 shadow-sm bg-white grow justify-center pl-4 pr-16 py-5 rounded-md items-start max-md:max-w-full max-md:pr-5">
                Search for an address
              </div>
              <div className="text-white text-base font-semibold leading-6 whitespace-nowrap justify-center items-stretch bg-indigo-500 px-12 py-6 rounded-md max-md:px-5">
                Search
              </div>
            </div>
            <div className="text-gray-200 text-sm italic leading-5 mt-16 max-md:max-w-full max-md:mt-10">
              Please note: Occasionally, Auckland Council, and our other sources
              will update their data. We regularly check that the data Landcheck
              uses is up to date and carry out a comprehensive review every 6
              months. Any report that was purchased prior to an update may
              include outdated information.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1156px] mt-12 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col mt-12 px-5 items-start max-md:max-w-full max-md:mt-10">
              <div className="text-indigo-950 text-3xl font-bold leading-9 self-stretch max-md:max-w-full">
                Know if your property is exposed to risk
              </div>
              <div className="text-neutral-600 text-lg leading-7 self-stretch mt-4 max-md:max-w-full">
                <span className="">
                  Due to its geography and location, New Zealand is
                  significantly exposed to a range of natural hazards and the
                  effects of climate change will exacerbate a number of these.
                  Make yourself aware of these risks for{" "}
                </span>
                <span className="font-bold">$99.</span>
              </div>
              <div className="text-indigo-500 text-base font-semibold leading-6 whitespace-nowrap justify-center items-stretch border border-[color:var(--Primary,#5C5CE5)] mt-8 px-7 py-6 rounded-md border-solid max-md:px-5">
                View an example report
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9af071261ede91d85826c7094414363bd3c0bd3731c4fa1c819a570a0f49b29e?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9af071261ede91d85826c7094414363bd3c0bd3731c4fa1c819a570a0f49b29e?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9af071261ede91d85826c7094414363bd3c0bd3731c4fa1c819a570a0f49b29e?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9af071261ede91d85826c7094414363bd3c0bd3731c4fa1c819a570a0f49b29e?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9af071261ede91d85826c7094414363bd3c0bd3731c4fa1c819a570a0f49b29e?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9af071261ede91d85826c7094414363bd3c0bd3731c4fa1c819a570a0f49b29e?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9af071261ede91d85826c7094414363bd3c0bd3731c4fa1c819a570a0f49b29e?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9af071261ede91d85826c7094414363bd3c0bd3731c4fa1c819a570a0f49b29e?apiKey=1c91b3a335184570bbfd43ce5f3632dd&"
              className="aspect-[1.39] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-9"
            />
          </div>
        </div>
      </div>
      <div className="bg-white self-stretch flex w-full flex-col justify-center items-center mt-9 px-16 py-11 max-md:max-w-full max-md:px-5">
        <div className="flex w-full max-w-[1170px] flex-col items-stretch max-md:max-w-full">
          <div className="max-md:max-w-full max-md:pr-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5fc8d97f59f0faf79128bdca906169d9cfdc68ddd27595506ac88a36a9d3846?apiKey=1c91b3a335184570bbfd43ce5f3632dd&"
                  className="aspect-[1.8] object-contain object-center w-full items-center overflow-hidden grow max-md:max-w-full max-md:mt-10"
                />
              </div>
              <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/deccb06d0450270cd6635fd6a796373cf5dc79f98a86382e44eda29e439daba8?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/deccb06d0450270cd6635fd6a796373cf5dc79f98a86382e44eda29e439daba8?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/deccb06d0450270cd6635fd6a796373cf5dc79f98a86382e44eda29e439daba8?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/deccb06d0450270cd6635fd6a796373cf5dc79f98a86382e44eda29e439daba8?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/deccb06d0450270cd6635fd6a796373cf5dc79f98a86382e44eda29e439daba8?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/deccb06d0450270cd6635fd6a796373cf5dc79f98a86382e44eda29e439daba8?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/deccb06d0450270cd6635fd6a796373cf5dc79f98a86382e44eda29e439daba8?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/deccb06d0450270cd6635fd6a796373cf5dc79f98a86382e44eda29e439daba8?apiKey=1c91b3a335184570bbfd43ce5f3632dd&"
                  className="aspect-[1.92] object-contain object-center w-full items-center overflow-hidden grow max-md:max-w-full max-md:mt-10"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-7 items-start max-md:max-w-full">
            <div className="self-stretch max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-5">
                    <div className="text-indigo-950 text-2xl font-bold leading-7 whitespace-nowrap max-md:max-w-full">
                      A reliable, trusted report
                    </div>
                    <div className="text-neutral-600 text-lg leading-7 mt-4 max-md:max-w-full">
                      Visiting the site, talking with the agent and discussing
                      with friends and family are all important. But to make a
                      good investment, you need a more in-depth picture.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-5">
                    <div className="text-indigo-950 text-2xl font-bold leading-7 whitespace-nowrap max-md:max-w-full">
                      Information you can understand
                    </div>
                    <div className="text-neutral-600 text-lg leading-7 mt-4 max-md:max-w-full">
                      Council LIM reports can be hard to understand and don't
                      have Landcheck's crystal clear focus on natural hazard
                      risk.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-neutral-600 text-sm leading-5 self-stretch mt-14 max-md:max-w-full max-md:mt-10">
              Our sources:
              <br />
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2df7cd65046d7ed13b4ab35eb2449a74c9bc69f6bd2f812a83341d5a6db1b580?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2df7cd65046d7ed13b4ab35eb2449a74c9bc69f6bd2f812a83341d5a6db1b580?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2df7cd65046d7ed13b4ab35eb2449a74c9bc69f6bd2f812a83341d5a6db1b580?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2df7cd65046d7ed13b4ab35eb2449a74c9bc69f6bd2f812a83341d5a6db1b580?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2df7cd65046d7ed13b4ab35eb2449a74c9bc69f6bd2f812a83341d5a6db1b580?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2df7cd65046d7ed13b4ab35eb2449a74c9bc69f6bd2f812a83341d5a6db1b580?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2df7cd65046d7ed13b4ab35eb2449a74c9bc69f6bd2f812a83341d5a6db1b580?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2df7cd65046d7ed13b4ab35eb2449a74c9bc69f6bd2f812a83341d5a6db1b580?apiKey=1c91b3a335184570bbfd43ce5f3632dd&"
              className="aspect-[10.39] object-contain object-center w-[343px] overflow-hidden max-w-full mt-1.5"
            />
          </div>
        </div>
      </div>
      <div className="flex-col fill-indigo-900 overflow-hidden self-stretch relative flex min-h-[801px] w-full justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1391dce6d97c37684b215145aa81f737d79327ce9fe9260cd0fce57fe3ea405?apiKey=1c91b3a335184570bbfd43ce5f3632dd&"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="relative flex w-full max-w-[1006px] flex-col items-stretch mb-[489px] max-md:max-w-full max-md:mb-10">
          <div className="text-orange-300 text-sm font-bold leading-5 uppercase self-center whitespace-nowrap">
            Don’t be unaware
          </div>
          <div className="text-neutral-50 text-center text-3xl font-bold leading-9 self-center whitespace-nowrap mt-3">
            Know your suburb
          </div>
          <div className="text-neutral-50 text-center text-lg leading-7 mt-4 max-md:max-w-full">
            Know what to look for when considering a property. The map below
            shows the key natural hazard risks in each suburb.
          </div>
        </div>
        <div className="relative overflow-x-auto bg-indigo-500 z-[1] flex mt-0 w-full max-w-[1156px] flex-col justify-center rounded-lg items-start max-md:max-w-full max-md:mt-0">
          <div className="flex-col overflow-hidden relative z-[1] flex min-h-[633px] mb-0 w-full pt-7 pb-12 px-20 max-md:max-w-full max-md:mb-2.5 max-md:px-5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/48979aeffa5f7e2e7465e3fe2ad6a6dc6492757778bd243eb1c81db523b5c5cb?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/48979aeffa5f7e2e7465e3fe2ad6a6dc6492757778bd243eb1c81db523b5c5cb?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/48979aeffa5f7e2e7465e3fe2ad6a6dc6492757778bd243eb1c81db523b5c5cb?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/48979aeffa5f7e2e7465e3fe2ad6a6dc6492757778bd243eb1c81db523b5c5cb?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/48979aeffa5f7e2e7465e3fe2ad6a6dc6492757778bd243eb1c81db523b5c5cb?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/48979aeffa5f7e2e7465e3fe2ad6a6dc6492757778bd243eb1c81db523b5c5cb?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/48979aeffa5f7e2e7465e3fe2ad6a6dc6492757778bd243eb1c81db523b5c5cb?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/48979aeffa5f7e2e7465e3fe2ad6a6dc6492757778bd243eb1c81db523b5c5cb?apiKey=1c91b3a335184570bbfd43ce5f3632dd&"
              className="absolute h-full w-full object-cover object-center inset-0"
            />
            <div className="relative flex w-[504px] max-w-full justify-between gap-5 mr-24 self-end items-start max-md:flex-wrap max-md:mr-2.5">
              <div className="text-black text-base font-semibold leading-6 ml-52 mt-3">
                CBD
              </div>
              <div className="text-black text-base font-semibold leading-6 self-center relative z-[1] mt-0 whitespace-nowrap mb-0 pr-48">
                Mt Eden
              </div>
              <div className="items-stretch border border-[color:var(--layout-dark-bg,#DDD)] bg-white flex gap-0 mr-0 pl-3.5 pr-2 pt-5 pb-3.5 rounded-md border-solid">
                <div className="text-indigo-900 text-base font-semibold leading-6 grow whitespace-nowrap">
                  Auckland
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/01d5de75ee84b3d74ff0751f551ef15f40fc43d350eb7690b14883932c1dd005?apiKey=1c91b3a335184570bbfd43ce5f3632dd&"
                  className="aspect-[2] object-contain object-center w-3 stroke-[2px] stroke-indigo-500 overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
              </div>
            </div>
            <div className="relative text-black text-base font-semibold leading-6 self-center whitespace-nowrap mr-96 mt-52 max-md:mt-10">
              Mt Albert
            </div>
            <div className="relative text-black text-base font-semibold leading-6 whitespace-nowrap ml-24 mt-12 mb-px self-start max-md:ml-2.5">
              Avondale
            </div>
            <div className="relative z-[1] flex w-[193px] max-w-full items-stretch justify-between gap-5 ml-1 mt-24 self-start max-md:ml-2.5 max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/975cd012030aea62fe37a9a515c8f7697743f21910dd41ed645ee558a0257548?apiKey=1c91b3a335184570bbfd43ce5f3632dd&"
                className="aspect-[0.56] object-contain object-center w-10 overflow-hidden shrink-0 max-w-full ml-0 mr-auto mt-10 mb-6"
              />
              <div className="text-black text-base font-semibold leading-6 w-full ml-0 pt-5 self-start">
                Glen Eden
              </div>
            </div>
            <div className="relative text-black text-base font-semibold leading-6 self-center mt-0 whitespace-nowrap mr-56 mb-16">
              Onehunga
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch z-[1] mt-0 w-full max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[16%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/df1c6dd38a5d56e283351610d16506e5c2b78534a6a8359b5e71975f50e22dad?apiKey=1c91b3a335184570bbfd43ce5f3632dd&"
              className="aspect-[0.3] object-contain object-center w-[237px] overflow-hidden shrink-0 max-w-full mt-[631px] max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-[84%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:max-w-full">
              <div className="self-center w-full max-w-[1032px] max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-3/5 max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col items-center ml-0 py-px max-md:max-w-full max-md:mt-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b3b0afd53098b1bcd37a80770e3f8945575beaa3ae456914909565a2ca03c6d?apiKey=1c91b3a335184570bbfd43ce5f3632dd&"
                        className="aspect-[1.47] object-contain object-center w-[22px] fill-white overflow-hidden max-w-full"
                      />
                      <div className="self-stretch bg-white flex flex-col px-8 py-7 rounded-md max-md:max-w-full max-md:px-5">
                        <div className="text-indigo-950 text-2xl font-bold leading-7 self-stretch max-md:max-w-full">
                          Onehunga
                        </div>
                        <div className="text-indigo-950 text-base leading-6 self-stretch mt-6 max-md:max-w-full">
                          <span className="font-semibold">Most</span>
                          <span className=""> </span>
                          <span className="font-semibold">common risks</span>
                          <span className=""> in this suburb:</span>
                        </div>
                        <div className="self-stretch flex items-stretch justify-between gap-2 mt-3.5 max-md:max-w-full max-md:flex-wrap">
                          <div className="bg-indigo-500 flex justify-between gap-4 pl-4 pr-6 py-2 rounded-md items-start max-md:pr-5">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e07904a00dcb03ff70f8c839d71408831d0b88664393b7cd82d60307ce2b2df?apiKey=1c91b3a335184570bbfd43ce5f3632dd&"
                              className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-indigo-950 text-lg font-semibold leading-7">
                              Landslip
                            </div>
                          </div>
                          <div className="bg-indigo-500 flex justify-between gap-4 px-5 py-2 rounded-md items-start">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eff4913a428b57cd16719ef75376f7a6067d9d331fbc5081b06b26941876ef90?apiKey=1c91b3a335184570bbfd43ce5f3632dd&"
                              className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-indigo-950 text-lg font-semibold leading-7">
                              Flooding
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch z-[1] flex items-center justify-between gap-0 mt-4 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                          <div className="text-indigo-950 text-base leading-6 my-auto max-md:max-w-full">
                            Other risks analysed in your Landcheck report:
                          </div>
                          <div className="shadow-sm bg-white self-stretch flex basis-[0%] flex-col justify-center items-stretch rounded-md border-[0.5px] border-solid border-neutral-200">
                            <div className="bg-white flex flex-col justify-center items-stretch">
                              <div className="flex flex-col items-stretch pb-11 rounded border-[0.378px] border-solid border-zinc-300">
                                <div className="bg-orange-300 flex shrink-0 h-[5px] flex-col" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex items-stretch justify-between gap-1.5 max-md:max-w-full max-md:flex-wrap">
                          <div className="border flex justify-between gap-2 pl-3.5 pr-5 py-2 rounded-md border-solid border-indigo-900 border-opacity-30 items-start">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5747296f282058b1bd420a14191e3b52a55b91b140786f1d3461ff21bc5304a3?apiKey=1c91b3a335184570bbfd43ce5f3632dd&"
                              className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-indigo-950 text-lg font-semibold leading-7">
                              Earthquake
                            </div>
                          </div>
                          <div className="border flex justify-between gap-2 pl-4 pr-5 py-2 rounded-md border-solid border-indigo-900 border-opacity-30 items-start">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a26019d7862773c0dffde8a7cbae02725d53bab5825db13839628715e7a931cf?apiKey=1c91b3a335184570bbfd43ce5f3632dd&"
                              className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-indigo-950 text-lg font-semibold leading-7">
                              Liquefaction
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex items-stretch justify-between gap-1 mt-1.5 max-md:max-w-full max-md:flex-wrap">
                          <div className="border flex justify-between gap-2 pb-2.5 px-4 rounded-md border-solid border-indigo-900 border-opacity-30 items-start">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/367c848889ba1b03183f031bb8ff1a8f72c1eb16124d324f9a9b986182f0bab0?apiKey=1c91b3a335184570bbfd43ce5f3632dd&"
                              className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full mt-2.5"
                            />
                            <div className="flex gap-0 -mt-6 pr-3 self-end items-end">
                              <div className="text-indigo-950 text-lg font-semibold leading-7 mt-9">
                                Coastal Inundation
                              </div>
                              <div className="self-stretch flex grow basis-[0%] flex-col justify-center items-stretch">
                                <div className="bg-white flex flex-col justify-center items-stretch">
                                  <div className="text-amber-500 text-xs font-medium leading-loose justify-center pl-2.5 pr-16 py-5 rounded border-[0.378px] border-solid border-zinc-300 items-start max-md:pr-5">
                                    Medium risk
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="items-stretch border flex justify-between gap-2 px-4 py-2.5 rounded-md border-solid border-indigo-900 border-opacity-30">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b9df6e4d6b0d609f79642786b453e7b35652c5fde48e48bc6aa678e8a2479e8?apiKey=1c91b3a335184570bbfd43ce5f3632dd&"
                              className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-indigo-950 text-lg font-semibold leading-7">
                              Tsunami
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch z-[1] flex justify-between gap-0 items-end max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                          <div className="items-stretch border flex gap-2 mt-2.5 px-4 py-2.5 rounded-md border-solid border-indigo-900 border-opacity-30">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/073bc9bbbbd60c231ebeb53027d7e2cfd115dd183e7fadcdc1af0fb0caf2cec8?apiKey=1c91b3a335184570bbfd43ce5f3632dd&"
                              className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                            />
                            <div className="text-indigo-950 text-lg font-semibold leading-7 my-auto">
                              Volcano
                            </div>
                          </div>
                          <div className="self-stretch flex grow basis-[0%] flex-col justify-center items-stretch">
                            <div className="bg-white flex flex-col justify-center items-stretch">
                              <div className="flex flex-col items-stretch pb-3 rounded border-[0.378px] border-solid border-zinc-300">
                                <div className="bg-green-600 flex shrink-0 h-1 flex-col" />
                                <div className="flex flex-col justify-center mt-3 px-14 py-1 items-start max-md:px-5">
                                  <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c09b3ab7ca5295cd11e8f7881508e60d921a2e5aba978e69fb2297ee189f577?apiKey=1c91b3a335184570bbfd43ce5f3632dd&"
                                    className="aspect-square object-contain object-center w-4 overflow-hidden max-w-full"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-indigo-950 text-lg font-semibold leading-7 items-stretch border grow justify-center mt-2.5 pl-8 pr-2.5 py-3 rounded-md border-solid border-indigo-900 border-opacity-30 self-start max-md:pl-5">
                            Severe Wind
                          </div>
                        </div>
                        <div className="bg-green-600 flex w-[253px] shrink-0 max-w-full h-[5px] flex-col ml-16 mt-2 self-start max-md:ml-2.5" />
                        <div className="text-green-600 text-xs font-medium leading-loose ml-16 mt-2.5 max-md:ml-2.5">
                          Low risk
                        </div>
                        <div className="text-neutral-600 text-base leading-6 self-stretch mt-3 max-md:max-w-full">
                          This is based on the relative liklihood of each hazard
                          ocurring within the suburb. Your specific property may
                          or may not be affected by these risks.
                        </div>
                      </div>
                      <div className="self-stretch z-[1] flex mt-0 flex-col pl-9 items-start max-md:max-w-full max-md:pl-5">
                        <div className="bg-white flex w-[121px] max-w-full flex-col justify-center items-stretch ml-12 max-md:ml-2.5">
                          <div className="flex flex-col items-stretch pb-3 rounded border-[0.378px] border-solid border-zinc-300">
                            <div className="bg-green-600 flex shrink-0 h-1 flex-col" />
                            <div className="text-green-600 text-xs font-medium leading-loose mt-3">
                              Low risk
                            </div>
                            <div className="text-black text-xs font-semibold leading-3 whitespace-nowrap">
                              Coastal inundation
                            </div>
                          </div>
                        </div>
                        <div className="text-indigo-950 text-center text-3xl font-bold leading-9 self-center max-w-[762px] ml-5 mt-20 max-md:mt-10">
                          A hazard report that makes sense
                        </div>
                        <div className="text-neutral-600 text-center text-lg leading-7 self-stretch mt-6 max-md:max-w-full">
                          Buying a property in New Zealand? You need to
                          understand all the known risks before going ahead with
                          an offer. We’re here to help.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-2/5 ml-5 max-md:w-full max-md:ml-0" />
                </div>
              </div>
              <div className="mt-32 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-2/5 max-md:w-full max-md:ml-0">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/aaabfb30b0c0255f9938c61dc4bc946a785a78f18a282aafe2ddae31dc079e93?apiKey=1c91b3a335184570bbfd43ce5f3632dd&"
                      className="aspect-[1.45] object-contain object-center w-full justify-center items-center overflow-hidden grow max-md:max-w-full max-md:mt-10"
                    />
                  </div>
                  <div className="flex flex-col items-stretch w-3/5 ml-5 max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex flex-col mt-16 pt-1.5 px-5 max-md:max-w-full max-md:mt-10">
                      <div className="text-indigo-500 text-sm font-bold leading-5 uppercase max-md:max-w-full">
                        Step 1
                      </div>
                      <div className="text-indigo-950 text-2xl font-bold leading-7 mt-3 max-md:max-w-full">
                        Search your property
                      </div>
                      <div className="text-neutral-600 text-lg leading-7 mt-2.5 max-md:max-w-full">
                        Search and select the property you’re interested in.{" "}
                      </div>
                      <div className="text-neutral-600 text-base font-semibold leading-6 mt-8 max-md:max-w-full">
                        What parts of New Zealand do we cover?
                      </div>
                      <div className="text-neutral-600 text-base leading-6 mt-2 max-md:max-w-full">
                        Landcheck is available for Auckland and we are working
                        towards releasing Hamilton, Tauranga, Wellington and
                        Christchurch soon.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-center w-full max-w-[980px] mt-24 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex flex-col pt-1.5 max-md:max-w-full max-md:mt-10">
                      <div className="text-indigo-500 text-sm font-bold leading-5 uppercase max-md:max-w-full">
                        Step 2
                      </div>
                      <div className="text-indigo-950 text-2xl font-bold leading-7 whitespace-nowrap mt-3 max-md:max-w-full">
                        Check the preview
                      </div>
                      <div className="text-neutral-600 text-lg leading-7 mt-2.5 max-md:max-w-full">
                        Once you’ve found your property, confirm the location on
                        the preview screen. You’ll be able to see the range of
                        hazards included in your report.
                      </div>
                      <div className="text-neutral-600 text-base font-semibold leading-6 whitespace-nowrap mt-8 max-md:max-w-full">
                        Why are certain risks not available for some areas?
                      </div>
                      <div className="text-neutral-600 text-base leading-6 mt-2 max-md:max-w-full">
                        Our data is currently based on council and Government
                        agency information. Some areas are not covered by this
                        data for certain risks.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bd25642e0ac48bfef2293b481512fe842dec7c13002eb6e80f18478092fba43b?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd25642e0ac48bfef2293b481512fe842dec7c13002eb6e80f18478092fba43b?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd25642e0ac48bfef2293b481512fe842dec7c13002eb6e80f18478092fba43b?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd25642e0ac48bfef2293b481512fe842dec7c13002eb6e80f18478092fba43b?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd25642e0ac48bfef2293b481512fe842dec7c13002eb6e80f18478092fba43b?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd25642e0ac48bfef2293b481512fe842dec7c13002eb6e80f18478092fba43b?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd25642e0ac48bfef2293b481512fe842dec7c13002eb6e80f18478092fba43b?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd25642e0ac48bfef2293b481512fe842dec7c13002eb6e80f18478092fba43b?apiKey=1c91b3a335184570bbfd43ce5f3632dd&"
                      className="aspect-[1.42] object-contain object-center w-full justify-center items-center overflow-hidden grow max-md:max-w-full max-md:mt-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1004px] mt-24 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/315cd7a60f18ebe5fcf6a4ba2eb5bc770c246aa26d01c786a35f5b5d1ad5abcd?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/315cd7a60f18ebe5fcf6a4ba2eb5bc770c246aa26d01c786a35f5b5d1ad5abcd?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/315cd7a60f18ebe5fcf6a4ba2eb5bc770c246aa26d01c786a35f5b5d1ad5abcd?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/315cd7a60f18ebe5fcf6a4ba2eb5bc770c246aa26d01c786a35f5b5d1ad5abcd?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/315cd7a60f18ebe5fcf6a4ba2eb5bc770c246aa26d01c786a35f5b5d1ad5abcd?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/315cd7a60f18ebe5fcf6a4ba2eb5bc770c246aa26d01c786a35f5b5d1ad5abcd?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/315cd7a60f18ebe5fcf6a4ba2eb5bc770c246aa26d01c786a35f5b5d1ad5abcd?apiKey=1c91b3a335184570bbfd43ce5f3632dd&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/315cd7a60f18ebe5fcf6a4ba2eb5bc770c246aa26d01c786a35f5b5d1ad5abcd?apiKey=1c91b3a335184570bbfd43ce5f3632dd&"
              className="aspect-[1.39] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col pt-1.5 px-5 max-md:max-w-full max-md:mt-10">
              <div className="text-indigo-500 text-sm font-bold leading-5 uppercase max-w-[447px] self-start">
                Step 3
              </div>
              <div className="text-indigo-950 text-2xl font-bold leading-7 w-[470px] mt-3 self-start">
                Put your mind at ease
              </div>
              <div className="text-neutral-600 text-lg leading-7 mt-2.5">
                Purchase your new Landcheck report that explains natural hazards
                in a way that’s simple to understand without skimping on the
                details.
              </div>
              <div className="text-neutral-600 text-base font-semibold leading-6 whitespace-nowrap mt-8 max-md:max-w-full">
                What if there is an issue?
              </div>
              <div className="text-neutral-600 text-base leading-6 mt-2 max-md:max-w-full">
                We’ll clearly highlight any risks to the property so you can
                understand what these mean. We also provide extra information on
                what to do about these and how you could investigate them
                further.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-stretch my-12 px-5">
        <div className="text-indigo-900 text-3xl font-bold leading-9 self-center whitespace-nowrap">
          Still unsure? It’s simple
        </div>
        <div className="w-full mt-20 max-md:max-w-full max-md:mt-10 max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[32%] max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-start max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3db6fdcf9fc7b5c51c8efd5e10f4c9c9e9c1ad97c37d096d96bcb514bf78ce22?apiKey=1c91b3a335184570bbfd43ce5f3632dd&"
                  className="aspect-[1.04] object-contain object-center w-[53px] overflow-hidden max-w-full"
                />
                <div className="text-indigo-950 text-lg font-semibold leading-7 self-stretch whitespace-nowrap mt-8">
                  Get clarity on your risks
                </div>
                <div className="text-neutral-600 text-base leading-6 self-stretch mt-4">
                  An easy to understand report that will inform you of the known
                  natural hazards risks your property is exposed to.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-start max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/91700bab84642b0e3cf62eb4fe9f56b10a7d26c3420e8b61504f1509e55260ab?apiKey=1c91b3a335184570bbfd43ce5f3632dd&"
                  className="aspect-square object-contain object-center w-[51px] overflow-hidden max-w-full"
                />
                <div className="text-indigo-950 text-lg font-semibold leading-7 self-stretch whitespace-nowrap mt-8">
                  Know what the risks mean
                </div>
                <div className="text-neutral-600 text-base leading-6 self-stretch mt-5">
                  Not all risks are equal. Better understand your property’s
                  natural hazard risk profile with Landcheck.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[35%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-start max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fd483f7ffce7ff82b75e8a4cda63edb5f6172e069c67da9e82d414b4466f4f5?apiKey=1c91b3a335184570bbfd43ce5f3632dd&"
                  className="aspect-square object-contain object-center w-[51px] overflow-hidden max-w-full"
                />
                <div className="text-indigo-950 text-lg font-semibold leading-7 self-stretch mt-8">
                  Low cost and fast
                </div>
                <div className="text-neutral-600 text-base leading-6 self-stretch mt-5">
                  No long wait times. No massive cost. Just clear hazard
                  information to help you get the property you love.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-indigo-900 min-h-[1px] w-full mt-28 max-md:max-w-full max-md:mt-10" />
        <div className="text-indigo-950 text-center text-lg leading-7 self-center max-w-[760px] mt-16 max-md:max-w-full max-md:mt-10">
          Don't waste your money early on in your property journey.
          <br />
          Landcheck is the first check you should make.
        </div>{" "}
        <div className="self-center flex w-[569px] max-w-full items-stretch gap-2.5 mt-9 max-md:flex-wrap">
          <div className="text-indigo-900 text-base leading-6 border border-[color:var(--Border,#DBDBDB)] shadow-sm bg-white grow justify-center pl-4 pr-16 py-6 rounded-md border-solid items-start max-md:pr-5">
            Find your address
          </div>{" "}
          <div className="text-white text-base font-semibold leading-6 whitespace-nowrap justify-center items-stretch bg-indigo-500 px-12 py-6 rounded-md max-md:px-5">
            Search
          </div>
        </div>
      </div>{" "}
      <div className="flex flex-col justify-center items-stretch w-full h-auto grow-0">
        <div className="bg-indigo-900 flex w-full flex-col justify-center items-center px-16 py-9 max-md:max-w-full max-md:px-5">
          <div className="flex w-full max-w-[1170px] flex-col items-stretch max-md:max-w-full">
            <div className="flex w-full items-stretch justify-between gap-5 px-px max-md:max-w-full max-md:flex-wrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/26ed6c0ec0f9025b027778b5d1bf3da1f53cc8d1210e0935e2790f59bc77a741?apiKey=1c91b3a335184570bbfd43ce5f3632dd&"
                className="aspect-[4.25] object-contain object-center w-[255px] overflow-hidden shrink-0 max-w-full"
              />{" "}
              <div className="self-center flex items-stretch justify-between gap-5 my-auto">
                <div className="text-indigo-500 text-center text-lg leading-7">
                  About
                </div>{" "}
                <div className="text-white text-center text-lg leading-7">
                  Contact
                </div>
              </div>
            </div>{" "}
            <div className="bg-white shrink-0 h-px mt-6 max-md:max-w-full" />{" "}
            <div className="flex items-stretch justify-between gap-5 mt-7 max-md:max-w-full max-md:flex-wrap">
              <div className="text-white text-sm leading-5 grow shrink basis-auto">
                Copyright © 2023 Landcheck Ltd. All rights reserved.
              </div>{" "}
              <div className="text-white text-right text-sm leading-5 w-[348px] self-start">
                Terms & Conditions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
