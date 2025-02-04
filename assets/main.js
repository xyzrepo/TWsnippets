// import test from './snippets/test.js';
// const cta = require("./snippets/cta.js")
const components = {
  'Hero Section': [{
    id: 0,
    framework: 'vue',
    category: 'Hero',
    name: 'Simple centered',
    template: `<!-- This example requires Tailwind CSS v3.0+ -->
    <template>
      <div class="isolate bg-white">
        <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
            <defs>
              <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                <stop stop-color="#9089FC" />
                <stop offset="1" stop-color="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="px-6 pt-6 lg:px-8">
          <div>
            <nav class="flex h-9 items-center justify-between" aria-label="Global">
              <div class="flex lg:min-w-0 lg:flex-1" aria-label="Global">
                <a href="#" class="-m-1.5 p-1.5">
                  <span class="sr-only">Your Company</span>
                  <img class="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                </a>
              </div>
              <div class="flex lg:hidden">
                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
                  <span class="sr-only">Open main menu</span>
                  <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="font-semibold text-gray-900 hover:text-gray-900">{{ item.name }}</a>
              </div>
              <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                <a href="#" class="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20">Log in</a>
              </div>
            </nav>
            <Dialog as="div" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
              <DialogPanel focus="true" class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
                <div class="flex h-9 items-center justify-between">
                  <div class="flex">
                    <a href="#" class="-m-1.5 p-1.5">
                      <span class="sr-only">Your Company</span>
                      <img class="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </a>
                  </div>
                  <div class="flex">
                    <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                      <span class="sr-only">Close menu</span>
                      <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div class="mt-6 flow-root">
                  <div class="-my-6 divide-y divide-gray-500/10">
                    <div class="space-y-2 py-6">
                      <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">{{ item.name }}</a>
                    </div>
                    <div class="py-6">
                      <a href="#" class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10">Log in</a>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </Dialog>
          </div>
        </div>
        <main>
          <div class="relative px-6 lg:px-8">
            <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
              <div>
                <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                  <div class="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    <span class="text-gray-600">
                      Announcing our next round of funding. <a href="#" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></a>
                    </span>
                  </div>
                </div>
                <div>
                  <h1 class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">Data to enrich your online business</h1>
                  <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                  <div class="mt-8 flex gap-x-4 sm:justify-center">
                    <a href="#" class="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                      Get started
                      <span class="text-indigo-200" aria-hidden="true">&rarr;</span>
                    </a>
                    <a href="#" class="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                      Live demo
                      <span class="text-gray-400" aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
                <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                  <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                    <defs>
                      <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#9089FC" />
                        <stop offset="1" stop-color="#FF80B5" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </template>
    
    <script setup>
    import { ref } from 'vue'
    import { Dialog, DialogPanel } from '@headlessui/vue'
    import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
    
    const navigation = [
      { name: 'Product', href: '#' },
      { name: 'Features', href: '#' },
      { name: 'Marketplace', href: '#' },
      { name: 'Company', href: '#' },
    ]
    
    const mobileMenuOpen = ref(false)
    </script>`
  }],
  CTA: [
    {
      id: 7,
      category: "cta",
      name: "cta-simple-centered",
      framework: 'vue',
      preview:
        "https://i.postimg.cc/YjKqg79z/Screenshot-from-2022-10-30-01-04-01.png",
      template: `<h1>hi</h1>`,
    },
    {
      id: 8,
      category: "cta",
      name: "cta-simple-centered-branded",
      framework: 'react',
      preview:
        "https://i.postimg.cc/HWJwQtnr/Screenshot-from-2022-10-30-01-04-20.png",
      template:
        'export default function CTA() {\n  return (\n    <div className="bg-indigo-700">\n      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">\n        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">\n          <span className="block">Boost your productivity.</span>\n          <span className="block">Start using Workflow today.</span>\n        </h2>\n        <p className="mt-4 text-lg leading-6 text-indigo-200">\n          Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.\n        </p>\n        <a\n          href="#"\n          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"\n        >\n          Sign up for free\n        </a>\n      </div>\n    </div>\n  )\n}\n',
    },
    {
      id: 9,
      category: "cta",
      name: "cta-split-with-image",
      framework: 'vue',
      preview:
        "https://i.postimg.cc/fy0RJywb/Screenshot-from-2022-10-30-01-04-37.png",
      template:
        'export default function CTA() {\n  return (\n    <div className="relative bg-gray-800">\n      <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">\n        <img\n          className="w-full h-full object-cover"\n          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"\n          alt=""\n        />\n      </div>\n      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">\n        <div className="md:ml-auto md:w-1/2 md:pl-10">\n          <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">Award winning support</h2>\n          <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">We’re here to help</p>\n          <p className="mt-3 text-lg text-gray-300">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a\n            scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum\n            tincidunt duis.\n          </p>\n          <div className="mt-8">\n            <div className="inline-flex rounded-md shadow">\n              <a\n                href="#"\n                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"\n              >\n                Visit the help center\n                <svg class="-mr-1 ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">\n              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />\n              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />\n            </svg>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  )\n}\n',
    },
  ],
  Newsletter: [
    {
      id: 10,
      category: "newsletter",
      framework: 'vue',
      name: "newsletter-simple-stacked",
      preview:
        "https://i.postimg.cc/3wFkjk5f/Screenshot-from-2022-10-30-01-26-57.png",
      template:
        '/*\n  This component requires some changes to your config:\n  \n  ```\n  // tailwind.config.js\n  module.exports = {\n    // ...\n    plugins: [\n      // ...\n      require(\'@tailwindcss/forms\'),\n    ],\n  }\n  ```\n*/\nexport default function NewsLetter() {\n  return (\n    <div className="bg-white">\n      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">\n        <h2 className="inline text-3xl font-extrabold tracking-tight text-gray-900 sm:block sm:text-4xl">\n          Want product news and updates?\n        </h2>\n        <p className="inline text-3xl font-extrabold tracking-tight text-indigo-600 sm:block sm:text-4xl">\n          Sign up for our newsletter.\n        </p>\n        <form className="mt-8 sm:flex">\n          <label htmlFor="email-address" className="sr-only">\n            Email address\n          </label>\n          <input\n            id="email-address"\n            name="email"\n            type="email"\n            autoComplete="email"\n            required\n            className="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs border-gray-300 rounded-md"\n            placeholder="Enter your email"\n          />\n          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">\n            <button\n              type="submit"\n              className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"\n            >\n              Notify me\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  )\n}\n',
    },
    {
      id: 11,
      category: "newsletter",
      name: "newsletter-centered-with-graphic",
      framework: 'html',
      preview:
        "https://i.postimg.cc/1zQgNpTN/Screenshot-from-2022-10-30-01-27-39.png",
      template:
        '/*\n  This component requires some changes to your config:\n  \n  ```\n  // tailwind.config.js\n  module.exports = {\n    // ...\n    plugins: [\n      // ...\n      require(\'@tailwindcss/forms\'),\n    ],\n  }\n  ```\n*/\nexport default function NewsLetter() {\n  return (\n    <div className="bg-white py-16 sm:py-24">\n      <div className="relative sm:py-16">\n        <div aria-hidden="true" className="hidden sm:block">\n          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />\n          <svg className="absolute top-8 left-1/2 -ml-3" width={404} height={392} fill="none" viewBox="0 0 404 392">\n            <defs>\n              <pattern\n                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"\n                x={0}\n                y={0}\n                width={20}\n                height={20}\n                patternUnits="userSpaceOnUse"\n              >\n                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />\n              </pattern>\n            </defs>\n            <rect width={404} height={392} fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)" />\n          </svg>\n        </div>\n        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">\n          <div className="relative rounded-2xl px-6 py-10 bg-indigo-600 overflow-hidden shadow-xl sm:px-12 sm:py-20">\n            <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">\n              <svg\n                className="absolute inset-0 h-full w-full"\n                preserveAspectRatio="xMidYMid slice"\n                xmlns="http://www.w3.org/2000/svg"\n                fill="none"\n                viewBox="0 0 1463 360"\n              >\n                <path\n                  className="text-indigo-500 text-opacity-40"\n                  fill="currentColor"\n                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"\n                />\n                <path\n                  className="text-indigo-700 text-opacity-40"\n                  fill="currentColor"\n                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"\n                />\n              </svg>\n            </div>\n            <div className="relative">\n              <div className="sm:text-center">\n                <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">\n                  Get notified when we&rsquo;re launching.\n                </h2>\n                <p className="mt-6 mx-auto max-w-2xl text-lg text-indigo-200">\n                  Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque\n                  tristique pellentesque.\n                </p>\n              </div>\n              <form action="#" className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">\n                <div className="min-w-0 flex-1">\n                  <label htmlFor="cta-email" className="sr-only">\n                    Email address\n                  </label>\n                  <input\n                    id="cta-email"\n                    type="email"\n                    className="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"\n                    placeholder="Enter your email"\n                  />\n                </div>\n                <div className="mt-4 sm:mt-0 sm:ml-3">\n                  <button\n                    type="submit"\n                    className="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"\n                  >\n                    Notify me\n                  </button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  )\n}\n',
    },
    {
      id: 12,
      category: "newsletter",
      name: "newsletter-with-description",
      preview:
        "https://i.postimg.cc/YqTLtczR/Screenshot-from-2022-10-30-01-28-05.png",
      template:
        '/*\n  This component requires some changes to your config:\n  \n  ```\n  // tailwind.config.js\n  module.exports = {\n    // ...\n    plugins: [\n      // ...\n      require(\'@tailwindcss/forms\'),\n    ],\n  }\n  ```\n*/\nexport default function NewsLetter() {\n  return (\n    <div className="bg-white">\n      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">\n        <div className="py-10 px-6 bg-indigo-700 rounded-3xl sm:py-16 sm:px-12 lg:p-20 lg:flex lg:items-center">\n          <div className="lg:w-0 lg:flex-1">\n            <h2 className="text-3xl font-extrabold tracking-tight text-white">Sign up for our newsletter</h2>\n            <p className="mt-4 max-w-3xl text-lg text-indigo-100">\n              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet\n              fugiat.\n            </p>\n          </div>\n          <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">\n            <form className="sm:flex">\n              <label htmlFor="email-address" className="sr-only">\n                Email address\n              </label>\n              <input\n                id="email-address"\n                name="email-address"\n                type="email"\n                autoComplete="email"\n                required\n                className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"\n                placeholder="Enter your email"\n              />\n              <button\n                type="submit"\n                className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"\n              >\n                Notify me\n              </button>\n            </form>\n            <p className="mt-3 text-sm text-indigo-100">\n              We care about the protection of your data. Read our{\' \'}\n              <a href="#" className="text-white font-medium underline">\n                Privacy Policy.\n              </a>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  )\n}\n',
    },
  ],
  stats: [
    {
      id: 13,
      category: "stats",
      name: "stats-simple",
      preview:
        "https://i.postimg.cc/t7G1tWTf/Screenshot-from-2022-10-30-01-41-41.png",
      template:
        'export default function Stats() {\n  return (\n    <div className="bg-gray-50 pt-12 sm:pt-16">\n      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n        <div className="max-w-4xl mx-auto text-center">\n          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">\n            Trusted by developers from over 80 planets\n          </h2>\n          <p className="mt-3 text-xl text-gray-500 sm:mt-4">\n            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.\n          </p>\n        </div>\n      </div>\n      <div className="mt-10 pb-12 bg-white sm:pb-16">\n        <div className="relative">\n          <div className="absolute inset-0 h-1/2 bg-gray-50" />\n          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n            <div className="max-w-4xl mx-auto">\n              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">\n                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">\n                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Pepperoni</dt>\n                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">100%</dd>\n                </div>\n                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">\n                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Delivery</dt>\n                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">24/7</dd>\n                </div>\n                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">\n                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Calories</dt>\n                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">100k</dd>\n                </div>\n              </dl>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  )\n}\n',
    },
    {
      id: 14,
      category: "stats",
      name: "stats-brand",
      preview:
        "https://i.postimg.cc/wv3wRy7L/Screenshot-from-2022-10-30-01-43-35.png",
      template:
        'export default function Stats() {\n  return (\n    <div className="bg-indigo-800">\n      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">\n        <div className="max-w-4xl mx-auto text-center">\n          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Trusted by developers from over 80 planets</h2>\n          <p className="mt-3 text-xl text-indigo-200 sm:mt-4">\n            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.\n          </p>\n        </div>\n        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">\n          <div className="flex flex-col">\n            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Pepperoni</dt>\n            <dd className="order-1 text-5xl font-extrabold text-white">100%</dd>\n          </div>\n          <div className="flex flex-col mt-10 sm:mt-0">\n            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Delivery</dt>\n            <dd className="order-1 text-5xl font-extrabold text-white">24/7</dd>\n          </div>\n          <div className="flex flex-col mt-10 sm:mt-0">\n            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">Calories</dt>\n            <dd className="order-1 text-5xl font-extrabold text-white">100k+</dd>\n          </div>\n        </dl>\n      </div>\n    </div>\n  )\n}\n',
    },
  ],
  Testimonials: [
    {
      id: 12,
      category: "Testimonials",
      name: "Testimonials-split-color",
      preview:
        "https://res.cloudinary.com/dyl08vtii/image/upload/v1667067224/tws/buttons.01-primary-large.png",
      template:
        'export default function Testimonials() {\n  return (\n    <section className="bg-indigo-800">\n      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">\n        <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-indigo-900 lg:pr-16">\n          <div className="md:flex-shrink-0">\n            <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg" alt="Tuple" />\n          </div>\n          <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">\n            <div className="relative text-lg font-medium text-white md:flex-grow">\n              <svg\n                className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600"\n                fill="currentColor"\n                viewBox="0 0 32 32"\n                aria-hidden="true"\n              >\n                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />\n              </svg>\n              <p className="relative">\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias\n                molestiae. Numquam corrupti in laborum sed rerum et corporis.\n              </p>\n            </div>\n            <footer className="mt-8">\n              <div className="flex items-start">\n                <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">\n                  <img\n                    className="h-12 w-12 rounded-full"\n                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"\n                    alt=""\n                  />\n                </div>\n                <div className="ml-4">\n                  <div className="text-base font-medium text-white">Judith Black</div>\n                  <div className="text-base font-medium text-indigo-200">CEO, Tuple</div>\n                </div>\n              </div>\n            </footer>\n          </blockquote>\n        </div>\n        <div className="py-12 px-4 border-t-2 border-indigo-900 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">\n          <div className="md:flex-shrink-0">\n            <img\n              className="h-12"\n              src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"\n              alt="Workcation"\n            />\n          </div>\n          <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">\n            <div className="relative text-lg font-medium text-white md:flex-grow">\n              <svg\n                className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600"\n                fill="currentColor"\n                viewBox="0 0 32 32"\n              >\n                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />\n              </svg>\n              <p className="relative">\n                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias\n                molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente\n                alias molestiae.\n              </p>\n            </div>\n            <footer className="mt-8">\n              <div className="flex items-start">\n                <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">\n                  <img\n                    className="h-12 w-12 rounded-full"\n                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"\n                    alt=""\n                  />\n                </div>\n                <div className="ml-4">\n                  <div className="text-base font-medium text-white">Joseph Rodriguez</div>\n                  <div className="text-base font-medium text-indigo-200">CEO, Workcation</div>\n                </div>\n              </div>\n            </footer>\n          </blockquote>\n        </div>\n      </div>\n    </section>\n  )\n}\n',
    },
    {
      id: 13,
      category: "Testimonials",
      name: "Testimonial-simple-centered",
      preview: "https://i.ibb.co/0nQqZ3r/testimonial-1.png",
      template:
        'export default function Testemonial() {\n  return (\n    <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">\n      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\n        <svg\n          className="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2"\n          width={404}\n          height={404}\n          fill="none"\n          viewBox="0 0 404 404"\n          role="img"\n          aria-labelledby="svg-workcation"\n        >\n          <title id="svg-workcation">Workcation</title>\n          <defs>\n            <pattern\n              id="ad119f34-7694-4c31-947f-5c9d249b21f3"\n              x={0}\n              y={0}\n              width={20}\n              height={20}\n              patternUnits="userSpaceOnUse"\n            >\n              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />\n            </pattern>\n          </defs>\n          <rect width={404} height={404} fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)" />\n        </svg>\n\n        <div className="relative">\n          <img\n            className="mx-auto h-8"\n            src="https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg"\n            alt="Workcation"\n          />\n          <blockquote className="mt-10">\n            <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">\n              <p>\n                &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente\n                alias molestiae. Numquam corrupti in laborum sed rerum et corporis.&rdquo;\n              </p>\n            </div>\n            <footer className="mt-8">\n              <div className="md:flex md:items-center md:justify-center">\n                <div className="md:flex-shrink-0">\n                  <img\n                    className="mx-auto h-10 w-10 rounded-full"\n                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"\n                    alt=""\n                  />\n                </div>\n                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">\n                  <div className="text-base font-medium text-gray-900">jay Leno</div>\n\n                  <svg className="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">\n                    <path d="M11 0h3L9 20H6l5-20z" />\n                  </svg>\n\n                  <div className="text-base font-medium text-gray-500">CEO, Sudopers</div>\n                </div>\n              </div>\n            </footer>\n          </blockquote>\n        </div>\n      </div>\n    </section>\n  )\n}\n',
    },
    {
      id: 14,
      category: "Testimonials",
      name: "Testimonial-large-avatar",
      preview: "https://i.ibb.co/0nQqZ3r/testimonial-1.png",
      template:
        'export default function Testimonial() {\n  return (\n    <section className="bg-white overflow-hidden">\n      <div className="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">\n        <svg\n          className="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden"\n          width={784}\n          height={404}\n          fill="none"\n          viewBox="0 0 784 404"\n          aria-hidden="true"\n        >\n          <defs>\n            <pattern\n              id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"\n              x={0}\n              y={0}\n              width={20}\n              height={20}\n              patternUnits="userSpaceOnUse"\n            >\n              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />\n            </pattern>\n          </defs>\n          <rect width={784} height={404} fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)" />\n        </svg>\n\n        <svg\n          className="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2"\n          width={404}\n          height={784}\n          fill="none"\n          viewBox="0 0 404 784"\n          aria-hidden="true"\n        >\n          <defs>\n            <pattern\n              id="56409614-3d62-4985-9a10-7ca758a8f4f0"\n              x={0}\n              y={0}\n              width={20}\n              height={20}\n              patternUnits="userSpaceOnUse"\n            >\n              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />\n            </pattern>\n          </defs>\n          <rect width={404} height={784} fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)" />\n        </svg>\n\n        <div className="relative lg:flex lg:items-center">\n          <div className="hidden lg:block lg:flex-shrink-0">\n            <img\n              className="h-64 w-64 rounded-full xl:h-80 xl:w-80"\n              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"\n              alt=""\n            />\n          </div>\n\n          <div className="relative lg:ml-10">\n            <svg\n              className="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-200 opacity-50"\n              stroke="currentColor"\n              fill="none"\n              viewBox="0 0 144 144"\n              aria-hidden="true"\n            >\n              <path\n                strokeWidth={2}\n                d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"\n              />\n            </svg>\n            <blockquote className="relative">\n              <div className="text-2xl leading-9 font-medium text-gray-900">\n                <p>\n                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias\n                  molestiae. Numquam corrupti in laborum sed rerum et corporis.\n                </p>\n              </div>\n              <footer className="mt-8">\n                <div className="flex">\n                  <div className="flex-shrink-0 lg:hidden">\n                    <img\n                      className="h-12 w-12 rounded-full"\n                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"\n                      alt=""\n                    />\n                  </div>\n                  <div className="ml-4 lg:ml-0">\n                    <div className="text-base font-medium text-gray-900">Doremon</div>\n                    <div className="text-base font-medium text-indigo-600">CEO, TvAshi</div>\n                  </div>\n                </div>\n              </footer>\n            </blockquote>\n          </div>\n        </div>\n      </div>\n    </section>\n  )\n}\n',
    },
  ],
  Logoclouds: [
    {
      id: 15,
      category: "logoclouds",
      name: "logoclouds-off-white-grid",
      preview:
        "https://i.postimg.cc/gkL1B5c8/Screenshot-from-2022-10-30-01-50-28.png",
      template:
        'export default function Logoclouds() {\n  return (\n    <div className="bg-white">\n      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">\n        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">\n          Trusted by over 5 very average small businesses\n        </p>\n        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">\n          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">\n            <img\n              className="max-h-12"\n              src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"\n              alt="Workcation"\n            />\n          </div>\n          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">\n            <img className="max-h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />\n          </div>\n          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">\n            <img className="max-h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />\n          </div>\n          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">\n            <img className="max-h-12" src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg" alt="Laravel" />\n          </div>\n          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">\n            <img\n              className="max-h-12"\n              src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"\n              alt="StaticKit"\n            />\n          </div>\n          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">\n            <img\n              className="max-h-12"\n              src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg"\n              alt="Statamic"\n            />\n          </div>\n        </div>\n      </div>\n    </div>\n  )\n}\n',
    },
    {
      id: 16,
      category: "logoclouds",
      name: "logoclouds-simple-with-heading",
      preview:
        "https://i.postimg.cc/QtMygYnB/Screenshot-from-2022-10-30-01-51-06.png",
      template:
        'export default function Logoclouds() {\n  return (\n    <div className="bg-indigo-200 bg-opacity-25">\n      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">\n        <div className="lg:grid lg:grid-cols-2 lg:gap-8">\n          <h2 className="max-w-md mx-auto text-3xl font-extrabold text-indigo-900 text-center lg:max-w-xl lg:text-left">\n            The world\'s most innovative companies use Workflow\n          </h2>\n          <div className="flow-root self-center mt-8 lg:mt-0">\n            <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">\n              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">\n                <img\n                  className="h-12"\n                  src="https://tailwindui.com/img/logos/workcation-logo-indigo-900.svg"\n                  alt="Workcation"\n                />\n              </div>\n              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">\n                <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-indigo-900.svg" alt="Tuple" />\n              </div>\n              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">\n                <img className="h-12" src="https://tailwindui.com/img/logos/level-logo-indigo-900.svg" alt="Level" />\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  )\n}\n',
    },
    {
      id: 17,
      category: "logoclouds",
      name: "logoclouds-simple-with-heading-brand",
      preview:
        "https://i.postimg.cc/PxFFSbBS/Screenshot-from-2022-10-30-01-50-47.png",
      template:
        'export default function Logoclouds() {\n  return (\n    <div className="bg-indigo-700">\n      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">\n        <h2 className="text-3xl font-extrabold text-white">The world\'s most innovative companies use Workflow</h2>\n        <div className="flow-root mt-8 lg:mt-10">\n          <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">\n            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">\n              <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg" alt="Tuple" />\n            </div>\n            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">\n              <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-indigo-300.svg" alt="Mirage" />\n            </div>\n            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">\n              <img\n                className="h-12"\n                src="https://tailwindui.com/img/logos/statickit-logo-indigo-300.svg"\n                alt="StaticKit"\n              />\n            </div>\n            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">\n              <img\n                className="h-12"\n                src="https://tailwindui.com/img/logos/transistor-logo-indigo-300.svg"\n                alt="Transistor"\n              />\n            </div>\n            <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4">\n              <img\n                className="h-12"\n                src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"\n                alt="Workcation"\n              />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  )\n}\n',
    },
  ],
  Empty_State: [
    {
      id: 15,
      category: "Empty State",
      name: "Empty State-add-button",
      preview: "https://i.ibb.co/0nQqZ3r/testimonial-1.png",
      template:
        'import { PlusIcon } from \'@heroicons/react/24/solid\'\nimport { FolderPlusIcon } from \'@heroicons/react/24/outline\'\n\nexport default function Empty() {\n  return (\n    <div className="text-center">\n    <FolderPlusIcon\n        className="mx-auto h-12 w-12 text-gray-400"\n        aria-hidden="true"\n      />\n      <h3 className="mt-2 text-sm font-medium text-gray-900">No projects</h3>\n      <p className="mt-1 text-sm text-gray-500">Get started by creating a new project.</p>\n      <div className="mt-6">\n        <button\n          type="button"\n          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"\n        >\n          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />\n          New Project\n        </button>\n      </div>\n    </div>\n  )\n}\n',
    },
    {
      id: 16,
      category: "Empty State",
      name: "Empty State-border",
      preview: "https://i.ibb.co/0nQqZ3r/testimonial-1.png",
      template:
        'export default function Empty() {\n  return (\n    <button\n      type="button"\n      className="relative block w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"\n    >\n      <svg\n        className="mx-auto h-12 w-12 text-gray-400"\n        xmlns="http://www.w3.org/2000/svg"\n        stroke="currentColor"\n        fill="none"\n        viewBox="0 0 48 48"\n        aria-hidden="true"\n      >\n        <path\n          strokeLinecap="round"\n          strokeLinejoin="round"\n          strokeWidth={2}\n          d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"\n        />\n      </svg>\n      <span className="mt-2 block text-sm font-medium text-gray-900">Create a new database</span>\n    </button>\n  )\n}\n',
    },
  ],
};

// const components2 = [
//   {
//     id: 5,
//     category: "404",
//     name: "404-simple",
//     preview:
//       "https://res.cloudinary.com/dyl08vtii/image/upload/v1667067224/tws/buttons.01-primary-large.png",
//     template:
//       'export default function 404() {\n  return (\n    <>\n      {/*\n        This example requires updating your template:\n\n        ```\n        <html class="h-full">\n        <body class="h-full">\n        ```\n      */}\n      <div className="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">\n        <div className="max-w-max mx-auto">\n          <main className="sm:flex">\n            <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">404</p>\n            <div className="sm:ml-6">\n              <div className="sm:border-l sm:border-gray-200 sm:pl-6">\n                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found</h1>\n                <p className="mt-1 text-base text-gray-500">Please check the URL in the address bar and try again.</p>\n              </div>\n              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">\n                <a\n                  href="#"\n                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"\n                >\n                  Go back home\n                </a>\n                <a\n                  href="#"\n                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"\n                >\n                  Contact support\n                </a>\n              </div>\n            </div>\n          </main>\n        </div>\n      </div>\n    </>\n  )\n}',
//   },
//   {
//     id: 6,
//     category: "404",
//     name: "404-split-image",
//     preview:
//       "https://res.cloudinary.com/dyl08vtii/image/upload/v1667067224/tws/buttons.01-primary-large.png",
//     template:
//       'export default function 404() {\n  return (\n    <>\n      <div className="bg-white min-h-full flex flex-col lg:relative">\n        <div className="flex-grow flex flex-col">\n          <main className="flex-grow flex flex-col bg-white">\n            <div className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">\n              <div className="flex-shrink-0 pt-10 sm:pt-16">\n                <a href="/" className="inline-flex">\n                  <span className="sr-only">Workflow</span>\n                  <img\n                    className="h-12 w-auto"\n                    src="https://res.cloudinary.com/dyl08vtii/image/upload/v1651259046/logo_l2yxf3.svg"\n                    alt=""\n                  />\n                </a>\n              </div>\n              <div className="flex-shrink-0 my-auto py-16 sm:py-32">\n                <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">404 error</p>\n                <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">\n                  Page not found\n                </h1>\n                <p className="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>\n                <div className="mt-6">\n                  <a href="#" className="text-base font-medium text-indigo-600 hover:text-indigo-500">\n                    Go back home<span aria-hidden="true"> &rarr;</span>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </main>\n          <footer className="flex-shrink-0 bg-gray-50">\n            <div className="mx-auto max-w-7xl w-full px-4 py-16 sm:px-6 lg:px-8">\n              <nav className="flex space-x-4">\n                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">\n                  Contact Support\n                </a>\n                <span className="inline-block border-l border-gray-300" aria-hidden="true" />\n                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">\n                  Status\n                </a>\n                <span className="inline-block border-l border-gray-300" aria-hidden="true" />\n                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">\n                  Twitter\n                </a>\n              </nav>\n            </div>\n          </footer>\n        </div>\n        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">\n          <img\n            className="absolute inset-0 h-full w-full object-cover"\n            src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80"\n            alt=""\n          />\n        </div>\n      </div>\n    </>\n  )\n}\n',
//   },
//   {
//     id: 1,
//     category: "button",
//     name: "button-primary-small",
//     preview:
//       "https://res.cloudinary.com/dyl08vtii/image/upload/v1667059900/tws/buttons.01-primary-buttons.png",
//     template:
//       '<button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Button text </button>',
//   },
//   {
//     id: 2,
//     category: "button",
//     name: "button-primary-medium",
//     preview:
//       "https://res.cloudinary.com/dyl08vtii/image/upload/v1667067003/tws/buttons.01-primary-small.png",
//     template:
//       '<button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Button text </button>',
//   },
//   {
//     id: 3,
//     category: "button",
//     name: "button-primary-base",
//     preview:
//       "https://res.cloudinary.com/dyl08vtii/image/upload/v1667067127/tws/buttons.01-primary-medium.png",
//     template:
//       '<button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Button text </button>',
//   },
//   {
//     id: 4,
//     category: "button",
//     name: "button-primary-large",
//     preview:
//       "https://res.cloudinary.com/dyl08vtii/image/upload/v1667067224/tws/buttons.01-primary-large.png",
//     template:
//       '<button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Button text </button>',
//   },
//   {
//     id: 3,
//     category: "input",
//     name: "input-primary-base",
//     preview:
//       "https://tailwindui.com/img/components/buttons.01-primary-buttons-xl.png",
//     template:
//       '<button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Button text </button>',
//   },
//   {
//     id: 4,
//     category: "input",
//     name: "input-primary-large",
//     preview:
//       "https://tailwindui.com/img/components/buttons.01-primary-buttons-xl.png",
//     template:
//       '<button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Button text </button>',
//   },
// ];
const allComponents = Object.keys(components).flatMap(category => components?.[category])
// const allComponentsByFramework = framework => Object.keys(components).flatMap(category => components?.[category].filter(component => component.framework === framework))
// const filterByFramework = (components, framework) => Object.keys(components).flatMap(category => components?.[category].filter(component => component.framework === framework))
const debounce =
  (fn, delay, timeout = 0) =>
  (args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(args), delay);
  };

const vscode = acquireVsCodeApi();
const container = document.getElementById("content");
const searchEl = document.getElementById("search");
const frameworkEl = document.getElementById("framework");

searchEl.addEventListener("keyup", debounce(handleSearch, 500));
frameworkEl.addEventListener("change", debounce(handleFramework, 500));

function renderComponents(components, container) {
  if (components.length <= 0) {
    container.innerHTML = "No component matches the search!!";
  }

  allComponents
  // .filter(component => {
  //   // if (!component.framework) return true;
  //   if (component.framework === framework || component.framework === 'all' || component.framework === '') return true;
  //   else return false
  // })
  .map((component) => {
    
    const div = document.createElement("li");
    div.id = `trigger-${component.id}`;
    div.className = "trigger";

    const imgEl = document.createElement("img");
    imgEl.src = component.preview;
    imgEl.classList.add("img");

    const title = document.createElement("h3");
    title.innerText = component.name;
    title.className = "title";

    div.append(imgEl, title);

    div.addEventListener("click", () => {
      vscode.postMessage({
        command: "INSERT",
        data: {
          message: component.template,
        },
      });
    });

    container.append(div);
  });
}

function renderCategory(components) {
  container.innerHTML = "";

  Object.keys(components).forEach(({category}) => {
    const categoryContainer = document.createElement("ul");
    container.append(categoryContainer);

    const categoryTitle = document.createElement("h3");
    categoryTitle.innerText = `${category}`;
    categoryTitle.className = "category-title";
    categoryContainer.appendChild(categoryTitle);

    renderComponents(components[category], categoryContainer);
  });
}
// function renderCategory(components) {
//   container.innerHTML = "";

//   Object.keys(components).forEach((component) => {
//     const categoryContainer = document.createElement("ul");
//     container.append(categoryContainer);

//     const categoryTitle = document.createElement("h3");
//     categoryTitle.innerText = `${component.category}`;
//     categoryTitle.className = "category-title";
//     categoryContainer.appendChild(categoryTitle);

//     renderComponents(components.filter(c => c.category === component.category), categoryContainer);
//   });
// }

function renderSearchResults(searchResults) {
  
  container.innerHTML = '';
  const searchResultsContainer = document.createElement("ul");
  container.append(searchResultsContainer);
  renderComponents(searchResults, searchResultsContainer);
}

// function renderFilterResults(filterResults) {
//   container.innerHTML = "";
//   const filterResultsContainer = document.createElement("ul");
//   container.append(filterResultsContainer);
//   renderComponents(filterResults, filterResultsContainer);
// }

async function getSearchResults(query, selectedFramework) {
	const looseIncludes = (string, searchString) => string.toLowerCase().includes(searchString.toLowerCase())
  let filtered = allComponents.filter((component) => (looseIncludes(component?.name, query) || looseIncludes(component?.category, query) || looseIncludes(component?.template, query))
                                                  && (looseIncludes(component.framework, selectedFramework) || !component.hasOwnProperty('framework') || looseIncludes(selectedFramework, 'all'))
                                                  );
  // .filter((component) => 

  // filtered = filtered.filter((component) => 

  renderSearchResults(filtered, selectedFramework);
}

async function getFilterResults(query) {
	const looseIncludes = (string, query) => string.toLowerCase().includes(query.toLowerCase())
  let filtered = allComponents.filter((component) => looseIncludes(component.framework, query) || looseIncludes(selectedFramework, 'all'));

  renderSearchResults(filtered);
}

function handleSearch(e) {
  const search = e.target.value;

  if (search) {
    getSearchResults(search);
  } else {
    renderCategory(allComponents);
  }
}

function handleFramework(e) {
  const selectedFramework = e.target.value;
  
  if (!!selectedFramework && selectedFramework !== 'all') {
    getFilterResults(selectedFramework)
  }
  // else if (searchEl.value) {
  //   getSearchResults(searchEl.value)
  // }
  else if (selectedFramework === 'all') {
    renderCategory(allComponents);
  }
}

function init() {
  getSearchResults(searchEl.value, frameworkEl.value)
  // renderCategory(allComponents);
}

init();
