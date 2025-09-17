export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-8 mt-16">
      <div>
        <span className="block text-gray-600 text-sm text-left pl-4">
          &copy; {new Date().getFullYear()} Wonseok Lee. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
