export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Easy Buy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};