
const Footer = () => {
  return (
    <footer className="mt-20 mx-5 py-5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
      <p className="text-center md:text-left">
        © {new Date().getFullYear()} AFRIXA. All rights reserved.
      </p>
      <div className="flex gap-4 flex-wrap justify-center md:justify-end">
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Cookies Settings</p>
      </div>
    </footer>
  )
}

export default Footer
