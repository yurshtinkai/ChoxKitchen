import React, { useState } from 'react';
import { 
  Dialog, 
  DialogPanel, 
  DialogTitle, 
  TransitionRoot, 
  TransitionChild,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels
} from '@headlessui/react';
import { 
  ChevronDownIcon, 
  Bars3Icon, 
  XMarkIcon,
  UserIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  HeartIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline';

// Example Modal Component
export const ExampleModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold py-3 px-6 rounded-full shadow-lg hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300"
      >
        Open Modal
      </button>

      <TransitionRoot show={isOpen} as={React.Fragment}>
        <Dialog className="relative z-50" onClose={setIsOpen}>
          <TransitionChild
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <DialogTitle as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    CHOX Kitchen Modal
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      This is an example modal using Headless UI components with your black and gold theme.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-gradient-to-r from-yellow-500 to-yellow-600 px-4 py-2 text-sm font-medium text-black hover:from-yellow-400 hover:to-yellow-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Got it!
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    </>
  );
};

// Example Dropdown Menu Component
export const ExampleDropdown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        Options
        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
      </MenuButton>

      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <MenuItem>
              {({ active }) => (
                <a
                  href="#"
                  className={`${
                    active ? 'bg-yellow-50 text-yellow-900' : 'text-gray-700'
                  } group flex items-center px-4 py-2 text-sm`}
                >
                  <UserIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-yellow-400" aria-hidden="true" />
                  Your Profile
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  href="#"
                  className={`${
                    active ? 'bg-yellow-50 text-yellow-900' : 'text-gray-700'
                  } group flex items-center px-4 py-2 text-sm`}
                >
                  <Cog6ToothIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-yellow-400" aria-hidden="true" />
                  Settings
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  href="#"
                  className={`${
                    active ? 'bg-yellow-50 text-yellow-900' : 'text-gray-700'
                  } group flex items-center px-4 py-2 text-sm`}
                >
                  <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-yellow-400" aria-hidden="true" />
                  Sign out
                </a>
              )}
            </MenuItem>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
};

// Example Accordion Component
export const ExampleAccordion = () => {
  const faqs = [
    {
      question: "What makes CHOX Kitchen special?",
      answer: "We use only the freshest ingredients and our expert chefs prepare every dish with passion and precision."
    },
    {
      question: "How fast is your delivery?",
      answer: "We deliver within 30 minutes or less with our express delivery service."
    },
    {
      question: "Do you offer vegetarian options?",
      answer: "Yes! We have a wide variety of vegetarian and vegan dishes to choose from."
    }
  ];

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg">
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <Disclosure key={index}>
            <DisclosureButton className="flex w-full justify-between rounded-lg bg-yellow-50 px-4 py-2 text-left text-sm font-medium text-yellow-900 hover:bg-yellow-100 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500/75">
              <span>{faq.question}</span>
              <ChevronDownIcon className={`h-5 w-5 text-yellow-500 transition-transform duration-200 ui-open:rotate-180`} />
            </DisclosureButton>
            <DisclosurePanel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              {faq.answer}
            </DisclosurePanel>
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

// Example Tabs Component
export const ExampleTabs = () => {
  const categories = [
    { name: 'Appetizers', content: 'Delicious starters to begin your meal' },
    { name: 'Main Courses', content: 'Hearty main dishes prepared by our expert chefs' },
    { name: 'Desserts', content: 'Sweet treats to end your meal perfectly' },
    { name: 'Beverages', content: 'Refreshing drinks to complement your food' }
  ];

  return (
    <div className="w-full max-w-md mx-auto">
      <TabGroup>
        <TabList className="flex space-x-1 rounded-xl bg-yellow-900/20 p-1">
          {categories.map((category) => (
            <Tab
              key={category.name}
              className={({ selected }) =>
                `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-yellow-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-yellow-400 focus:outline-none focus:ring-2 ${
                  selected
                    ? 'bg-white shadow text-yellow-900'
                    : 'text-yellow-600 hover:bg-white/[0.12] hover:text-white'
                }`
              }
            >
              {category.name}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="mt-2">
          {categories.map((category, idx) => (
            <TabPanel
              key={idx}
              className="rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-yellow-400 focus:outline-none focus:ring-2"
            >
              <p className="text-gray-500">{category.content}</p>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default {
  ExampleModal,
  ExampleDropdown,
  ExampleAccordion,
  ExampleTabs
};

