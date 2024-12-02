function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Portfolio. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 