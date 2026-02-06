function Footer() {
  return (
    <footer className="bg-neutral-950 text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-white">JobSeekers</h1>
          <p className="mt-4 text-sm leading-relaxed">
            Find your dream job, connect with top recruiters, and build your
            future with confidence.
          </p>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-white font-semibold mb-4">Company</h2>
          <ul className="space-y-3 text-sm">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/jobs" className="hover:text-white">Jobs</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-white font-semibold mb-4">Resources</h2>
          <ul className="space-y-3 text-sm">
            <li><a href="/help" className="hover:text-white">Help Center</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-white font-semibold mb-4">Stay Updated</h2>
          <p className="text-sm mb-4">
            Subscribe to get the latest job updates.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-sm bg-neutral-900 border border-white/10 rounded-l-md focus:outline-none focus:border-purple-500"
            />
            <button className="px-4 bg-purple-600 hover:bg-purple-700 text-sm rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-white/60">
        © {new Date().getFullYear()} JobSeekers. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
