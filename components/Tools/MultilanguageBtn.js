/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import React from "react";
import ReactCountryFlag from "react-country-flag";
import { useRouter } from "next/router";
import Link from "next/link";
export default function MultilanguageBtn() {
  const router = useRouter();
  return (
    <div className="text-right inline w-full">
      <Menu as="div" className="relative inline-block text-left z-50">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md transition-all hover:text-main px-4 py-2 text-sm hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <span className=" uppercase">{router.locale}</span>
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute px-1 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {router.locales.map((locale) => (
                <Menu.Item key={locale}>
                  <Link
                    href={router.asPath}
                    locale={locale}
                    className={
                      "group cursor-pointer flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-color_10 font-semibold"
                    }
                  >
                    <a className=" block my-2">
                    <ReactCountryFlag
                      countryCode={locale}
                      svg
                      style={{
                        width: "2em",
                        height: "2em",
                      }}
                      className="mx-2"
                      title={locale}
                    />
                    {locale}
                    </a>
                  </Link>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
