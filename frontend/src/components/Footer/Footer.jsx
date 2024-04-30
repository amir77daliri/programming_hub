const Footer = () => {
  return (
    <footer className="bg-white text-black pt-6 pb-0 px-4 mt-10 flex-1 select-none">
      <div className="max-w-7xl mx-auto mt-10">
        <div style={{maxWidth: '900px'}} className="mx-auto">
          <div className="flex flex-row gap-3 items-center justify-between mx-auto">
            <div className="flex flex-col ml-4">
              <h2 className="text-xl font-semibold mb-4">منوی اصلی</h2>
              <ul className="flex flex-col space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-400">
                    صفحه اصلی
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    درباره ما
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    خدمات
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    تماس با ما
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold mb-4">تماس با ما</h2>
              <ul className="flex flex-col space-y-2">
                <li>آدرس: تهران، خیابان اصلی، کوچه فرعی</li>
                <li>تلفن: ۰۲۱-۲۲۲۲۲۲۲۲</li>
                <li>ایمیل: example@example.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p>&copy; 2024  تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
