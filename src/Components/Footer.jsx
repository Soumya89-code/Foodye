import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <h2 className="text-3xl font-bold text-yellow-400">
              Foodey
            </h2>
            <p className="mt-4 text-gray-400">
              Discover delicious recipes from around the world.
              Cook smarter, eat better, and share your culinary
              journey with us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-yellow-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/recipes" className="hover:text-yellow-400">
                  Recipes
                </a>
              </li>
              <li>
                <a href="/categories" className="hover:text-yellow-400">
                  Categories
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Categories
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>Breakfast</li>
              <li>Lunch</li>
              <li>Dinner</li>
              <li>Desserts</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Newsletter
            </h3>

            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-l-lg text-black outline-none"
              />
              <button className="bg-yellow-400 text-black px-5 rounded-r-lg font-semibold hover:bg-yellow-500">
                Join
              </button>
            </div>

            <p className="text-gray-400 mt-3 text-sm">
              Get the latest recipes delivered to your inbox.
            </p>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Foodey. All rights reserved.
          </p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-400">
              Facebook
            </a>
            <a href="#" className="hover:text-yellow-400">
              Instagram
            </a>
            <a href="#" className="hover:text-yellow-400">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;