module.exports = () => `
<!--
This example requires some changes to your config:


// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    // ...
    require('@tailwindcss/aspect-ratio'),
  ],
}

-->
<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
      <div class="overflow-hidden rounded-lg bg-indigo-700 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
        <div class="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div class="lg:self-center">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <span class="block">Ready to dive in? Buba Sparx</span>
              <span class="block">Start your free trial today.</span>
            </h2>
            <p class="mt-4 text-lg leading-6 text-indigo-200">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.</p>
            <a href="#" class="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 shadow hover:bg-indigo-50">Sign up for free</a>
          </div>
        </div>
        <div class="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1">
          <img class="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20" src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg" alt="App screenshot" />
        </div>
      </div>
    </div>
  </div>
</template>`
module.exports = () => `
<!--
This example requires some changes to your config:


// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    // ...
    require('@tailwindcss/aspect-ratio'),
  ],
}

-->
<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
      <div class="overflow-hidden rounded-lg bg-indigo-700 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
        <div class="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div class="lg:self-center">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <span class="block">Ready to dive in? Buba Sparx</span>
              <span class="block">Start your free trial today.</span>
            </h2>
            <p class="mt-4 text-lg leading-6 text-indigo-200">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.</p>
            <a href="#" class="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 shadow hover:bg-indigo-50">Sign up for free</a>
          </div>
        </div>
        <div class="aspect-w-5 aspect-h-3 -mt-6 md:aspect-w-2 md:aspect-h-1">
          <img class="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20" src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg" alt="App screenshot" />
        </div>
      </div>
    </div>
  </div>
</template>`