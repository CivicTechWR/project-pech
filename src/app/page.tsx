import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="w-full bg-gray-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-900 font-manrope">
              PECH
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-sm font-bold text-gray-700 hover:text-blue-600"
            >
              The Plan
            </a>
            <a
              href="#"
              className="text-sm font-bold text-gray-700 hover:text-blue-600"
            >
              Data & Trends
            </a>
            <a
              href="#"
              className="text-sm font-bold text-gray-700 hover:text-blue-600"
            >
              Community Spotlight
            </a>
            <a
              href="#"
              className="text-sm font-bold text-gray-700 hover:text-blue-600"
            >
              About
            </a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
              Find help now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-16 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-manrope leading-tight">
                  <span className="font-bold">The Plan </span>
                  <span className="font-normal">
                    to End Chronic Homelessness
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-lg">
                  A collaborative roadmap for strategies, resources and
                  timelines to end chronic homelessness in Waterloo Region
                </p>
              </div>

              {/* Newsletter Form */}
              <div className="bg-white p-6 rounded-lg max-w-md">
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-900 text-sm mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900"
                      placeholder="Enter your email"
                    />
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700">
                    Sign up for our newsletter
                  </button>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/FigmaImages/HousingLogo.png"
                alt="Housing illustration"
                width={560}
                height={560}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <p className="text-blue-600 text-2xl md:text-4xl font-manrope">
                In Waterloo Region
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 font-manrope">
                257 people are chronically homeless
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Chronic homelessness is defined as being homeless for over 6
                months.
              </p>
            </div>{" "}
          </div>
        </div>
      </section>

      {/* Goal Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-6">
                <p className="text-blue-600 text-2xl md:text-4xl font-manrope">
                  Our goal
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-manrope">
                  Help us reach functional zero by 2030
                </h2>
                <p className="text-lg text-gray-700">
                  Together with our community partners, we have a plan to end
                  chronic homelessness in the region of Waterloo.
                </p>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 flex items-center space-x-2">
                <span>Learn about The Plan</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                </svg>
              </button>
            </div>
            <div>
              <Image
                src="/FigmaImages/ApartmentTowerInspection.png"
                alt="Goal illustration"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Progress Stats */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-manrope">
                Progress at a glance
              </h2>
              <p className="text-lg text-blue-600">
                Learn about how we are making progress towards ending chronic
                homelessness
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 bg-gray-800 rounded-2xl overflow-hidden">
              <div className="p-8 text-center border-r border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-gray-100 mb-2">
                  85%
                </div>
                <div className="text-sm font-bold text-gray-100">
                  Plan completion
                </div>
              </div>
              <div className="p-8 text-center border-r border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-gray-100 mb-2">
                  42
                </div>
                <div className="text-sm font-bold text-gray-100">
                  Community partners
                </div>
              </div>
              <div className="p-8 text-center border-r border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-gray-100 mb-2">
                  $2.4 Million
                </div>
                <div className="text-sm font-bold text-gray-100">
                  Funding secured
                </div>
              </div>
              <div className="p-8 text-center">
                <div className="text-2xl md:text-3xl font-bold text-gray-100 mb-2">
                  127 people
                </div>
                <div className="text-sm font-bold text-gray-100">
                  successfully housed
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Behind Homelessness */}
      <section className="bg-gray-800 py-16 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-12 font-manrope">
            What&apos;s the data behind chronic homelessness?
          </h2>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-purple-300">
                  The average person cannot affordably pay for housing in the
                  region
                </h3>
                <p className="text-sm font-bold text-gray-200">
                  Statistics Canada defines unaffordable housing when households
                  spend more than 30% of their total income on shelter costs.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-3 gap-8 items-end">
                <div className="text-center">
                  <div className="w-16 h-24 bg-blue-500 rounded mb-4 mx-auto relative">
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded"></div>
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded"></div>
                  </div>
                  <p className="text-lg text-white">
                    Average house income <br />
                    <span className="font-bold">$108,500</span>
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-32 bg-gray-600 rounded mb-4 mx-auto"></div>
                  <p className="text-lg text-white">
                    Average house price <br />
                    <span className="font-bold">$499,323</span>
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-40 bg-green-500 rounded mb-4 mx-auto"></div>
                  <p className="text-lg text-white">
                    Household income required <br />
                    <span className="font-bold">$140,919</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Income vs Inflation */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-manrope">
                Incomes are not keeping up with inflation costs
              </h2>
              <p className="text-lg text-blue-400">
                Since 2009 housing prices tripled inflation rate.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-lg space-y-20">
                <h3 className="text-2xl md:text-4xl font-bold text-gray-700">
                  Housing income
                </h3>
                <div className="flex items-center space-x-4">
                  <div className="text-6xl">💰</div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">18%</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg space-y-20">
                <h3 className="text-2xl md:text-4xl font-bold text-gray-700">
                  Average rent
                </h3>
                <div className="flex items-center space-x-4">
                  <div className="text-6xl">🏠</div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">41%</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg space-y-20">
                <h3 className="text-2xl md:text-4xl font-bold text-gray-700">
                  Average house price
                </h3>
                <div className="flex items-center space-x-4">
                  <div className="text-6xl">🏡</div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">104%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <blockquote className="text-xl md:text-2xl font-bold text-white">
                <span className="text-6xl">&quot;</span>
                Some guy beat me up on the street. Yeah, I was in the hospital
                because of it... I died a few times...Meantime my landlord, he
                got rid of everything in my apartment and I lost my rent geared
                to income housing and I ended up discharged from the hospital
                and driven to the shelter.
                <span className="text-xl font-normal">
                  {" "}
                  - Project Willow Interview Participant
                </span>
              </blockquote>
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-300">
                There&apos;s a real life story behind the numbers
              </h3>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 flex items-center space-x-2">
                <span>View Data & Trends</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Spotlight */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-manrope">
                Community spotlight
              </h2>
              <p className="text-lg text-blue-600">
                We couldn&apos;t do it alone. Learn about the community partners
                making an impact.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <Image
                  src="/FigmaImages/Community.png"
                  alt="PECH Committee meeting"
                  width={300}
                  height={240}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800">
                      The Plan to End Chronic Homelessness (PECH) Committee
                      meeting notes
                    </h3>
                    <p className="text-sm text-blue-600">
                      Committee meeting notes June 25, 2025.
                    </p>
                  </div>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700">
                    View more
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <Image
                  src="/FigmaImages/Community2.png"
                  alt="GRT Partnership"
                  width={300}
                  height={240}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800">
                      Partnership with GRT for free buses program
                    </h3>
                    <p className="text-sm text-blue-600">
                      Funding transportation with new housing program to help
                      individuals get to point A to B.
                    </p>
                  </div>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700">
                    View more
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <Image
                  src="/FigmaImages/CommunityPlan.png"
                  alt="Lived Expertise Panel"
                  width={300}
                  height={240}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-800">
                      Lived Expertise Panel
                    </h3>
                    <p className="text-sm text-blue-600">
                      Community members with lived experience shared insights at
                      the quarterly stakeholder meeting, shaping future
                      priorities.
                    </p>
                  </div>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700">
                    View more
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 flex items-center space-x-2 mx-auto">
                <span>See all updates</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-blue-600">© PECH</p>
            <div className="flex space-x-6">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.017 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
