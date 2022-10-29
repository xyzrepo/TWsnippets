const components = {
  Button: [
    {
      id: 1,
      category: 'button',
      name: 'button-primary-small',
      preview:
        'https://res.cloudinary.com/dyl08vtii/image/upload/v1667059900/tws/buttons.01-primary-buttons.png',
      jsx: '<button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Button text </button>',
    },
    {
      id: 2,
      category: 'button',
      name: 'button-primary-medium',
      preview:
        'https://res.cloudinary.com/dyl08vtii/image/upload/v1667067003/tws/buttons.01-primary-small.png',
      jsx: '<button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Button text </button>',
    },
    {
      id: 3,
      category: 'button',
      name: 'button-primary-base',
      preview:
        'https://res.cloudinary.com/dyl08vtii/image/upload/v1667067127/tws/buttons.01-primary-medium.png',
      jsx: '<button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Button text </button>',
    },
    {
      id: 4,
      category: 'button',
      name: 'button-primary-large',
      preview:
        'https://res.cloudinary.com/dyl08vtii/image/upload/v1667067224/tws/buttons.01-primary-large.png',
      jsx: '<button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Button text </button>',
    },
  ],
  Input: [
    {
      id: 3,
      category: 'input',
      name: 'input-primary-base',
      preview:
        'https://tailwindui.com/img/components/buttons.01-primary-buttons-xl.png',
      jsx: '<button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Button text </button>',
    },
    {
      id: 4,
      category: 'input',
      name: 'input-primary-large',
      preview:
        'https://tailwindui.com/img/components/buttons.01-primary-buttons-xl.png',
      jsx: '<button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Button text </button>',
    },
  ],
  404: [
    {
      id: 5,
      category: '404',
      name: '404-simple',
      preview:
        'https://res.cloudinary.com/dyl08vtii/image/upload/v1667067224/tws/buttons.01-primary-large.png',
      jsx: 'export default function 404() {\n  return (\n    <>\n      {/*\n        This example requires updating your template:\n\n        ```\n        <html class="h-full">\n        <body class="h-full">\n        ```\n      */}\n      <div className="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">\n        <div className="max-w-max mx-auto">\n          <main className="sm:flex">\n            <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">404</p>\n            <div className="sm:ml-6">\n              <div className="sm:border-l sm:border-gray-200 sm:pl-6">\n                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found</h1>\n                <p className="mt-1 text-base text-gray-500">Please check the URL in the address bar and try again.</p>\n              </div>\n              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">\n                <a\n                  href="#"\n                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"\n                >\n                  Go back home\n                </a>\n                <a\n                  href="#"\n                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"\n                >\n                  Contact support\n                </a>\n              </div>\n            </div>\n          </main>\n        </div>\n      </div>\n    </>\n  )\n}',
    },
    {
      id: 6,
      category: '404',
      name: '404-split-image',
      preview:
        'https://res.cloudinary.com/dyl08vtii/image/upload/v1667067224/tws/buttons.01-primary-large.png',
      jsx: 'export default function 404() {\n  return (\n    <>\n      <div className="bg-white min-h-full flex flex-col lg:relative">\n        <div className="flex-grow flex flex-col">\n          <main className="flex-grow flex flex-col bg-white">\n            <div className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">\n              <div className="flex-shrink-0 pt-10 sm:pt-16">\n                <a href="/" className="inline-flex">\n                  <span className="sr-only">Workflow</span>\n                  <img\n                    className="h-12 w-auto"\n                    src="https://res.cloudinary.com/dyl08vtii/image/upload/v1651259046/logo_l2yxf3.svg"\n                    alt=""\n                  />\n                </a>\n              </div>\n              <div className="flex-shrink-0 my-auto py-16 sm:py-32">\n                <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">404 error</p>\n                <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">\n                  Page not found\n                </h1>\n                <p className="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>\n                <div className="mt-6">\n                  <a href="#" className="text-base font-medium text-indigo-600 hover:text-indigo-500">\n                    Go back home<span aria-hidden="true"> &rarr;</span>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </main>\n          <footer className="flex-shrink-0 bg-gray-50">\n            <div className="mx-auto max-w-7xl w-full px-4 py-16 sm:px-6 lg:px-8">\n              <nav className="flex space-x-4">\n                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">\n                  Contact Support\n                </a>\n                <span className="inline-block border-l border-gray-300" aria-hidden="true" />\n                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">\n                  Status\n                </a>\n                <span className="inline-block border-l border-gray-300" aria-hidden="true" />\n                <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">\n                  Twitter\n                </a>\n              </nav>\n            </div>\n          </footer>\n        </div>\n        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">\n          <img\n            className="absolute inset-0 h-full w-full object-cover"\n            src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80"\n            alt=""\n          />\n        </div>\n      </div>\n    </>\n  )\n}\n',
    },
  ],
}

const vscode = acquireVsCodeApi()

function renderComponent(components) {
  const container = document.getElementById('content')
  container.innerHTML = ''

  // if (Object == undefined || Object.entries(components).length <= 0) {
  //   container.innerHTML = 'No component matches the search!!'
  // }

  Object.keys(components).forEach(category => {
    const categoryContainer = document.createElement('ul')
    const categoryTitle = document.createElement('h3')
    categoryTitle.innerText = category
    categoryTitle.className = 'category-title'
    categoryContainer.appendChild(categoryTitle)
    // categoryContainer.className = ''

    container.append(categoryContainer)

    components[category].map(component => {
      const div = document.createElement('li')
      div.id = `trigger-${component.id}`
      div.className = 'trigger'

      const imgEl = document.createElement('img')
      imgEl.src = component.preview
      imgEl.classList.add('img')

      const title = document.createElement('h3')
      title.innerText = component.name
      title.className = 'title'

      div.append(imgEl, title)

      div.addEventListener('click', () => {
        vscode.postMessage({
          command: 'INSERT',
          message: component.jsx,
        })
      })

      categoryTitle.append(div)
    })
  })
}

function he() {
  renderComponent(components)

  function handleSearch(e) {
    const search = e.target.value
    Object.keys(components).forEach(category => {
      const categoryArr = components[category]

      const filterd = categoryArr.some(item => {
        return item.name.includes('button')
      })

      console.log(filterd)
    })
    const filtered = Object.keys(components).forEach(category => {
      console.log('CATEEGORY', category)
      components[category].filter(component => {
        console.log('COMPONENT', component)
        return component.name.includes(search)
      })
    })

    // const filtered = components.filter(component => {
    //   return component.name.includes(search)
    // })
    renderComponent(filtered)
  }

  const searchEl = document.getElementById('search')
  searchEl.addEventListener('keyup', handleSearch)
}

he()
